# HOME SERVER BUILD SPEC
## RTS Tech Solutions — Internal Infrastructure Document
### Version 1.0 — Confidential

---

## PURPOSE

This document covers the complete specification for the RTS Tech Solutions home office server setup. This infrastructure supports:
- AUS Data Removal — client scan data, reports, secure storage
- Sovereign Tank — AI tooling, automation, client assets
- Personal data sovereignty — closed loop, no cloud dependency

---

## HARDWARE LIST

### Core Server
| Item | Recommended Model | Approximate Cost | Purpose |
|---|---|---|---|
| NAS Device | Synology DS423+ (4-bay) | ~$700 | Primary server, Docker, file storage |
| Hard Drives | 2x WD Red Plus 4TB (RAID 1) | ~$200 | Redundant storage — one drive fails, data safe |
| SSD Cache | 1x Samsung 870 EVO 500GB | ~$80 | Speeds up NAS performance significantly |
| UPS | APC Back-UPS 700VA | ~$150 | Power protection — graceful shutdown on outage |

### Network Hardware
| Item | Recommended Model | Approximate Cost | Purpose |
|---|---|---|---|
| Firewall | Protectli VP2420 + pfSense | ~$450 | Enterprise-grade firewall, full control |
| Managed Switch | TP-Link TL-SG108E (8-port) | ~$55 | VLAN support, traffic segregation |
| WiFi AP | TP-Link EAP670 (WiFi 6) | ~$180 | Separate from router — proper AP |
| Patch cables | Cat6 (assorted lengths) | ~$30 | Clean physical connections |

### Physical Security
| Item | Approximate Cost | Purpose |
|---|---|---|
| Server cabinet / lockbox | ~$200 | Physical containment |
| UPS (above) | ~$150 | Power protection |
| Security camera (internal) | ~$80 | Covers cabinet door |
| Cable locks (Kensington) | ~$30 | Laptop/device theft deterrence |
| USB port blockers | ~$15 | Prevents unauthorised USB access |

### Backup
| Item | Recommended Model | Approximate Cost | Purpose |
|---|---|---|---|
| Offline backup drive | WD My Passport 4TB | ~$120 | Weekly offline backup — stored disconnected |
| Second offline drive | WD My Passport 4TB | ~$120 | Rotated offsite (second location) |

### TOTAL ESTIMATED HARDWARE COST: ~$2,410

---

## NETWORK ARCHITECTURE

```
Internet (NBN)
    └── ISP Modem (BRIDGE MODE ONLY — dumb pipe)
            └── pfSense Firewall (Protectli VP2420)
                    ├── VLAN 10 — TRUSTED WORK (192.168.10.0/24)
                    │       ├── Work laptop
                    │       ├── Work phone
                    │       └── Server access
                    │
                    ├── VLAN 20 — SERVER (192.168.20.0/24)
                    │       └── Synology NAS
                    │           (no direct internet — firewall rules only)
                    │
                    ├── VLAN 30 — IoT DEVICES (192.168.30.0/24)
                    │       ├── Smart TV
                    │       ├── Cameras
                    │       └── Any smart home devices
                    │           (cannot reach VLAN 10 or 20)
                    │
                    └── VLAN 40 — PERSONAL (192.168.40.0/24)
                            ├── Personal phone
                            ├── Personal laptop
                            └── (isolated from business VLANs)
```

### Key Firewall Rules
- VLAN 10 → VLAN 20: ALLOW (work devices access server)
- VLAN 20 → VLAN 10: DENY (server cannot initiate connections to work devices)
- VLAN 30 → ANY: DENY (IoT completely isolated)
- VLAN 40 → VLAN 10/20: DENY (personal devices cannot reach business)
- ANY → WAN: ALLOW (all VLANs can reach internet except where restricted)
- WAN → ANY: DENY (default deny all inbound — VPN only)

---

## SOFTWARE STACK

All software listed is open source and self-hosted. Zero ongoing subscription cost.

### Operating on Synology NAS (Docker containers)

| Software | Purpose | URL when running |
|---|---|---|
| **Nextcloud** | File storage, client portal, calendar | nextcloud.local |
| **Vaultwarden** | Password manager (Bitwarden compatible) | vault.local |
| **Gitea** | Private code repository | git.local |
| **Uptime Kuma** | Service monitoring and alerting | uptime.local |
| **Portainer** | Docker container management | portainer.local |
| **Nginx Proxy Manager** | Reverse proxy, SSL certificates | npm.local |
| **Paperless-NGX** | Document management, OCR | paperless.local |

### Remote Access
| Software | Purpose | Cost |
|---|---|---|
| **Tailscale** | VPN — zero open ports, WireGuard based | Free (personal/small business) |
| **Synology VPN Server** | Backup VPN option | Free (built into NAS) |

### Security Tools
| Software | Purpose |
|---|---|
| **pfSense** | Firewall, IDS/IPS, traffic logging |
| **Suricata** (pfSense package) | Intrusion detection and prevention |
| **pfBlockerNG** (pfSense package) | DNS blocking, ad/malware protection |
| **Fail2ban** | Blocks IPs after failed login attempts |
| **ClamAV** (Synology built-in) | Antivirus scanning on NAS |

---

## PHYSICAL SECURITY SETUP

### Room Requirements
- Internal room preferred — not sharing external wall with neighbours
- Door: lockable, key stored separately from server key
- No windows preferred — if windows present, frosted or covered
- Climate: adequate ventilation — server generates heat

### Cabinet Setup
```
Cabinet (locked)
    ├── Synology NAS
    ├── pfSense firewall unit
    ├── Managed switch
    ├── UPS (base of cabinet — heavy)
    ├── Patch panel (optional but clean)
    └── Cable management

Stored separately (not in cabinet):
    ├── Offline backup drive (weekly rotation)
    └── Second backup drive (offsite rotation)
```

### Camera Placement
- Camera 1: Covers cabinet door — records any physical access
- Camera 2: Room entry (optional — recommended)
- Footage retained: 30 days minimum
- Alert: Motion detection → phone notification

---

## BACKUP STRATEGY — 3-2-1 RULE

```
3 COPIES of all data
2 DIFFERENT media types  
1 COPY offsite (or offline)
```

### Implementation
| Copy | Location | Type | Frequency |
|---|---|---|---|
| Primary | Synology NAS RAID 1 | Network storage | Live / continuous |
| Secondary | Synology HyperBackup → external USB | USB drive (offline) | Weekly — drive disconnected after |
| Tertiary | Backblaze B2 (encrypted) | Cloud — encrypted before upload | Weekly — optional, low cost |

### Backup Schedule
```
Daily:   Incremental backup — changes only — to NAS internal backup volume
Weekly:  Full backup to offline USB drive — disconnect and store in locked cabinet
Monthly: Verify backup integrity — actually restore a test file to confirm it works
```

### Encryption
- All backups encrypted with AES-256 before writing
- Encryption key stored in Vaultwarden — NOT on the server being backed up
- Key also printed and stored in a physically secure location (safe, bank)

---

## ACCESS CONTROL

### Who Has Access to What
| Person | Access Level | Method |
|---|---|---|
| Chris (owner) | Full admin | Tailscale VPN + SSH key + Synology admin |
| Future staff member | Limited — Nextcloud only | Nextcloud login — no server access |
| Nobody else | None | Default deny |

### Password Policy
- All passwords minimum 20 characters — generated by Vaultwarden
- No password reused across any service
- SSH: key authentication ONLY — password login disabled
- Synology admin account: renamed from 'admin' to custom username
- 2FA enabled on all admin accounts

---

## OPERATIONAL SECURITY — MAINTENANCE SCHEDULE

### Daily (automated — no action required)
```
□ Incremental backup runs (automated)
□ Uptime Kuma checks all services — alerts if down
□ Suricata monitors for intrusion attempts
□ pfBlockerNG blocks malicious DNS requests
```

### Weekly (30 minutes — Sunday recommended)
```
□ Review pfSense firewall logs — anything unusual?
□ Review Suricata alerts — any intrusion attempts?
□ Check Uptime Kuma — all services green?
□ Connect offline backup drive — run backup — disconnect and store
□ Check connected devices on each VLAN — anything unexpected?
□ Review Synology security advisor report
```

### Monthly (1-2 hours)
```
□ Update all Docker containers (Portainer — one click)
□ Update Synology DSM firmware
□ Update pfSense firmware and packages
□ Update WiFi AP firmware
□ Test restore one file from backup — confirm it works
□ Review user accounts — remove any that shouldn't exist
□ Check SSL certificates — renew if expiring within 30 days
□ Review and rotate any API keys or tokens
```

### Quarterly (half day)
```
□ Full backup restore test — restore to a separate location, verify all data
□ Review firewall rules — remove any that are no longer needed
□ Review network diagram — still accurate?
□ Update this document — any changes to hardware or software?
□ Security posture review — anything new to be aware of?
□ Check for any CVEs (vulnerabilities) affecting your hardware/software
```

### Annually
```
□ Consider professional penetration test ($500-$1,500 — Perth based)
□ Review and update incident response plan
□ Full hardware inspection — cables, dust, drive health
□ Review backup strategy — still adequate for business size?
□ Update insurance if applicable (equipment, cyber liability)
```

---

## INCIDENT RESPONSE PLAN

### If You Suspect a Breach

```
STEP 1 — ISOLATE (immediate)
□ Disconnect server from network (unplug ethernet from switch)
□ Do NOT turn server off — forensic data may be lost
□ Document: time you noticed, what you saw, what changed

STEP 2 — ASSESS (within 1 hour)
□ Review pfSense logs — when did unusual activity start?
□ Review Suricata alerts — what triggered?
□ Check Synology log centre — any unusual logins or file access?
□ Identify: is this active? Or historical?

STEP 3 — CONTAIN (within 2 hours)
□ Change all passwords from a SEPARATE, CLEAN device
□ Revoke all Tailscale sessions
□ Check all user accounts — any new ones created?
□ Identify the entry point if possible

STEP 4 — RECOVER
□ If data compromised: restore from last clean offline backup
□ Rebuild from scratch if necessary — document is here to guide you
□ Do NOT reconnect to network until entry point is identified and closed

STEP 5 — NOTIFY (if client data involved)
□ Australian Privacy Act obligations apply
□ Notify affected clients directly and promptly
□ Report to OAIC (Office of the Australian Information Commissioner) if required
□ Document everything — dates, times, actions taken
```

### Emergency Contacts
```
Australian Cyber Security Centre (ACSC): 1300 CYBER1 (1300 292 371)
Report a cybercrime: cyber.gov.au/report
OAIC (privacy breach): oaic.gov.au
```

---

## NETWORK DIAGRAM

```
[NBN / Internet]
       │
[ISP Modem — Bridge Mode]
       │
[pfSense Firewall — Protectli VP2420]
       │
[TP-Link Managed Switch TL-SG108E]
       │
       ├── [VLAN 10] ──── Work Laptop
       │                   Work Phone (wifi)
       │                   
       ├── [VLAN 20] ──── Synology NAS DS423+
       │                       ├── Nextcloud
       │                       ├── Vaultwarden  
       │                       ├── Gitea
       │                       ├── Uptime Kuma
       │                       └── Portainer
       │                   
       ├── [VLAN 30] ──── Smart TV
       │                   IoT Devices
       │                   Security Cameras
       │                   
       └── [VLAN 40] ──── Personal Phone (wifi)
                          Personal Laptop

[Tailscale VPN] ── encrypted tunnel ── [Chris mobile/remote laptop]
```

---

## ASSET REGISTER

| Asset | Model | Serial Number | Purchase Date | Warranty Expires | Location |
|---|---|---|---|---|---|
| NAS | Synology DS423+ | [fill on purchase] | [date] | [date] | Server cabinet |
| Drive 1 | WD Red Plus 4TB | [fill] | [date] | [date] | NAS Bay 1 |
| Drive 2 | WD Red Plus 4TB | [fill] | [date] | [date] | NAS Bay 2 |
| Firewall | Protectli VP2420 | [fill] | [date] | [date] | Server cabinet |
| Switch | TP-Link TL-SG108E | [fill] | [date] | [date] | Server cabinet |
| UPS | APC Back-UPS 700VA | [fill] | [date] | [date] | Server cabinet base |
| Backup Drive 1 | WD My Passport 4TB | [fill] | [date] | [date] | Locked cabinet |
| Backup Drive 2 | WD My Passport 4TB | [fill] | [date] | [date] | Offsite location |
| WiFi AP | TP-Link EAP670 | [fill] | [date] | [date] | [room] |

---

## CHANGE LOG

| Date | Change Made | Reason | Made By |
|---|---|---|---|
| [date] | Initial setup | New infrastructure build | Chris Robinson |
| | | | |

---

## DOCUMENT CONTROL

- Document owner: Chris Robinson — RTS Tech Solutions
- Location: This file — `docs/server-build-spec.md` in Sovereign Tank repository
- Classification: CONFIDENTIAL — Internal use only
- Review cycle: Quarterly — or after any significant change
- Last reviewed: [date]

---

*This document is version controlled in the Sovereign Tank private repository. Every change is logged. If you are reading a printed copy — verify against the repository version for accuracy.*

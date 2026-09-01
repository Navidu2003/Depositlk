<img width="1844" height="647" alt="Screenshot 2026-08-16 094049" src="https://github.com/user-attachments/assets/d02b8b28-4b49-40f5-b503-f183b07222ca" />
<div align="center">



 Markdown<div align="center">

  <img src="assets/logo.svg" alt="DepositLK Logo" width="500"/>

  <h1>DepositLK (SaveSmart)</h1>

  <p>
    <strong>A high-performance, ethical deposit advisory platform for Sri Lanka built with Next.js, TypeScript, and Prisma ORM, engineered with an enterprise-grade Kubernetes orchestration, HPA autoscaling, and end-to-end Prometheus/Grafana observability stack.</strong>
  </p>

  <p>
    <a href="https://github.com/Navidu2003/Depositlk/actions/workflows/deploy.yml"><img src="https://github.com/Navidu2003/Depositlk/actions/workflows/deploy.yml/badge.svg" alt="CI/CD Pipeline"/></a>
    <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js"/>
    <img src="https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma" alt="Prisma"/>
    <img src="https://img.shields.io/badge/Docker-Multi--Stage-2496ED?logo=docker&logoColor=white" alt="Docker"/>
    <img src="https://img.shields.io/badge/Kubernetes-HPA%20Orchestrated-326CE5?logo=kubernetes&logoColor=white" alt="Kubernetes"/>
    <img src="https://img.shields.io/badge/GHCR-Container%20Registry-2088FF?logo=github" alt="GHCR"/>
    <img src="https://img.shields.io/badge/Prometheus-Metrics%20Scraping-E6522C?logo=prometheus&logoColor=white" alt="Prometheus"/>
    <img src="https://img.shields.io/badge/Grafana-Live%20Observability-F46800?logo=grafana&logoColor=white" alt="Grafana"/>
  </p>
</div>

---

## 📌 Executive Summary

**DepositLK** solves retail financial decision paralysis and asymmetric rate visibility in Sri Lanka. By strictly rejecting algorithmic ranking, affiliate-driven bias, and sponsored product placements, it delivers an objective advisory model:
1. **Guided Account Matching:** A 3-step decision tree that identifies optimal account categories (*Fixed Deposit*, *Recurring Deposit*, or *High-Yield Savings*) without recommending specific commercial banks.
2. **Neutral Browse Directory:** Central Bank–registered institutions listed alphabetically with equal visual weighting, complete with transparent penalty rules, withholding tax (WHT) calculations, and deposit insurance guidelines.

---

## 🎯 Dual-Engineering Highlights

### 💻 Software Engineering Highlights
* **Full-Stack Next.js (App Router):** Server and Client Component separation for fast SSR, minimal bundle overhead, and client-side privacy-first calculations.
* **Prisma 7 ORM Data Modeling:** Decoupled schema configurations (`prisma.config.ts`) ensuring smooth static site builds while maintaining type-safe relational schemas.
* **Trilingual Localization (i18n):** Client-side reactive language context switching dynamically across **English**, **සිංහල (Sinhala)**, and **தமிழ் (Tamil)** with resilient local storage error boundaries.
* **HCI & Interaction Architecture:** Built on Norman's Mental Models, Hick’s Law, and WCAG 2.1 AA accessibility guidelines to transform complex banking terms into structured, accessible UI components.

### ⚙️ DevOps & Cloud-Native Highlights
* **Automated CI/CD Pipeline:** GitHub Actions automation running quality tests, Prisma schema validations, multi-platform Docker Buildx caching, and pushing artifacts to GitHub Container Registry (`ghcr.io`).
* **Declarative Kubernetes Architecture:** Infrastructure-as-Code manifests managing Deployments, Services (NodePort/ClusterIP), ConfigMaps, and encrypted Secrets under standard namespaces.
* **Dynamic Horizontal Pod Autoscaling (HPA):** Metrics-Server integration configured to scale pods from **2 to 6+ replicas** under real-time concurrent CPU spikes, returning to baseline post-cooldown.
* **Full-Stack Observability:** Native Prometheus scraping endpoint (`/metrics`) combined with custom Grafana dashboards tracking real-time latency, process memory, and active replica spikes.

---

## 🏗️ System Architecture & Workflow

```text
                                  [ CLIENT TRAFFIC ]
                                          │
                                          ▼
                       ┌─────────────────────────────────────┐
                       │   Kubernetes Service / NodePort     │
                       │     (Port 80 -> Internal 3000)      │
                       └──────────────────┬──────────────────┘
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
     ┌────────────────────────┐                      ┌────────────────────────┐
     │   DepositLK Pod #1     │                      │   DepositLK Pod #N     │
     │  ┌──────────────────┐  │    Auto-Scales       │  ┌──────────────────┐  │
     │  │ Next.js Engine   │  │ ◄──────────────────► │  │ Next.js Engine   │  │
     │  │ Prisma Client    │  │   (2 - 6 Replicas)   │  │ Prisma Client    │  │
     │  │ Custom Exporter  │  │                      │  │ Custom Exporter  │  │
     │  └────────┬─────────┘  │                      │  └────────┬─────────┘  │
     └───────────┼────────────┘                      └───────────┼────────────┘
                 │                                               │
                 └───────────────────────┬───────────────────────┘
                                         │ Scrapes /metrics
                                         ▼
                       ┌─────────────────────────────────────┐
                       │   Prometheus & Grafana Workspace    │
                       │   Monitoring Pods & Metric Curves   │
                       └─────────────────────────────────────┘
🛠️ Technology StackDomainTechnologies UsedPurposeFrontendNext.js 15, React 19, TypeScript, Tailwind CSS, Lucide IconsResponsive UI rendering, client state management, and type safetyData LayerPrisma 7 ORM, PostgreSQL / SQLiteDatabase schema migrations, model definitions, and queriesContainerizationDocker, Multi-Stage BuildsMinimal footprint production image generationOrchestrationKubernetes (Kind / Docker Desktop)High availability, self-healing workloads, and rolling updatesScalingKubernetes HPA v2, Metrics ServerDynamic CPU/Memory load-based autoscalingCI/CD AutomationGitHub Actions, GHCR (ghcr.io)Build automation, linting, testing, and container deliveryMonitoringPrometheus, GrafanaCluster metric ingestion, system health tracking, and dashboards🚀 DevOps & CI/CD Deep-Dive1. Multi-Stage Dockerfile OptimizationThe multi-stage Dockerfile separates dependencies, compilation, and runtime environments to maximize layer caching and minimize the final attack surface:Stage 1 (Deps): Installs frozen dependencies with npm ci.Stage 2 (Builder): Compiles TypeScript, runs Prisma generation, and builds Next.js standalone outputs.Stage 3 (Runner): Lightweight Node.js Alpine base containing only standalone runtime output and static assets.2. GitHub Actions Pipeline Flow (.github/workflows/deploy.yml)Plaintext  [ Git Push to main ]
         │
         ├──► Job 1: Quality Gate & Tests (npm test, Prisma validate, Build verify)
         │           │
         │           ▼ (On Success)
         └──► Job 2: Build & Push Container Image
                     ├── Set up Docker Buildx with GitHub Cache Action
                     ├── Authenticate with GHCR via GITHUB_TOKEN
                     └── Tag & Push: ghcr.io/navidu2003/depositlk:latest & :<sha>
3. Kubernetes HPA Load Simulation & Scaling ValidationThe cluster autoscaler maintains a baseline of 2 pods and automatically scales out up to 6 pods when CPU utilization crosses threshold targets:PowerShell# Continuous multi-threaded HTTP traffic generator
1..15 | ForEach-Object {
    Start-Job -ScriptBlock {
        $client = New-Object System.Net.WebClient
        1..80 | ForEach-Object {
            try {
                $null = $client.DownloadString("http://localhost:3000/")
                $null = $client.DownloadString("http://localhost:3000/browse")
            } catch {}
        }
        $client.Dispose()
    }
}
Plaintext# Live HPA Autoscaling Output
NAME            REFERENCE                         TARGETS         MINPODS   MAXPODS   REPLICAS   AGE
depositlk-hpa   Deployment/depositlk-deployment   cpu: 12%/40%    2         6         2          24h
depositlk-hpa   Deployment/depositlk-deployment   cpu: 66%/40%    2         6         3          24h
depositlk-hpa   Deployment/depositlk-deployment   cpu: 78%/40%    2         6         4          24h  <-- Auto-Scaled
depositlk-hpa   Deployment/depositlk-deployment   cpu: 8%/40%     2         6         2          24h  <-- Cooled Down
🎨 Visual Identity & Brand SystemTokenHex ValueApplicationInk Navy#0D2B3EPrimary structural background, typography, and authority surfacesBrass Gold#C89B3CAccent elements, growth progress indicators, and key metric calloutsSage Green#4C7C6FInformational confirmation badges and neutral status indicatorsOff-White#F2F4F1Clean UI background canvas providing high readability contrast📁 Repository StructurePlaintextdepositlk/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD to GHCR
├── assets/
│   ├── logo.svg                # Vector brand assets
│   └── logo-sheet.svg          # Complete design identity sheet
├── k8s/
│   ├── deployment.yaml         # Kubernetes App Deployment definition
│   ├── service.yaml            # ClusterIP / NodePort routing rules
│   ├── hpa.yaml                # Horizontal Pod Autoscaler manifest
│   ├── secret.yaml             # Encrypted secret configurations
│   └── monitoring.yaml         # Prometheus & Grafana service manifests
├── prisma/
│   ├── schema.prisma           # Relational schema definition
│   └── prisma.config.ts        # Prisma ORM environment loader
├── src/
│   ├── app/
│   │   ├── api/                # Core API routes
│   │   ├── metrics/            # Prometheus scrape collector endpoint
│   │   ├── browse/             # Alphabetical bank directory
│   │   ├── calculator/         # Interactive maturity calculator
│   │   ├── quiz/               # Decision-tree recommendation engine
│   │   └── page.tsx            # Application landing page
│   ├── components/             # Reusable UI component systems
│   └── context/                # Trilingual LanguageProvider state
├── Dockerfile                  # Multi-stage production container build
├── package.json                # Project dependencies and script definitions
└── README.md
⚡ Quick Start & Local Deployment1. PrerequisitesNode.js: v20.x (LTS)Docker & Kubernetes CLI: docker, kubectl2. Local Application RunBash# Clone the repository
git clone [https://github.com/Navidu2003/Depositlk.git](https://github.com/Navidu2003/Depositlk.git)
cd Depositlk

# Install dependencies
npm ci

# Generate Prisma client
npx prisma generate

# Run development server
npm run dev
Open http://localhost:3000 in your browser.3. Deploy to Kubernetes ClusterBash# Apply declarative manifests
kubectl apply -f k8s/

# Verify running pods
kubectl get pods -l app=depositlk

# Port-forward application service
kubectl port-forward svc/depositlk-service 3000:80

# Port-forward Grafana monitoring dashboard
kubectl port-forward svc/grafana-service 3002:3000 -n monitoring
📄 LicenseDistributed under the MIT License. See LICENSE for more information.

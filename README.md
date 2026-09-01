<img width="1844" height="647" alt="Screenshot 2026-08-16 094049" src="https://github.com/user-attachments/assets/d02b8b28-4b49-40f5-b503-f183b07222ca" />
<div align="center">



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

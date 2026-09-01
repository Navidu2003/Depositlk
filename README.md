# 🏦 DepositLK (SaveSmart)

> **Empowering depositors in Sri Lanka with neutral, transparent, and unranked financial insights.**  
> An ethical deposit advisory platform built with **Next.js**, **TypeScript**, and **Prisma ORM**, orchestrated on **Kubernetes (HPA)** with automated **GitHub Actions CI/CD** and full **Prometheus & Grafana Observability**.

[![CI/CD Pipeline](https://github.com/Navidu2003/Depositlk/actions/workflows/deploy.yml/badge.svg)](https://github.com/Navidu2003/Depositlk/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-326CE5?logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?logo=prometheus&logoColor=white)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-Observability-F46800?logo=grafana&logoColor=white)](https://grafana.com/)

---

## 📌 Table of Contents
- [Project Overview](#-project-overview)
- [Ethical Architecture & Interaction Design](#-ethical-architecture--interaction-design)
- [Core Features & User Workflow](#-core-features--user-workflow)
- [System Architecture & Tech Stack](#-system-architecture--tech-stack)
- [Cloud-Native DevOps & Kubernetes Infrastructure](#-cloud-native-devops--kubernetes-infrastructure)
  - [CI/CD Pipeline (GHCR)](#1-cicd-pipeline-ghcr)
  - [Container Orchestration & Elastic Autoscaling (HPA)](#2-container-orchestration--elastic-autoscaling-hpa)
  - [Full-Stack Observability Stack](#3-full-stack-observability-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started Locally](#-getting-started-locally)
- [Human-Computer Interaction (HCI) Principles](#-human-computer-interaction-hci-principles)

---

## 📖 Project Overview

A significant percentage of retail savers in Sri Lanka struggle to navigate fragmented deposit terms, complex penalty clauses, and statutory deposit insurance limits across commercial and licensed specialized banks. 

**DepositLK** is an advisory web platform designed to eliminate financial decision paralysis **without ranking, recommending, or endorsing any specific financial institution**.

---

## ⚖️ Ethical Architecture & Interaction Design

Most financial comparison aggregators prioritize affiliate-driven "Best Rate" badges, creating algorithmic bias that misleads depositors. DepositLK enforces a strict ethical interaction model:

| Design Problem | DepositLK Architectural Resolution |
| :--- | :--- |
| **Ignoring Non-Rate Factors** (Trust, Branch Access, Solvency) | The guided quiz recommends **only an account type** (*Fixed*, *Recurring*, or *Savings*), never a bank. |
| **Misleading "Best Rate" Framing** | The browse directory presents all licensed institutions **alphabetically with equal visual weight**. |
| **Opaque Fee Structures** | Standardized per-bank detail cards unpack withholding taxes, early withdrawal penalties, and insurance thresholds in plain language. |

---

## 🔄 Core Features & User Workflow

```text
 ┌─────────────────────────────────────────────────────────────┐
 │                      1. Landing Page                        │
 │        "You have money to deposit. You decide where."       │
 └──────────────┬──────────────────────────────┬───────────────┘
                │                              │
                ▼ [ Guided Path ]              ▼ [ Direct Browse ]
 ┌─────────────────────────────┐ ┌─────────────────────────────┐
 │    2. Guided Needs Quiz     │ │     3. Browse Accounts      │
 │  3 questions on liquidity & │ │  Neutral alphabetical list  │
 │  tenure goals               │ │  Equal visual weighting     │
 └──────────────┬──────────────┘ └─────────────┬───────────────┘
                │                              │
                ▼                              ▼
 ┌─────────────────────────────┐ ┌─────────────────────────────┐
 │     4. Account Result       │ │    5. Bank Detail View      │
 │  Identifies account type    ├─►  Rates, penal clauses, docs │
 │  without specific bank name │ │  Maturity growth calculator │
 └─────────────────────────────┘ └─────────────────────────────┘

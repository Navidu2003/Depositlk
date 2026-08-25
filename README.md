# DepositLK 

DepositLK is an independent, non-commercial deposit comparison platform designed for Sri Lankan savers. It prioritizes account-type education (Fixed Deposit vs. Recurring Deposit vs. Savings) before presenting institutional data in strict alphabetical order.

![DepositLK CI](https://github.com/Navidu2003/Depositlk/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/License-MIT-teal.svg)

---

## Key Features

- **Radical Neutrality:** Strict A–Z alphabetical directory with zero sponsored placements or artificial rankings.
- **Account Type Recommendation Engine:** 4-question client-side quiz evaluating liquidity, frequency, and time horizon.
- **Interactive Calculator:** Compound interest and recurring deposit projections with dynamic tenure adjustments.
- **3-Bank Comparison Matrix:** Side-by-side spec comparison with synchronized URL query states (`/compare?banks=boc,commercial-bank`).
- **Client-Side Privacy:** Zero persistence of personal financial inputs; all calculation occurs in-browser.

---

## Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/)
- **CI/CD:** GitHub Actions & Vercel Edge Network

---

## Local Development

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Navidu2003/Depositlk.git](https://github.com/Navidu2003/Depositlk.git)
   cd depositlk

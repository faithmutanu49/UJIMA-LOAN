# Ujima SACCO Agent Portal & Compliance Suite

This repository contains the interactive **Ujima SACCO Agent Portal**, demonstrating the multi-agent **"Agent Pride"** lending system and regulatory compliance documentation. The system is designed to combat high lending bias against informal market vendors in Kenya and Uganda.

---

## Directory Structure

All deliverables are organized in the workspace as requested:

```
ujima-sacco-portal/
├── index.html            # Main single-page web application core
├── styles.css            # Custom CSS styling (green and slate-white theme)
├── app.js                # Core JS logic for multi-agent simulation & calculator
├── README.md             # This instructions file
└── docs/
    ├── executive_brief.md      # Board-ready 1-page impact summary
    ├── dossier.md              # Ethical Architecture Dossier (ETHOS, TRACK, OASIS, PRIDE, HORIZON)
    ├── blueprint.md            # Structural Agent Pride workflow & RANK specification
    ├── impact_assessment.md    # Key indicators: Financial inclusion, time saved, data sovereignty
    └── reflection.md           # 500-word Safari Reflection essay
```

---

## Key Features

1. **Account Overview Dashboard**: Prominently displays available credit, active debts, progress indicators, and comprehensive transaction logs.
2. **Apply for Credit (MAP Framework)**: Allows members to input desired capital, select crop type (Matooke or Maize), and dynamically generate 4 repayment schedules aligned with seasonal harvest liquidity peaks.
3. **Agent Pride Simulation**:
   - **SMS Console**: Simulated phone interface accepting vendor queries.
   - **Scout Agent**: Parses keywords, checks stress signals, and triggers handoff.
   - **Guardian Agent**: Verifies limits (&le; KES 15,000), checks proxy safety parameters, and applies the Dignity Filter.
   - **Hunter Agent**: Handles manual escalations, compiles regional weather forecasts, and maps files to specialized human officers.
   - **Bias Red-Teaming**: Clickable pre-set tests demonstrating bias audit loops and kill switches in action.
4. **Embedded Document Reader**: High-fidelity markdown renderer showing the dossier, executive brief, impact report, and safari reflection (no CORS errors under the `file://` protocol).

---

## Instructions for Execution

### Option A: Open directly in your Browser (Zero Setup)
Simply open [index.html](file:///C:/Users/Faith/.gemini/antigravity/scratch/ujima-sacco-portal/index.html) in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari). The app runs entirely in client-side HTML/CSS/JS and does not require a local server or compiling steps.

### Option B: Serve using a Local Server
If you have node or python installed, you can serve the workspace from your terminal:

**Python**:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

**Node.js (via npx)**:
```bash
npx serve .
```

---

## Compliance & Standards Alignment
* **Kenya Data Protection Act (DPA) 2022**: Restricts storage strictly to AWS Cape Town (af-south-1) and enforces $k$-anonymity.
* **SASRA Digital Lending Regulations**: Implements Elders Council governance, manual review triggers, and elder-style natural language explanations for denials.

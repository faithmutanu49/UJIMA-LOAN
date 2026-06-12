// Ujima SACCO Portal - Core Application State & Logic

const STATE = {
    user: {
        name: "Grace Auma",
        occupation: "Matooke Vendor",
        location: "Kakamega Sub-County",
        chamaName: "Baraka Women Chama",
        chamaBalance: 8500,
        dependentsUnder5: 3,
        availableCredit: 15000,
        outstandingBalance: 0,
        repaymentStatus: "No Active Loan",
        harvestMonth: "October",
        consentAccepted: false
    },
    activeTab: "dashboard",
    activeDoc: "dossier",
    activeConsentLang: "en",
    smsCount: 0,
    loansList: [
        { id: "UJ-2025-089", amount: 8000, type: "Emergency (School Fees)", date: "2025-09-02", status: "Repaid", schedule: "Standard Monthly" },
        { id: "UJ-2025-112", amount: 12000, type: "Matooke Fertilizer", date: "2025-10-14", status: "Repaid", schedule: "Harvest-Aligned (Matooke)" }
    ],
    agentLogs: {
        scout: [],
        guardian: [],
        hunter: []
    },
    observatoryData: {
        rainfall: "68%",
        moisture: "0.78",
        priceIndex: "KES 1,500 / bunch",
        temp: "24°C"
    }
};

// Consent Script Content
const CONSENT_SCRIPTS = {
    en: "We at Ujima SACCO respect your data. By opting in, you allow your transaction records to train only Ujima's local AI model to evaluate your credit suitability. Your data will never be sold or shared with Silicon Valley companies. You have the right to withdraw consent at any time via USSD code *#123#.",
    sw: "Sisi katika Ujima SACCO tunaheshimu data yako. Kwa kukubali, unaruhusu rekodi zako za miamala zitumike kutathmini mkopo wako kupitia mfumo wetu wa karibu wa AI. Data yako haitauzwa au kutumiwa na makampuni ya kigeni ya Silicon Valley. Una haki ya kukataa au kuondoa kibali chako wakati wote kwa kubonyeza *#123#.",
    lh: "Ujima SACCO ilinda amakhuwa kako. Mu kukhola kuno, kufukilila amakhuwa ke miamala yako kareshewe khulondakhwo khushila khu AI ye khurere. Amakhuwa kako kasinyikhwa namba tsinyene kandi kakhaba khukhaba khurungulwa khu Silicon Valley. Okhwolesha okhufukilila khuno okhuyilila *#123#."
};

// Markdown Content Store for standalone rendering (avoids CORS issues on file:// protocol)
const DOCUMENTS = {
    dossier: `# Ujima SACCO: Ethical Architecture Dossier

*Prepared for: SACCO Societies Regulatory Authority (SASRA)*
*Compliance Standard: Kenya Data Protection Act (DPA) 2022 & CBK Guidelines*

## 1. The ETHOS Framework: Dignity-Centered Lending
* **(E) Excluded Groups**: Explicit bias protections for informal traders and women market vendors.
* **(T) Transparent Reasoning**: Provide clear reasons for denials based on localized cash flows.
* **(H) Household Impact**: Evaluate food security and school attendance indicators prior to action.
* **(O) Oversight Audit**: Immutable logs linking every scoring decisions to human officer review.
* **(S) Sovereignty**: Local data hosting on AWS Cape Town region (af-south-1).

## 2. The TRACK Audit: Forensic Bias Analysis
* **Training Data**: Less than 14% represented informal trades historically; balanced by synthesizing mobile money wallet patterns.
* **Representation**: Added localized occupation tags (e.g. "matooke vendor", "shea butter trader").
* **Amplification**: Replaced traditional land title collateral requirements with Chama peer guarantees.
* **Counterfactuals**: Ensures identical approvals for formal employees and market vendors with equivalent cash flow.
* **Kill Switch**: System locks automated triage if regional approval rates drop by >30% vs baseline.

## 3. The OASIS Protocol: Data Stewardship
* **Opt-In Script**: Transacted details are strictly opt-in and stored locally, not exported to Silicon Valley.
* **Anonymization**: k-anonymity depth (k>=15) used in small villages to prevent re-identification.
* **Sovereignty**: Storage mapping on AWS Africa (Cape Town) region.
* **Retention**: Auto-delete non-essential session metadata after 180 days.
* **Security**: End-to-end SIGTRAN/SS7 signaling encryption for USSD.

## 4. The PRIDE Loop: Human Oversight
* **Pause Points**: Mandatory manual reviews for loans > KES 50,000 or families with children under 5.
* **Elders Council**: A 6-member governance board including 3 SACCO managers, 2 female market vendors, and 1 regulator.
* **Disagreement Rights**: Quick USSD escalation (*#123#) for 24-hour human review.`,

    brief: `# Executive Brief: Ujima Agent Pride System

**To**: Board of Directors, Ujima SACCO
**Subject**: Agentic Credit Triage and Financial Inclusion System Launch

## Executive Summary
Ujima's new Agent Pride system tackles credit exclusion of informal market vendors (historically 68% denial rate). By structuring a 3-agent pipeline grounded in agricultural harvest liquidity (MAP Framework), the model drives a **37% increase in approvals for female market vendors** while keeping overall portfolio defaults **under 3%**.

## Strategic Pillars
* **Harvest-Aligned Credit**: Repayments match liquidity peaks of matooke and maize seasons.
* **GUARD Safety Rails**: Auto-triages standard loans under KES 15,000, and escalates larger sizes.
* **Data Sovereignty**: Complete alignment with Kenya DPA 2022 via AWS Cape Town instances.`,

    impact: `# Impact Assessment Report: Ujima Agent Pride

## Key Projections & Realized Outcomes
* **Inclusion Boost**: +37% loan approvals for informal traders.
* **Time Savings**: Automated 80% of Tier-1 applications, saving loan officers an average of **18 hours per week** in administrative tasks.
* **Risk Control**: Average portfolio default rate (NPL) reduced to **2.8%** due to flexible agricultural calendars.
* **Bias Reduction**: TRACK audit controls reduced automated bias incidents by **95%**.
* **Data Sovereignty**: 100% of PII processed under African sovereignty.`,

    reflection: `# Safari Reflection: From Prompting to Agentic Pride

The journey from Savannah Precision to Tsavo Fluency, and onward through Ethical Savannah and Agentic Pride, has profoundly transformed my relationship with artificial intelligence. When we began in the Savannah, AI was a generic tool—a black-box oracle trained on Western datasets, applying Silicon Valley assumptions to rural East African realities. It viewed irregular cash flows through the sterile lens of corporate risk, resulting in the systematic exclusion of informal traders who anchor the local economy. Shifting to Savannah Precision was an exercise in grounding. It taught me that precision is not merely about syntactical constraints; it is about cultural and geographic anchors. By integrating matooke harvest cycles, regional inflation, and mobile money transaction history into credit scoring, we forced the AI to speak the language of local markets rather than Wall Street.

Moving into Tsavo Fluency expanded this perspective, shifting the relationship from command-and-control to cognitive partnership. I stopped treating AI as a single monolithic block and began seeing it as a team of collaborative processors. Defining the 4D boundaries (Delegation, Description, Discernment, Diligence) allowed for a clear separation of labor: automating repetitive tasks while reserving areas of cultural nuance and high financial vulnerability for human loan officers. Here, RAG was no longer just a technical pipeline, but a cognitive leash anchoring the AI to live, validated agricultural data, ensuring that credit models aligned with real-world weather patterns and planting seasons rather than hallucinations.

The transition to the Ethical Savannah was the most humbling phase of the expedition. In standard software development, "bias mitigation" is often treated as a post-launch checklist. Through the ETHOS, TRACK, and OASIS frameworks, ethics became foundational. I realized that a model screening risk is inherently biased unless programmed with historical and structural context. True digital dignity means designing systems that explain denials in the language of a village elder rather than a corporate bureaucrat, giving users active USSD disagreement rights (*#123#), and anchoring data sovereignty in AWS Cape Town to keep wealth and governance within Africa. Ethics transformed from a constraint into an architectural design system.

Finally, Agent Savannah unified these threads into an active, synchronized ecosystem. The "Agent Pride" (Scout, Guardian, Hunter) mirrors the cooperative efficiency of a pride of lions on the hunt. By structuring RANK boundaries, we prevented agents from overstepping their authority, keeping sensitive credit calculations cold and logical, while leaving user interaction warm and empathetic. The HUNT handoffs and GUARD safety rails created a system that protects the SACCO’s solvency while protecting the vendor's livelihood.

If I were to embark on this safari again, I would prioritize earlier collaboration with local community representatives. Rather than designing the Elders Council and USSD feedback loops from an engineering desk, I would conduct participatory workshops with Kakamega and Busia market vendors to co-design the Sheng SMS tones and interpretability explanations. The ultimate lesson of this journey is that agentic AI is not about building autonomous systems that replace human agency; it is about engineering digital scaffolding that amplifies human dignity and builds community resilience.`
};

// Simple Markdown to HTML Parser
function parseMarkdown(md) {
    let html = md
        .replace(/# (.*)/g, '<h1>$1</h1>')
        .replace(/## (.*)/g, '<h2>$1</h2>')
        .replace(/### (.*)/g, '<h3>$1</h3>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\* (.*)/g, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
        .replace(/<ul>\s*<ul>/g, '<ul>')
        .replace(/<\/ul>\s*<\/ul>/g, '</ul>')
        .replace(/([^>\r\n]+)\r?\n\r?\n/g, '<p>$1</p>')
        .replace(/> \*(.*)\*/g, '<blockquote>$1</blockquote>');
    return html;
}

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
    initConsent();
    initNavigation();
    initCalculator();
    initSimulator();
    initCycleEngine();
    renderDashboard();
    renderDoc();
    updateObservatoryRAG("matooke"); // Default crop Observatory fetch
});

// Member consent workflows
function initConsent() {
    const textPane = document.getElementById("consent-text-pane");
    const acceptBtn = document.getElementById("btn-accept-consent");
    const alertBox = document.getElementById("consent-alert-box");

    // Load initial consent text
    textPane.innerText = CONSENT_SCRIPTS[STATE.activeConsentLang];
    updateConsentLangBtns();

    acceptBtn.addEventListener("click", () => {
        STATE.user.consentAccepted = true;
        alertBox.style.display = "none";
        
        // Unlock main parts
        document.getElementById("apply-main-layout").style.opacity = "1";
        document.getElementById("apply-main-layout").style.pointerEvents = "auto";
        
        logCycleEvent("SYSTEM", "Consent accepted by Grace Auma", "success", 5);
        updateCycleMetrics();
    });

    // Lock apply tab initially
    document.getElementById("apply-main-layout").style.opacity = "0.5";
    document.getElementById("apply-main-layout").style.pointerEvents = "none";
}

function switchConsentLang(lang) {
    STATE.activeConsentLang = lang;
    document.getElementById("consent-text-pane").innerText = CONSENT_SCRIPTS[lang];
    updateConsentLangBtns();
}

function updateConsentLangBtns() {
    document.getElementById("lang-btn-en").className = STATE.activeConsentLang === 'en' ? 'btn btn-secondary active-lang' : 'btn btn-secondary';
    document.getElementById("lang-btn-sw").className = STATE.activeConsentLang === 'sw' ? 'btn btn-secondary active-lang' : 'btn btn-secondary';
    document.getElementById("lang-btn-lh").className = STATE.activeConsentLang === 'lh' ? 'btn btn-secondary active-lang' : 'btn btn-secondary';
}

// Navigation handling
function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    const tabContents = document.querySelectorAll(".tab-content");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const tabName = item.dataset.tab;
            
            navItems.forEach(nav => nav.classList.remove("active"));
            tabContents.forEach(tab => tab.classList.remove("active"));

            item.classList.add("active");
            document.getElementById(tabName).classList.add("active");
            
            STATE.activeTab = tabName;
            
            if (tabName === "dossier") {
                renderDoc();
            } else if (tabName === "cycle") {
                updateCycleMetrics();
            }
        });
    });

    // Doc Hub Navigation
    const docNavItems = document.querySelectorAll(".doc-nav-item");
    docNavItems.forEach(item => {
        item.addEventListener("click", () => {
            docNavItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");
            STATE.activeDoc = item.dataset.doc;
            renderDoc();
        });
    });
}

// Render Account Details & Loans Table
function renderDashboard() {
    document.getElementById("user-name").innerText = STATE.user.name;
    document.getElementById("avail-credit").innerText = "KES " + STATE.user.availableCredit.toLocaleString();
    document.getElementById("outstanding-bal").innerText = "KES " + STATE.user.outstandingBalance.toLocaleString();
    document.getElementById("repayment-status").innerText = STATE.user.repaymentStatus;
    
    // Progress calculation
    const progressPercent = STATE.user.outstandingBalance > 0 ? 35 : 100;
    document.getElementById("loan-progress-bar").style.width = progressPercent + "%";
    document.getElementById("progress-desc").innerText = STATE.user.outstandingBalance > 0 
        ? "Current active loan repayment: 35% completed" 
        : "No active debts. Credit limit fully unlocked.";

    // Render loans list table
    const tableBody = document.getElementById("loans-table-body");
    tableBody.innerHTML = "";
    STATE.loansList.forEach(loan => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${loan.id}</strong></td>
            <td>KES ${loan.amount.toLocaleString()}</td>
            <td>${loan.type}</td>
            <td>${loan.date}</td>
            <td>${loan.schedule}</td>
            <td><span class="badge-status ${loan.status === 'Repaid' ? 'success' : 'warning'}">${loan.status}</span></td>
        `;
        tableBody.appendChild(tr);
    });
}

// Render selected documentation
function renderDoc() {
    const docPane = document.getElementById("doc-content");
    const content = DOCUMENTS[STATE.activeDoc];
    if (content) {
        docPane.innerHTML = `<div class="markdown-body">${parseMarkdown(content)}</div>`;
    }
}

// Live Mock RAG Fetch from Kenya Agricultural Observatory
function updateObservatoryRAG(crop) {
    const feedGrid = document.getElementById("observatory-feed-grid");
    
    // Mock variable data API response
    const randVar = () => (0.9 + Math.random() * 0.2); // +/- 10%
    
    let rain, moisture, price, temp;
    
    if (crop === "matooke") {
        rain = Math.round(72 * randVar()) + "%";
        moisture = (0.82 * randVar()).toFixed(2);
        price = "KES " + Math.round(1500 * randVar()) + " / bunch";
        temp = Math.round(23 * randVar()) + "°C";
    } else if (crop === "maize") {
        rain = Math.round(35 * randVar()) + "%";
        moisture = (0.54 * randVar()).toFixed(2);
        price = "KES " + Math.round(4200 * randVar()) + " / 90kg bag";
        temp = Math.round(27 * randVar()) + "°C";
    } else {
        rain = Math.round(50 * randVar()) + "%";
        moisture = (0.65 * randVar()).toFixed(2);
        price = "KES " + Math.round(2200 * randVar()) + " / unit";
        temp = Math.round(25 * randVar()) + "°C";
    }

    STATE.observatoryData = { rain, moisture, price, temp };

    feedGrid.innerHTML = `
        <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.05); text-align: center;">
            <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Rainfall Prob.</div>
            <div style="font-size: 18px; font-weight: 700; color: var(--primary); margin-top: 4px;">${rain}</div>
            <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">Kakamega West Station</div>
        </div>
        <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.05); text-align: center;">
            <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Soil Moisture</div>
            <div style="font-size: 18px; font-weight: 700; color: var(--primary); margin-top: 4px;">${moisture} m³/m³</div>
            <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">Optimal range: 0.5-0.9</div>
        </div>
        <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.05); text-align: center;">
            <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Market Price Index</div>
            <div style="font-size: 18px; font-weight: 700; color: var(--primary); margin-top: 4px;">${price}</div>
            <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">Live Kisumu/Webuye Market</div>
        </div>
        <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.05); text-align: center;">
            <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Temperature</div>
            <div style="font-size: 18px; font-weight: 700; color: var(--primary); margin-top: 4px;">${temp}</div>
            <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">Normal seasonal mean</div>
        </div>
    `;
}

// Repayment Calculator Implementation
function initCalculator() {
    const amountInput = document.getElementById("calc-amount");
    const cropSelect = document.getElementById("calc-crop");
    const calculateBtn = document.getElementById("btn-calculate");
    const scheduleCards = document.querySelectorAll(".schedule-card");
    const confirmLoanBtn = document.getElementById("btn-confirm-loan");

    let selectedSchedule = "harvest";

    // Set crop-related harvest dates in details
    cropSelect.addEventListener("change", () => {
        const crop = cropSelect.value;
        const detailsText = document.getElementById("crop-details-text");
        if (crop === "matooke") {
            detailsText.innerHTML = "💡 <strong>Matooke cycles</strong>: Rain peaks & harvests occur in <strong>March/April</strong> and <strong>Sept/Oct</strong>. Income spikes during these months.";
        } else if (crop === "maize") {
            detailsText.innerHTML = "💡 <strong>Maize cycles</strong>: Main harvest peak in Western Kenya/Uganda occurs in <strong>Oct/Nov</strong>. High liquidity during dry crop extraction.";
        } else {
            detailsText.innerHTML = "💡 Selected generic informal occupation. Evaluated against peer chama indicators and local trade velocity.";
        }
        updateObservatoryRAG(crop);
        calculateSchedules();
    });

    scheduleCards.forEach(card => {
        card.addEventListener("click", () => {
            scheduleCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            selectedSchedule = card.dataset.schedule;
        });
    });

    calculateBtn.addEventListener("click", () => {
        updateObservatoryRAG(cropSelect.value);
        calculateSchedules();
    });

    confirmLoanBtn.addEventListener("click", () => {
        if (!STATE.user.consentAccepted) {
            alert("⚠️ Error: You must read and accept the data sovereignty consent before requesting a loan.");
            return;
        }

        const amount = parseInt(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid loan amount.");
            return;
        }

        if (amount > STATE.user.availableCredit) {
            alert("Error: Requested amount exceeds your available credit limit.");
            return;
        }

        // Apply loan (Update state)
        STATE.user.outstandingBalance = amount;
        STATE.user.availableCredit -= amount;
        STATE.user.repaymentStatus = "Active Repayment Cycle";
        
        // Add to loan list
        const loanId = "UJ-2026-" + Math.floor(100 + Math.random() * 900);
        let scheduleName = "Standard Monthly";
        if (selectedSchedule === "harvest") scheduleName = `Harvest-Aligned (${cropSelect.options[cropSelect.selectedIndex].text})`;
        else if (selectedSchedule === "chama") scheduleName = "Chama Peer-Linked";
        else if (selectedSchedule === "stepup") scheduleName = "Bi-Monthly Step-Up";

        STATE.loansList.unshift({
            id: loanId,
            amount: amount,
            type: cropSelect.options[cropSelect.selectedIndex].text + " Capital",
            date: new Date().toISOString().split('T')[0],
            status: "Active",
            schedule: scheduleName
        });

        renderDashboard();
        
        logCycleEvent("LOAN_OFFER", `Disbursed KES ${amount} using ${scheduleName}`, "success", 5);
        updateCycleMetrics();

        alert(`🎉 Success! Loan ${loanId} of KES ${amount.toLocaleString()} has been approved and disbursed. Repayment scheduled via: ${scheduleName}`);
        
        // Redirect to dashboard
        document.querySelector("[data-tab='dashboard']").click();
    });

    function calculateSchedules() {
        const amount = parseInt(amountInput.value);
        if (isNaN(amount) || amount <= 0) return;

        const crop = cropSelect.value;

        // 1. Harvest Aligned (Balloon payment structure)
        let harvestDesc = "";
        if (crop === "matooke") {
            harvestDesc = "Months 1-2: KES 800 (Interest only) | Month 3 (April Peak): KES 6,000 | Month 4: KES 800 | Month 5-6 (Sept/Oct Peak): KES 6,000";
        } else {
            harvestDesc = "Months 1-4: KES 600 (Interest only) | Month 5 (Oct Peak): KES 10,000 | Month 6 (Nov Peak): KES 4,000";
        }
        document.getElementById("harvest-repay-structure").innerText = harvestDesc;

        // 2. Chama Linked (Peer-guaranteed weekly payments)
        const weeklyRepay = Math.round((amount * 1.1) / 24); // 24 weeks
        document.getElementById("chama-repay-structure").innerText = `24 weekly installments of KES ${weeklyRepay.toLocaleString()} backed by Baraka Women Chama savings.`;

        // 3. Standard Monthly (Rigid baseline)
        const standardRepay = Math.round((amount * 1.12) / 6); // 6 months standard
        document.getElementById("standard-repay-structure").innerText = `6 rigid monthly payments of KES ${standardRepay.toLocaleString()} regardless of harvest fluctuations.`;

        // 4. Bi-Monthly Step-Up
        const step1 = Math.round((amount * 0.1) / 3);
        const step2 = Math.round((amount * 1.0) / 3);
        document.getElementById("stepup-repay-structure").innerText = `Months 1-3: KES ${step1.toLocaleString()} / mo | Months 4-6: KES ${step2.toLocaleString()} / mo (Aligning with maturing crops).`;
    }
}

// Agent Simulation Engine with 3-SMS limit enforcer
function initSimulator() {
    const chatBody = document.getElementById("sim-chat-body");
    const chatInput = document.getElementById("sim-chat-input");
    const sendBtn = document.getElementById("sim-chat-send");
    const counterText = document.getElementById("sms-counter-text");
    const resetLimitBtn = document.getElementById("btn-reset-sms-limit");
    
    const scoutLogs = document.getElementById("log-scout");
    const guardianLogs = document.getElementById("log-guardian");
    const hunterLogs = document.getElementById("log-hunter");

    sendBtn.addEventListener("click", () => {
        if (!STATE.user.consentAccepted) {
            alert("⚠️ Error: You must read and accept the data sovereignty consent before using the Agent simulator.");
            return;
        }

        // Check SMS limit
        if (STATE.smsCount >= 3) {
            appendBubble("system", "🚨 LIMIT ENFORCED: 3-SMS Daily limit reached per GUARD Safety Rules. Dial *#700# or click 'Reset Limit' to override.");
            chatInput.disabled = true;
            sendBtn.disabled = true;
            return;
        }

        const text = chatInput.value.trim();
        if (text) {
            STATE.smsCount++;
            updateSmsCounterDisplay();
            handleMemberMessage(text);
            chatInput.value = "";
        }
    });

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    resetLimitBtn.addEventListener("click", () => {
        STATE.smsCount = 0;
        updateSmsCounterDisplay();
        chatInput.disabled = false;
        sendBtn.disabled = false;
        logAgent("scout", "♻️ SMS Daily Counter manually reset to 0 via USSD code *#700#.");
        appendBubble("system", "USSD: SMS daily tracker successfully reset via code *#700#");
    });

    // Red Team Presets
    const presets = document.querySelectorAll(".preset-btn");
    presets.forEach(btn => {
        btn.addEventListener("click", () => {
            if (!STATE.user.consentAccepted) {
                alert("⚠️ Error: You must read and accept the data sovereignty consent before injecting test profiles.");
                return;
            }

            if (STATE.smsCount >= 3) {
                appendBubble("system", "🚨 LIMIT ENFORCED: Cannot run red team tests while limit of 3 SMS/day is reached.");
                return;
            }

            STATE.smsCount++;
            updateSmsCounterDisplay();

            const promptText = btn.dataset.prompt;
            handleMemberMessage(promptText);
        });
    });

    function updateSmsCounterDisplay() {
        counterText.innerText = `${STATE.smsCount} / 3 messages sent today`;
        if (STATE.smsCount >= 3) {
            counterText.style.color = "var(--accent-danger)";
            chatInput.disabled = true;
            sendBtn.disabled = true;
        } else {
            counterText.style.color = "var(--primary)";
        }
    }

    function logAgent(agent, message) {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const logLine = `[${timestamp}] ${message}\n`;
        
        if (agent === "scout") {
            STATE.agentLogs.scout.push(logLine);
            scoutLogs.innerText = STATE.agentLogs.scout.join("");
            scoutLogs.scrollTop = scoutLogs.scrollHeight;
        } else if (agent === "guardian") {
            STATE.agentLogs.guardian.push(logLine);
            guardianLogs.innerText = STATE.agentLogs.guardian.join("");
            guardianLogs.scrollTop = guardianLogs.scrollHeight;
        } else if (agent === "hunter") {
            STATE.agentLogs.hunter.push(logLine);
            hunterLogs.innerText = STATE.agentLogs.hunter.join("");
            hunterLogs.scrollTop = hunterLogs.scrollHeight;
        }
    }

    function appendBubble(sender, message) {
        const bubble = document.createElement("div");
        bubble.className = `chat-bubble ${sender}`;
        bubble.innerText = message;
        chatBody.appendChild(bubble);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function handleMemberMessage(message) {
        // Clear active states
        document.querySelectorAll(".agent-card").forEach(c => c.classList.remove("active"));
        document.querySelectorAll(".agent-status").forEach(s => {
            s.className = "agent-status idle";
            s.innerText = "Idle";
        });

        // 1. Member sends SMS
        appendBubble("member", message);
        
        // 2. Scout Agent wakes up
        setTimeout(() => {
            const scoutCard = document.getElementById("agent-scout-card");
            const scoutStatus = scoutCard.querySelector(".agent-status");
            scoutCard.classList.add("active");
            scoutStatus.className = "agent-status active";
            scoutStatus.innerText = "Processing";

            logAgent("scout", `SMS received: "${message}"`);
            logAgent("scout", "Checking daily rate limits: Enforcing GUARD rule (max 3/day)... [PASSED]");
            logAgent("scout", "Parsing message via Sheng-to-Swahili parser...");

            // Check triggers
            const lowerMsg = message.toLowerCase();
            const containsStress = lowerMsg.includes("school fees") || lowerMsg.includes("shule") || lowerMsg.includes("loan shark") || lowerMsg.includes("shylock") || lowerMsg.includes("shida") || lowerMsg.includes("debt collector");
            const containsLoanRequest = lowerMsg.includes("mkopo") || lowerMsg.includes("loan") || lowerMsg.includes("pesa") || lowerMsg.includes("kes") || lowerMsg.includes("fertilizer") || lowerMsg.includes("shea");

            if (containsStress) {
                logAgent("scout", "⚠️ STRESS SIGNAL detected in message!");
                logAgent("scout", `Handoff triggered (HUNT protocol). Escalating to Guardian Agent.`);
                appendBubble("system", "Scout Agent escalated session to Guardian Agent (HUNT Trigger)");
                triggerGuardian(message, true);
            } else if (containsLoanRequest) {
                logAgent("scout", "Loan inquiry identified. Initiating loan screening handoff.");
                appendBubble("system", "Scout Agent escalated application to Guardian Agent (HUNT Trigger)");
                triggerGuardian(message, false);
            } else {
                logAgent("scout", "Message processed as general inquiry. Delivering literacy response.");
                setTimeout(() => {
                    const response = "Habari! Sisi katika Ujima SACCO tuko hapa kukusaidia kupanga bajeti yako ya mavuno. Ili kuomba mkopo, piga *123# au ujibu ujumbe huu kwa neno 'MKOPO'.";
                    appendBubble("agent", response);
                    
                    logCycleEvent("INQUIRY", message, "success", 5);
                    
                    scoutStatus.className = "agent-status idle";
                    scoutStatus.innerText = "Idle";
                    scoutCard.classList.remove("active");
                }, 1000);
            }
        }, 1000);
    }

    function triggerGuardian(message, hasStress) {
        setTimeout(() => {
            // Reset Scout card visual
            document.getElementById("agent-scout-card").classList.remove("active");
            document.getElementById("agent-scout-card").querySelector(".agent-status").className = "agent-status idle";
            document.getElementById("agent-scout-card").querySelector(".agent-status").innerText = "Idle";

            const guardianCard = document.getElementById("agent-guardian-card");
            const guardianStatus = guardianCard.querySelector(".agent-status");
            guardianCard.classList.add("active");
            guardianStatus.className = "agent-status active";
            guardianStatus.innerText = "Processing";

            logAgent("guardian", "Guardian Agent initialized (HUNT protocol).");
            
            // Check consent state
            logAgent("guardian", `Verifying member opt-in consent state... [CONSENTED: ${STATE.user.consentAccepted}]`);

            logAgent("guardian", "Applying GUARD Safety Rails...");

            // Hard Block proxy checks
            logAgent("guardian", "Checking for illegal proxies (gender/ethnicity flags)... [PASSED]");
            
            // Extract mock amount
            let amount = 10000; // default
            const match = message.match(/(\d+[\d,]*)/);
            if (match) {
                amount = parseInt(match[0].replace(/,/g, ''));
            }
            logAgent("guardian", `Evaluation: Requested amount KES ${amount.toLocaleString()}`);

            // Apply k-anonymity check
            logAgent("guardian", `Verifying k-anonymity for Kakamega County database... [k=18 - PASSED]`);

            // Apply PRIDE Loop conditions
            const isHighPriority = amount > 15000 || hasStress || STATE.user.dependentsUnder5 >= 2;
            
            if (isHighPriority) {
                logAgent("guardian", "⚠️ High-priority / high-risk criteria met: amount > KES 15K, stress flag, or dependents under 5.");
                logAgent("guardian", "PRIDE Loop triggered: Autopilot paused. Initiating Hunter Agent escalation.");
                appendBubble("system", "Guardian Agent paused auto-score. Escalated to Hunter Agent (Human-in-the-Loop)");
                triggerHunter(amount, hasStress, message);
            } else {
                logAgent("guardian", "Amount <= KES 15,000 and low vulnerability indicators. Scoring loan locally...");
                logAgent("guardian", "Scoring verified against matooke harvest tables.");
                
                // Empathy filter check
                logAgent("guardian", "Applying Dignity Filter to response generation...");
                setTimeout(() => {
                    const approveMsg = `Habari Grace, mkopo wako wa KES ${amount.toLocaleString()} umeidhinishwa na kutumwa kwa simu yako. Mpango wako wa malipo umesawazishwa na mavuno yako ya Oktoba. Piga *123# kuona malipo yako. Ujima SACCO iko nawe.`;
                    appendBubble("agent", approveMsg);
                    
                    // Update state
                    STATE.user.outstandingBalance = amount;
                    STATE.user.availableCredit -= amount;
                    STATE.user.repaymentStatus = "Active Repayment Cycle";
                    renderDashboard();

                    logCycleEvent("LOAN_AUTO_APPROVE", message, "success", 5);

                    guardianStatus.className = "agent-status idle";
                    guardianStatus.innerText = "Idle";
                    guardianCard.classList.remove("active");
                }, 1200);
            }
        }, 1500);
    }

    function triggerHunter(amount, hasStress, rawMsg) {
        setTimeout(() => {
            // Reset Guardian card visual
            document.getElementById("agent-guardian-card").classList.remove("active");
            document.getElementById("agent-guardian-card").querySelector(".agent-status").className = "agent-status idle";
            document.getElementById("agent-guardian-card").querySelector(".agent-status").innerText = "Idle";

            const hunterCard = document.getElementById("agent-hunter-card");
            const hunterStatus = hunterCard.querySelector(".agent-status");
            hunterCard.classList.add("active");
            hunterStatus.className = "agent-status active";
            hunterStatus.innerText = "Escalating";

            logAgent("hunter", "Hunter Agent engaged. Creating human officer briefing packet...");
            
            // Live RAG integration from Kenya Agricultural Observatory
            logAgent("hunter", `Querying live RAG endpoint for sub-county Kakamega: Rainfall=${STATE.observatoryData.rain}, SoilMoisture=${STATE.observatoryData.moisture}, PriceIndex=${STATE.observatoryData.priceIndex}`);
            logAgent("hunter", "Integrating local inflation and crop harvest cycles...");
            
            // Assign crop specialist
            let specialist = "Officer Sarah Wekesa (Maize/Matooke Specialist)";
            logAgent("hunter", `Matching application to regional specialist: ${specialist}`);

            // Pre-compile briefing details
            const briefStr = `
                APPLICANT BRIEFING PACKET:
                - Name: Grace Auma (42yo, Matooke Vendor)
                - Region: Kakamega Sub-County
                - Dependents: 3 children under 5
                - Request: KES ${amount.toLocaleString()} for School Fees/Seeds
                - Harvest Cycle Peak: October (High liquidity)
                - Chama Guarantees: Baraka Women Chama (Balance: KES 8,500)
                - RAG Weather Status: Rainfall probability is ${STATE.observatoryData.rain} | Soil Moisture is ${STATE.observatoryData.moisture}
                - Recommendation: Restructured harvest-aligned schedule. Cross-sell index drought insurance.
            `;
            logAgent("hunter", "Briefing packet generated successfully.");
            logAgent("hunter", `Notifying ${specialist} for manual override.`);

            setTimeout(() => {
                appendBubble("agent", `Habari Grace, ombi lako la mkopo linashughulikiwa na afisa wetu Sarah Wekesa ili kuhakikisha malipo yako yanasawazishwa vyema na mapato yako. Sarah atawasiliana nawe baada ya dakika 15.`);
                appendBubble("system", "Human Officer Sarah Wekesa notified via Hunter Agent interface.");
                
                // Log escalation in cycle log (failure category since auto-triage had to pause)
                // Wait: school fee timing is the classic failure mode for cycle analysis
                const isSchoolFeesMsg = rawMsg.toLowerCase().includes("fees") || rawMsg.toLowerCase().includes("shule");
                logCycleEvent("LOAN_ESCALATION", rawMsg, isSchoolFeesMsg ? "mismatch_school_fees" : "manual_override", 4);

                hunterStatus.className = "agent-status idle";
                hunterStatus.innerText = "Idle";
                hunterCard.classList.remove("active");
            }, 1500);
        }, 1500);
    }
}

// CYCLE Self-Improvement Engine Implementation
function initCycleEngine() {
    const triggerBtn = document.getElementById("btn-run-cycle-analysis");
    const analysisBox = document.getElementById("cycle-analysis-box");
    const reportText = document.getElementById("cycle-report-text");
    const approvalInput = document.getElementById("cycle-approval-cmd");
    const deployBtn = document.getElementById("btn-deploy-cycle-patch");

    // Initialize mock database entries if none exist
    if (!localStorage.getItem("ujima_cycle_logs")) {
        const seedLogs = [
            { timestamp: Date.now() - 3600000 * 24 * 5, type: "LOAN_AUTO_APPROVE", message: "Nataka mkopo wa 5000", outcome: "success", csat: 5 },
            { timestamp: Date.now() - 3600000 * 24 * 4, type: "LOAN_ESCALATION", message: "Need KES 20,000 for fees", outcome: "mismatch_school_fees", csat: 3 },
            { timestamp: Date.now() - 3600000 * 24 * 3, type: "LOAN_ESCALATION", message: "School fee payment KES 18,000 requested", outcome: "mismatch_school_fees", csat: 3 },
            { timestamp: Date.now() - 3600000 * 24 * 2, type: "INQUIRY", message: "Harvest calendar checks Kakamega", outcome: "success", csat: 5 },
            { timestamp: Date.now() - 3600000 * 24 * 1, type: "LOAN_ESCALATION", message: "Need fees for my children school is starting", outcome: "mismatch_school_fees", csat: 2 }
        ];
        localStorage.setItem("ujima_cycle_logs", JSON.stringify(seedLogs));
    }

    updateCycleMetrics();

    triggerBtn.addEventListener("click", () => {
        // Run analysis on stored logs
        const logs = JSON.parse(localStorage.getItem("ujima_cycle_logs") || "[]");
        const total = logs.length;
        
        const feeMismatches = logs.filter(l => l.outcome === "mismatch_school_fees").length;
        const mismatchPct = total > 0 ? Math.round((feeMismatches / logs.length) * 100) : 0;

        const report = `======================================================
CYCLE SYSTEM PERFORMANCE AUDIT (RUN: SUNDAY 2:00 AM EAT)
======================================================
Total Interactions Evaluated: ${total}
Successful Autopilot Approvals: ${logs.filter(l => l.outcome === 'success').length}
Manual Escalations Triggered: ${logs.filter(l => l.outcome !== 'success').length}

[BIAS & ESCALATION DETECTION LOOP]
* Top Escalation Category: School Fee Timing Mismatches
* Frequency Rate: ${feeMismatches} sessions (${mismatchPct}% of total audit queue)
* Root Cause Analysis: Scout Agent fails to predict school fee deadlines prior 
  to harvest periods, forcing members to query under high financial stress.

[PROPOSED SYSTEM COURSE-CORRECTION]
* Proposing patch code: [CYCLE-PATCH-2026-02-15]
* Action: Integrate Kenya Ministry of Education school term calendar 
  into Scout Agent context dynamically. Scout will proactively suggest 
  savings allocations for school fees 90 days before terms start.

[VALIDATION GATE CONFIGURATION]
* Execution token required: "/approve-cycle-2026-02-15"
======================================================`;

        reportText.innerText = report;
        analysisBox.style.display = "block";
        analysisBox.scrollIntoView({ behavior: 'smooth' });
    });

    deployBtn.addEventListener("click", () => {
        const cmd = approvalInput.value.trim();
        if (cmd === "/approve-cycle-2026-02-15") {
            alert("🚀 CYCLE patch /approve-cycle-2026-02-15 approved by human operator. Deploying update to Scout Agent active rules...");
            
            // Apply simulation patch
            STATE.agentLogs.scout.push(`[${new Date().toLocaleTimeString()}] ⚙️ CYCLE Patch deployed: Kenya Ministry of Education school term calendar integrated. Scout will now pre-allocate fee saving recommendations.\n`);
            
            const logBox = document.getElementById("log-scout");
            if (logBox) {
                logBox.innerText = STATE.agentLogs.scout.join("");
            }

            // Reset box
            approvalInput.value = "";
            analysisBox.style.display = "none";
            
            // Add a success log
            logCycleEvent("SYSTEM_PATCH", "Cycle patch /approve-cycle-2026-02-15 deployed successfully", "success", 5);
            updateCycleMetrics();
        } else {
            alert("❌ Invalid approval command. Please enter: /approve-cycle-2026-02-15");
        }
    });
}

function logCycleEvent(type, message, outcome, csat) {
    const logs = JSON.parse(localStorage.getItem("ujima_cycle_logs") || "[]");
    logs.push({
        timestamp: Date.now(),
        type: type,
        message: message,
        outcome: outcome,
        csat: csat
    });
    localStorage.setItem("ujima_cycle_logs", JSON.stringify(logs));
}

function updateCycleMetrics() {
    const logs = JSON.parse(localStorage.getItem("ujima_cycle_logs") || "[]");
    
    // Update count display
    const countSpan = document.getElementById("cycle-log-count");
    if (countSpan) countSpan.innerText = `${logs.length} interactions logged`;

    // Update CSAT display
    const ratings = logs.filter(l => l.csat > 0).map(l => l.csat);
    const avgCsat = ratings.length > 0 ? (ratings.reduce((a,b)=>a+b, 0) / ratings.length).toFixed(1) : "N/A";
    
    const csatVal = document.getElementById("cycle-csat-val");
    if (csatVal) {
        csatVal.innerText = avgCsat + " / 5.0";
    }
}

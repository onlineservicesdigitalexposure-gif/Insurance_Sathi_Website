import type { ServiceItem, ServiceSlug } from "@/types";

export const SERVICES_DATA: readonly ServiceItem[] = [
  {
    id: "srv-purchase-new-policy",
    slug: "purchase-new-policy",
    aliases: ["new-policy", "buy-insurance", "purchase-policy"],
    title: "Purchase New Policy",
    heroHeading: "Expert Guidance to Choose & Purchase the Right Insurance Policy",
    heroSubheading:
      "Personalized, unbiased insurance advisory to protect your health, family finances, vehicles, and business in Barasat, Madhyamgram, and Habra. We help you decode exclusions and sub-limits before you commit.",
    shortDescription:
      "Expert guidance to select and purchase the right insurance policy matching your family's financial security and budget.",
    fullDescription:
      "Choosing an insurance policy without unbiased guidance often leads to insufficient coverage or hidden exclusions. At Insurance Sathi, we assess your specific family needs, existing liabilities, and financial milestones to help you purchase the most appropriate Life, Health, Term, Motor, or Commercial insurance policy with transparent terms. We prioritize honest disclosures to ensure smooth claims in the future.",
    iconName: "FilePlus2",
    imagePath: "/images/services/new-policy-cartoon.webp",
    imageAlt: "Unbiased insurance policy advisory and proposal documentation assistance by Insurance Sathi",
    highlights: [
      "Unbiased need-based coverage assessment across top insurers",
      "Thorough review of waiting periods, room-rent caps, and policy exclusions",
      "Complete documentation, proposal form filing, and KYC assistance",
      "Guidance through pre-policy medical check-up requirements if mandated",
    ],
    coverageDetails: [
      {
        title: "Family Financial Need Analysis",
        description:
          "Evaluation of ongoing liabilities, income replacement requirements, and future educational milestones to recommend adequate sum insured.",
        included: true,
      },
      {
        title: "Objective Plan Comparisons",
        description:
          "Clear breakdown of co-payments, room-rent limits, restoration benefits, and rider options without sales bias.",
        included: true,
      },
      {
        title: "Accurate Proposal Documentation",
        description:
          "Assistance in filling proposal forms with full material health disclosure to prevent future claim disputes.",
        included: true,
      },
      {
        title: "Doorstep & In-Office Advisory",
        description:
          "Personal consultation at our Duckbanglow More office or at your residence across Barasat, Madhyamgram, and Habra.",
        included: true,
      },
      {
        title: "Policy Issuance & Bond Verification",
        description:
          "Detailed verification of nominee records, sum assured, and personal details upon policy document generation.",
        included: true,
      },
      {
        title: "Underwriting & Approval Decision",
        description:
          "Underwriting approval, medical loading, and policy issuance decisions are strictly at the sole discretion of the respective insurance company.",
        included: false,
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Requirement Consultation",
        description:
          "We understand your family structure, health background, financial milestones, and existing insurance protection gaps.",
      },
      {
        stepNumber: 2,
        title: "Objective Policy Comparison",
        description:
          "We present suitable policy choices, explaining waiting periods, sub-limits, co-payments, and rider benefits transparently.",
      },
      {
        stepNumber: 3,
        title: "Proposal Form & Material Disclosure",
        description:
          "We help you fill the proposal forms accurately with full material disclosures of pre-existing health conditions.",
      },
      {
        stepNumber: 4,
        title: "Medical Underwriting Scheduling",
        description:
          "If the insurer mandates a medical check-up, we help coordinate appointments at designated diagnostic centers.",
      },
      {
        stepNumber: 5,
        title: "Policy Bond Delivery & Verification",
        description:
          "Once the policy is issued, we verify personal details, nominee designations, and rider endorsements together.",
      },
    ],
    requiredDocuments: [
      {
        category: "Identity & Age Proof",
        items: [
          "Aadhaar Card (front and back)",
          "PAN Card (mandatory for financial transactions)",
          "Passport / Voter ID / Valid Driving License",
        ],
      },
      {
        category: "Address Proof",
        items: [
          "Aadhaar Card with current residential address",
          "Recent Utility Bill (Electricity / Water / Piped Gas, under 3 months old)",
          "Bank Passbook or Statement with current address",
        ],
      },
      {
        category: "Income & Financial Proof (for High Cover / Term Plans)",
        items: [
          "Last 3 months' salary slips with bank statement showing salary credits",
          "Latest Form 16 / Income Tax Return (ITR-V) acknowledgement",
          "Audited balance sheet & P&L statement (for self-employed / business owners)",
        ],
      },
      {
        category: "Medical & Health Records",
        items: [
          "Past discharge summaries or surgical records (if any hospitalization occurred)",
          "Prescription slips and diagnostic reports for pre-existing conditions (e.g. hypertension, diabetes)",
        ],
      },
    ],
    documentsDisclaimer:
      "Exact document requirements and financial underwriting thresholds are determined by the respective insurance company based on applicant entry age, chosen sum insured, and policy type.",
    keyBenefits: [
      "Zero high-pressure sales tactics or unsolicited spam calls",
      "Clarity on policy exclusions and waiting periods before paying premium",
      "Properly structured sum insured tailored to family inflation",
      "Local advisor support throughout the entire tenure of your policy",
    ],
    targetAudience:
      "Individuals, salaried professionals, business owners, and families in Barasat, Madhyamgram, and Habra seeking transparent, dependable insurance protection.",
    serviceFaqs: [
      {
        question: "How does Insurance Sathi help me choose between different insurance companies?",
        answer:
          "We analyze your family size, health profile, budget, and specific hospital preferences in North 24 Parganas. We explain room rent limits, ICU caps, pre-existing disease waiting periods, and claim settlement processes objectively across leading insurers so you make an informed decision.",
      },
      {
        question: "Do you guarantee policy approval once the proposal form is submitted?",
        answer:
          "No. Policy approval, premium loading, or proposal rejection is strictly at the sole discretion of the respective insurance company based on their internal underwriting guidelines and medical assessment. Our role is to ensure accurate documentation and full material disclosures.",
      },
      {
        question: "Can MD Abrahim visit my home in Barasat, Madhyamgram, or Habra for consultation?",
        answer:
          "Yes. In addition to welcoming you at our permanent office at Duckbanglow More on Jessore Road, Barasat, we provide scheduled doorstep consultations across Barasat, Madhyamgram, and Habra for your family's convenience.",
      },
      {
        question: "Why is material disclosure of past illnesses so important when buying a new policy?",
        answer:
          "Hiding or omitting pre-existing conditions (like hypertension, diabetes, or past surgeries) is the leading cause of claim repudiation in India. Full material disclosure protects your family by ensuring the policy becomes fully indisputable once the mandated waiting period passes.",
      },
    ],
    seo: {
      metaTitle: "Purchase New Insurance Policy | Expert Advisory in Barasat - Insurance Sathi",
      metaDescription:
        "Get professional guidance to purchase Life, Health, Term, and Motor insurance in Barasat, Madhyamgram, and Habra with Insurance Sathi. Transparent comparisons and complete documentation.",
      keywords: [
        "Purchase New Insurance Policy Barasat",
        "Buy Health Insurance Barasat",
        "Life Insurance Agent Duckbanglow More",
        "Term Insurance Consultation North 24 Parganas",
        "Motor Insurance Buying Assistance Habra",
      ],
    },
  },
  {
    id: "srv-policy-services",
    slug: "policy-services",
    aliases: ["policy-service", "nominee-update", "duplicate-policy"],
    title: "Policy Services & Servicing",
    heroHeading: "Comprehensive Policy Servicing & Record Endorsement Assistance",
    heroSubheading:
      "Ensure your life, health, and general insurance policies remain accurate, updated, and legally sound. We assist with nominee changes, address updates, banking mandates, and duplicate policy applications across North 24 Parganas.",
    shortDescription:
      "Hassle-free servicing for existing policies: nominee updates, address changes, contact corrections, and duplicate bond issuance.",
    fullDescription:
      "Managing an active insurance policy requires keeping official records up-to-date. Inaccurate nominee details, outdated contact information, or missing policy documents can create severe difficulties during claim settlement. We assist policyholders with all administrative service requests across life, health, and general insurance policies, saving you tedious branch queues.",
    iconName: "Settings2",
    imagePath: "/images/services/policy-service-cartoon.webp",
    imageAlt: "Insurance policy servicing, nominee endorsement, and duplicate bond assistance by Insurance Sathi",
    highlights: [
      "Nominee change, addition, and legal heir endorsement assistance",
      "Address, mobile number, and email ID corrections in insurer records",
      "Bank mandate (NACH / ECS) registration and IFSC updates for payouts",
      "Application for duplicate policy documents in case of loss or damage",
    ],
    coverageDetails: [
      {
        title: "Nominee Update & Verification",
        description:
          "Filing formal nominee change or endorsement applications, ensuring minor nominees have legal appointee details recorded.",
        included: true,
      },
      {
        title: "Contact & Residential Address Corrections",
        description:
          "Updating registered mobile numbers, email addresses, and postal addresses to ensure timely policy notices and regulatory alerts.",
        included: true,
      },
      {
        title: "Bank Account & NACH Mandate Registration",
        description:
          "Registering bank details for auto-debit of premiums and direct credit of claim or maturity disbursements.",
        included: true,
      },
      {
        title: "Duplicate Policy Document Application",
        description:
          "Drafting indemnity bond papers, loss declarations, and procedural documentation for issuing duplicate policy schedules.",
        included: true,
      },
      {
        title: "Mode of Premium Frequency Alteration",
        description:
          "Assisting in shifting between annual, half-yearly, and monthly payment modes as permitted by policy rules.",
        included: true,
      },
      {
        title: "Endorsement Approval Authority",
        description:
          "Formal approval and issuance of endorsement letters are governed strictly by the respective insurance company's operational guidelines.",
        included: false,
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Policy Audit & Requirement Verification",
        description:
          "We examine your current policy schedule and verify the exact servicing requirement against the insurer's records.",
      },
      {
        stepNumber: 2,
        title: "Documentation & Form Collation",
        description:
          "We prepare the prescribed endorsement forms, indemnity bonds (if applicable), and self-attested KYC documents.",
      },
      {
        stepNumber: 3,
        title: "Submission & Tracking",
        description:
          "We submit the service request via authorized insurer portals or branch counters and track the service request number.",
      },
      {
        stepNumber: 4,
        title: "Endorsement Confirmation & Handover",
        description:
          "We confirm the official endorsement letter or updated policy bond has been generated and deliver it to you.",
      },
    ],
    requiredDocuments: [
      {
        category: "Existing Policy Records",
        items: [
          "Original Policy Bond or copy of policy schedule",
          "Latest renewal premium receipt showing policy status",
        ],
      },
      {
        category: "Policyholder KYC",
        items: [
          "Self-attested copy of Aadhaar Card",
          "Self-attested copy of PAN Card",
          "Passport-size photographs (if required by insurer form)",
        ],
      },
      {
        category: "Nominee Endorsement Proofs",
        items: [
          "Aadhaar Card or ID proof of the new nominee",
          "Proof of relationship with policyholder (e.g. birth certificate, marriage certificate)",
          "Appointee KYC and written consent (if nominee is a minor under 18 years)",
        ],
      },
      {
        category: "Banking & Address Proofs",
        items: [
          "Cancelled cheque leaf with account holder's name printed",
          "Attested bank passbook showing IFSC and account number",
          "Utility bill or Aadhaar showing updated residential address",
        ],
      },
    ],
    documentsDisclaimer:
      "Specific service forms, stamp paper denominations for indemnity bonds, and attested copy requirements are governed by the respective insurance company's operational rules.",
    keyBenefits: [
      "Prevents claim settlement disputes and nominee rejections during critical times",
      "Saves repeated branch visits, long queues, and paperwork confusion",
      "Ensures timely SMS alerts, premium receipts, and bonus notifications",
      "Hands-on tracking until the official endorsement letter is received",
    ],
    targetAudience:
      "Policyholders having existing policies who need nominee updates, address corrections, document replacements, or banking updates without bureaucratic hassle.",
    serviceFaqs: [
      {
        question: "Why is updating nominee details in my life or health policy so urgent?",
        answer:
          "If nominee records are outdated or specify a deceased relative, death claim settlements face immense legal hurdles, requiring succession certificates from court. Updating nominees ensures prompt, direct claim disbursement to your intended beneficiaries.",
      },
      {
        question: "What should I do if I have lost my original life insurance policy bond?",
        answer:
          "Do not panic. We guide you through executing an indemnity bond on non-judicial stamp paper, publishing a loss notice if mandated by the insurer, and submitting the application to secure an official duplicate policy document.",
      },
      {
        question: "How long does it typically take for an insurance company to endorse changes?",
        answer:
          "Simple changes like mobile number and address updates typically reflect within 2 to 5 working days. Nominee changes and duplicate bond issuances usually take 7 to 15 working days depending on the insurance company's verification process.",
      },
      {
        question: "Can Insurance Sathi assist me even if I originally bought the policy from another agent or bank?",
        answer:
          "Yes. We assist all policyholders in Barasat, Madhyamgram, Habra, and North 24 Parganas with policy servicing regardless of where or through whom the policy was originally purchased.",
      },
    ],
    seo: {
      metaTitle: "Policy Servicing & Nominee Update Services in Barasat - Insurance Sathi",
      metaDescription:
        "Update nominee details, address, bank accounts, or apply for duplicate insurance policy bonds in Barasat, Madhyamgram, and Habra with Insurance Sathi.",
      keywords: [
        "Insurance Policy Nominee Update Barasat",
        "Duplicate Policy Bond Barasat",
        "Policy Servicing North 24 Parganas",
        "Insurance Address Change Madhyamgram",
        "Policy Endorsement Assistance Habra",
      ],
    },
  },
  {
    id: "srv-premium-deposit-assistance",
    slug: "premium-deposit-assistance",
    aliases: ["premium-deposit", "pay-premium", "premium-assistance"],
    title: "Premium Deposit Assistance",
    heroHeading: "Reliable Premium Deposit Assistance & Renewal Tracking",
    heroSubheading:
      "Never let your policy lapse unintentionally. Get timely renewal notifications, official online deposit assistance, grace period guidance, and immediate insurer payment receipts in Barasat and surrounding areas.",
    shortDescription:
      "Timely premium payment guidance, auto-debit setup, grace period monitoring, and instant official receipt retrieval.",
    fullDescription:
      "Missing an insurance premium deadline can cause your policy to lapse, voiding critical health or life coverage when unexpected emergencies arise. Insurance Sathi helps policyholders understand their renewal schedules, navigate grace periods, execute secure digital or branch deposits, and set up automated debits (NACH) for peace of mind. We ensure official insurer receipts and tax certificates are archived securely.",
    iconName: "CreditCard",
    imagePath: "/images/services/premium-deposit-cartoon.webp",
    imageAlt: "Insurance renewal tracking, premium deposit assistance, and grace period monitoring by Insurance Sathi",
    highlights: [
      "Renewal calendar tracking and advance grace-period reminders",
      "Secure online portal payment guidance with official insurer links",
      "NACH / e-Mandate auto-debit setup to prevent unintended lapses",
      "Instant collection and digital archival of official payment receipts",
    ],
    coverageDetails: [
      {
        title: "Renewal Due Date Tracking",
        description:
          "Proactive monitoring of upcoming premium due dates with advance alerts via WhatsApp and phone call.",
        included: true,
      },
      {
        title: "30-Day Grace Period Monitoring",
        description:
          "Explaining grace period timelines to protect risk cover and ensure payments are credited before lapse occurs.",
        included: true,
      },
      {
        title: "Official Payment Channel Assistance",
        description:
          "Guiding you through authenticated insurer portals, authorized payment counters, or direct banking gateways.",
        included: true,
      },
      {
        title: "Official Insurer Receipt Procurement",
        description:
          "Retrieving authentic insurer renewal receipts and 80C/80D tax certificates immediately after payment confirmation.",
        included: true,
      },
      {
        title: "e-NACH Auto-Debit Mandate Registration",
        description:
          "Setting up standing instructions through net banking or debit card for automatic, hands-off renewals.",
        included: true,
      },
      {
        title: "Premium Discount or Waiver Guarantee",
        description:
          "Premium amounts, applicable statutory taxes, and grace period rules are strictly determined by the respective insurer and IRDAI regulations.",
        included: false,
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Due Date & Amount Verification",
        description:
          "We check the exact premium amount, applicable GST, and grace period window directly from the insurer system.",
      },
      {
        stepNumber: 2,
        title: "Payment Channel Selection",
        description:
          "We guide you to pay securely through official insurer web portals, UPI, net banking, or authorized branch desks.",
      },
      {
        stepNumber: 3,
        title: "Transaction Confirmation",
        description:
          "We verify that the payment is acknowledged by the insurer system and that the policy status remains active.",
      },
      {
        stepNumber: 4,
        title: "Receipt & Tax Certificate Retrieval",
        description:
          "We collect the official insurer premium receipt and tax exemption certificate for your personal tax filing.",
      },
    ],
    requiredDocuments: [
      {
        category: "Policy Details",
        items: [
          "Policy Number and Insurer Name",
          "Policyholder's Date of Birth (as registered with insurer)",
        ],
      },
      {
        category: "Payment Particulars",
        items: [
          "Previous renewal premium receipt or renewal notice",
          "Payment method (UPI ID, Debit Card, Net Banking, or Cheque)",
        ],
      },
      {
        category: "For NACH / Auto-Debit Registration",
        items: [
          "Bank account number and IFSC",
          "Registered mobile number for bank OTP authorization",
          "Cancelled cheque leaf or bank passbook copy",
        ],
      },
    ],
    documentsDisclaimer:
      "Accepted payment modes, transaction limits, and late fee calculations are subject to the respective insurance company's operational rules.",
    keyBenefits: [
      "Avoids late fees, interest charges, and accidental policy lapses",
      "Protects continuity benefits such as health waiting period credits and No-Claim Bonuses",
      "Immediate documentation for Section 80C and Section 80D income tax deductions",
      "Reliable personal reminder assistance before policy expiry",
    ],
    targetAudience:
      "Busy policyholders, senior citizens, and families in Barasat, Madhyamgram, and Habra who want reliable assistance in ensuring their insurance policies stay continuously in-force.",
    serviceFaqs: [
      {
        question: "What is a grace period and what happens if I pay within it?",
        answer:
          "A grace period is a statutory window (typically 30 days for annual, half-yearly, and quarterly modes; 15 days for monthly mode) after the due date during which your full insurance cover remains active. Paying within the grace period keeps your policy in-force with zero penalty.",
      },
      {
        question: "Do you guarantee any discount or reduction on the insurer's premium?",
        answer:
          "No. Premium amounts, modal loadings, and statutory taxes are set strictly by the respective insurance company and approved by the IRDAI. We provide procedural, scheduling, and deposit assistance, not premium discounts.",
      },
      {
        question: "Can Insurance Sathi help me get my 80C or 80D tax receipt for premium paid?",
        answer:
          "Yes. Once your premium deposit reflects in the insurer's records, we assist you in downloading the official renewal receipt and valid tax certificate for your income tax return filing.",
      },
      {
        question: "How can I set up automated payments so my policy never expires?",
        answer:
          "We help you register an e-NACH mandate or standing instruction linking your bank account directly with the insurer. Your renewal premium is then debited automatically on the scheduled date, ensuring unbroken risk protection.",
      },
    ],
    seo: {
      metaTitle: "Insurance Premium Deposit Assistance Barasat - Insurance Sathi",
      metaDescription:
        "Timely insurance premium payment assistance, auto-debit registration, and renewal receipt tracking in Barasat, Madhyamgram, and Habra.",
      keywords: [
        "Insurance Premium Deposit Barasat",
        "Pay Insurance Premium Duckbanglow More",
        "Insurance Renewal Assistance North 24 Parganas",
        "Health Insurance Premium Help Madhyamgram",
        "Life Insurance Renewal Habra",
      ],
    },
  },
  {
    id: "srv-lapsed-policy-services",
    slug: "lapsed-policy-services",
    aliases: ["lapsed-policy", "revive-policy", "lapsed-policy-service"],
    title: "Lapsed Policy Services & Revival",
    heroHeading: "Dedicated Revival Guidance for Discontinued Insurance Policies",
    heroSubheading:
      "Reclaim your valuable life and health protection before it is permanently forfeited. We help policyholders in Barasat, Madhyamgram, and Habra calculate revival costs, access interest concession campaigns, and complete medical underwriting requirements.",
    shortDescription:
      "Professional revival advisory for discontinued policies: revival quotation calculation, medical re-underwriting, and paid-up options.",
    fullDescription:
      "When a policy lapses due to non-payment of premiums beyond the grace period, coverage ceases, putting family financial security at risk. Reviving a lapsed policy is often far more beneficial than purchasing a new one at a higher age. We help you calculate revival quotations, navigate insurer revival campaigns, handle declaration of good health (DGH) forms, and evaluate paid-up policy options with complete transparency.",
    iconName: "RotateCcw",
    imagePath: "/images/services/lapsed-policy-cartoon.webp",
    imageAlt: "Lapsed insurance policy audit, revival quotation calculation, and reinstatement support by Insurance Sathi",
    highlights: [
      "Revival quotation and accrued interest calculation from official insurer systems",
      "Guidance on special revival schemes with interest concession campaigns",
      "Declaration of Good Health (DGH) & medical re-assessment assistance",
      "Evaluation between policy revival, paid-up value, and surrender feasibility",
    ],
    coverageDetails: [
      {
        title: "Lapse Duration & Policy Status Audit",
        description:
          "Verifying exact lapse date, policy type (traditional, ULIP, term), accrued bonuses, and current cash/paid-up value.",
        included: true,
      },
      {
        title: "Official Revival Quote Procurement",
        description:
          "Obtaining the official insurer quotation detailing back-premiums, accrued interest, and applicable GST.",
        included: true,
      },
      {
        title: "Special Campaign & Concession Tracking",
        description:
          "Monitoring insurer special revival drives offering late fee and interest concessions to minimize revival outlay.",
        included: true,
      },
      {
        title: "Health Declaration & Form Assistance",
        description:
          "Assisting in completing Declaration of Good Health (DGH) questionnaires and medical test requirements if mandated.",
        included: true,
      },
      {
        title: "Financial Comparison (Revival vs Fresh Policy)",
        description:
          "Comparing the cost of reviving the older policy at the original entry age versus buying a brand-new policy at current age.",
        included: true,
      },
      {
        title: "Guaranteed Reinstatement / Approval",
        description:
          "Policy revival approval is subject to insurer underwriting assessment, medical reports, and clearance of all unpaid premiums.",
        included: false,
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Status & Lapse Duration Audit",
        description:
          "We check the exact lapse date, policy plan type, and accumulated surrender or paid-up value from insurer records.",
      },
      {
        stepNumber: 2,
        title: "Revival Quotation Procurement",
        description:
          "We obtain the official revival quotation detailing unpaid back-premiums, late interest, and required underwriting documents.",
      },
      {
        stepNumber: 3,
        title: "Health Declaration & Form Filing",
        description:
          "We assist with the Declaration of Good Health (DGH) questionnaire and coordinate medical check-ups if required by policy rules.",
      },
      {
        stepNumber: 4,
        title: "Deposit & Underwriting Follow-Up",
        description:
          "We guide payment through official insurer channels and monitor underwriting clearance with the insurer branch.",
      },
      {
        stepNumber: 5,
        title: "Reinstatement Endorsement Confirmation",
        description:
          "We confirm the policy is officially reinstated and that full life cover, bonus accumulation, and riders are restored.",
      },
    ],
    requiredDocuments: [
      {
        category: "Policy Particulars",
        items: [
          "Original Policy Bond or copy of first premium schedule",
          "Last paid premium receipt (showing the date up to which premiums were paid)",
        ],
      },
      {
        category: "Revival & Health Forms",
        items: [
          "Insurer-specific Declaration of Good Health (DGH) form filled and signed",
          "Recent passport-size photograph of the life assured",
        ],
      },
      {
        category: "Medical Reports (if mandated by insurer rules)",
        items: [
          "Special Medical Report (SMR) or designated pathology tests (e.g. fasting blood sugar, lipid profile, ECG)",
          "Reports must be conducted at insurer-authorized diagnostic centers as per company protocol",
        ],
      },
      {
        category: "Policyholder KYC & Financial Proofs",
        items: [
          "Self-attested PAN and Aadhaar Card copies",
          "Recent income proof (for revival of high sum-assured term or whole life policies)",
        ],
      },
    ],
    documentsDisclaimer:
      "Revival terms, interest rates, medical examination thresholds, and concession campaigns vary significantly between insurers and specific policy products.",
    keyBenefits: [
      "Retains original entry-age premium rates, which are significantly cheaper than current age",
      "Restores accrued bonuses, loyalty additions, and continuity benefits",
      "Prevents heavy financial loss from premature surrender or policy forfeiture",
      "Honest guidance on whether revival or a fresh policy is financially advantageous",
    ],
    targetAudience:
      "Holders of discontinued or forgotten life and health policies in Barasat, Madhyamgram, and Habra looking to reclaim their financial protection.",
    serviceFaqs: [
      {
        question: "Why is reviving my old policy usually better than purchasing a brand-new one?",
        answer:
          "Premiums in life insurance increase with entry age. Your older policy locks in lower premium rates from your younger age. Furthermore, reviving restores previously accrued bonuses, which would otherwise be forfeited.",
      },
      {
        question: "Do you guarantee that my lapsed policy will definitely be revived by the company?",
        answer:
          "No. Policy revival is subject strictly to the insurer's underwriting approval. If significant health deterioration has occurred during the lapse period, the insurer may request medical tests, propose a premium loading, or decline revival.",
      },
      {
        question: "What are special revival campaigns with interest concessions?",
        answer:
          "Life insurance companies (such as LIC and private insurers) periodically launch revival campaigns offering substantial concessions (up to 20%–30%) on late payment interest. We monitor these drives to help you revive policies with minimum expense.",
      },
      {
        question: "What happens if I cannot afford to pay all unpaid back-premiums at once?",
        answer:
          "If the total revival amount is prohibitive, we help you evaluate alternative options—such as converting the policy into a Paid-Up policy (if minimum premiums were paid) or exploring loan facilities against policy surrender value.",
      },
    ],
    seo: {
      metaTitle: "Lapsed Insurance Policy Revival in Barasat - Insurance Sathi",
      metaDescription:
        "Revive your discontinued life and health insurance policies in Barasat, Madhyamgram, and Habra. Get revival quote calculations, DGH assistance, and interest concession guidance.",
      keywords: [
        "Lapsed Policy Revival Barasat",
        "Revive Discontinued Insurance Policy",
        "Insurance Revival Scheme North 24 Parganas",
        "LIC Lapsed Policy Help Madhyamgram",
        "Policy Reinstatement Habra",
      ],
    },
  },
  {
    id: "srv-insurance-claim-assistance",
    slug: "insurance-claim-assistance",
    aliases: ["claim-assistance", "insurance-claims", "claims-support"],
    title: "Insurance Claim Assistance",
    heroHeading: "Compassionate, Step-by-Step Insurance Claim Documentation Support",
    heroSubheading:
      "Navigating a hospitalization, road accident, or bereavement is difficult enough without complex paperwork. Insurance Sathi provides hands-on documentation guidance, TPA query assistance, and local liaison across Barasat and North 24 Parganas.",
    shortDescription:
      "Dedicated, compassionate support during claim emergencies: hospitalization cashless coordination, death claim filing, and motor claim follow-up.",
    fullDescription:
      "The true value of any insurance policy is tested at the time of a claim. In times of medical emergency, motor accident, or bereavement, dealing with confusing insurer paperwork and claim queries can be overwhelming. Insurance Sathi provides step-by-step guidance to ensure your claim documentation is accurate, complete, and submitted within mandatory notice windows.",
    iconName: "ShieldAlert",
    imagePath: "/images/services/claim-assistance-cartoon.webp",
    imageAlt: "Insurance claim assistance, hospital cashless documentation, and claim dossier review by Insurance Sathi",
    highlights: [
      "Health insurance pre-authorization and cashless hospital admission guidance",
      "Hospitalization reimbursement claim dossier compilation (bills, discharge summary, reports)",
      "Motor insurance accidental damage surveyor coordination and claim intimation",
      "Life insurance death claim filing with legal documentation verification",
    ],
    coverageDetails: [
      {
        title: "Immediate Claim Intimation",
        description:
          "Helping you formally notify the insurer or TPA within the mandatory 24-to-48-hour window to avoid procedural delays.",
        included: true,
      },
      {
        title: "Cashless Hospitalization Guidance",
        description:
          "Reviewing pre-authorization request forms at network hospital insurance desks and monitoring initial approvals.",
        included: true,
      },
      {
        title: "Reimbursement Claim Dossier Audit",
        description:
          "Meticulous verification of discharge cards, itemized hospital bills, pharmacy receipts, and indoor case papers.",
        included: true,
      },
      {
        title: "Motor Claim Surveyor Liaison",
        description:
          "Assisting in spot survey scheduling, repair estimate collection, and documentation for cashless network garage repairs.",
        included: true,
      },
      {
        title: "Life / Death Claim Assembly",
        description:
          "Compassionate compilation of municipal death certificates, claimant statements, nominee KYC, and bank mandates.",
        included: true,
      },
      {
        title: "Guaranteed Claim Settlement / Payout",
        description:
          "Claim settlement and disbursement decisions are strictly determined by the respective insurance company based on policy terms, conditions, and medical findings.",
        included: false,
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Immediate Claim Intimation",
        description:
          "We assist in notifying the insurer or TPA within the mandatory notification window to establish the claim file.",
      },
      {
        stepNumber: 2,
        title: "Comprehensive Document Audit",
        description:
          "We review all required papers—discharge cards, original bills, doctor prescriptions, or police GD—to ensure no missing records.",
      },
      {
        stepNumber: 3,
        title: "Dossier Submission & TPA Liaison",
        description:
          "We submit the dossier through authorized channels and actively help draft responses for any insurer or TPA queries.",
      },
      {
        stepNumber: 4,
        title: "Settlement Tracking & Account Credit",
        description:
          "We track claim progress until the final settlement advice is issued and funds are credited to the verified bank account.",
      },
    ],
    requiredDocuments: [
      {
        category: "Health Insurance Reimbursement Claims",
        items: [
          "Original Hospital Discharge Summary (stating diagnosis, clinical summary, and treatment course)",
          "Original Itemized Final Hospital Bill with detailed breakup of room rent, nursing, and medicines",
          "Original Paid Receipts against all hospital payments with receipt numbers and hospital seal",
          "Doctor's Prescriptions and matching Diagnostic / Laboratory investigation reports",
          "Duly filled and signed Claim Form (Part A by claimant, Part B by treating hospital)",
          "Cancelled Cheque leaf of the primary policyholder for direct NEFT settlement",
        ],
      },
      {
        category: "Cashless Hospitalization Admissions",
        items: [
          "Insurer Health Card or Policy Schedule",
          "Photo Identity Proof of the patient (Aadhaar / Voter ID / Passport)",
          "Doctor's initial consultation note recommending hospitalization",
        ],
      },
      {
        category: "Motor Accidental Damage Claims",
        items: [
          "Copy of Vehicle Registration Certificate (RC Book)",
          "Copy of Valid Driving License of the person driving at the time of accident",
          "Original repair estimate from authorized workshop / garage",
          "Police FIR or General Diary (GD) entry copy (mandatory if third-party damage or bodily injury occurred)",
        ],
      },
      {
        category: "Life Insurance Death Claims",
        items: [
          "Original Policy Document / Bond",
          "Official Death Certificate issued by Municipal Corporation / Gram Panchayat",
          "Claimant's Statement Form filled and signed by the registered nominee",
          "Nominee's KYC documents (PAN and Aadhaar) and cancelled cheque",
          "Post-Mortem Report and Police Inquest Report (mandatory for accidental or unnatural deaths)",
        ],
      },
    ],
    documentsDisclaimer:
      "Exact document checklists and verification mandates depend on the claim category, policy terms, and insurer underwriting and claims manuals.",
    keyBenefits: [
      "Significantly reduces chances of claim delays or procedural rejections due to incomplete paperwork",
      "Relieves family members of stressful bureaucratic correspondence during medical emergencies",
      "Clear guidance on legitimate claimable expenses versus non-medical consumables",
      "Available locally in Barasat for in-person document review and guidance",
    ],
    targetAudience:
      "Families, vehicle owners, and nominees facing hospitalizations, medical bills, accidental damages, or death claims who need dependable local support across North 24 Parganas.",
    serviceFaqs: [
      {
        question: "Does Insurance Sathi guarantee that my claim will be approved and paid?",
        answer:
          "No. Legally and ethically, no advisory service can guarantee claim settlement. Claim approval, deductions, and payouts are determined strictly by the respective insurance company based on policy terms, conditions, waiting periods, and medical facts. Our role is to ensure your documentation is 100% complete, genuine, and presented accurately to prevent procedural rejections.",
      },
      {
        question: "How quickly must I intimate the insurance company when hospitalization occurs?",
        answer:
          "For planned hospitalizations, insurers typically require notification 48 to 72 hours before admission. For emergency admissions, intimation must be submitted within 24 to 48 hours of admission. Timely intimation prevents claims from being questioned on procedural grounds.",
      },
      {
        question: "Can you review my medical claim dossier before I submit it to the TPA?",
        answer:
          "Yes. We meticulously audit your discharge summary, doctor prescriptions, diagnostic reports, and hospital bills to identify any discrepancies or missing documents before submission.",
      },
      {
        question: "What should I do if the insurance company issues an unexpected query letter?",
        answer:
          "Do not panic. Query letters are standard procedure when clarification is needed regarding medical history or bill breakdowns. We help you draft factual, well-documented responses supported by the treating doctor's certificates.",
      },
      {
        question: "How can families in Barasat, Madhyamgram, or Habra reach you during claim emergencies?",
        answer:
          "You can call our direct helpline at +91 93323 64068 or message us on WhatsApp. For critical hospitalizations, we provide emergency telephone guidance to navigate TPA pre-authorization desks.",
      },
    ],
    seo: {
      metaTitle: "Insurance Claim Assistance in Barasat - Health, Motor & Life Claims - Insurance Sathi",
      metaDescription:
        "Get dedicated insurance claim assistance in Barasat, Madhyamgram, and Habra. We assist with hospital cashless claims, reimbursement dossiers, and motor accident claims.",
      keywords: [
        "Insurance Claim Assistance Barasat",
        "Health Insurance Claim Help North 24 Parganas",
        "Hospital Cashless Claim Guidance Duckbanglow More",
        "Motor Insurance Claim Help Madhyamgram",
        "Death Claim Filing Advisor Habra",
      ],
    },
  },
] as const;

/**
 * Resolves a service item by its canonical slug or registered aliases.
 */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const normalized = slug.trim().toLowerCase();
  return (
    SERVICES_DATA.find((service) => service.slug === normalized) ||
    SERVICES_DATA.find((service) => service.aliases?.includes(normalized))
  );
}

/**
 * Returns all valid route slugs (canonical + aliases) for static generation.
 */
export function getAllServiceSlugs(): string[] {
  const set = new Set<string>();
  for (const s of SERVICES_DATA) {
    set.add(s.slug);
    if (s.aliases) {
      for (const a of s.aliases) {
        set.add(a);
      }
    }
  }
  return Array.from(set);
}

/**
 * Returns related services excluding the current active service.
 */
export function getRelatedServices(currentSlug: ServiceSlug, limit: number = 4): ServiceItem[] {
  return SERVICES_DATA.filter((s) => s.slug !== currentSlug).slice(0, limit);
}

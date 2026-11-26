import type { BlogPostItem, BlogAuthorInfo, BlogVideoItem } from "@/types";

export const BLOG_VIDEOS_DATA: readonly BlogVideoItem[] = [
  {
    id: "video-1",
    title: "Why Health Insurance Matters: The Piggy Bank & Risk-Pooling Lesson",
    description:
      "Through a relatable father-and-son car conversation, discover why years of small piggy-bank savings can disappear in one hospital visit—and how pooling ₹10 across a classroom of 29 students protects every member from a sudden ₹2,000+ bill.",
    src: "/images/blog/BlogVedio1.mp4",
    poster: "/images/blog/health-waiting-periods.webp",
    duration: "1:37 min",
    durationIso: "PT1M37S",
    badge: "Story Reel",
    topic: "Health Insurance Basics",
    language: "Hindi",
    keyPoints: [
      "Why personal savings alone struggle against sudden hospitalization bills",
      "29-student classroom analogy: small pooled premiums cover big claims",
      "Transferring financial risk to the insurer keeps family savings intact",
    ],
  },
  {
    id: "video-2",
    title: "Protect 20 Years of Savings From One Hospital Bill",
    description:
      "A single serious illness and one steep hospital invoice can wipe out two decades of hard-earned family savings in days. Learn why combining Health Insurance with an Emergency Fund prevents families from borrowing from relatives during medical crises.",
    src: "/images/blog/BlogVedio2.mp4",
    poster: "/images/blog/cashless-hospital-claims.webp",
    duration: "0:30 min",
    durationIso: "PT30S",
    badge: "Hospital Reality",
    topic: "Family Financial Shield",
    language: "Hindi",
    keyPoints: [
      "Serious illness impacts the whole family financially, not just the patient",
      "Prevents draining 20-year savings or taking emergency loans from relatives",
      "Focus on your family's health at the hospital—not arranging money",
    ],
  },
  {
    id: "video-3",
    title: "Modern Treatment & Robotic Surgery: Zero Compromise on Care",
    description:
      "Medical science has advanced with robotic surgery for faster, smoother recovery—yet fear of high bills forces many families to skip modern care. See how the right health insurance lets doctors choose the best treatment rather than your budget.",
    src: "/images/blog/BlogVedio3.mp4",
    poster: "/images/services/claim-assistance-cartoon.webp",
    duration: "0:27 min",
    durationIso: "PT27S",
    badge: "Medical Tech",
    topic: "Modern Treatments",
    language: "Hindi",
    keyPoints: [
      "Modern robotic surgery supports quicker, less invasive recovery",
      "Right health cover removes cost fear around advanced procedures",
      "Let your doctor decide the best treatment—not budget limits",
    ],
  },
  {
    id: "video-4",
    title: "Chai Comes on Credit, Life & Health Don't: Plan Before Crisis Hits",
    description:
      "At a neighbourhood tea stall, a ₹15 cup of chai is easily given on credit—but nobody can lend you health or life when a sudden crisis strikes. A memorable animated reminder to secure Health and Personal Accident Insurance before tough times arrive.",
    src: "/images/blog/BlogVedio4.mp4",
    poster: "/images/insurance/health-insurance-cartoon.webp",
    duration: "0:40 min",
    durationIso: "PT40S",
    badge: "3D Story Reel",
    topic: "Health & Accident Cover",
    language: "Hindi",
    isNew: true,
    keyPoints: [
      "Cold tea can be reheated, but lost preparation before an emergency cannot",
      "Why we plan small ₹15 daily spends yet postpone health & safety cover",
      "Secure Health Insurance and Personal Accident Cover ahead of crisis",
    ],
  },
  {
    id: "video-5",
    title: "Why Health Insurance Premiums Rise Every Year: Medical Inflation Explained",
    description:
      "Surprised by a 35%–50% renewal premium jump? This 3D animated breakdown explains how MRI/CT diagnostics, expensive new medicines, rising claim payouts, and medical inflation (₹1,00,000 care rising to ₹2,50,000+) affect premiums—and why upgrading cover matters.",
    src: "/images/blog/BlogVedio5.mp4",
    poster: "/images/blog/term-insurance-calculation.webp",
    duration: "0:56 min",
    durationIso: "PT56S",
    badge: "3D Explainer",
    topic: "Medical Inflation & Renewal",
    language: "Hindi",
    isNew: true,
    keyPoints: [
      "MRI/CT scans, modern equipment, and new injections raise treatment bills",
      "Higher claim utilization requires insurers to maintain future claim reserves",
      "₹1 Lakh treatment today can cost ₹2.5 Lakh+ later—review & upgrade cover",
    ],
  },
] as const;

/**
 * Returns all educational blog videos.
 */
export function getAllBlogVideos(): readonly BlogVideoItem[] {
  return BLOG_VIDEOS_DATA;
}

export const VERIFIED_AUTHOR_DETAILS: BlogAuthorInfo = {
  name: "MD Abrahim",
  role: "Founder & Principal Insurance Advisor",
  credentials: "Over 2 years guiding policyholders across Barasat, Madhyamgram & Habra",
  location: "Duckbanglow More, Barasat, North 24 Parganas, West Bengal 700124",
  phone: "9332364068",
} as const;

export const BLOGS_DATA: readonly BlogPostItem[] = [
  {
    id: "blog-1",
    slug: "understanding-health-insurance-waiting-periods",
    title: "Understanding Health Insurance Waiting Periods in India: Pre-Existing Diseases & Exclusions",
    excerpt:
      "Why does your mediclaim policy not pay for every illness on day one? Learn how initial 30-day waiting periods, 2-year specific illness clauses, and pre-existing disease timelines work under IRDAI guidelines.",
    coverImage: "/images/blog/health-waiting-periods.webp",
    coverAlt: "Health insurance waiting period timeline illustration and pre-existing disease guidelines",
    isFeatured: true,
    category: "Health Insurance",
    readTime: "6 min read",
    publishedDate: "12 January 2024",
    publishedDateIso: "2024-01-12",
    modifiedDateIso: "2024-06-10",
    author: "MD Abrahim",
    authorRole: "Founder & Principal Insurance Advisor",
    authorDetails: VERIFIED_AUTHOR_DETAILS,
    tags: [
      "Health Insurance",
      "Mediclaim",
      "Waiting Period",
      "Pre-Existing Diseases",
      "IRDAI Rules",
      "Barasat Advisory",
    ],
    headings: [
      { id: "initial-30-day-waiting-period", title: "1. The Initial 30-Day Waiting Period", level: 2 },
      { id: "specific-ailment-waiting-periods", title: "2. Specific Ailment Waiting Periods (Typically 2 Years)", level: 2 },
      { id: "pre-existing-disease-waiting-period", title: "3. Pre-Existing Disease (PED) Waiting Period", level: 2 },
      { id: "why-disclosing-medical-history-upfront-protects-you", title: "4. Why Disclosing Medical History Upfront Protects You", level: 2 },
      { id: "important-consumer-takeaway", title: "5. Important Consumer Takeaway for Policyholders", level: 2 },
    ],
    content: `When purchasing a health insurance policy in India, one of the most critical aspects policyholders frequently overlook is the waiting period. A waiting period is a defined timeframe during which the insurance company will not settle claims for certain medical conditions, even if your policy is active and premiums have been paid on time.

Understanding these waiting timelines prevents unwelcome surprises during hospitalization and protects your family's savings.

### 1. The Initial 30-Day Waiting Period
Almost all retail health insurance policies in India enforce an initial 30-day waiting period starting from the policy issuance date. During this first month:
- Accidental injuries requiring emergency hospitalization are covered from Day 1.
- Planned treatments and illness-related admissions (such as viral fevers, malaria, dengue, or acute infections) are excluded until the 31st day.

This regulatory clause ensures that individuals do not purchase health coverage only after falling sick.

### 2. Specific Ailment Waiting Periods (Typically 2 Years)
Certain common slow-developing conditions carry a mandatory 2-year waiting period across Indian health insurers, regardless of whether you had symptoms prior to purchase. These conditions typically include:
- Cataracts and ocular surgeries
- Hernia, hydrocele, and piles / fistula
- Kidney stones, gall bladder stones, and urinary calculi
- Benign prostatic hypertrophy (BPH)
- Joint replacements and osteoarthritis (unless caused directly by a traumatic accident)
- ENT surgeries such as tonsillectomy and sinusitis procedures

Insurers require the policy to remain continuously active for 24 months before claims for these conditions are admitted.

### 3. Pre-Existing Disease (PED) Waiting Period
A Pre-Existing Disease (PED) refers to any health condition, ailment, or injury that was diagnosed, treated, or advised for medical intervention prior to taking the policy. Common examples include hypertension, diabetes, asthma, thyroid disorders, and cardiovascular conditions.

Under modern IRDAI regulatory frameworks, PED waiting periods typically range from 24 to 36 months of continuous coverage. Once this waiting duration is completed without a lapse in renewal, the insurer is legally bound to honor eligible claims related to those conditions, subject to standard room rent and sum insured limits.

### 4. Why Disclosing Medical History Upfront Protects You
The single greatest cause of health insurance claim rejections in West Bengal is the non-disclosure of past medical records. When filling out the proposal form, some applicants hesitate to declare ongoing medicines for diabetes or hypertension, fearing higher premiums or policy rejections.

Hiding past history is dangerous. Under Section 45 of the Insurance Act, insurers thoroughly review past prescriptions, HbA1c levels, and physician notes during hospitalization. If pre-existing ailments are discovered that were concealed on the application, the insurer can reject the claim entirely and cancel the policy for fraud.

Disclosing every ailment transparently ensures that your policy remains legally incontestable once the waiting period has elapsed.

### 5. Important Consumer Takeaway for Policyholders
- Buy health insurance when you are young and healthy so that all mandatory waiting periods pass smoothly while you are in good health.
- Always preserve previous policy renewal receipts to claim Portability benefits, which transfer your accrued waiting period credits when switching insurers.
- Verify whether your policy carries voluntary co-payments or sub-limits on room rent.

If you reside in Barasat, Madhyamgram, or Habra, you can visit Insurance Sathi at Duckbanglow More for an objective review of your health policy terms and waiting period clauses.`,
    seo: {
      metaTitle: "Understanding Health Insurance Waiting Periods in India | Insurance Sathi",
      metaDescription:
        "Comprehensive guide to health insurance waiting periods in India: initial 30 days, 2-year specific illnesses, and pre-existing disease clauses explained by Insurance Sathi.",
      keywords: [
        "Health Insurance Waiting Period India",
        "Pre-Existing Disease Waiting Period",
        "Mediclaim 30 Days Clause",
        "Specific Disease Waiting Period",
        "Health Insurance Advisor Barasat",
        "IRDAI Waiting Period Guidelines",
      ],
    },
  },
  {
    id: "blog-2",
    slug: "cashless-vs-reimbursement-mediclaim-claims",
    title: "Cashless vs. Reimbursement Mediclaim Claims: How Hospital Approvals Work in West Bengal",
    excerpt:
      "Demystifying Third-Party Administrator (TPA) pre-authorization, planned vs. emergency admissions, common bill deduction reasons, and essential documents for smooth reimbursement.",
    coverImage: "/images/blog/cashless-hospital-claims.webp",
    coverAlt: "Cashless versus reimbursement hospital claim settlement process overview",
    isFeatured: false,
    category: "Health Insurance",
    readTime: "7 min read",
    publishedDate: "18 March 2024",
    publishedDateIso: "2024-03-18",
    modifiedDateIso: "2024-06-12",
    author: "MD Abrahim",
    authorRole: "Founder & Principal Insurance Advisor",
    authorDetails: VERIFIED_AUTHOR_DETAILS,
    tags: [
      "Cashless Claims",
      "Reimbursement Claims",
      "Hospitalization",
      "TPA Desk",
      "Health Insurance",
      "Barasat",
    ],
    headings: [
      { id: "how-cashless-hospitalization-works", title: "1. How Cashless Hospitalization Works", level: 2 },
      { id: "planned-vs-emergency-hospital-admission", title: "2. Planned vs. Emergency Hospital Admission", level: 2 },
      { id: "the-reimbursement-claim-route", title: "3. The Reimbursement Claim Route", level: 2 },
      { id: "top-reasons-reimbursement-claims-face-deductions", title: "4. Top Reasons Reimbursement Claims Face Deductions", level: 2 },
      { id: "practical-checklist-for-policyholders", title: "5. Practical Document Checklist for Policyholders", level: 2 },
    ],
    content: `When a medical emergency strikes, knowing whether your hospital admission will be handled through cashless settlement or post-discharge reimbursement can save your family immense stress and financial strain.

While both settlement methods are legally valid under all IRDAI-registered insurers, the operational procedures at hospital TPA desks differ substantially.

### 1. How Cashless Hospitalization Works
Cashless hospitalization is available only at network hospitals empanelled with your insurance company or its Third-Party Administrator (TPA). In this model:
- The hospital bills are settled directly by the insurance company to the hospital.
- The patient only pays for non-medical consumables (e.g. gloves, syringes, administrative charges) and any applicable co-payment or room rent difference.

Under recent IRDAI initiatives (such as 'Cashless Everywhere'), insurers are expanding cashless facilities even to non-empanelled hospitals, provided notice is served at least 48 hours prior to planned admission.

### 2. Planned vs. Emergency Hospital Admission
The protocol varies depending on the medical urgency:

- **Planned Hospitalization (e.g., gallbladder surgery, knee replacement):**
  Obtain the pre-authorization form from the hospital's TPA desk 48 to 72 hours before the admission date. The doctor completes the diagnosis and estimated costs. The insurer reviews the documents and issues an initial cashless approval letter before admission.

- **Emergency Hospitalization (e.g., sudden cardiac trauma, acute abdominal pain, road accident):**
  Admit the patient immediately and notify the TPA desk within 24 hours. Submit the patient's Health Card, government ID, and initial doctor admission note. The hospital transmits the pre-auth request for emergency approval.

### 3. The Reimbursement Claim Route
If you choose a non-network hospital, nursing home, or if cashless authorization is denied due to missing clinical history:
- You must pay the full hospital bill out of pocket at the time of discharge.
- Collect all original invoices, payment receipts, diagnostic lab reports, and the discharge summary.
- Submit the formal reimbursement claim dossier to the insurer or TPA office within 15 to 30 days of discharge.
- Following verification, the admissible claim amount is credited directly to your bank account via NEFT.

### 4. Top Reasons Reimbursement Claims Face Deductions
Many policyholders in Barasat and North 24 Parganas are disappointed when their reimbursement settlement is less than the full hospital invoice. Common reasons include:
1. **Non-Medical Expenses:** Consumables such as gloves, cotton, food charges, registration charges, and disinfection costs are excluded under standard policy terms unless a consumable rider was added.
2. **Proportionate Room Rent Deductions:** If your policy caps room rent at 1% of the sum insured (e.g., ₹5,000/day on a ₹5 Lakh policy) and you opt for a suite costing ₹9,000/day, the insurer reduces doctor fees, nursing charges, and surgery fees proportionately!
3. **Missing Original Prescriptions:** Every pharmacy bill must have a corresponding doctor prescription. Unprescribed purchases are disallowed.

### 5. Practical Document Checklist for Policyholders
To ensure seamless reimbursement, always verify that your discharge file contains:
- Original Discharge Summary signed and stamped by the treating physician
- Itemized hospital bill with break-up of room, doctor, OT, and medicine charges
- Original payment receipts with receipt numbers and revenue stamps
- Diagnostic test reports (X-Ray, MRI, blood test reports with clinical interpretations)
- Pre-hospitalization and post-hospitalization bills (within 30/60/90 days)
- Cancelled bank cheque with policyholder's printed name for NEFT transfer

Need help compiling a hospital reimbursement claim file? Visit Insurance Sathi at Duckbanglow More, Barasat for organized documentation assistance.`,
    seo: {
      metaTitle: "Cashless vs Reimbursement Mediclaim Claims Guide | Insurance Sathi",
      metaDescription:
        "Understand cashless vs reimbursement hospitalization claims in West Bengal: TPA approvals, planned admissions, common bill deductions, and claim checklists.",
      keywords: [
        "Cashless Mediclaim Process",
        "Reimbursement Health Insurance Claim",
        "TPA Pre Authorization Hospital",
        "Health Insurance Claim Barasat",
        "Mediclaim Document Checklist",
        "Room Rent Proportionate Deduction",
      ],
    },
  },
  {
    id: "blog-3",
    slug: "how-to-revive-lapsed-life-insurance-policy",
    title: "How to Revive a Lapsed Life Insurance Policy: Step-by-Step Guide for Policyholders",
    excerpt:
      "Don't forfeit your hard-earned premium money. Learn how revival quotations, Declaration of Good Health (DGH), and special revival schemes help you reinstate your discontinued policy.",
    coverImage: "/images/blog/lapsed-policy-revival.webp",
    coverAlt: "Step-by-step life insurance policy revival and reinstatement process illustration",
    isFeatured: false,
    category: "Policy Servicing",
    readTime: "6 min read",
    publishedDate: "28 February 2024",
    publishedDateIso: "2024-02-28",
    modifiedDateIso: "2024-06-15",
    author: "MD Abrahim",
    authorRole: "Founder & Principal Insurance Advisor",
    authorDetails: VERIFIED_AUTHOR_DETAILS,
    tags: [
      "Lapsed Policy",
      "Policy Revival",
      "Life Insurance",
      "DGH Form",
      "Policy Servicing",
      "North 24 Parganas",
    ],
    headings: [
      { id: "grace-period-and-policy-lapse", title: "1. Why Policies Lapse & The 30-Day Grace Period", level: 2 },
      { id: "why-reviving-is-better-than-buying-fresh", title: "2. Why Reviving is Better Than Buying a Fresh Policy", level: 2 },
      { id: "standard-step-by-step-revival-process", title: "3. The Standard Step-by-Step Revival Process", level: 2 },
      { id: "special-revival-campaigns-and-concessions", title: "4. Special Revival Campaigns & Late Fee Concessions", level: 2 },
      { id: "how-insurance-sathi-assists-you", title: "5. How Insurance Sathi Assists You in Barasat & Habra", level: 2 },
    ],
    content: `Life is unpredictable, and unexpected financial emergencies or oversights sometimes cause policyholders to miss premium payments beyond the 30-day grace period. When this happens, your life insurance policy lapses, and the life cover terminates.

However, having a lapsed policy does not mean your hard-earned money is lost. In almost every scenario, reviving an existing policy is financially far superior to purchasing a brand-new policy.

### 1. Why Policies Lapse & The 30-Day Grace Period
All life insurance policies provide a grace period—typically 30 days for annual, half-yearly, and quarterly modes, and 15 days for monthly payment modes. If the renewal premium is not received before this grace window closes, the policy lapses.

During the lapsed state:
- The insurance company is no longer liable to pay the death claim if an unfortunate event occurs.
- On participating endowment plans, bonus accruals stop.
- Loan facilities against the policy surrender value become inaccessible.

### 2. Why Reviving is Better Than Buying a Fresh Policy
1. **Lower Premium Rate:** Life insurance premiums are determined by your entry age. Your older policy enjoys lower premiums locked in years ago. Buying a fresh plan at your current age will cost significantly more every single year.
2. **Restoration of Accrued Bonuses:** On participating plans, bonuses accumulated during earlier active years are fully reinstated upon revival.
3. **Avoid Starting New Waiting Periods:** A fresh policy starts new suicide exclusion clauses (12 months) and fresh underwriting checks. Reviving restores your original contract seniority.

### 3. The Standard Step-by-Step Revival Process
Reviving a discontinued policy involves three straightforward steps:

- **Step 1 - Obtain an Official Revival Quotation:**
  Contact your insurer's branch or an authorized service provider to compute the exact outstanding premium installments plus compound late fee interest.
- **Step 2 - Health Evidence & Underwriting:**
  - For lapses under 6 months, a simple **Declaration of Good Health (DGH)** form signed by the life assured is usually sufficient.
  - For lapses exceeding 6 to 12 months, or for very large sums assured, the insurer may require basic clinical tests (such as CBC, ECG, or fasting blood sugar) at an empanelled diagnostic lab.
- **Step 3 - Remit Payment & Receive Reinstatement Endorsement:**
  Once the underwriting team accepts the revival proposal, pay the calculated arrear premium amount. The insurer issues an official Revival Endorsement restoring full life cover.

### 4. Special Revival Campaigns & Late Fee Concessions
Major insurers, including public and private sector life insurance companies, periodically launch Special Revival Campaigns (typically twice a year). During these promotional drives:
- Insurers offer 20% to 30% concessions on late fee interest penalties (up to specified caps).
- Simplified medical requirements and liberalized underwriting guidelines are applied to encourage policyholders to restart discontinued plans.

### 5. How Insurance Sathi Assists You in Barasat & Habra
If you or your family members in Barasat, Madhyamgram, or Habra have old policy documents stored in cupboards with unpaid premiums, do not discard them.

Visit Insurance Sathi at Duckbanglow More, Barasat. We will:
- Check your policy's current status and accrued surrender value.
- Request an accurate revival quotation from your insurer.
- Help you fill out the DGH form and track the reinstatement process until your life cover is fully restored.`,
    seo: {
      metaTitle: "How to Revive a Lapsed Life Insurance Policy | Insurance Sathi",
      metaDescription:
        "Step-by-step guide to reviving lapsed life insurance in India. Learn about revival quotes, DGH health forms, late fee concessions, and bonus restorations.",
      keywords: [
        "Revive Lapsed Life Insurance Policy",
        "Lapsed Policy Revival Process",
        "Declaration of Good Health DGH Form",
        "Late Premium Penalty Concession",
        "Life Insurance Reinstatement Barasat",
        "Policy Servicing North 24 Parganas",
      ],
    },
  },
  {
    id: "blog-4",
    slug: "zero-depreciation-vs-comprehensive-car-insurance",
    title: "Comprehensive vs. Zero Depreciation Car Insurance: Which One Saves More During Accidents?",
    excerpt:
      "Understand why standard car insurance policies deduct up to 50% on plastic, rubber, and glass parts, and how a Zero-Depreciation add-on guarantees full reimbursement.",
    coverImage: "/images/blog/zero-depreciation-car.webp",
    coverAlt: "Comprehensive vs Zero Depreciation car insurance claim deduction comparison",
    isFeatured: false,
    category: "Motor Insurance",
    readTime: "5 min read",
    publishedDate: "15 April 2024",
    publishedDateIso: "2024-04-15",
    modifiedDateIso: "2024-06-18",
    author: "MD Abrahim",
    authorRole: "Founder & Principal Insurance Advisor",
    authorDetails: VERIFIED_AUTHOR_DETAILS,
    tags: [
      "Motor Insurance",
      "Car Insurance",
      "Zero Depreciation",
      "Bumper to Bumper",
      "Accident Claims",
      "Barasat",
    ],
    headings: [
      { id: "hidden-depreciation-traps", title: "1. The Hidden Traps of Standard Comprehensive Insurance", level: 2 },
      { id: "how-zero-depreciation-cover-changes-claims", title: "2. How Zero-Depreciation Cover Changes the Claim Calculation", level: 2 },
      { id: "claim-scenario-cost-comparison", title: "3. Claim Scenario: A Real Cost Comparison", level: 2 },
      { id: "who-should-choose-zero-depreciation", title: "4. Who Should Always Choose Zero Depreciation?", level: 2 },
      { id: "advisory-tips-before-renewing", title: "5. Advisory Tips Before Renewing Your Motor Policy", level: 2 },
    ],
    content: `When renewing private car or bike insurance, vehicle owners in Barasat and Madhyamgram frequently wonder whether paying extra for a Zero Depreciation (popularly called Bumper-to-Bumper) add-on is truly worth the money compared to a standard comprehensive policy.

Understanding how motor surveyors calculate accident repair bills clarifies why this single add-on cover is essential for modern vehicle owners.

### 1. The Hidden Traps of Standard Comprehensive Insurance
A standard comprehensive motor insurance policy covers damage caused by collisions, overturns, fire, theft, and natural catastrophes. However, during claim settlement, the insurer does not pay 100% of the replacement parts cost.

Instead, standard depreciation schedules mandated by motor tariff regulations are subtracted from your bill:
- **Rubber, nylon, and plastic parts (bumpers, headlights, mirrors, nylon tubes):** Flat 50% deduction
- **Fiberglass components:** Flat 30% deduction
- **Glass parts (windshields, windows):** 0% deduction
- **Metal parts:** Deductions scale from 0% to 50% depending on the age of the vehicle (0% in year 1, 10% in year 2, up to 50% for vehicles over 10 years old)

Because modern hatchbacks and SUVs use fiber-reinforced plastics and composite polymer bumpers, accidental damage often involves high-cost plastic components. Under standard comprehensive cover, half of that cost comes directly out of your wallet!

### 2. How Zero-Depreciation Cover Changes the Claim Calculation
With a Zero-Depreciation add-on endorsement:
1. The insurer absorbs the full replacement cost of plastic, rubber, fiber, and metal parts without applying depreciation deductions.
2. The vehicle owner is only responsible for the mandatory statutory deductible (typically ₹1,000 to ₹2,000 for private cars as fixed by IRDAI) and nominal consumable costs unless a Consumable Cover rider is also present.
3. It eliminates disputes with workshop service advisors over out-of-pocket expenses.

### 3. Claim Scenario: A Real Cost Comparison
Consider a real-world repair bill following a minor collision on Jessore Road:
- Replacement Front Bumper & Grill (Plastic): ₹18,000
- Left Headlight Assembly (Plastic): ₹12,000
- Metal Fender Repair & Paint: ₹10,000
- Total Repair Estimate: **₹40,000**

**Under Standard Comprehensive Policy:**
- Plastic parts deduction (50% of ₹30,000): -₹15,000
- Metal depreciation (Vehicle age 3 years - 15%): -₹1,500
- Compulsory deductible: -₹1,000
- Insurer Pays: ₹22,500
- **You Pay from Pocket: ₹17,500**

**Under Zero Depreciation Policy:**
- Parts depreciation deduction: ₹0
- Compulsory deductible: -₹1,000
- Insurer Pays: ₹39,000
- **You Pay from Pocket: ₹1,000**

The difference of ₹16,500 in a single minor claim far exceeds the extra ₹2,500 to ₹4,000 paid for the Zero-Dep add-on during renewal!

### 4. Who Should Always Choose Zero Depreciation?
- Vehicles less than 5 years old (some insurers now offer it up to 7 years)
- First-time car buyers, new drivers, and commercial taxi operators
- Luxury and premium cars with expensive LED projector lamps and sensor-embedded bumpers
- Commuters driving daily through congested highway stretches like NH12 and Barasat Duckbanglow intersections

### 5. Advisory Tips Before Renewing Your Motor Policy
- Check the number of claims allowed per year under the Zero-Dep rider (some insurers allow unlimited claims, others cap it at 2 claims per policy year).
- Consider pairing Zero-Dep with **Engine Protector** (essential for waterlogged monsoon streets) and **Return to Invoice (RTI)** riders.
- Always retain your No Claim Bonus (NCB) certificate when selling or upgrading your car.

Insurance Sathi helps motorists in Barasat, Madhyamgram, and Habra compare verified motor quotes from leading insurers with zero-depreciation and instant policy delivery.`,
    seo: {
      metaTitle: "Comprehensive vs Zero Depreciation Car Insurance | Insurance Sathi",
      metaDescription:
        "Understand the difference between standard comprehensive and zero depreciation car insurance. See real accident claim cost breakdowns and avoid high out-of-pocket bills.",
      keywords: [
        "Zero Depreciation Car Insurance",
        "Bumper to Bumper Motor Insurance",
        "Comprehensive Car Insurance vs Zero Dep",
        "Car Insurance Claim Calculation India",
        "Motor Insurance Advisor Barasat",
        "Accident Repair Bill Depreciation",
      ],
    },
  },
  {
    id: "blog-5",
    slug: "importance-of-nominee-updates-in-insurance",
    title: "Why Updating Your Insurance Nominee is Critical: Avoiding Legal Disputes in Claim Settlements",
    excerpt:
      "Did you get married or lose a family member recently? Discover why keeping your insurance nominee and beneficial nominee records updated is essential under Indian insurance laws.",
    coverImage: "/images/blog/nominee-update-guide.webp",
    coverAlt: "Beneficial nominee rules and insurance policy endorsement guide illustration",
    isFeatured: false,
    category: "Policy Servicing",
    readTime: "5 min read",
    publishedDate: "10 June 2024",
    publishedDateIso: "2024-06-10",
    modifiedDateIso: "2024-06-20",
    author: "MD Abrahim",
    authorRole: "Founder & Principal Insurance Advisor",
    authorDetails: VERIFIED_AUTHOR_DETAILS,
    tags: [
      "Nominee Update",
      "Beneficial Nominee",
      "Section 39",
      "Policy Servicing",
      "Life Insurance Claims",
      "Barasat",
    ],
    headings: [
      { id: "legal-role-of-a-nominee", title: "1. The Legal Role of a Nominee in India", level: 2 },
      { id: "beneficial-nominee-advantage", title: "2. Section 39 and the 'Beneficial Nominee' Advantage", level: 2 },
      { id: "life-events-triggering-updates", title: "3. Major Life Events That Demand Immediate Nominee Updates", level: 2 },
      { id: "minor-nominees-and-appointee-requirements", title: "4. Minor Nominees and Appointee Requirements", level: 2 },
      { id: "step-by-step-nominee-update-process", title: "5. Step-by-Step Process to Update Your Policy Nominee", level: 2 },
    ],
    content: `One of the most tragic and preventable disputes in insurance occurs when a family breadwinner passes away, and their surviving relatives discover that the nominee registered on the life or personal accident policy is outdated, deceased, or legally contested.

Keeping your policy nominee records accurate ensures that claim proceeds reach your intended dependents smoothly without court intervention.

### 1. The Legal Role of a Nominee in India
Historically under Indian law, a nominee was merely an authorized 'receiver' of the funds on behalf of all legal heirs. Other family members could legally challenge the payout and claim shares under personal succession laws, tying up insurance money in court for years.

This changed fundamentally with the passage of the **Insurance Laws (Amendment) Act, 2015**.

### 2. Section 39 and the 'Beneficial Nominee' Advantage
Under the amended Section 39 of the Insurance Act, the concept of **Beneficial Nominee** was introduced to protect policyholders' immediate families:
- If you nominate your **spouse, children, or parents**, they are legally classified as Beneficial Nominees.
- The death claim proceeds belong exclusively to them, to the complete exclusion of all other distant legal heirs, creditors, or executors.
- If a non-immediate relative (such as a brother, uncle, or friend) is nominated, they remain merely a trustee and cannot claim sole ownership over the money.

This landmark provision ensures that your life insurance payout goes directly and securely to your spouse and children when they need it most.

### 3. Major Life Events That Demand Immediate Nominee Updates
Policyholders should review their nominee designations whenever major life milestones occur:
1. **Marriage:** Most unmarried individuals initially name a parent as nominee. After marriage, updating the policy to include your spouse as a primary or joint nominee ensures long-term household security.
2. **Birth of Children:** Adding children as joint nominees guarantees their educational and maintenance needs are covered.
3. **Demise of Nominee:** If the named nominee predeceases the policyholder, submit a replacement nomination immediately. If no active nominee exists at the time of claim, heirs must obtain succession certificates from civil court—a costly and lengthy process.
4. **Divorce or Legal Separation:** Removing an estranged former spouse prevents bitter post-claim estate battles.

### 4. Minor Nominees and Appointee Requirements
If you name a child below 18 years of age as a nominee, the law requires you to designate an **Appointee (Guardian)**.
- The Appointee must be a legally competent adult (e.g., your spouse, sibling, or trusted parent).
- In the unfortunate event of the policyholder's demise while the nominee is still a minor, the claim proceeds are paid to the Appointee to be held in trust for the child until they turn 18.
- Once the child attains majority, the appointee's authority automatically ceases.

### 5. Step-by-Step Process to Update Your Policy Nominee
Updating your nominee designation is a straightforward administrative procedure:
- Obtain the official **Nomination Change Form (Form 39 / Change Endorsement Request)** from your insurer.
- Attach the original policy bond, KYC documents of the new nominee (Aadhaar, PAN), and proof of relationship.
- If naming a minor, include the Appointee's signed declaration and KYC proof.
- Submit the application to the insurer's servicing branch.
- Collect the official **Endorsement Slip** from the insurer confirming the registration of the new nominee.

At Insurance Sathi at Duckbanglow More, Barasat, we provide complete policy servicing assistance to update nominee designations and resolve documentation bottlenecks across all life and health insurers.`,
    seo: {
      metaTitle: "Why Updating Your Insurance Nominee is Critical | Insurance Sathi",
      metaDescription:
        "Learn the importance of beneficial nominees under Section 39 of the Insurance Act. Discover when to update nominees and how to protect your family's claim rights.",
      keywords: [
        "Insurance Nominee Update",
        "Beneficial Nominee Section 39",
        "Life Insurance Nomination Form",
        "Minor Nominee Appointee Rules",
        "Policy Servicing Duckbanglow More",
        "Insurance Advisor Barasat",
      ],
    },
  },
  {
    id: "blog-6",
    slug: "term-insurance-coverage-calculation-guide",
    title: "How Much Term Insurance Cover Do You Really Need? A Practical Formula for Families",
    excerpt:
      "Calculate your ideal life cover using the Income Replacement and Human Life Value (HLV) methods, accounting for home loans, inflation, and children's higher education.",
    coverImage: "/images/blog/term-insurance-calculation.webp",
    coverAlt: "Term insurance sum assured income replacement formula and calculation guide illustration",
    isFeatured: false,
    category: "Term Insurance",
    readTime: "7 min read",
    publishedDate: "20 August 2024",
    publishedDateIso: "2024-08-20",
    modifiedDateIso: "2024-08-25",
    author: "MD Abrahim",
    authorRole: "Founder & Principal Insurance Advisor",
    authorDetails: VERIFIED_AUTHOR_DETAILS,
    tags: [
      "Term Insurance",
      "Life Insurance",
      "Sum Assured Formula",
      "Financial Planning",
      "Income Protection",
      "Barasat",
    ],
    headings: [
      { id: "pitfalls-of-inadequate-life-cover", title: "1. The Pitfalls of Inadequate Life Cover", level: 2 },
      { id: "income-replacement-formula", title: "2. The Practical Income Replacement Formula", level: 2 },
      { id: "practical-calculation-example", title: "3. Step-by-Step Practical Calculation Example", level: 2 },
      { id: "inflation-and-future-goals", title: "4. Why Inflation and Future Goals Must Be Factored In", level: 2 },
      { id: "key-term-insurance-features", title: "5. Key Term Insurance Features to Evaluate Before Buying", level: 2 },
    ],
    content: `Many working professionals and business owners in India pick an arbitrary sum assured—such as ₹25 Lakhs or ₹50 Lakhs—when buying life or term insurance. While having some cover is better than having none, severe underinsurance defeats the fundamental purpose of pure income protection.

A term insurance policy is designed to replace your economic value to your family if you are no longer around. Using a sound financial framework ensures that your dependents can maintain their lifestyle, repay existing loans, and fulfill educational milestones without compromise.

### 1. The Pitfalls of Inadequate Life Cover
Underinsurance creates a false sense of security. A sum of ₹25 Lakhs sounds substantial today, but when invested at moderate fixed-income returns, it generates only about ₹15,000 to ₹18,000 per month. For a family in suburban Bengal managing school fees, groceries, utility bills, and medical costs, this is insufficient.

Moreover, if there is an active home loan or business loan, the bank may seize the insurance payout to settle the debt first, leaving the surviving spouse and children with virtually nothing.

### 2. The Practical Income Replacement Formula
A practical formula widely recommended by certified financial advisors is:

**Ideal Term Insurance Cover = (Annual Income × 15 to 20 times) + Outstanding Liabilities + Major Future Milestones - Existing Liquid Investments**

- **Income Replacement (15x to 20x):** Provides an investment corpus whose safe returns replace the breadwinner's earnings for 15+ years.
- **Outstanding Liabilities:** Accounts for home loans, vehicle loans, and business borrowings so your family is never burdened with debt collectors.
- **Future Milestones:** Funds for children's undergraduate/postgraduate degrees and weddings.
- **Existing Liquid Investments:** Deducts your current mutual funds, Provident Fund, and fixed deposits already accumulated.

### 3. Step-by-Step Practical Calculation Example
Let us look at a realistic scenario for a 33-year-old IT employee or business owner residing in Barasat earning **₹8,00,000 per year**:

1. **Base Income Replacement (15 times):** ₹8,00,000 × 15 = **₹1,20,00,000** (₹1.20 Cr)
2. **Outstanding Home Loan Balance:** **₹28,00,000**
3. **Provisions for Children's Higher Education:** **₹20,00,000**
4. **Total Protection Corpus Required:** **₹1,68,00,000** (₹1.68 Cr)
5. **Less Existing Liquid Savings (PF + Mutual Funds):** -**₹18,00,000**
6. **Net Required Term Insurance Cover:** **₹1,50,00,000 (₹1.50 Crores)**

In this case, a standard ₹1.5 Crore term plan provides robust, complete financial security for the family.

### 4. Why Inflation and Future Goals Must Be Factored In
In India, household expenses and college tuition fees increase at an estimated 8% to 10% annual inflation rate. A professional engineering or medical course that costs ₹15 Lakhs today may cost ₹35 Lakhs when your 5-year-old child turns 18.

By choosing an adequate sum assured today, you shield your family against the eroding power of inflation. Some term plans also offer 'Increasing Cover' options, where the sum assured automatically steps up by 5% to 10% annually until it reaches 2x the base cover.

### 5. Key Term Insurance Features to Evaluate Before Buying
- **Claim Settlement Ratio (CSR):** Choose insurers with a consistently verified CSR exceeding 98% and low claim repudiation rates.
- **Critical Illness Rider:** Provides an upfront lump-sum payment upon diagnosis of life-threatening illnesses such as cancer, stroke, or heart attack, compensating for loss of active income.
- **Waiver of Premium Rider on Total Permanent Disability:** Ensures your life cover continues uninterrupted without paying future premiums if you suffer a disabling accident.
- **Pure Term vs. Return of Premium (TROP):** Pure term insurance is far cheaper and provides maximum protection per rupee spent.

Ready to audit your family's life coverage requirements? Visit Insurance Sathi at Duckbanglow More, Barasat for a complimentary, unbiased Human Life Value analysis.`,
    seo: {
      metaTitle: "How Much Term Insurance Cover Do You Need? | Insurance Sathi",
      metaDescription:
        "Calculate your ideal term insurance sum assured using the income replacement formula. Account for home loans, child education, and inflation with Insurance Sathi in Barasat.",
      keywords: [
        "Term Insurance Cover Calculation",
        "Ideal Life Cover Formula India",
        "Human Life Value HLV Formula",
        "Term Insurance Sum Assured",
        "Term Plan Advisor Barasat",
        "Pure Term vs TROP Comparison",
      ],
    },
  },
] as const;

/**
 * Returns all blog posts in chronological order (newest first).
 */
export function getAllBlogPosts(): readonly BlogPostItem[] {
  return BLOGS_DATA;
}

/**
 * Returns a specific blog post by slug.
 */
export function getBlogPostBySlug(slug: string): BlogPostItem | undefined {
  const normalized = slug.toLowerCase().trim();
  return BLOGS_DATA.find((post) => post.slug === normalized);
}

/**
 * Returns the featured blog post.
 */
export function getFeaturedBlogPost(): BlogPostItem {
  const featured = BLOGS_DATA.find((post) => post.isFeatured);
  return featured || BLOGS_DATA[0];
}

/**
 * Returns all blog slugs for static generation.
 */
export function getAllBlogSlugs(): string[] {
  return BLOGS_DATA.map((post) => post.slug);
}

/**
 * Returns related blog posts, prioritizing matching category and excluding current post.
 */
export function getRelatedBlogPosts(
  currentSlug: string,
  category: string,
  limit: number = 3
): BlogPostItem[] {
  const others = BLOGS_DATA.filter((post) => post.slug !== currentSlug);
  const sameCategory = others.filter((post) => post.category === category);
  const differentCategory = others.filter((post) => post.category !== category);
  return [...sameCategory, ...differentCategory].slice(0, limit);
}

/**
 * Returns all unique categories present in blog data.
 */
export function getAllBlogCategories(): string[] {
  const set = new Set<string>();
  for (const post of BLOGS_DATA) {
    set.add(post.category);
  }
  return Array.from(set);
}

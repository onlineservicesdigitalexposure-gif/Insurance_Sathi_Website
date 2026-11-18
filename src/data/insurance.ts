import type { InsuranceCategoryItem, InsuranceSlug } from "@/types";

export const INSURANCE_CATEGORIES_DATA: readonly InsuranceCategoryItem[] = [
  {
    id: "cat-life-insurance",
    slug: "life-insurance",
    aliases: ["life", "life-cover", "traditional-life-insurance"],
    title: "Life Insurance",
    heroHeading: "Comprehensive Life Insurance Advisory for Long-Term Family Security",
    heroSubheading:
      "Understand traditional endowment, money-back, and whole-life savings plans. We guide families across Barasat, Madhyamgram, and Habra in choosing structured savings vehicles with life protection.",
    tagline: "Lifelong Financial Protection & Goal-Based Savings",
    shortDescription:
      "Secure your family's future and build guaranteed corpus for children's education, marriage, and retirement milestones.",
    fullOverview:
      "Life insurance combines a foundational financial safety net for dependents with disciplined, goal-oriented savings. Traditional participating plans, money-back policies, and whole-life covers help policyholders accumulate corpus for long-term family milestones while securing guaranteed death benefits for designated nominees. At Insurance Sathi, we help you understand realistic bonus projections, premium payment terms, and lock-in horizons before committing.",
    iconName: "HeartPulse",
    imagePath: "/images/insurance/life-insurance-cartoon.webp",
    imageAlt: "Life insurance policy advisory and family financial security guidance by Insurance Sathi",
    coverageHighlights: [
      "Guaranteed death benefit payout to nominated beneficiaries",
      "Maturity bonuses and periodic loyalty additions on participating plans",
      "Optional accidental disability, critical illness, and waiver-of-premium riders",
      "Tax exemptions under Section 80C and Section 10(10D) as per prevailing income tax laws",
    ],
    commonPolicyTypes: [
      "Endowment Assurance Plans",
      "Money-Back Periodic Cashflow Plans",
      "Whole Life Protection Plans",
      "Child Education & Future Security Plans",
      "Retirement & Annuity Pension Plans",
    ],
    coverageTypes: [
      {
        title: "Endowment Assurance Plans",
        description:
          "Traditional savings and protection plans offering guaranteed sum assured on maturity or death, enhanced by accrued annual bonuses.",
        suitableFor: "Risk-averse savers planning for specific 10-to-20-year milestones such as children's higher education.",
        highlights: [
          "Maturity benefit with accumulated revisionary bonuses",
          "Full sum assured payable to nominee upon death during policy tenure",
          "Loan facility available against accrued surrender value after minimum premium tenure",
        ],
      },
      {
        title: "Money-Back Policies",
        description:
          "Periodic survival benefits paid as a percentage of the sum assured during the policy term, with remaining sum assured and bonuses on maturity.",
        suitableFor: "Individuals needing regular liquidity every 3 to 5 years for intermediate lifestyle or business needs.",
        highlights: [
          "Scheduled interim payouts without reducing death benefit cover",
          "Terminal bonus payable on maturity along with final installment",
          "Unbroken risk cover even after interim survival installments are paid",
        ],
      },
      {
        title: "Whole Life Protection Plans",
        description:
          "Coverage that extends throughout the life of the insured (typically up to age 99 or 100), ensuring a lasting legacy for heirs.",
        suitableFor: "Head of families seeking estate planning and legacy creation for future generations.",
        highlights: [
          "Lifelong coverage ensuring nominee receives guaranteed inheritance",
          "Limited premium payment terms available (pay for 10-15 years, covered for life)",
          "Consistent bonus accrual throughout the extended term",
        ],
      },
      {
        title: "Child Future & Education Plans",
        description:
          "Structured savings vehicles with waiver-of-premium riders to guarantee that funds are available for children even if the parent passes away.",
        suitableFor: "Parents planning college admissions, professional degrees, or wedding milestones.",
        highlights: [
          "Waiver of Premium (WOP) ensures future premiums are funded by insurer upon parent's death",
          "Targeted payouts timed with major educational milestones",
          "Financial safety net safeguarding the child's academic aspirations",
        ],
      },
    ],
    keyConsiderations: [
      {
        title: "Premium Affordability & Payment Horizon",
        explanation:
          "Traditional life plans have multi-year premium commitments. Surrendering before paying 2 to 3 full years often results in heavy financial forfeiture.",
        checklistItem: "Ensure the annual premium fits comfortably within your verifiable budget for the full paying term.",
      },
      {
        title: "Realistic Return Expectations vs. Protection",
        explanation:
          "Endowment plans prioritize capital safety, statutory tax benefits, and steady bonuses rather than equity-market alpha.",
        checklistItem: "Do not confuse life insurance savings with aggressive equity mutual funds; look at bonuses as steady debt-equivalent savings.",
      },
      {
        title: "Rider Additions (Accident & Critical Illness)",
        explanation:
          "Basic life cover can be significantly strengthened with inexpensive riders like Accidental Death Benefit and Waiver of Premium.",
        checklistItem: "Review available riders to prevent needing separate standalone policies for minor covers.",
      },
      {
        title: "Nominee Designation & Verification",
        explanation:
          "Nominations must be legally clear. If a minor child is named, an appointee must be documented with verified KYC.",
        checklistItem: "Keep nominee records updated, especially after marriage or child birth, to avoid future succession disputes.",
      },
    ],
    commonExclusions: [
      "Suicide within 12 months from policy inception or revival date (insurer pays surrender value or 80% of premiums as per policy rules)",
      "Death resulting from active participation in criminal acts or breach of law",
      "Fatalities caused by war, civil commotion, or nuclear contamination",
      "Unbundled critical illness riders exclude pre-existing ailments within initial waiting periods",
    ],
    exclusionsDisclaimer:
      "Exclusions, surrender value calculations, and paid-up thresholds are governed strictly by the respective insurer's IRDAI-approved policy wording. Always refer to your specific policy schedule.",
    whoNeedsThis: [
      {
        profile: "Salaried Family Earners",
        scenario: "Primary breadwinners who want a disciplined savings habit combined with guaranteed death protection for their family.",
        recommendedFocus: "Endowment or whole-life plans with accidental disability and waiver-of-premium riders.",
      },
      {
        profile: "Parents of Young Children",
        scenario: "Families seeking to build a secured educational corpus that remains protected even if the earning parent is absent.",
        recommendedFocus: "Child-specific plans with comprehensive Waiver of Premium (WOP) benefits.",
      },
      {
        profile: "Retirement Planners",
        scenario: "Individuals aiming for regular, predictable annuity or pension payouts after superannuation.",
        recommendedFocus: "Annuity contracts or deferred pension policies with lifelong payout guarantees.",
      },
    ],
    categoryFaqs: [
      {
        question: "How does traditional life insurance differ from pure term insurance?",
        answer:
          "Pure term insurance provides high financial cover with zero maturity payout if you survive the tenure. Traditional life insurance (such as endowment or money-back plans) provides life cover along with guaranteed savings and bonus payouts upon survival.",
      },
      {
        question: "What happens if I cannot pay premiums after 2 or 3 years?",
        answer:
          "If premiums have been paid for the minimum qualifying period (usually 2 to 3 years), the policy acquires a Paid-Up status. The sum assured is proportionately reduced, and you receive the paid-up value on maturity or death, rather than forfeiting all premiums.",
      },
      {
        question: "Are bonuses guaranteed on life insurance policies?",
        answer:
          "Guaranteed additions (if specified in non-participating plans) are guaranteed. Revisionary bonuses on participating plans depend on the insurance company's annual valuation and actuarial performance, though established insurers maintain steady historical bonus records.",
      },
      {
        question: "Can I take a loan against my existing life insurance policy?",
        answer:
          "Yes. Most traditional endowment and money-back policies permit policy loans up to 80%–90% of the accrued surrender value at competitive interest rates, without requiring physical collateral.",
      },
    ],
    whyNeeded:
      "Ensures that your family's daily living expenses, children's educational dreams, and long-term goals continue uninterrupted even in your absence.",
    recommendedFor:
      "Primary breadwinners, parents planning for future education expenses, and individuals seeking structured long-term wealth creation.",
    seo: {
      metaTitle: "Life Insurance Advisory in Barasat - Plans, Benefits & Guidance - Insurance Sathi",
      metaDescription:
        "Explore life insurance plans with expert guidance in Barasat, Madhyamgram, and Habra. Compare traditional savings, child plans, and retirement solutions with Insurance Sathi.",
      keywords: [
        "Life Insurance Barasat",
        "Life Insurance Agent Duckbanglow More",
        "Best Life Insurance Plans North 24 Parganas",
        "Money Back Insurance Madhyamgram",
        "Child Education Insurance Habra",
      ],
    },
  },
  {
    id: "cat-health-insurance",
    slug: "health-insurance",
    aliases: ["health", "mediclaim", "medical-insurance"],
    title: "Health Insurance",
    heroHeading: "Comprehensive Health Insurance & Mediclaim Advisory in Barasat",
    heroSubheading:
      "Protect your family against escalating medical and hospitalization expenses. We guide you through cashless hospital networks, pre-existing disease waiting periods, and room-rent limits.",
    tagline: "Comprehensive Medical Coverage Against Skyrocketing Hospital Costs",
    shortDescription:
      "Cashless hospitalization, daycare treatments, pre & post hospital expenses, and critical illness cover for you and your family.",
    fullOverview:
      "Medical inflation in India is rising at double digits annually. A single hospitalization for a major surgical procedure or severe illness can drain family savings and derail long-term goals. Health insurance safeguards your financial stability by covering in-patient hospital beds, ICU costs, surgeon fees, daycare surgeries, and prescribed pre/post-hospital care. At Insurance Sathi, we dissect confusing room-rent sub-limits, co-payments, and disease exclusions so you buy coverage that actually delivers at the hospital cashless desk.",
    iconName: "Activity",
    imagePath: "/images/insurance/health-insurance-cartoon.webp",
    imageAlt: "Health insurance and mediclaim consultation for families in Barasat by Insurance Sathi",
    coverageHighlights: [
      "Cashless admission at leading private and multi-specialty hospitals",
      "In-patient hospitalization including room rent, ICU, surgeon, and nursing charges",
      "Pre-hospitalization (up to 60 days) and post-hospitalization (up to 180 days) medical bills",
      "Daycare treatments not requiring 24-hour hospitalization (dialysis, cataract, chemotherapy)",
      "Cumulative No-Claim Bonus (NCB) and annual preventative health check-ups",
    ],
    commonPolicyTypes: [
      "Individual Health Insurance",
      "Family Floater Health Plans",
      "Senior Citizen Specialized Health Cover",
      "Critical Illness Lumpsum Plans",
      "Super Top-Up Deductible Plans",
    ],
    coverageTypes: [
      {
        title: "Family Floater Health Insurance",
        description:
          "A single comprehensive policy covering you, your spouse, and dependent children under one shared sum insured pool with unified renewal.",
        suitableFor: "Nuclear families seeking cost-effective coverage without buying separate individual policies for each member.",
        highlights: [
          "Cost-effective premium compared to individual policies for each member",
          "Entire sum insured accessible by any member in case of major medical emergency",
          "Automatic restoration of sum insured if exhausted during the policy year",
        ],
      },
      {
        title: "Individual Mediclaim Plans",
        description:
          "Dedicated, unshared sum insured reserved exclusively for one person, preventing other family members from depleting the cover.",
        suitableFor: "Senior parents, individuals with higher health risks, or single adults needing independent cover.",
        highlights: [
          "Sum insured dedicated exclusively to the insured person",
          "No risk of cover depletion by another family member's claim",
          "Customizable deductible and optional co-payment limits",
        ],
      },
      {
        title: "Senior Citizen Health Cover",
        description:
          "Specialized medical coverage tailored for parents and seniors aged 60 and above, accommodating age-related health ailments.",
        suitableFor: "Elderly parents who may not qualify for standard health covers due to age or pre-existing conditions.",
        highlights: [
          "Coverage for cataracts, joint replacements, and cardiac procedures",
          "Higher entry ages accepted with underwriting medical check-up",
          "OPD and diagnostic consultation riders available",
        ],
      },
      {
        title: "Super Top-Up Health Plans",
        description:
          "High sum-insured protection (e.g. ₹20-50 Lakhs) with a chosen threshold deductible (e.g. ₹3-5 Lakhs), providing massive protection at very low premiums.",
        suitableFor: "Individuals with existing corporate or base health policies seeking cost-efficient enhancement.",
        highlights: [
          "Acts as a cost-effective safety net over your base health policy",
          "Triggers once aggregate hospitalization expenses cross the chosen deductible",
          "Fraction of the cost of increasing base sum insured",
        ],
      },
    ],
    keyConsiderations: [
      {
        title: "Room Rent Caps & Proportionate Deductions",
        explanation:
          "If your policy limits room rent to 1% of sum insured and you choose a higher room, insurers proportionately slash surgeon, ICU, and doctor fees.",
        checklistItem: "Always prioritize policies with 'No Room Rent Capping' or single private room eligibility.",
      },
      {
        title: "Pre-Existing Disease (PED) Waiting Periods",
        explanation:
          "Conditions like hypertension, diabetes, or asthma carry mandatory 2 to 3-year waiting periods before claims are entertained.",
        checklistItem: "Disclose all past medical history accurately upfront to avoid claim rejection on non-disclosure grounds.",
      },
      {
        title: "Co-Payment Clauses",
        explanation:
          "A co-payment mandates that the policyholder pay a fixed percentage (e.g. 10%–20%) of every claim bill out of pocket.",
        checklistItem: "Opt for zero co-payment policies unless choosing voluntary co-pay to reduce senior citizen premiums.",
      },
      {
        title: "Cashless Hospital Network in North 24 Parganas & Kolkata",
        explanation:
          "Ensure top hospitals and nursing homes in Barasat, Madhyamgram, and central Kolkata are in the insurer's active cashless list.",
        checklistItem: "Verify network hospital tie-ups before buying so you are not forced into reimbursement mode during emergencies.",
      },
    ],
    commonExclusions: [
      "Initial 30-day waiting period exclusions (only accidental hospitalizations covered in the first month)",
      "Specific slow-developing illnesses (cataract, hernia, joint replacement, kidney stones) excluded for first 2 years",
      "Cosmetic, aesthetic, or obesity treatments unless medically necessary after accident",
      "Experimental, unproven, or non-prescribed alternative treatments without inpatient hospitalization",
      "Hospitalization solely for diagnostic observation or general evaluation without active treatment",
    ],
    exclusionsDisclaimer:
      "All medical claims, room rent allowances, waiting periods, and deductions are subject strictly to the respective insurer's IRDAI-approved policy wording and medical adjudication.",
    whoNeedsThis: [
      {
        profile: "Young Families & Nuclear Households",
        scenario: "Parents with growing kids who need protection against unexpected illnesses, dengue, or accidents.",
        recommendedFocus: "Family floater plan of ₹10–15 Lakhs with restore benefit and no room rent cap.",
      },
      {
        profile: "Corporate Employees with Basic Group Cover",
        scenario: "Professionals who rely solely on corporate employer coverage that terminates upon job changes or retirement.",
        recommendedFocus: "Independent retail base policy or Super Top-Up to ensure lifelong continuity credits.",
      },
      {
        profile: "Elderly Parents (Seniors)",
        scenario: "Aging individuals susceptible to chronic hypertension, diabetes, and age-related surgeries.",
        recommendedFocus: "Dedicated senior citizen plan with reasonable waiting periods and manageable co-pay.",
      },
    ],
    categoryFaqs: [
      {
        question: "How does the cashless hospital admission process work?",
        answer:
          "You present your health card and photo ID at the hospital's TPA insurance desk. The hospital sends a pre-authorization request to the insurer. Once initial approval is granted, treatment proceeds cashless up to the approved limit. Upon discharge, final bills are settled directly between hospital and insurer.",
      },
      {
        question: "What is the difference between Top-Up and Super Top-Up plans?",
        answer:
          "A standard Top-Up applies the deductible to each single hospital claim independently. A Super Top-Up considers the cumulative aggregate of all claims within the policy year, making it far superior for multiple hospitalizations.",
      },
      {
        question: "Can I port my health insurance policy to another company without losing waiting period credits?",
        answer:
          "Yes. Under IRDAI portability regulations, you can port your health insurance to another insurer at renewal (requesting 45 days in advance) while carrying forward all continuity credits earned for waiting periods and No-Claim Bonuses.",
      },
      {
        question: "Why does Insurance Sathi emphasize full disclosure of past medical records?",
        answer:
          "Non-disclosure of pre-existing diseases is the number one reason health claims get rejected in India. Being 100% transparent on proposal forms ensures your policy remains fully legally enforceable when you need hospital support.",
      },
    ],
    whyNeeded:
      "Protects families from unexpected hospital bills and allows access to the best private healthcare facilities without financial distress.",
    recommendedFor:
      "Every individual and family, particularly self-employed professionals, senior parents, and those with growing medical liabilities.",
    seo: {
      metaTitle: "Health Insurance Consultant in Barasat - Mediclaim & Family Plans - Insurance Sathi",
      metaDescription:
        "Find the right mediclaim and health insurance plan in Barasat, Madhyamgram, and Habra. Cashless hospital networks, family floater, and super top-up guidance.",
      keywords: [
        "Health Insurance Barasat",
        "Mediclaim Policy Barasat",
        "Family Floater Health Insurance North 24 Parganas",
        "Cashless Health Insurance Madhyamgram",
        "Senior Citizen Mediclaim Habra",
      ],
    },
  },
  {
    id: "cat-motor-insurance",
    slug: "motor-insurance",
    aliases: ["motor", "car-insurance", "bike-insurance", "vehicle-insurance"],
    title: "Motor Insurance",
    heroHeading: "Comprehensive Motor Insurance Advisory for Cars, Bikes & Commercial Fleets",
    heroSubheading:
      "Statutory third-party liability and comprehensive own-damage protection. Get zero-depreciation advice, cashless garage liaison, and instant renewal assistance across North 24 Parganas.",
    tagline: "Complete Protection for Two-Wheelers, Private Cars & Commercial Vehicles",
    shortDescription:
      "Mandatory third-party liability cover and comprehensive own-damage protection with zero-depreciation and roadside assistance.",
    fullOverview:
      "Driving without valid motor insurance is a punishable offence under the Motor Vehicles Act. But beyond statutory compliance, comprehensive motor insurance protects vehicle owners from catastrophic repair expenses resulting from road collisions, severe monsoonal waterlogging, vehicular theft, vandalism, and fire. At Insurance Sathi, we assist vehicle owners in Barasat, Madhyamgram, and Habra in selecting appropriate Insured Declared Value (IDV), Zero-Depreciation add-ons, and engine protectors, while providing on-ground assistance during accident claims.",
    iconName: "Car",
    imagePath: "/images/insurance/motor-insurance-cartoon.webp",
    imageAlt: "Motor insurance advisory for private cars, bikes, and commercial vehicles in Barasat by Insurance Sathi",
    coverageHighlights: [
      "Mandatory Third-Party Liability cover for bodily injury, death, and third-party property damage",
      "Own Damage (OD) cover for accident repairs, theft, fire, and flood damages",
      "Zero Depreciation (Bumper-to-Bumper) add-on eliminating plastic/rubber deductions",
      "24/7 Roadside Assistance (RSA), breakdown towing, and emergency flat-tyre support",
      "Engine Protector & Return to Invoice (RTI) add-ons for total peace of mind",
    ],
    commonPolicyTypes: [
      "Private Two-Wheeler Comprehensive & Third-Party Insurance",
      "Private Car Comprehensive & Zero-Depreciation Insurance",
      "Commercial Goods Carrier & Taxi Motor Insurance",
      "Standalone Own Damage (OD) Cover",
      "Long-Term Multi-Year Motor Policies",
    ],
    coverageTypes: [
      {
        title: "Comprehensive Motor Insurance",
        description:
          "All-inclusive coverage combining legally mandated third-party liability with extensive own-damage protection against accidents, theft, and natural calamities.",
        suitableFor: "Personal car and bike owners seeking complete financial protection against both liabilities and repair costs.",
        highlights: [
          "Covers accidental external damage, overturning, and collision repairs",
          "Protection against theft, fire, lightning, and self-ignition",
          "Covers damages from cyclones, floods, and natural catastrophes common in Bengal",
        ],
      },
      {
        title: "Standalone Third-Party (TP) Cover",
        description:
          "Statutory minimum insurance covering legal liability for death, bodily injury, or property damage caused to third parties by the insured vehicle.",
        suitableFor: "Older vehicles or commercial vehicles where own-damage protection is not economically justified.",
        highlights: [
          "100% legal compliance with the Motor Vehicles Act",
          "Covers third-party injury and property damages up to statutory limits",
          "Does not cover damages to the owner's own vehicle",
        ],
      },
      {
        title: "Zero Depreciation (Bumper-to-Bumper) Cover",
        description:
          "Essential add-on rider ensuring the insurer settles 100% replacement cost of plastic, rubber, glass, and metal parts without standard depreciation deductions.",
        suitableFor: "New cars and two-wheelers up to 5 to 7 years of age.",
        highlights: [
          "Zero deduction on fiber, glass, rubber, and metal parts during claims",
          "Substantially lowers out-of-pocket expenses at the workshop",
          "Highest claim settlement satisfaction among car owners",
        ],
      },
      {
        title: "Commercial Fleet & Goods Carrier Cover",
        description:
          "Specialized motor policies for commercial taxis, auto-rickshaws, pickups, and heavy goods vehicles operating across North 24 Parganas.",
        suitableFor: "Transport operators, local delivery businesses, and commercial fleet owners.",
        highlights: [
          "Covers commercial vehicle damage and legal liabilities",
          "Compulsory personal accident cover for paid drivers and cleaners",
          "Annual renewal tracking for seamless RTO permit fitness compliance",
        ],
      },
    ],
    keyConsiderations: [
      {
        title: "Accurate Insured Declared Value (IDV)",
        explanation:
          "Artificially lowering IDV reduces your premium slightly, but results in severe financial loss if your vehicle is stolen or suffers total loss.",
        checklistItem: "Set your IDV strictly according to the vehicle's standard depreciation schedule, not arbitrary minimums.",
      },
      {
        title: "No-Claim Bonus (NCB) Retention",
        explanation:
          "NCB rewards claim-free years with up to 50% discount on the Own Damage premium. NCB belongs to the owner, not the vehicle.",
        checklistItem: "Transfer your NCB certificate when upgrading cars to save substantial renewal money.",
      },
      {
        title: "Engine & Gearbox Protection Add-on",
        explanation:
          "Standard policies exclude water ingression or hydrostatic lock caused by driving through monsoon-flooded streets.",
        checklistItem: "Strongly recommended for cars in waterlogging-prone areas across Barasat and North 24 Parganas.",
      },
      {
        title: "Cashless Garage Network Access",
        explanation:
          "Ensure your preferred brand dealership or multi-brand garage in Barasat/Madhyamgram has active cashless survey tie-ups.",
        checklistItem: "Check the insurer's local network garage list to avoid cumbersome reimbursement paperwork.",
      },
    ],
    commonExclusions: [
      "Driving without a valid driving license or by an unauthorized person",
      "Driving under the influence of alcohol, narcotics, or intoxicating drugs",
      "Normal mechanical wear, tear, electrical breakdown, or gradual deterioration",
      "Consequential loss (e.g. driving a damaged engine with leaking oil causing engine seizure)",
      "Vehicle used for commercial carriage when registered under a private registration",
    ],
    exclusionsDisclaimer:
      "Claim payouts, depreciation deductions, and surveyor assessments are subject strictly to the terms of the Indian Motor Tariff and respective insurer policy schedules.",
    whoNeedsThis: [
      {
        profile: "Private Car Owners",
        scenario: "Commuters driving daily across Jessore Road, VIP Road, and NH-12 facing heavy traffic and accident risks.",
        recommendedFocus: "Comprehensive cover with Zero-Dep, Engine Protector, and Return-to-Invoice add-ons.",
      },
      {
        profile: "Daily Two-Wheeler Riders",
        scenario: "Bikers and scooter owners vulnerable to road skids, theft, and third-party liabilities.",
        recommendedFocus: "Multi-year comprehensive policy with mandatory Personal Accident (PA) cover.",
      },
      {
        profile: "Local Commercial Operators",
        scenario: "Shopkeepers, distributors, and logistics providers running delivery vans and trucks.",
        recommendedFocus: "Commercial package policy with paid-driver legal liability and goods-transit extensions.",
      },
    ],
    categoryFaqs: [
      {
        question: "What should I do immediately after my car or bike meets with an accident?",
        answer:
          "Take clear photos of the damage and vehicle position before moving it. Do not attempt to start a flooded or severely damaged engine. Contact Insurance Sathi at +91 93323 64068 for claim intimation and surveyor coordination before taking the vehicle to the workshop.",
      },
      {
        question: "What is Zero Depreciation and why is it recommended?",
        answer:
          "Under standard motor insurance, insurers deduct 50% on plastic/rubber parts and up to 30%–50% on metal parts due to age depreciation. Zero Depreciation waives these deductions, ensuring the insurer pays nearly the full cost of replaced components.",
      },
      {
        question: "Can I transfer my No-Claim Bonus (NCB) if I buy a new car?",
        answer:
          "Yes. Since NCB belongs to the driver/policyholder and not the vehicle, you can obtain an NCB Retention Certificate from your old insurer and apply your accumulated discount (up to 50%) to your new car's Own Damage premium.",
      },
      {
        question: "Is third-party insurance alone sufficient for my vehicle?",
        answer:
          "Third-party insurance fulfills the legal requirement under the law, but it pays ₹0 for damages to your own vehicle or vehicle theft. For comprehensive peace of mind, a package policy with Own Damage cover is strongly advised.",
      },
    ],
    whyNeeded:
      "Protects you against legal liabilities, high vehicle repair costs after accidents, and total financial loss in case of vehicle theft.",
    recommendedFor:
      "All vehicle owners, commercial transport operators, and two-wheeler riders in Barasat, Madhyamgram, and Habra.",
    seo: {
      metaTitle: "Motor Insurance in Barasat - Car, Bike & Commercial Fleet Advisory - Insurance Sathi",
      metaDescription:
        "Get instant car and bike insurance renewals in Barasat, Madhyamgram, and Habra with Insurance Sathi. Zero-depreciation add-ons, cashless garages, and claim support.",
      keywords: [
        "Motor Insurance Barasat",
        "Car Insurance Renewal Duckbanglow More",
        "Bike Insurance Madhyamgram",
        "Zero Depreciation Car Insurance Habra",
        "Commercial Vehicle Insurance North 24 Parganas",
      ],
    },
  },
  {
    id: "cat-term-insurance",
    slug: "term-insurance",
    aliases: ["term", "term-life", "pure-life-cover"],
    title: "Term Insurance",
    heroHeading: "Pure Protection Term Insurance Advisory for Barasat Families",
    heroSubheading:
      "Maximum financial protection at affordable fixed premiums. High sum assured life cover designed to replace lost income, settle ongoing home loans, and safeguard children's aspirations.",
    tagline: "Pure Financial Protection with Maximum Life Cover at Affordable Premiums",
    shortDescription:
      "High sum assured life cover designed to replace lost income, settle home loans, and protect your family's future at minimal cost.",
    fullOverview:
      "Term insurance is the gold standard of family financial risk management. By stripping away investment components, term insurance allows you to secure a massive life cover (such as ₹50 Lakhs to ₹2 Crores or more) at a modest, predictable annual premium locked in at your entry age. If the policyholder passes away during the policy term, the full sum assured is disbursed to the nominee. This guarantees that home loans, outstanding debts, household expenses, and children's dreams remain fully financed.",
    iconName: "ShieldCheck",
    imagePath: "/images/insurance/term-insurance-cartoon.webp",
    imageAlt: "Pure term insurance and high life cover consultation by Insurance Sathi",
    coverageHighlights: [
      "Substantial life cover (₹1 Crore+) at affordable entry-age premium rates",
      "Choice of lump-sum payout, regular monthly income, or combination to nominee",
      "Accidental Death Benefit and Critical Illness riders for comprehensive security",
      "Terminal Illness benefit with immediate accelerated payout upon diagnosis",
      "Income tax exemption on premiums under Section 80C and payouts under Section 10(10D)",
    ],
    commonPolicyTypes: [
      "Pure Term Insurance with Level Sum Assured",
      "Term Insurance with Return of Premium (TROP)",
      "Increasing Sum Assured Term Plans for inflation mitigation",
      "Joint Life Term Insurance for Working Couples",
    ],
    coverageTypes: [
      {
        title: "Pure Level Term Insurance",
        description:
          "The most affordable and effective life cover. The sum assured and premium remain fixed throughout the entire policy tenure.",
        suitableFor: "Any primary earner with financial dependents, home loan obligations, or family liabilities.",
        highlights: [
          "Lowest premium per lakh of sum assured",
          "Fixed level premium locked in for the entire duration (e.g. up to age 60-75)",
          "100% death benefit payout to nominee with zero deductions",
        ],
      },
      {
        title: "Term Plan with Return of Premium (TROP)",
        description:
          "A variant where all basic premiums paid throughout the tenure are refunded to the policyholder upon surviving the policy term.",
        suitableFor: "Individuals who feel uncomfortable with pure protection and desire their premium money back upon survival.",
        highlights: [
          "Full refund of total premiums paid upon maturity",
          "Comprehensive life protection maintained throughout the active term",
          "Higher premium compared to pure level term plans",
        ],
      },
      {
        title: "Increasing Sum Assured Term Plans",
        description:
          "The life cover automatically increases by 5% to 10% each year up to a specified cap, countering the erosive effects of inflation.",
        suitableFor: "Young professionals whose family living standards and financial liabilities will expand significantly over time.",
        highlights: [
          "Sum assured expands automatically without requiring fresh medical check-ups",
          "Counters educational and lifestyle inflation for growing children",
          "Protects rising future liabilities seamlessly",
        ],
      },
      {
        title: "Critical Illness & Disability Rider Enhancements",
        description:
          "Add-on riders that pay out a substantial lump sum upon diagnosis of 30+ critical illnesses (like cancer, heart attack, or stroke).",
        suitableFor: "Primary earners seeking dual protection against fatal events and debilitating illnesses.",
        highlights: [
          "Lump-sum payout upon diagnosis regardless of hospital bill amounts",
          "Can be used to replace lost income during recovery periods",
          "Waiver of future premiums if permanent disability occurs",
        ],
      },
    ],
    keyConsiderations: [
      {
        title: "Determining Adequate Sum Assured (The 10-15x Rule)",
        explanation:
          "A rule-of-thumb is that your life cover should be at least 10 to 15 times your current annual gross income plus any outstanding home/personal loans.",
        checklistItem: "Calculate family living expenses, ongoing debts, and future educational milestones before finalizing coverage.",
      },
      {
        title: "Full Material Health & Lifestyle Disclosure",
        explanation:
          "Failing to declare smoking habits, chewing tobacco, past surgeries, or existing medical conditions can cause immediate claim rejection under Section 45.",
        checklistItem: "Declare all health habits honestly; paying a small smoker loading is vastly superior to having your claim rejected later.",
      },
      {
        title: "Appropriate Coverage Duration (Up to Retirement)",
        explanation:
          "Covering yourself up to age 60 or 65 (retirement age) is typically optimal; opting for whole-life term (age 99) substantially drives up premium costs.",
        checklistItem: "Align policy duration with the period during which your family is financially dependent on your active income.",
      },
      {
        title: "Payout Option (Lump-Sum vs. Monthly Income)",
        explanation:
          "If your nominee lacks financial management experience, a monthly income payout protects them from poor investment decisions.",
        checklistItem: "Select the payout structure that best suits your family's financial maturity.",
      },
    ],
    commonExclusions: [
      "Suicide within the first 12 months from policy inception or revival (statutory 80% premium return applies)",
      "Death due to active participation in dangerous adventure sports (unless specifically underwritten)",
      "Death directly resulting from intoxication, DUI, or illegal activities",
      "Rider exclusions: pre-existing critical illnesses diagnosed within the 90-day initial waiting period",
    ],
    exclusionsDisclaimer:
      "All death benefits, rider triggers, and claim disbursements are strictly governed by the respective insurance company's underwriting guidelines and IRDAI regulations.",
    whoNeedsThis: [
      {
        profile: "Home Loan & Personal Debt Borrowers",
        scenario: "Borrowers whose sudden absence would leave bank recovery agents knocking on their family's door.",
        recommendedFocus: "Term cover matching or exceeding the total outstanding loan principal balance.",
      },
      {
        profile: "Salaried Sole Breadwinners",
        scenario: "Individuals whose monthly salary funds all household bills, school fees, and medical treatments.",
        recommendedFocus: "15x annual salary cover with Accidental Death Benefit rider.",
      },
      {
        profile: "Self-Employed Entrepreneurs",
        scenario: "Business owners with unpredictable income streams and personal guarantees on business borrowings.",
        recommendedFocus: "Married Women's Property Act (MWPA) endorsed term policy protecting payout from business creditors.",
      },
    ],
    categoryFaqs: [
      {
        question: "What is the Married Women's Property Act (MWPA) endorsement?",
        answer:
          "Taking a term policy under the MWP Act ensures that the claim payout belongs exclusively to your wife and children. By law, it cannot be attached by court orders, business creditors, or tax authorities, guaranteeing your family's financial security.",
      },
      {
        question: "Will I have to undergo medical tests to buy a term insurance policy?",
        answer:
          "For high sum-assured policies (₹50 Lakhs and above) or applicants over age 35, insurers typically require tele-medical screening or physical health checks (blood tests, ECG, lipid profile) funded by the insurer.",
      },
      {
        question: "Does term insurance premium increase every year as I grow older?",
        answer:
          "No. Once your term insurance policy is issued, the annual premium is fixed and locked for the entire tenure of the policy, provided renewals are paid within the due dates.",
      },
      {
        question: "Can Insurance Sathi help me calculate the exact life cover I need?",
        answer:
          "Yes. At our Duckbanglow More office in Barasat, we perform an objective Human Life Value (HLV) calculation evaluating your income, liabilities, inflation, and children's education milestones.",
      },
    ],
    whyNeeded:
      "The most essential financial safeguard to ensure that debts, household expenses, and children’s aspirations remain fully funded if the primary earner passes away.",
    recommendedFor:
      "Any individual with dependents, home loan borrowers, salaried professionals, and self-employed individuals with ongoing liabilities.",
    seo: {
      metaTitle: "Term Insurance Consultation in Barasat - High Life Cover Plans - Insurance Sathi",
      metaDescription:
        "Secure pure term insurance with high sum assured in Barasat, Madhyamgram, and Habra. Compare term plans with accidental and critical illness riders with Insurance Sathi.",
      keywords: [
        "Term Insurance Barasat",
        "Best Term Insurance North 24 Parganas",
        "1 Crore Term Plan Duckbanglow More",
        "Term Life Insurance Madhyamgram",
        "Affordable Term Insurance Habra",
      ],
    },
  },
  {
    id: "cat-home-insurance",
    slug: "home-insurance",
    aliases: ["home", "house-insurance", "property-insurance", "griha-raksha"],
    title: "Home Insurance",
    heroHeading: "Comprehensive Home & Property Insurance Advisory in Barasat",
    heroSubheading:
      "Safeguard your residence structure and household contents against fire, cyclonic storms, monsoonal flooding, and burglary. We guide flat owners, independent homeowners, and tenants.",
    tagline: "Comprehensive Safeguard for Your House Structure and Precious Contents",
    shortDescription:
      "Protection for your residential structure and household belongings against fire, floods, cyclones, theft, and accidental damage.",
    fullOverview:
      "For most families in West Bengal, a home represents their single largest lifetime investment. Coastal storms, severe monsoonal flooding, short-circuit fires, lightning, gas explosions, or residential burglaries can cause catastrophic physical and financial ruin in minutes. Standard Bharat Griha Raksha policies protect the physical building structure on an agreed rebuilding-cost basis, while contents insurance covers precious electronics, furniture, kitchen appliances, and fixtures. We help homeowners and tenants choose suitable coverage without under-insurance traps.",
    iconName: "Home",
    imagePath: "/images/insurance/home-insurance-cartoon.webp",
    imageAlt: "Home structure and contents insurance advisory in Barasat by Insurance Sathi",
    coverageHighlights: [
      "Structure protection for owned independent houses, villas, and residential apartments",
      "Coverage against natural disasters (cyclones, storms, earthquakes, monsoonal flooding)",
      "Protection against fire, lightning, domestic gas explosions, and aircraft damage",
      "Valuable contents cover: electrical appliances, home electronics, furniture, and kitchenware",
      "Burglary, housebreaking, and theft coverage with optional jewellery riders",
    ],
    commonPolicyTypes: [
      "Home Structure Only Insurance",
      "Home Contents Only Insurance (ideal for tenants)",
      "Comprehensive Bharat Griha Raksha Standard Package",
      "Landlord Property Protection Cover",
    ],
    coverageTypes: [
      {
        title: "Bharat Griha Raksha Standard Home Policy",
        description:
          "The standardized IRDAI-mandated home policy covering residential building structures and general home contents against a wide range of perils.",
        suitableFor: "All residential property owners and apartment dwellers seeking transparent, regulated protection.",
        highlights: [
          "Covers 14 natural and man-made perils including fire, flood, cyclone, and lightning",
          "Includes 20% automatic general contents cover without requiring itemized lists",
          "Covers architect, surveyor, and debris removal fees up to policy limits",
        ],
      },
      {
        title: "Home Structure Only Insurance",
        description:
          "Covers the physical foundation, walls, roofs, flooring, and permanently attached fixtures of an owned house or apartment flat.",
        suitableFor: "Landlords renting out flats or homeowners whose contents are separately secured.",
        highlights: [
          "Calculated on construction rebuilding cost (carpet area × construction rate)",
          "Protects against structural cracking, collapse, and fire devastation",
          "Mandatory requirement for most housing loan bank agreements",
        ],
      },
      {
        title: "Home Contents Only Insurance (Tenants)",
        description:
          "Protects valuable portable household belongings inside a rented or owned home without insuring the building shell.",
        suitableFor: "Tenants and apartment renters wanting security for their personal belongings.",
        highlights: [
          "Protects televisions, refrigerators, air conditioners, and furniture",
          "Covers theft and burglary following violent or forcible entry",
          "Very affordable annual premium for substantial asset protection",
        ],
      },
      {
        title: "Valuable Items & Jewellery Extension",
        description:
          "An optional add-on providing all-risk protection for precious ornaments, jewellery, and high-value curios inside home premises.",
        suitableFor: "Families keeping family heirloom gold jewellery and valuables in home safes.",
        highlights: [
          "Requires valuation certificates for specified high-value ornaments",
          "Covers burglary and robbery from locked home safes",
          "Complementary protection alongside bank locker safeguards",
        ],
      },
    ],
    keyConsiderations: [
      {
        title: "Reconstruction Cost vs. Market Property Value",
        explanation:
          "Home structure should be insured for its construction cost (sq. ft. × building rate), not the total market real estate value which includes land price.",
        checklistItem: "Insure your structure based on rebuilding cost in Barasat (e.g. ₹1,800–₹2,500/sq. ft.) to avoid paying unnecessary premium.",
      },
      {
        title: "Beware of Under-Insurance Clauses",
        explanation:
          "If your building costs ₹40 Lakhs to reconstruct and you only insure it for ₹20 Lakhs, claim payouts are reduced by 50% across the board.",
        checklistItem: "Ensure accurate valuation of your carpet area and construction quality to maintain 100% claim eligibility.",
      },
      {
        title: "Itemized Listing for High-Value Contents",
        explanation:
          "Standard policies cover general contents up to 20% of sum insured without questions; items over ₹1 Lakh require specific declaration.",
        checklistItem: "Maintain receipts or photos of expensive appliances and electronic gadgets.",
      },
      {
        title: "Burglary & Forcible Entry Definitions",
        explanation:
          "Theft without signs of forced entry (such as theft by household domestic help) is generally excluded unless specific fidelity riders are attached.",
        checklistItem: "Review the policy's burglary definitions and safety precautions.",
      },
    ],
    commonExclusions: [
      "Loss, damage, or destruction caused by war, invasion, or warlike operations",
      "Loss of contents due to theft without signs of violent and forcible entry",
      "Gradual deterioration, wear and tear, rust, or termite and pest damage",
      "Structural damage occurring while the home has been unoccupied for over 30 consecutive days without notice",
      "Damage to land value, unauthorized constructions, or illegal building extensions",
    ],
    exclusionsDisclaimer:
      "All property claim assessments, debris removal allowances, and surveyor appraisals are governed strictly by the Bharat Griha Raksha terms and insurer policies.",
    whoNeedsThis: [
      {
        profile: "Apartment & Flat Owners in Societies",
        scenario: "Families owning apartments who want peace of mind against building fires, gas explosions, and water leaks.",
        recommendedFocus: "Bharat Griha Raksha structure and contents package.",
      },
      {
        profile: "Independent House Owners",
        scenario: "Homeowners in North 24 Parganas exposed to annual monsoon floodings and severe tropical storm winds.",
        recommendedFocus: "Complete structure cover with storm/flood perils and perimeter wall riders.",
      },
      {
        profile: "Tenants in Rented Accommodation",
        scenario: "Families living in rented homes whose personal appliances and furniture represent significant savings.",
        recommendedFocus: "Contents-only insurance with burglary and electrical breakdown extensions.",
      },
    ],
    categoryFaqs: [
      {
        question: "Does home insurance cover the land value of my property?",
        answer:
          "No. Land cannot be destroyed by fire, cyclones, or earthquakes. Home structure insurance covers only the physical cost of rebuilding the structure on that land based on prevailing construction rates per square foot.",
      },
      {
        question: "Can I get insurance if I live in a rented apartment in Barasat?",
        answer:
          "Yes. Tenants can purchase Home Contents Insurance to protect their personal furniture, home appliances, electronics, and kitchenware against fire, short-circuit, and burglary.",
      },
      {
        question: "What should I do if my home suffers flood or cyclone damage?",
        answer:
          "Take immediate photographs and videos of the standing water, wall damage, and ruined contents before cleaning up. Contact Insurance Sathi at +91 93323 64068 to coordinate insurer claim intimation and surveyor inspection.",
      },
      {
        question: "Is home insurance mandatory for taking a bank home loan?",
        answer:
          "Most commercial banks and housing finance companies require home property insurance covering the structure as a mandatory condition to safeguard their mortgage collateral.",
      },
    ],
    whyNeeded:
      "Rebuilding a damaged home or replacing stolen household assets out-of-pocket can take years of hard-earned savings.",
    recommendedFor:
      "Homeowners, flat owners in residential societies, and tenants in Barasat, Madhyamgram, and Habra.",
    seo: {
      metaTitle: "Home Insurance Advisory in Barasat - Property & Contents Cover - Insurance Sathi",
      metaDescription:
        "Protect your home structure and household contents in Barasat, Madhyamgram, and Habra against fire, cyclones, floods, and burglary with Insurance Sathi.",
      keywords: [
        "Home Insurance Barasat",
        "House Property Insurance North 24 Parganas",
        "Bharat Griha Raksha Duckbanglow More",
        "Apartment Insurance Madhyamgram",
        "Home Contents Insurance Habra",
      ],
    },
  },
  {
    id: "cat-travel-insurance",
    slug: "travel-insurance",
    aliases: ["travel", "overseas-travel-insurance", "international-travel"],
    title: "Travel Insurance",
    heroHeading: "International & Domestic Travel Insurance Advisory in Barasat",
    heroSubheading:
      "Comprehensive overseas medical coverage, flight delay compensation, baggage loss relief, and passport replacement assistance for students, tourists, and business travelers.",
    tagline: "Worry-Free Travel Protection for Domestic and International Journeys",
    shortDescription:
      "Coverage for emergency overseas medical expenses, flight cancellations, lost baggage, and passport loss.",
    fullOverview:
      "Whether traveling abroad for university education, corporate conferences, or European vacations, unforeseen travel disruptions can be financially devastating. Overseas medical care in countries like the US, UK, and Europe can cost thousands of dollars per day. Furthermore, many countries (including the 29 Schengen states) mandate valid travel medical insurance before granting visas. Travel insurance reimburses emergency hospital costs, covers flight cancellations, compensates for lost baggage, and coordinates emergency repatriation worldwide.",
    iconName: "Plane",
    imagePath: "/images/insurance/travel-insurance-cartoon.webp",
    imageAlt: "International travel insurance and student overseas medical consultation by Insurance Sathi",
    coverageHighlights: [
      "Emergency overseas medical hospitalization and outpatient expenses (including cashless network)",
      "Medical evacuation and repatriation of mortal remains back to India",
      "Trip cancellation, flight delay, and missed flight connection reimbursement",
      "Total loss of checked-in baggage and emergency purchase allowance for baggage delays",
      "Loss of passport assistance, consulate liaison, and emergency financial cash advances",
    ],
    commonPolicyTypes: [
      "International Single-Trip Travel Insurance",
      "Multi-Trip Annual Travel Cover for Frequent Flyers",
      "Student Overseas Medical & Travel Protection",
      "Senior Citizen International Travel Insurance",
    ],
    coverageTypes: [
      {
        title: "International Single-Trip Travel Insurance",
        description:
          "Comprehensive protection tailored for the exact dates of a single foreign journey, covering all travel and medical emergency perils.",
        suitableFor: "Vacationers, tourists, and families taking international holiday trips.",
        highlights: [
          "Customizable coverage limits from $50,000 to $500,000+",
          "100% compliant with Schengen, US, UK, and Southeast Asian visa requirements",
          "Valid from departure from India until arrival back on Indian soil",
        ],
      },
      {
        title: "Student Overseas Medical & Travel Plan",
        description:
          "Extended medical and academic protection designed for Indian students studying in universities abroad across the US, UK, Canada, and Europe.",
        suitableFor: "Students pursuing undergraduate, postgraduate, or doctoral studies overseas.",
        highlights: [
          "Fulfills foreign university medical insurance waiver criteria at significantly lower cost than university plans",
          "Covers medical emergency, dental treatments, and mental health consultations",
          "Includes sponsor protection and compassionate visit for parents if the student falls ill",
        ],
      },
      {
        title: "Annual Multi-Trip Corporate Policy",
        description:
          "A convenient 1-year policy covering unlimited international business trips (up to 30 to 45 days per trip) without buying insurance each time.",
        suitableFor: "Frequent corporate executives, business owners, and commercial travelers.",
        highlights: [
          "Single annual purchase covers all trips throughout the 365-day period",
          "Eliminates last-minute travel insurance paperwork before urgent trips",
          "Substantial savings for executives making 3+ foreign trips annually",
        ],
      },
      {
        title: "Senior Citizen Overseas Travel Insurance",
        description:
          "Specialized travel insurance accommodating travelers aged 60 to 85 visiting children or touring abroad.",
        suitableFor: "Parents traveling abroad to visit family members in North America, Europe, or Australia.",
        highlights: [
          "Emergency coverage for pre-existing disease flare-ups under life-threatening conditions",
          "Comprehensive overseas medical helpline and cashless concierge support",
          "Covers accidental injury, trip delays, and baggage issues",
        ],
      },
    ],
    keyConsiderations: [
      {
        title: "Adequate Medical Sum Insured by Destination",
        explanation:
          "Healthcare in the United States and Canada is extraordinarily costly; a minimum of $250,000–$500,000 cover is recommended, compared to $50,000 for Asia.",
        checklistItem: "Select your medical sum insured based on destination healthcare costs rather than minimum visa requirements.",
      },
      {
        title: "Schengen Visa Mandatory Requirements",
        explanation:
          "Schengen embassies require a minimum medical cover of €30,000 ($50,000) with zero deductible on medical expenses and repatriation coverage.",
        checklistItem: "Ensure your travel policy meets official Schengen consulate standards to avoid visa rejection.",
      },
      {
        title: "Deductible Per Claim",
        explanation:
          "Most travel policies feature a small deductible (e.g. $50–$100) per medical claim; the insurer pays expenses above this threshold.",
        checklistItem: "Review deductible terms so you understand initial out-of-pocket limits during minor clinic visits.",
      },
      {
        title: "Pre-Existing Disease Coverage Limitations",
        explanation:
          "Routine treatment or follow-ups for pre-existing chronic conditions abroad are excluded; only life-threatening emergencies are covered.",
        checklistItem: "Carry adequate prescribed medications from India for chronic ailments during travel.",
      },
    ],
    commonExclusions: [
      "Medical treatment taken abroad if travel was undertaken specifically for medical treatment",
      "Routine pre-existing disease check-ups, elective surgeries, and non-emergency cosmetic treatments",
      "Loss of baggage, passport, or items left unattended in public places or unsealed vehicles",
      "Injuries sustained while participating in professional hazardous sports without specific adventure sports riders",
      "Travel against travel advisories issued by the Government of India",
    ],
    exclusionsDisclaimer:
      "All medical assistance, emergency repatriations, and baggage compensation are governed strictly by the international assistance administrator and insurer policy terms.",
    whoNeedsThis: [
      {
        profile: "Indian Students Heading Abroad",
        scenario: "Students enrolling in foreign colleges where local university health insurance plans cost thousands of dollars.",
        recommendedFocus: "Comprehensive student travel health plan with university waiver compliance.",
      },
      {
        profile: "Families on Foreign Holidays",
        scenario: "Tourists traveling to Europe, Dubai, Singapore, or Thailand who need trip cancellation and baggage protection.",
        recommendedFocus: "Single-trip family travel plan with zero deductible options.",
      },
      {
        profile: "Senior Parents Visiting Children Overseas",
        scenario: "Elderly parents flying to the US, Canada, or Australia for multi-month family visits.",
        recommendedFocus: "Senior citizen travel plan with life-threatening emergency medical extensions.",
      },
    ],
    categoryFaqs: [
      {
        question: "When should I purchase my international travel insurance policy?",
        answer:
          "It is best to purchase travel insurance as soon as your flights and visa appointments are booked. Buying early ensures trip cancellation benefits are active if unexpected illness forces you to cancel before departure.",
      },
      {
        question: "How do I access cashless medical treatment in a foreign country?",
        answer:
          "Your policy includes a 24/7 International Emergency Helpline number (toll-free in major countries). You or the treating hospital call the helpline, and the assistance provider issues a guarantee of payment to network hospitals directly.",
      },
      {
        question: "Can I extend my travel insurance policy if my stay abroad is lengthened?",
        answer:
          "Yes. Most insurers allow policy extensions online provided the request is submitted before your original policy expires and no major medical claims have been registered during the trip.",
      },
      {
        question: "What documents are required to claim for lost checked-in baggage?",
        answer:
          "You must obtain a Property Irregularity Report (PIR) from the airline counter at the arrival airport along with your baggage tags and boarding pass before submitting the claim.",
      },
    ],
    whyNeeded:
      "Medical care abroad is prohibitively expensive, and travel insurance is mandatory for visa issuance (such as Schengen visas) in many popular destinations.",
    recommendedFor:
      "Students going abroad, international tourists, corporate business travelers, and families visiting relatives overseas.",
    seo: {
      metaTitle: "Travel Insurance Services in Barasat - International & Student Cover - Insurance Sathi",
      metaDescription:
        "Get international travel insurance with overseas medical cover in Barasat, Madhyamgram, and Habra. Schengen approved policies, student travel, and baggage loss protection.",
      keywords: [
        "Travel Insurance Barasat",
        "International Travel Insurance North 24 Parganas",
        "Student Overseas Insurance Madhyamgram",
        "Schengen Visa Travel Insurance Duckbanglow More",
        "Holiday Travel Insurance Habra",
      ],
    },
  },
  {
    id: "cat-business-insurance",
    slug: "business-insurance",
    aliases: ["business", "commercial-insurance", "shopkeeper-insurance", "msme-insurance"],
    title: "Business Insurance",
    heroHeading: "Commercial & Business Insurance Advisory for Retail Shops, Godowns & MSMEs",
    heroSubheading:
      "Comprehensive risk protection for commercial property, inventory, machinery, and statutory workplace liabilities. We help local businesses in Barasat and North 24 Parganas build financial resilience.",
    tagline: "Commercial Risk Protection for Retail Shops, Warehouses & Small Enterprises",
    shortDescription:
      "Comprehensive coverage for business property, inventory, machinery breakdown, fire, theft, and public liability.",
    fullOverview:
      "Small businesses, retail showroom owners, wholesale distributors, warehouse operators, and local manufacturing enterprises in North 24 Parganas operate in dynamic environments. A single godown fire, localized flood, electrical transformer explosion, robbery, or employee workplace accident can wipe out years of accumulated capital and disrupt operations. Business insurance provides structured financial shields covering commercial buildings, stored goods, machinery breakdown, business interruption, and third-party liabilities.",
    iconName: "Briefcase",
    imagePath: "/images/insurance/business-insurance-cartoon.webp",
    imageAlt: "Commercial and shopkeeper insurance advisory for business owners in Barasat by Insurance Sathi",
    coverageHighlights: [
      "Shop and commercial establishment fire, explosion, lightning, and storm protection",
      "Stock and inventory coverage inside retail stores, godowns, and commercial premises",
      "Burglary, robbery, and cash-in-transit / cash-in-safe protection",
      "Machinery breakdown, electronic equipment, and business interruption cover",
      "Workmen’s Compensation and Public Liability for customer injuries on premises",
    ],
    commonPolicyTypes: [
      "Shopkeeper Package Insurance",
      "Bharat Sookshma Udyam Suraksha Policy",
      "Commercial Fire & Special Perils Policy",
      "Workmen’s Compensation Policy",
      "Marine Cargo Transit Insurance",
    ],
    coverageTypes: [
      {
        title: "Bharat Sookshma Udyam Suraksha (MSME)",
        description:
          "The standardized IRDAI policy for enterprises with total value at risk up to ₹5 Crores across building, plant, machinery, and inventory.",
        suitableFor: "Local manufacturers, wholesale trading firms, and commercial godowns across Barasat and Habra.",
        highlights: [
          "Covers 14 standard perils including fire, explosion, storm, flood, and subsidence",
          "Includes automatic in-built covers for additions, alterations, and temporary removal of stocks",
          "Transparent claim settlement norms tailored for small enterprises",
        ],
      },
      {
        title: "Shopkeeper Package Policy",
        description:
          "All-in-one package specifically designed for small retail shop owners combining fire, burglary, neon sign, and plate glass protection.",
        suitableFor: "Grocery stores, garment showrooms, electronics retailers, and pharmacy owners.",
        highlights: [
          "Covers retail shop structure and trading merchandise",
          "Money insurance covering cash kept in locked cash registers or safes",
          "Protection for fragile plate glass windows and outdoor neon signboards",
        ],
      },
      {
        title: "Workmen's Compensation (Employees' Compensation)",
        description:
          "Statutory liability cover protecting business owners against legal compensation mandated by law if an employee suffers injury or death at work.",
        suitableFor: "Any business employing manual laborers, factory technicians, drivers, or warehouse handlers.",
        highlights: [
          "Fulfills statutory obligations under the Employees' Compensation Act",
          "Covers medical expenses and compensation for workplace injuries or death",
          "Protects employers from expensive court litigation and settlement awards",
        ],
      },
      {
        title: "Marine Cargo & Transit Insurance",
        description:
          "Covers raw materials, merchandise, and finished goods against transit damage, road collisions, and overturning while moving across India.",
        suitableFor: "Wholesale distributors, e-commerce sellers, and logistics providers.",
        highlights: [
          "Covers road, rail, and air freight transportation risks",
          "Protection against truck overturning, transit fire, and theft during transport",
          "Can be arranged per consignment or as an open annual transit policy",
        ],
      },
    ],
    keyConsiderations: [
      {
        title: "Accurate Stock Valuation & Monthly Declarations",
        explanation:
          "Inventory levels fluctuate throughout the year (e.g. peak festive stock vs off-season). Under-declaring stock leads to proportional claim deductions.",
        checklistItem: "Maintain updated stock registers and choose declaration policies for fluctuating godown stock.",
      },
      {
        title: "Adequate Fire Safety & Electrical Precautions",
        explanation:
          "Insurance surveyors inspect fire extinguishers, electrical wiring quality, and godown storage spacing during claim evaluations.",
        checklistItem: "Ensure active fire extinguishers are installed and annual electrical audits are completed.",
      },
      {
        title: "Bank Collateral & Hypothecation Compliance",
        explanation:
          "When taking business working capital limits (CC/OD loans), banks mandate comprehensive fire and stock insurance with bank clause.",
        checklistItem: "Ensure bank name and hypothecation details are accurately endorsed on the policy document.",
      },
      {
        title: "Cash-in-Safe & Transit Limits",
        explanation:
          "Cash insurance specifies strict limits on money held in locked safes after business hours and cash carried to bank branches.",
        checklistItem: "Verify that policy cash limits match your highest single-day bank cash deposit routines.",
      },
    ],
    commonExclusions: [
      "Loss of inventory due to gradual deterioration, spillage, shrinkage, or insect damage",
      "Theft or embezzlement by business partners, directors, or employees (unless fidelity guarantee is taken)",
      "Losses occurring while business premises have been left unoccupied for more than 30 consecutive days",
      "War, civil commotion, confiscation by government authorities, or nuclear contamination",
      "Consequential financial loss due to business closure unless specific Business Interruption cover is attached",
    ],
    exclusionsDisclaimer:
      "All commercial property claim appraisals, average clause applications, and inventory valuations are subject to IRDAI surveyor reports and insurer policy wordings.",
    whoNeedsThis: [
      {
        profile: "Retail Shopkeepers & Showrooms",
        scenario: "Store owners on Jessore Road and Barasat markets with extensive stock of garments, electronics, or groceries.",
        recommendedFocus: "Shopkeeper Package Policy with cash-in-safe and burglary extensions.",
      },
      {
        profile: "Wholesalers & Godown Operators",
        scenario: "Distributors storing substantial food grains, packaging goods, or hardware inventory.",
        recommendedFocus: "Bharat Sookshma Udyam Suraksha with flood and transit riders.",
      },
      {
        profile: "Small Manufacturers & Workshop Owners",
        scenario: "Workshops operating lathes, printing machinery, or assembly lines with hired technicians.",
        recommendedFocus: "Machinery Breakdown combined with Workmen's Compensation liability cover.",
      },
    ],
    categoryFaqs: [
      {
        question: "Is business insurance mandatory for taking a bank cash credit (CC) limit?",
        answer:
          "Yes. All nationalized and private banks require borrowers to insure their financed stock and factory machinery against fire, storm, and flood with the bank's hypothecation clause endorsed on the policy.",
      },
      {
        question: "How does the 'Average Clause' affect commercial stock claims?",
        answer:
          "If your godown contains ₹1 Crore worth of stock at the time of fire, but you only insured it for ₹50 Lakhs, the insurer applies the average clause, settling only 50% of any assessed loss. Accurate stock valuation prevents this penalty.",
      },
      {
        question: "Can Insurance Sathi assist with physical inspection and surveyor liaison after a shop fire?",
        answer:
          "Yes. For commercial and shop fire claims in Barasat and North 24 Parganas, we assist in timely intimation, stock loss inventory compilation, and surveyor meetings to ensure claims are properly documented.",
      },
      {
        question: "What is the difference between Burglary and Theft in commercial insurance?",
        answer:
          "Burglary requires evidence of violent or forcible entry/exit (broken locks, cut grilles). Simple theft without forced entry (like shoplifting or employee theft) is excluded unless specific theft riders are added.",
      },
    ],
    whyNeeded:
      "A single inventory fire or warehouse incident can wipe out business capital; business insurance ensures operational continuity and bank collateral compliance.",
    recommendedFor:
      "Retail shopkeepers, showroom owners, distributors, warehouse operators, and MSME business owners in Barasat, Madhyamgram, and Habra.",
    seo: {
      metaTitle: "Business & Shop Insurance in Barasat - Commercial & MSME Advisory - Insurance Sathi",
      metaDescription:
        "Protect your retail shop, godown, inventory, and business property in Barasat, Madhyamgram, and Habra with commercial insurance advisory from Insurance Sathi.",
      keywords: [
        "Business Insurance Barasat",
        "Shopkeeper Insurance North 24 Parganas",
        "Commercial Fire Policy Duckbanglow More",
        "Godown Inventory Insurance Madhyamgram",
        "MSME Insurance Habra",
      ],
    },
  },
  {
    id: "cat-personal-accident-insurance",
    slug: "personal-accident-insurance",
    aliases: ["personal-accident", "accident-insurance", "pa-insurance", "disability-insurance"],
    title: "Personal Accident Insurance",
    heroHeading: "Personal Accident & Disability Income Protection Advisory in Barasat",
    heroSubheading:
      "Lump-sum compensation against accidental demise, permanent total disablement, and weekly income replacement during recovery. Essential financial security for daily commuters and family breadwinners.",
    tagline: "Income Protection Against Accidental Death & Permanent Disablement",
    shortDescription:
      "Financial security compensating for accidental death, permanent total/partial disablement, and temporary loss of earning capacity.",
    fullOverview:
      "While health insurance reimburses hospital bills, it pays nothing for lost earnings if an accidental road collision or fall leaves you bedridden for six months or causes permanent physical disability. Personal Accident (PA) insurance bridges this critical vulnerability. It provides substantial direct lump-sum compensation in cases of Accidental Death (AD), Permanent Total Disablement (PTD), and Permanent Partial Disablement (PPD), alongside weekly cash allowances for Temporary Total Disablement (TTD) during medical bed rest.",
    iconName: "Users",
    imagePath: "/images/insurance/personal-accident-cartoon.svg",
    imageAlt: "Personal accident insurance and disability income protection advisory by Insurance Sathi",
    coverageHighlights: [
      "100% sum insured compensation in the unfortunate event of accidental death",
      "Up to 100% compensation for Permanent Total Disablement (loss of both limbs, sight, or paralysis)",
      "Scale-based structured compensation for Permanent Partial Disablement (loss of fingers, one limb)",
      "Weekly monetary income replacement benefit during Temporary Total Disablement (bed rest)",
      "Child education support grant and accidental medical treatment reimbursement riders",
    ],
    commonPolicyTypes: [
      "Individual Personal Accident Policy",
      "Family Personal Accident Cover",
      "Group Personal Accident Policy for Employees",
      "Road Safety & Commuter Accident Protection",
    ],
    coverageTypes: [
      {
        title: "Accidental Death (AD) Benefit",
        description:
          "Pays 100% of the sum insured directly to the registered nominee if the insured person loses their life due to an accident.",
        suitableFor: "Any active individual, commuter, or family earner exposed to daily road and travel risks.",
        highlights: [
          "100% sum insured paid as lump sum without deduction",
          "Worldwide 24/7 coverage across all geographies",
          "Complementary protection alongside standard life or term insurance",
        ],
      },
      {
        title: "Permanent Total Disablement (PTD)",
        description:
          "Compensates up to 100% to 150% of sum insured if an accident causes permanent, irreversible total disability preventing work.",
        suitableFor: "Sole family breadwinners whose earning capacity is their greatest asset.",
        highlights: [
          "Covers loss of both limbs, both eyes, or complete paralysis",
          "Provides capital to adapt living quarters and replace lifetime earnings",
          "Payout is made directly to the insured individual",
        ],
      },
      {
        title: "Permanent Partial Disablement (PPD)",
        description:
          "Pays a fixed statutory percentage (from 5% to 75%) of the sum insured for permanent partial physical impairments.",
        suitableFor: "Skilled professionals, mechanics, and industrial workers whose livelihood relies on physical dexterity.",
        highlights: [
          "Scale-based payout based on injury severity (e.g. loss of one eye, fingers, hearing)",
          "Compensates for reduced vocational capability",
          "Remaining sum insured continues for future risks",
        ],
      },
      {
        title: "Temporary Total Disablement (TTD Weekly Allowance)",
        description:
          "Provides a weekly cash allowance (typically 1% of sum insured up to ₹5,000–₹25,000/week) during medically advised bed rest.",
        suitableFor: "Self-employed professionals, traders, and gig workers who lose daily income when unable to work.",
        highlights: [
          "Weekly income replacement for up to 52 to 104 weeks during fracture/injury healing",
          "Compensates for lost daily wages and outpatient recuperation costs",
          "Requires doctor's medical fitness certificate and treatment proof",
        ],
      },
    ],
    keyConsiderations: [
      {
        title: "Occupational Risk Classification",
        explanation:
          "Insurers classify professions into risk groups (Class I: Desk/Office, Class II: Field/Supervisory, Class III: Heavy Industrial/Machinery).",
        checklistItem: "Accurately state your daily job duties to prevent occupational misdeclaration disputes during claims.",
      },
      {
        title: "High Sum Assured Eligibility (Income Multiple)",
        explanation:
          "Insurers generally permit Personal Accident sum insured up to 10x to 15x of your verified annual gross income.",
        checklistItem: "Provide recent salary slips or ITR to maximize your disability protection envelope.",
      },
      {
        title: "Weekly TTD Benefit Inclusion",
        explanation:
          "Basic policies cover only death and total disability; ensure your plan includes the weekly allowance for temporary bed rest.",
        checklistItem: "Verify that the weekly benefit amount is sufficient to cover your ongoing family groceries and household bills.",
      },
      {
        title: "Worldwide & 24/7 Operational Validity",
        explanation:
          "Personal accident insurance is active round-the-clock whether at home, on highways, at work, or traveling abroad.",
        checklistItem: "Confirm that coverage applies 24/7 without territorial restrictions.",
      },
    ],
    commonExclusions: [
      "Accidents sustained while under the influence of alcohol, drugs, or intoxicating substances",
      "Intentional self-injury, suicide, or attempted suicide",
      "Injuries arising from active participation in criminal acts or violations of the law",
      "Participation in professional hazardous activities (racing, scuba diving, skydiving) unless specially endorsed",
      "Pre-existing physical disabilities existing prior to policy commencement",
    ],
    exclusionsDisclaimer:
      "All accidental disability scales, weekly allowance approvals, and claim settlements are subject strictly to the treating doctor's certifications and insurer claim protocols.",
    whoNeedsThis: [
      {
        profile: "Daily Highway & City Commuters",
        scenario: "Two-wheeler riders and car commuters traveling daily along Jessore Road, Belgharia Expressway, and NH-12.",
        recommendedFocus: "Comprehensive PA cover with high PTD and weekly TTD allowances.",
      },
      {
        profile: "Self-Employed & Small Business Owners",
        scenario: "Traders and shopkeepers who do not receive paid sick leave or corporate disability benefits.",
        recommendedFocus: "Income replacement PA plan with 52-week TTD protection.",
      },
      {
        profile: "Industrial & Construction Supervisors",
        scenario: "Professionals working on construction sites, manufacturing workshops, or logistical godowns.",
        recommendedFocus: "Class II / III categorized personal accident cover with medical expense riders.",
      },
    ],
    categoryFaqs: [
      {
        question: "If I already have health insurance and term insurance, do I still need Personal Accident cover?",
        answer:
          "Yes. Health insurance only pays hospital bills, and term insurance only pays upon death. If a road accident leaves you disabled and unable to work for months, health insurance pays zero for your lost income, and term insurance pays zero because death did not occur. Personal Accident insurance directly pays lump-sum disability compensation.",
      },
      {
        question: "Does personal accident insurance require pre-policy medical check-ups?",
        answer:
          "In most cases, no. Since PA policies cover accidental trauma rather than biological diseases, insurers typically issue coverage without medical tests, based solely on age and occupational declarations.",
      },
      {
        question: "How is the Temporary Total Disablement (TTD) weekly benefit claimed?",
        answer:
          "You submit the treating doctor's medical certificate stating the injury diagnosis and recommending a specific duration of total bed rest, along with x-rays and treatment receipts. The insurer pays weekly compensation for the certified bed-rest period.",
      },
      {
        question: "Is personal accident insurance expensive?",
        answer:
          "No. Personal accident insurance is one of the most affordable insurance covers in India. A substantial ₹25 Lakh to ₹50 Lakh cover often costs just a few thousand rupees per year.",
      },
    ],
    whyNeeded:
      "Accidents can permanently disrupt earning capacity; PA insurance directly replaces lost livelihood and covers ongoing family commitments.",
    recommendedFor:
      "Commuters, vehicle riders, self-employed professionals, industrial workers, and sole family earners.",
    seo: {
      metaTitle: "Personal Accident Insurance in Barasat - Disability & Income Protection - Insurance Sathi",
      metaDescription:
        "Secure personal accident insurance in Barasat, Madhyamgram, and Habra. Get income replacement and lump-sum protection against accidental disability and death.",
      keywords: [
        "Personal Accident Insurance Barasat",
        "Accidental Disability Cover North 24 Parganas",
        "Accident Insurance Advisor Duckbanglow More",
        "Income Protection Accident Policy Madhyamgram",
        "Accidental Death Benefit Habra",
      ],
    },
  },
  {
    id: "cat-investment-plans",
    slug: "investment-plans",
    aliases: ["investment", "savings-plans", "ulip", "child-plans", "guaranteed-return-plans", "retirement-plans"],
    title: "Investment Plans",
    heroHeading: "Goal-Based Investment & Wealth Creation Plans with Life Protection",
    heroSubheading:
      "Compare Guaranteed Return savings, Child Education Funds, Retirement Annuities, and Market-Linked ULIPs from India's premier life insurers. Consult with MD Abrahim at Duckbanglow More, Barasat.",
    tagline: "Grow Wealth & Protect Your Family's Financial Future",
    shortDescription:
      "Structured savings and investment plans combining tax-free returns, sovereign safety, and life protection for children's education and retirement.",
    fullOverview:
      "Investment and savings insurance plans provide a disciplined, tax-efficient pathway to build long-term wealth while securing an immediate life protection cover. Whether you are planning for your child's higher education, marriage, or creating a guaranteed pension for retirement, these plans offer a balance of safety, growth, and sovereign/private insurer security. At Insurance Sathi, we analyze bonus track records, premium-to-payout ratios, lock-in terms, and tax benefits under Section 80C and Section 10(10D) to guide families across Barasat, Madhyamgram, and Habra.",
    iconName: "PiggyBank",
    imagePath: "/images/insurance/investment-plans-cartoon.webp",
    imageAlt: "Investment and savings insurance plans advisory in Barasat by Insurance Sathi",
    coverageHighlights: [
      "Guaranteed tax-free maturity payouts on non-linked endowment savings plans",
      "Dual benefit: Capital growth compounding plus active life cover protection",
      "Inbuilt Waiver of Premium (WoP) ensuring goals mature even in unforeseen events",
      "Tax exemptions under Section 80C and Section 10(10D) as per prevailing income tax laws",
    ],
    commonPolicyTypes: [
      "Guaranteed Return Savings Plans (Fixed non-market linked maturity)",
      "Unit Linked Insurance Plans (ULIPs with market equity upside)",
      "Child Future & Higher Education Milestone Plans",
      "Retirement & Immediate Annuity Guaranteed Pension Plans",
      "Capital Guarantee Solutions (Balanced debt and equity structure)",
    ],
    coverageTypes: [
      {
        title: "Guaranteed Return Savings Plans",
        description:
          "Traditional endowment and non-linked savings policies offering contractually guaranteed maturity amounts unaffected by stock market fluctuations.",
        suitableFor: "Risk-averse families and savers seeking 100% capital security and predictable milestone cashflow.",
        highlights: [
          "Contractually guaranteed maturity sum assured plus accrued loyalty additions",
          "Tax-free proceeds under Section 10(10D) up to statutory premium limits",
          "Includes 10x life cover for family breadwinners",
        ],
      },
      {
        title: "Unit Linked Insurance Plans (ULIPs)",
        description:
          "Market-linked wealth creation plans combining life insurance protection with equity and debt fund investment choices.",
        suitableFor: "Young professionals and aggressive wealth builders seeking inflation-beating long-term equity compounding.",
        highlights: [
          "Freedom to switch between Large-Cap, Mid-Cap, and Debt funds tax-free",
          "Zero long-term capital gains tax on maturity within eligible limits",
          "Return of mortality charges features in modern generation ULIPs",
        ],
      },
      {
        title: "Child Education Milestone Plans",
        description:
          "Targeted long-term savings plans structured around your child's age milestones (college admission at 18, post-graduation at 21).",
        suitableFor: "Parents with young children who want guaranteed funding for tuition fees and career setup.",
        highlights: [
          "Inbuilt Waiver of Premium (WoP) rider ensuring the plan continues if the parent passes away",
          "Staggered milestone payouts matching semester fee schedules",
          "Insulates child's academic future against parental demise or market crashes",
        ],
      },
      {
        title: "Retirement & Annuity Pension Plans",
        description:
          "Guaranteed pension solutions providing monthly, quarterly, or annual income for life with return of purchase price to nominees.",
        suitableFor: "Senior citizens, self-employed professionals, and pre-retirees desiring inflation-shielded pension security.",
        highlights: [
          "Lifetime guaranteed pension rate locked in at policy inception",
          "Options for joint-life annuity covering both husband and wife",
          "100% return of initial purchase price corpus to surviving nominees",
        ],
      },
    ],
    keyConsiderations: [
      {
        title: "Investment Horizon & Lock-in Period",
        explanation:
          "Insurance-cum-investment plans are structured for long-term compounding (typically 5 to 20 years). Premature surrender before maturity can result in high surrender charges; align policy term with your specific financial milestone.",
        checklistItem: "Ensure you can comfortably pay premiums for the entire commitment period without liquidity distress.",
      },
      {
        title: "Guaranteed vs. Market-Linked Returns",
        explanation:
          "Guaranteed savings policies lock in a contractual rate of return regardless of economic cycles, whereas ULIPs invest in equities and debt funds where returns reflect capital market performance.",
        checklistItem: "Assess your risk appetite before deciding between market-linked equity upside vs guaranteed certainty.",
      },
      {
        title: "Waiver of Premium Benefit",
        explanation:
          "For child education planning, ensure the policy includes a Waiver of Premium rider. If the parent passes away during the tenure, all future premiums are waived by the insurer, and the promised maturity fund is paid to the child at age 18 or 21.",
        checklistItem: "Verify that Waiver of Premium (WoP) is active on child education and family savings policies.",
      },
      {
        title: "Tax Eligibility under Budget Regulations",
        explanation:
          "Ensure your aggregate annual premium across traditional life policies remains within the ₹5 Lakh threshold to preserve 100% tax-free maturity benefits under Section 10(10D).",
        checklistItem: "Calculate aggregate life insurance premiums to ensure full tax exemption under Section 10(10D).",
      },
    ],
    commonExclusions: [
      "Market risk on investment returns in ULIPs is borne entirely by the policyholder",
      "Early surrender within the first 3 to 5 years incurs statutory deductions and forfeit of full benefits",
      "Loan availability against policies is subject to minimum paid-up status (usually after 2 full policy years)",
      "Suicide exclusion clause within 12 months from policy inception as per IRDAI guidelines",
    ],
    exclusionsDisclaimer:
      "All investment projections and non-guaranteed bonuses are illustrative. Guaranteed benefits and payouts are subject to timely premium deposits and underwriter policy terms.",
    whoNeedsThis: [
      {
        profile: "Parents with Young Children",
        scenario: "Families planning guaranteed funds for children's professional higher education and marriage.",
        recommendedFocus: "Child milestone guaranteed savings with inbuilt Waiver of Premium protection.",
      },
      {
        profile: "Salaried Professionals",
        scenario: "Individuals seeking disciplined, tax-free annual compounding under Section 80C and Section 10(10D).",
        recommendedFocus: "Guaranteed Return Endowment or Capital Guarantee Solutions.",
      },
      {
        profile: "Pre-Retirees & Business Owners",
        scenario: "Individuals looking for lifetime guaranteed annuity cashflow and safe pension reserve creation.",
        recommendedFocus: "Deferred or Immediate Annuity Plans with return of purchase price.",
      },
    ],
    categoryFaqs: [
      {
        question: "How do guaranteed return insurance plans differ from bank fixed deposits (FD)?",
        answer:
          "Unlike bank FDs where interest is taxed annually at your income tax slab rate and reinvestment risk occurs upon maturity, guaranteed insurance plans lock in your return rate for 10 to 30 years and offer tax-free maturity payouts under Section 10(10D), along with 10x life insurance protection.",
      },
      {
        question: "What happens if I stop paying premiums after 3 years?",
        answer:
          "Most traditional savings plans acquire a 'Paid-Up' value once premiums have been paid for at least 2 or 3 consecutive years. The policy continues with reduced benefits proportional to premiums paid until maturity, or you can surrender it subject to surrender terms.",
      },
      {
        question: "How does a child education insurance plan work?",
        answer:
          "The parent is the life insured and premium payer, while the child is the beneficiary. If the parent survives, the accumulated maturity fund is paid to fund higher education. In case of unfortunate demise of the parent, the sum assured is paid immediately to the family, all future premiums are waived by the insurer, and the full maturity benefit is still paid when the child turns 18 or 21.",
      },
      {
        question: "Can I switch funds inside a ULIP without paying capital gains tax?",
        answer:
          "Yes. ULIPs allow unlimited or multiple free switches between equity, debt, and balanced funds without triggering short-term or long-term capital gains tax, making them one of the most tax-efficient investment instruments in India.",
      },
    ],
    whyNeeded:
      "Guarantees that your family's critical milestones—child education, marriage, and retirement—are funded with absolute certainty, irrespective of market volatility or life uncertainties.",
    recommendedFor:
      "Parents, salaried individuals, professionals, and business families in Barasat, Madhyamgram, and Habra looking for long-term financial security.",
    seo: {
      metaTitle: "Investment & Savings Plans in Barasat - Guaranteed Returns & ULIP - Insurance Sathi",
      metaDescription:
        "Explore guaranteed return savings plans, child education funds, and retirement annuity solutions in Barasat, Madhyamgram, and Habra with Insurance Sathi.",
      keywords: [
        "Investment Plans Barasat",
        "Guaranteed Return Insurance North 24 Parganas",
        "Child Education Savings Plan Barasat",
        "ULIP Advisor Duckbanglow More",
        "Retirement Pension Plans Habra",
        "Tax Free Savings Insurance Madhyamgram",
      ],
    },
  },
] as const;

/**
 * Resolves an insurance category by canonical slug or registered aliases.
 */
export function getInsuranceCategoryBySlug(slug: string): InsuranceCategoryItem | undefined {
  const normalized = slug.trim().toLowerCase();
  return (
    INSURANCE_CATEGORIES_DATA.find((cat) => cat.slug === normalized) ||
    INSURANCE_CATEGORIES_DATA.find((cat) => cat.aliases?.includes(normalized))
  );
}

/**
 * Returns all valid route slugs (canonical + aliases) for static generation.
 */
export function getAllInsuranceSlugs(): string[] {
  const set = new Set<string>();
  for (const c of INSURANCE_CATEGORIES_DATA) {
    set.add(c.slug);
    if (c.aliases) {
      for (const a of c.aliases) {
        set.add(a);
      }
    }
  }
  return Array.from(set);
}

/**
 * Returns related insurance categories excluding the current category.
 */
export function getRelatedInsuranceCategories(
  currentSlug: InsuranceSlug,
  limit: number = 4
): InsuranceCategoryItem[] {
  return INSURANCE_CATEGORIES_DATA.filter((c) => c.slug !== currentSlug).slice(0, limit);
}

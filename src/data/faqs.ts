import type { FaqItem } from "@/types";

export const FAQS_DATA: readonly FaqItem[] = [
  {
    id: "faq-1",
    category: "general",
    categoryLabel: "General & Office",
    question: "Where is Insurance Sathi located, and who operates the advisory?",
    answer:
      "Insurance Sathi is located at Duckbanglow More, Barasat, North 24 Parganas, West Bengal - 700124. The advisory was founded on 20 May 2023 by MD Abrahim, who personally assists local clients with insurance consultation, policy servicing, and claim support.",
  },
  {
    id: "faq-2",
    category: "general",
    categoryLabel: "General & Office",
    question: "Which areas do you actively serve for in-person and doorstep consultations?",
    answer:
      "We primarily serve Barasat, Madhyamgram, and Habra, as well as surrounding pockets of North 24 Parganas. Clients can visit our Duckbanglow More office or schedule doorstep consultation by calling 9332364068.",
  },
  {
    id: "faq-3",
    category: "general",
    categoryLabel: "General & Office",
    question: "What does 'All Insurance Solutions Under One Roof' mean?",
    answer:
      "It means you don't need to visit multiple different offices or agents for different insurance requirements. We assist you across all product categories—Life, Health, Motor, Term, Home, Travel, Business, and Personal Accident—as well as ongoing servicing, premium deposits, and claims.",
  },
  {
    id: "faq-4",
    category: "claims",
    categoryLabel: "Claim Assistance",
    question: "How does Insurance Sathi assist during a health hospitalization emergency?",
    answer:
      "During an emergency, contact us immediately at 9332364068. We guide you through the cashless pre-authorization process at network hospitals, ensure proper initial documentation, and if you are admitted to a non-network facility, we help compile the complete reimbursement dossier (discharge summary, itemized bills, pharmacy receipts, and diagnostic reports) to avoid deduction queries.",
  },
  {
    id: "faq-5",
    category: "claims",
    categoryLabel: "Claim Assistance",
    question: "What is the difference between cashless and reimbursement health claims?",
    answer:
      "In a cashless claim, the insurance company or Third Party Administrator (TPA) settles eligible medical bills directly with the empanelled network hospital. In a reimbursement claim, you pay the hospital bills out-of-pocket at discharge and submit all original documents to the insurer for reimbursement into your bank account. We assist with both types of claims.",
  },
  {
    id: "faq-6",
    category: "claims",
    categoryLabel: "Claim Assistance",
    question: "What should I do immediately after a motor accident before filing a claim?",
    answer:
      "Do not move the vehicle from the spot until you have taken clear photographs from multiple angles. Intimate the insurance company immediately (within 24 to 48 hours), file a police GD/FIR if third-party injury or property damage is involved, and transfer the vehicle to an authorized network garage for the official surveyor inspection. We guide you through each of these critical steps.",
  },
  {
    id: "faq-7",
    category: "policy-servicing",
    categoryLabel: "Policy Servicing",
    question: "Can you help update my nominee, address, or phone number in an existing policy?",
    answer:
      "Yes. Keeping your nominee and contact details updated is vital to prevent legal complications during claim settlement. We help you fill the official insurer endorsement forms, verify required KYC documents, and submit the request to the insurer until an official endorsement letter is issued.",
    relevantServiceSlug: "policy-services",
  },
  {
    id: "faq-8",
    category: "policy-servicing",
    categoryLabel: "Policy Servicing",
    question: "I lost my original policy bond paper. Can I still get a duplicate document?",
    answer:
      "Yes, policyholders can obtain a duplicate policy bond. The process usually requires submitting an indemnity bond on non-judicial stamp paper, KYC proofs, and a formal written request to the insurer. We assist Barasat, Madhyamgram, and Habra clients in drafting and completing this process smoothly.",
    relevantServiceSlug: "policy-services",
  },
  {
    id: "faq-9",
    category: "lapsed-policy",
    categoryLabel: "Lapsed Policy Revival",
    question: "My life insurance policy has been lapsed for over a year. Can it still be revived?",
    answer:
      "Most traditional life insurance policies can be revived within 2 to 5 years from the date of the first unpaid premium, subject to insurer terms. You will need to pay the outstanding premiums along with accrued revival interest and submit a Declaration of Good Health (DGH). We calculate your exact revival quotation and assist with the paperwork.",
    relevantServiceSlug: "lapsed-policy-services",
  },
  {
    id: "faq-10",
    category: "lapsed-policy",
    categoryLabel: "Lapsed Policy Revival",
    question: "Is it better to revive an old lapsed policy or purchase a brand new one?",
    answer:
      "In most cases, reviving an old policy is more beneficial because premiums were locked in at your younger entry age, accrued bonuses are restored, and original terms are preserved. Buying a fresh policy at a higher age costs more and starts new waiting periods. We perform a comparative calculation so you can make an informed decision.",
    relevantServiceSlug: "lapsed-policy-services",
  },
  {
    id: "faq-11",
    category: "premiums",
    categoryLabel: "Premium Deposits",
    question: "What is a grace period, and what happens if I miss it?",
    answer:
      "A grace period is an extra window (typically 15 days for monthly mode, and 30 days for quarterly, half-yearly, and yearly modes) granted by insurers after the premium due date. During the grace period, your policy remains in full force. If payment is not made within the grace period, the policy lapses and risk cover ceases.",
    relevantServiceSlug: "premium-deposit-assistance",
  },
  {
    id: "faq-12",
    category: "premiums",
    categoryLabel: "Premium Deposits",
    question: "How can I set up automated premium payments so I never forget?",
    answer:
      "We help you register an e-NACH mandate or standing instruction with your bank account or debit card. Once set up, premiums are automatically debited on your due date, preventing unintended policy lapses and protecting your continuity benefits.",
    relevantServiceSlug: "premium-deposit-assistance",
  },
] as const;

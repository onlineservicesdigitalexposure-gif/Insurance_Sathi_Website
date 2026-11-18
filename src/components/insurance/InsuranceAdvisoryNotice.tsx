import { ShieldAlert } from "lucide-react";

export interface InsuranceAdvisoryNoticeProps {
  className?: string;
}

export function InsuranceAdvisoryNotice({ className = "" }: InsuranceAdvisoryNoticeProps) {
  return (
    <aside
      role="note"
      aria-label="Statutory and Regulatory Notice"
      className={`bg-slate-50 border-t border-brand-border/60 py-4 ${className}`}
    >
      <div className="container-site">
        <div className="rounded-2xl border border-amber-200/90 bg-amber-50/70 p-5 sm:p-6 text-amber-950">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <ShieldAlert className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="font-extrabold text-amber-950 tracking-tight text-sm">
                Important Advisory &amp; Regulatory Notice
              </p>
              <p className="leading-relaxed text-amber-900">
                <strong>Insurance Sathi</strong> is an independent insurance assistance and advisory service located at Duckbanglow More, Barasat, North 24 Parganas, West Bengal. We provide procedural guidance, comparative explanations, and document verification support for policyholders across Barasat, Madhyamgram, and Habra.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-amber-800">
                <li>We do not guarantee policy issuance, proposal acceptance, or underwriting decisions.</li>
                <li>We do not guarantee claim settlement, claim speed, or claim reimbursement payouts.</li>
                <li>We do not guarantee premium savings, returns on maturity, or rate discounts.</li>
              </ul>
              <p className="text-[11px] text-amber-800 font-medium pt-1">
                All insurance proposals, policy terms, premium rates, exclusions, waiting periods, and claim decisions are strictly subject to the underwriting criteria and contractual terms of the respective IRDAI-registered insurance companies. The information presented on this website is for educational and guidance purposes only and should not be construed as legal or guaranteed financial advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

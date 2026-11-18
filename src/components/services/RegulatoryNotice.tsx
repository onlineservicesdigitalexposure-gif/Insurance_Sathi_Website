import { ShieldAlert } from "lucide-react";

export interface RegulatoryNoticeProps {
  className?: string;
}

export function RegulatoryNotice({ className = "" }: RegulatoryNoticeProps) {
  return (
    <div
      role="note"
      aria-label="Regulatory and Advisory Notice"
      className={`rounded-2xl border border-amber-200/80 bg-amber-50/70 p-5 text-amber-950 ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
          <ShieldAlert className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm">
          <p className="font-extrabold text-amber-900 tracking-tight">
            Important Advisory &amp; Regulatory Notice
          </p>
          <p className="leading-relaxed text-amber-800">
            <strong>Insurance Sathi</strong> is an independent insurance assistance and advisory service based in Barasat, West Bengal. We provide procedural guidance, policy comparisons, and documentation support to policyholders.
          </p>
          <ul className="list-disc pl-4 space-y-0.5 text-amber-800 text-xs">
            <li>We do not guarantee policy approval or underwriting acceptance.</li>
            <li>We do not guarantee claim settlement or payout amounts.</li>
            <li>We do not guarantee premium savings or premium discounts.</li>
          </ul>
          <p className="text-[11px] text-amber-700 pt-1 font-medium">
            All policy decisions, underwriting loading, terms of revival, and claim settlements are strictly determined by and subject to the respective insurance company&apos;s contractual terms, conditions, and prevailing IRDAI regulations.
          </p>
        </div>
      </div>
    </div>
  );
}

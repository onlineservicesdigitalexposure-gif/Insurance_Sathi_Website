export default function MarketingLoading() {
  return (
    <div
      className="min-h-[60vh] bg-slate-50/50 animate-pulse"
      aria-busy="true"
      aria-label="Loading page content"
    >
      <div className="bg-brand-navy py-8">
        <div className="container-site max-w-4xl space-y-3">
          <div className="h-5 w-32 rounded-full bg-white/15" />
          <div className="h-9 w-3/4 rounded-xl bg-white/20" />
          <div className="h-4 w-2/3 rounded-lg bg-white/10" />
        </div>
      </div>
      <div className="container-site py-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="h-44 rounded-2xl bg-white border border-slate-200" />
          <div className="h-44 rounded-2xl bg-white border border-slate-200" />
          <div className="h-44 rounded-2xl bg-white border border-slate-200" />
        </div>
      </div>
    </div>
  );
}

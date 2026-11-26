import { BookOpen, ShieldCheck, MapPin, Video } from "lucide-react";
import { getAllBlogVideos } from "@/data/blogs";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import { Breadcrumb } from "./Breadcrumb";

export function BlogHero() {
  const videoCount = getAllBlogVideos().length;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-navy-900 via-brand-navy to-brand-navy-800 text-white py-4">
      {/* Decorative background circles */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-royal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Breadcrumb with white/slate contrast */}
        <div className="mb-6">
          <Breadcrumb
            items={[{ label: "Knowledge Hub" }]}
            className="[&_ol]:text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-white"
          />
        </div>

        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-orange backdrop-blur-md border border-white/15">
            <BookOpen className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            <span>Educational Insurance Hub</span>
          </div>

          {/* H1 Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            <LogoHeadingText mode="dark">Unbiased Insurance Guides for Indian Families</LogoHeadingText>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
            Demystifying health insurance waiting periods, claim documentation, lapsed policy revivals, and coverage calculations for policyholders in Barasat, Madhyamgram, and Habra.
          </p>

          {/* Trust Footnote */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-4 border-t border-white/15">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span>Authored by <strong>MD Abrahim</strong> (Founder &amp; Advisor)</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              <span>Duckbanglow More, Barasat, North 24 Parganas</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <a
              href="#video-guides"
              className="inline-flex items-center gap-1.5 font-bold text-amber-300 hover:text-white transition-colors"
            >
              <Video className="h-4 w-4" aria-hidden="true" />
              <span>{videoCount} Video Guides Available</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

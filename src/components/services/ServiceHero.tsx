import {
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import { AnimatedCartoonHeroVisual } from "@/components/ui/AnimatedCartoonHeroVisual";
import { Breadcrumb } from "./Breadcrumb";
import type { ServiceItem } from "@/types";

export interface ServiceHeroProps {
  service: ServiceItem;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white border-b border-white/10">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-brand-royal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-[400px] w-[400px] rounded-full bg-brand-orange/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-md border border-white/10 max-w-fit">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (Desktop) / Bottom (Mobile): Heading & Content */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left">
            {/* Category / Service Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
              <span>Insurance Sathi Service</span>
            </div>

            {/* Unique Hero Heading */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white leading-tight">
              <LogoHeadingText mode="dark">{service.heroHeading}</LogoHeadingText>
            </h1>

            {/* Service-Specific Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              {service.heroSubheading}
            </p>

            {/* Highlights Checklist */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full border-t border-white/15 pt-6 text-xs sm:text-sm text-slate-200">
              {service.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Local Trust Micro-footer */}
            <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                <span>Office at Duckbanglow More, Barasat</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
                <span>Serving Barasat, Madhyamgram &amp; Habra</span>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop) / Top (Mobile): Animated Cartoon Visual */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center w-full">
            <AnimatedCartoonHeroVisual
              src={service.imagePath}
              alt={service.imageAlt}
              label={service.title}
              sealTitle="Personal Advisory"
              sealSubtitle="Direct Guidance by MD Abrahim"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

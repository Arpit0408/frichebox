import PageHeader from "@/components/shared/page-header";
import AboutStory from "@/components/about/about-story";
import MissionVision from "@/components/about/mission-vision";
import KeyStrengths from "@/components/about/key-strengths";
import StatsCounter from "@/components/shared/stats-counter";
import FeatureChecklistSection from "@/components/shared/feature-checklist-section";
import Certifications from "@/components/shared/certifications";
import ContactSection from "@/components/shared/contact-section";

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      <PageHeader title="About Us" />
      <AboutStory />
      <StatsCounter />
      <MissionVision />
      <FeatureChecklistSection
        badge="Values"
        title="How we operate."
        subtitle="We act as a dedicated extension of your supply chain, prioritizing trust, accountability, and lasting partnerships to protect your brand's reputation at every step."
        items={[
          {
            id: 1,
            title: "Reliability",
            description:
              "We work as a seamless extension of your team, ensuring absolute precision from receiving to final dispatch.",
          },
          {
            id: 2,
            title: "Transparency",
            description:
              "No black boxes. You get real-time SKU tracking and live dashboards to monitor your exact stock position 24/7.",
          },
          {
            id: 3,
            title: "Excellence",
            description:
              "Near enough isn't enough. We enforce a strict zero-pick-error SOP using automated workflows to protect your brand's reputation.",
          },
        ]}
        imageSrc="/images/about/frichebox_tracking.png"
        imageAlt="FRICHEBOX Live Tracking Dashboard on computer screen"
        imagePosition="right"
      />
      <KeyStrengths />
      <Certifications />
      <ContactSection />
    </main>
  );
}

import PageHeader from "@/components/shared/page-header";
import InfrastructureOverview from "@/components/infrastructure/infrastructure-overview";
import TechInfrastructureTabs from "@/components/infrastructure/tech-infrastructure-tabs";
import ValueAddedServices from "@/components/infrastructure/value-added-services";
import PanIndiaReach from "@/components/infrastructure/pan-india-reach";
import Certifications from "@/components/shared/certifications";
import ContactSection from "@/components/shared/contact-section";

export default function InfrastructurePage() {
  return (
    <main className="flex-1 bg-white">
      <PageHeader title="Technology & Infrastructure" />
      <InfrastructureOverview />
      <TechInfrastructureTabs />
      <ValueAddedServices />
      <PanIndiaReach />
      <Certifications />
      <ContactSection />
    </main>
  );
}

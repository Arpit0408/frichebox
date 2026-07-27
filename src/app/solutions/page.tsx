import PageHeader from "@/components/shared/page-header";
import CoreServicesGrid from "@/components/solutions/core-services-grid";
import IndustriesWeServe from "@/components/solutions/industries-we-serve";
import Workflow from "@/components/solutions/workflow";
import FrischboxAdvantage from "@/components/shared/frischbox-advantage";
import Certifications from "@/components/shared/certifications";

export default function SolutionsPage() {
  return (
    <main className="flex-1 bg-white">
      <PageHeader title="Solutions" />
      <CoreServicesGrid />
      <Workflow />
      <IndustriesWeServe />
      <FrischboxAdvantage />
      <Certifications />
    </main>
  );
}

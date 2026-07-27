import PageHeader from "@/components/shared/page-header";
import ContactPageContent from "@/components/contact/contact-page-content";
import FaqSection from "@/components/shared/faq-section";

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <PageHeader title="Contact Us" />
      <ContactPageContent />
      <FaqSection badge="Support" />
    </main>
  );
}

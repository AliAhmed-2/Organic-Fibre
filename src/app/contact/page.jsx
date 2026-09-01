import ContactForm from "../../../Components/Contact page comp/ContactForm";
import ContactSidebar from "../../../Components/Contact page comp/ContactSidebar";
import NavBar from "../../../Components/Nav";

export const metadata = {
  title: "Contact & Quotation | Organic Fiber",
  description:
    "Get in touch with Organic Fiber for Banana Extractor Machine pricing, spare parts inquiries, wholesale raw fiber orders, and custom eco-product manufacturing.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar variant="dark" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-10 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          <ContactSidebar />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

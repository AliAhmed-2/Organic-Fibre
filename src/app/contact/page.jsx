import ContactForm from "../../../Components/Contact page comp/ContactForm";
import ContactSidebar from "../../../Components/Contact page comp/ContactSidebar";
import NavBar from "../../../Components/Nav";

export default function ContactPage() {
  return (
    <div>
      <NavBar variant="dark" />

      <div className="flex  flex-col-reverse md:flex-row  pb-20 gap-20 px-10">
        <ContactSidebar />
        <ContactForm />
      </div>
    </div>
  );
}

import ContactFaqs from "../components/contact/ContactFaqs";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";

export default function Page() {
    return <main>
      <ContactHero />
      <ContactForm />
      <ContactFaqs />
    </main>
  }
import LogoCloud from "@/app/components/global/LogoCloud";
import PurpleTestimonials from "@/app/components/global/PurpleTestimonials";
import HowWeSupportOurPartners from "@/app/components/partnership/HowWeSupportOurPartners";
import PartnershipFAQs from "@/app/components/partnership/PartnershipFAQs";
import PartnershipForm from "@/app/components/partnership/PartnershipForm";
import TypesOfPartnerships from "@/app/components/partnership/TypesOfPartnerships";
import WhyPartner from "@/app/components/partnership/WhyPartner";
import PartnershipHero from "@/app/components/partnership/partnershipHero";

export default function Page() {
    return <main>
        <PartnershipHero />
        <LogoCloud />
        <WhyPartner />
        <TypesOfPartnerships />
        <PurpleTestimonials />
        <HowWeSupportOurPartners />
        <PartnershipFAQs />
        <PartnershipForm />
    </main>
  }
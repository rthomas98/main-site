import ClientSuccessStories from "@/app/components/global/ClientSuccessStories";
import SimpleCTA from "@/app/components/global/SimpleCTA";
import IndustryRecognition from "@/app/components/why-us/IndustryRecognition";
import InnovativeSolutions from "@/app/components/why-us/InnovativeSolutions";
import OurExpertise from "@/app/components/why-us/OurExpertise";
import OurStatus from "@/app/components/why-us/OurStatus";
import ReliableSupport from "@/app/components/why-us/ReliableSupport";
import WhyHero from "@/app/components/why-us/WhyHero";

export default function Page() {
    return <main>
        <WhyHero />
        <OurStatus />
        <OurExpertise />
        <InnovativeSolutions />
        <ClientSuccessStories />
        <ReliableSupport />
        <IndustryRecognition />
        <SimpleCTA />
    </main>
  }
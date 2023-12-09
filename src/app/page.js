import DarkCTA from "./components/global/DarkCTA"
import LogoCloud from "./components/global/LogoCloud"
import PurpleTestimonials from "./components/global/PurpleTestimonials"
import RecentCaseStudies from "./components/global/RecentCaseStudies"
import RecentPosts from "./components/global/RecentPosts"
import HomeAboutUs from "./components/home/HomeAboutUs"
import HomeSolutions from "./components/home/HomeSolutions"
import HomeWhyUs from "./components/home/HomeWhyUs"
import HomeHero from "./components/home/homeHero"

export default function Home() {
  return (
    <main>
      <HomeHero />
      <LogoCloud />
      <HomeAboutUs />
      <HomeSolutions />
      <RecentCaseStudies />
      <PurpleTestimonials />
      <HomeWhyUs />
      <DarkCTA />
      <RecentPosts />
    </main>
  )
}

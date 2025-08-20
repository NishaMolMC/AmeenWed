import Hero from "@/app/components/hero"
import DateAnnouncement from "./components/date-announcement"
import BrideGroom from "./components/bride-groom"
import OurStory from "./components/our-story"
import MapSection from "./components/maps-section"
import Footer from "./components/footer"
// import Wishes from "@/components/wishes"
// import PhotoGallery from "@/components/photo-gallery"
// import Reception from "@/components/reception"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DateAnnouncement />
      <BrideGroom />
      {/* <OurStory /> */}
      {/* <Wishes />
      <PhotoGallery />
      <Reception /> */}
      <MapSection />
      <Footer />
    </div>
  )
}
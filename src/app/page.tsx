import Hero from "@/app/components/hero"
import DateAnnouncement from "./components/date-announcement"
import BrideGroom from "./components/bride-groom"
import OurStory from "./components/our-story"
import Quote from "./components/quote"
// import Wishes from "@/components/wishes"
// import PhotoGallery from "@/components/photo-gallery"
// import Reception from "@/components/reception"
// import MapSection from "@/components/map-section"
// import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DateAnnouncement />
      <BrideGroom />
      <OurStory />
      <Quote />
      {/* <Wishes />
      <PhotoGallery />
      <Reception />
      <MapSection />
      <Footer /> */}
    </div>
  )
}
import Banner from "@/components/Banner";
import FeaturedPage from "@/components/Featured";
import ReadyToStart from "@/components/ReadyToStart";
import WhyChooseSection from "@/components/WhyChooseSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <FeaturedPage/>
      <WhyChooseSection/>
      <ReadyToStart/>
    </div>
  );
}

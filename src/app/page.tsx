import Image from "next/image";
import Slider from "@/components/Slider";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <main>
      <Slider></Slider>
      <Featured></Featured>
    </main>
  )
}

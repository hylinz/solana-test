import Header from "@/components/Header";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return <main className="flex flex-col min-h-screen">
    <Header />
    <Stats />
    <Testimonials />
  </main>;
}

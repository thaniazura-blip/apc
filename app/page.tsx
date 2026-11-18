import { About } from "@/components/about";
import { Categories } from "@/components/categories";
import { Closing } from "@/components/closing";
import { Criteria } from "@/components/criteria";
import { Dates } from "@/components/dates";
import { Faq } from "@/components/faq";
import { Guidelines } from "@/components/guidelines";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Venue } from "@/components/venue";
import { Why } from "@/components/why";
import { Winners } from "@/components/winners";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Venue />
      <About />
      <Categories />
      <Why />
      <Process />
      <Criteria />
      <Guidelines />
      <Dates />
      <Winners />
      <Faq />
      <Closing />
    </main>
  );
}

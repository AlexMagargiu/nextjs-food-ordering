import SectionHeader from "@/components/layout/SectionHeader";

export default function ContactUs() {
  return (
    <section className="my-8 text-center">
      <SectionHeader mainHeader={"Contact us"} subHeader={"Don't hesitate"} />
      <div className="mt-8">
        <a className="text-4xl text-gray-500 underline" href="tel:+46738123123">
          +46 738 123 123
        </a>
      </div>
    </section>
  );
}

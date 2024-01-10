import SectionHeader from "./SectionHeader";

export default function AboutUs() {
  return (
    <section className="my-16 text-center">
      <SectionHeader mainHeader={"About us"} subHeader={"Our story"} />
      <div className="flex flex-col max-w-md gap-4 mx-auto mt-4 text-gray-500">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum, turpis vel convallis aliquam, arcu orci molestie sem,
          ornare congue felis ex ut elit. Duis in egestas nisi. Sed nec lobortis
          elit. Morbi convallis nibh vel massa tincidunt suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum, turpis ornare congue felis ex ut elit. Duis in egestas
          nisi. Sed nec lobortis elit. Morbi convallis nibh vel massa tincidunt
          suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum, turpis vel convallis aliquam, arcu orci molestie sem,
          ornare congue felis ex ut elit.
        </p>
      </div>
    </section>
  );
}

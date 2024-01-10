import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
  return (
    <section>
      <div className="mb-4 text-center">
        <SectionHeader mainHeader="Menu" subHeader="Check out" />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}

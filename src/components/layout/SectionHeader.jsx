export default function SectionHeader({ subHeader, mainHeader }) {
  return (
    <>
      <p className="font-semibold leading-4 text-gray-500 uppercase">
        {subHeader}
      </p>
      <h2 className="text-4xl italic font-bold text-primary">{mainHeader}</h2>
    </>
  );
}

export default function Timeline() {
  const data = [
    { title: "SMK Citra Negara", subtitle: "Multimedia", year: "2019" },
    { title: "PT Expanindo", subtitle: "Graphic Designer Intern", year: "2021" },
    { title: "University of BSI", subtitle: "Information System", year: "2022" },
    { title: "Dit. Standalitu Kementerian Perdagangan", subtitle: "Full-stack Developer Intern", year: "2025" },
    { title: "Set. BNSP - Maganghub Programme", subtitle: "Graphic Designer & Multimedia", year: "2025-2026" },
  ];

  return (
    <div className="relative my-10 mx-auto max-w-3xl px-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="
            grid items-center
            grid-cols-[28px_1fr] grid-rows-2 gap-x-4
            md:grid-cols-[3fr_32px_2fr] md:grid-rows-1 md:gap-x-10 md:gap-y-8
          "
        >
          {/* dot + line column */}
          <div className="row-span-2 md:row-span-1 flex flex-col items-center self-stretch md:order-2">
            {/* upper half line */}
            <span
              className={`w-1 flex-1 bg-[#2b0f0f] ${i === 0 ? "invisible" : ""}`}
            />
            {/* dot */}
            <span className="h-5 w-5 shrink-0 rounded-full bg-[#2b0f0f]" />
            {/* lower half line */}
            <span
              className={`w-1 flex-1 bg-[#2b0f0f] ${i === data.length - 1 ? "invisible" : ""}`}
            />
          </div>

          {/* title + subtitle */}
          <p className="m-0 text-left md:order-1 md:text-right md:py-6">
            <span className="block font-bold uppercase">{item.title}</span>
            <span className="block font-light text-neutral-600">{item.subtitle}</span>
          </p>

          {/* year */}
          <p className="col-start-2 mb-8 text-left font-bold text-neutral-700 md:order-3 md:col-start-auto md:mb-0 md:py-6">
            {item.year}
          </p>
        </div>
      ))}
    </div>
  );
}
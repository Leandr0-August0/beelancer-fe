import * as React from "react";

function SkillsSection() {
  return (
    <section className="flex flex-col mt-10 w-full ml-3 text-black text-left whitespace-nowrap">
      <h2 className="text-4xl font-medium leading-none text-left">
        Habilidades
      </h2>
      <ul className="mt-1.5 text-2xl leading-10 list-disc px-10">
        <li>Revestimentos</li>
        <li>Acabamentos</li>
      </ul>
    </section>
  );
}

export default SkillsSection;

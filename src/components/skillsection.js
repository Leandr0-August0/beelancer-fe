import * as React from "react";

function SkillsSection() {
  return (
    <section className="flex flex-col mt-10 max-w-full text-black whitespace-nowrap w-[211px]">
      <h2 className="self-center text-4xl font-medium leading-none text-center">
        Habilidades
      </h2>
      <ul className="mt-1.5 text-2xl leading-10 list-disc px-5">
        <li>Revestimentos</li>
        <li>Acabamentos</li>
      </ul>
    </section>
  );
}

export default SkillsSection;

import * as React from "react";

function SkillsSection() {
  return (
    <section className="flex flex-col mt-10 w-full ml-3 text-black text-left whitespace-nowrap">
      <div className="flex flex-row gap-4">
        <h2 className="text-4xl font-medium leading-none text-left">
          Habilidades
        </h2>
        <button
            className="border-2 border-gray-300 w-30 h-12 rounded-2xl px-4 py-2 font-normal text-[20px]"
            onClick={() => selectFreelancer(id)}
        >
            Editar
        </button>
      </div>

      <ul className="mt-1.5 text-2xl leading-10 list-disc px-10">
        <li>Revestimentos</li>
        <li>Acabamentos</li>
      </ul>
    </section>
  );
}

export default SkillsSection;

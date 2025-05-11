import { Main } from 'next/document';

export default function Card({ selectFreelancer }) {
    const id = 1;
    return (
        <div className="relative pb-7 ">
            <div className="absolute z-10 bg-[#ffdc62] w-30 h-33 top-[45%] translate-y-[-50%] clipExagon ">
                {/* foto */}
            </div>
            <div className="relative flex flex-row justify-between bg-gray-50 px-4 ml-12 pl-28 h-44  items-center rounded-md border border-gray-300 ">
                {/* infos */}
                <div className="flex flex-col  ">
                    <p className="text-[27px] font-medium leading-6 ">Carlos Henrique</p>
                    <p className="text-[20px] font-normal leading-4 pt-2 ">Pedreiro, Gesseiro</p>
                    <p className="text-[18px] font-normal leading-4  pt-2">Registro, SP</p>
                    <p className="text-3xl pt-2 font-medium leading-4 ">★★★★☆</p>
                </div>
                <div className="flex flex-col gap-3 pr-10">
                    <button className="border-2 border-gray-300 w-35 h-14 rounded-2xl px-4 font-normal text-[20px]">
                        Ver perfil
                    </button>
                    <button
                        className="border-2 border-gray-300 w-35 h-14 rounded-2xl px-4 py-2 font-normal text-[20px]"
                        onClick={() => selectFreelancer(id)}
                    >
                        Contratar
                    </button>
                </div>
            </div>
        </div>
    );
}

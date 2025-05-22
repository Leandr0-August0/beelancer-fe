'use client';
import React, { useEffect } from "react";
import Image from 'next/image';

export default function SkillModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
    

    const [imagem, setImagem] = React.useState(
        'https://firebasestorage.googleapis.com/v0/b/sutilaromas-dda9d.firebasestorage.app/o/beelancer%2FRectangle%2043.png?alt=media&token=ed030461-c283-4e12-9bd6-d7a2063ccc80'
    );
    return (
        <div className={`bgModal ${isOpen ? '' : 'hidden'}`}>
            <div className="modal5050">
                        <div className=" py-15 px-18">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#ffdc62] w-25 h-25 rounded-full overflow-hidden relative">
                                    <Image
                                        src={imagem || ''}
                                        alt={`EdivaldoPicture`}
                                        fill    
                                    >
                                    </Image>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <div className="flex flex-col place-items-baseline">
                                        <div className="flex flex-row gap-3 place-items-baseline">
                                            <h1 className="text-[180%] font-semibold">Edivaldo</h1>
                                            <img
                                                src="https://i.postimg.cc/76SSZ0M6/Group-16.png"
                                                alt="Decorative underline"
                                                className="w-25"
                                            />
                                        </div>
                                        <p className="text-[100%] text-gray-900">Registro,SP</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-medium leading-none text-left">
                                Habilidades
                            </h2>
                            <div>
                                <ul className="mt-1.5 text-2xl leading-10 list-disc pl-10 pr-6">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex row">
                                            <li className="w-full basis-8/10">Revestimentos</li>
                                            <button className="border-2 basis-2/9  border-gray-300  h-10 rounded-2xl font-normal pt-[-20] text-[18px]">
                                                Excluir
                                            </button>
                                        </div>
                                        <div className="flex row">
                                            <li className="w-full basis-8/10">Revestimentos</li>
                                            <button className="border-2 basis-2/9  border-gray-300  h-10 rounded-2xl font-normal pt-[-20] text-[18px]">
                                                Excluir
                                            </button>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                            <div className="pt-6 flex flex-row space-between gap-5">  
                                <div className="basis-5/7">
                                    <label className="text-[110%] font-medium ">
                                        Adicionar habilidade:
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-1 border h-11 border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className=" basis-1/6 pt-5 ">
                                    <button className="border-2 border-gray-300 w-25 h-13 rounded-2xl font-normal pt-[-20] text-[18px]">
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                            <div className="w-full h-100 items-center place-items-end justify-center flex pt-4">
                                <button
                                    className="border-2 border-gray-300 w-70 h-20 rounded-2xl px-4 py-2 font-normal text-[20px]"
                                    onClick={onClose}
                                >
                                    Sair
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    );
}

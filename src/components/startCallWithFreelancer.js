import React, { useEffect } from "react";

export default function StartCallWithFreelancer({ open, onClose }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            onClose();
        }
        };

        if (open) {
        document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
        document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);
    
    return (
        <div className={`bgModal ${open ? '' : 'hidden'}`}>
            <div className="modal5050">
                        <div className=" py-15 px-18">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#ffdc62] w-25 h-28 clipExagon ">
                                    {/* foto */}
                                </div>
                                <div className="flex flex-col ">
                                    <p className="text-md font-semibold">Carlos Henrique</p>
                                    <p className="text-gray-900 text-[80%] mt-[-10px]" > Pedreiro, Gesseiro</p>
                                </div>
                                <div className="flex flex-col gap-0">
                                    <p className="text-[80%] text-gray-900">Registro,SP</p>
                                    <img
                                        src="https://cdn.discordapp.com/attachments/1062543980098748437/1372287827919765634/Group_16.png?ex=68263a22&is=6824e8a2&hm=c765a117619142aa23b2b27757d9501e5c58cb03a262f2feb9e368fa4012a53e&"
                                        alt="Decorative underline"
                                        className="w-30"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                            <label className="block text-[70%] font-medium text-gray-800 mb-1">
                                Titulo:
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border  border-gray-300 rounded-md"
                            />
                            </div>

                            <div>
                            <label className="block text-[70%] font-medium text-gray-800 mb-1">
                                Descrição:
                            </label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md h-24"
                            ></textarea>
                            </div>

                            <div>
                            <label className="block text-[70%] font-medium text-gray-800 mb-1">
                                Tipo de serviço:
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            </div>

                            <div>
                            <label className="block text-[70%] font-medium text-gray-800 mb-1">
                                Valor esperado:
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            </div>
                            <div className="w-full items-center justify-center flex pt-4">
                                <button
                                    className="border-2 border-gray-300 w-70 h-20 rounded-2xl px-4 py-2 font-normal text-[20px]"
                                    onClick={onClose}
                                >
                                    Chamar
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    );
}

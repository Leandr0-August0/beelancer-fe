"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

export default function StartCallWithFreelancer({ open, freelancer, onClose }) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tipoServico, setTipoServico] = useState("");
    const [valorEsperado, setValorEsperado] = useState("");

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

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitulo("");
        setDescricao("");
        setTipoServico("");
        setValorEsperado("");

        onClose();

        alert(`Solicitação enviada com sucesso para ${freelancer?.user?.nome}`);
    };

    return (
        <div className={`bgModal ${open ? '' : 'hidden'}`}>
            <div className="modal5050">
                <div className=" py-15 px-18">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex flex-row items-center gap-4">
                            <div className="bg-[#ffdc62] w-25 h-28 clipExagon ">
                                {/* foto */}
                                {freelancer?.user?.image_URL !== '' ? (
                                    <div className="relative w-full h-full object-cover">
                                        <Image
                                            src={freelancer?.user?.image_URL || ''}
                                            alt={`${freelancer?.user?.nome}Pic`}
                                            fill
                                        />
                                    </div>
                                ) : (
                                    <Image
                                        src={'/undefinedProfilePic.png' || ''}
                                        alt="profilePic"
                                        className="w-full h-full object-cover"
                                        fill
                                    />
                                )}
                            </div>
                            <div className="flex flex-col ">
                                <p className="text-md font-semibold">{freelancer?.user?.nome}</p>
                                <p className="text-gray-900 text-[80%] mt-[-10px]">
                                    {freelancer?.especialidades.length > 0
                                        ? freelancer?.especialidades
                                              .map(
                                                  (especialidade) =>
                                                      especialidade.charAt(0).toUpperCase() +
                                                      especialidade.slice(1).toLowerCase()
                                              )
                                              .join(', ')
                                        : 'Nenhuma especialidade'}
                                </p>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="text-[80%] text-gray-900">
                                    {freelancer?.endereco?.cidade}, {freelancer?.endereco?.estado}
                                </p>
                                <p className="text-[80%] text-gray-900">
                                    {freelancer?.classificacao <= 0.5
                                        ? '☆☆☆☆☆'
                                        : freelancer?.classificacao <= 1.5
                                        ? '★☆☆☆☆'
                                        : freelancer?.classificacao <= 2.5
                                        ? '★★☆☆☆'
                                        : freelancer?.classificacao <= 3.5
                                        ? '★★★☆☆'
                                        : freelancer?.classificacao <= 4.5
                                        ? '★★★★☆'
                                        : '★★★★★'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-[70%] font-medium text-gray-800 mb-1">
                                Titulo:
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border  border-gray-300 rounded-md"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[70%] font-medium text-gray-800 mb-1">
                                Descrição:
                            </label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-[70%] font-medium text-gray-800 mb-1">
                                Tipo de serviço:
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={tipoServico}
                                onChange={(e) => setTipoServico(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[70%] font-medium text-gray-800 mb-1">
                                Valor esperado:
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={valorEsperado}
                                onChange={(e) => setValorEsperado(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full items-center justify-around flex pt-4">
                            <button
                                className="border-2 border-gray-300 w-70 h-20 rounded-2xl px-4 py-2 font-normal text-[20px]"
                                onClick={onClose}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="border-2 border-gray-300 w-70 h-20 rounded-2xl px-4 py-2 font-normal text-[20px]"
                            >
                                Chamar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

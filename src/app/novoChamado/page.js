'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect, useRef } from 'react';

export default function Config() {
    const [specialtyIsOpen, setSpecialtyIsOpen] = useState(false);
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const selectRef = useRef(null);
    const specialtyOptions = [
        'Eletricista',
        'Encanador',
        'Pedreiro',
        'Gesseiro',
        'Pintor',
        'Mecânico',
        'Jardineiro',
    ];

    const [starIsOpen, setStarIsOpen] = useState(false);
    const [selectedStar, setSelectedStar] = useState('');
    const starRef = useRef(null);
    const starOptions = ['★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];

    useEffect(() => {
        function handleClickOutside(event) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setSpecialtyIsOpen(false);
            }
            if (starRef.current && !starRef.current.contains(event.target)) {
                setStarIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <div className="flex flex-row gap-20 w-full max-h-full grow p-8 pb-0">
                    <div className="grid grid-rows-[fit-content_1fr] max-h-full w-2/3">
                        <div ref={selectRef} className="relative w-full">
                            <button
                                onClick={() => setSpecialtyIsOpen(!specialtyIsOpen)}
                                className="w-full bg-white font-medium pl-4 pr-10 py-2 text-left cursor-pointer"
                            >
                                Qual o tipo de profissional que você procura?
                                {!specialtyIsOpen && (
                                    <span className="absolute right-3 top-2.5 text-gray-500">
                                        ▼
                                    </span>
                                )}
                                {specialtyIsOpen && (
                                    <span className="absolute right-3 top-2.5 text-gray-500">
                                        ▲
                                    </span>
                                )}
                            </button>

                            {specialtyIsOpen && (
                                <ul className="absolute z-100 mt-1 w-full bg-white border border-gray-300 divide-y divide-gray-300 rounded-md shadow-lg">
                                    {selectedSpecialty && (
                                        <li
                                            onClick={() => {
                                                setSelectedSpecialty('');
                                            }}
                                            className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                                        >
                                            Limpar escolha
                                        </li>
                                    )}
                                    {specialtyOptions.map((option, idx) => (
                                        <li
                                            key={idx}
                                            onClick={() => {
                                                setSelectedSpecialty(option);
                                                setSpecialtyIsOpen(false);
                                            }}
                                            className={`px-4 py-2 hover:bg-indigo-50 cursor-pointer ${
                                                option === selectedSpecialty ? 'bg-indigo-100' : ''
                                            }`}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="resultsCall flex flex-col grow max-h-full w-full pt-6 py-4 pr-2 overflow-y-auto gap-4">
                            {/* cards */}
                            <div className="flex flex-col gap-4 w-full ">
                                <div className="relative ">
                                    <div className="absolute z-10 bg-[#ffdc62] w-30 h-30 ml-2 top-[50%] translate-y-[-50%] clipExagon ">
                                        {/* foto */}
                                    </div>
                                    <div className="relative flex flex-row justify-between bg-gray-300 boxShadow px-4 ml-17 pl-20 h-36 items-center rounded-md">
                                        {/* infos */}
                                        <div className="flex flex-col  ">
                                            <p className="text-[20px] font-medium leading-6 ">
                                                Nome
                                            </p>
                                            <p className="text-[16px] font-normal leading-4 ">
                                                Especialidades
                                            </p>
                                            <p className="text-[12px] font-normal leading-4 ">
                                                Localidade
                                            </p>
                                            <p className="text-xl font-medium leading-4 ">★★★★☆</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <button className="border w-full border-black rounded-md px-4 py-2 font-medium">
                                                Ver perfil
                                            </button>
                                            <button className="border w-full border-black rounded-md px-4 py-2 font-medium">
                                                Contratar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full ">
                                <div className="relative ">
                                    <div className="absolute z-10 bg-[#ffdc62] w-30 h-30 ml-2 top-[50%] translate-y-[-50%] clipExagon ">
                                        {/* foto */}
                                    </div>
                                    <div className="relative flex flex-row justify-between bg-gray-300 boxShadow px-4 ml-17 pl-20 h-36 items-center rounded-md">
                                        {/* infos */}
                                        <div className="flex flex-col  ">
                                            <p className="text-[20px] font-medium leading-6 ">
                                                Nome
                                            </p>
                                            <p className="text-[16px] font-normal leading-4 ">
                                                Especialidades
                                            </p>
                                            <p className="text-[12px] font-normal leading-4 ">
                                                Localidade
                                            </p>
                                            <p className="text-xl font-medium leading-4 ">★★★★☆</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <button className="border w-full border-black rounded-md px-4 py-2 font-medium">
                                                Ver perfil
                                            </button>
                                            <button className="border w-full border-black rounded-md px-4 py-2 font-medium">
                                                Contratar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full ">
                                <div className="relative ">
                                    <div className="absolute z-10 bg-[#ffdc62] w-30 h-30 ml-2 top-[50%] translate-y-[-50%] clipExagon ">
                                        {/* foto */}
                                    </div>
                                    <div className="relative flex flex-row justify-between bg-gray-300 boxShadow px-4 ml-17 pl-20 h-36 items-center rounded-md">
                                        {/* infos */}
                                        <div className="flex flex-col  ">
                                            <p className="text-[20px] font-medium leading-6 ">
                                                Nome
                                            </p>
                                            <p className="text-[16px] font-normal leading-4 ">
                                                Especialidades
                                            </p>
                                            <p className="text-[12px] font-normal leading-4 ">
                                                Localidade
                                            </p>
                                            <p className="text-xl font-medium leading-4 ">★★★★☆</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <button className="border w-full border-black rounded-md px-4 py-2 font-medium">
                                                Ver perfil
                                            </button>
                                            <button className="border w-full border-black rounded-md px-4 py-2 font-medium">
                                                Contratar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full ">
                                <div className="relative ">
                                    <div className="absolute z-10 bg-[#ffdc62] w-30 h-30 ml-2 top-[50%] translate-y-[-50%] clipExagon ">
                                        {/* foto */}
                                    </div>
                                    <div className="relative flex flex-row justify-between bg-gray-300 boxShadow px-4 ml-17 pl-20 h-36 items-center rounded-md">
                                        {/* infos */}
                                        <div className="flex flex-col  ">
                                            <p className="text-[20px] font-medium leading-6 ">
                                                Nome
                                            </p>
                                            <p className="text-[16px] font-normal leading-4 ">
                                                Especialidades
                                            </p>
                                            <p className="text-[12px] font-normal leading-4 ">
                                                Localidade
                                            </p>
                                            <p className="text-xl font-medium leading-4 ">★★★★☆</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <button className="border w-full border-black rounded-md px-4 py-2 font-medium">
                                                Ver perfil
                                            </button>
                                            <button className="border w-full border-black rounded-md px-4 py-2 font-medium">
                                                Contratar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/3 ">
                        <div ref={starRef} className="relative w-full">
                            <button
                                onClick={() => setStarIsOpen(!starIsOpen)}
                                className="w-full bg-white font-medium pl-4 pr-10 py-2 text-left cursor-pointer"
                            >
                                Avaliação
                                {!starIsOpen && (
                                    <span className="absolute right-3 top-2.5 text-gray-500">
                                        ▼
                                    </span>
                                )}
                                {starIsOpen && (
                                    <span className="absolute right-3 top-2.5 text-gray-500">
                                        ▲
                                    </span>
                                )}
                            </button>

                            {starIsOpen && (
                                <ul className="absolute z-100 mt-1 w-full bg-white border border-gray-300 divide-y divide-gray-300 rounded-md shadow-lg">
                                    {selectedStar && (
                                        <li
                                            onClick={() => {
                                                setSelectedStar();
                                            }}
                                            className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                                        >
                                            Limpar escolha
                                        </li>
                                    )}
                                    {starOptions.map((option, idx) => (
                                        <li
                                            key={idx}
                                            onClick={() => {
                                                setSelectedStar(option);
                                                setStarIsOpen(false);
                                            }}
                                            className={`px-4 py-2 hover:bg-indigo-50 cursor-pointer text-lg font-medium ${
                                                option === selectedStar ? 'bg-indigo-100' : ''
                                            }`}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="w-full">
                            <div className="flex flex-row mt-4 pl-4 py-2 w-full">
                                <label htmlFor="distance" className="font-medium ">
                                    Proximidade
                                </label>
                                <input
                                    type="number"
                                    name="distance"
                                    id="distance"
                                    defaultValue={10}
                                    min={1}
                                    className="w-full border border-gray-300 rounded-md px-2 ml-4 mr-1"
                                />
                                <span>km</span>
                            </div>
                            <div className="flex flex-row mt-4 gap-4 py-2 w-full">
                                <div
                                    className="mapDistance grid border border-gray-300 rounded-md w-full h-50 bg-green-200"
                                    id="map"
                                >
                                    <div className="absolute w-25 h-25 rounded-full place-self-center border border-[#8ed5ff] bg-[#8ed5ff66] "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

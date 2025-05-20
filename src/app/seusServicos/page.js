"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosConfig } from '@/service/auth';

export default function Config() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [chamados, setChamados] = useState([]);

    useEffect(() => {
        // console.log('token', authToken);
        axios
            .get(`${apiUrl}/chamados`, axiosConfig)
            .then((response) => {
                setChamados(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    })

    return (
        <>
            <Navbar />
            <main>
                <div className="grid grid-cols-6 w-full ">
                    <div className="col-span-4 col-start-2">
                        <div className="relative pl-5 pb-7 h-full">
                            <div className="absolute z-10 bg-[#ffdc62] w-30 h-33 left-[4%] top-[45%] translate-y-[-50%] clipExagon ">
                                {/* foto */}
                                {/* {imagem !== '' ? (
                                                    <Image src={imagem} alt={`${nome}Picture`} fill />
                                                ) : (
                                                    <Image
                                                        src="/undefinedProfilePic.png"
                                                        alt="profilePic"
                                                        fill
                                                        className="w-full h-full object-cover"
                                                    />
                                                )} */}
                            </div>
                            <div className="relative flex flex-row justify-between bg-gray-50 px-4 ml-17 pl-28 h-50  items-center rounded-md border border-gray-300 ">
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center gap-3">
                                        <p className="text-[27px] font-medium leading-6 ">
                                            Giuliara
                                        </p>
                                        <p>|</p>
                                        <p className="text-[20px] font-medium leading-6 ">
                                            Troca por porcelanato
                                        </p>
                                    </div>
                                    <p className="text-[20px] font-normal leading-4 pt-2 ">
                                        Descrição do serviço Descrição do serviço Descrição do
                                        serviço Descrição
                                    </p>
                                    <p className="text-[18px] font-normal leading-4  pt-2">
                                        Registro, SP
                                    </p>
                                    <p className="text-[18px] font-normal leading-4  pt-2">
                                        Valor estimado: R$ 1.500,00
                                    </p>
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

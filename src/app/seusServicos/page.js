'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosConfig } from '@/service/auth';

export default function Config() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    // const [chamados, setChamados] = useState([]);
    const chamados = [
        {
            id: 1,
            imagem: 'https://firebasestorage.googleapis.com/v0/b/sutilaromas-dda9d.firebasestorage.app/o/beelancer%2FRectangle%2054.png?alt=media&token=97cf50cc-94cf-462e-bb8e-f9692f9f228c',
            nome: 'Giuliara',
            titulo: 'Troca por porcelanato',
            descricao: 'Remoção e assentamento de 50m² de porcelanato, com rejunte e rodapé',
            cidade: 'Registro, SP',
            valor: 'R$ 1.500,00',
        },
        {
            id: 2,
            imagem: 'https://firebasestorage.googleapis.com/v0/b/sutilaromas-dda9d.firebasestorage.app/o/beelancer%2FRectangle%2052.png?alt=media&token=f6370194-e1ae-47e0-b5e0-125750f57a44',
            nome: 'Valmir',
            titulo: 'Ajuste no contrapiso',
            descricao: 'Ajuste no contrapiso para assentamento de piso',
            cidade: 'Registro, SP',
            valor: '600,00',
        },
    ];

    useEffect(() => {
        // console.log('token', authToken);
        // axios
        //     .get(`${apiUrl}/chamados`, axiosConfig)
        //     .then((response) => {
        //         setChamados(response.data);
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching data:', error);
        //     });
    });

    return (
        <>
            <Navbar />
            <main>
                <div className="grid grid-cols-6 w-full ">
                    {chamados.map((chamado) => (
                        <div className="col-span-4 col-start-2" key={chamado.id}>
                            <div className="relative pl-5 pb-7 h-full">
                                <div className="absolute z-10 bg-[#ffdc62] w-30 h-33 left-[4%] top-[45%] translate-y-[-50%] clipExagon ">
                                    {/* foto */}
                                    {chamado?.imagem !== '' ? (
                                                    <Image src={chamado?.imagem || ''} alt={`${chamado?.nome}Picture`} fill />
                                                ) : (
                                                    <Image
                                                        src="/undefinedProfilePic.png"
                                                        alt="profilePic"
                                                        fill
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                </div>
                                <div className="relative flex flex-row justify-between bg-gray-50 px-4 ml-17 pl-28 h-50  items-center rounded-md border border-gray-300 ">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center gap-3">
                                            <p className="text-[27px] font-medium leading-6 ">
                                                {chamado?.nome}
                                            </p>
                                            <p>|</p>
                                            <p className="text-[20px] font-medium leading-6 ">
                                                {chamado?.titulo}
                                            </p>
                                        </div>
                                        <p className="text-[20px] font-normal leading-4 pt-2 ">
                                            {chamado?.descricao}
                                        </p>
                                        <p className="text-[18px] font-normal leading-4  pt-2">
                                            {chamado?.cidade}
                                        </p>
                                        <p className="text-[18px] font-normal leading-4  pt-2">
                                            Valor estimado: R$ {chamado?.valor}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

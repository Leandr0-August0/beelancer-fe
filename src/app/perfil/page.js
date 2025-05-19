'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProfileHeader from "@/components/profileheader";
import SkillsSection from "@/components/skillsection";
import ReviewSection from "@/components/reviewsection";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import TruncateText from '@/components/TruncateText';



const publis = [
    {
        id: 1,
        author: 'Edivaldo',
        images: [
            { photo: '/assentamento1.jpg', title: 'Início do assentamento de porcelanato' },
            { photo: '/assentamento2.jpg', title: 'Metade do piso concluído' },
            { photo: '/assentamento3.jpg', title: 'Resultado final com rodapé embutido' },
        ],
        text: 'Hoje concluí o assentamento de piso porcelanato na cozinha da cliente. Nivelamento perfeito e acabamento com rodapé embutido. Cliente gostou do meu trabalho e me recomendaram para outros projetos!',
    },
    {
        id: 2,
        author: 'Edivaldo',
        images: [
            { photo: '/pintura1.jpg', title: 'Preparação da fachada para pintura' },
            { photo: '/pintura2.jpg', title: 'Resultado final após pintura externa' },
        ],
        text: 'Finalizei a pintura externa de uma casa com tinta acrílica premium. Utilizei tons claros para melhor refletância solar e deixei tudo protegido contra umidade.',
    }
];


export default function Config() {
    const [startIndexes, setStartIndexes] = useState({});

    const handlePrevClick = (id, imageCount) => {
        setStartIndexes((prev) => {
            const currentIndex = prev[id] ?? 0;
            return {
                ...prev,
                [id]: (currentIndex - 1 + imageCount) % imageCount,
            };
        });
    };

    const handleNextClick = (id, imageCount) => {
        setStartIndexes((prev) => {
            const currentIndex = prev[id] ?? 0;
            return {
                ...prev,
                [id]: (currentIndex + 1) % imageCount,
            };
        });
    };

    return (
        
        <>
            <Navbar />
            <main>
                <div className="flex flex-row w-full pt-12">
                    <div className="flex basis-7/10 flex-col pl-50">
                        <article className="flex flex-col items-start rounded-none">
                            <div className="ml-6 max-w-full w-[461px]">
                                <ProfileHeader />
                                <SkillsSection />
                            </div>
                            <hr className="self-stretch mt-6 w-[95%] border border-solid border-neutral-400 min-h-px max-md:max-w-full" />
                            <ReviewSection />
                        </article>
                    </div>
                    <div className="flex basis-4/8 flex-col px-15">
                        <div className="flex flex-col w-full h-full gap-8 py-8 overflow-auto">
                            {/* card de publicação */}
                        {publis.map((publi) => {
                            const imageCount = publi.images.length;
                            const startIndex = startIndexes[publi.id] || 0;
                            const hasEnoughImages = imageCount > 2;
                            const visibleImages = [
                                publi.images[startIndex],
                                publi.images[(startIndex + 1) % imageCount],
                            ];
    
                            return (
                                <div
                                    className="flex flex-col bg-[rgba(239,239,239,1)] w-[100%] rounded-lg p-4 mx-auto"
                                    key={publi.id}
                                >
                                    <div className="flex flex-row gap-3 items-center mb-2 text-3xl font-medium pl-15 pb-3">
                                        <Image
                                            src={'/undefinedPeople.svg'}
                                            width={50}
                                            height={50}
                                            alt="avatar"
                                        />
                                        <p>{publi.author}</p>
                                    </div>
                                    <div
                                        className={`relative flex flex-col transition-all duration-300 ease-in-out px-16 py-4`}
                                    >
                                        <TruncateText
                                            text={publi.text}
                                            maxLines={3}
                                            classText={`text-md`}
                                            classToggle={`text-sm`}
                                        />
                                    </div>
                                    <div className="flex mb-2">
                                        <button
                                            onClick={() => handlePrevClick(publi.id, imageCount)}
                                            disabled={!hasEnoughImages}
                                            className={`h-full w-[10%] font-bold text-lg content-center cursor-pointer ${
                                                !hasEnoughImages ? 'opacity-30 cursor-not-allowed' : ''
                                            }`}
                                        >
                                            &lt;
                                        </button>
    
                                        <div className="carrouselImages flex flex-row gap-4 w-[80%] ">
                                            {visibleImages.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className="relative carrousel-item w-[50%] aspect-[4/5] bg-white flex items-center justify-center "
                                                >
                                                    <Image
                                                        src={image.photo}
                                                        fill
                                                        alt={image.title}
                                                        className="object-cover place-self-center text-gray-500"
                                                    />
                                                    <p className="text-xs self-start z-10">
                                                        {image.title}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
    
                                        <button
                                            onClick={() => handleNextClick(publi.id, imageCount)}
                                            disabled={!hasEnoughImages}
                                            className={`h-full w-[10%] font-bold text-lg self-center cursor-pointer ${
                                                !hasEnoughImages ? 'opacity-30 cursor-not-allowed' : ''
                                            }`}
                                        >
                                            &gt;
                                        </button>
                                    </div>
                                    <div className="relative flex flex-row px-17 justify-between py-4">
                                        <div className="flex items-stretch gap-3.5 text-2xl font-medium leading-none">
                                            <img
                                            src="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/936a6a8d29b4ade7fd57bf4e6e384aee8a9b4d1d?placeholderIfAbsent=true"
                                            className="aspect-[1.07] object-contain w-[29px] shrink-0"
                                            />
                                            <div className="my-auto">
                                            70 likes
                                            </div>
                                        </div>
                                        <div className="text-xl font-normal leading-none">
                                            05/06
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProfileHeader from '@/components/profileheader';
import SkillsSection from '@/components/skillsection';
import ReviewSection from '@/components/reviewsection';
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
    },
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
                                            <div className="relative w-13 h-13 rounded-full overflow-hidden">
                                                <Image
                                                    src={
                                                        'https://firebasestorage.googleapis.com/v0/b/sutilaromas-dda9d.firebasestorage.app/o/beelancer%2FRectangle%2043.png?alt=media&token=ed030461-c283-4e12-9bd6-d7a2063ccc80'
                                                    }
                                                    alt="avatar"
                                                    fill
                                                />
                                            </div>
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
                                                onClick={() =>
                                                    handlePrevClick(publi.id, imageCount)
                                                }
                                                disabled={!hasEnoughImages}
                                                className={`h-full w-[10%] font-bold text-lg content-center cursor-pointer ${
                                                    !hasEnoughImages
                                                        ? 'opacity-30 cursor-not-allowed'
                                                        : ''
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
                                                onClick={() =>
                                                    handleNextClick(publi.id, imageCount)
                                                }
                                                disabled={!hasEnoughImages}
                                                className={`h-full w-[10%] font-bold text-lg self-center cursor-pointer ${
                                                    !hasEnoughImages
                                                        ? 'opacity-30 cursor-not-allowed'
                                                        : ''
                                                }`}
                                            >
                                                &gt;
                                            </button>
                                        </div>
                                        <div className="relative flex flex-row px-17 justify-between py-4">
                                            <div className="flex items-stretch gap-3.5 text-2xl font-medium leading-none">
                                                <svg
                                                    alt="like"
                                                    className="w-[2rem]"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="#424242"
                                                        d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                                                    />
                                                </svg>
                                                <div className="my-auto">10 likes</div>
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

'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect, useRef } from 'react';
import TruncateText from '@/components/TruncateText';

const publis = [
    {
        id: 1,
        author: 'Joaquim',
        images: [
            { photo: '/assentamento1.jpg', title: 'Início do assentamento de porcelanato' },
            { photo: '/assentamento2.jpg', title: 'Metade do piso concluído' },
            { photo: '/assentamento3.jpg', title: 'Resultado final com rodapé embutido' },
        ],
        text: 'Hoje concluí o assentamento de piso porcelanato na cozinha da cliente. Nivelamento perfeito e acabamento com rodapé embutido. Cliente gostou do meu trabalho e me recomendaram para outros projetos! Hoje concluí o assentamento de piso porcelanato na cozinha da cliente. Nivelamento perfeito e acabamento com rodapé embutido. Cliente gostou do meu trabalho e me recomendaram para outros projetos!',
    },
    {
        id: 2,
        author: 'Antonio',
        images: [
            { photo: '/pintura1.jpg', title: 'Preparação da fachada para pintura' },
            { photo: '/pintura2.jpg', title: 'Resultado final após pintura externa' },
        ],
        text: 'Finalizei a pintura externa de uma casa com tinta acrílica premium. Utilizei tons claros para melhor refletância solar e deixei tudo protegido contra umidade.',
    },
    {
        id: 3,
        author: 'Marcos',
        images: [
            { photo: '/eletrica1.jpg', title: 'Instalação das primeiras tomadas' },
            { photo: '/eletrica2.jpg', title: 'Painel de distribuição atualizado' },
            { photo: '/eletrica3.jpg', title: 'Pontos de LED instalados no teto de gesso' },
        ],
        text: 'Hoje fiz a instalação completa de tomadas e interruptores em um apartamento recém-reformado. Também instalei pontos de luz em LED embutidos no gesso.',
    },
    {
        id: 4,
        author: 'Paulo',
        images: [
            { photo: '/hidraulica1.jpg', title: 'Remoção das tubulações antigas' },
            { photo: '/hidraulica2.jpg', title: 'Tubulação nova em PVC já instalada' },
        ],
        text: 'Substituí toda a tubulação antiga de cobre por PVC moderno em uma residência. Vazamantos eliminados e pressão da água normalizada.',
    },
    {
        id: 5,
        author: 'Renata',
        images: [
            { photo: '/jardim1.jpg', title: 'Início da jardinagem e limpeza do terreno' },
            { photo: '/jardim2.jpg', title: 'Paisagismo finalizado com grama esmeralda' },
        ],
        text: 'Reformei todo o jardim da casa com novo paisagismo. Grama esmeralda, canteiros com flores e instalação de sistema de irrigação automático.',
    },
    {
        id: 6,
        author: 'Lucas',
        images: [
            { photo: '/moveis1.jpg', title: 'Montagem inicial da cozinha planejada' },
            { photo: '/moveis2.jpg', title: 'Lavanderia com armários instalados' },
            { photo: '/moveis3.jpg', title: 'Detalhe das gavetas slow-close' },
            { photo: '/moveis4.jpg', title: 'Visão geral do ambiente finalizado' },
        ],
        text: 'Hoje entreguei a instalação de móveis planejados na cozinha e lavanderia. Tudo sob medida, com dobradiças slow-close e ótimo aproveitamento do espaço.',
    },
    {
        id: 7,
        author: 'Fernanda',
        images: [
            { photo: '/limpeza1.jpg', title: 'Apartamento antes da limpeza' },
            { photo: '/limpeza2.jpg', title: 'Ambiente limpo e organizado pós-obra' },
        ],
        text: 'Realizei uma limpeza pós-obra completa em um apartamento de 3 quartos. Remoção de resíduos de tinta e pó de massa corrida. Cliente amou o resultado!',
    },
    {
        id: 8,
        author: 'João',
        images: [
            { photo: '/gesso1.jpg', title: 'Estrutura inicial do forro de gesso' },
            { photo: '/gesso2.jpg', title: 'Sancas iluminadas em fase de teste' },
            { photo: '/gesso3.jpg', title: 'Sala pronta com iluminação indireta' },
        ],
        text: 'Instalei forro de gesso rebaixado com sancas iluminadas em LED. Deu outro ar para a sala de estar da cliente. Projeto moderno e funcional.',
    },
    {
        id: 9,
        author: 'Carlos',
        images: [
            { photo: '/telhado1.jpg', title: 'Telhado antigo antes da troca' },
            { photo: '/telhado2.jpg', title: 'Nova cobertura com telhas térmicas' },
        ],
        text: 'Troquei telhas antigas por telhas térmicas em uma cobertura de área gourmet. Também fiz o reforço da estrutura de madeira. Agora é só curtir!',
    },
    {
        id: 10,
        author: 'Beatriz',
        images: [
            { photo: '/revestimento1.jpg', title: 'Início do assentamento 3D na parede' },
            { photo: '/revestimento2.jpg', title: 'Detalhe do rejunte entre placas' },
            { photo: '/revestimento3.jpg', title: 'Parede finalizada com iluminação' },
        ],
        text: 'Assentei revestimento 3D na parede da sala da cliente. Detalhes bem alinhados e rejunte fino. O ambiente ficou moderno e elegante.',
    },
];

// const publis = [];

export default function Home() {
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
                                className="flex flex-col bg-[#d9d9d9] w-[50%] rounded-lg p-4 mx-auto"
                                key={publi.id}
                            >
                                <div className="flex flex-row gap-3 items-center mb-2">
                                    <Image
                                        src={'/undefinedPeople.svg'}
                                        width={40}
                                        height={40}
                                        alt="avatar"
                                    />
                                    <p>{publi.author}</p>
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
                                                className="relative carrousel-item w-[50%] aspect-[4/5] bg-white shadow-2xl flex items-center justify-center "
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

                                <div
                                    className={`relative flex flex-col transition-all duration-300 ease-in-out px-15`}
                                >
                                    <TruncateText
                                        text={publi.text}
                                        maxLines={3}
                                        classText={`text-md`}
                                        classToggle={`text-sm`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
}

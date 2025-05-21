'use client';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState, useEffect, useRef } from 'react';
import TruncateText from '@/components/TruncateText';
import axios from 'axios';

// const publis = [
    
//     {
//         id: 1,
//         author: 'Joaquim',
//         images: [
//             { photo: '/assentamento1.jpg', title: 'Início do assentamento de porcelanato' },
//             { photo: '/assentamento2.jpg', title: 'Metade do piso concluído' },
//             { photo: '/assentamento3.jpg', title: 'Resultado final com rodapé embutido' },
//         ],
//         text: 'Hoje concluí o assentamento de piso porcelanato na cozinha da cliente. Nivelamento perfeito e acabamento com rodapé embutido. Cliente gostou do meu trabalho e me recomendaram para outros projetos!',
//     },
//     {
//         id: 2,
//         author: 'Antonio',
//         images: [
//             { photo: '/pintura1.jpg', title: 'Preparação da fachada para pintura' },
//             { photo: '/pintura2.jpg', title: 'Resultado final após pintura externa' },
//         ],
//         text: 'Finalizei a pintura externa de uma casa com tinta acrílica premium. Utilizei tons claros para melhor refletância solar e deixei tudo protegido contra umidade.',
//     },
//     {
//         id: 3,
//         author: 'Marcos',
//         images: [
//             { photo: '/eletrica1.jpg', title: 'Instalação das primeiras tomadas' },
//             { photo: '/eletrica2.jpg', title: 'Painel de distribuição atualizado' },
//             { photo: '/eletrica3.jpg', title: 'Pontos de LED instalados no teto de gesso' },
//         ],
//         text: 'Hoje fiz a instalação completa de tomadas e interruptores em um apartamento recém-reformado. Também instalei pontos de luz em LED embutidos no gesso.',
//     },
//     {
//         id: 4,
//         author: 'Paulo',
//         images: [
//             { photo: '/hidraulica1.jpg', title: 'Remoção das tubulações antigas' },
//             { photo: '/hidraulica2.jpg', title: 'Tubulação nova em PVC já instalada' },
//         ],
//         text: 'Substituí toda a tubulação antiga de cobre por PVC moderno em uma residência. Vazamantos eliminados e pressão da água normalizada.',
//     },
//     {
//         id: 5,
//         author: 'Renata',
//         images: [
//             { photo: '/jardim1.jpg', title: 'Início da jardinagem e limpeza do terreno' },
//             { photo: '/jardim2.jpg', title: 'Paisagismo finalizado com grama esmeralda' },
//         ],
//         text: 'Reformei todo o jardim da casa com novo paisagismo. Grama esmeralda, canteiros com flores e instalação de sistema de irrigação automático.',
//     },
//     {
//         id: 6,
//         author: 'Lucas',
//         images: [
//             { photo: '/moveis1.jpg', title: 'Montagem inicial da cozinha planejada' },
//             { photo: '/moveis2.jpg', title: 'Lavanderia com armários instalados' },
//             { photo: '/moveis3.jpg', title: 'Detalhe das gavetas slow-close' },
//             { photo: '/moveis4.jpg', title: 'Visão geral do ambiente finalizado' },
//         ],
//         text: 'Hoje entreguei a instalação de móveis planejados na cozinha e lavanderia. Tudo sob medida, com dobradiças slow-close e ótimo aproveitamento do espaço.',
//     },
//     {
//         id: 7,
//         author: 'Fernanda',
//         images: [
//             { photo: '/limpeza1.jpg', title: 'Apartamento antes da limpeza' },
//             { photo: '/limpeza2.jpg', title: 'Ambiente limpo e organizado pós-obra' },
//         ],
//         text: 'Realizei uma limpeza pós-obra completa em um apartamento de 3 quartos. Remoção de resíduos de tinta e pó de massa corrida. Cliente amou o resultado!',
//     },
//     {
//         id: 8,
//         author: 'João',
//         images: [
//             { photo: '/gesso1.jpg', title: 'Estrutura inicial do forro de gesso' },
//             { photo: '/gesso2.jpg', title: 'Sancas iluminadas em fase de teste' },
//             { photo: '/gesso3.jpg', title: 'Sala pronta com iluminação indireta' },
//         ],
//         text: 'Instalei forro de gesso rebaixado com sancas iluminadas em LED. Deu outro ar para a sala de estar da cliente. Projeto moderno e funcional.',
//     },
//     {
//         id: 9,
//         author: 'Carlos',
//         images: [
//             { photo: '/telhado1.jpg', title: 'Telhado antigo antes da troca' },
//             { photo: '/telhado2.jpg', title: 'Nova cobertura com telhas térmicas' },
//         ],
//         text: 'Troquei telhas antigas por telhas térmicas em uma cobertura de área gourmet. Também fiz o reforço da estrutura de madeira. Agora é só curtir!',
//     },
//     {
//         id: 10,
//         author: 'Beatriz',
//         images: [
//             { photo: '/revestimento1.jpg', title: 'Início do assentamento 3D na parede' },
//             { photo: '/revestimento2.jpg', title: 'Detalhe do rejunte entre placas' },
//             { photo: '/revestimento3.jpg', title: 'Parede finalizada com iluminação' },
//         ],
//         text: 'Assentei revestimento 3D na parede da sala da cliente. Detalhes bem alinhados e rejunte fino. O ambiente ficou moderno e elegante.',
//     },
// ];

// const publis = [];

export default function Home() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${apiUrl}/posts`);
                setPosts(result.data.posts);
                console.log(result.data.posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

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
                <div className="flex flex-col w-full h-full gap-8 py-6 overflow-auto">
                        {/* card de publicação */}
                    {posts.length > 0 ? Object.values(posts).map((post, index) => {
                        const imageCount = post?.imagens?.length;
                        const startIndex = startIndexes[index] || 0;
                        const hasEnoughImages = imageCount > 2;
                        const visibleImages = [
                            post?.imagens[startIndex],
                            post?.imagens[(startIndex + 1) % imageCount],
                        ];
                        const date = new Date(post?.data_criacao);
                        const currentYear = new Date().getFullYear();
                        const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(
                            date.getMonth() + 1
                        ).padStart(2, '0')}${
                            currentYear == String(date.getFullYear())
                                ? ''
                                : '/' + String(date.getFullYear())
                        }`;

                        return (
                            <div
                                className="flex flex-col bg-[rgba(239,239,239,1)] w-[30%] rounded-lg pt-8 pb-2 mx-auto"
                                key={index}
                            >
                                <div className="flex flex-row gap-3 items-center  text-3xl font-medium px-8">
                                    <Image
                                        src={post.freelancer.user.image_URL}
                                        width={50}
                                        height={50}
                                        className="rounded-full w-[5rem] h-[5rem ]"
                                        alt="avatar"
                                    />
                                    <p className="text-3x1 roboto pl-2">
                                        {post?.freelancer?.user?.nome}
                                    </p>
                                </div>
                                <div
                                    className={`relative flex flex-col transition-all duration-300 ease-in-out px-8 pb-3 pt-2`}
                                >
                                    <p className="font-medium text-xl">
                                         {post?.titulo}
                                    </p>
                                    <TruncateText
                                        text={post?.descricao}
                                        maxLines={3}
                                        classText={`text-md`}
                                        classToggle={`text-sm`}
                                    />
                                </div>
                                <div className="flex mb-2 justify-center ">
                                    <button
                                        onClick={() => handlePrevClick(post?.id, imageCount)}
                                        disabled={!hasEnoughImages}
                                        className={`h-full w-[5%] font-bold text-lg content-center cursor-pointer ${
                                            !hasEnoughImages ? 'opacity-30 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        &lt;
                                    </button>

                                    <div className="carrouselImages flex flex-row gap-4 w-full">
                                    {visibleImages.map((imagem, index) => (
                                        <div key={index} className="w-1/2 flex flex-col items-center">
                                        <div className="relative w-full aspect-[4/5]">
                                            <Image
                                            src={imagem.imagemURL}
                                            fill
                                            className="object-cover text-gray-500"
                                            alt={imagem.titulo}
                                            />
                                        </div>
                                        <p className="mt-2 text-center font-medium">{imagem.titulo}</p>
                                        </div>
                                    ))}
                                    </div>
                                    <button
                                        onClick={() => handleNextClick(post?.id, imageCount)}
                                        disabled={!hasEnoughImages}
                                        className={`h-full w-[5%] font-bold text-lg self-center cursor-pointer ${
                                            !hasEnoughImages ? 'opacity-30 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        &gt;
                                    </button>
                                </div>
                                <div className="flex flex-row px-10 justify-between items-center py-4">
                                    <div className="flex items-stretch gap-2 text-[1.3rem] font-medium justify-center items-center">
                                        <svg alt='like' className="w-[2rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#424242" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"/></svg>
                                        <div className="my-auto text-[#424242]">
                                        {post?.qtd_like + ' Likes'}
                                        </div>
                                    </div>
                                    <div className="text-xl font-medium text-[#424242]">
                                        {formattedDate}
                                    </div>
                                </div>
                            </div>
                        );
                    }) : (
                        <div className="flex justify-center items-center">
                            <p className="text-2xl font-bold">Nenhum post encontrado</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

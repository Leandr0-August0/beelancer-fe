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

    useEffect(() => {
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
                <div className="flex flex-col w-full h-full gap-8 py-8 overflow-auto">
                        {/* card de publicação */}
                    {Object.values(posts).map((post, index) => {
                        const imageCount = post.imagens.length;
                        const startIndex = startIndexes[index] || 0;
                        const hasEnoughImages = imageCount > 2;
                        const visibleImages = [
                            post.imagens[startIndex],
                            post.imagens[(startIndex + 1) % imageCount],
                        ];
                        const date = new Date(post.data_criacao);
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
                                className="flex flex-col bg-[rgba(239,239,239,1)] w-[38%] rounded-lg p-4 mx-auto"
                                key={index}
                            >
                                <div className="flex flex-row gap-3 items-center mb-2 text-3xl font-medium pl-15 pb-3">
                                    <Image
                                        src={'/undefinedPeople.svg'}
                                        width={50}
                                        height={50}
                                        alt="avatar"
                                    />
                                    <p>
                                        {post.freelancer.user.nome}
                                    </p>
                                </div>
                                <div
                                    className={`relative flex flex-col transition-all duration-300 ease-in-out px-16 py-4`}
                                >
                                    <TruncateText
                                        text={post.descricao}
                                        maxLines={3}
                                        classText={`text-md`}
                                        classToggle={`text-sm`}
                                    />
                                </div>
                                <div className="flex mb-2">
                                    <button
                                        onClick={() => handlePrevClick(post.id, imageCount)}
                                        disabled={!hasEnoughImages}
                                        className={`h-full w-[10%] font-bold text-lg content-center cursor-pointer ${
                                            !hasEnoughImages ? 'opacity-30 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        &lt;
                                    </button>

                                    <div className="carrouselImages flex flex-row gap-4 w-[80%] ">
                                        {visibleImages.map((imagem, index) => (
                                            <div
                                                key={index}
                                                className="relative carrousel-item w-[50%] aspect-[4/5] bg-white flex items-center justify-center "
                                            >
                                                <Image
                                                    src={imagem.imagemURL}
                                                    fill
                                                    alt={imagem.titulo}
                                                    className="object-cover place-self-center text-gray-500"
                                                />
                                                <p className="text-xs self-start z-10">
                                                    {imagem.titulo}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => handleNextClick(post.id, imageCount)}
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
                                        {post.qtd_like}
                                        </div>
                                    </div>
                                    <div className="text-xl font-normal leading-none">
                                        {formattedDate}
                                    </div>
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

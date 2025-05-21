import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function Config() {
    const chamados = [
        {
            id: 1,
            imagem: 'https://firebasestorage.googleapis.com/v0/b/sutilaromas-dda9d.firebasestorage.app/o/beelancer%2FRectangle%2058.png?alt=media&token=4b7dd38a-bfd3-4225-93e2-7b93e99d304a',
            nome: 'Anderson',
            titulo: 'Ajuste no contrapiso',
            descricao: 'Ajuste no contrapiso para assentamento de piso',
            cidade: 'Registro, SP',
            valor: '500,00',
        },
    ];

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
                                        <Image
                                            src={chamado?.imagem || ''}
                                            alt={`${chamado?.nome}Picture`}
                                            fill
                                        />
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
                                    <div className="flex flex-col gap-3 pr-10">
                                        <button className="border-2 border-gray-300 w-60 h-14 rounded-2xl px-4 font-normal text-[20px]">
                                            Aceitar Pedido
                                        </button>
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

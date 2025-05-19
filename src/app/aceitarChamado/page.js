import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Config() {
    return (
        <>
        <Navbar />
            <main>
                <div className="grid grid-cols-6 w-full ">
                    <div className="col-span-4 col-start-2">
                        <div className="relative pl-5 pb-7 h-full">
                            <div className="absolute z-10 bg-[#ffdc62] w-30 h-33 left-[4%] top-[45%] translate-y-[-50%] clipExagon ">
                                {/* foto */}
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
                                        Descrição do serviço Descrição do serviço Descrição do serviço Descrição 
                                    </p>
                                    <p className="text-[18px] font-normal leading-4  pt-2">
                                        Registro, SP
                                    </p>
                                    <p className="text-[18px] font-normal leading-4  pt-2">
                                        Valor estimado: R$ 1.500,00
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
                </div>
            </main>
        <Footer />
        </>
    );
}

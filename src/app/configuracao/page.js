import "./teste.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Config() {
    return (
        <>
            <Navbar />
            <main className="flex-grow flex flex-col w-full">
                <div className="self-center text-2xl font-bold mt-10 mb-8">
                    Esta é a página de configuração
                </div>
                <div className="w-1/2 h-96 self-center justify-center align-center bg-gray-200 p-4 rounded-lg">
                    {/* <div class="relative h-24 w-22 -mr-3">
                        <div class="absolute h-full w-full bg-blue-500 clip-hexagon-left"></div>
                    </div>
                    <div class=" h-20 w-64 bg-blue-500 flex items-center px-4">
                        Conteúdo da sua div aqui
                    </div> */}
                    {/* <div className="hidden h-20 w-20">
                        <svg width="450" height="120">
                            <polygon
                                points="0,20 20,10 20,0 440,0 440,120 20,120 20,110 0,100"
                                fill="#a5a5a5"
                                stroke="#333"
                                stroke-width="1"
                            />
                        </svg>
                    </div> */}
                    <div className="divCard w-[400px] h-[110px] bg-blue-500 shadow-lg"></div>
                </div>
            </main>
            <Footer />
        </>
    );
}

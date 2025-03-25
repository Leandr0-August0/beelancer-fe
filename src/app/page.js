import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center w-full">
                <div className='flex flex-col items-center gap-4'>
                    <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                        <li className="mb-2 tracking-[-.01em]">
                            Get started by editing{" "}
                            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                                src/app/page.js
                            </code>
                            .
                        </li>
                        <li className="tracking-[-.01em]">
                            Save and see your changes instantly.
                        </li>
                    </ol>
                </div>
                <div className="flex flex-row justify-center gap-6 ">
                    <a
                        href="/configuracao"
                        className="rounded-full bg-black border border-solid border-transparent transition-colors flex items-center justify-center text-[#FFC700] gap-2 hover:opacity-80 font-bold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    >
                        Configuração
                    </a>
                    <a
                        href="/conversa"
                        className="rounded-full bg-black border border-solid border-transparent transition-colors flex items-center justify-center text-[#FFC700] gap-2 hover:opacity-80 font-bold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    >
                        Conversa
                    </a>
                    <a
                        href="/perfil"
                        className="rounded-full bg-black border border-solid border-transparent transition-colors flex items-center justify-center text-[#FFC700] gap-2 hover:opacity-80 font-bold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    >
                        Perfil
                    </a>
                    <a
                        href="/historico"
                        className="rounded-full bg-black border border-solid border-transparent transition-colors flex items-center justify-center text-[#FFC700] gap-2 hover:opacity-80 font-bold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    >
                        Histórico
                    </a>
                    <a
                        href="/novoChamado"
                        className="rounded-full bg-black border border-solid border-transparent transition-colors flex items-center justify-center text-[#FFC700] gap-2 hover:opacity-80 font-bold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    >
                        Novo Chamado
                    </a>
                </div>
            </main>
        </div>
    );
}

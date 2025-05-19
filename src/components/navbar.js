'use client';

import Link from 'next/link';
import Image from 'next/image';
import { authService } from '@/service/auth';
import { useRouter } from 'next/navigation';
import { logout, login } from '@/service/auth';

export default function Navbar() {
    const router = useRouter();
    return (
        <nav>
            <div className="perfilLine bg-(--color1) flex justify-end items-center px-18 h-10 gap-10">
                <a
                    onClick={() =>
                        authService(router, () => {
                            router.push('/perfil');
                        })
                    }
                    className="flex items-center cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                    >
                        <g fill="none" stroke="currentColor" strokeWidth="2">
                            <path
                                strokeLinejoin="round"
                                d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                            />
                            <circle cx="12" cy="7" r="3" />
                        </g>
                    </svg>
                    Perfil
                </a>
                <a
                    onClick={() => (localStorage.getItem('token') ? logout(router) : login(router))}
                    className="cursor-pointer"
                >
                    {localStorage.getItem('token') ? 'Sair' : 'Entrar'}
                </a>
            </div>
            <div className="flex flex-row">
                <div className="basis-7/10 flex items-center px-30">
                    <Link href={'/'}>
                        <Image src="/logoPreta.svg" alt="Beelancer Logo" width={90} height={97} />
                    </Link>
                </div>
                <div className="basis-3/8">
                    <div className="flex flex-row justify-between items-center h-32">
                        <div className="basis-1/3 flex justify-center">
                            <a
                                onClick={() =>
                                    authService(router, () => {
                                        router.push('/novoChamado');
                                    })
                                }
                                className="flex flex-col items-center space-between cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="43"
                                    height="40"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="#424242"
                                        d="M1.5 4A1.5 1.5 0 0 1 3 2.5h10A1.5 1.5 0 0 1 14.5 4v3.25a.75.75 0 0 0 1.5 0V4a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v11.25a.75.75 0 0 0 1.28.53L4.063 13H8.25a.75.75 0 0 0 0-1.5H3.443l-.22.22L1.5 13.44zM13 14a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 13 14"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Novo Chamado
                            </a>
                        </div>
                        <div className="basis-1/3 flex justify-center">
                            <a
                                onClick={() =>
                                    authService(router, () => {
                                        router.push('/seusServicos');
                                    })
                                }
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="424242"
                                        d="M40 48c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24zm152 16c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zM16 232v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24m24 136c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"
                                    />
                                </svg>
                                Seus Serviços
                            </a>
                        </div>
                        <div className="basis-1/3 flex justify-center cursor-pointer">
                            <a
                                onClick={() =>
                                    authService(router, () => {
                                        router.push('/aceitarChamado');
                                    })
                                }
                                className="flex flex-col items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="424242" fillRule="424242">
                                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path
                                            fill="424242"
                                            d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0"
                                        />
                                    </g>
                                </svg>
                                Aceitar Chamados
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

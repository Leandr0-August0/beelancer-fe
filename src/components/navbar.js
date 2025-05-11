import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav>
            <div className='perfilLine bg-(--color1) flex justify-end items-center px-18 h-10'>
                <Link href="/perfil" className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="7" r="3"/></g></svg>
                    Perfil
                </Link>
            </div>
            <div className='flex flex-row'>
                <div className='basis-7/10 flex items-center px-30'>
                    <Link href={'/'} >
                        <Image src="/logoPreta.svg" alt="Beelancer Logo" width={90} height={97} />
                    </Link>
                </div>
                <div className='basis-3/8'>
                    <div className='flex flex-row justify-between items-center h-32'>
                        <div className='basis-1/3 flex justify-center'>
                            <Link href="/novoChamado" className='flex flex-col items-center space-between'>
                                <svg xmlns="http://www.w3.org/2000/svg"width="43" height="40" viewBox="0 0 16 16"><path fill="#424242" d="M1.5 4A1.5 1.5 0 0 1 3 2.5h10A1.5 1.5 0 0 1 14.5 4v3.25a.75.75 0 0 0 1.5 0V4a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v11.25a.75.75 0 0 0 1.28.53L4.063 13H8.25a.75.75 0 0 0 0-1.5H3.443l-.22.22L1.5 13.44zM13 14a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 13 14" clipRule="evenodd"/></svg>
                                Novo Chamado
                            </Link>
                        </div>
                        <div className='basis-1/3 flex justify-center'>
                            <Link href="/historico" className='flex flex-col items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="49" viewBox="0 0 24 24"><path fill="#424242" d="M12 21q-3.15 0-5.575-1.912T3.275 14.2q-.1-.375.15-.687t.675-.363q.4-.05.725.15t.45.6q.6 2.25 2.475 3.675T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H8q.425 0 .713.288T9 9t-.288.713T8 10H4q-.425 0-.712-.288T3 9V5q0-.425.288-.712T4 4t.713.288T5 5v1.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m1-9.4l2.5 2.5q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.8-2.8q-.15-.15-.225-.337T11 11.975V8q0-.425.288-.712T12 7t.713.288T13 8z"/></svg>
                                Histórico
                            </Link>
                        </div>
                        <div className='basis-1/3 flex justify-center'>
                            <Link href="/configuracao" className='flex flex-col items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="47" viewBox="0 0 16 16"><path fill="#424242" fillRule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.2.2 0 0 1 .271.073l.802 1.388a.2.2 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.2.2 0 0 1 .073.271l-.802 1.388a.2.2 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.2.2 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.2.2 0 0 1-.272-.073l-.8-1.388a.2.2 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.2.2 0 0 1-.073-.27l.801-1.389a.2.2 0 0 1 .272-.072C5.042 5.138 7 4.007 7 2.199c0-.11.089-.199.199-.199M5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735a1.7 1.7 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472a1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.7 1.7 0 0 1-2.32.622a.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7a.85.85 0 0 0-1.274-.735a1.7 1.7 0 0 1-2.32-.622l-.802-1.388a1.7 1.7 0 0 1 .622-2.32a.85.85 0 0 0 0-1.471a1.7 1.7 0 0 1-.622-2.32l.801-1.389a1.7 1.7 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2m4 5.8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clipRule="evenodd"/></svg>            
                                Configurações
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

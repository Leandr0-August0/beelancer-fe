'use client';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Form() {
    const router = useRouter();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userExists, setUserExists] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${apiUrl}/auth`, { email, password })
            .then((result) => {
                console.log(result);
                if (result.status === 200) {
                    // colocar o tempo de expiração do token no .env
                    const token = result.data.token;
                    const expiresIn = Date.now() + process.env.NEXT_PUBLIC_TOKEN_EXPIRES_IN * 1000;
                    // const expiresIn = Date.now() + 5 * 60 * 1000; // 5 minutes
                    const userId = result.data.user_id;
                    
                    const data = JSON.stringify({ token, expiresIn, userId });
                    {
                        typeof window !== 'undefined' &&
                            sessionStorage.setItem('authToken', data);
                    }
                    router.push('/');
                }
            })
            .catch((error) => {
                console.log(`erro ${error.response.status}: ${error.response.data.error}`);
                if (error.response.status === 404) {
                    setUserExists(false);
                } else if (error.response.status === 401) {
                    setPasswordMatch(false);
                }
            });
    };
    return (
        <main className="bg-gray-100 min-h-screen flex items-center justify-center px-50 py-25">
            <section className="border-2 border-gray-400 rounded-lg w-full h-full flex flex-row">
                <div className="basis-5/10 flex flex-col items-center justify-center">
                    <div className="relative w-100 h-100">
                        <Image src="/logomarca.png" className="pb-10" alt="logo" fill />
                    </div>
                </div>
                <div className="basis-5/10 flex flex-col items-center justify-center space-between ">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="w-100 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setUserExists(true);
                                }}
                                required
                            />
                            <p
                                className={`text-red-500 text-[70%] ${
                                    userExists ? 'hidden' : 'block'
                                }`}
                            >
                                Usuário não encontrado!
                            </p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Senha</label>
                            <input
                                type="password"
                                className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-100"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordMatch(true);
                                }}
                                required
                            />
                            <p
                                className={`text-red-500 text-[70%] ${
                                    passwordMatch ? 'hidden' : 'block'
                                }`}
                            >
                                Senha inválida!
                            </p>
                        </div>
                        <div className=" flex items-center justify-center pb-4 pt-5">
                            <button
                                type="submit"
                                className=" overflow-hidden py-5 rounded-[25px] border-[rgba(174,174,174,1)] border-solid border-2 text-2xl text-black font-medium leading-none w-100"
                            >
                                Entrar
                            </button>
                        </div>
                    </form>

                    <Link href={'/logon'} className=" flex items-center justify-center">
                        <button className=" overflow-hidden py-5 rounded-[25px] border-[rgba(174,174,174,1)] border-solid border-2 text-2xl text-black font-medium leading-none w-100">
                            Cadastrar
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

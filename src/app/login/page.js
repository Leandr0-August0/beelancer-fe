'use client';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
                    localStorage.setItem('user_id', result.data.user_id);
                    localStorage.setItem('token', result.data.token);
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
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/4cecef94f8c136f5d16aa08bbb882183ae312864?placeholderIfAbsent=true"
                        className="pb-10"
                    />
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/05ad82cfe47140e25f712e5dd2312584a8c26abd?placeholderIfAbsent=true"
                        className="pb-25"
                    />
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

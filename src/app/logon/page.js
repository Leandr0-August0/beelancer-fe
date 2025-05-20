'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';

export default function Form() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isProvider, setIsProvider] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const router = useRouter();

    const handleCheckEmail = async (email, password) => {
        if (!email || !password) {
            return;
        }
        await axios
            .post(`${apiUrl}/auth`, {
                email,
                password,
            })
            .then((response) => {
                setUserExists(true);
                console.log('Usuário já existe');
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status === 404) {
                    setUserExists(false);
                    console.log('Tudo ok para cadastrar');
                }
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleCheckEmail(email, password);
            if (password !== confirmPassword) {
                setPasswordMatch(false);
                return;
            } else {
                setPasswordMatch(true);
            }
            if (nome && email && password && passwordMatch && !userExists) {
                const response = await axios.post(`${apiUrl}/user`, {
                    nome,
                    email,
                    password,
                    image_URL: '',
                });
                const userId = response.data.createdUser._id;
                if (response.status === 201) {
                    {
                        typeof window !== 'undefined' && localStorage.setItem('userId', userId);
                    }
                    {
                        typeof window !== 'undefined' &&
                            localStorage.setItem('isProvider', isProvider);
                    }
                    alert('Usuário cadastrado com sucesso!');
                    router.push('/logonAdress');
                }
            }
        } catch (error) {
            console.log(error);
            alert(`Erro ao cadastrar usuário: \n${error}`);
        }
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
                    <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Nome</label>
                            <input
                                type="text"
                                className="w-100 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setNome(e.target.value)}
                                value={nome}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="w-100 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setUserExists(false);
                                }}
                                value={email}
                                required
                            />
                            <p
                                className={`text-red-500 text-[70%] ${
                                    userExists ? 'block' : 'hidden'
                                }`}
                            >
                                Email já cadastrado!
                            </p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Senha</label>
                            <input
                                type="password"
                                className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-100"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordMatch(true);
                                }}
                                value={password}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Confirmar Senha
                            </label>
                            <input
                                type="password"
                                className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-100"
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setPasswordMatch(true);
                                }}
                                value={confirmPassword}
                                required
                            />
                            <p className={`text-red-500 text-[80%] ${passwordMatch && 'hidden'}`}>
                                As senhas devem ser iguais!
                            </p>
                        </div>
                        <div className="flex flex-row space-between gap-15 mt-3">
                            <label className="text-gray-700 font-medium ">
                                Sou Prestador de Serviço
                            </label>
                            <div>
                                <input
                                    id="isProvider"
                                    name="isProvider"
                                    type="checkbox"
                                    onChange={(e) => setIsProvider(e.target.checked)}
                                ></input>
                            </div>
                        </div>
                        <div className=" flex flex-col items-center justify-center pt-5">
                            <button
                                className=" overflow-hidden py-5 rounded-[25px] border-[rgba(174,174,174,1)] border-solid border-2 text-2xl text-black font-medium leading-none w-100"
                                type="submit"
                            >
                                Próximo
                            </button>
                            <div className=" flex items-center justify-center pb-4 pt-5">
                                <a
                                    href="/login"
                                    className="grid place-items-center overflow-hidden py-5 rounded-[25px] border-[rgba(174,174,174,1)] border-solid border-2 text-2xl text-black font-medium leading-none w-100"
                                >
                                    Entrar
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

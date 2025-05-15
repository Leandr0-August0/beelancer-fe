'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Form() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isProvider, setIsProvider] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);
    const router = useRouter();

    const handleCheckEmail = async (email) => {
        try {
            const usersResponse = await axios.get(`${apiUrl}/users`);
            console.log(usersResponse.data);
            Object.values(usersResponse.data.users).map((user) => {
                if (user.email === email) {
                    setUserExists(true);
                }
            });
            // return response.data.exists;
        } catch (error) {
            console.error('Error checking email:', error);
            return false;
        }
    };

    const handleComparePassword = async (password, confirmPassword) => {
        if (password == confirmPassword) {
            setPasswordMatch(true);
        }
    };

    const handleSubmit = async () => {
        try {
            localStorage.setItem('freelancer', isProvider);
            const response = await axios.post(`${apiUrl}/users`, {
                nome,
                email,
                password,
            });
            console.log(response.data);
            if (response.status === 201) {
                alert('Usuário cadastrado com sucesso!');
                router.push('/logonAdress');
            }
        } catch (error) {
            console.log(error);
            alert(`Erro ao cadastrar usuário: ${error}`);
        }
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
                    <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Nome</label>
                        <input
                            type="text"
                            className="w-100 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                        <p className={`text-red-500 text-[80%] ${userExists ? 'block' : 'hidden'}`}>
                            Email ja cadastrado!
                        </p>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">E-mail</label>
                        <input
                            type="email"
                            className="w-100 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setUserExists(false);
                            }}
                            value={email}
                            onBlur={() => handleCheckEmail(email)}
                        />
                        <p className={`text-red-500 text-[80%] ${userExists ? 'block' : 'hidden'}`}>
                            Email ja cadastrado!
                        </p>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Senha</label>
                        <input
                            type="password"
                            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-100"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordMatch(false);
                            }}
                            value={password}
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
                                setPasswordMatch(false);
                            }}
                            value={confirmPassword}
                        />
                        <p className={`text-red-500 text-[80%] ${!passwordMatch && 'hidden'}`}>
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
                    {/* <Link href={'/logonAdress'} className=" flex items-center justify-center pt-5"> */}
                    <button
                        className=" overflow-hidden py-5 rounded-[25px] border-[rgba(174,174,174,1)] border-solid border-2 text-2xl text-black font-medium leading-none w-100"
                        onClick={async () => {
                            try {
                                await handleComparePassword(password, confirmPassword);
                                alert(
                                    `nome: ${nome} \nemail: ${email} \npassword: ${password} \nisProvider: ${isProvider} \npasswordMatch: ${passwordMatch} \nuserExists: ${userExists}`
                                );
                                if (
                                    name != '' &&
                                    email != '' &&
                                    password != '' &&
                                    passwordMatch === true &&
                                    userExists === false
                                ) {
                                    await handleSubmit();
                                } else {
                                    alert('Preencha todos os campos corretamente!');
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }}
                    >
                        Próximo
                    </button>
                    {/* </Link> */}
                </div>
            </section>
        </main>
    );
}

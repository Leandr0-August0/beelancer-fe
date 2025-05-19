'use client';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Form() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const router = useRouter();

    const handleSearchCep = async () => {
        try {
            if (cep.length < 8) {
                alert('CEP inválido');
                return;
            }
            // pesquisar o cep no viacep
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                alert('CEP não encontrado');
                return;
            }
            setEstado(response.data.uf);
            setCidade(response.data.localidade);
        } catch (error) {
            console.error('Error ao buscar o cep:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isProvider = localStorage.getItem('isProvider');
        const user_id = localStorage.getItem('userId');
        try {
            const response = await axios.post(`${apiUrl}/${isProvider === 'true' ? 'freelancer' : 'client'}`, {
                user_id,
                ...(isProvider === 'true' && { especialidades: [] }),
                classificacao: 0,
                endereco: {
                    estado,
                    cidade,
                    bairro,
                    rua,
                    numero,
                    complemento,
                    cep,
                },
            });
            console.log(response.data);
            if (response.status === 201) {
                alert('Cadastro realizado! Faça o login para continuar.');
                localStorage.removeItem('isProvider');
                localStorage.removeItem('userId');
                router.push('/login');
            }
        } catch (error) {
            console.log(error);
            alert(`Erro ao cadastrar endereço: \n${error}`);
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
                    <form onSubmit={handleSubmit}>
                        <div className="flex row-auto gap-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">CEP</label>
                                <input
                                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-50"
                                    onChange={(e) => {
                                        setCep(e.target.value);
                                        setEstado('');
                                        setCidade('');
                                    }}
                                    value={cep}
                                    onBlur={() => handleSearchCep()}
                                    required
                                    minLength={8}
                                    maxLength={8}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Estado
                                </label>
                                <input
                                    type="estado"
                                    className="w-50 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setEstado(e.target.value)}
                                    value={estado}
                                    disabled
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex row-auto gap-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Cidade
                                </label>
                                <input
                                    type="estado"
                                    className="w-50 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setCidade(e.target.value)}
                                    value={cidade}
                                    disabled
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Bairro
                                </label>
                                <input
                                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-50"
                                    onChange={(e) => setBairro(e.target.value)}
                                    value={bairro}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex row-auto gap-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Rua</label>
                                <input
                                    type="estado"
                                    className="w-50 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setRua(e.target.value)}
                                    value={rua}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Número
                                </label>
                                <input
                                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-50"
                                    onChange={(e) => setNumero(e.target.value)}
                                    value={numero}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Complemento
                            </label>
                            <input
                                className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-105"
                                onChange={(e) => setComplemento(e.target.value)}
                                value={complemento}
                            />
                        </div>
                        <div className=" flex items-center justify-center pt-5">
                            <button
                                type="submit"
                                className=" overflow-hidden py-5 rounded-[25px] border-[rgba(174,174,174,1)] border-solid border-2 text-2xl text-black font-medium leading-none w-100"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

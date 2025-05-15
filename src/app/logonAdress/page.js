import Link from 'next/link';
export default function Form() {
    return (
        <main className="bg-gray-100 min-h-screen flex items-center justify-center px-50 py-25">
            <section className="border-2 border-gray-400 rounded-lg w-full h-full flex flex-row">
                <div className="basis-5/10 flex flex-col items-center justify-center">
                    <img src="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/4cecef94f8c136f5d16aa08bbb882183ae312864?placeholderIfAbsent=true" className="pb-10"/>
                    <img src="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/05ad82cfe47140e25f712e5dd2312584a8c26abd?placeholderIfAbsent=true" className="pb-25"/>
                </div>
                <div className="basis-5/10 flex flex-col items-center justify-center space-between ">
                <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
                <div className="flex row-auto gap-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Estado</label>
                        <input type="state" className="w-50 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">CEP</label>
                        <input className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-50"/>
                    </div>
                </div>
                <div className="flex row-auto gap-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Cidade</label>
                        <input type="state" className="w-50 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Bairro</label>
                        <input className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-50"/>
                    </div>
                </div>
                <div className="flex row-auto gap-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Rua</label>
                        <input type="state" className="w-50 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Número</label>
                        <input className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-50"/>
                    </div>
                </div>              
                <div>
                <label className="block text-gray-700 font-medium mb-1">Complemento</label>
                <input type="password" className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-105"/>
              </div>
                <Link href={'/login'} className=" flex items-center justify-center pt-5">
                  <button className=" overflow-hidden py-5 rounded-[25px] border-[rgba(174,174,174,1)] border-solid border-2 text-2xl text-black font-medium leading-none w-100">
                      Cadastrar
                  </button>
                </Link>
              </div>
            </section>
        </main>
    );
};

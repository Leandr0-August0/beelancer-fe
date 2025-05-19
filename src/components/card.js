
export default function Card({
    selectFreelancer,
    id,
    imagem,
    nome,
    especialidades,
    cidade,
    estado,
    avaliacao,
}) {
    return (
        <div className="relative pb-7 ">
            <div className="absolute z-10 bg-[#ffdc62] w-30 h-33 top-[45%] translate-y-[-50%] clipExagon ">
                {/* foto */}
                {imagem ? (
                    <img src={imagem} alt={`${nome}Picture`} />
                ) : (
                    <img
                        src="\undefinedProfilePic.png"
                        alt="profilePic"
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
            <div className="relative flex flex-row justify-between bg-gray-50 px-4 ml-12 pl-28 h-44  items-center rounded-md border border-gray-300 ">
                <div className="flex flex-col  ">
                    <p className="text-[27px] font-medium leading-6 ">{nome}</p>
                    <p className="text-[20px] font-normal leading-4 pt-2 ">
                        {especialidades
                            ? especialidades
                                  .map(
                                      (especialidade) =>
                                          especialidade.charAt(0).toUpperCase() +
                                          especialidade.slice(1).toLowerCase()
                                  )
                                  .join(', ')
                            : 'Nenhuma especialidade'}
                    </p>
                    <p className="text-[18px] font-normal leading-4  pt-2">
                        {cidade}, {estado}
                    </p>
                    <p className="text-3xl pt-2 font-medium leading-4 ">
                        {avaliacao <= 0.5
                            ? '☆☆☆☆☆'
                            : avaliacao <= 1.5
                            ? '★☆☆☆☆'
                            : avaliacao <= 2.5
                            ? '★★☆☆☆'
                            : avaliacao <= 3.5
                            ? '★★★☆☆'
                            : avaliacao <= 4.5
                            ? '★★★★☆'
                            : '★★★★★'}
                    </p>
                </div>
                <div className="flex flex-col gap-3 pr-10">
                    <button className="border-2 border-gray-300 w-35 h-14 rounded-2xl px-4 font-normal text-[20px]">
                        Ver perfil
                    </button>
                    <button
                        className="border-2 border-gray-300 w-35 h-14 rounded-2xl px-4 py-2 font-normal text-[20px]"
                        onClick={() => selectFreelancer(id)}
                    >
                        Contratar
                    </button>
                </div>
            </div>
        </div>
    );
}

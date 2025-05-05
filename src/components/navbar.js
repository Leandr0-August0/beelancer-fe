import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav>
            <div className="w-full flex justify-end px-2 top-0 bg-(--color1) ">
                <Link href="/perfil">Perfil</Link>
            </div>
            <div className="flex flex-row justify-between items-center p-2 px-8 bg-(--color1)/30 bg-opacity-30 ">
                <Link href={'/'}>
                    <Image src="/logoPreta.svg" alt="Beelancer Logo" width={50} height={20} />
                </Link>
                <ul className="flex flex-row gap-4">
                    <li>
                        <Link href="/novoChamado">Novo Chamado</Link>
                    </li>
                    <li>
                        <Link href="/historico">Histórico</Link>
                    </li>
                    <li>
                        <Link href="/configuracao">Configurações</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

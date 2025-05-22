'use client';
import * as React from 'react';
import Image from 'next/image';

function ProfileHeader() {
    const [imagem, setImagem] = React.useState(
        'https://firebasestorage.googleapis.com/v0/b/sutilaromas-dda9d.firebasestorage.app/o/beelancer%2FRectangle%2043.png?alt=media&token=ed030461-c283-4e12-9bd6-d7a2063ccc80'
    );
    return (
        <header className="w-full">
            <div className="flex flex-row items-center gap-4">
                <div className="flex flex-row items-center gap-4">
                    <div className="w-25 h-25 rounded-full overflow-hidden relative">
                        <Image
                            src={imagem || ''}
                            alt={`EdivaldoPicture`}
                            fill    
                        >
                        </Image>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex flex-col place-items-baseline">
                            <div className="flex flex-row gap-3 place-items-baseline">
                                <h1 className="text-[230%] font-semibold">Edivaldo</h1>
                                <img
                                    src="https://i.postimg.cc/76SSZ0M6/Group-16.png"
                                    alt="Decorative underline"
                                    className="w-25"
                                />
                            </div>
                            <p className="text-[100%] text-gray-900">Registro,SP</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default ProfileHeader;

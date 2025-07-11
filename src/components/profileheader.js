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
                {/* <Image
            src="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/6b0881b03e78600af03acccc8165c9ad8d7e2bfa?placeholderIfAbsent=true"
            alt="Profile picture of Edivaldo"
            className="object-contain shrink-0 max-w-full aspect-square rounded-[50%] w-[13rem] max-md:mt-6"
          /> */}
                <div className="bg-[#ffdc62] w-25 h-25 rounded-full overflow-hidden relative">
                    {imagem && imagem !== '' ? (
                        <Image
                            src={imagem || ''}
                            alt={`EdivaldoPicture`}
                            fill
                        />
                    ) : (
                        <Image
                            src={'/undefinedProfilePic.png' || ''}
                            alt="profilePic"
                            fill
                        />
                    )}
                </div>
                <div className="flex flex-col ">
                    <div className="flex flex-row place-items-baseline gap-3">
                        <h1 className="text-[180%] font-semibold">Edivaldo</h1>
                        <p className="text-[100%] text-gray-900">Registro,SP</p>
                    </div>
                    {/* <Image
                  src="https://cdn.discordapp.com/attachments/1062543980098748437/1372287827919765634/Group_16.png?ex=68263a22&is=6824e8a2&hm=c765a117619142aa23b2b27757d9501e5c58cb03a262f2feb9e368fa4012a53e&"
                  alt="Decorative underline"
                  className="w-40"
              /> */}
                </div>
                <div className="flex flex-col gap-0"></div>
            </div>
        </header>
    );
}

export default ProfileHeader;

import * as React from "react";

function ProfileHeader() {
  return (
    <header className="w-full">
      <div className="flex flex-row items-center gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/6b0881b03e78600af03acccc8165c9ad8d7e2bfa?placeholderIfAbsent=true"
            alt="Profile picture of Edivaldo"
            className="object-contain shrink-0 max-w-full aspect-square rounded-[50%] w-[13rem] max-md:mt-6"
          />
          <div className="flex flex-col ">
            <div className="flex flex-row place-items-baseline gap-3">
              <h1 className="text-[180%] font-semibold">
                Edivaldo
              </h1>
              <p className="text-[100%] text-gray-900">Registro,SP</p>
            </div>
              <img
                  src="https://cdn.discordapp.com/attachments/1062543980098748437/1372287827919765634/Group_16.png?ex=68263a22&is=6824e8a2&hm=c765a117619142aa23b2b27757d9501e5c58cb03a262f2feb9e368fa4012a53e&"
                  alt="Decorative underline"
                  className="w-40"
              />
          </div>
          <div className="flex flex-col gap-0">
          </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
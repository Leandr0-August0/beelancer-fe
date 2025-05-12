import * as React from "react";

function ProfileHeader() {
  return (
    <header className="w-full">
      <div className="flex gap-5 max-md:flex-col ml-3 content-center justify-items-center">
        <figure className="w- max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/6b0881b03e78600af03acccc8165c9ad8d7e2bfa?placeholderIfAbsent=true"
            alt="Profile picture of Edivaldo"
            className="object-contain shrink-0 max-w-full aspect-square rounded-[50%] w-[15rem] max-md:mt-6"
          />
        </figure>
        <div className="w-[50%] max-md:ml-0 max-md:w-full">
          <div className="mt-16 text-6xl font-medium leading-none text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl">
            <h1 className="max-md:text-2xl">
              Edivaldo
            </h1>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/0c67570d85f54bff849a197f2133de8414af7ebe?placeholderIfAbsent=true"
              alt="Decorative underline"
              className="object-contain mt-4 w-56 max-w-full aspect-[6.21]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
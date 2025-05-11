import * as React from "react";
import ReviewItem from "./reviewItem";

function ReviewSection() {
  return (
    <section className="mt-6 ml-3 w-full font-medium text-black max-w-[723px] max-md:max-w-full">
      <h2 className="text-4xl leading-none">
        Avaliações
      </h2>
      <div className="flex flex-col items-start mt-5 w-full max-w-[722px] max-md:max-w-full">
        <ReviewItem
          avatarSrc="https://cdn.builder.io/api/v1/image/assets/7ee687050c0e447c8632baa860595daf/39da6d60448f54b590fd3dc43ffa8e0b2cca73f7?placeholderIfAbsent=true"
          reviewerName="Valmir"
          reviewTitle="Super recomendo"
          reviewText={"\"Excelente trabalho, entregou antes do prazo e com qualidade\""}
        />
      </div>
    </section>
  );
}

export default ReviewSection;

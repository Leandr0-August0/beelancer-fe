"use client";
import * as React from "react";
import Image from "next/image";

function ReviewItem({ avatarSrc, reviewerName, reviewTitle, reviewText }) {
  return (
    <article className="w-full">
      <div className="flex gap-3.5 items-center text-3xl leading-none whitespace-nowrap">
        <Image
          src={avatarSrc}
          alt={`${reviewerName}'s avatar`}
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[43px]"
        />
        <h3 className="self-stretch my-auto font-medium">
          {reviewerName}
        </h3>
      </div>
      <h4 className="gap-3.5 self-stretch mt-2 text-3xl leading-none font-medium">
        {reviewTitle}
      </h4>
      <blockquote className="self-stretch mt-2 text-2xl leading-loose max-md:max-w-full">
        {reviewText}
      </blockquote>
    </article>
  );
}

export default ReviewItem;

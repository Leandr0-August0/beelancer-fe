'use client';
import * as React from 'react';
import Image from 'next/image';

function ReviewItem({ avatarSrc, reviewerName, reviewTitle, reviewText }) {
    return (
        <article className="w-full">
            <div className="flex gap-3.5 items-center text-3xl leading-none whitespace-nowrap">
                <div className="bg-[#ffdc62] w-15 h-15 rounded-full overflow-hidden relative">
                    {avatarSrc && avatarSrc !== '' ? (
                        <Image src={avatarSrc || ''} alt={`${reviewerName}Picture`} fill />
                    ) : (
                        <Image
                            src={
                                'https://firebasestorage.googleapis.com/v0/b/sutilaromas-dda9d.firebasestorage.app/o/beelancer%2FRectangle%2052.png?alt=media&token=f6370194-e1ae-47e0-b5e0-125750f57a44' ||
                                ''
                            }
                            alt="profilePic"
                            fill
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
                <h3 className="self-stretch my-auto font-medium">{reviewerName}</h3>
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

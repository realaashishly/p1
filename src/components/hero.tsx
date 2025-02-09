'use client';

import Image from 'next/image';
import Star from '../../public/star.png';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-between p-8 sm:p-12 md:p-16 lg:p-24 space-y-6">
      {/* Top Section */}
      <div className="flex flex-col items-center my-12 w-full max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 text-zinc-600 text-xs sm:text-sm">
          {[
            'CRAFTING',
            'DIGITAL',
            'GOODS',
            'SINCE',
            '—',
            'Y:2017',
          ].map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
        <div className="relative text-center mt-4">
          <h1 className="whitespace-nowrap leading-none font-bold uppercase text-yellow text-7xl lg:text-[205px]">
            {['A', 'A', 'S', 'H', 'I', 'S', 'H'].map((char, index) => (
              <span key={`first-${index}`} className="inline-block">
                {char}
              </span>
            ))}
            <br />
            {['S', 'I', 'N', 'G', 'H'].map((char, index) => (
              <span key={`second-${index}`} className="inline-block">
                {char}
              </span>
            ))}
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/profile.png"
              alt="Profile photo of Aashish Singh"
              width={200}
              height={200}
              className="rounded-full border-2 border-yellow-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-between space-y-16 w-full max-w-4xl mx-auto">
        <div>
          <Image
            src={Star}
            alt="Star"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
          />
        </div>
        <div>
          <p className="text-base sm:text-lg md:text-2xl text-white text-center mx-auto w-11/12 md:w-8/12">
            I’m Aashish Singh — a passionate software developer and AI artist,
            dedicated to crafting innovative digital experiences and intelligent
            solutions.
          </p>
        </div>
        <div className="flex flex-col items-center text-zinc-600">
          <div className="flex justify-center w-1 bg-zinc-600 border h-8 overflow-hidden">
            <div className="w-1 h-4 bg-yellow animate-scrolling13"></div>
          </div>
          <span className="mt-2 text-xs sm:text-sm">Scroll Down</span>
        </div>
      </div>
    </div>
  );
}

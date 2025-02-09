import Image from 'next/image';
import React from 'react';

export default function Arts() {
  return (
    <div className="my-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
        {[
          { src: '/art1.png', alt: 'Ai creation art 1' },
          { src: '/art2.png', alt: 'Ai creation art 2' },
          { src: '/arts3.png', alt: 'Ai creation art 3' },
          { src: '/p1.png', alt: 'Ai creation art 4' },
          { src: '/p2.png', alt: 'Ai creation art 5' },
          { src: '/p4.png', alt: 'Ai creation art 6' },
          { src: '/arts12.png', alt: 'Ai creation art 7' },
          { src: '/arts9.png', alt: 'Ai creation art 8' },
          { src: '/arts10.png', alt: 'Ai creation art 9' },
          { src: '/poster-5.png', alt: 'Ai creation art 10' },
          { src: '/p3.png', alt: 'Ai creation art 11' },
          { src: '/poster-4.png', alt: 'Ai creation art 12' },
          { src: '/Closeup_shot_of_female_face.png', alt: 'Ai creation art 13' },
          { src: '/Scary_wolf.png', alt: 'Ai creation art 14' },
          { src: '/smoking_girl.png', alt: 'Ai creation art 15' },
          { src: '/poster-2.png', alt: 'Ai creation art 16' },
          { src: '/p5.png', alt: 'Ai creation art 17' },
          { src: '/p6.png', alt: 'Ai creation art 18' },
        ].map((art, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl aspect-[3/4] shadow-lg transition-transform duration-300 hover:scale-105 transform hover:rotate-2 hover:shadow-xl"
          >
            <Image src={art.src} alt={art.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">{art.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

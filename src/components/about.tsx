import React from 'react';
import Card from './card';

export default function About() {
    return (
        <div className='my-24 px-4'>
            <div className='flex flex-col md:flex-row justify-between gap-12 max-w-7xl mx-auto'>
                {/* Text Section */}
                <div className='w-full md:w-1/2'>
                    <h3 className='text-zinc-600 text-lg md:text-2xl leading-relaxed'>
                        My passion lies in the intersection of art and
                        technology, creating visually captivating interfaces and
                        elevating overall digital experiences.
                    </h3>
                    <h3 className='mt-10 text-base md:text-xl leading-relaxed'>
                        With a Bachelor of Application and currently pursuing my
                        Master of Application at Mahatma Gandhi Kashi Vidyapith
                        in Varanasi, I have built a solid foundation in digital
                        technology and creative design. As a dedicated software
                        developer and visionary AI artist, I leverage
                        cutting-edge tools like Midjourney and Playground to
                        craft stunning AI-generated imagery. This unique blend
                        of technical expertise and artistic passion allows me to
                        seamlessly merge innovation with aesthetics, delivering
                        digital experiences that are both powerful and visually
                        captivating. I am committed to pushing the boundaries of
                        creativity and technology, transforming ideas into
                        immersive, artful solutions.
                    </h3>
                </div>
                {/* Cards Section */}
                <div className='w-full md:w-1/2 flex flex-col space-y-6'>
                    <Card
                        head='Development'
                        subhead='Designing, building, and deploying state-of-the-art applications using modern frameworks, microservices, and DevOps best practices.'
                        percentage={93}
                    />
                    <Card
                        head='Designing'
                        subhead='Crafting engaging digital experiences and visually captivating interfaces that merge aesthetics with functionality.'
                        percentage={80}
                    />
                    <Card
                        head='AI Creation'
                        subhead='Leveraging advanced generative AI and machine learning techniques to create immersive digital art and interactive solutions.'
                        percentage={85}
                    />
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import Card from './card';

export default function About() {
    return (
        <div className='flex justify-between my-24 gap-12'>
            <div className=' w-[50%]'>
                <h3 className='text-zinc-600 text-2xl '>
                    My passion lies in the intersection of art and technology,
                    creating visually captivating interfaces and elevating
                    overall user digital experiences.
                </h3>
                <h3 className=' text-xl mt-10'>
                    With a Bachelor of Application and currently pursuing my
                    Master of Application at Mahatma Gandhi Kashi Vidyapith in
                    Varanasi, I have built a solid foundation in digital
                    technology and creative design. As a dedicated software
                    developer and visionary AI artist, I leverage cutting-edge
                    tools like Midjourney and Playground to craft stunning
                    AI-generated imagery. This unique blend of technical
                    expertise and artistic passion allows me to seamlessly merge
                    innovation with aesthetics, delivering digital experiences
                    that are both powerful and visually captivating. I am
                    committed to pushing the boundaries of creativity and
                    technology, transforming ideas into immersive, artful
                    solutions.
                </h3>
            </div>
            <div className='w-[50%] flex flex-col space-y-6'>
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
    );
}

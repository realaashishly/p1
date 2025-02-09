export default function Project() {
    return (
        <div className='my-24 px-4 flex gap-6 flex-col'>
            <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden'>
                <img
                    src='https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/works/mediumturtles.jpg?updatedAt=1729853728929'
                    alt='Medium Turtles'
                    className='w-full h-full object-cover object-center'
                />
                <div className='absolute inset-0 bg-black/50 flex flex-col justify-between p-4'>
                    <h3 className='text-3xl font-bold text-white'>
                        Medium
                        <br />
                        <span className='text-white/70'>Turtles</span>
                    </h3>
                    <p className='mt-2 text-lg text-white'>
                        Brand Identity, Web Design
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6'>
                {/* First Card */}
                <div className='relative w-full h-[400px] md:h-[400px] overflow-hidden'>
                    <img
                        src='https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/works/techvechure.jpg?updatedAt=1729853718122'
                        alt='Techvenchure'
                        className='w-full h-full object-cover object-center'
                    />
                    <div className='absolute inset-0 bg-black/50 flex flex-col justify-between p-4'>
                        <h3 className='text-3xl font-bold text-white'>
                            Techvenchure
                            <br />
                            <span className='text-white/70'>Dubai</span>
                        </h3>
                        <p className='mt-2 text-lg text-white'>
                            3D Website, Web Design
                        </p>
                    </div>
                </div>
                {/* Second Card */}
                <div className='relative w-full h-[400px] md:h-[400px] overflow-hidden'>
                    <img
                        src='https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/works/lifestyleinvest.jpg?updatedAt=1729853575346'
                        alt='Lifestyle Investment'
                        className='w-full h-full object-cover object-center'
                    />
                    <div className='absolute inset-0 bg-black/50 flex flex-col justify-between p-4'>
                        <h3 className='text-3xl font-bold text-white'>
                            Lifestyle
                            <br />
                            <span className='text-white/70'>Investment</span>
                        </h3>
                        <p className='mt-2 text-lg text-white'>
                            Brand Identity, Web Design
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden'>
                <video
                    src='https://v1.pinimg.com/videos/mc/720p/98/64/71/98647133f4b4b1c7dda3181fddfbd1bb.mp4'
                    loop
                    autoPlay
                    muted
                    playsInline
                    className='w-full h-full object-cover bg-black'
                />
                <div className='absolute inset-0 bg-black/50 flex flex-col justify-between p-4'>
                    <h3 className='text-3xl font-bold text-white'>
                        Somn
                        <br />
                        <span className='text-white/70'>Presents</span>
                    </h3>
                    <p className='mt-2 text-lg text-white'>
                        3D Website, Web Design
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6'>
                {/* First Card */}
                <div className='relative w-full h-[400px] md:h-[400px] overflow-hidden'>
                    <img
                        src='./photography.png'
                        alt='Photography'
                        className='w-full h-full object-cover object-center'
                    />
                    <div className='absolute inset-0 bg-black/50 flex flex-col justify-between p-4'>
                        <h3 className='text-3xl font-bold text-white'>
                            Photography
                            <br />
                            <span className='text-white/70'>Willen</span>
                        </h3>
                        <p className='mt-2 text-lg text-white'>
                            Brand Identity, Web Design
                        </p>
                    </div>
                </div>
                {/* Second Card */}
                <div className='relative w-full h-[400px] md:h-[400px] overflow-hidden'>
                    <img
                        src='./realhomes.png'
                        alt='Real Homes'
                        className='w-full h-full object-cover object-center'
                    />
                    <div className='absolute inset-0 bg-black/50 flex flex-col justify-between p-4'>
                        <h3 className='text-3xl font-bold text-white'>
                            Real
                            <br />
                            <span className='text-white/70'>Homes</span>
                        </h3>
                        <p className='mt-2 text-lg text-white'>
                            Brand Identity, Web Design
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

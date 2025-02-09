interface CardProps {
    head: string;
    subhead: string;
    percentage: number;
}

export default function Card({ head, subhead, percentage }: CardProps) {
    return (
        <div className='bg-yellow-100 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Text Section */}
            <div className='flex flex-col space-y-2 flex-1'>
                <h4 className='text-black text-xl md:text-2xl font-medium'>
                    {head}
                </h4>
                <p className='text-zinc-900 text-sm md:text-base'>{subhead}</p>
            </div>
            {/* Vertical Divider - visible on md screens and up */}
            <div className='hidden md:block w-px h-12 bg-zinc-600' />
            {/* Percentage Section */}
            <div className='text-4xl md:text-6xl text-zinc-600/60'>
                <p>{percentage}%</p>
            </div>
        </div>
    );
}

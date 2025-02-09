interface CardProps {
    head: string;
    subhead: string;
    percentage: number;
}

export default function Card({ head, subhead, percentage }: CardProps) {
    return (
        <div className="bg-yellow p-4 rounded-lg flex justify-between items-center">
            <div className="flex flex-col space-y-4 w-64">
                <h4 className="text-black text-2xl font-medium">{head}</h4>
                <p className="text-zinc-900 text-base">{subhead}</p>
            </div>
            <div className="w-[1px] h-12 bg-zinc-600 rounded-full" />
            <div className="text-6xl text-zinc-600/60">
                <p>{percentage}%</p>
            </div>
        </div>
    );
}

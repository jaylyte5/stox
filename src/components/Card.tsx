export default function Card({ title, description }: { title: string, description: string }) {
    return (
        <div className="w-[200px] bg-red-400 h-[400px] flex justify-between flex-col">
            <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <button className="btn">back</button>
                <button className="btn">next</button>
            </div>
        </div>
    )
}
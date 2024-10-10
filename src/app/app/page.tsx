import WatchList from "@/components/Widgets/WatchList";

export default function Dashboard() {
    return (
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <WatchList />
        </div>
    )
}
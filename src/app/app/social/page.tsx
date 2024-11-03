// 'use client';

// import SocialFeed from '@/components/Widgets/SocialFeed';
// import { Search, ThumbsUp } from "lucide-react";
// import { useState } from 'react';

// export type SocialData = {
//     avatar: string;
//     name: string;
//     description: string;
//     likes: number;
//     dislikes: number;
// }

// export default function SocialPage() {
//     const [searchQuery, setSearchQuery] = useState("");

//     const data = [
//         {
//             name: 'Finn',
//             avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEPj39dt2MkDcFLaBuFUzINx_FulSTqypzA&s',
//             description: 'Bro tesla is the future',
//             likes: 10,
//             dislikes: 2
//         },
//         {
//             name: 'Jake',
//             avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPivcBfs-9wTbacocOQ5sh_8gPa44tsyS0w&s',
//             description: 'I am a dog',
//             likes: 20,
//             dislikes: 5
//         },
//         {
//             name: 'BMO',
//             avatar: 'https://i.redd.it/6j6vqnpia9hc1.jpeg',
//             description: 'VIDEO GAMES',
//             likes: 15,
//             dislikes: 1
//         },

//     ]

//     const filteredData = data.filter((social) =>
//         social.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         social.description.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div className="flex border-2 border-red-500 justify-between w-full p-20 items-center  gap-44">

//             { }

//             <div className="flex flex-col gap-4">
//                 <h1 className="font-bold text-2xl">Communties</h1>

//                 <div className=" bg-base-300 flex flex-col gap-2 rounded-3xl">
//                     {data.map((social) => (
//                         <div>
//                             <div key={social.name} className="flex flex-row items-center justify-between p-4 gap-4 mb-10">
//                                 <div className="flex gap-2 items-center px-4 ">
//                                     <img src={social.avatar} alt={social.name} className="h-12 w-12 rounded-full" />
//                                     <div>
//                                         <h2 className="font-bold">{social.name}</h2>
//                                         <p className="text-xs">{social.description}</p>
//                                     </div>
//                                 </div>
//                                 { }
//                                 {/* Search bar */}
//                                 <div className="relative flex items-center">
//                                     <input
//                                         type="text"
//                                         placeholder="Search"
//                                         value={searchQuery}
//                                         onChange={(e) => setSearchQuery(e.target.value)}
//                                         className="input input-bordered w-32 md:w-48 rounded-full px-4 py-1"
//                                     />
//                                     <Search className="absolute right-2 text-gray-500" />
//                                 </div>

//                             </div>
//                             <div className="border-b-2 border-base-100 w-full"></div>
//                         </div>
//                     ))}

//                 </div>

//             </div >

//             <SocialFeed />
//         </div>
//     );
// }
import SocialFeed from "@/components/Widgets/SocialFeed";
import WatchList from "@/components/Widgets/WatchList";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <WatchList />
            <SocialFeed />
        </div>
    )
}
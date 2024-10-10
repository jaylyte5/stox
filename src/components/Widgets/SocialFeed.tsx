import { ThumbsUp } from "lucide-react";

export type SocialData = {
    avatar: string;
    name: string;
    description: string;
    likes: number;
    dislikes: number;
}

export default function SocialFeed() {


    const data = [
        {
            name: 'Finn',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEPj39dt2MkDcFLaBuFUzINx_FulSTqypzA&s',
            description: 'Bro tesla is the future',
            likes: 10,
            dislikes: 2
        },
        {
            name: 'Jake',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPivcBfs-9wTbacocOQ5sh_8gPa44tsyS0w&s',
            description: 'I am a dog',
            likes: 20,
            dislikes: 5
        },
        {
            name: 'BMO',
            avatar: 'https://i.redd.it/6j6vqnpia9hc1.jpeg',
            description: 'VIDEO GAMES',
            likes: 15,
            dislikes: 1
        },

    ]

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Social Feed</h1>

            <div className=" bg-base-300 flex flex-col gap-2 rounded-3xl">
                {data.map((social) => (
                    <div>
                        <div key={social.name} className="flex flex-row items-center justify-between p-4 gap-4">
                            <div className="flex gap-2 items-center px-4 ">
                                <img src={social.avatar} alt={social.name} className="h-12 w-12 rounded-full" />
                                <div>
                                    <h2 className="font-bold">{social.name}</h2>
                                    <p className="text-xs">{social.description}</p>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="flex gap-2 items-center">
                                    <ThumbsUp className="w-4 hover:scale-105 hover:cursor-pointer" />
                                    <span className="text-success">{social.likes}</span>
                                    <span className="text-error">{social.dislikes}</span>
                                </div>
                            </div>

                        </div>
                        <div className="border-b-2 border-base-100 w-full"></div>
                    </div>
                ))}

            </div>

        </div >
    )
}
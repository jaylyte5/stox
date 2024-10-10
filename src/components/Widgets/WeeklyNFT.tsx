'use client';

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

export default function WeeeklyNFT() {

    const nftData = [
        {
            name: "Mutant Apes",
            img: "https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/hofa/images/view/8ab6808ee9768d40476291eb77d45e83.jpg",
            price: 2500,
        },
        {
            name: "Alien Punk",
            img: "https://nftnow.com/wp-content/uploads/2024/04/alien-punk.jpg",
            price: 3000,
        },
        {
            name: "CryptoPunk",
            img: "https://news.artnet.com/app/news-upload/2021/11/FGHMFCBDIVHB3N6PSB7GNB53NM.png",
            price: 5000,
        },
        {
            name: "Bored Ape",
            img: "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31",
            price: 7000,
        },
        {
            name: "Pudgy Penguin",
            img: "https://i.seadn.io/s/raw/files/c7025632e509585af6ab5a7a98693c18.png?auto=format&dpr=1&w=1400&fr=1",
            price: 10000,
        }
    ]



    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % nftData.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [nftData.length]);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Weekly NFTs</h1>


            <motion.div
                key={nftData[currentIndex].name}
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                className=""
            >
                <div className="flex flex-col gap-2 items-start ">
                    <img src={nftData[currentIndex].img} alt={nftData[currentIndex].name} className="w-[200px] h-[200px] rounded-md" />
                    <div>
                        <h2>{nftData[currentIndex].name}</h2>
                        <h2>${nftData[currentIndex].price.toLocaleString()}</h2>
                    </div>
                </div>
            </motion.div>



        </div>
    )
}
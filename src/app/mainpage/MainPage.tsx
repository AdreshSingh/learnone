"use client"
import { FaCopy, FaLink } from "react-icons/fa";

import moon from '../assets/images/exist_real.gif';
import real from '../assets/images/exist_real.gif';
import purple from '../assets/images/purple_leave.gif';

// import sao from '../assets/videos/sao.mp4';
// import ftn from '../assets/videos/fate_trigger_novita.mp4';


import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

export const MainPage = () => {
    let id = 0;
    const imgData = [{ id: id++, url: moon },
    { id: id++, url: real },
    { id: id++, url: purple }
    ]

    // const videoData = [{ id: id++, url:  },
    // { id: id++, url: real },
    // { id: id++, url: purple }
    // ]
    return (
        <div className="main-page">
            <div className="glass-page flex-col text-left items-start justify-start p-3 overflow-x-auto">
                <h1>Link for Image</h1>
                <div>
                    {
                        imgData.map((url) => (<CodeSnippet url={url.url} key={url.id} />))
                    }
                </div>
                <h1>Link for Image</h1>
                {/* <div>
                    {
                        data.map((url) => (<CodeSnippet url={url.url} key={url.id} />))
                    }
                </div> */}
            </div>
        </div>
    )
}

const CodeSnippet = ({ url }: { url: StaticImageData }) => {

    const imgRef = useRef<HTMLImageElement | null>(null)
    const [urlData, setUrlData] = useState("")

    const copyHandle = () => {
        const imageUrl = imgRef?.current?.["src"] + "";
        setUrlData(imageUrl)
        navigator.clipboard.writeText(imageUrl)
        console.log(urlData)

    }
    return (
        <div className="border border-gray-300 bg-gray-300 rounded-md m-3">
            <div className="flex flex-row w-full p-3 justify-end border-gray-300">
                <FaLink className="" />
                <div className="flex flex-1"></div>
                <button className="rounded-full bg-slate-200 p-1" onClick={copyHandle}><FaCopy /></button>
            </div>
            <div className="flex flex-row w-full p-3 border-gray-300 flex-wrap">
                <Image
                    ref={imgRef}
                    src={url}
                    width={200}
                    alt="true moon"
                    className="relative rounded-lg hover:scale-[4] hover:left-[18rem] hover:rounded-sm "
                    onLoad={(e) => {
                        setUrlData(e.currentTarget.src)
                    }}
                />
                <p className="text-wrap text-slate-400 bg-green-50 m-1 py-2 px-1">
                    {
                        urlData && urlData
                    }
                </p>

            </div>
        </div>
    )
}
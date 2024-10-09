"use client"
import { useRef, useState } from "react";
import { FaCopy, FaLink } from "react-icons/fa";

import { SideBar } from '../sidebar/SideBar'



export default function Home() {
    return (
        <>
            <div className="flex flex-row">
                <SideBar />
                <VideoPage />
            </div>
        </>
    )
}




function VideoPage() {
    let id = 0;
    const videoData = [
        { "id": id++, "url": "/videos/sao.mp4" },
        { "id": id++, "url": "/videos/fate_trigger_novita.mp4" },
    ]
    return (
        <div className="main-page">
            <div className="glass-page flex-col text-left items-start justify-start p-3 overflow-x-auto h-screen my-20">
                <h1>Link for Image</h1>
                <div>
                    {
                        videoData.map((url) => (<CodeSnippet url={url.url} key={url.id} />))
                    }
                </div>
            </div>
        </div>
    )
}


const CodeSnippet = ({ url }: { url: string }) => {

    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [urlData, setUrlData] = useState("")

    const copyHandle = () => {
        const vidUrl = videoRef?.current?.currentSrc || videoRef?.current?.src + "";
        setUrlData(vidUrl)
        navigator.clipboard.writeText(vidUrl)
        console.log(urlData)

    }
    return (
        <div className="border border-gray-300 bg-gray-300 rounded-md m-3">
            <div className="flex flex-row w-full p-3 justify-end border-gray-300">
                <FaLink className="" />
                <div className="flex flex-1"></div>
                <button className="rounded-full bg-slate-200 p-1" onClick={copyHandle}><FaCopy /></button>
            </div>
            <div className="flex flex-row sm:flex-col w-full p-3 border-gray-300 flex-wrap">
                {/* <Image
                    ref={imgRef}
                    src={url}
                    width={200}
                    alt="true moon"
                    className="relative rounded-lg hover:scale-[4] hover:left-[18rem] hover:rounded-sm "
                    onLoad={(e) => {
                        setUrlData(e.currentTarget.src)
                    }}
                /> */}
                <video
                    ref={videoRef}
                    controls
                    className="sm:w-full w-40"
                    onCanPlay={(e) => {
                        console.log("can play")
                        setUrlData(e.currentTarget.src || e.currentTarget.currentSrc)
                    }}
                >
                    <source
                        src={url}
                        type="video/mp4"
                    />
                </video>
                <p className="text-wrap text-slate-400 bg-green-50 m-1 py-2 px-1">
                    {
                        urlData && urlData
                    }
                </p>

            </div>
        </div>
    )
}

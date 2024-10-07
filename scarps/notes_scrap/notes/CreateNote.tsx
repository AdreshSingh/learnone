"use client"
import { useRef } from "react"


export function MyForm() {
    const titleRef = useRef(null)
    const nodeRef = useRef(null)

    const handleSubmit = async () => {
        console.log(titleRef.current)
        await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
            headers: {
                'content-type': "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "title": titleRef.current.text,
                "notes": nodeRef.current.text
            })
        })
    }


    return <form action="" className="m-2 border">
        <input ref={titleRef} type="text" name="todo" id="todo" className="border m-2 rounded-md p-1" placeholder="write something" />
        <input ref={nodeRef} type="text" name="todo2" id="todo2" className="border m-2 rounded-md p-1" placeholder="write something2" />
        <input type="button" onClick={handleSubmit} value="Add" className="border p-2 rounded-lg bg-sky-500 text-white hover:bg-sky-300 hover:ring-2 focus:ring-cyan-600
        hover:text-black
        " />
    </form>
}
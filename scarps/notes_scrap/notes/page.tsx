import { MyForm } from "./CreateNote"


interface Note {
    id: number,
    title: string,
    notes: string
}

const URL = "http://127.0.0.1:8090"
async function getNotes() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/posts/records")
    const data = res.json()
    return data as unknown
}

export default async function Home() {
    const notes: any = await getNotes()
    console.log(notes)


    return (<>
        <div>Note</div>
        <h1>Welcome to Not3</h1>
        <div>
            {
                notes.items.map((note: Note) => (<Note key={note.id} note={note} />))
            }
        </div>
        {/* form */}
        <MyForm />
    </>)
}

export function Note({ note }: { note: Note }) {
    return <>
        <div className="border border-blue-500 flex flex-col p-3=4 rounded-2xl w-60 min-h-50">
            <div className="text-center font-bold text-lg">{note.title}</div>
            <div className="flex flex-grow px-4  text-slate-400">{note.notes}</div>
        </div>
    </>
}

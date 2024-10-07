import Link from "next/link";


export default function Home() {
  return (
    <div >
      {/* header */}
      <header>
        <nav className="bg-purple-600 p-5 mb-2 flex">
          <h1 className="text-white font-bold flex flex-1">
            GetWorkDone
          </h1>
          <div className="flex">
            <span className="p-2 rounded-full bg-green-500 hover:ring-lime-300 ring-0"><Link href={'/notes'}>🏠</Link></span>
          </div>
        </nav>
      </header>
      {/* card */}
      <main className="flex flex-col  items-center sm:items-start ">
        <div >
          <div >
            Some are todos
          </div>
          <div className="flex flex-row">
            <div >Title</div>
            <div className="px-4 text-slate-400">Date</div>
          </div>
        </div>
      </main>
    </div>
  );
}

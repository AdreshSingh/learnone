import Image from "next/image";

export default function Home() {
  return (
    <div >
      {/* header */}
      <header>
        <nav className="bg-purple-600 p-5 mb-2">
          <h1 className="text-white font-bold ">
            GetWorkDone
          </h1>
        </nav>
      </header>
      {/* card */}
      <main className="flex flex-col gap-8  items-center sm:items-start">
        <div className="row-start-2 border border-blue-500 flex flex-col p-10 rounded-2xl">
          <div className="flex flex-row">
            <div className="flex flex-grow px-4  text-slate-400">Title</div>
            <div className="px-4 text-slate-400">Date</div>
          </div>
          <div className="text-center font-bold text-lg">
            Some are todos
          </div>
        </div>
      </main>
      {/* form */}

    </div>
  );
}

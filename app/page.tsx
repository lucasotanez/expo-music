import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-2/3 sm:w-5/6 bg-gray-100 rounded-lg shadow-sm">
        <h1 className="p-12 text-lg">Workspace Title</h1>
        <div id="sources" className="flex flex-col w-5/6 m-auto mb-12">
          <div className="source">e</div>
          <div className="source">B</div>
          <div className="source">G</div>
          <div className="source">D</div>
          <div className="source">A</div>
          <div className="source">E</div>
        </div>
      </div>
    </main>
  )
}

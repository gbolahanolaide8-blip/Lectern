import { Video } from 'lucide-react'

export default function App() {
  return (
    <main className="min-h-screen grid place-items-center bg-slate-950 text-white">
      <div className="flex items-center gap-3">
        <Video className="size-8" />
        <h1 className="text-3xl font-bold">Lectern is running</h1>
      </div>
    </main>
  )
}
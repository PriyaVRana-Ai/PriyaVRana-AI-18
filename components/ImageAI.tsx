"use client"
import { useState } from "react"
export default function ImageAI() {
  const [image, setImage] = useState<File | null>(null)
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const generate = async () => {
    setLoading(true)
    const fd = new FormData()
    fd.append("image", image!)
    fd.append("prompt", prompt)
    const res = await fetch("/api/image", {method:"POST", body:fd})
    const blob = await res.blob()
    setResult(URL.createObjectURL(blob))
    setLoading(false)
  }
  return (
    <div className="glass p-6 rounded-2xl glow-red">
      <h1 className="text-2xl font-bold text-royalgold mb-4">Image AI</h1>
      <input type="file" onChange={e=>setImage(e.target.files![0])}/>
      {image && <img src={URL.createObjectURL(image)} className="w-64 rounded-xl my-4"/>}
      <input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Prompt: royal red black background" className="w-full p-3 glass rounded-xl"/>
      <button onClick={generate} className="mt-3 w-full bg-royalred p-3 rounded-xl glow-red">{loading? "Generating..." : "Generate/Edit"}</button>
      {result && <img src={result} className="mt-4 rounded-xl"/>}
    </div>
  )
}
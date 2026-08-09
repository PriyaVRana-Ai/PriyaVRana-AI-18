"use client"
import { useState } from "react"
import { Plus, Send } from "lucide-react"
export default function Chat({chat, setChat}:any) {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const send = async () => {
    setLoading(true)
    const newChat = [...chat, {role:"user", content:input}]
    setChat(newChat)
    const res = await fetch("/api/chat", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({messages:newChat})})
    const data = await res.json()
    setChat([...newChat, {role:"assistant", content:data.text}])
    setInput(""); setLoading(false)
  }
  return (
    <div>
      {chat.map((m:any,i:number)=><div key={i} className="glass p-3 rounded-xl mb-2">{m.content}</div>)}
      <div className="fixed bottom-4 w-[calc(100%-18rem)] glass p-3 rounded-2xl flex gap-2">
        <button><Plus/></button>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="आप क्या पूछना चाहते हैं..." className="flex-1 bg-transparent outline-none"/>
        <button onClick={send}><Send/></button>
      </div>
    </div>
  )
}
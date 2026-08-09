"use client"
import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Chat from "@/components/Chat"
import ImageAI from "@/components/ImageAI"

export default function Home() {
  const [active, setActive] = useState("Home")
  const [chat, setChat] = useState([{role:"assistant", content:"🙏 Radhe Radhe!\nPriyaVRana-AI में आपका हार्दिक स्वागत है।"}])
  return (
    <div className="flex bg-royalblack min-h-screen">
      <Sidebar active={active} setActive={setActive}/>
      <main className="ml-64 p-6 w-full">
        {active==="Home" && <div className="text-center mt-20"><h1 className="text-8xl font-bold text-royalgold glow-red">V</h1><p className="mt-4">सोचो • पूछो • पाओ</p></div>}
        {active==="AI Chat" && <Chat chat={chat} setChat={setChat}/>}
        {active==="Image AI" && <ImageAI/>}
      </main>
    </div>
  )
}
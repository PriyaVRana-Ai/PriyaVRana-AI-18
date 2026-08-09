"use client"
const items = ["Home","AI Chat","Shayari AI","Song AI","Study AI","Comedy AI","Image AI","Voice AI","Script Writer","Video Ideas","Caption","Reply","Translator","Settings","Admin Panel"]
export default function Sidebar({active, setActive}:{active:string, setActive:(s:string)=>void}) {
  return (
    <aside className="w-64 glass h-screen p-4 glow-red fixed left-0">
      <h1 className="text-2xl font-bold text-royalgold">PriyaVRana-AI</h1>
      <p className="text-sm text-gray-400 mb-6">सोचो • पूछो • पाओ</p>
      {items.map(i => <button key={i} onClick={()=>setActive(i)} className={`w-full text-left p-2 rounded-lg mb-1 ${active===i? 'bg-royalred glow-red':''}`}>{i}</button>)}
      <p className="absolute bottom-4 text-royalgold">👑 Premium AI Assistant</p>
    </aside>
  )
}
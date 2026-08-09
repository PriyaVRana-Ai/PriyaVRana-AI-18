export async function POST(req: Request) {
  const formData = await req.formData()
  const image = formData.get("image") as File
  const prompt = formData.get("prompt") as string
  if(!image ||!prompt) return Response.json({error: "Image and prompt required"}, {status: 400})
  const stabilityForm = new FormData()
  stabilityForm.append("image", image)
  stabilityForm.append("prompt", prompt)
  stabilityForm.append("output_format", "png")
  const res = await fetch("https://api.stability.ai/v2beta/stable-image/edit/search-and-replace", {
    method: "POST",
    headers: { "Authorization": `Bearer ${process.env.STABILITY_API_KEY}` },
    body: stabilityForm
  })
  const blob = await res.blob()
  return new Response(blob, { headers: { "Content-Type": "image/png" } })
}
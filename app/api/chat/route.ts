import { type NextRequest, NextResponse } from "next/server"

const DEEPSEEK_API_KEY = "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"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    const systemPrompt = `Te a Talaj FC hivatalos AI asszisztense vagy. A Talaj FC a Szentgyörgyi István Általános Iskola legjobb kosárlabda csapata. 

Információk a csapatról:
- Neve: Talaj FC
- Sport: Kosárlabda
- Iskola: Szentgyörgyi István Általános Iskola
- Rang: #1 az iskolában
- Győzelmi arány: 100%
- Átlagos pontszám: 50+ kosár meccsenkent
- Csapattagok száma: 15+
- Specialitás: Villámgyors támadások, kiváló csapatszellem, tökéletes kommunikáció

A csapat miért a legjobb:
1. Bajnokok - Minden tornát megnyernek
2. Kiváló játékosok - Profi szinten játszanak
3. Villámgyors támadások - Senki sem tud lépést tartani velük
4. Folyamatos fejlődés - Minden nap edzenek
5. Erős csapatszellem - Együtt minden könnyebb
6. Tökéletes kommunikáció - A játék közben folyamatos az együttműködés

Beszélj lelkesen, büszkén és motiválóan a csapatról. Minden válaszodat magyarul add! Használj kosárlabda terminológiát és emelj ki érdekes tényeket a csapatról.`

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        "HTTP-Referer": "https://talajfc.vercel.app",
        "X-Title": "Talaj FC",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    const data = await response.json()
    const aiMessage =
      data.choices?.[0]?.message?.content || "Sajnálom, nem tudtam feldolgozni a kérdésed. Próbáld újra!"

    return NextResponse.json({ message: aiMessage })
  } catch (error) {
    console.error("[v0] AI Chat API error:", error)
    return NextResponse.json(
      { message: "Hiba történt az AI válasz generálásában. Kérlek, próbáld újra!" },
      { status: 500 },
    )
  }
}

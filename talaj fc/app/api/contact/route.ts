import { type NextRequest, NextResponse } from "next/server"

const DISCORD_WEBHOOK =
  "https://discord.com/api/webhooks/1441448815226781904/R0cdQWm4P7To1jf5T8H9IJ5pAujlApLMct5zv6y-bxCCU8sGmtjPhd-oYd2PAnTCtfSf"

export async function POST(request: NextRequest) {
  try {
    const { name, message } = await request.json()

    const discordMessage = {
      embeds: [
        {
          title: "🏀 Új üzenet a Talaj FC weboldalról!",
          color: 0xff6b35, // Orange color matching the theme
          fields: [
            {
              name: "👤 Név",
              value: name,
              inline: false,
            },
            {
              name: "💬 Üzenet",
              value: message,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Talaj FC Weboldal",
          },
        },
      ],
    }

    const response = await fetch(DISCORD_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    })

    if (!response.ok) {
      throw new Error("Failed to send to Discord")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Discord webhook error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

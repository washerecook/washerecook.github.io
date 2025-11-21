export async function POST(request: Request) {
  try {
    const { name, discord } = await request.json()

    if (!name || !discord) {
      return Response.json({ error: "Hiányzó mezők" }, { status: 400 })
    }

    const discordWebhookUrl =
      "https://discord.com/api/webhooks/1441448815226781904/R0cdQWm4P7To1jf5T8H9IJ5pAujlApLMct5zv6y-bxCCU8sGmtjPhd-oYd2PAnTCtfSf"

    const message = {
      username: "Talaj FC - Új Csatlakozó",
      avatar_url: "https://i.imgur.com/4M34hi2.png",
      content: `🏀 **Új csatlakozási kérelem!**\n\n**Név:** ${name}\n**Discord:** ${discord}`,
      embeds: [
        {
          color: 0xff6b35,
          title: "Új Csatlakozó a Talaj FC-hez",
          fields: [
            { name: "Név", value: name, inline: true },
            { name: "Discord", value: discord, inline: true },
            { name: "Csatlakozási idő", value: new Date().toLocaleString("hu-HU"), inline: false },
          ],
        },
      ],
    }

    const response = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    })

    if (!response.ok) {
      throw new Error("Discord webhook failed")
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error("Join API error:", error)
    return Response.json({ error: "Szerver hiba" }, { status: 500 })
  }
}

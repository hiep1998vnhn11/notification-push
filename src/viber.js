require('dotenv').config()
import { Bot, Events } from 'viber-bot'

const viberBot = new Bot({
  authToken: process.env.VIBER_BOT_TOKEN,
  name: process.env.VIBER_BOT_NAME,
  avatar: process.env.VIBER_BOT_AVATAR,
})

// Perfect! Now here's the key part:
viberBot.on(Events.MESSAGE_RECEIVED, (message, response) => {
  // Echo's back the message to the client. Your bot logic should sit here.
  response.send(message)
})

export default viberBot

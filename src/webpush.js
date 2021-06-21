require('dotenv').config()
import webPush from 'web-push'

webPush.setVapidDetails(
  process.env.WEB_APP_URL,
  process.env.WEB_PUSH_PUBLIC_KEY,
  process.env.WEB_PUSH_PRIVATE_KEY
)

export default webPush

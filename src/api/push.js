import resource from 'resource-router-middleware'
import { webPush } from '../webpush'

export default ({ config, db }) =>
  resource({
    id: 'push',
    /** GET / - List all entities */
    index({ params }, res) {
      res.json({
        webPush,
      })
    },

    create({ body }, res) {
      res.json({
        status: 'success',
      })
      const payload = JSON.stringify({
        title: 'push notification',
      })
      webPush.sendNotification(body, payload).catch((err) => console.error(err))
    },
  })

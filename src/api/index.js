import { version } from '../../package.json'
import { Router } from 'express'
import facets from './facets'
import push from './push'
import { webPush } from '../webpush'

export default ({ config, db }) => {
  let api = Router()

  // mount the facets resource
  api.use('/facets', facets({ config, db }))
  api.use('/notification', push({ config, db }))
  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version })
  })

  api.post('/subscribe', ({ body }, res) => {
    const payload = JSON.stringify({
      title: 'push notification',
    })
    webPush
      .sendNotification(body, payload)
      .then((data) =>
        res.json({
          status: 'success',
          data,
        })
      )
      .catch((error) =>
        res.json(
          {
            status: 'error',
            error,
          },
          error.statusCode
        )
      )
  })
  return api
}

import * as express from 'express'
import * as routes from './routes'

process.env.PORT = process.env.PORT || '5000'

const { log } = console

const app = express()

routes.app(app)

app.listen(process.env.PORT, () => log('listening'))

import ENVIROMENT from "./config/enviroment.config.js"
import express from 'express'
import authRoute from "./routes/authRoute.js"
import mongoose from "./config/mongoDB.config.js"
import cors from 'cors'
import workspace_router from "./routes/workspace.router.js"
import channelRouter from "./routes/channel.route.js"

const app = express()
app.use(cors({
    origin: [`${ENVIROMENT.URL_FRONTEND}`],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}))

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/workspaces', workspace_router)
app.use('/api/channels', channelRouter)

app.listen (ENVIROMENT.PORT, () => {
    console.log(`El servidor se esta ejecutando en el el Puerto http://localhost:${ENVIROMENT.PORT}`)
})
import express from 'express'
import doteenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
import conectDb from './confiq/db.js'

doteenv.config()

conectDb();

const port = process.env.PORT || 3000

const app = express();

app.use('/api/users',userRoutes)

app.get('/', (req, res)=> res.send('Server is redy'));

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

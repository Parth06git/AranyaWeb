const connectToDb = require('./db')
const express = require('express')

connectToDb()

const app = express()
const port = 2077

app.use(express.json())

// All routes for this backend
app.use('/api/resEvent', require('./routes/recEvent'))
app.use('/api/upcomEvent', require('./routes/upcomEvent'))
app.use('/api/blogs', require('./routes/blogs'))
app.use('/api/members', require('./routes/members'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Aranya backend is on http://localhost:${port}`)
})
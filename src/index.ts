import express from "express"
import dbReadPool from "./db"

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Releasing changes to test: CodePipeline --> Elastic Beanstalk')
})

app.get('/db', async (req, res) => {
  let test
  dbReadPool.query('SELECT * FROM person;')
  .then(({ rows }) => {
    test = rows
    res.send(test)
  })
  .catch((e) => {
    console.error(e)
    res.sendStatus(500)
  })
})

app.listen(port, () => {
  console.log(`Server(Pressty) is now running on port: ${port}`)
})
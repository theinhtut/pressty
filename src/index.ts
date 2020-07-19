import express from "express"

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Releasing changes to test: CodePipeline --> Elastic Beanstalk')
})

app.listen(port, () => {
  console.log(`Server(Pressty) is now running on port: ${port}`)
})
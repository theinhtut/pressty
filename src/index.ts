const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req: any, res: any) => {
  res.send('Releasing changes to test: CodePipeline --> Elastic Beanstalk')
})

app.listen(port, () => {
  console.log(`Server(Pressty) is now running on port: ${port}`)
})
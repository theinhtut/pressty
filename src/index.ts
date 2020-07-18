const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req: any, res: any) => {
  res.send('Experimental project with Postgres SQL, Express, Nodejs and Typescript')
})

app.listen(port, () => {
  console.log(`Server(Pressty) is now running on port: ${port}`)
})
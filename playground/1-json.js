const fs = require('fs')
const dataBuffer = fs.readFileSync('data.json')

const dataJson = dataBuffer.toString()

const user = JSON.parse(dataJson)
user.name = 'khalil'
user.age = '26'

const userJson = JSON.stringify(user)

fs.writeFileSync('data.json',userJson)
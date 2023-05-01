// index.js

//  import the crypto module
const { randomBytes } = require('node:crypto')

//  get a commands using process.argv
const operation = process.argv.slice(2)

// complete the  function

switch (operation[0]) {
  case ('add'): {
    console.log(`${(+operation[1]) + (+operation[2])}`)
    break
  }

  case ('sub'): {
    console.log(`${(+operation[1]) - (+operation[2])}`)
    break
  }

  case ('mult'): {
    console.log(`${(+operation[1]) * (+operation[2])}`)
    break
  }

  case ('divide'): {
    console.log(`${(+operation[1]) / (+operation[2])}`)
    break
  }

  case ('sin'): {
    console.log(`${Math.sin(+operation[1])}`)
    break
  }

  case ('cos'): {
    console.log(`${Math.cos(+operation[1])}`)
    break
  }

  case ('tan'): {
    console.log(`${Math.tan(+operation[1])}`)
    break
  }

  case ('random'): {
    if (!operation[1]) {
      console.log('Provide length for random number generation.')
    }

    const buf = randomBytes(+operation[1])
    try {
      console.log(buf.toString('binary'))
    } catch (error) {
      console.log(error)
    }
    break
  }

  default: {
    console.log('Invalid operation operation')
  }
}

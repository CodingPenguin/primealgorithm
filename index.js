#!/usr/bin/env node

'use strict'


const program = require('commander')
const prompt = require('prompt')

const schema = {
  properties: {
    primeNumber: {
      required: true,
      type: "number"
    }
  }
}

program
  .version(1.0)
  .description('Small command line app to determine whether input number is prime or composite')
  .option('-c, --calculate', "Evaluate wether number is prime or composite")
  .parse(process.argv)


if (program.calculate) {

  prompt.start()

  prompt.message = "Number:"
  prompt.delimiter = ""

  prompt.get(schema, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      let primeNumber = result.primeNumber
      switch (true) {
        case primeNumber === 1 || primeNumber === 0: {
          console.log("Neither Composite or Prime")
          break;
        }
        case primeNumber === 2 || primeNumber === 3: {
          console.log(`${primeNumber} is a prime number.`)
          break;
        }
        case primeNumber % 2 === 0 || primeNumber % 3 === 0: {
          console.log(`${primeNumber} is a composite number.`)
          break;
        }
        default: {
          console.log(`${primeNumber} is a prime number.`)
        }
      }
    }
  })
}

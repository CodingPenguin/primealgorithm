switch (true) {
  case primeNumber.constructor === String: {
    console.log("Only Accept Number")
    break;
  }
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

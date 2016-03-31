primeNumber = 6 # insert number of your choice here

switch
  when primeNumber.constructor is String
    console.log "Only Accept Number"
  when primeNumber is 1 or primeNumber is 0
    console.log "Neither Composite or Prime"
  when primeNumber is 2 or primeNumber is 3
    console.log "#{primeNumber} is a prime number."
  when primeNumber % 2 is 0 or primeNumber % 3 is 0
    console.log "#{primeNumber} is a composite number."
  else
    console.log "#{primeNumber} is a prime number"

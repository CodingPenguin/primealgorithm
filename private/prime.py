# Program Starts

primeNumber = input("Enter your number: ")

if primeNumber is 1 or primeNumber is 0:
    print "Neither composite nor prime."
elif primeNumber is 2 or primeNumber is 3:
    print "%(primeNumber)s is a prime number." % locals()
elif primeNumber % 2 is 0 or primeNumber % 3 is 0:
    print "%(primeNumber)s is a composte number." % locals()
else:
    print "%(primeNumber)s is a prime number." % locals()

<?php
  // Program Starts

  echo "Enter your number: ";

  $primeNumber = fgets(STDIN);

  switch (true) {
    case $primeNumber == 1 || $primeNumber == 0:
      echo "Neither composite or prime.";
      break;
    case $primeNumber == 2 || $primeNumber == 3;
      echo "$primeNumber is a prime number.";
      break;
    case $primeNumber % 2 == 0 || $primeNumber % 3 == 0:
      echo "$primeNumber is a composite number.";
      break;
    default:
      echo "$primeNumber is a prime number.";
  };
?>

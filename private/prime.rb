# Program Starts

puts "Enter your number:"
primeNumber = gets.chomp.to_i.abs

case
  when primeNumber == String
    puts "Only Accept Number"
  when primeNumber == 1, primeNumber == 0
    puts "Neither composite nor prime."
  when primeNumber == 2, primeNumber == 3
    puts "#{primeNumber} is a prime number."
  when primeNumber % 2 == 0, primeNumber % 3 == 0
    puts "#{primeNumber} is a composite number."
  else
    puts "#{primeNumber} is a prime number."
end

# Program Starts
puts "Note: A negative, prime integer's absolute value is also prime\n(Enter a positive integer)"
puts "Enter your number:"
primeNumber = gets.chomp.to_i.abs

if primeNumber == 1 || primeNumber == 0
  puts "Neither composite nor prime."
elsif primeNumber == 2 || primeNumber == 3
  puts "#{primeNumber} is a prime number."
elsif primeNumber % 2 == 0 || primeNumber % 3 == 0
    puts "#{primeNumber} is a composite number."
else
  puts "#{primeNumber} is a prime number."
end
=begin          HALL OF BEAUTIFUL PEOPLE:
                          _________           __________
                         /  "00000"\        /    "00000"\
                        |   "00000" |       |    "00000"|
                        |           |       |           |
                        |           |       |           |
                         \__________/        \__________/

                      ______________________________
                         |                          |
                         |                          |  Danny Nguyen
                         |                          |
                         |              "0101010101"|
                         |          "10101010101010"|
                         \        "01010101010101" /
                          \_____"01010101010101"__/


                          _________           __________
                         /  "00000"\        /    "00000"\
                        |   "00000" |       |    "00000"|
                        |           |       |           |
                        |           |       |           |
                         \__________/        \__________/

                      ______________________________
                         |                          |
                         |                          |   Danny Nguyen
                         |                          |
                         |              "0101010101"|
                         |          "10101010101010"|
                         \        "01010101010101" /
                          \_____"01010101010101"__/

                          _________           __________
                         /  "00000"\        /    "00000"\
                        |   "00000" |       |    "00000"|
                        |           |       |           |
                        |           |       |           |
                         \__________/        \__________/

                      ______________________________
                         |                          |
                         |                          |  Danny Nguyen
                         |                          |
                         |              "0101010101"|
                         |          "10101010101010"|
                         \        "01010101010101" /
                          \_____"01010101010101"__/

=end

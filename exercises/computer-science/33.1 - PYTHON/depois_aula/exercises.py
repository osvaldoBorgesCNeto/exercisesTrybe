def higher_number(num1, num2):
    if num1 > num2:
      return num1
    return num2

def mean(numbers):
    total = 0
    for number in numbers:
      total += number
    return total / numbers

def square(number):
    for index in range(number):
        print('*' * number)

def higher_name(list):
    name_higher = ''
    for name in list:
        if len(name) > len(name_higher):
          name_higher = name
    return name_higher

def ink(quantity):
    cover_tin_ink = 18 * 3
    value_tin = 80.00
    cover_user = quantity // cover_tin_ink
    if quantity % cover_tin_ink:
        cover_user += 1
    return (cover_user ,cover_user * value_tin)

''' BONUS '''

def smaller_number(list):
    number_smaller = list[0]
    for number in list:
        if number < number_smaller:
          number_smaller = number
    return number_smaller

def square_tri(number):
    if number > 1:
        for index in range(1, number + 1):
            print('*' * index)

def sum_number(number):
    total = 0
    for index in range(number + 1):
        total += index
    return total

def gas(quantity, type):
    if type == 'alcool':
        price = 1.9
        discount = 0.03
        if quantity > 20:
          discount = 0.05
    elif type == 'gasolina':
        price = 2.5
        discount = 0.04
        if quantity > 20:
          discount = 0.06
    total = price * quantity
    total -= total * discount
    return total

print(gas(50, 'gasolina'))


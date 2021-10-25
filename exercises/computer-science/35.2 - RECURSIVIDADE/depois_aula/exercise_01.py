def how_many_even_number(n):
    total = 0
    for number in range(n + 1):
        if (number % 2) == 0 and number != 0:
            total += 1
    return total


print(how_many_even_number(2))

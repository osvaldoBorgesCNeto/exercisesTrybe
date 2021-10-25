def how_many_even_number(n):
    if n == 0:
        return n
    elif (n % 2) == 0:
        return how_many_even_number(n - 1) + 1
    else:
        return how_many_even_number(n - 1)


print(how_many_even_number(2))

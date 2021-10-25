def Fibonacci(number_):
    start_list = [0, 1]
    for next in range(number_):
        number_sum = start_list[(len(start_list) - 2)] + start_list[(len(start_list) - 1)]
        start_list.append(number_sum)
    return start_list


print(Fibonacci(9))


# RECURSIVIDADE
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)


print(fibonacci(6))

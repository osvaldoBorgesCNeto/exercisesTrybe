import time


start = time.time()


def multiply_array(numbers):
    result = 0
    for number in numbers:
        result *= number
    return result


multiply_array([1, 2, 3, 5, 9, 8, 9, 6, 80, 567, 154])

end = time.time()
print(end - start)

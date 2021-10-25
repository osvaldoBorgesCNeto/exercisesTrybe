def prime_aux(n, index, count):
    print(index)
    if index > count:
        return False
    if (n % index) == 0:
        return True
    else:
        return prime_aux(n, index + 1, count)


def prime(n):
    return not(prime_aux(n, 2, n - 1))


print(prime(17))

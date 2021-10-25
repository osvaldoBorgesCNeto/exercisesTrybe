def mdc(numberA, numberB):
    if numberB == 0:
        return numberA
    print(numberA % numberB)
    return mdc(numberB, numberA % numberB)


print(mdc(3, 99))

def reserver_list(list_):
    new_list = []
    for line in list_:
        new_list.insert(0, line)
    return new_list


list_test = [1, 2, 3, 4]
print(reserver_list(list_test))


def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]


print(reverse(list_test))

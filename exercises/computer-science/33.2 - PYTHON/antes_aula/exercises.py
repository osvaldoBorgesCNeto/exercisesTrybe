def name_vertical():
  NAME = input("Digite seu nome:")
  for letter in NAME:
    print(letter)

def number_natu():
  NUMBER = input("Coloque todos seus numero separado por espaco: ")

  nums = NUMBER.split(" ")

  sum = 0
  for num in nums:
    if not num.isdigit():
      print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

  print(f"A soma dos valores válidos é: {sum}")

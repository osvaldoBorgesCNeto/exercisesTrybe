import random
import json
import csv

def name_pir():
  NAME = input("Coloquei seu nome: ")
  for letter in range(len(NAME)):
    for name_inv in range(len(NAME) - letter):
      print(NAME[name_inv], end="")
    print()

def generating():
  list_word = []
  with open('depois_aula/animals.txt', mode='r') as words:
    for line in words:
      list_word.append(line.strip())
  word = random.choice(list_word)
  scrambled_word = "".join(random.sample(word, len(word)))
  return word, scrambled_word

def game_word():
  word, scrambled_word = generating()
  print(f"A palavra que tem que adivinha: {scrambled_word}")
  word_user = ''
  life = 3

  while life != 0:
    word_user = input("Qual palavra [e: ")

    if word == word_user:
      print('You Win')
      break

    life -= 1

    if life == 0:
      print('You Lose')
      print(f"A palavra: {word}")
      break
    
def books_all():
  categorias = {
    "Java": 0,
    "Python": 0,
    "PHP": 0
  }

  header = [
    'categoria',
    'porcentagem',
  ]

  with open('depois_aula/arquivo.json', mode='r') as file:
    books = json.load(file)

  with open('depois_aula/result.csv', mode='w') as file:
    writer = csv.DictWriter(file, fieldnames=header)
    writer.writeheader()
    for book in books:
      for cate in book['categories']:
        if cate == 'Java':
          categorias['Java'] += 1
        elif cate == 'Python':
          categorias['Python'] += 1
        elif cate == 'PHP':
          categorias['PHP'] += 1
    for categoria, number in categorias.items():
      row = { 'categoria': categoria, 'porcentagem': number / len(books) }
      writer.writerow(row)

books_all()
failedStudents = []

with open("antes_aula/school.txt", mode="r") as file:
  for line in file:
    stutent = line
    stutent = stutent.split(" ")
    if int(stutent[1]) < 6:
      failedStudents.append(stutent[0])

for stutent in failedStudents:
  print(stutent)

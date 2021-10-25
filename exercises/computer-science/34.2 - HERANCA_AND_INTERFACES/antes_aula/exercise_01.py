import json
from csv import DictWriter

class SalesReport():
  def __init__(self, export_file):
    self.export_file = export_file

  def build(self):
    return [
      {
        "Coluna 01": "Dados 01",
        "Coluna 02": "Dados 02",
        "Coluna 03": "Dados 03",
      },
      {
        "Coluna 01": "Dados A",
        "Coluna 02": "Dados B",
        "Coluna 03": "Dados C",
      }
    ]

  def serialize_json(self):
    with open(self.export_file + '.json', mode="w") as file:
      json.dump(self.build(), file)
  
  def serialize_csv(self):
    with open(self.export_file + '.csv', 'w') as file:
      headers = ["Coluna 01", "Coluna 02", "Coluna 03"]
      csv_writer = DictWriter(file, headers)
      csv_writer.writeheader()
      for item in self.build():
        csv_writer.writerow(item)

my_relatory = SalesReport('relatory')
my_relatory.serialize_json()
my_relatory.serialize_csv()
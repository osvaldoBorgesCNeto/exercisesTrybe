from abc import ABC, abstractmethod
import json
from csv import DictWriter

class SalesReport(ABC):
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

  @abstractmethod
  def serialize(self):
    raise NotImplementedError


class SalesReportJSON(SalesReport):
  def serialize(self):
    with open(self.export_file + '.json', mode="w") as file:
      json.dump(self.build(), file)

class SalesReportCSV(SalesReport):
  def serialize(self):
      with open(self.export_file + '.csv', 'w') as file:
        headers = ["Coluna 01", "Coluna 02", "Coluna 03"]
        csv_writer = DictWriter(file, headers)
        csv_writer.writeheader()
        for item in self.build():
          csv_writer.writerow(item)

my_relatory_json = SalesReportJSON('relatory')
my_relatory_json.serialize()

my_relatory_csv = SalesReportCSV('relatory')
my_relatory_csv.serialize()
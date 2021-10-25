class Resquest:
  def __init__(self, name, itens, pay, desc):
    self.name = name
    self.itens = itens
    self.pay = pay
    self.desc = desc

  def cal_total_pay(self):
    total_pay = 0
    for item in self.itens:
      total_pay += item.price 
    return total_pay

  def cal_total_pay_desc(self):
    total_pay = self.cal_total_pay() * (1 - self.desc)
    return total_pay


class Item:
  def __init__(self, name, price):
    self.name = name
    self.price = price

  def change_price(self, new_price):
    self.price = new_price

x_tudo = Item('X-tudo', 16.9)
water = Item('Water', 2.5)
fries = Item('French Fries', 15.9)

request_table_01 = Resquest('Osvaldo', [x_tudo, water, fries], 'Dinheiro', 0.1)

print(request_table_01.cal_total_pay_desc())

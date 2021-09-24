class Rectangle:
  def __init__(self, smaller_side, bigger_side):
    self.smaller_side = smaller_side
    self.bigger_side = bigger_side
  
  def cal_area(self):
    return (f"Area: {self.smaller_side * self.bigger_side}")

  def cal_per(self):
    smalller_side = self.smaller_side * 2
    bigger_side = self.bigger_side * 2
    return (f"Perimeter: {smalller_side + bigger_side}")

rectangle = Rectangle(4, 5)
print(rectangle.cal_area())
print(rectangle.cal_per())
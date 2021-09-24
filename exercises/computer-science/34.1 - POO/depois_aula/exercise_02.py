class Circle:
  def __init__(self, radius):
    self.radius = radius
    self.pi = 3.14
  
  def cal_area(self):
    return (f"Area: {self.pi * (self.radius ** 2)}")

  def cal_per(self):
    return (f"Perimeter: {2 * self.pi * self.radius}")

circle = Circle(4)
print(circle.cal_area())
print(circle.cal_per())
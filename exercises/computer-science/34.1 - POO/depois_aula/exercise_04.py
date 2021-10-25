class Television:
  def __init__(self, size):
    self.volume = 6
    self.channel = 16
    self.rate = 1
    self.size = size
    self.state = false
  
  def increase_volume(self):
    self.volume += self.rate

  def descrease_volume(self):
    self.volume -= self.rate

  def change_channel(self, new_channel):
    self.channel = new_channel
  
  def on_off_state(self):
    self.state = not self.state
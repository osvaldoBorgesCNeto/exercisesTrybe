const { somar, subtrair, multiplicar, dividir } = require('./calc');

test('teste do subtrair', () => {
  expect(subtrair(10, 5)).toBe(5);
});

test('teste do subtrair', () => {
  const subtrairMock = jest.fn(subtrair).mockReturnValue(5);

  subtrairMock();
  expect(subtrairMock).toHaveBeenCalled();
  expect(subtrairMock()).toBe(5);
});

test('teste do multiplicar', () => {
  const multiplicarMock = jest.fn(multiplicar).mockReturnValue(10);

  multiplicarMock();
  expect(multiplicarMock).toHaveBeenCalled();
  expect(multiplicarMock()).toBe(10);
});

test('teste do somar', () => {
  const somarMock = jest.fn(dividir).mockReturnValue(10);

  somarMock();
  expect(somarMock).toHaveBeenCalled();
  expect(somarMock()).toBe(10);
});

test('teste do dividir', () => {
  dividirMock = jest.fn(dividir)
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);

  expect(dividirMock()).toBe(2);
  expect(dividirMock()).toBe(5);
  expect(dividirMock()).toBe(15);
  expect(dividirMock).toHaveBeenCalled();
  expect(dividirMock).toHaveBeenCalledTimes(3);
});

test('teste do subtrair', () => {
  subtrair.mockRestore();

  expect(subtrair(10, 5)).toBe(5);
});

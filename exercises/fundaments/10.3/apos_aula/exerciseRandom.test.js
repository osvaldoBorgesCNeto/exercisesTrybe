const randomNumber = require('./exercise01');
const exercise04 = require('./exercise05');
jest.mock('./exercise05');

describe('Desafio 01', () => {
  test('Desafio 01', () => {
    const randomNumberMock = jest.fn(randomNumber).mockReturnValue(10);
  
    expect(randomNumberMock()).toBe(10);
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })
})

describe('Desafio 02', () => {
  test('divisao', () => {
    const randomNumberMock = jest.fn(randomNumber)
    .mockImplementation((a, b) => a / b);
  
    expect(randomNumberMock(10, 2)).toBe(5);
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })
})

describe('Desafio 03', () => {
  const randomNumberMock = jest.fn(randomNumber)
    .mockImplementation((a, b, c) => a * b * c);

  test('multiplacacao', () => {
    expect(randomNumberMock(10, 2, 5)).toBe(100);
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })

  test('dobro', () => {
    randomNumberMock.mockReset();
    expect(randomNumberMock).toHaveBeenCalledTimes(0);

    randomNumberMock.mockImplementation(a => a * 2);

    expect(randomNumberMock(4)).toBe(8);
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })
})

describe('Desafio 04', () => {
  test('first', () => {
    exercise04.firstFunct.mockImplementation(a => a.toLowerCase());

    expect(exercise04.firstFunct('OSVALDO')).toBe('osvaldo');
    expect(exercise04.firstFunct).toHaveBeenCalledTimes(1);
  })
  
  test('second', () => {
    exercise04.secondFunct.mockImplementation(a => a.substr(0, 1));

    expect(exercise04.secondFunct('osvaldo')).toBe('o');
    expect(exercise04.secondFunct).toHaveBeenCalledTimes(1);
  })

  test('third', () => {
    exercise04.thirdFunct.mockImplementation((a, b, c) => a.concat(b, c));

    expect(exercise04.thirdFunct('osvaldo', 'Borges', 'Campos')).toBe('osvaldoBorgesCampos');
    expect(exercise04.thirdFunct).toHaveBeenCalledTimes(1);
  })
})

describe('Desafio 05', () => {
  test('repita a implementacao', () => {
    const firstMock = jest
      .spyOn(exercise04, "firstFunct")
      .mockImplementation(a => a.toLowerCase());

    expect(firstMock('OSVALDO')).toBe('osvaldo');
    expect(firstMock).toHaveBeenCalledTimes(2);

    firstMock.mockRestore();
    exercise04.firstFunct.mockImplementation(a => a.toUpperCase());

    expect(exercise04.firstFunct('osvaldo')).toBe('OSVALDO');
  })
})

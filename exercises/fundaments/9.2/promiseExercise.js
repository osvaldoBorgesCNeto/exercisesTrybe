const more8000 = (number) => {
  const promise = new Promise((resolve, reject) => {
    const arrayNumber = Array.from(
      { length: number }, () => Math.floor(Math.random() * 50));
    const sum = arrayNumber.map((number) => (number * number)).reduce((acc, curr) => acc + curr, 0);
    if (sum < 8000) {
      resolve()
    } else {
      reject()
    }
  });

  promise
  .then(() => console.log('Coisa boa!'))
  .catch(() => console.log('É mais de oito mil!'))
}

more8000(10)

const more8000 = async (number) => {
  const arrayNumber = Array.from(
      { length: number }, () => Math.floor(Math.random() * 50));
  const sum = arrayNumber.map((number) => (number * number)).reduce((acc, curr) => acc + curr, 0);
  if (sum > 8000) throw new Error(); 
}


const newPromise = async () => {
  try {
    await more8000(10);
    console.log('Deu bom!!');
  } catch(erro) {
    console.log('É mais de oito mil!');
  }
}
newPromise()
// SEM PROPERTY SHORTHAND

const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com'));

// COM PROPERTY SHORTHAND

const newUser02 = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser02(54, 'isabella', 'isabella@email.com'));

// PRATIC

const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));

// RESULT

const getPosition02 = (latitude, longitude) => ({
  latitude,
  longitude, 
});

console.log(getPosition02(-19.8157, -43.9542));
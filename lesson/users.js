const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const result = fetch(usersUrl)
  .then((response) => {
    // console.log('RESPONSE', response);
    return response.json();
  })
  .then((users) => {
    const userNames = users.map(({ email }) => email);
    console.log(userNames);
  })
  .catch((err) => {
    console.error(err);
  });

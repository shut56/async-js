const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const result = fetch(usersUrl)
  .then((response) => {
    // console.log('RESPONSE', response);
    return response.json();
  })
  .then((users) => {
    const userNames = users.map(({ name, phone }) => ({ name, phone }));

    userNames.forEach(renderUsersTable);
  })
  .catch((err) => {
    console.error(err);
  });

function renderUserList(user) {
  const userLi = document.createElement('li');
  userLi.textContent = `${user.name} | ${user.phone}`;

  const usersUl = document.querySelector('#users');
  usersUl.append(userLi);
}

function renderUsersTable(user) {
  const userTr = document.createElement('tr');

  const userNameTd = document.createElement('td');
  userNameTd.textContent = user.name;

  const userPhoneTd = document.createElement('td');
  userPhoneTd.textContent = user.phone;

  userTr.append(userNameTd);
  userTr.append(userPhoneTd);

  const users = document.querySelector('#users');
  users.append(userTr);
}

const getTime = () => {
  return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
};

function renderTime() {
  const time = document.querySelector('#clock');
  const currentDate = getTime();
  time.textContent = currentDate;

  setInterval(() => {
    const currentDate = getTime();

    time.textContent = currentDate;
  }, 1000);
}

renderTime();

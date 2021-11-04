// Task#1
const button = document.querySelector ('#next');
function remButton (event) {
console.log(event);
const button = document.querySelector ('#next');
button.remove();
}
button.addEventListener ('click', remButton);

// Task@2
// const img = document.querySelector("img"); 
// img.src = "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg";
let img = document.createElement("img");
img.src = "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg";
let block = document.getElementById("pic");
block.appendChild(img);

// Task #3
const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
  ];
  function renderUser(){
    const userListContainer = document.querySelector('#user-list-container');
    const userTableBody = userTableContainer.querySelector('tbody');
  
    const userItems = users.map(user => {
      return `<tr>
                  <td>${user.id}</td>
                  <td>${user.email}</td>
                  <td>${user.first_name}</td>
                  <td>${user.last_name}</td>
                  <td><img alt="${user.first_name}" src="${user.avatar}" /></td>
                  <td><button data-user-id="${user.id}" class="user-remove" type="button">Delete</button></td>
              </tr>`;
    });
    // console.log(userItems);
    userTableBody.innerHTML = userItems.join('');
  }
  
  renderUser();
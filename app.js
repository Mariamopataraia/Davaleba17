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
      id: 1,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: " https://reqres.in/img/faces/7-image.jpg"
    },
    {
      id: 2,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: " https://reqres.in/img/faces/8-image.jpg"
    },
    {
      id: 3,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: " https://reqres.in/img/faces/9-image.jpg"
    },
    {
      id: 4,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
  ];

  function renderUser(){
    const userTableContainer = document.querySelector('#user-list');
    const userTableBody = userTableContainer.querySelector('p');

    const userItems = users.map(user => {
      return` 
            <p>${user.id}</p>
            <p>${user.email}</p>
            <p>${user.first_name}</p>
            <p>${user.last_name}</p>
            <img alt="${user.first_name}" src="${user.avatar}" />
            <button data-user-id="${user.id}" class="user-remove" type="button">Delete</button>
            `;
    });
    userTableBody.innerHTML = userItems.join('');
};
  
  renderUser();

// Initialize bookingDetails as an empty object
let bookingDetails = {};

function showNewUserOnScreen(user) {
  const bookingStatus = document.getElementById("bookingStatus");
  const userEntry = document.createElement("div");
  userEntry.className = "user-entry";
  
  bookingStatus.innerHTML = `
    <h2>Booking Successful</h2>
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phonenumber:</strong> ${user.phonenumber}</p>
    <hr />
  `;

  userEntry.innerHTML = `
  <h2>Booking Successful</h2>
  <p><strong>Name:</strong> ${user.name}</p>
  <p><strong>Email:</strong> ${user.email}</p>
  <p><strong>Phonenumber:</strong> ${user.phonenumber}</p>
  <button class="delete-btn" data-id="${user._id}">Delete</button>
  <hr />
`;


}

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phonenumber = document.getElementById("phonenumber").value;

  // Update the bookingDetails object
  bookingDetails = {
    name: name,
    email: email,
    phonenumber: phonenumber
  };

  // Save the booking details to local storage
  //localStorage.setItem(bookingDetails.email, JSON.stringify(bookingDetails));

  axios
    .post("https://crudcrud.com/api/8a3795cad6f54193bbfac5285139f622/appointmentData", bookingDetails)
    .then((response) => {
  
      showNewUserOnScreen(response.data);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
});

// Function to display the user details on page load
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/8a3795cad6f54193bbfac5285139f622/appointmentData")
    .then((response) => {
      console.log(response);
      const users = response.data;
      const bookingStatus = document.getElementById("bookingStatus");
      bookingStatus.innerHTML = ""; // Clear the previous content

      for (var i = 0; i < users.length; i++) {
        showNewUserOnScreen(users[i]);
      }


      });
    })
    .catch((err) => {
      console.log(err);
    });

function deleteUser(userId) {
  axios
    .delete(`https://crudcrud.com/api/8a3795cad6f54193bbfac5285139f622/appointmentData/${userId}`)
    .then((response) => {
      console.log(response);
      // If the delete request is successful, reload the page to display the updated list of users
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
}





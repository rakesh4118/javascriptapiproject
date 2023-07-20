function showNewUserOnScreen(user) {
    const bookingStatus = document.getElementById("bookingStatus");
    bookingStatus.innerHTML = `
        <h2>Latest Booking</h2>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phonenumber:</strong> ${user.phonenumber}</p>
    `;
}
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;

    // Create an object to hold the booking details
    const bookingDetails = {
        name: name,
        email: email,
        phonenumber: phonenumber
    };

    // Save the booking details to local storage
    //localStorage.setItem(bookingDetails.email, JSON.stringify(bookingDetails));
    
    axios.post("https://crudcrud.com/api/0a7229e432b54427a1659e3369218e54/appointmentData",bookingDetails)
        .then((response) => {
            showNewUserOnScreen(response.data)
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
                //
                    const bookingStatus = document.getElementById("bookingStatus");
                    bookingStatus.innerHTML = `
                        <h2>Latest Booking</h2>
                        <p><strong>Name:</strong> ${bookingDetails.name}</p>
                        <p><strong>Email:</strong> ${bookingDetails.email}</p>
                        <p><strong>Phonenumber:</strong> ${bookingDetails.phonenumber}</p>
                    `;
    });
   

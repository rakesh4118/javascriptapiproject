


let list = document.getElementById('items');

showData();

function createListItem(name, email, number) {
  let li = document.createElement('li');
  let deletebtn = document.createElement('button');
  
  deletebtn.innerHTML = 'Delete';
  deletebtn.className = 'danger-btn Delete';
  let Editbtn = document.createElement('button');
  Editbtn.innerHTML = "Edit";
  Editbtn.className = "primary-btn Edit"
  
  li.innerHTML = `${name} - ${email} - ${number}`;
  li.appendChild(deletebtn);
  li.appendChild(Editbtn);

  return li;
}

function showData() {
    axios.get("https://crudcrud.com/api/36bb3a88a1dc4275a351ed218a8b371e/appointmentData")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          list.appendChild(createListItem(response.data[i].name, response.data[i].email, response.data[i].number));
        }
      })
      .catch((error) => console.log(error));
  }


let btn = document.getElementById('submitbtn');
btn.addEventListener('click', (e) => {
    let obj = {
        name: '',
        email: '',
        number: ''
      }
      obj.name = document.getElementById('NameInput').value;
      obj.email = document.getElementById('EmailInput').value;
      obj.number = document.getElementById('contactInput').value;
      axios.post("https://crudcrud.com/api/36bb3a88a1dc4275a351ed218a8b371e/appointmentData", obj)
        .then(response => {
          list.appendChild(createListItem(response.data.name, response.data.email, response.data.number));
        })
        .catch((error) => console.log(error));
    });


list.addEventListener('click', e => {
  if (e.target.classList.contains('Delete')) {
    let li = e.target.parentElement;
    let text = li.innerHTML;
    let item = text.split(" -");
    axios.get("https://crudcrud.com/api/36bb3a88a1dc4275a351ed218a8b371e/appointmentData")
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].name === item[0]) {
            axios.delete("https://crudcrud.com/api/36bb3a88a1dc4275a351ed218a8b371e/appointmentData" + res.data[i]._id)
          }
        }
      })
    list.removeChild(li);
  }
})

list.addEventListener('click',e => {
    if (e.target.classList.contains('Edit')) {
      let li = e.target.parentElement;
      let text = li.innerHTML;
      let item = text.split(" -");
      axios.get("https://crudcrud.com/api/36bb3a88a1dc4275a351ed218a8b371e/appointmentData")
        .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].name === item[0]) {
              document.getElementById('NameInput').value = res.data[i].name;
              document.getElementById('EmailInput').value = res.data[i].email;
              document.getElementById('contactInput').value = res.data[i].number;
              axios.delete("https://crudcrud.com/api/36bb3a88a1dc4275a351ed218a8b371e/appointmentData" + res.data[i]._id);
  
            }
          }
        })
      list.removeChild(li);
    }
  })

  
// method: "POST" is missing from the object below
function submitData(name, email) {
    
    const formData = {
        name: name,
        email: email,
      };

const submitData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
 return fetch("http://localhost:3000/users", submitData)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      const id = object.id;
      document.body.innerHTML = `User ID: ${id}`;
    })
    .catch(function (error) {
      alert("Did not get user data!");
      document.body.innerHTML = `Ohh No!: ${error.message}`;
    });
}
submitData("Steve", "steve@steve.com");  


let users = [
    {id: 1, name: "Жасур"},
    {id: 2, name: "Даниел"},
    {id: 3, name: "Александр"}
  ];
  

  users = users.map(user => ({ ...user, admin: false }));
  
  console.log(users); 
  




  const mashaIndex = users.findIndex(user => user.name === "Маша");
  if (mashaIndex !== -1) {
    users[mashaIndex].admin = true;
  }
  
  console.log(users);
  
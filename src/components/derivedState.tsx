import { useState } from "react";

const usersData = [
  {
    name: "Alice",
    age: 30,
  },{
    name: "John",
    age: 40,
  },{
    name: "Bob",
    age: 25,
  },
];

const DerivedState = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState(usersData);
  
  // Derived state is when we derive some state from existing state
  // count of users above is derived state from users array
  const userCount = users.length;

  // Average age of users is also derived state from users array
  const avgAge = (users.reduce((acc, user)=>  acc + user.age, 0) / userCount).toFixed(2);

  return (<>
    <ul>
        {users.map((user: {name: string, age: number}) => {
            return <li key={user.name}>{user.name} - {user.age} years old</li>
        })}
    </ul>
    <strong>Total Users: {userCount}</strong><br />
    <strong>Average Age: {avgAge}</strong>
  </>);
};

export default DerivedState;

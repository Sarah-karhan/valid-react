import React,{useState} from "react";
//                       the path
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  //here an array of what we gonna get from the user 
  const [user, setUser] = useState({name: "", email: ""});
  //error msg
  const [error, setError] = useState("");


  //this function gonna be called when user try to login
  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });

    }

    else {
      console.log("Details do not match");
      setError("Details do not match!");
    }
  }

  //logout
  const Logout = () => {
    setUser({ name: "", email: ""});
  }

  return (
    <div className="App">
    
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcom, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
         </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      ) }
    </div>
  );
}

export default App;

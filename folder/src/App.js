import axios from "axios";
import { useEffect, useState} from "react";

export default function App()
{
  return (
            <div>
              <div className="bg-primary d-flex justify-content-center">Hello React</div>
              <Mycomponent2></Mycomponent2>
              <Mycomponent></Mycomponent>
            </div>
  );
}


function Mycomponent(){

  const[username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [list, setList] = useState([]);

  const handleusername=(e)=>{
    setUsername(e.target.value);
  }

  const handlepassword=(e)=>{
    setPassword(e.target.value);
  }

  const getUser = async () => {
    const url = "http://localhost:4000/1";
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };
  const addUser = async () => {
    const url = "http://localhost:4000/add-user";
    const data = {
      username: username,
      password: password,
    };

    // AJAX using AXIOS
    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setUsername("");
    setPassword("");
  };
  return(
          <div className="m-3">

             <input type="text" placeholder="Enter the Username........." value={username}  onChange={handleusername}/>
          <input type="password" placeholder="Enter the password........." value={password}  onChange={handlepassword}/>

        <div> <input type="button" name="" value="Get User" onClick={getUser} /></div>
        <input type="button" name="" value="putindb" onClick={addUser} />


        <h1>User List</h1>

      {list.map((item, index) => (
        <div key={index}>
          {item.username} {item.password}
        </div>
      ))}
      </div>
  );
}

function Mycomponent2()
{
  return(
  <div className="container-fluid">
    <div className="row d-flex justify-content-center">
      <div className="col-3 bg-warning flex-column"> 
      <div className="m-3  justify-content-center">
        <label>Username</label>
        <input type="text" placeholder="Enter Username" className="m-2" />
      </div>
      <div className="m-3  justify-content-center">
        <label>Password</label>
        <input type="text" placeholder="Enter password" className="m-2" />
      </div>

      <div className="d-flex justify-content-center"><input type="button" value="Submit" /></div>
      
       </div>
    </div>
  </div>
  );
}
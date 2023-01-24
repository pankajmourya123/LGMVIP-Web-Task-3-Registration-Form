import React, { useState, useEffect } from "react";
import { View } from "./components/view";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {

  const [users, setUsers] = useState(getDatafromLS());

  // input field states
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [skills,setSkills]=useState([])
  
  const userid = Math.floor(Math.random() * 100);
  // form submit event

  const handleSkills = (e) => {
     const value = e.target.value
     const checked = e.target.checked
     console.log(value,checked)
     if(checked){
  setSkills([
    ...skills,value
  ])
     }
     else{
setSkills(skills.filter((e)=>(e !== value)))
     }
   };
  const handleAddUsersSubmit = (e) => {
    e.preventDefault();
    console.log(skills)
    let user = {
      name,
      gender,
      website,
      email,
      image,
      userid,
      skills
    
    };

    setUsers([...users, user]);
   
    setName("");
    setEmail("");
    setImage("");
    setWebsite("");
    
  };

  const deleteUser = (userid) => {
    const filteredUsers = users.filter((element, index) => {
      return element.userid !== userid;
    });
    setUsers(filteredUsers);
  };

  const clearusers =()=>{
    setName("");
    setEmail("");
    setImage("");
    setWebsite("");

  }

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="wrapper">
      <h1>UsersList </h1>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddUsersSubmit}

          >
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br></br>
            <label>Gender:</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            />
            Female
            <br></br>
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br></br>
            <label>Image Link</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <br></br>
            <label>website</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
            />
            <br></br>
            <label>Skills:</label>
            <input
        type="checkbox"
        value="Reactjs"
        name="Skills"
        onChange={handleSkills}
      />
      Reactjs
      &nbsp;
      <input
        type="checkbox"
        value="Javascript"
        name="Skills"
        onChange={handleSkills}
      />
      Javascript
      &nbsp;
      <input
        type="checkbox"
        value="CSS"
        name="Skills"
        onChange={handleSkills}
      />
      css
      &nbsp;
      <input
        type="checkbox"
        value="HTML"
        name="Skills"
        onChange={handleSkills}
      />Html
            <br></br>
            <button type="submit"  className="btn btn-success btn-md" value="reset">
              ADD
            </button>
            <button type="reset"  className="btn btn-success btn-md" onClick={clearusers} value="reset values">
              Clear
            </button>
          </form>
        </div>

        <div className="view-container">
          {users.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>users Details</th>
                    </tr>
                  </thead>
                  <tbody >
                    <View users={users} data={deleteUser}  />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => setUsers([])}
              >
                Remove All
              </button>
            </>
          )}
          {users.length < 1 && <div>No users are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default App;

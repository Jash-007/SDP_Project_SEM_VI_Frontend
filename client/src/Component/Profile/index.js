import React, { useEffect, useState } from "react";
// import "./style.css";
// import {NavLink} from 'react-router-dom'
export default function Updateuser() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [error, seterror] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [mainerror, setmainerror] = useState();

  const handlechange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
 /*
  useEffect(() => {
    var k = data.PhoneNumber;
    const now = "PhoneNumber";
    if (isNaN(k)) {
      seterror({ ...error, [now]: "phone number must not have any alphabets" });
    }else if (!data.PhoneNumber) {
      seterror({ ...error, [now]: "Phone Number Can not be empty" });
    } else if (data.PhoneNumber.length < 10 || data.PhoneNumber.length > 10) {
      seterror({ ...error, [now]: "PhoneNumber length must be equal to 10" });
    } else if (data.PhoneNumber.match(/[a-z]/) !== null) {
      seterror({ ...error, [now]: "phone number must not have any alphabets" });
    } else {
      seterror({ ...error, [now]: "" });
    }
  }, [data.PhoneNumber]);
  */
 /*
  useEffect(() => {
    const now = "email";
    if (!data.email) {
      seterror({ ...error, [now]: "Email Can not be empty" });
    } else if (
      data.email.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/) !== null
    ) {
      seterror({ ...error, [now]: "Please enter valid email address" });
    } else {
      seterror({ ...error, [now]: "" });
    }
  }, [data.email]);
  */
  const handleupdate = async (e) => {
    console.log("print yes 1");
    e.preventDefault();
    const { name,email, number} =data;
    var user=localStorage.getItem("user");
    user=JSON.parse(user);
    const id=user.user_id;
    const res = await fetch("/updatedata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        email,
        number,
     
      }),
    });
    console.log(res);
    const y = await res.json();
    console.log(y);
    localStorage.setItem("user", JSON.stringify(y));
    setData({["name"]:y.name,["email"]:y.email,["number"]:y.number})
    /*
    if (y.message === "PhoneNumber") {
      setmainerror(
        "user with " + PhoneNumber + " PhoneNumber is already exits"
      );
      setData({ ...data, [y.message]: "" });
    } else if (y.message === "email") {
      setmainerror("user with " + email + " Email is already exits");
    } else if (y.message === "username") {
      setmainerror("user with " + username + " Username is already exits");
    } else {
      localStorage.setItem("loginuser", JSON.stringify(y));
      setData(y);
      // console.log(data);
      window.location.href = "/";
    }
    */
  };
useEffect(()=>{
  var user=localStorage.getItem("user");
  user=JSON.parse(user);
  setData({ ['name']: user.name,['email']:user.email,['number']:user.number });
},[])

  
  return (
    <div class="main">
      <section class="signup">
        <div>Customer Update</div>
        <div
          class="container"
          style={{ marginBottom: "35px", marginTop: "35px", width: "660px" }}
        >
          <div class="signup-content">
            <form
              method="POST"
              id="signup-form"
              class="signup-form"
              onSubmit={handleupdate}
            >
              <h2 class="form-title">Update account</h2>
              <div class="form-group">
                <input
                  type="text"
                  onChange={handlechange}
                  value={data.name}
                  class="form-input"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
                <div style={{ color: "red" }}>{error.name}</div>
              </div>
             
             
              <div class="form-group">
                <input
                  type="text"
                  class="form-input"
                  onChange={handlechange}
                  value={data.number}
                  name="number"
                  id="number"
                  placeholder="Your Phone Number"
                  max="9999999999"
                  required
                />
                <div style={{ color: "red" }}>{error.number}</div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-input"
                  onChange={handlechange}
                  value={data.email}
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
                <div style={{ color: "red" }}>{error.email}</div>
              </div>
              
         
              
              <div class="form-group">
                <input
                  style={{
                    backgroundImage:
                      "linear-gradient(to left, rgb(207 212 235), rgb(101 44 145))",
                  }}
                  type="submit"
                  name="submit"
                  id="submit"
                  class="form-submit"
                  value="Sign up"
                />
                <div style={{ color: "red" }}>{mainerror}</div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
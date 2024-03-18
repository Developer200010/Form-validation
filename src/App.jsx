import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const name1 = document.getElementById("name1");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phone = document.getElementById("phone");
    const submit = document.getElementById("submit");
    name1.addEventListener("blur", handleClick);
    email.addEventListener("blur", handleClick2);
    password.addEventListener("blur", handleClick3);
    phone.addEventListener("blur", handleClick4);
    submit.addEventListener("click",handleClick5)
  }, []);

  // for name
  const handleClick = () => {
    console.log("name clicked!");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{7,10})$/;
    let str = name1.value;
    console.log(regex, str);
    if (regex.test(str)) {
      console.log("name is valid");
      name1.classList.remove("is-invalid");
    } else {
      name1.classList.add("is-invalid");
    }
  };

  // for email
  const handleClick2 = () => {
    console.log("email is clicked");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
      console.log("email is valid");
      email.classList.remove("is-invalid");
    } else {
      console.log("not valid");
      email.classList.add("is-invalid");
    }
  };

  // for password
  const handleClick3 = () => {
    console.log("password is clicked");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{7,12})$/;
    let str = password.value;
    console.log(regex, str);
    if (regex.test(str)) {
      password.classList.remove("is-invalid");
    } else {
      password.classList.add("is-invalid");
    }
  };

  // for phone number
  const handleClick4 = () => {
    console.log("contact is clicked");
    let regex = /^([0-9]{10})$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
      phone.classList.remove("is-invalid");
    } else {
      phone.classList.add("is-invalid");
    }
  };

  const handleClick5 = (e) =>{
    e.preventDefault();
    console.log("submit is clicked");
    let success = document.getElementById("success");
    success.classList.add("show");
  }
  return (
    <>
      <div className="container">
        <div
        id="success"
          class="alert alert-warning alert-dismissible fade mt-2"
          role="alert"
        >
          <strong>form Submitted!</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div className="mb-3 mt-5">
            <label for="exampleInputEmail1" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="name1"
              placeholder="Enter Your Name"
            />
            <div className="invalid-feedback">
              Username must be 7-10 character long and should not start with a
              number
            </div>
          </div>
          <div className="mb-3 mt-5">
            <label for="exampleInputEmail1" className="form-label">
              Contact
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter Your contact"
            />
            <div className="invalid-feedback">invalid number</div>
          </div>
          <div className="mb-3 mt-5">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div className="invalid-feedback">invalid email</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
            <div className="invalid-feedback">invalid password</div>
          </div>
          <button type="submit" id="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

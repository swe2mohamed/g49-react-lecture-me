import React, { useState } from "react";

const ValidationForm = () => {
  const [person, setPerson] = useState({ email: "", name: "" });
  const [errorMesssage, setErrorMessage] = useState({ email: "", name: "" });

  const emailChangeHandlar = (event) => {
    console.log(">>>", event.target.value);
    setPerson({ ...person , email: event.target.value });
  };

  const nameChangeHanldar = (event) => {
    setPerson({ ...person, name: event.target.value });
  };

  const buttonClickHandlar = () => {
    //alert(email);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let error = { name: "", email: "" };
    let isValid = true;
    if (!emailRegex.test(person.email)) {
      //setShowAlert(true);
      //setErrorMessage("Email is not valid");
      error.email = "Email is not valid";
      isValid = false;
    }
    if (person.name === "") {
      error.name = "Name is not valid.";
      isValid = false;
    }
    setErrorMessage(error);
    if (isValid) {
      setErrorMessage({ email: "", name: "" });
      console.log(person);
      console.log("Send data tot the backend");
    }
  };

  const buttonResetHandler = () => {
    setPerson({ email: "", name: "" })
    setErrorMessage({ email: "", name: "" })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={person.email}
                onChange={emailChangeHandlar}
              />
              {errorMesssage && errorMesssage.email && (
                <p className="text-danger"> {errorMesssage.email}</p>
              )}
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                name="name"
                value={person.name}
                onChange={nameChangeHanldar}
              />
              {errorMesssage && errorMesssage.name && (
                <p className="text-danger"> {errorMesssage.name}</p>
              )}
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={buttonClickHandlar}
            >
              Click
            </button>
            <button
            type="button"
            className="btn btn-danger"
            onClick={buttonResetHandler}>
                Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ValidationForm;

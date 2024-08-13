import React from "react";
import { useForm } from "react-hook-form";

const HookFormDemo = () => {
  const initialData = { email: "", name: "" };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(initialData);

  const sendData = (data) => {
    console.log("data: ", data);
    console.log("Send data to api...");
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h2>React Hook Form</h2>
          <form onSubmit={handleSubmit(sendData)}>
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Enter email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  maxLength: { value: 20, message: "Email is too long" },
                })}
              />
              {errors.email && errors.email.type === 'required' && (<div className="invalid-feedback"> Email is required </div>)}
              {errors.email && errors.email.type === 'maxLength' && (<div className="invalid-feedback"> Max length exceeded </div>)}
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name§"
                placeholder="Enter name"
                name="name"
                {...register("name", {
                  required: "Name is required",
                  maxLength: { value: 20, message: "Name is too long" },
                })}
              />
              {errors.name && errors.name.type === 'required' && (<div className="invalid-feedback"> Name is required </div>)}
              {errors.name && errors.name.type === 'maxLength' && (<div className="invalid-feedback"> Max length exceeded </div>)}

            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => reset(initialData)}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HookFormDemo;

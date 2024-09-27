import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";


import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";

const schema = yup.object({
  username: yup.string()
    .required("! Please write a valid username for you")
    .min(3, "! Username must be at least 3 characters long")
    .max(20, "! Username cannot be longer than 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/, "! Username can only contain letters, numbers, and underscores"),

  email: yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: yup.string()
    .min(3, "! Pass must be at least 3 characters long")
    .max(20, "! Pass cannot be longer than 20 characters")
    .required("Password is required")
    .matches(/^[a-zA-Z0-9_]+$/, "! Password can only contain letters, numbers, and underscores"),

  confirmpassword: yup.string()
    .required("Confirm Password is required")
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const Register = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handlereg(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  }

  return (
    <div className="reg">
      <div className="regcont">
        <h2>Register</h2>
        <form
          onSubmit={handleSubmit((dataa) => {
            console.log(dataa);
            
           // Call handlereg with email and password from form data
            handlereg(dataa.email, dataa.password);

            navigate('/profile', { state: { dataa } });
            reset();
          })}
        >
          {/* Username */}
          {errors.username && <p className='errorrs'>{errors.username.message}</p>}
          <input className={errors.username ? "er" : ""} {...register("username")} type="text" placeholder="Username" />

          {/* Email */}
          {errors.email && <p className='errorrs'>{errors.email.message}</p>}
          <input
            className={errors.email ? "er" : ""}
            {...register("email")}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          {errors.password && <p className='errorrs'>{errors.password.message}</p>}
          <input
            className={errors.password ? "er" : ""}
            {...register("password")}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Confirm Password */}
          {errors.confirmpassword && <p className='errorrs'>{errors.confirmpassword.message}</p>}
          <input
            className={errors.confirmpassword ? "er" : ""}
            {...register("confirmpassword")}
            type="password"
            placeholder="Confirm Password"
          />

          <button className="pbutton">Register</button>
        </form>
        <div className="terms">
          <input type="checkbox" />
          <p>I accept terms and conditions of this site usage</p>
        </div>
        <p>Already have an Account? <button className="lbuuton">Log In</button></p>
      </div>
      <div className="imggg">
        <img
          src="https://i.pinimg.com/originals/05/0b/6c/050b6c01e9f364465d7c2feb8640624e.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register
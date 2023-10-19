import React from "react";
import { useForm } from "react-hook-form";

const SignUpUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
  
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
    
      alert(JSON.stringify(data, null, 2));
      console.log("Form Data:", data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </label>

      <label>
        Last Name:
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </label>

      <label>
        User Name:
        <input {...register("userName", { required: true })} />
        {errors.userName && <span>This field is required</span>}
      </label>

      <label>
        Email:
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Invalid email address</span>}
      </label>

      <label>
        Password:
        <input
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <label>
        Confirm Password:
        <input
          type="password"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && <span>This field is required</span>}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser;

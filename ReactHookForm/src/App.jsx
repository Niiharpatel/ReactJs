import "./App.css";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2);

    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();

    console.log(data, res);

    // if (data.username !== "nihar") {
    //   setError("myform", { message: "Your form is not valid" });
    // }
    // if (data.username === "guru") {
    //   setError("blocked", { message: "Sorry this user is blocked" });
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Username"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
          />
          <br />
          <br />
          {errors.username && (
            <div className="text-red-700 text-1xl ">
              {errors.username.message}
            </div>
          )}
          <input
            className="m-4"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: { value: 3, message: "Min length is 3" },
            })}
            type="password"
          />{" "}
          {errors.password && (
            <div className="text-red-700 text-1xl ">
              {errors.password.message}
            </div>
          )}
          <br />
          <br />
          <input
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white p-2 border border-black rounded-md cursor-pointer"
          />
          {/* {errors.myform && (
            <div className="text-red-700 text-1xl ">
              {errors.myform.message}
            </div>
          )}
          {errors.blocked && (
            <div className="text-red-700 text-1xl ">
              {errors.blocked.message}
            </div>
          )}  */}
        </form>
      </div>
    </>
  );
}

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import TokenContext from "../Contexts/TokenContext";

export default function SigIn() {
  const { setToken } = useContext(TokenContext);
  const navigate = Navigate;

  function submitHandler(event) {
    event.preventDefault();
    fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        navigate("/");
      });
  }

  return (
    <div className="flex h-screen w-full bg-backgroundImage bg-no-repeat bg-cover" onSubmit={submitHandler}>
      <div className="flex flex-col justify-center m-auto">
          <form className="max-w-[400px] w-full mx-auto bg-green-900 p-8 px-14 rounded-lg">
              <h2 className="text-2xl text-white font-bold text-center my-5">Sign in</h2>
                 <div>
                    <label className="text-white">Username
                    <input  className="rounded-lg  ml-3.5 mt-4 p-2 focus:border-green-500 focus:bg-gray-800 focus:outline-none" type="text" name="username" />
                    </label>
                  </div>
                  <div>
                    <label className="text-white">Password<input
                       type="password"
                       name="password"
                       className="rounded-lg mt-6 p-2 focus:border-green-500 focus:bg-gray-800 focus:outline-none ml-5"
                          />
                    </label>
                  </div>
                  <div>
                        <p className="text-white my-5 ">
                          <input type="checkbox" className="mx-3 rounded-md"/>Remember Me
                        </p>
                  </div>
                  <div className="flex justify-center">
                  <button className="text-white text border my-4 px-10 py-1.5 rounded-lg hover:bg-green-600 hover:font-bold" type="submit">Sign in</button>

                  </div>
                 
          </form>
      </div>
        
    </div>
   
  );
}


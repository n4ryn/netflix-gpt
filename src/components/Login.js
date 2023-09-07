import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import Header from "./Header";

import {
  checkValidName,
  checkValidEmail,
  checkValidPassword,
} from "../utils/validate";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessageName, setErrorMessageName] = useState(null);
  const [errorMessageEmail, setErrorMessageEmail] = useState(null);
  const [errorMessagePassword, setErrorMessagePassword] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInToggle = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  console.log(isSignUpForm);

  const handleFormData = () => {
    // Validate the form data
    const validName = checkValidName(name?.current?.value);
    const validEmail = checkValidEmail(email?.current?.value);
    const validPassword = checkValidPassword(password?.current?.value);

    setErrorMessageName(validName);
    setErrorMessageEmail(validEmail);
    setErrorMessagePassword(validPassword);

    console.log(name?.current?.value);
    console.log(email?.current?.value);
    console.log(password?.current?.value);

    if (validName || validEmail || validPassword) return;

    if (isSignUpForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessagePassword(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessagePassword(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
          className="h-[100vh] w-[100vw] object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-0 right-0 m-auto my-36 flex w-96 flex-col rounded-md bg-black bg-opacity-[85%] p-12 text-white"
      >
        <p className="m-auto py-4 text-3xl font-bold">
          Sign {isSignUpForm ? "Up" : "In"}
        </p>

        {isSignUpForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-2 w-full rounded-sm bg-gray-800 p-4 outline-none"
          />
        )}
        <p className={`${errorMessageName && "pb-2"}  text-xs text-red-500`}>
          {errorMessageName ? errorMessageName : <></>}
        </p>

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-2 w-full rounded-sm bg-gray-800 p-4 outline-none"
        />
        <p className={`${errorMessageEmail && "pb-2"}  text-xs text-red-500`}>
          {errorMessageEmail ? errorMessageEmail : <></>}
        </p>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 w-full rounded-sm bg-gray-800 p-4 outline-none"
        />
        <p
          className={`${errorMessagePassword && "pb-2"}  text-xs text-red-500`}
        >
          {errorMessagePassword ? errorMessagePassword : <></>}
        </p>

        <button
          className="my-6 w-full rounded-sm bg-red-600 p-4 hover:bg-red-700"
          onClick={handleFormData}
        >
          Sign {isSignUpForm ? "Up" : "In"}
        </button>

        <div className=" py-4 text-gray-400">
          {isSignUpForm ? "Already a user?  " : "New to Netflix?  "}
          <span
            className="cursor-pointer font-semibold text-white hover:underline"
            onClick={handleSignInToggle}
          >
            Sign {isSignUpForm ? "In" : "Up"} Now
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;

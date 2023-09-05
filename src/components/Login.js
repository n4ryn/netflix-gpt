import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black m-auto right-0 left-0">
        <input
          type="text"
          placeholder="Enter email address"
          className="p-2 m-2"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="p-2 m-2"
        />
        <button className="p-4 m-4 text-white bg-red-600">Sign In</button>
      </form>
    </div>
  );
};

export default Login;

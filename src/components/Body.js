import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import Browse from "./Browse";
import Login from "./Login";

import { addUser, removeUser } from "../redux/slice/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;

        // Add user in store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
      } else {
        // User is signed out
        // Remove user from store
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="h-screen w-screen bg-black">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

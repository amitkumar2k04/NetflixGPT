import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.AS
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // updating the store (if user present i.e. signIn case)
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unSubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const gptToggleFun = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="hidden md:block border-none bg-slate-200 p-2 rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 bg-red-700 text-white rounded-md font-sans font-semibold"
            onClick={gptToggleFun}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="usericon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

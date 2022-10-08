// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utilities/firebase/firebase.utillities";
import { async } from "@firebase/util";

const SignIn = () => {
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const usereDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(usereDocRef);
  //     }
  //   })();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const usereDocRef = await createUserDocumentFromAuth(user);
    console.log(usereDocRef);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>sign in with Google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        sign in with Google redirect
      </button> */}
    </div>
  );
};

export default SignIn;

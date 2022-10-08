// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import auth,
// signInWithGooglePopup,
// createUserDocumentFromAuth,
// signInWithGoogleRedirect,
// "../../utilities/firebase/firebase.utillities";
// import { async } from "@firebase/util";

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const usereDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(usereDocRef);
  //     }
  //   })();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const usereDocRef = await createUserDocumentFromAuth(user);
  //   console.log(usereDocRef);
  // };

  return (
    <div className="sign-in">
      {/* <button onClick={logGoogleUser}>sign in with Google popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        sign in with Google redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

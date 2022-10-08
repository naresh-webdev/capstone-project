import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utillities";

import { async } from "@firebase/util";

import { useState } from "react";

import "./sign-in-form.styles.scss";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utilities/firebase/firebase.utillities";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInForm = (e) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const logGoogleUser = async (e) => {
    e.preventDefault();
    const { user } = await signInWithGooglePopup();
    const usereDocRef = await createUserDocumentFromAuth(user);
    console.log(usereDocRef);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const SignInWithEmailAndName = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formFields.email, formFields.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        {/* <form onSubmit={handleSubmit}> */}

        <FormInput
          label="Email"
          requiured="true"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          requiured="true"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="button-div">
          <Button onClick={SignInWithEmailAndName} type="submit">
            Sign In
          </Button>
          <Button onClick={logGoogleUser} buttonType={"google"}>
            Sign In with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

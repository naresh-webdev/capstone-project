import { useState } from "react";
import { createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utillities";

import { createAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utillities";

import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password and confirm password does not match");
      return;
    }

    (async function () {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        resetFormField();

        await createUserDocumentFromAuth(user, {
          displayName,
        });
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("account cannot be created, email already in use!");
        } else {
          console.log(error.msg);
        }
      }
    })();
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          requiured="true"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm Password"
          requiured="true"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;

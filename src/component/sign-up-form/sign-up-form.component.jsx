import { useState } from "react";
import { createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utillities";

import { createAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utillities";

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
    try {
      (async function () {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        user.displayName = formFields.displayName;

        const usereDocRef = await createUserDocumentFromAuth(user, {
          displayName,
        });
      })();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Display Name</label>
        <input
          requiured="true"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          requiured="true"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="">Password</label>
        <input
          requiured="true"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          requiured="true"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

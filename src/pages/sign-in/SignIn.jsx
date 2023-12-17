import React, { useState } from "react";
import logo2 from "../../assets/logo2.png";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateEmail = () => {
    // Simple email validation (you may need a more robust validation)
    if (!email.trim()) {
      setEmailError("This field is required");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address");
    }
  };

  const validatePassword = () => {
    // Simple password validation (you may need a more robust validation)
    if (!password.trim()) {
      setPasswordError("This field is required");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else if (
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      setPasswordError(
        "Please include number, alphabet, and # in your password"
      );
    }
  };

  const handleSignIn = () => {
    validateEmail();
    validatePassword();

    // Additional logic for signing up if needed
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[444px] h-[576px] p-[62px] flex-shrink-0 border border-solid border-gray-300 rounded-2xl bg-white shadow-xl">
        <div className="flex items-center mb-[22px]">
          <img src={logo2} alt="" className=" w-[50px] h-[44px] mr-[11px]" />{" "}
          <h2 className="text-2xl font-bold mb-4 text-font-color-1">Stack</h2>
        </div>
        <p className="text-font-color-2 text-xl font-semibold leading-6 mb-[52px]">
          Sign In to continue with Stack
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <Input
            type={"email"}
            placeholder={"Enter Email"}
            value={email}
            onChangeFunction={handleEmailChange}
            onBlurFunction={validateEmail}
            lebelValue={"Email"}
            error={emailError}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <Input
            type={"password"}
            placeholder={"Enter Password"}
            value={password}
            onChangeFunction={handlePasswordChange}
            onBlurFunction={validatePassword}
            lebelValue={"Password"}
            error={passwordError}
          />
        </div>

        {/* Sign Up Button */}

        <Button
          butoonText={"Sign In"}
          fontSize={"text-base"}
          fontWeight={"font-semibold"}
          paddingY={"py-2"}
          background={"bg-primary-color"}
          borderRadius={"rounded-lg"}
          width={"w-full"}
          fontColor={"text-white"}
          onClickFunction={handleSignIn}
        />

        {/* Already have an account text */}
        <p className="mt-[27px] text-base text-font-color-3 text-gray-600">
          Don’t have an account?
          <Link to={"/signup"}>
            <span className="text-blue-500"> Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

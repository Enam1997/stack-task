import React, { useState } from "react";
import logo2 from "../../assets/logo2.png";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
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
    updatePasswordStrength(e.target.value);
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

  const updatePasswordStrength = (newPassword) => {
    // Logic to check password strength and update the UI
    const strengthBoxes = document.querySelectorAll(".password-strength-box");

    // Reset all boxes to red
    strengthBoxes.forEach((box) => {
      box.classList.remove("bg-gray-500");
      box.classList.add("bg-red-500");
    });

    if (newPassword !== "") {
      // Calculate password strength based on different character types
      const containsNumber = /\d/.test(newPassword);
      const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
      const containsAlphabet = /[a-zA-Z]/.test(newPassword);

      // Update UI based on password strength
      if (containsAlphabet && newPassword.length >= 14) {
        strengthBoxes[5].classList.remove("bg-red-500");
        strengthBoxes[5].classList.add("bg-gray-500");
      }

      if (
        containsAlphabet &&
        containsNumber &&
        containsSpecialChar &&
        newPassword.length >= 12
      ) {
        strengthBoxes[4].classList.remove("bg-red-500");
        strengthBoxes[4].classList.add("bg-gray-500");
      }

      if (containsAlphabet && containsNumber && newPassword.length >= 10) {
        strengthBoxes[3].classList.remove("bg-red-500");
        strengthBoxes[3].classList.add("bg-gray-500");
      }

      if (containsSpecialChar && newPassword.length >= 8) {
        strengthBoxes[2].classList.remove("bg-red-500");
        strengthBoxes[2].classList.add("bg-gray-500");
      }

      if (containsNumber && newPassword.length >= 6) {
        strengthBoxes[1].classList.remove("bg-red-500");
        strengthBoxes[1].classList.add("bg-gray-500");
      }

      if (containsNumber) {
        strengthBoxes[0].classList.remove("bg-red-500");
        strengthBoxes[0].classList.add("bg-gray-500");
      }
    }
  };

  const handleSignUp = () => {
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
          Sign up to join with Stack
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

          {/* Password Strength Checker */}
          <div className="flex mt-[19px] mb-[17px]">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`password-strength-box w-8 h-1 mx-1 flex-shrink-0 rounded bg-red-500`}
              ></div>
            ))}
          </div>
        </div>

        {/* Sign Up Button */}

        <Button
          butoonText={"Sign Up"}
          fontSize={"text-base"}
          fontWeight={"font-semibold"}
          paddingY={"py-2"}
          background={"bg-primary-color"}
          borderRadius={"rounded-lg"}
          width={"w-full"}
          fontColor={"text-white"}
          onClickFunction={handleSignUp}
        />

        {/* Already have an account text */}
        <p className="mt-[27px] text-base text-font-color-3 text-gray-600">
          Already have an account?{" "}
          <Link to={"/signin"}>
            <span className="text-blue-500">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

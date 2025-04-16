import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { BsAlphabet, BsAlphabetUppercase } from "react-icons/bs";
import { IoMdStarOutline } from "react-icons/io";
import { MdContentCopy, MdOutline123 } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
const App = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    specialChar: true,
    numbers: true,
  });
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    const strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const strLower = "abcdefghijklmnopqrstuvwxyz";
    const strSpecial = "!@#$%^&*()<>";
    const strNum = "1234567890";

    if (options.uppercase) {
      str += strUpper;
    }
    if (options.lowercase) {
      str += strLower;
    }
    if (options.numbers) {
      str += strNum;
    }
    if (options.specialChar) {
      str += strSpecial;
    }

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [setPassword, options, length]);

  useEffect(() => {
    passwordGenerator();
  }, [options, length]);

  const selectedOrNot = (value) => {
    setOptions((prev) => ({
      ...options,
      [value]: !prev[value],
    }));
  };
  return (
    <>
      <p
        style={{ fontSize: "3rem", paddingInline: "100px", fontWeight: "600" }}
      >
        PASSWORD GENERATOR
      </p>
      <div className="main-shadow">
        <div className="password-container">
          <p>{password}</p>
        </div>
        <div className="buttons-wrapper">
          <button
            className={`options-container ${
              options.uppercase ? "selected" : ""
            }`}
            onClick={() => selectedOrNot("uppercase")}
          >
            <BsAlphabetUppercase style={{ fontSize: "3rem" }} />
            <div className="upper-text">
              <p>Uppercase</p>
              <p>AA</p>
            </div>
          </button>

          <button
            className={`options-container ${
              options.lowercase ? "selected" : ""
            }`}
            onClick={() => selectedOrNot("lowercase")}
          >
            <BsAlphabet style={{ fontSize: "3rem" }} />
            <div className="upper-text">
              <p>Lowercase</p>
              <p>aa</p>
            </div>
          </button>

          <button
            className={`options-container ${
              options.specialChar ? "selected" : ""
            }`}
            onClick={() => selectedOrNot("specialChar")}
          >
            <IoMdStarOutline style={{ fontSize: "3rem" }} />
            <div className="upper-text">
              <p>Special</p>
              <p>@#$</p>
            </div>
          </button>

          <button
            className={`options-container ${options.numbers ? "selected" : ""}`}
            onClick={() => selectedOrNot("numbers")}
          >
            <MdOutline123 style={{ fontSize: "3rem" }} />
            <div className="upper-text">
              <p>Numbers</p>
              <p>123</p>
            </div>
          </button>
        </div>
        <div className="buttons-wrapper-two">
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: " #7e8dd4",
            }}
            className="options-container"
            onClick={() => selectedOrNot("regenerate")}
          >
            <RiRefreshFill style={{ fontSize: "1.5rem" }} />
            <div className="upper-text">
              <p>Regenerate</p>
            </div>
          </button>

          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={"options-container selected"}
            onClick={(e) => {
              navigator.clipboard.writeText(password);

              setMessage("Copied");
              setTimeout(() => {
                setMessage("Copy");
              }, 2000);
            }}
          >
            <MdContentCopy style={{ fontSize: "1.5rem" }} />
            <div className="upper-text">
              <p>Copy</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

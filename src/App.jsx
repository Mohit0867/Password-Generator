<<<<<<< HEAD
import {
  RxLetterCaseLowercase,
  RxLetterCaseUppercase,
  RxStar,
} from "react-icons/rx";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { TbNumber123 } from "react-icons/tb";
import { IoCopy } from "react-icons/io5";
=======
import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { BsAlphabet, BsAlphabetUppercase } from "react-icons/bs";
import { IoMdStarOutline } from "react-icons/io";
import { MdContentCopy, MdOutline123 } from "react-icons/md";
>>>>>>> c23907d14f2b58d51e966aff4ff93a986132cfac
import { RiRefreshFill } from "react-icons/ri";
const App = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const [message, setMessage] = useState("Copy");
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    special: false,
    numbers: true,
  });

  const handleOptionChange = (value) => {
    setOptions((prev) => ({
      ...options,
      [value]: !prev[value],
    }));
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let finalStr = "";
    const srtUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const srtLower = "abcdefghijklmnopqrstuvwxyz";
    const srtNum = "1234567890";
    const srtSpecial = "!@#$%^&*()_-+=[{}]<>,.?/|";

    if (options.uppercase) {
      finalStr += srtUpper;
    }
    if (options.lowercase) {
      finalStr += srtLower;
    }
    if (options.numbers) {
      finalStr += srtNum;
    }
    if (options.special) {
      finalStr += srtSpecial;
    }

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * finalStr.length) + 1;
      pass += finalStr.charAt(randomIndex);
=======
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
>>>>>>> c23907d14f2b58d51e966aff4ff93a986132cfac
    }
    setPassword(pass);
  }, [setPassword, options, length]);

  useEffect(() => {
    passwordGenerator();
  }, [options, length]);

<<<<<<< HEAD
  return (
    <>
      <p className="pg "> PASSWORD GENERATOR</p>
      <div className="main-wrapper">
        <div className="password-container">
          <p>{password}</p>
        </div>{" "}
        <div className="length-container">
          <div className="length-bar-container">
            <input
              type="range"
              name="length"
              id="length"
              min="1"
              max="20"
              value={length}
              step="1"
              onChange={(e) => setLength(e.target.value)}
              className="length-slider"
            />
            <div
              className="slider-bar"
              style={{ width: `${(length / 20) * 100}%` }}
            ></div>
          </div>
          <p className="length">{length}</p>
        </div>
        <div className="options-list-container">
          <div
            className={`options-container ${
              options.uppercase ? "selected" : ""
            }`}
            onClick={() => handleOptionChange("uppercase")}
          >
            <RxLetterCaseUppercase style={{ fontSize: "32px" }} />
            <div className="options-text-container">
              <b>Uppercase</b>
              <p>ABC</p>
            </div>
          </div>
          <div
            className={`options-container ${
              options.lowercase ? "selected" : ""
            }`}
            onClick={() => handleOptionChange("lowercase")}
          >
            <RxLetterCaseLowercase style={{ fontSize: "32px" }} />
            <div className="options-text-container">
              <b>Lowercase</b>
              <p>abc</p>
            </div>
          </div>
          <div
            className={`options-container ${options.special ? "selected" : ""}`}
            onClick={() => handleOptionChange("special")}
          >
            <RxStar style={{ fontSize: "32px" }} />
            <div className="options-text-container">
              <b>Special</b>
              <p>*&^$</p>
            </div>
          </div>

          <div
            className={`options-container ${options.numbers ? "selected" : ""}`}
            onClick={() => handleOptionChange("numbers")}
          >
            <TbNumber123 style={{ fontSize: "32px" }} />
            <div className="options-text-container">
              <b>Numbers</b>
              <p>123</p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button
            className="copy"
=======
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
>>>>>>> c23907d14f2b58d51e966aff4ff93a986132cfac
            onClick={(e) => {
              navigator.clipboard.writeText(password);

              setMessage("Copied");
              setTimeout(() => {
                setMessage("Copy");
              }, 2000);
            }}
          >
<<<<<<< HEAD
            <IoCopy />
            {message}
          </button>

          <button className="regenerate" onClick={passwordGenerator}>
            <RiRefreshFill />
            Regenerate
=======
            <MdContentCopy style={{ fontSize: "1.5rem" }} />
            <div className="upper-text">
              <p>Copy</p>
            </div>
>>>>>>> c23907d14f2b58d51e966aff4ff93a986132cfac
          </button>
        </div>
      </div>
    </>
  );
};
<<<<<<< HEAD
=======

>>>>>>> c23907d14f2b58d51e966aff4ff93a986132cfac
export default App;

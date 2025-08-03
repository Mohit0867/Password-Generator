import {
  RxLetterCaseLowercase,
  RxLetterCaseUppercase,
  RxStar,
} from "react-icons/rx";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { TbNumber123 } from "react-icons/tb";
import { IoCopy } from "react-icons/io5";
import { RiRefreshFill } from "react-icons/ri";
const App = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
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
    }
    setPassword(pass);
  }, [setPassword, options, length]);

  useEffect(() => {
    passwordGenerator();
  }, [options, length]);

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
            onClick={(e) => {
              navigator.clipboard.writeText(password);

              setMessage("Copied");
              setTimeout(() => {
                setMessage("Copy");
              }, 2000);
            }}
          >
            <IoCopy />
            {message}
          </button>

          <button className="regenerate" onClick={passwordGenerator}>
            <RiRefreshFill />
            Regenerate
          </button>
        </div>
      </div>
    </>
  );
};
export default App;

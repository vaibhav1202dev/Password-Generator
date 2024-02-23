import { useState } from "react";
import "./App.css";
import usePasswordGnerator from "./hooks/password-generator";
import StrengthIndicator from "./components/strenghtChecker";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);
  const { password, generatePassword } = usePasswordGnerator();

  const handleCheckboxChange = (index) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <input
            className="pass-input"
            type="text"
            placeholder="P@$$#0rD"
            value={password}
            readOnly
          />
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
        <div className="carlen">
          <span>Character length</span>
          <span>{length}</span>
        </div>
        <div className="input-range">
          <input
            className="range"
            type="range"
            min={4}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkbox.state}
                onChange={() => handleCheckboxChange(index)}
              />
              <label className="check-title">{checkbox.title}</label>
            </div>
          ))}
        </div>

        <StrengthIndicator password={password} />
        <div className="gener-btn">
          <button
            className="generate-btn"
            onClick={() => generatePassword(checkboxData, length)}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

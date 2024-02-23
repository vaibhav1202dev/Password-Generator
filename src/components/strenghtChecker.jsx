import React from "react";
import "../App.css";

const StrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();

  // if (!passwordStrength) return {<React.Fragment/>};

  return (
    <div className="password-strength">
      Strength: <span className="str">{passwordStrength}</span>
    </div>
  );
};

export default StrengthIndicator;

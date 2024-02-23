// import { useState } from "react";

// const usePasswordGnerator = () => {
//   const [password, setPassword] = useState("");

//   const generatePassword = (checkboxData, length) => {
//     let charset = "",
//       generatedPassword = "";

//     const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

//     selectedOption.forEach((option) => {
//       switch (option.title) {
//         case "Include Uppercase Letters":
//           charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//           break;
//         case "Include Lowercase Letters":
//           charset += "abcdefghijklmnopqrstuvwxyz";
//           break;
//         case "Include Numbers":
//           charset += "0123456789";
//           break;
//         case "Include Symbols":
//           charset += "!@#$%^&*()";
//           break;
//         default:
//           break;
//       }
//     });
//     for (let i = 0; i < length; i++) {
//       const randomIndex = math.floor(math.random() * charset.length);
//       generatedPassword += charset[randomIndex];
//     }
//     setPassword(generatedPassword);
//   };
//   return { password, generatePassword };
// };

// export default usePasswordGnerator;

import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charset = "",
      generatedPassword = "";

    const selectedOptions = checkboxData.filter((checkbox) => checkbox.state);

    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return { password, generatePassword };
};

export default usePasswordGenerator;

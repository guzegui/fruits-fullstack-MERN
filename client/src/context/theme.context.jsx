import { createContext } from "react";

const ThemeContext = createContext();

// CREATE A WRAPPER COMPONENT
function ThemeProviderWrapper(props) {
  return (
    <ThemeContext.Provider value={"light"}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProviderWrapper }; // <== UPDATE

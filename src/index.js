import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  SignInModal,
} from "./Components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [useShowModal, setUseShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        Toggle Dark Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseShowModal(!useShowModal)}
      >
        Show Modal
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SignInModal
          useShowModal={useShowModal}
          setUseShowModal={setUseShowModal}
        ></SignInModal>
        <PrimaryButton modifiers={["small", "error", "primaryButtonError"]}>
          Hello world
        </PrimaryButton>
        <SecondaryButton modifiers={["large", "warning"]}>
          Goodbye world
        </SecondaryButton>
        <TertiaryButton>Hey world</TertiaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

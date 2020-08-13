import React from "react";
import ReactDOM from "react-dom";
import {PrimaryButton, SecondaryButton, TertiaryButton} from "./buttons";

const App = () => (<div><PrimaryButton>Hello World</PrimaryButton><SecondaryButton>Goodbye Wolrd</SecondaryButton><TertiaryButton>Hey World</TertiaryButton></div>);

ReactDOM.render(<App/>, document.querySelector("#root"));
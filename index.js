import React from "react";
import TestPage from "./test.js";
import { render } from "react-dom";
const App = () => (
<TestPage/>
)

render(<App/>, document.querySelector("#root"))
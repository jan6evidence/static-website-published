import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import Container from "./shared/Container.js";
function InstructionsPage() {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h1", null, "the-archive"), /* @__PURE__ */ React.createElement("p", null, "A work in progress."), /* @__PURE__ */ React.createElement("h2", null, "Suspects"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/suspects"
  }, "Table View")));
}
export default InstructionsPage;

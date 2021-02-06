import React from "../../_snowpack/pkg/react.js";
import {Route, Switch} from "../../_snowpack/pkg/react-router.js";
import InstructionsPage from "./InstructionsPage.js";
import SuspectsApp from "./SuspectsApp.js";
function Routes() {
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    exact: true,
    component: InstructionsPage
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/suspects",
    component: SuspectsApp
  }));
}
export default Routes;

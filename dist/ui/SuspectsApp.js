import suspects from "../../_snowpack/pkg/@jan6evidence/data/suspects.json.proxy.js";
import React from "../../_snowpack/pkg/react.js";
import SuspectsTable from "./SuspectsTable.js";
import {AppWrapper} from "./table-styled-components.js";
const SuspectsApp = () => {
  return /* @__PURE__ */ React.createElement(AppWrapper, null, /* @__PURE__ */ React.createElement("h1", null, "Suspects DB"), /* @__PURE__ */ React.createElement(SuspectsTable, {
    suspects
  }));
};
export default SuspectsApp;

import React from "../../_snowpack/pkg/react.js";
import {TableHead, StickyTH} from "./table-styled-components.js";
const Header = ({spec}) => /* @__PURE__ */ React.createElement(TableHead, null, spec.map((tr, rowNum) => /* @__PURE__ */ React.createElement("tr", {
  key: rowNum
}, tr.map((cellData) => /* @__PURE__ */ React.createElement(StickyTH, {
  rowSpan: cellData.rowSpan || 1,
  colSpan: cellData.colSpan || 1,
  style: {top: `${rowNum * 25}px`},
  key: cellData.title
}, cellData.title)))));
export default Header;

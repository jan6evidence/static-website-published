import React from "../../_snowpack/pkg/react.js";
import Header from "./Header.js";
import Row from "./Row/index.js";
import {TableWrapper, ScrollableTable} from "./table-styled-components.js";
const HEADER_SPEC = [
  [
    {colSpan: 4, title: "Suspect"},
    {colSpan: 4, title: "Law Enforcement"},
    {rowSpan: 2, title: "Summary"}
  ],
  [
    {title: "Image"},
    {title: "Hashtag(s)"},
    {title: "Links"},
    {title: "Tags"},
    {title: "Wanted or Arrest #"},
    {title: "Arrested or publicly ID'd?"},
    {title: "Profile leads"},
    {title: "Date profile sent to FBI"}
  ]
];
const SuspectsTable = ({suspects}) => {
  return /* @__PURE__ */ React.createElement(TableWrapper, {
    "data-toggle": "table"
  }, /* @__PURE__ */ React.createElement(ScrollableTable, null, /* @__PURE__ */ React.createElement(Header, {
    spec: HEADER_SPEC
  }), /* @__PURE__ */ React.createElement("tbody", null, suspects.map((suspect) => /* @__PURE__ */ React.createElement(Row, {
    key: suspect._id,
    data: suspect
  })))));
};
export default SuspectsTable;

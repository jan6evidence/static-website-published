import React from "../../../_snowpack/pkg/react.js";
import {CrimeCategories, CrimeCategory} from "./row-styled-components.js";
const Categories = ({
  id,
  data
}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CrimeCategories, null, data.map((category) => {
    if (category.present) {
      return /* @__PURE__ */ React.createElement(CrimeCategory, {
        key: `${id}-${category.id}`,
        style: {backgroundColor: category.color}
      }, category.name);
    }
    return null;
  })));
};
export default Categories;

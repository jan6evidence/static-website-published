import styled from "../../../_snowpack/pkg/styled-components.js";
import {padding} from "../shared/constants.js";
export const ROW_HEIGHT = 180;
export const CellWrapper = styled.td`
  padding: ${padding.md}px;
  text-align: center;
`;
export const RowWrapper = styled.tr`
  /* border-bottom: 1pt solid #eee;
     display: table;
     table-layout: fixed; */
`;
export const CrimeCategories = styled.ul`
  padding: 0;
`;
export const CrimeCategory = styled.li`
  list-style-type: none;
  background: #eee;
  padding: ${padding.xs}px;
  border-radius: ${padding.sm}px;
  margin-bottom: ${padding.sm}px;
  color: white;
  mix-blend-mode: darken;
`;

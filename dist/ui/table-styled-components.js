import styled from "../../_snowpack/pkg/styled-components.js";
import {colors, padding, widths} from "./shared/constants.js";
export const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const TableWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  background: #fcfcfc;

  overflow: scroll;
`;
const TableStyle = styled.table`
  border-collapse: collapse;
  border-spacing: 0;

  th {
    border: 1px solid ${colors.tableLines};
    padding: 0;
    margin: 0;
  }

  tr {
    border-bottom: 1px solid ${colors.tableLines};
  }
`;
export const ScrollableTable = styled(TableStyle)`
  width: 100%;
`;
export const HeadFloater = styled(TableStyle)`
  position: absolute;
  top: 0;
`;
export const TableHead = styled.thead`
  background: white;
`;
export const StickyTH = styled.th`
  background: black;
  color: white;
  position: sticky;
  border: 0;
`;
export const EvidenceTableWrapper = styled.div`
  margin-left: ${widths.filterbox + padding.sm}px;
`;

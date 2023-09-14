import React, { ComponentProps } from "react";
import TableTemplate from "../shared/table-template";
import PortList from "./port-list";

const PortfolioTable = (props: ComponentProps<"div">) => {
  return (
    <TableTemplate text="Portfolio History">
        <PortList/>
    </TableTemplate>
  );
};

export default PortfolioTable;

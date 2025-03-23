import { SummaryLayout } from "components/ui/summary/SummaryLauout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <SummaryLayout>{children}</SummaryLayout>;
};

export default layout;

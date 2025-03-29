import { SummaryLayout } from "components/ui/summary/SummaryLayout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <SummaryLayout>{children}</SummaryLayout>;
};

export default layout;

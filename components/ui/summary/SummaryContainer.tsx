import { SummaryList } from "components/ui/summary/SummaryList";
import { getAllSummary } from "server/actions";
export const SummaryContainer = async () => {
  const summaries = await getAllSummary();
  return <SummaryList summaries={summaries.summaries} />;
};

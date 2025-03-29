"use client";
import { useRouter } from "next/navigation";
import { Summary } from "server/libs/types/summary";

export const SummaryList = ({ summaries }: { summaries: Summary[] }) => {
  const router = useRouter();
  const onClickSummary = (summary: Summary) => {
    router.push(`/summary/${summary.id}`);
  };
  return (
    <div>
      {summaries.map((summary) => (
        <div key={summary.id} onClick={() => onClickSummary(summary)}>
          {summary.title}
        </div>
      ))}
    </div>
  );
};

import { Summary } from "server/libs/types/summary";

export const SummaryItem = (summary: Summary) => {
  return (
    <div>
      <div>
        <h2>{summary.title}</h2>
      </div>
      <div>
        <p>{summary.tags}</p>
      </div>
    </div>
  );
};

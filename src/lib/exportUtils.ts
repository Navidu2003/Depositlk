export interface ScheduleRow {
  period: string;
  depositAmount: number;
  interestEarned: number;
  totalBalance: number;
}

export function exportToCSV(filename: string, rows: ScheduleRow[]) {
  const headers = ["Period / Milestone", "Principal Deposited (LKR)", "Interest Earned (LKR)", "Total Balance (LKR)"];
  const csvContent = [
    headers.join(","),
    ...rows.map((r) =>
      [
        `"${r.period}"`,
        r.depositAmount.toFixed(2),
        r.interestEarned.toFixed(2),
        r.totalBalance.toFixed(2),
      ].join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
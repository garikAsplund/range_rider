export function checkIfOpen(): boolean {
  const pstDate = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const day = pstDate.getDay();
  const hour = pstDate.getHours();

  return day !== 0 && 
         hour >= 11 && 
         hour < 22;
}
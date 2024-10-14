export function checkIfOpen(): boolean {
  const now = new Date();

  // Get current time in PST/PDT using Intl API on the server
  const pstDate = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const day = pstDate.getDay(); // 0 is Sunday, 1 is Monday, etc.
  const pstHour = pstDate.getHours();
  const pstMinute = pstDate.getMinutes();

  // Check if it's Sunday
  if (day === 0) {
    return false;
  }

  // Check if it's between 11 AM and 10 PM PST/PDT
  const openTime = 11;
  const closeTime = 22;

  if ((pstHour > openTime && pstHour < closeTime) ||
      (pstHour === openTime && pstMinute >= 0) ||
      (pstHour === closeTime && pstMinute === 0)) {
    return true;
  }

  return false;
}

export function checkIfOpen() {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
  
    // Convert current time to PST/PDT
    const pstDate = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
    const pstHour = pstDate.getHours();
    const pstMinute = pstDate.getMinutes();
  
    // Check if it's Sunday (day 0)
    if (day === 0) {
      return false;
    }
  
    // Check if it's between 11 AM and 10 PM PST/PDT
    const openTime = 11;
    const closeTime = 22;
  
    if (pstHour > openTime && pstHour < closeTime) {
      return true;
    } else if (pstHour === openTime && pstMinute >= 0) {
      return true;
    } else if (pstHour === closeTime && pstMinute === 0) {
      return true;
    }
  
    return false;
  }
  
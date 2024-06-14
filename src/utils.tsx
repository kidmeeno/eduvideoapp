export const baseUrl = 'https://take-home-assessment-423502.uc.r.appspot.com/api'


export function formatRelativeTime(timestamp: string): string {
    // Parse the timestamp string into a Date object
    const then = new Date(timestamp);
  
    // Get the current time in milliseconds
    const now = Date.now();
  
    // Calculate the difference in milliseconds
    const delta = now - then.getTime();
  
    // Define seconds in a minute, minutes in an hour, hours in a day, days in a week, weeks in a month, months in a year
    const secondInMs = 1000;
    const minuteInMs = secondInMs * 60;
    const hourInMs = minuteInMs * 60;
    const dayInMs = hourInMs * 24;
    const weekInMs = dayInMs * 7;
    const monthInMs = dayInMs * 30;
    const yearInMs = dayInMs * 365;
  
    // Calculate the corresponding unit based on the delta
    if (delta < minuteInMs) {
      return Math.floor(delta / secondInMs) + " seconds ago";
    } else if (delta < hourInMs) {
      return Math.floor(delta / minuteInMs) + " minutes ago";
    } else if (delta < dayInMs) {
      return Math.floor(delta / hourInMs) + " hours ago";
    } else if (delta < weekInMs) {
      return Math.floor(delta / dayInMs) + " days ago";
    } else if (delta < monthInMs) {
      return Math.floor(delta / weekInMs) + " weeks ago";
    } else if (delta < yearInMs) {
      return Math.floor(delta / monthInMs) + " months ago";
    } else {
      return Math.floor(delta / yearInMs) + " years ago";
    }
  }
  
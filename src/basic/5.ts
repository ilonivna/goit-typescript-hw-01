enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: string): boolean => {
    if (DayOfWeek.Saturday | DayOfWeek.Sunday) {
        return true;
    } else {
        return false;
    }
}


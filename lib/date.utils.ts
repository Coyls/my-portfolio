/**
 * Checks if the current date is after August 31st, 2025
 * @returns {boolean} True if current date is after August 31st, 2025, false otherwise
 */
export const isAfterTargetDate = (targetDateString: string): boolean => {
  const targetDate = new Date(targetDateString);
  const currentDate = new Date();

  return currentDate > targetDate;
};

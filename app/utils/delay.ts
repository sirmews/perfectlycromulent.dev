/**
 * Delay for a given number of milliseconds
 * @param ms - milliseconds
 * @returns 
 */
export default function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
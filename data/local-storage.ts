export type StorageValues = "timeInterval" | "availableCurrency";

// save date to local storage
export const saveToLocalStorage = (name: StorageValues, value: any) => {
  window.localStorage.setItem(name, value);
};
// get data from local storage
export const getFromLocalStorage = (name: StorageValues) => {
  return window.localStorage.getItem(name);
};

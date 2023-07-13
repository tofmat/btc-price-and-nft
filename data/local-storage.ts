export type StorageValues = "timeInterval" | "availableCurrency";

export const saveToLocalStorage = (name: StorageValues, value: any) => {
  window.localStorage.setItem(name, value);
};

export const getFromLocalStorage = (name: StorageValues) => {
  return window.localStorage.getItem(name);
};

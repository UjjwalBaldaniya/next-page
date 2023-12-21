export const ternary = (bool, truthy, falsy) => (bool ? truthy : falsy);

export const equal = (obj1, obj2) => obj1 === obj2;

export const head = (obj) => obj?.[0];

export const last = (obj) => obj?.[length(obj) - 1];

export const length = (obj) => obj?.length;

export const lowerCase = (value) => value?.toLowerCase();

export const entries = (obj) => (obj ? Object.entries(obj) : []);

export const values = (object) => (object ? Object.values(object) : []);

export const keys = (object) => (object ? Object.keys(object) : []);

export const firstLetterCap = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const splitCamelCase = (obj) =>
  obj?.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

export const firstCapAndSplit = (key) => firstLetterCap(splitCamelCase(key));

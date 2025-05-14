type PersistencyData = {
  expirationTime: number;
  key: string;
  value: unknown;
};

export const setPersistency = ({
  expirationTime,
  key,
  value,
}: PersistencyData) => {
  const data = {
    value,
    expiry: new Date().getTime() + expirationTime * 60 * 1000,
  };

  return localStorage.setItem(key, JSON.stringify(data));
};

export const getPersistency = (key: string) => {
  if (typeof window === 'undefined') return null;

  const data = localStorage.getItem(key);
  if (!data) return null;

  try {
    const savedData = JSON.parse(data);

    if (new Date().getTime() > savedData.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return savedData.value;
  } catch (err) {
    return null;
  }
};

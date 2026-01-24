const BASE_URL = "https://ckartisan.com/api";

export const getData = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  return await res.json();
};

export const postData = async (endpoint: string, data: any) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
};
"use server";

export const fetchData = async (page) => {
  const response = await fetch(
    `http://localhost:1572/api/basic-data?pageNo=${parseInt(page)}&pageSize=8`
  );

  const data = await response.json();

  return data;
};

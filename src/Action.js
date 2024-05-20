"use server";

export const fetchData = async (page) => {
  const response = await fetch(
    `https://infinite-backend-xp8t.onrender.com/api/basic-data?pageNo=${parseInt(
      page
    )}&pageSize=8`
  );

  const data = await response.json();

  return data;
};

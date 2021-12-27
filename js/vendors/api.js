export const sendData = async (url = "", data) => {
  const response = await fetch(url, {
    method: "POST",
    body: data && data,
  });

  if (response.ok) {
    return await response.json();
  } else {
    console.error(`Ошибка HTTP: ${response.status}`);
  }
};

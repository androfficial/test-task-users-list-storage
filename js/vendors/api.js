export const sendData = async (url = "", method = "GET", data) => {
  await fetch(url, {
    method,
    body: data && data,
  });
  if (response.ok) {
    return (result = await response.json());
  } else {
    console.error(`Ошибка HTTP: ${response.status}`);
  }
};

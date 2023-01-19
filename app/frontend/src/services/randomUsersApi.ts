export const fetchRandomUsers = async (page: number) => {
  const url = `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  const response = await fetch(url);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.results) : Promise.reject(data);
}

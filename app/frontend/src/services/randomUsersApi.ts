export const fetchRandomUsers = async (page: number) => {
  const results = 100;
  const url = `https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`
  const response = await fetch(url);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.results) : Promise.reject(data);
}

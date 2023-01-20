export const fetchRandomDog = async () => {
  const api = 'https://random.dog/woof.json';
  const response = await fetch(api);
  const { url } = await response.json();
  return url;
}

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=JtEDI9Wmd51oPtfy0MtyJetIFZyJu3Uy&limit=10&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};

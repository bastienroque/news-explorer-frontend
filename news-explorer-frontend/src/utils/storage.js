const STORAGE_KEY = "saved-news";

function getSaved() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function setSaved(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function saveNewsCard(data, keyword) {
  const saved = getSaved();
  const tempData = { ...data, keyword };

  const exists = saved.some((item) => item.url === data.url);
  if (exists) return tempData;

  const updated = [tempData, ...saved];
  setSaved(updated);

  return tempData;
}

export async function removeNewsCard(data, keyword) {
  const saved = getSaved();
  const tempData = { ...data, keyword };

  const updated = saved.filter((item) => item.url !== tempData.url);
  setSaved(updated);

  return tempData;
}

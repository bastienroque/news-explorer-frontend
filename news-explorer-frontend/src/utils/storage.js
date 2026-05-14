function getStorageKey(email) {
  return `saved-news-${email?.toLowerCase() || "guest"}`;
}

function getSaved(email) {
  const key = getStorageKey(email);

  return JSON.parse(localStorage.getItem(key)) || [];
}

function setSaved(data, email) {
  const key = getStorageKey(email);

  localStorage.setItem(key, JSON.stringify(data));
}

export async function saveNewsCard(data, keyword, email) {
  const saved = getSaved(email);

  const tempData = { ...data, keyword };

  const exists = saved.some((item) => item.url === data.url);

  if (exists) return tempData;

  const updated = [tempData, ...saved];

  setSaved(updated, email);

  return tempData;
}

export async function removeNewsCard(data, keyword, email) {
  const saved = getSaved(email);

  const tempData = { ...data, keyword };

  const updated = saved.filter((item) => item.url !== tempData.url);

  setSaved(updated, email);

  return tempData;
}

const userNames = ["Iván", "Laura", "Fernando", "Roberto", "Alma"];

export const getRandomName = () =>
  userNames[Math.floor(Math.random() * userNames.length)];

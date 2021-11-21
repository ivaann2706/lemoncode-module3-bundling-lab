const userNames = ["Iván", "Laura", "Fernando", "Roberto", "Alma"];

export const getRandomName = (): string =>
  userNames[Math.floor(Math.random() * userNames.length)];

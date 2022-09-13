import result from "../app";
import GameSavingLoader from "../GameSavingLoader";

test("Проверка async/await", async () => {
  expect.assertions(1);
  const data = await GameSavingLoader.load();
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  });
});

test("Проверка ошибки", async () => {
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toBe("Error");
  };
});
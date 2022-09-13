import GameSavingLoader from "./GameSavingLoader";
import GameSaving from "./GameSaving";

export default (async () => {
  try {
    const object = await GameSavingLoader.load();
    return new GameSaving(object);
  } catch (e) {
    return e;
  }
})();
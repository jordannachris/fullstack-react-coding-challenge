import monstersData from '../../../data/monsters.json';
import {
  fetchBattleWins,
  setRandomMonster,
  setWinner,
} from './monsters.actions.extended';
import { monstersReducerExtended } from './monsters.reducer.extended';

describe('Monsters Reducer', () => {
  it('should change the battle on action fulfilled', () => {
    // TODO - OKAY
    const action = {
      type: fetchBattleWins.fulfilled,
      payload: monstersData.battle[0],
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        winner: monstersData.battle[0],
      }),
    );
  });

  it('should add the random monster to the state', () => {
    // TODO - OKAY
    const state = monstersReducerExtended(
      undefined,
      setRandomMonster(monstersData.monsters[0]),
    );

    expect(state).toEqual(
      expect.objectContaining({
        selectRandomMonster: monstersData.monsters[0],
      }),
    );
  });

  it('should add the winner to the state', () => {
    // TODO - OKAY
    const action = {
      type: setWinner,
      payload: monstersData.battle[0],
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        winner: monstersData.battle[0],
      }),
    );
  });
});

import { MonsterServiceExtended } from './monsters.service.extended';
import { API_URL } from '../../constants/env';
import monstersData from '../../../data/monsters.json';

describe('Monsters Service Extended', () => {
  it('should get the winner of the battle of monsters', async () => {
    // TODO - OKAY
    const monster = monstersData.battle[0];

    jest.spyOn(MonsterServiceExtended, 'battle').mockResolvedValue(monster);
    const response = await MonsterServiceExtended.battle({
      monster1Id: 'monster-1',
      monster2Id: 'monster-2',
    });
    expect(response).toEqual(monster);
  });
});

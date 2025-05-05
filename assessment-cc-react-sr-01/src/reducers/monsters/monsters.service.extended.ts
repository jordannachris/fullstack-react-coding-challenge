import { API_URL } from '../../constants/env';
import { Battle, Players } from '../../models/interfaces/battle.interface';

const battle = async (battleMonsters: Players): Promise<Battle> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(battleMonsters),
  }).then(response => response.json());

export const MonsterServiceExtended = {
  battle,
};

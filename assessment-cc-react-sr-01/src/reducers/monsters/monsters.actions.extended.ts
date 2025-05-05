import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterServiceExtended } from './monsters.service.extended';
import { Battle, Players } from '../../models/interfaces/battle.interface';

export const fetchBattleWins = createAsyncThunk<Battle, Players>(
  'monsters/fetchBattleWins',
  MonsterServiceExtended.battle,
);

export const setRandomMonster = createAction<Monster | null>(
  'monsters/setRandomMonster',
);

export const setWinner = createAction<Battle | null>('monsters/setWinner');

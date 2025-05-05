import React, { useCallback } from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard.extended';
import { MonstersList } from '../../components/monsters-list/MonstersList.extended';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.extended.styled';
import {
  monsterWins,
  selectRandomMonster,
} from '../../reducers/monsters/monsters.selectors.extended';
import {
  fetchBattleWins,
  setRandomMonster,
} from '../../reducers/monsters/monsters.actions.extended';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay.extended';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster); // ---> PLAYER'S MONSTER
  const computerMonster = useSelector(selectRandomMonster); // ---> COMPUTER'S MONSTER
  const winnerMonster = useSelector(monsterWins);

  const handleComputerMonster = useCallback(() => {
    if (selectedMonster) {
      const monstersAllowed = monsters.filter(
        monster => monster.id !== selectedMonster?.id,
      );
      const randomIndex = Math.floor(Math.random() * monstersAllowed.length);
      const randomComputerMonster = monstersAllowed[randomIndex];

      dispatch(setRandomMonster(randomComputerMonster));
    }
  }, [dispatch, selectedMonster, monsters]);

  useEffect(() => {
    handleComputerMonster();
  }, [handleComputerMonster]);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleStartBattleClick = () => {
    // Fight!
    if (selectedMonster && computerMonster) {
      dispatch(
        fetchBattleWins({
          monster1Id: selectedMonster.id,
          monster2Id: computerMonster.id,
        }),
      );
    }
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {winnerMonster && <WinnerDisplay text={winnerMonster.winner.name} />}

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={computerMonster?.name || 'Computer'}
          monster={computerMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };

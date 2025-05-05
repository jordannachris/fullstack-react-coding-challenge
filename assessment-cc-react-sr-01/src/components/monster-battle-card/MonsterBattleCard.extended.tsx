import React from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  CardDivider,
  MonsterImage,
  ProgressBar,
  ProgressBarTitle,
} from './MonsterBattleCard.extended.styled';
import { MonsterService } from '../../reducers/monsters/monsters.service';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
  statName?: string;
  statValue?: number;
};

const MonsterProgressBar: React.FC<MonsterCardProps> = ({
  statName,
  statValue,
}) => {
  return (
    <>
      <ProgressBarTitle>{statName}</ProgressBarTitle>
      <ProgressBar value={statValue} variant="determinate" />
    </>
  );
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <>
      {monster ? (
        <BattleMonsterCard>
          <MonsterImage
            src={monster.imageUrl}
            alt={monster.name}
            data-testid={`img-${monster.id}`}
          />
          <BattleMonsterTitle small>{title}</BattleMonsterTitle>
          <CardDivider />

          <MonsterProgressBar statName={'HP'} statValue={monster.hp} />
          <MonsterProgressBar statName={'Attack'} statValue={monster.attack} />
          <MonsterProgressBar
            statName={'Defense'}
            statValue={monster?.defense}
          />
          <MonsterProgressBar statName={'Speed'} statValue={monster.speed} />
        </BattleMonsterCard>
      ) : (
        <BattleMonsterCard centralized>
          <BattleMonsterTitle>{title}</BattleMonsterTitle>
        </BattleMonsterCard>
      )}
    </>
  );
};

export { MonsterBattleCard };

import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { MonsterBattleCard } from './MonsterBattleCard.extended';

import monstersData from '../../../data/monsters.json';

describe('MonsterBattleCardExtended', () => {
  it('renders the monster card correctly with a monster', () => {
    // TODO - OKAY
    const monster = monstersData.monsters[0];
    render(<MonsterBattleCard title={monster.name} monster={monster} />);

    expect(screen.getByTestId(`img-${monster.id}`)).toBeInTheDocument();

    expect(screen.getByText(monster.name)).toBeInTheDocument();
    expect(screen.getByText('HP')).toBeInTheDocument();
    expect(screen.getByText('Attack')).toBeInTheDocument();
    expect(screen.getByText('Defense')).toBeInTheDocument();
    expect(screen.getByText('Speed')).toBeInTheDocument();
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WinnerDisplay } from './WinnerDisplay.extended';
import monstersData from '../../../data/monsters.json';

describe('WinnerDisplayExtended', () => {
  it('renders the winner text correctly', () => {
    // TODO - OKAY
    const winnerMonster = monstersData.battle[0].winner;

    render(<WinnerDisplay text={winnerMonster.name} />);

    expect(screen.getByText(`${winnerMonster.name} wins!`)).toBeInTheDocument();
  });
});

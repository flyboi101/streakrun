import React from 'react';
import styled from 'styled-components';
import { SlideSection } from '../../components/Slider';
import { GAMES } from '../../games';
import { GameCard } from './GameCard';
import { WelcomeBanner } from './WelcomeBanner';
import { Sidebar } from './sidebar'; // Make sure to import the Sidebar

const MainContent = styled.div`
  margin-left: 50px; /* Adjust this value to match the sidebar's width */
  padding: 1rem;
  width: 100%;
  max-width: 1200px; /* Max width set to 1200px */
  margin: 0 auto; /* Center align the content */
`;

export function GameSlider() {
  return (
    <SlideSection>
      {GAMES.map((game) => (
        <div key={game.id} style={{ width: '240px', display: 'flex' }}> {/* Increased the width */}
          <GameCard game={game} />
        </div>
      ))}
    </SlideSection>
  );
}

const Grid = styled.div`
  display: grid;
  gap: 2rem; /* Increased the gap */
  grid-template-columns: repeat(4, 1fr); /* Fixed 4 columns */
`;

export function GameGrid() {
  return (
    <Grid>
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
}

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <MainContent>
        <WelcomeBanner />
        <h2 style={{ textAlign: 'center' }}>Games</h2>
        <GameGrid />
      </MainContent>
    </>
  );
}

import { GameBundle } from 'gamba-react-ui-v2'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const tileAnimation = keyframes`
  0% {
    background-position: -100px 100px;
  }
  100% {
    background-position: 100px -100px;
  }
`

const StyledGameCard = styled(NavLink)<{ $background: string }>`
  width: 100%;
  aspect-ratio: 1 / 1.5; /* Fixed aspect ratio */
  background-size: cover;
  color: white;
  text-decoration: none;
  font-size: 24px;
  transition: transform .2s ease;
  border: none; /* Remove any border if present */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin if not needed, otherwise adjust as needed */

  position: relative;
  background: ${(props) => props.$background};
  max-height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  background-size: 100% auto;
  background-position: center;
  font-weight: bold;

  & > .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(.9);
    transition: transform .2s ease;
  }

  &:hover {
    transform: scale(1.01);
    .image {
      transform: scale(1);
    }

    .background {
      opacity: .35;
    }
  }

  .play {
    font-size: 14px;
    border-radius: 5px;
    padding: 5px 10px;
    background: #00000066;
    position: absolute;
    right: 5px;
    bottom: 5px;
    opacity: 0;
    text-transform: uppercase;
    backdrop-filter: blur(20px);
  }
  
  &:hover .play {
    opacity: 1;
  }
  
  &:hover {
    outline: #9564ff33 solid 5px;
    outline-offset: 0px;
  }
`

export function GameCard({ game }: { game: GameBundle }) {
  const small = useLocation().pathname !== '/'
  return (
    <StyledGameCard
      to={'/' + game.id}
      $background={game.meta?.background}
    >
      <div className="background" />
      <div className="image" style={{ backgroundImage: `url(${game.meta.image})` }} />
      <div className="play">Play {game.meta.name}</div>
    </StyledGameCard>
  )
}

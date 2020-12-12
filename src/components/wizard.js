import React, { useState } from 'react'
// import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import InlineCard from './inlineCard'

import styled from 'styled-components'

const links = [
  {
    name: 'Developers',
    sublinks: [
      {
        title: 'Keeper Introduction',
        link: 'https://docs.keeper.finance/',
        description: 'Keeper Finance is a decentralized finance protocol that is inspired by job matching protocol Keep2r which is DeFi version 3.0.',
      },
      {
        title: 'Keeper Jobs',
        link: 'https://docs.keeper.finance/jobs',
        description: 'Jobs can be created directly via governance or by submitting a job proposal to governance automatically via adding liquidity.',
      },
      {
        title: 'Keeper Governance',
        link: 'https://docs.keeper.finance/governance',
        description: 'Keeper governance by design has a low overhead, it is not meant to be protocol intensive.',
      },
      {
        title: 'Keeper Registry',
        link: 'https://docs.keeper.finance/registry',
        description: 'Keeper Finance app running core, governance jobs contract addresses.',
      }
    ]
  },
  {
    name: 'Traders',
    sublinks: [
      {
        title: 'Using the interface',
        link: '/',
        description: 'The comprehensive web app user guide.',
        tag: 'tutorial'
      },
      {
        title: 'Glossary',
        link: '/',
        description: 'An overview of the terms used in these docs and on the interface',
        tag: 'reference'
      },
      {
        title: 'Understanding prices',
        link: '/',
        description: 'How the interface calculates prices for swaps.',
        tag: 'guide'
      }
    ]
  },
  {
    name: 'Liquidity',
    sublinks: [
      {
        title: 'Anatomy of a Keeper Finance Pool',
        link: '/',
        description: 'An overview of what a Keeper Finance liquidity pool.'
      },
      {
        title: 'Understanding Liquidity Returns',
        link: '/',
        description: 'Udnerstand the economics of your returns.'
      }
    ]
  },
  {
    name: 'Tokens',
    sublinks: [
      {
        title: 'Core Concepts',
        link: '/',
        description: 'A high level technical overview of the Keeper Finance protocol.'
      }
    ]
  }
]

const StyledWizard = styled.div`
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  width: 100%;
  max-width: 900px;
  /* border: 1px solid ${({ theme }) => theme.colors.grey2}; */
  border-radius: 20px;
  /* overflow: hidden; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 960px) {
    width: 100%;
    max-width: 450px;
    margin: 1rem 0;
    /* height: ${({ small }) => !small && '200px'}; */
    /* height: 200px; */
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* padding: 1.5rem; */
  /* overflow-x: scroll;
  overflow-y: visible;
  *::-webkit-scrollbar {
    display: none;
  } */
`

const Wizard = () => {
  const [currentCategory] = useState('Developers')

  return (
    <StyledWizard>
      <CardWrapper>
        {links
          .filter(category => {
            return category.name === currentCategory
          })
          .map(category => {
            return category.sublinks.map((sublink, i) => {
              return (
                <InlineCard
                  key={i}
                  title={sublink.title}
                  desc={sublink.description}
                  to={sublink.link}
                  tag={sublink.tag}
                  icon={sublink.icon}
                />
              )
            })
          })}
      </CardWrapper>
    </StyledWizard>
  )
}

export default Wizard

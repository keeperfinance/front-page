import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../layouts'
import SEO from '../../components/seo'
import Ticker from '../../components/ticker'
import BG from '../../components/bg'
import { Button } from '../../components/button'
import Kfi from '../../images/logos/kfi.png'
import Discord from '../../images/discord.inline.svg'
import IConnect from '../../images/icons/connect.svg'
import IAdd from '../../images/icons/add.svg'
import IEarn from '../../images/icons/earn.svg'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  margin: 5rem 0 0 0;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
  }
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 64px;
  margin: 0.5rem 0 0.5rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 600;
  text-align: center;
  font-family: 'Teko', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 4rem;
    line-height: 4.5rem;
    margin: 0.5rem 0 0.5rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
    font-weight: 400;
  }
`

const StyledBodyTitle2 = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 48px;
  margin: 0.5rem 0 0.5rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Teko', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 0.5rem 0 0.5rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 1rem 0 1rem 0;
    font-weight: 400;
  }
`

const StyledBodyTitle3 = styled.h2`
  color: ${({ theme }) => theme.colors.link};
  font-size: 30px;
  margin: 0.5rem 0 1rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Teko', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.5rem 0 0.5rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
    font-weight: 400;
  }
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* max-width: 650px; */
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    max-width: 450px;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO
        title="KeeperFi KFI Pre Sale is Live | Keeper Finance"
        path={props.location.pathname}
        description={'KeeperFi KFI Pre Sale is Live, Keeper Finance Tokens Sale is Ongoing, Join Keeper Network KFI Token Sales'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>KeeperFi (KFI) Pre Sale is Live</StyledBodyTitle>
          <StyledBodyTitle2>The Most Advanced DeFi v3.0 Keeper.Finance is Supported by <a href="https://news.bitcoin.com/keeper-finance-defi-version-3-0-a-unique-job-matching-defi-protocol-public-pre-sale-starts/"><b>Bitcoin.com</b></a></StyledBodyTitle2>
          <span>
            <Button href="https://app.bounce.finance/fixed-swap/4851" target="_blank" rel="noopener noreferrer">Join the KFI Pre-Sale</Button>
          </span>
        </StyledTitle>
        <SummarySection data={data} />
        <DeveloperSection data={data} />
      </StyledBody>
    </Layout>
  )
}

export default IndexPage

const StyledSectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Teko', 'Inferi Normal', 'Times New Roman', serif;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
  }
`
const ColT = styled.div`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  @media screen and (max-width: 900px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
`

const CardFull = styled.div`
  margin: 20px;
  padding: 20px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  height: 100%;
  width: 100%;
    margin-right: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.05), 0px 4px 8px rgba(0,0,0,0.05), 0px 16px 24px rgba(0,0,0,0.05), 0px 24px 32px rgba(0,0,0,0.05);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
    will-change: transform;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    margin: 0;
      }
`

const RowLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-left: 10%;
  margin-right: 10%;
  width: 100%;
  @media screen and (max-width: 960px) {
    margin: 0;
      }
`

const SummarySection = props => {
  return (
    <StyledSectionFlex>
    <RowLeft>
        <CardFull>
        <h2>
          <p><img src={Kfi} alt="KFI Logo" height="150"/></p>
          <p><b>Name:</b> KeeperFi</p>
          <p><b>Ticker:</b> KFI</p>
          <p><b>Decimal:</b> 18</p>
          <p><b>Supply:</b> 2M</p>
          <p><b>Contract:</b> <a href="https://etherscan.io/token/0x4e59DFe7c5D34C498Cfe18f0b6dB10941d6E1A8a" target="_blank" rel="noopener noreferrer">0x4e59DFe7c5D34C498Cfe18f0b6dB10941d6E1A8a</a></p>
          <p><b>Team allocation:</b> 5%</p>
          <Button href="https://app.bounce.finance/fixed-swap/4851" target="_blank" rel="noopener noreferrer"><b>Join Now</b></Button>
        </h2>
      </CardFull>
      <CardFull>
      <h1>
        <b> KeeperFi (KFI)</b> Token Tokenomics
      </h1>
      <p><b>Total Supply:</b> 2,000,000 KFI</p>
      <p><b>Presale:</b>  65% KFI </p>
      <p><b>Liquidity Pool:</b>  10% KFI</p>
      <p><b>Development:</b>  10% KFI</p>
      <p><b>Marketing & Promotion:</b>  10% KFI</p>
      <p><b>Team:</b> 5% KFI (Locked for 6 month)</p>
      <h2><Button href="https://app.bounce.finance/fixed-swap/4851" target="_blank" rel="noopener noreferrer"><b>Join the KFI Pre Sale</b></Button></h2>
      </CardFull>
    </RowLeft>
    </StyledSectionFlex>
  )
}

const DeveloperSection = () => {
  return (
    <>
      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
      <StyledSectionTitle>Keeper Finance dApp is Live!
       <p>
          <span>
          <Button href="https://app.keeper.finance/" target="_blank" rel="noopener noreferrer">Use DeFi v3 Keeper dApp</Button>
          </span></p>
     </StyledSectionTitle>
     <Row>
       <ColT>
             <img src={IConnect} alt="Connect" height="64"/>
             <h1>Connect Wallet</h1>
             <Button href="https://app.keeper.finance/" rel="noopener noreferrer"><b>Connect</b></Button>
             <p>
             Connect to a wallet (e.g. MetaMask)
             </p>
       </ColT>
       <ColT>
             <img src={IAdd} alt="Add" height="64"/>
             <h1>Add Bond</h1>
             <Button href="https://app.keeper.finance/kfi" rel="noopener noreferrer"><b>Add</b></Button>
             <p>
               Add tokens bond
             </p>
       </ColT>
       <ColT>
             <img src={IEarn} alt="Earn" height="64"/>
             <h1>Start Jobs</h1>
             <Button href="https://app.keeper.finance/" rel="noopener noreferrer"><b>Start</b></Button>
             <p>
               Claim reward from job list
             </p>
       </ColT>
     </Row>
      </StyledSectionFlex>
    </>
  )
}

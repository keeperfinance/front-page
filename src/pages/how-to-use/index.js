import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../layouts'
import SEO from '../../components/seo'
//import Ticker from '../../components/ticker'
import BG from '../../components/bg'
import { Button } from '../../components/button'
import IConnect from '../../images/icons/connect.svg'
import IAdd from '../../images/icons/add.svg'
import IEarn from '../../images/icons/earn.svg'
import Reg from '../../images/register-the-bond.png'
import Pending from '../../images/bonds-pending.png'
import Activate from '../../images/activate-bonds.png'
import Jobs from '../../images/jobs-running.png'
import Work from '../../images/start-the-work.png'

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

const StyledSectionFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
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
        title="How to use the Keeper Network"
        path={props.location.pathname}
        description={'How to use the Keeper Network, What is the Keeper Finance, Keepers, Bonds, Jobs'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>How to use Keeper Finance</StyledBodyTitle>
          <StyledBodyTitle2>The Most Advanced DeFi v3.0 is Keeper.Finance</StyledBodyTitle2>
        </StyledTitle>
        <AppSection data={data} />
        <SummarySection data={data} />
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

const SummarySection = () => {
  return (
    <StyledSectionFlex>
    <RowLeft>
      <CardFull>
        <h2>
          <p><b>What is Keeper Finance?</b></p>
        </h2>
        <p>Keeper Finance is a decentralized finance protocol that is inspired by job matching protocol Keep2r which is DeFi version 3.0.
        It is designed to be a lite version of Keep2r and is a more flexible and profitable protocol. Keeper Finance offers a decentralized platform that connects developers with projects teams to execute jobs.
        Keeper Finance uses a unique mechanism that ensures that jobs are executed and job takers are rewarded promptly within its blockchain ecosystem.
        To achieve this, Keeper Finance uses a job matching concept whereby job takers called Keepers register for jobs.
        These contracts (jobs) are designed to be executed by keepers and once registered can be acted upon by keepers on the Keeper Finance blockchain.</p>
      </CardFull>
      <CardFull>
        <h2>
          <p><b>How Does Keeper Finance Work?</b></p>
        </h2>
        <p>Keeper Finance is fully decentralized and members are involved in the creation and execution of smart contracts (Jobs).
        All that is required for a worker is to register as a keeper and the process can only be performed by bonding KFI tokens.
        The bonding process takes 24 hours after which a registered user is activated as a keeper. Once this process is completed a timestamp is registered on the Keeper Finance blockchain network.
        Creating jobs is flexible and easy to perform on the Keeper Finance. There are two different methods with the first via the Keeper Finance contract.
        This enables a job owner to register a job after which a pending governance vote is placed for the job specified by the address in the function arguments.
        Keeper Finance users also have a limit for a job request every 13 days when using a specific address. The second method is via governance whereby a proposal is submitted and includes the contract as a job.
        If governance is approve the smart contract registers as a job that can be executed by keepers. Payments are made by using the utility native token KFI which can be converted to other
        ERC-20 tokens on popular Dex like Uniswap</p>
      </CardFull>
      <CardFull>
        <h2>
          <p><b>How to use Keeper Finance</b></p>
        </h2>
        <p>1. Register the Bond</p>
        <p>2. Bonds Pending</p>
        <p>3. Activate Bonds</p>
        <p>4. Your Jobs Running</p>
        <p>5. Start the Work</p>
      </CardFull>
      <CardFull>
        <h3>
          <p><b>1. Register the Bond</b></p>
        </h3>
        <p>Connect a wallet (KFI Holding Wallet). Register the bond with your KFI Token.</p>
        <p><img src={Reg} alt="Register the Bond" /></p>
      </CardFull>
      <CardFull>
        <h3>
          <p><b>2. Bonds Pending</b></p>
        </h3>
        <p>Your bond activation need 24 hours. After 24 hours open activate bonds button.</p>
        <p><img src={Pending} alt="Bonds Pending" /></p>
        <p>After the bonding period of 3 days you will be able to select activate.</p>
      </CardFull>
      <CardFull>
        <h3>
          <p><b>3. Activate Bonds</b></p>
        </h3>
        <p>After 24 hours complete your activate bonds button is open. Click Activate Bonds.</p>
        <p><img src={Activate} alt="Activate Bonds" /></p>
        <p>Select the Jobs from KP2R Network jobs list.</p>
      </CardFull>
      <CardFull>
        <h3>
          <p><b>4. Your Jobs Running</b></p>
        </h3>
        <p>Your Keeper.Finance keeper jobs are running. You are a Keeper.</p>
        <p><img src={Jobs} alt="Your Jobs Running" /></p>
        <p>You can view current available jobs, for now 3 Jobs is available, however more will be added.</p>
      </CardFull>
      <CardFull>
        <h3>
          <p><b>5. Start the Work</b></p>
        </h3>
        <p><img src={Work} alt="Start the Work" /></p>
        <p>As a simple keeper, you only need to call work and you will receive KFI.</p>
        <p>For details on registering a job or additional information please visit the documentation. <a href="https://docs.keeper.finance">https://docs.keeper.finance</a></p>
      </CardFull>
    </RowLeft>
    </StyledSectionFlex>
  )
}

const AppSection = () => {
  return (
    <>
      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
      <StyledSectionTitle>
       <p>
          <span>
          <Button href="https://app.keeper.finance/" target="_blank" rel="noopener noreferrer">Join a Keeper</Button>
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

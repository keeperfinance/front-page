import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import { TrendingUp, Box, Upload, Layers, Star } from 'react-feather'
import 'react-vertical-timeline-component/style.min.css'
//import Ticker from '../components/ticker'
import BG from '../components/bg'
//import MiniCard from '../components/minicard'
import Wizard from '../components/wizard'
import { Button } from '../components/button'
//import Discord from '../images/discord.inline.svg'
import IConnect from '../images/icons/connect.svg'
import IAdd from '../images/icons/add.svg'
import IEarn from '../images/icons/earn.svg'
import Digifinex from '../images/exchanges/dgfinex.png'
import Hotbit from '../images/exchanges/hotbit.png'
import Inch from '../images/exchanges/1inch.png'
import Uniswap from '../images/exchanges/uniswap.png'
import Bitcoin from '../images/partners/bitcoincom.png'
import Btcm from '../images/partners/btcmanager.png'
import Bitcoinist from '../images/partners/bitcoinist.png'
import Ambc from '../images/partners/ambcrypto.png'
import Coincodex from '../images/partners/cc.png'
import Newsbtc from '../images/partners/newsbtc.png'

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
  margin: 5rem 0 5rem 0;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
  }
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 112px;
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
  font-size: 24px;
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

const StyledUnicornImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 450px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
  }
`

const StyledSectionFlex = styled.div`
  padding: 2rem 0;
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
      unicornImage: file(relativePath: { eq: "keeper-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      swap: file(relativePath: { eq: "swap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info: file(relativePath: { eq: "dex.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coinex: file(relativePath: { eq: "coinex.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socks: file(relativePath: { eq: "info.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO
        title="KeeperFi KFI - DeFi v3 Keeper Network"
        path={props.location.pathname}
        description={'KeeperFi is An Advanced DeFi Keeper Network, Keeper Finance is Working on Decentralized Keeper Network System, Bonds, Jobs, Vote, KFI Keep2r Lite'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle2>DeFi v3</StyledBodyTitle2>
          <StyledBodyTitle>Keeper.Finance</StyledBodyTitle>
          <StyledBodyTitle2>An Advanced DeFi Keeper Network</StyledBodyTitle2>
          <StyledBodyTitle3>Keeper Finance is a decentralized finance protocol that is inspired by job matching protocol Keep2r which is DeFi version 3.0.
          It is designed to be a lite version of Keep2r and is a more flexible and profitable protocol.</StyledBodyTitle3>
          <span>
            <Button href="https://app.keeper.finance/" rel="noopener noreferrer">Keeper App</Button>
            <Button href="https://swap.keeper.finance/" rel="noopener noreferrer">Keeper Swap</Button>
            <Button href="https://gov.keeper.finance/" rel="noopener noreferrer">Keeper Gov</Button>
            <Button href="https://feed.keeper.finance/" rel="noopener noreferrer">Keeper Feed</Button>
          </span>
        </StyledTitle>
        <SummarySection data={data} />
        <DeveloperSection data={data} />
        <GoalSection />
      </StyledBody>
    </Layout>
  )
}

export default IndexPage

const StyledImgSection = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 1rem 3rem;
  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
    p {
      max-width: 450px;
    }
    h1 {
      max-width: 450px;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 450px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const MiniNewInfo = styled(Link)`
  transform: rotate(4deg) scale(0.98);
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
  height: 500px;

  transition: transform 0.3s ease;
  will-change: transform;
  :hover {
    transform: rotate(-2deg);
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    position: relative;
    max-width: 475px;
    width: 100%;
    height: 100%;
    margin: 4rem 0;
  }
`

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
const ColS = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  @media screen and (max-width: 900px) {
      flex: 0 0 100%;
      max-width: 100%;
      }
`

const Card = styled.div`
  margin: 10px;
  padding: 10px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  height: 180px;
    max-width: 100%;
    min-width: 45%;
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
    transition: transform 0.3s ease;
    will-change: transform;
    @media screen and (max-width: 960px) {
      margin: 0;
      flex-direction: column;
        }
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
      <StyledImgSection>
        <MiniNewInfo to="/blog/">
          <StyledUnicornImage fadeIn={false} fluid={props.data.unicornImage.childImageSharp.fluid} />
        </MiniNewInfo>
      </StyledImgSection>
      <StyledImgSection>
        <h1>
          <b>Keeper Finance</b> offers a decentralized platform that connects developers with project teams to execute jobs.
        </h1>

        <p>
          Keeper Finance uses a unique mechanism that ensures that jobs are executed and job takers are rewarded promptly within its blockchain ecosystem.
        </p>

        <p>
          To achieve this, Keeper Finance uses a job matching concept whereby job takers called Keepers register for jobs.
          These contracts (jobs) are designed to be executed by keepers and once registered can be acted upon by keepers on the Keeper Finance blockchain.
        </p>

        <Button as={Link} outlined to="https://docs.keeper.finance/">
          Read more
        </Button>
         <span>
          <Button href="https://app.keeper.finance/" rel="noopener noreferrer">Use Keeper Finance App</Button>
          </span>
      </StyledImgSection>
    </StyledSectionFlex>
  )
}

const DeveloperSection = () => {
  return (
    <>
    <StyledSectionFlex>
    <RowLeft style={{ textAlign: 'center', width: '600px'}}>
    <CardFull>
    <ColS>
      <h1>
        <b>KeeperFi (KFI) IEO </b>
      </h1>
      <p>A high performance keeper network</p>
    </ColS>
    <ColS>
      <Button href="/" rel="noopener noreferrer"><b>Soon</b></Button>
      <br />
    </ColS>
    </CardFull>
    </RowLeft>
    </StyledSectionFlex>
      <StyledSectionTitle>Build with Keeper
       <p>
          <span>
          <Button href="https://app.keeper.finance/" rel="noopener noreferrer">Use Keeper Finance Build Future</Button>
          </span></p>
     </StyledSectionTitle>

      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
        <Wizard />
          <StyledSectionTitle style={{ paddingBottom: '0.2rem', paddingTop: '1rem', textAlign: 'center', width: '100%'}}>Connect with Keeper
          </StyledSectionTitle>
        <Row>
          <ColT>
                <img src={IConnect} alt="Connect" height="64"/>
                <h1>Connect a Wallet</h1>
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
          <Row>
            <ColT>
              <Card>
                <h1>
                  <b>Secure</b>
                </h1>
                  <p>
                  Keeper Finance is multiple and incremental security.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>Decentralized Finance</b>
                </h1>
                  <p>
                    DeFi is also called Open Finance. It is unlimited perform platform.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>Fast & Speed</b>
                </h1>
                  <p>
                    Keeper Finance app is light weight design, so it is called as keeper lite.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>No Risk</b>
                </h1>
                  <p>
                    Keeper jobs KFI tokens are stored cold wallet and save your time.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>Earnings</b>
                </h1>
                  <p>
                    Do not make any effort. Easy to make money with Keeper Finance.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>Smart Contract</b>
                </h1>
                  <p>
                    Keeper Finance app is controlled by smart contracts.
                  </p>
              </Card>
            </ColT>
          </Row>
           <span>
          <Button href="https://app.keeper.finance/" rel="noopener noreferrer">Use Keeper Finance</Button>
          </span>
      </StyledSectionFlex>
    </>
  )
}


const StyledGoal = styled.div`
  color: ${({ theme }) => theme.colors.link};
  border-radius: 6rem;
  p {
    line-height: 155%;
    margin-bottom: 6rem;
    padding-bottom: 20px;
    border-top: 2rem;
    border-color: grey;
  }
  @media (max-width: 960px) {
    margin-top: 6rem;
    p {
      max-width: 100%;
    }
  }
`

const GoalSection = () => {
  return (
    <StyledSectionFlex>
      <Row>
    <StyledGoal style={{ width: '100%', paddingBottom: '10px' }}>
      <h1>Our Exchange Partners</h1>

    </StyledGoal>

        <ColT>
          <img src={Digifinex} alt="Digifinex" height="48"/>
        </ColT>
        <ColT>
          <img src={Hotbit} alt="Hotbit" height="48"/>
        </ColT>
        <ColT>
          <img src={Inch} alt="1inch" height="48"/>
        </ColT>
        <ColT>
          <img src={Uniswap} alt="Uniswap" height="48"/>
        </ColT>
      </Row>

      <Row>
      <StyledGoal style={{ width: '100%', paddingBottom: '10px' }}>
        <h1>Our Media Partners</h1>

      </StyledGoal>
      <ColT>
        <img src={Bitcoin} alt="Bitcoin" height="36"/>
      </ColT>
      <ColT>
        <img src={Btcm} alt="Btcm" height="42"/>
      </ColT>
      <ColT>
        <img src={Bitcoinist} alt="Bitcoinist" height="42"/>
      </ColT>
      <ColT>
        <img src={Ambc} alt="AMBCrypto" height="32"/>
      </ColT>
      <ColT>
        <img src={Coincodex} alt="CoinCodex" height="42"/>
      </ColT>
      <ColT>
        <img src={Newsbtc} alt="NewsBTC" height="42"/>
      </ColT>
    </Row>
    <Row>
    <StyledGoal style={{ width: '100%', paddingBottom: '10px' }}>
       <h1>Roadmap</h1>
       <br />
      </StyledGoal>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(38 123 238)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(38 123 238)' }}
            date="2020 Q4"
            iconStyle={{ background: 'rgba(38 123 238)', color: '#fff' }}
            icon={<TrendingUp />}
          >
            <h3 className="vertical-timeline-element-title">Development</h3>
              <p>
                Planning and development
              </p>
              <p>
                Deployed keeper finance app
              </p>
              <p>
                KFI presale starts
              </p>
              <p>
                Marketing campaign
              </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(38 123 238)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(38 123 238)' }}
            date="2021 Q1"
            iconStyle={{ background: 'rgba(38 123 238)', color: '#fff' }}
            icon={<Box />}
          >
            <h3 className="vertical-timeline-element-title">Deployment</h3>
              <p>
                Deploy scaling chainlink
              </p>
              <p>
                Deploy more jobs
              </p>
              <p>
                Listing on top exchanges
              </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(38 123 238)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(38 123 238)' }}
            date="2021 Q2"
            iconStyle={{ background: 'rgba(38 123 238)', color: '#fff' }}
            icon={<Upload />}
          >
            <h3 className="vertical-timeline-element-title">Upgradement</h3>
              <p>
                Keeperfi app upgrade
              </p>
              <p>
                Second marketing campaign
              </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(38 123 238)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(38 123 238)' }}
            date="2021 Q3"
            iconStyle={{ background: 'rgba(38 123 238)', color: '#fff' }}
            icon={<Layers />}
          >
            <h3 className="vertical-timeline-element-title">New Platform</h3>
              <p>
                Launch new version app
              </p>
              <p>
                Development of borrowing, lending
              </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: 'rgba(8 165 150)', color: '#fff' }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </Row>
    </StyledSectionFlex>
  )
}

import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Wordmark from '../images/wordmark.inline.svg'
// import { ThemeManagerContext } from '../styles/themeManager'
import LogoGDPR from '../images/logos/gdpr.jpg'
import LogoEUGDPR from '../images/logos/eu-gdpr.jpg'

function Dropdown(props) {
  const items = props.links.map(node => {
    const title = node.name
    return (
      <StyledFooterLink key={node.name}>
        {node.link.split('.').slice(-1)[0] === 'pdf' ? (
          <a href={node.link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : node.link.split('/')[0] === '' ? (
          <Link to={node.link}>{title}</Link>
        ) : (
          <a href={node.link}>{title}</a>
        )}
      </StyledFooterLink>
    )
  })
  return <StyledFooterLinkSection>{items}</StyledFooterLinkSection>
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.footText};
  position: relative;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.footBg};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.footLink};
  }
  @media (max-width: 960px) {
    margin-bottom: 2rem;
    flex-direction: column;
    padding: 1rem;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 40px;
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0em;
  }
`
const StyledSectionDis = styled.section`
  fontSize: 12px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0em;
  }
`

const StyledFooterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  @media (max-width: 960px) {
    padding-left: 0rem;
    margin-bottom: 0rem;
  }
`

const StyledFooterSectionNav = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding-left: 5rem;
  @media (max-width: 960px) {
    padding-left: 0rem;
    margin-bottom: 0rem;
  }
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`
const GridDiv = styled.ul`
  display: grid;
`

const StyledFooterLink = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-decoration: none;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.footLink};
  }
  :hover {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.footLink};
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          repository
          menulinks {
            name
            sublinks {
              description
              name
              link
            }
          }
          title
        }
      }
    }
  `)

  // const themeContext = useContext(ThemeManagerContext)

  return (
    <StyledFooter>
      <GridDiv>
      <StyledSection>
      <StyledFooterSection>
        <EmailSection />
        <StyledGoal style={{ width: '100%' }}>
        </StyledGoal>

        {/* <div>
          <label>
            <input type="checkbox" onChange={() => themeContext.toggleDark()} checked={themeContext.isDark} /> Dark
            mode
          </label>
        </div> */}

      </StyledFooterSection>

        {data.site.siteMetadata.menulinks.map(item => {
          return (
            <StyledFooterSectionNav key={item.name}>
              <h4 style={{ fontWeight: 400, marginBottom: '1rem' }}>{item.name}</h4>
              <Dropdown links={item.sublinks} />
             </StyledFooterSectionNav>
          )

        })}
        </StyledSection>
        <StyledSectionDis>
            <RiskDisclaimer />
        </StyledSectionDis>
      </GridDiv>
    </StyledFooter>
  )
}
export default Footer


const StyledWordmark = styled(Wordmark)`
  margin: 0;
  margin-top: 6px;
  height: 48px;
  width: 260px;
`

const StyledGoal = styled.div`
  color: ${({ theme }) => theme.colors.footLink};
  p {
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
`

const EmailSection = () => {

  return (
    <StyledGoal style={{ width: '100%' }}>

    <StyledWordmark />
      <h2>A Concern of Keeper Network Ltd.</h2>
      <p>71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, UNITED KINGDOM</p>
      <p>Support: <a href="mailto:info@keeperfi.com" target="_blank" rel="noopener noreferrer">info@keeperfi.com</a></p>
      <img src={LogoGDPR} alt="GDPR Logo" height="36"/> <img src={LogoEUGDPR} alt="EUGDPR Logo" height="36"/>
    </StyledGoal>

    )
  }
const RiskDisclaimer = () => {
 return (
              <div style={{ fontSize: '14px' }}>
              Risk Disclaimer: Cryptocurrency asset is a kind of innovative investment product, with very volatile price. Established to provide convenience for all - new to old, Keeper Finance. only serves as a neutral trading platform. Please make accute judgement of your investment capability and make investment decision. KeeperFinance is strictly suggesting to the citizens of Bangladesh, Pakistan, Srilanka and USA not to invest in Keep2r ecosystem & any of its concern. KeeperFinance is a open source platform. Which is not a custodial service for assets. Trading access to or holding positions on Keeper Finance. is prohibited for any person that is located in or a resident of the United States of America, Québec (Canada), Cuba, Crimea and Sevastopol, Iran, Syria, North Korea, Sudan, or any other jurisdiction where the services offered by Keeper Finance. are restricted. If it is determined that any Keeper Finance. trading participant has given false representations as to their location or place of residence, Keeper Finance. reserves the right to close any of their accounts immediately and to liquidate any open positions. This material should not be the basis for making investment decisions, nor be construed as a recommendation to engage in investment transactions, and is not related to the provision of advisory services regarding investment, tax, legal, financial, accounting, consulting or any other related services, nor is a recommendation being provided to buy, sell or purchase any good or product. Any views expressed on Keeper Finance. Research reports are the personal views of the authors. Keeper Finance. (or any affiliated entity) has not been involved in producing this report and the views contained in the report may differ from the views or opinions of Keeper Finance. <br />
              © 2020 Copyright - A Concern of Keeper Network Ltd.
              </div>
)
}

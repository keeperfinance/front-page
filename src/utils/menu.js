const menu = [
  {
    name: 'Products',
    sublinks: [
      {
        name: 'Keeper App',
        link: 'https://app.keeper.finance/',
        description: 'Join keeper and start jobs'
      },
      {
        name: 'Keeper Swap',
        link: 'https://swap.keeper.finance/#/',
        description: 'ERC20 tokens swap exchange'
      },
      {
        name: 'Keeper Governance',
        link: 'https://gov.keeper.finance',
        description: 'Voting governance'
      },
      {
        name: 'Keeper Feed',
        link: 'https://feed.keeper.finance',
        description: 'Oracle data feed'
      }
    ]
  },
  {
    name: 'Developers',
    sublinks: [
      {
        name: 'Documentation',
        link: 'https://docs.keeper.finance/',
      },
      { name: 'Quick Start',
        link: '/how-to-start',
        description: 'How to use Keeper Network'
      },
      { name: 'Registry', link: 'https://docs.keeper.finance/registry' },
      { name: 'Github', link: 'https://github.com/keeperfinance' },
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Blog', link: '/blog', description: 'Stay up to date on Keeper Finance' },
      { name: 'Twitter', link: 'https://twitter.com/KeeperFinance' },
      { name: 'Telegram', link: 'https://t.me/keeperfi' },
      { name: 'Medium', link: 'https://keeperfi.medium.com' },
    ]
  },
  {
    name: 'About',
    sublinks: [
      { name: 'Disclaimer', link: '/disclaimer' },
      { name: 'Privacy Policy', link: '/privacy-policy' },
      { name: 'Terms & Conditions', link: '/terms-conditions' },
    ]
  }
]

module.exports = menu

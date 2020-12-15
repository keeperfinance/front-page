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
        name: 'Keeper Feed',
        link: '/',
        description: 'Developing '
      }
    ]
  },
  {
    name: 'Governance',
    sublinks: [
      {
        name: 'Vote',
        link: 'https://snapshot.page/#/keeperfi.eth',
      }
    ]
  },
  {
    name: 'Developers',
    sublinks: [
      {
        name: 'Documentation',
        link: 'https://docs.keeper.finance/',
        description: 'Comprehensive smart contract and frontend integration docs'
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
    ]
  },
  {
    name: 'About',
    sublinks: [
      { name: 'FAQ', link: '/faq', description: 'Frequently Asked Questions' },
      { name: 'Disclaimer', link: '/disclaimer' },
      { name: 'Privacy Policy', link: '/privacy-policy' },
      { name: 'Terms & Conditions', link: '/terms-conditions' },
    ]
  }
]

module.exports = menu

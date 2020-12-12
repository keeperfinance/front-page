---
title: FAQ
---

<Info>Didn't find an answer? Join the <a href="https://t.me/keeperfi">community Telegram</a> to get support</Info>

# What is Keeper Finance?

Keeper Finance is a decentralized finance protocol that is inspired by job matching protocol Keep2r which is DeFi version 3.0. It is designed to be a lite version of Keep2r and is a more flexible and profitable protocol.

Keeper Finance offers a decentralized platform that connects developers with projects teams to execute jobs.

Keeper Finance uses a unique mechanism that ensures that jobs are executed and job takers are rewarded promptly within its blockchain ecosystem. To achieve this, Keeper Finance uses a job matching concept whereby job takers called Keepers register for jobs.

These contracts (jobs) are designed to be executed by keepers and once registered can be acted upon by keepers on the Keeper Finance blockchain.

If you want to understand more about Keeper Finance check out the [docs](https://docs.keeper.finance/).

# How Does Keeper Finance Work?

Keeper Finance is fully decentralized and members are involved in the creation and execution of smart contracts (Jobs). All that is required for a worker is to register as a keeper and the process can only be performed by bonding KFI tokens.

The bonding process takes 24 hours after which a registered user is activated as a keeper. Once this process is completed a timestamp is registered on the Keeper Finance blockchain network.

Creating jobs is flexible and easy to perform on the Keeper Finance. There are two different methods with the first via the Keeper Finance contract. This enables a job owner to register a job after which a pending governance vote is placed for the job specified by the address in the function arguments.

Keeper Finance users also have a limit for a job request every 13 days when using a specific address. The second method is via governance whereby a proposal is submitted and includes the contract as a job. If governance is approve the smart contract registers as a job that can be executed by keepers.

Payments are made by using the utility native token KFI which can be converted to other ERC-20 tokens on popular Dex like Uniswap.

# How are prices determined?

Prices are determined by the amount of each token in a pool. The smart contract maintains a constant using the following function: `x*y=k`. In this case `x = token0`, `y = token1`, `k = constant`. For each trade a certain amount of tokens are removed from the pool for an amount of the other token. To maintain `k`, the balances held by the smart contract are adjusted during the execution of the trade, therefore changing the price.

# Which part is improvement and modification?

1. Lightweight core modules used.
2. Keeper bonds activate time reduced. (Bond time: 1 day)
3. Keeper unbonds time reduced. (Unbond time: 13 days)
4. No need extra contracts (Increase speed).

#### This modification is helping for KeeperFI dapp perform speed up.

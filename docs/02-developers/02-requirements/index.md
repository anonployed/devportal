---
sidebar_label: Development Prerequisites
sidebar_position: 2
title: Prerequisites
tags: [rsk, rootstock, prerequisites, setup, requirements]
description: "Minimum hardware requirements for Rootstock."
---

This guide provides clear instructions for developers on the supported Solidity versions and the necessary configurations needed to ensure your smart contracts are deployed on the Rootstock network. See the [developer tools](/dev-tools/) section for a list of tools to build on Rootstock.

:::tip[Hackathon Info]

Participating in a Rootstock hackathon or Workshop? View the [Hackathon Resources](/resources/hackathon/) section.

:::

## Solidity Version
- Supported solc version: `0.8.20`

## Node RPC
- Interact with Rootstock using the [RPC API](https://rpc.rootstock.io/)

:::tip[Get an API Key]
See how to setup the RPC API and get an [API Key](/developers/rpc-api/setup).
:::

## Connecting to a Wallet

Fill these values to connect to the Rootstock Mainnet or Testnet in MetaMask.                           

- See [Configure MetaMask Wallet for Rootstock](/dev-tools/wallets/metamask/)

## Contract Addresses

* See the List of [Contract Addresses on Rootstock](/developers/smart-contracts/contract-addresses)

### Derivation path

When using [BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki "Multi-Account Hierarchy for Deterministic Wallets")-compatible
wallet software, you will need to specify a derivation path.

```text
Mainnet: m/44'/137'/0'/0/N
Testnet: m/44'/37310'/0'/0/N
```

:::info[Info]
See [Account based addresses](/concepts/account-based-addresses/) section for more information or [how to verify address ownership](/developers/smart-contracts/verify-address-ownership/).
:::

## Install Hardhat

```bash
npm install --save-dev hardhat
```

:::tip[Recommended]

- Install `hh` autocomplete to use `hh` shorthand globally.
```bash
npm i -g hardhat-shorthand
```

- Use the [Hardhat Starter Kit](/developers/quickstart/hardhat)

- Learn how to write, interact, deploy, and test smart contracts on Rootstock using [Hardhat](/developers/smart-contracts/hardhat) or [Foundry](/developers/smart-contracts/foundry/).

:::

## Command Line Tools

### POSIX Compliant Shell

<Tabs>
  <TabItem value="windows" label="Windows">
    Standard terminals like `cmd` or PowerShell may not support some commands. We recommended installing [Git for Windows](https://gitforwindows.org/) for Git Bash, which provides a more UNIX-like experience. Here's a [tutorial on Git Bash](https://www.atlassian.com/git/tutorials/git-bash).
  </TabItem>
  <TabItem value="macos" label="MacOS/Linux">
    Standard terminal.
  </TabItem>
</Tabs>

### Installing Node.js and NPM

<Tabs>
  <TabItem value="nvm" label="NVM" default>
    - Node v18 or later. 
        - For installation, use [NVM install script](https://github.com/nvm-sh/nvm#install--update-script).
  </TabItem>
  <TabItem value="windows" label="Windows">
    1. Download the Node.js Installer from [Node.js Downloads](https://nodejs.org/en/download).
    2. Run the installer and follow the on-screen instructions.
    3. Open Command Prompt or PowerShell and check versions with `node -v` and `npm -v`. 
        - See Posix Compliant Shell.
  </TabItem>
  <TabItem value="macos" label="MacOS">
    1. Install Homebrew (if not installed):
        ```bash
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
        ``` 
    2. Install Node.js and npm with `brew install node` 
    3. Check versions in Terminal with `node -v` and `npm -v`
  </TabItem>
  <TabItem value="linux" label="Linux">
      1. Open a terminal.
      2. Update package manager with sudo apt update
      3. Install Node.js and npm with sudo apt install nodejs npm
      4. Check versions in the terminal with `node -v` and `npm -v`
  </TabItem>
</Tabs>

## Optional Setup

- [Foundry](/developers/smart-contracts/foundry)
- [Remix](https://remix.ethereum.org/)
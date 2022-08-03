export const BADGE_CONTRACT_ADDRESS = '0xb034d6bA0b6593Fa5107C6a55042b67746d44605';
export const GALAXY_LIST = 'https://galaxy.eco/mynfts/list';
export const GALAXY_P12_SPACE = 'https://galaxy.eco/P12/';

export enum NFT_CLAIM {
  UNCLAIMED = 0,
  PENDING,
  CLAIMED,
}

export enum DEV_NFT_LEVEL {
  ORANGE = 0,
  PURPLE,
  BLUE,
  GREEN,
}

export enum GAMER_NFT_LEVEL {
  ORANGE = 0,
  PURPLE,
  BLUE,
  GREEN,
  WHITE,
  REKT,
}

export const NFT_CLAIM_TYPE = {
  [NFT_CLAIM.UNCLAIMED]: 'Eligible',
  [NFT_CLAIM.PENDING]: 'Pending',
  [NFT_CLAIM.CLAIMED]: 'Obtained',
};

const DEV_BADGE_ORANGE = process.env.NEXT_PUBLIC_DEV_BADGE_ORANGE || 'https://galaxy.eco/P12/campaign/GCt9JUUJCJ';
const DEV_BADGE_PURPLE = process.env.NEXT_PUBLIC_DEV_BADGE_PURPLE || 'https://galaxy.eco/P12/campaign/GCteJUUM7z';
const DEV_BADGE_BLUE = process.env.NEXT_PUBLIC_DEV_BADGE_BLUE || 'https://galaxy.eco/P12/campaign/GCi9CUUrni';
const DEV_BADGE_GREEN = process.env.NEXT_PUBLIC_DEV_BADGE_GREEN || 'https://galaxy.eco/P12/campaign/GCV4JUU7eR';

const GAMER_BADGE_ORANGE = process.env.NEXT_PUBLIC_GAMER_BADGE_ORANGE || 'https://galaxy.eco/P12/campaign/GCZ74Utyqp';
const GAMER_BADGE_PURPLE = process.env.NEXT_PUBLIC_GAMER_BADGE_PURPLE || 'https://galaxy.eco/P12/campaign/GCZm4UtEeE';
const GAMER_BADGE_BLUE = process.env.NEXT_PUBLIC_GAMER_BADGE_BLUE || 'https://galaxy.eco/P12/campaign/GCuBwUtL6P';
const GAMER_BADGE_GREEN = process.env.NEXT_PUBLIC_GAMER_BADGE_GREEN || 'https://galaxy.eco/P12/campaign/GCrkwUtqiz';
const GAMER_BADGE_WHITE = process.env.NEXT_PUBLIC_GAMER_BADGE_WHITE || 'https://galaxy.eco/P12/campaign/GCirwUtCCS';
const GAMER_BADGE_REKT = process.env.NEXT_PUBLIC_GAMER_BADGE_REKT || 'https://galaxy.eco/P12/campaign/GCuagUtMfG';

export const DEV_BADGES = {
  [DEV_NFT_LEVEL.ORANGE]: {
    asset: 'https://cdn.galaxy.eco/galaxy/assets/projecttwelve/1653656759076802901.gif',
    img: 'https://cdn1.p12.games/airdrop/img/dev_badge_orange.png',
    claim: DEV_BADGE_ORANGE,
    title: 'P12 Genesis Badge [Orange Rarity]',
  },
  [DEV_NFT_LEVEL.PURPLE]: {
    asset: 'https://cdn.galaxy.eco/galaxy/assets/projecttwelve/1653654265642526889.gif',
    img: 'https://cdn1.p12.games/airdrop/img/dev_badge_purple.png',
    claim: DEV_BADGE_PURPLE,
    title: 'P12 Genesis Badge [Purple Rarity]',
  },
  [DEV_NFT_LEVEL.BLUE]: {
    asset: 'https://cdn.galaxy.eco/galaxy/assets/projecttwelve/1653653761673395155.gif',
    img: 'https://cdn1.p12.games/airdrop/img/dev_badge_blue.png',
    claim: DEV_BADGE_BLUE,
    title: 'P12 Genesis Badge [Blue Rarity]',
  },
  [DEV_NFT_LEVEL.GREEN]: {
    asset: 'https://cdn.galaxy.eco/galaxy/assets/projecttwelve/1653653545770629768.gif',
    img: 'https://cdn1.p12.games/airdrop/img/dev_badge_green.png',
    claim: DEV_BADGE_GREEN,
    title: 'P12 Genesis Badge [Green Rarity]',
  },
};

export const GAMER_BADGES = {
  [GAMER_NFT_LEVEL.ORANGE]: {
    asset: 'https://cdn.galaxy.eco/galaxy/assets/projecttwelve/1655032051514527675.gif',
    img: 'https://cdn1.p12.games/airdrop/img/gamer_badge_orange.png',
    claim: GAMER_BADGE_ORANGE,
    title: 'P12 XII-PLORER Badge [Orange Rarity]',
  },
  [GAMER_NFT_LEVEL.PURPLE]: {
    asset: 'https://cdn.galaxy.eco/galaxy/assets/projecttwelve/1655018352989957058.gif',
    img: 'https://cdn1.p12.games/airdrop/img/gamer_badge_purple.png',
    claim: GAMER_BADGE_PURPLE,
    title: 'P12 XII-PLORER Badge [Purple Rarity]',
  },
  [GAMER_NFT_LEVEL.BLUE]: {
    asset: 'https://cdn.galaxy.eco/galaxy/assets/projecttwelve/1655015953876061494.gif',
    img: 'https://cdn1.p12.games/airdrop/img/gamer_badge_blue.png',
    claim: GAMER_BADGE_BLUE,
    title: 'P12 XII-PLORER Badge [Blue Rarity]',
  },
  [GAMER_NFT_LEVEL.GREEN]: {
    asset: 'https://cdn.galaxy.eco/galaxy/assets/projecttwelve/1655017682753443868.gif',
    img: 'https://cdn1.p12.games/airdrop/img/gamer_badge_green.png',
    claim: GAMER_BADGE_GREEN,
    title: 'P12 XII-PLORER Badge [Green Rarity]',
  },
  [GAMER_NFT_LEVEL.WHITE]: {
    asset: 'https://d257b89266utxb.cloudfront.net/galaxy/images/p12/1656663277830299249.gif',
    img: 'https://cdn1.p12.games/airdrop/img/gamer_badge_common.png',
    claim: GAMER_BADGE_WHITE,
    title: 'P12 XII-PLORER Badge [WHITE Rarity]',
  },
  [GAMER_NFT_LEVEL.REKT]: {
    asset: 'https://d257b89266utxb.cloudfront.net/galaxy/images/p12/1656661630752571203.gif',
    img: 'https://cdn1.p12.games/airdrop/img/gamer_badge_rekt.png',
    claim: GAMER_BADGE_REKT,
    title: 'P12 XII-PLORER Badge [REKT Rarity]',
  },
};

// Collab
export const COLLAB_OPEN = process.env.NEXT_PUBLIC_COLLAB === 'OPEN';

export const CHAIN_ICON: { [key: string]: string } = {
  // TODO: add Enum Type
  chain1: '/img/temp/chains/icon_chain_1.png',
  chain2: '/img/temp/chains/icon_chain_2.png',
  chain3: '/img/temp/chains/icon_chain_3.png',
  chain4: '/img/temp/chains/icon_chain_4.png',
};

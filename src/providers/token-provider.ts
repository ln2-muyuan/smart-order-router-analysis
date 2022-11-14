import { Token } from '@uniswap/sdk-core';
import { ChainId } from '../util/chains';
// import { ChainId } from '../util/' is wrong;



export interface ITokenProvider {
    getTokens(tokenAddress: string): Promise<Token>;


}

export const USDC_MAINNET = new Token(
    ChainId.MAINNET,
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    6,
    'USDC',
    'USD//C'
);
export const USDT_MAINNET = new Token(
    ChainId.MAINNET,
    '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    6,
    'USDT',
    'Tether USD'
);
export const WBTC_MAINNET = new Token(
    ChainId.MAINNET,
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    8,
    'WBTC',
    'Wrapped BTC'
);
export const DAI_MAINNET = new Token(
    ChainId.MAINNET,
    '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    18,
    'DAI',
    'Dai Stablecoin'
);
export const FEI_MAINNET = new Token(
    ChainId.MAINNET,
    '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
    18,
    'FEI',
    'Fei USD'
);
export const UNI_MAINNET = new Token(
    ChainId.MAINNET,
    '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    18,
    'UNI',
    'Uniswap'
);
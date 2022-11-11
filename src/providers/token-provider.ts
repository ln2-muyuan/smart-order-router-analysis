import { Token } from '@uniswap/sdk-core';





export interface ITokenProvider {
    getToken(tokenAddress: string): Promise<Token>;
}
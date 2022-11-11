import {ITokenProvider} from "./token-provider";
import {Token} from "@uniswap/sdk-core";


export class CachingTokenProviderWithFallback implements ITokenProvider{


    constructor() {
    }

    getToken(tokenAddress: string): Promise<Token> {

    }
}

import { Token } from '@uniswap/sdk-core'


export interface IV2SubgraphProvider {
    getPools(
        tokenIn: Token,
        tokenOut: Token
    ): Promise<any>
}

export class V2SubgraphProvider implements IV2SubgraphProvider {
    public async getPools(tokenIn: Token, tokenOut: Token): Promise<any> {
        return null
    }
}


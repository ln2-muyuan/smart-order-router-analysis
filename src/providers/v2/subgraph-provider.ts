import { gql, GraphQLClient } from 'graphql-request';
import { Token } from '@uniswap/sdk-core'


export interface IV2SubgraphProvider {
    getPools(
        tokenIn: Token,
        tokenOut: Token
    ): Promise<any>
}

export class V2SubgraphProvider implements IV2SubgraphProvider {
    private client: GraphQLClient;

    constructor() {
        this.client = new GraphQLClient('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2');
    }


    public async getPools(tokenIn: Token, tokenOut: Token): Promise<any> {

        const query = gql`
    {
        bundle(id: "1" ) {
            ethPrice
        }
    }`
    ;
        
        
        
        return null
    }
}


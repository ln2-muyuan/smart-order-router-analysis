import { gql, GraphQLClient } from 'graphql-request';
import retry from 'async-retry';
import Timeout from 'await-timeout';
import { Token } from '@uniswap/sdk-core'

export interface V2SubgraphPool {
    id: string;
    token0: {
        id: string;
        symbol: string;
    }
    token1: {
        id: string;
        symbol: string;
    }
    totalSupply: string;
    trackedReserveETH: string;
    reserveUSER: string;
}

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


    public async getPools(): Promise<any> {


        const query = gql`
            {
                bundle(id: "1" ) {
                    ethPrice
                }
            }`;
        const query2 = gql`{pairs(
              first: 5
            ) 
          {
              id
              token0 { id, symbol }
              token1 { id, symbol }
              totalSupply
              trackedReserveETH
              reserveUSD
            }
        }`

        let pairsPage: V2SubgraphPool[] = [];
        //if you do not use async-retry, we do not need the async() function here
        const poolsResult = await this.client.request<{ pairs: V2SubgraphPool[]; }>(query2);

        pairsPage = poolsResult.pairs;
        console.log(pairsPage[0]);



        
        return null
    }
}

const provider = new V2SubgraphProvider();
provider.getPools();
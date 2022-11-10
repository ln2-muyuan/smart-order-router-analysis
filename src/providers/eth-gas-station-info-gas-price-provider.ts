import { BigNumber } from '@ethersproject/bignumber';
import retry from 'async-retry';
import axios from 'axios';

import { GasPrice, IGasPriceProvider } from './gas-price-provider';

// Gas prices from ethgasstation are in x10 Gwei. Must divide by 10 to use.
export type ETHGasStationResponse = {
    fast: number;
    fastest: number;
    safeLow: number;
    average: number;
    block_time: number;
    blockNum: number;
    speed: number;
    safeLowWait: number;
    avgWait: number;
    fastWait: number;
    fastestWait: number;
};

export class ETHGasStationInfoProvider extends IGasPriceProvider {
    private url: string;
    constructor(url: string) {
      super();
      this.url = url;
    }

    public async getGasPrice(): Promise<GasPrice> {
        const response = await retry(
          async () => {
            return axios.get<ETHGasStationResponse>(this.url);
          },
          { retries: 1 }
        );

        console.log('ETHGasStationInfoProvider response', response.data);

        const { data: gasPriceResponse, status } = response;

        if (status != 200) {
          throw new Error(`Unable to get gas price from ${this.url}`);
        }

        // Gas prices from ethgasstation are in GweiX10.
        const gasPriceWei = BigNumber.from(gasPriceResponse.fast)
          .div(BigNumber.from(10))
          .mul(BigNumber.from(10).pow(9));

        return { gasPriceWei: gasPriceWei };
    }
}

const gasProvider = new ETHGasStationInfoProvider('https://ethgasstation.info/json/ethgasAPI.json');
gasProvider.getGasPrice().then((gasPrice) => {
    console.log(gasPrice);
});
console.log("Waiting for gas price to be returned...");

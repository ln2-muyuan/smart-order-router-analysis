import {JsonRpcProvider} from "@ethersproject/providers";


export abstract class Simulator {
    protected provider: JsonRpcProvider;

    constructor(provider: JsonRpcProvider) {
        this.provider = provider;
    }

    public async simulate(tx: any): Promise<any> {
        return await this.provider.send("eth_call", [tx, "latest"]);
    }

}
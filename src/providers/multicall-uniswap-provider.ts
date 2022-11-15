import {ChainId} from "../util/chains";
import {CallSameFunctionOnMultipleContractsParams, IMulticallProvider} from "./multicall-provider";
import {BigNumber} from "@ethersproject/bignumber";
import {UniswapInterfaceMulticall, UniswapInterfaceMulticall__factory} from "../types/v3";
import {BaseProvider, JsonRpcProvider} from "@ethersproject/providers";


export class UniswapMulticallProvider extends IMulticallProvider {

    private multicallContract: UniswapInterfaceMulticall;

    constructor(
        protected chainId: ChainId,
        protected provider: BaseProvider,
    ){
        super();
        const multicallAddress = '0x1F98415757620B543A52E61c46B32eB19261F984';

        this.multicallContract = UniswapInterfaceMulticall__factory.connect(multicallAddress, provider);
    }

    printMultilcallContract(): void {
        console.log(this.multicallContract);
    }

    callSameFunctionOnMultipleContracts(param: CallSameFunctionOnMultipleContractsParams): Promise<BigNumber[]> {
        return Promise.resolve([]);
    }

    callSameFunctionOnContractWithMultipleParams(
    ): Promise<BigNumber[]> {
        return Promise.resolve([]);
    }



}


const provider = new UniswapMulticallProvider(ChainId.MAINNET, new JsonRpcProvider('https://mainnet.infura.io/v3/4b0c1a572d1b417990c995ae82480859'));
provider.printMultilcallContract();
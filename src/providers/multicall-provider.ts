import { BigNumber } from "@ethersproject/bignumber";
import {Interface} from '@ethersproject/abi';

export type CallSameFunctionOnMultipleContractsParams
     = {
    addresses: string[];
    contractInterface: Interface;
    functionName: string;
};


export abstract class IMulticallProvider {

    public abstract callSameFunctionOnMultipleContracts(
        param: CallSameFunctionOnMultipleContractsParams
    ): Promise<BigNumber[]>;

    public abstract callSameFunctionOnContractWithMultipleParams(
    ):Promise<BigNumber[]>

}
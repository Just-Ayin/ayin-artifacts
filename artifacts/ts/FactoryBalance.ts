/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  Asset,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
  Narrow,
} from "@alephium/web3";
import { default as FactoryBalanceContractJson } from "../clamm/factory/FactoryBalance.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";
import {
  CurrentPoolInfo,
  FactoryProtectedData,
  FactoryRoles,
  IncentiveKey,
  ModifyLiquidity,
  ModifyLiquidityScriptParams,
  NewStruct,
  NextTick,
  ObservationCL,
  ObservationTP,
  PendingBalance,
  PoolData,
  PoolKey,
  Position,
  PositionKey,
  StakeCLInfo,
  StakerCLData,
  StakerCLIncentive,
  TickInfo,
  TickUpdateInfo,
  AllStructs,
} from "./types";

// Custom types for the contract
export namespace FactoryBalanceTypes {
  export type Fields = {
    factory: HexString;
    tokenId: HexString;
    user: bigint;
    protocol: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getUser: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getProtocol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    checkCaller: {
      params: CallContractParams<{ callerId: HexString }>;
      result: CallContractResult<null>;
    };
    addDelta: {
      params: CallContractParams<{ userDelta: bigint; protocolDelta: bigint }>;
      result: CallContractResult<null>;
    };
    depositUser: {
      params: CallContractParams<{ payer: Address; amount: bigint }>;
      result: CallContractResult<bigint>;
    };
    withdrawUser: {
      params: CallContractParams<{ to: Address }>;
      result: CallContractResult<null>;
    };
    withdrawProtocol: {
      params: CallContractParams<{ to: Address }>;
      result: CallContractResult<null>;
    };
    upgrade: {
      params: CallContractParams<{ newCode: HexString }>;
      result: CallContractResult<null>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
  export type MulticallReturnType<Callss extends MultiCallParams[]> = {
    [index in keyof Callss]: MultiCallResults<Callss[index]>;
  };

  export interface SignExecuteMethodTable {
    getUser: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getProtocol: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    checkCaller: {
      params: SignExecuteContractMethodParams<{ callerId: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    addDelta: {
      params: SignExecuteContractMethodParams<{
        userDelta: bigint;
        protocolDelta: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    depositUser: {
      params: SignExecuteContractMethodParams<{
        payer: Address;
        amount: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    withdrawUser: {
      params: SignExecuteContractMethodParams<{ to: Address }>;
      result: SignExecuteScriptTxResult;
    };
    withdrawProtocol: {
      params: SignExecuteContractMethodParams<{ to: Address }>;
      result: SignExecuteScriptTxResult;
    };
    upgrade: {
      params: SignExecuteContractMethodParams<{ newCode: HexString }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  FactoryBalanceInstance,
  FactoryBalanceTypes.Fields
> {
  encodeFields(fields: FactoryBalanceTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  consts = {
    Forbidden: BigInt("4403"),
    UpgradeSameCodeHash: BigInt("4404"),
    UpgradeBadCodeHash: BigInt("4405"),
  };

  at(address: string): FactoryBalanceInstance {
    return new FactoryBalanceInstance(address);
  }

  tests = {
    getUser: async (
      params: Omit<
        TestContractParamsWithoutMaps<FactoryBalanceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getUser", params, getContractByCodeHash);
    },
    getProtocol: async (
      params: Omit<
        TestContractParamsWithoutMaps<FactoryBalanceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getProtocol", params, getContractByCodeHash);
    },
    checkCaller: async (
      params: TestContractParamsWithoutMaps<
        FactoryBalanceTypes.Fields,
        { callerId: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "checkCaller", params, getContractByCodeHash);
    },
    addDelta: async (
      params: TestContractParamsWithoutMaps<
        FactoryBalanceTypes.Fields,
        { userDelta: bigint; protocolDelta: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "addDelta", params, getContractByCodeHash);
    },
    depositUser: async (
      params: TestContractParamsWithoutMaps<
        FactoryBalanceTypes.Fields,
        { payer: Address; amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "depositUser", params, getContractByCodeHash);
    },
    withdrawUser: async (
      params: TestContractParamsWithoutMaps<
        FactoryBalanceTypes.Fields,
        { to: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "withdrawUser", params, getContractByCodeHash);
    },
    withdrawProtocol: async (
      params: TestContractParamsWithoutMaps<
        FactoryBalanceTypes.Fields,
        { to: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "withdrawProtocol",
        params,
        getContractByCodeHash
      );
    },
    upgrade: async (
      params: TestContractParamsWithoutMaps<
        FactoryBalanceTypes.Fields,
        { newCode: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "upgrade", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: FactoryBalanceTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const FactoryBalance = new Factory(
  Contract.fromJson(
    FactoryBalanceContractJson,
    "",
    "b9ce9983e941f985eaa4fec3b626e9b906188a2d1fd47236bfa3e89cb37c9f7d",
    AllStructs
  )
);
registerContract(FactoryBalance);

// Use this class to interact with the blockchain
export class FactoryBalanceInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FactoryBalanceTypes.State> {
    return fetchContractState(FactoryBalance, this);
  }

  view = {
    getUser: async (
      params?: FactoryBalanceTypes.CallMethodParams<"getUser">
    ): Promise<FactoryBalanceTypes.CallMethodResult<"getUser">> => {
      return callMethod(
        FactoryBalance,
        this,
        "getUser",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getProtocol: async (
      params?: FactoryBalanceTypes.CallMethodParams<"getProtocol">
    ): Promise<FactoryBalanceTypes.CallMethodResult<"getProtocol">> => {
      return callMethod(
        FactoryBalance,
        this,
        "getProtocol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    checkCaller: async (
      params: FactoryBalanceTypes.CallMethodParams<"checkCaller">
    ): Promise<FactoryBalanceTypes.CallMethodResult<"checkCaller">> => {
      return callMethod(
        FactoryBalance,
        this,
        "checkCaller",
        params,
        getContractByCodeHash
      );
    },
    addDelta: async (
      params: FactoryBalanceTypes.CallMethodParams<"addDelta">
    ): Promise<FactoryBalanceTypes.CallMethodResult<"addDelta">> => {
      return callMethod(
        FactoryBalance,
        this,
        "addDelta",
        params,
        getContractByCodeHash
      );
    },
    depositUser: async (
      params: FactoryBalanceTypes.CallMethodParams<"depositUser">
    ): Promise<FactoryBalanceTypes.CallMethodResult<"depositUser">> => {
      return callMethod(
        FactoryBalance,
        this,
        "depositUser",
        params,
        getContractByCodeHash
      );
    },
    withdrawUser: async (
      params: FactoryBalanceTypes.CallMethodParams<"withdrawUser">
    ): Promise<FactoryBalanceTypes.CallMethodResult<"withdrawUser">> => {
      return callMethod(
        FactoryBalance,
        this,
        "withdrawUser",
        params,
        getContractByCodeHash
      );
    },
    withdrawProtocol: async (
      params: FactoryBalanceTypes.CallMethodParams<"withdrawProtocol">
    ): Promise<FactoryBalanceTypes.CallMethodResult<"withdrawProtocol">> => {
      return callMethod(
        FactoryBalance,
        this,
        "withdrawProtocol",
        params,
        getContractByCodeHash
      );
    },
    upgrade: async (
      params: FactoryBalanceTypes.CallMethodParams<"upgrade">
    ): Promise<FactoryBalanceTypes.CallMethodResult<"upgrade">> => {
      return callMethod(
        FactoryBalance,
        this,
        "upgrade",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getUser: async (
      params: FactoryBalanceTypes.SignExecuteMethodParams<"getUser">
    ): Promise<FactoryBalanceTypes.SignExecuteMethodResult<"getUser">> => {
      return signExecuteMethod(FactoryBalance, this, "getUser", params);
    },
    getProtocol: async (
      params: FactoryBalanceTypes.SignExecuteMethodParams<"getProtocol">
    ): Promise<FactoryBalanceTypes.SignExecuteMethodResult<"getProtocol">> => {
      return signExecuteMethod(FactoryBalance, this, "getProtocol", params);
    },
    checkCaller: async (
      params: FactoryBalanceTypes.SignExecuteMethodParams<"checkCaller">
    ): Promise<FactoryBalanceTypes.SignExecuteMethodResult<"checkCaller">> => {
      return signExecuteMethod(FactoryBalance, this, "checkCaller", params);
    },
    addDelta: async (
      params: FactoryBalanceTypes.SignExecuteMethodParams<"addDelta">
    ): Promise<FactoryBalanceTypes.SignExecuteMethodResult<"addDelta">> => {
      return signExecuteMethod(FactoryBalance, this, "addDelta", params);
    },
    depositUser: async (
      params: FactoryBalanceTypes.SignExecuteMethodParams<"depositUser">
    ): Promise<FactoryBalanceTypes.SignExecuteMethodResult<"depositUser">> => {
      return signExecuteMethod(FactoryBalance, this, "depositUser", params);
    },
    withdrawUser: async (
      params: FactoryBalanceTypes.SignExecuteMethodParams<"withdrawUser">
    ): Promise<FactoryBalanceTypes.SignExecuteMethodResult<"withdrawUser">> => {
      return signExecuteMethod(FactoryBalance, this, "withdrawUser", params);
    },
    withdrawProtocol: async (
      params: FactoryBalanceTypes.SignExecuteMethodParams<"withdrawProtocol">
    ): Promise<
      FactoryBalanceTypes.SignExecuteMethodResult<"withdrawProtocol">
    > => {
      return signExecuteMethod(
        FactoryBalance,
        this,
        "withdrawProtocol",
        params
      );
    },
    upgrade: async (
      params: FactoryBalanceTypes.SignExecuteMethodParams<"upgrade">
    ): Promise<FactoryBalanceTypes.SignExecuteMethodResult<"upgrade">> => {
      return signExecuteMethod(FactoryBalance, this, "upgrade", params);
    },
  };

  async multicall<Calls extends FactoryBalanceTypes.MultiCallParams>(
    calls: Calls
  ): Promise<FactoryBalanceTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends FactoryBalanceTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<FactoryBalanceTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | FactoryBalanceTypes.MultiCallParams
      | FactoryBalanceTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      FactoryBalance,
      this,
      callss,
      getContractByCodeHash
    );
  }
}
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
import { default as UpdatedPoolFactoryContractJson } from "../clamm/UpdatedPoolFactory.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";
import {
  CurrentPoolInfo,
  FactoryProtectedData,
  FactoryRoles,
  ModifyLiquidity,
  ModifyLiquidityScriptParams,
  NewStruct,
  NextTick,
  PendingBalance,
  PoolData,
  PoolKey,
  Position,
  PositionKey,
  TickInfo,
  TickUpdateInfo,
  AllStructs,
} from "./types";
import { RalphMap } from "@alephium/web3";

// Custom types for the contract
export namespace UpdatedPoolFactoryTypes {
  export type Fields = {
    deployer: Address;
    protocolFeeSetter: Address;
    feeSink: Address;
    admin: Address;
    newAdmin: Address;
    upgrader: Address;
    poolTemplateId: HexString;
    pairSize: bigint;
    newMutablePrimitive: bigint;
    newImmutablePrimitive: bigint;
    newStruct: NewStruct;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    placeholder: {
      params: CallContractParams<{ newDeployer: Address }>;
      result: CallContractResult<null>;
    };
    serializePoolKey: {
      params: CallContractParams<{ poolKey: PoolKey }>;
      result: CallContractResult<HexString>;
    };
    getPool: {
      params: CallContractParams<{ poolKey: PoolKey }>;
      result: CallContractResult<HexString>;
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
    placeholder: {
      params: SignExecuteContractMethodParams<{ newDeployer: Address }>;
      result: SignExecuteScriptTxResult;
    };
    serializePoolKey: {
      params: SignExecuteContractMethodParams<{ poolKey: PoolKey }>;
      result: SignExecuteScriptTxResult;
    };
    getPool: {
      params: SignExecuteContractMethodParams<{ poolKey: PoolKey }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];

  export type Maps = { pendingBalances?: Map<HexString, PendingBalance> };
}

class Factory extends ContractFactory<
  UpdatedPoolFactoryInstance,
  UpdatedPoolFactoryTypes.Fields
> {
  encodeFields(fields: UpdatedPoolFactoryTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  at(address: string): UpdatedPoolFactoryInstance {
    return new UpdatedPoolFactoryInstance(address);
  }

  tests = {
    placeholder: async (
      params: TestContractParams<
        UpdatedPoolFactoryTypes.Fields,
        { newDeployer: Address },
        UpdatedPoolFactoryTypes.Maps
      >
    ): Promise<TestContractResult<null, UpdatedPoolFactoryTypes.Maps>> => {
      return testMethod(this, "placeholder", params, getContractByCodeHash);
    },
    serializePoolKey: async (
      params: TestContractParams<
        UpdatedPoolFactoryTypes.Fields,
        { poolKey: PoolKey },
        UpdatedPoolFactoryTypes.Maps
      >
    ): Promise<TestContractResult<HexString, UpdatedPoolFactoryTypes.Maps>> => {
      return testMethod(
        this,
        "serializePoolKey",
        params,
        getContractByCodeHash
      );
    },
    getPool: async (
      params: TestContractParams<
        UpdatedPoolFactoryTypes.Fields,
        { poolKey: PoolKey },
        UpdatedPoolFactoryTypes.Maps
      >
    ): Promise<TestContractResult<HexString, UpdatedPoolFactoryTypes.Maps>> => {
      return testMethod(this, "getPool", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: UpdatedPoolFactoryTypes.Fields,
    asset?: Asset,
    address?: string,
    maps?: UpdatedPoolFactoryTypes.Maps
  ) {
    return this.stateForTest_(initFields, asset, address, maps);
  }
}

// Use this object to test and deploy the contract
export const UpdatedPoolFactory = new Factory(
  Contract.fromJson(
    UpdatedPoolFactoryContractJson,
    "",
    "8fa590ef0025dfd7c98236684ecff16f90e98708e5ceb84a91badac9cac7aa7e",
    AllStructs
  )
);
registerContract(UpdatedPoolFactory);

// Use this class to interact with the blockchain
export class UpdatedPoolFactoryInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  maps = {
    pendingBalances: new RalphMap<HexString, PendingBalance>(
      UpdatedPoolFactory.contract,
      this.contractId,
      "pendingBalances"
    ),
  };

  async fetchState(): Promise<UpdatedPoolFactoryTypes.State> {
    return fetchContractState(UpdatedPoolFactory, this);
  }

  view = {
    placeholder: async (
      params: UpdatedPoolFactoryTypes.CallMethodParams<"placeholder">
    ): Promise<UpdatedPoolFactoryTypes.CallMethodResult<"placeholder">> => {
      return callMethod(
        UpdatedPoolFactory,
        this,
        "placeholder",
        params,
        getContractByCodeHash
      );
    },
    serializePoolKey: async (
      params: UpdatedPoolFactoryTypes.CallMethodParams<"serializePoolKey">
    ): Promise<
      UpdatedPoolFactoryTypes.CallMethodResult<"serializePoolKey">
    > => {
      return callMethod(
        UpdatedPoolFactory,
        this,
        "serializePoolKey",
        params,
        getContractByCodeHash
      );
    },
    getPool: async (
      params: UpdatedPoolFactoryTypes.CallMethodParams<"getPool">
    ): Promise<UpdatedPoolFactoryTypes.CallMethodResult<"getPool">> => {
      return callMethod(
        UpdatedPoolFactory,
        this,
        "getPool",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    placeholder: async (
      params: UpdatedPoolFactoryTypes.SignExecuteMethodParams<"placeholder">
    ): Promise<
      UpdatedPoolFactoryTypes.SignExecuteMethodResult<"placeholder">
    > => {
      return signExecuteMethod(UpdatedPoolFactory, this, "placeholder", params);
    },
    serializePoolKey: async (
      params: UpdatedPoolFactoryTypes.SignExecuteMethodParams<"serializePoolKey">
    ): Promise<
      UpdatedPoolFactoryTypes.SignExecuteMethodResult<"serializePoolKey">
    > => {
      return signExecuteMethod(
        UpdatedPoolFactory,
        this,
        "serializePoolKey",
        params
      );
    },
    getPool: async (
      params: UpdatedPoolFactoryTypes.SignExecuteMethodParams<"getPool">
    ): Promise<UpdatedPoolFactoryTypes.SignExecuteMethodResult<"getPool">> => {
      return signExecuteMethod(UpdatedPoolFactory, this, "getPool", params);
    },
  };

  async multicall<Calls extends UpdatedPoolFactoryTypes.MultiCallParams>(
    calls: Calls
  ): Promise<UpdatedPoolFactoryTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends UpdatedPoolFactoryTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<UpdatedPoolFactoryTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | UpdatedPoolFactoryTypes.MultiCallParams
      | UpdatedPoolFactoryTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      UpdatedPoolFactory,
      this,
      callss,
      getContractByCodeHash
    );
  }
}
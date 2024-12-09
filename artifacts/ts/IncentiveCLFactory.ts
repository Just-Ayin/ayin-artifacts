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
import { default as IncentiveCLFactoryContractJson } from "../clamm/staking/IncentiveCLFactory.ral.json";
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
export namespace IncentiveCLFactoryTypes {
  export type Fields = {
    managerContractId: HexString;
  };

  export type State = ContractState<Fields>;

  export type IncentiveCreatedEvent = ContractEvent<{
    rewardToken: HexString;
    pool: HexString;
    startTime: bigint;
    endTime: bigint;
    refundee: Address;
    reward: bigint;
  }>;

  export interface CallMethodTable {
    getIncentivePath: {
      params: CallContractParams<{ key: IncentiveKey }>;
      result: CallContractResult<HexString>;
    };
    getIncentiveContractId: {
      params: CallContractParams<{ key: IncentiveKey }>;
      result: CallContractResult<HexString>;
    };
    create: {
      params: CallContractParams<{
        payer: Address;
        key: IncentiveKey;
        reward: bigint;
        incentiveTemplateId: HexString;
      }>;
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
    getIncentivePath: {
      params: SignExecuteContractMethodParams<{ key: IncentiveKey }>;
      result: SignExecuteScriptTxResult;
    };
    getIncentiveContractId: {
      params: SignExecuteContractMethodParams<{ key: IncentiveKey }>;
      result: SignExecuteScriptTxResult;
    };
    create: {
      params: SignExecuteContractMethodParams<{
        payer: Address;
        key: IncentiveKey;
        reward: bigint;
        incentiveTemplateId: HexString;
      }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  IncentiveCLFactoryInstance,
  IncentiveCLFactoryTypes.Fields
> {
  encodeFields(fields: IncentiveCLFactoryTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  eventIndex = { IncentiveCreated: 0 };

  at(address: string): IncentiveCLFactoryInstance {
    return new IncentiveCLFactoryInstance(address);
  }

  tests = {
    getIncentivePath: async (
      params: TestContractParamsWithoutMaps<
        IncentiveCLFactoryTypes.Fields,
        { key: IncentiveKey }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "getIncentivePath",
        params,
        getContractByCodeHash
      );
    },
    getIncentiveContractId: async (
      params: TestContractParamsWithoutMaps<
        IncentiveCLFactoryTypes.Fields,
        { key: IncentiveKey }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "getIncentiveContractId",
        params,
        getContractByCodeHash
      );
    },
    create: async (
      params: TestContractParamsWithoutMaps<
        IncentiveCLFactoryTypes.Fields,
        {
          payer: Address;
          key: IncentiveKey;
          reward: bigint;
          incentiveTemplateId: HexString;
        }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "create", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: IncentiveCLFactoryTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const IncentiveCLFactory = new Factory(
  Contract.fromJson(
    IncentiveCLFactoryContractJson,
    "",
    "b7a593ae9093402b6a991f579326ad2f9ebbd5608a1a41e60c26d927e9cb9a10",
    AllStructs
  )
);
registerContract(IncentiveCLFactory);

// Use this class to interact with the blockchain
export class IncentiveCLFactoryInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<IncentiveCLFactoryTypes.State> {
    return fetchContractState(IncentiveCLFactory, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeIncentiveCreatedEvent(
    options: EventSubscribeOptions<IncentiveCLFactoryTypes.IncentiveCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      IncentiveCLFactory.contract,
      this,
      options,
      "IncentiveCreated",
      fromCount
    );
  }

  view = {
    getIncentivePath: async (
      params: IncentiveCLFactoryTypes.CallMethodParams<"getIncentivePath">
    ): Promise<
      IncentiveCLFactoryTypes.CallMethodResult<"getIncentivePath">
    > => {
      return callMethod(
        IncentiveCLFactory,
        this,
        "getIncentivePath",
        params,
        getContractByCodeHash
      );
    },
    getIncentiveContractId: async (
      params: IncentiveCLFactoryTypes.CallMethodParams<"getIncentiveContractId">
    ): Promise<
      IncentiveCLFactoryTypes.CallMethodResult<"getIncentiveContractId">
    > => {
      return callMethod(
        IncentiveCLFactory,
        this,
        "getIncentiveContractId",
        params,
        getContractByCodeHash
      );
    },
    create: async (
      params: IncentiveCLFactoryTypes.CallMethodParams<"create">
    ): Promise<IncentiveCLFactoryTypes.CallMethodResult<"create">> => {
      return callMethod(
        IncentiveCLFactory,
        this,
        "create",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getIncentivePath: async (
      params: IncentiveCLFactoryTypes.SignExecuteMethodParams<"getIncentivePath">
    ): Promise<
      IncentiveCLFactoryTypes.SignExecuteMethodResult<"getIncentivePath">
    > => {
      return signExecuteMethod(
        IncentiveCLFactory,
        this,
        "getIncentivePath",
        params
      );
    },
    getIncentiveContractId: async (
      params: IncentiveCLFactoryTypes.SignExecuteMethodParams<"getIncentiveContractId">
    ): Promise<
      IncentiveCLFactoryTypes.SignExecuteMethodResult<"getIncentiveContractId">
    > => {
      return signExecuteMethod(
        IncentiveCLFactory,
        this,
        "getIncentiveContractId",
        params
      );
    },
    create: async (
      params: IncentiveCLFactoryTypes.SignExecuteMethodParams<"create">
    ): Promise<IncentiveCLFactoryTypes.SignExecuteMethodResult<"create">> => {
      return signExecuteMethod(IncentiveCLFactory, this, "create", params);
    },
  };

  async multicall<Calls extends IncentiveCLFactoryTypes.MultiCallParams>(
    calls: Calls
  ): Promise<IncentiveCLFactoryTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends IncentiveCLFactoryTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<IncentiveCLFactoryTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | IncentiveCLFactoryTypes.MultiCallParams
      | IncentiveCLFactoryTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      IncentiveCLFactory,
      this,
      callss,
      getContractByCodeHash
    );
  }
}

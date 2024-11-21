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
import { default as NFTPositionManagerContractJson } from "../clamm/staking/NFTPositionManager.ral.json";
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

// Custom types for the contract
export namespace NFTPositionManagerTypes {
  export type Fields = {
    factory: HexString;
    nftTemplateId: HexString;
    collectionUri: HexString;
    nftUriPrefix: HexString;
    totalSupply: bigint;
    nextIndex: bigint;
  };

  export type State = ContractState<Fields>;

  export type NFTMintedEvent = ContractEvent<{
    owner: Address;
    nftId: HexString;
    nftIndex: bigint;
  }>;
  export type NFTBurnedEvent = ContractEvent<{
    owner: Address;
    nftId: HexString;
    nftIndex: bigint;
  }>;

  export interface CallMethodTable {
    getCollectionUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    totalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    nftByIndex: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    validateNFT: {
      params: CallContractParams<{ nftId: HexString; nftIndex: bigint }>;
      result: CallContractResult<null>;
    };
    modifyLiquidity: {
      params: CallContractParams<{
        payer: Address;
        nftOwner: Address;
        key: PoolKey;
        tickLower: bigint;
        tickUpper: bigint;
        liquidityDelta: bigint;
        nftIndex: bigint;
      }>;
      result: CallContractResult<[bigint, bigint, HexString]>;
    };
    claimFees: {
      params: CallContractParams<{
        refundAddress: Address;
        nftOwner: Address;
        nftIndex: bigint;
      }>;
      result: CallContractResult<[bigint, bigint]>;
    };
    getVersion: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    mintNft: {
      params: CallContractParams<{
        payer: Address;
        pool: HexString;
        poolKey: PoolKey;
        positionKey: PositionKey;
        to: Address;
      }>;
      result: CallContractResult<HexString>;
    };
    burnNft: {
      params: CallContractParams<{
        refundAddress: Address;
        nft: HexString;
        nftIndex: bigint;
        nftOwner: Address;
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
    getCollectionUri: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    totalSupply: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    nftByIndex: {
      params: SignExecuteContractMethodParams<{ index: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    validateNFT: {
      params: SignExecuteContractMethodParams<{
        nftId: HexString;
        nftIndex: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    modifyLiquidity: {
      params: SignExecuteContractMethodParams<{
        payer: Address;
        nftOwner: Address;
        key: PoolKey;
        tickLower: bigint;
        tickUpper: bigint;
        liquidityDelta: bigint;
        nftIndex: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    claimFees: {
      params: SignExecuteContractMethodParams<{
        refundAddress: Address;
        nftOwner: Address;
        nftIndex: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    getVersion: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    mintNft: {
      params: SignExecuteContractMethodParams<{
        payer: Address;
        pool: HexString;
        poolKey: PoolKey;
        positionKey: PositionKey;
        to: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
    burnNft: {
      params: SignExecuteContractMethodParams<{
        refundAddress: Address;
        nft: HexString;
        nftIndex: bigint;
        nftOwner: Address;
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
  NFTPositionManagerInstance,
  NFTPositionManagerTypes.Fields
> {
  encodeFields(fields: NFTPositionManagerTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  eventIndex = { NFTMinted: 0, NFTBurned: 1 };
  consts = {
    MinTick: BigInt("-887272"),
    MaxTick: BigInt("887272"),
    HalfUnitX96: BigInt("39614081257132168796771975168"),
    UnitX96: BigInt("79228162514264337593543950336"),
    UnitX128: BigInt("340282366920938463463374607431768211456"),
    DoubleUnitX96: BigInt("158456325028528675187087900672"),
    U160Limit: BigInt("1461501637330902918203684832716283019655932542976"),
    MaxFee: BigInt("1000000"),
    MinSqrtPrice: BigInt("4295128739"),
    MaxSqrtPrice: BigInt("1461446703485210103287273052203988822378723970342"),
    Version: BigInt("1"),
    ErrorCodes: {
      NotAdmin: BigInt("100"),
      NotNewAdmin: BigInt("101"),
      NotDeployer: BigInt("102"),
      NotInitialized: BigInt("103"),
      NotFactory: BigInt("104"),
      TokensNotSorted: BigInt("105"),
      FeeTooHigh: BigInt("106"),
      TickSpacingZero: BigInt("107"),
      NotFeeSetter: BigInt("108"),
      InvalidFeeAndSpacing: BigInt("109"),
      NotUpgrader: BigInt("110"),
      IdenticalTokenIds: BigInt("200"),
      TickOOB: BigInt("201"),
      SqrtRatioOOB: BigInt("202"),
      ProductOverflow: BigInt("203"),
      SqrtPriceTooLow: BigInt("204"),
      SqrtPriceZero: BigInt("205"),
      LiquidityZero: BigInt("206"),
      ResultExceeds160Bits: BigInt("207"),
      TickTooLow: BigInt("208"),
      TickTooHigh: BigInt("209"),
      TicksUnordered: BigInt("210"),
      TokenIdsSizeInvalid: BigInt("211"),
      TickNotMultipleOfSpacing: BigInt("212"),
      TickSpacingNonPositive: BigInt("213"),
      LowerTickNotMultiple: BigInt("214"),
      UpperTickNotMultiple: BigInt("215"),
      PriceLimitOOB: BigInt("216"),
      IncorrectTokenIndex: BigInt("800"),
      NFTNotFound: BigInt("801"),
      NFTNotPartOfCollection: BigInt("802"),
      MissingNFTInput: BigInt("803"),
      MinimumAmountOutNotReached: BigInt("900"),
      UnknownPoolType: BigInt("901"),
      UnsupportedPoolType: BigInt("902"),
    },
  };

  at(address: string): NFTPositionManagerInstance {
    return new NFTPositionManagerInstance(address);
  }

  tests = {
    getCollectionUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionManagerTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "getCollectionUri",
        params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionManagerTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "totalSupply", params, getContractByCodeHash);
    },
    nftByIndex: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionManagerTypes.Fields,
        { index: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "nftByIndex", params, getContractByCodeHash);
    },
    validateNFT: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionManagerTypes.Fields,
        { nftId: HexString; nftIndex: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "validateNFT", params, getContractByCodeHash);
    },
    modifyLiquidity: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionManagerTypes.Fields,
        {
          payer: Address;
          nftOwner: Address;
          key: PoolKey;
          tickLower: bigint;
          tickUpper: bigint;
          liquidityDelta: bigint;
          nftIndex: bigint;
        }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint, HexString]>> => {
      return testMethod(this, "modifyLiquidity", params, getContractByCodeHash);
    },
    claimFees: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionManagerTypes.Fields,
        { refundAddress: Address; nftOwner: Address; nftIndex: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint]>> => {
      return testMethod(this, "claimFees", params, getContractByCodeHash);
    },
    getVersion: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionManagerTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getVersion", params, getContractByCodeHash);
    },
    mintNft: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionManagerTypes.Fields,
        {
          payer: Address;
          pool: HexString;
          poolKey: PoolKey;
          positionKey: PositionKey;
          to: Address;
        }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "mintNft", params, getContractByCodeHash);
    },
    burnNft: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionManagerTypes.Fields,
        {
          refundAddress: Address;
          nft: HexString;
          nftIndex: bigint;
          nftOwner: Address;
        }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "burnNft", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: NFTPositionManagerTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const NFTPositionManager = new Factory(
  Contract.fromJson(
    NFTPositionManagerContractJson,
    "",
    "070b86af9a3074a2ede0827d5c17f3525c1ef74e635e42817b1556e8ab82f8da",
    AllStructs
  )
);
registerContract(NFTPositionManager);

// Use this class to interact with the blockchain
export class NFTPositionManagerInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<NFTPositionManagerTypes.State> {
    return fetchContractState(NFTPositionManager, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeNFTMintedEvent(
    options: EventSubscribeOptions<NFTPositionManagerTypes.NFTMintedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      NFTPositionManager.contract,
      this,
      options,
      "NFTMinted",
      fromCount
    );
  }

  subscribeNFTBurnedEvent(
    options: EventSubscribeOptions<NFTPositionManagerTypes.NFTBurnedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      NFTPositionManager.contract,
      this,
      options,
      "NFTBurned",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | NFTPositionManagerTypes.NFTMintedEvent
      | NFTPositionManagerTypes.NFTBurnedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      NFTPositionManager.contract,
      this,
      options,
      fromCount
    );
  }

  view = {
    getCollectionUri: async (
      params?: NFTPositionManagerTypes.CallMethodParams<"getCollectionUri">
    ): Promise<
      NFTPositionManagerTypes.CallMethodResult<"getCollectionUri">
    > => {
      return callMethod(
        NFTPositionManager,
        this,
        "getCollectionUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params?: NFTPositionManagerTypes.CallMethodParams<"totalSupply">
    ): Promise<NFTPositionManagerTypes.CallMethodResult<"totalSupply">> => {
      return callMethod(
        NFTPositionManager,
        this,
        "totalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    nftByIndex: async (
      params: NFTPositionManagerTypes.CallMethodParams<"nftByIndex">
    ): Promise<NFTPositionManagerTypes.CallMethodResult<"nftByIndex">> => {
      return callMethod(
        NFTPositionManager,
        this,
        "nftByIndex",
        params,
        getContractByCodeHash
      );
    },
    validateNFT: async (
      params: NFTPositionManagerTypes.CallMethodParams<"validateNFT">
    ): Promise<NFTPositionManagerTypes.CallMethodResult<"validateNFT">> => {
      return callMethod(
        NFTPositionManager,
        this,
        "validateNFT",
        params,
        getContractByCodeHash
      );
    },
    modifyLiquidity: async (
      params: NFTPositionManagerTypes.CallMethodParams<"modifyLiquidity">
    ): Promise<NFTPositionManagerTypes.CallMethodResult<"modifyLiquidity">> => {
      return callMethod(
        NFTPositionManager,
        this,
        "modifyLiquidity",
        params,
        getContractByCodeHash
      );
    },
    claimFees: async (
      params: NFTPositionManagerTypes.CallMethodParams<"claimFees">
    ): Promise<NFTPositionManagerTypes.CallMethodResult<"claimFees">> => {
      return callMethod(
        NFTPositionManager,
        this,
        "claimFees",
        params,
        getContractByCodeHash
      );
    },
    getVersion: async (
      params?: NFTPositionManagerTypes.CallMethodParams<"getVersion">
    ): Promise<NFTPositionManagerTypes.CallMethodResult<"getVersion">> => {
      return callMethod(
        NFTPositionManager,
        this,
        "getVersion",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    mintNft: async (
      params: NFTPositionManagerTypes.CallMethodParams<"mintNft">
    ): Promise<NFTPositionManagerTypes.CallMethodResult<"mintNft">> => {
      return callMethod(
        NFTPositionManager,
        this,
        "mintNft",
        params,
        getContractByCodeHash
      );
    },
    burnNft: async (
      params: NFTPositionManagerTypes.CallMethodParams<"burnNft">
    ): Promise<NFTPositionManagerTypes.CallMethodResult<"burnNft">> => {
      return callMethod(
        NFTPositionManager,
        this,
        "burnNft",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getCollectionUri: async (
      params: NFTPositionManagerTypes.SignExecuteMethodParams<"getCollectionUri">
    ): Promise<
      NFTPositionManagerTypes.SignExecuteMethodResult<"getCollectionUri">
    > => {
      return signExecuteMethod(
        NFTPositionManager,
        this,
        "getCollectionUri",
        params
      );
    },
    totalSupply: async (
      params: NFTPositionManagerTypes.SignExecuteMethodParams<"totalSupply">
    ): Promise<
      NFTPositionManagerTypes.SignExecuteMethodResult<"totalSupply">
    > => {
      return signExecuteMethod(NFTPositionManager, this, "totalSupply", params);
    },
    nftByIndex: async (
      params: NFTPositionManagerTypes.SignExecuteMethodParams<"nftByIndex">
    ): Promise<
      NFTPositionManagerTypes.SignExecuteMethodResult<"nftByIndex">
    > => {
      return signExecuteMethod(NFTPositionManager, this, "nftByIndex", params);
    },
    validateNFT: async (
      params: NFTPositionManagerTypes.SignExecuteMethodParams<"validateNFT">
    ): Promise<
      NFTPositionManagerTypes.SignExecuteMethodResult<"validateNFT">
    > => {
      return signExecuteMethod(NFTPositionManager, this, "validateNFT", params);
    },
    modifyLiquidity: async (
      params: NFTPositionManagerTypes.SignExecuteMethodParams<"modifyLiquidity">
    ): Promise<
      NFTPositionManagerTypes.SignExecuteMethodResult<"modifyLiquidity">
    > => {
      return signExecuteMethod(
        NFTPositionManager,
        this,
        "modifyLiquidity",
        params
      );
    },
    claimFees: async (
      params: NFTPositionManagerTypes.SignExecuteMethodParams<"claimFees">
    ): Promise<
      NFTPositionManagerTypes.SignExecuteMethodResult<"claimFees">
    > => {
      return signExecuteMethod(NFTPositionManager, this, "claimFees", params);
    },
    getVersion: async (
      params: NFTPositionManagerTypes.SignExecuteMethodParams<"getVersion">
    ): Promise<
      NFTPositionManagerTypes.SignExecuteMethodResult<"getVersion">
    > => {
      return signExecuteMethod(NFTPositionManager, this, "getVersion", params);
    },
    mintNft: async (
      params: NFTPositionManagerTypes.SignExecuteMethodParams<"mintNft">
    ): Promise<NFTPositionManagerTypes.SignExecuteMethodResult<"mintNft">> => {
      return signExecuteMethod(NFTPositionManager, this, "mintNft", params);
    },
    burnNft: async (
      params: NFTPositionManagerTypes.SignExecuteMethodParams<"burnNft">
    ): Promise<NFTPositionManagerTypes.SignExecuteMethodResult<"burnNft">> => {
      return signExecuteMethod(NFTPositionManager, this, "burnNft", params);
    },
  };

  async multicall<Calls extends NFTPositionManagerTypes.MultiCallParams>(
    calls: Calls
  ): Promise<NFTPositionManagerTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends NFTPositionManagerTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<NFTPositionManagerTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | NFTPositionManagerTypes.MultiCallParams
      | NFTPositionManagerTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      NFTPositionManager,
      this,
      callss,
      getContractByCodeHash
    );
  }
}
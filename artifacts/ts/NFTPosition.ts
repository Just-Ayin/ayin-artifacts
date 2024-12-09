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
import { default as NFTPositionContractJson } from "../clamm/staking/NFTPosition.ral.json";
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
export namespace NFTPositionTypes {
  export type Fields = {
    manager: HexString;
    nftIndex: bigint;
    nftUriPrefix: HexString;
    pool: HexString;
    poolKey: PoolKey;
    positionKey: PositionKey;
    data: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTokenUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getCollectionIndex: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[HexString, bigint]>;
    };
    getVersion: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    u128To16ByteSaturated: {
      params: CallContractParams<{ value: bigint }>;
      result: CallContractResult<HexString>;
    };
    encodeRewardDataForURL: {
      params: CallContractParams<{
        stakes: [
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo
        ];
        position: Position;
      }>;
      result: CallContractResult<HexString>;
    };
    burn: {
      params: CallContractParams<{ owner: Address; refundAddress: Address }>;
      result: CallContractResult<null>;
    };
    getPositionInfo: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Position>;
    };
    getPoolKey: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<PoolKey>;
    };
    getPositionKey: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<PositionKey>;
    };
    toHex: {
      params: CallContractParams<{ bytes: HexString }>;
      result: CallContractResult<HexString>;
    };
    upgrade: {
      params: CallContractParams<{ newCode: HexString }>;
      result: CallContractResult<null>;
    };
    getStakingInfos: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<
        [
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo
        ]
      >;
    };
    decodeStakingDataSingle: {
      params: CallContractParams<{ encoded: HexString; offset: bigint }>;
      result: CallContractResult<StakeCLInfo>;
    };
    decodeStakingData: {
      params: CallContractParams<{ encoded: HexString; offset: bigint }>;
      result: CallContractResult<
        [
          [
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo
          ],
          bigint
        ]
      >;
    };
    getStakeIndex: {
      params: CallContractParams<{ programId: HexString }>;
      result: CallContractResult<bigint>;
    };
    stake: {
      params: CallContractParams<{ programId: HexString }>;
      result: CallContractResult<bigint>;
    };
    unstake: {
      params: CallContractParams<{ programId: HexString }>;
      result: CallContractResult<bigint>;
    };
    notStaked: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<boolean>;
    };
    encodeStakingDataSingle: {
      params: CallContractParams<{ stakeInfo: StakeCLInfo }>;
      result: CallContractResult<HexString>;
    };
    setStakingDataAt: {
      params: CallContractParams<{ index: bigint; stakingData: HexString }>;
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
    getTokenUri: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getCollectionIndex: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getVersion: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    u128To16ByteSaturated: {
      params: SignExecuteContractMethodParams<{ value: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    encodeRewardDataForURL: {
      params: SignExecuteContractMethodParams<{
        stakes: [
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo
        ];
        position: Position;
      }>;
      result: SignExecuteScriptTxResult;
    };
    burn: {
      params: SignExecuteContractMethodParams<{
        owner: Address;
        refundAddress: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
    getPositionInfo: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getPoolKey: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getPositionKey: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    toHex: {
      params: SignExecuteContractMethodParams<{ bytes: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    upgrade: {
      params: SignExecuteContractMethodParams<{ newCode: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    getStakingInfos: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    decodeStakingDataSingle: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        offset: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    decodeStakingData: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        offset: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    getStakeIndex: {
      params: SignExecuteContractMethodParams<{ programId: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    stake: {
      params: SignExecuteContractMethodParams<{ programId: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    unstake: {
      params: SignExecuteContractMethodParams<{ programId: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    notStaked: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    encodeStakingDataSingle: {
      params: SignExecuteContractMethodParams<{ stakeInfo: StakeCLInfo }>;
      result: SignExecuteScriptTxResult;
    };
    setStakingDataAt: {
      params: SignExecuteContractMethodParams<{
        index: bigint;
        stakingData: HexString;
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
  NFTPositionInstance,
  NFTPositionTypes.Fields
> {
  encodeFields(fields: NFTPositionTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  consts = {
    MaxStakes: BigInt("8"),
    StakeCLInfoLen: BigInt("64"),
    StakeCLInfosLen: BigInt("512"),
    MinSqrtPrice: BigInt("4295128739"),
    MaxSqrtPrice: BigInt("1461446703485210103287273052203988822378723970342"),
    Version: BigInt("2"),
    MaxU128: BigInt("340282366920938463463374607431768211455"),
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
      UpgradeInProgress: BigInt("111"),
      MigrateTokenIdsSizeInvalid: BigInt("112"),
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
      TickUninitialized: BigInt("217"),
      TokenNotInPool: BigInt("218"),
      PositionIsStaked: BigInt("219"),
      InvariantNotConverged: BigInt("300"),
      BalanceUpdateNotConverged: BigInt("301"),
      CoinIndexOutOfBounds: BigInt("302"),
      SameCoinIndices: BigInt("303"),
      IncorrectTokenIndex: BigInt("800"),
      NFTNotFound: BigInt("801"),
      NFTNotPartOfCollection: BigInt("802"),
      MissingNFTInput: BigInt("803"),
      NFTUpgradeSameVersion: BigInt("804"),
      NFTUpgradeBadCodeHash: BigInt("805"),
      IncentiveRewardZero: BigInt("810"),
      IncentiveStartTimeTooEarly: BigInt("811"),
      StartTimeAfterEndTime: BigInt("812"),
      StartTimeTooFarInTheFuture: BigInt("813"),
      IncentiveDurationTooLong: BigInt("814"),
      NotNFTPositionManager: BigInt("815"),
      StakeNotFound: BigInt("816"),
      TooManyStakes: BigInt("817"),
      StakeAlreadyExists: BigInt("818"),
      EmptyStakeNotAllowed: BigInt("819"),
      TooEarlyToStake: BigInt("820"),
      TooLateToStake: BigInt("821"),
      IncentiveNotFound: BigInt("822"),
      MinimumAmountOutNotReached: BigInt("900"),
      UnknownPoolType: BigInt("901"),
      UnsupportedPoolType: BigInt("902"),
    },
  };

  at(address: string): NFTPositionInstance {
    return new NFTPositionInstance(address);
  }

  tests = {
    getTokenUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenUri", params, getContractByCodeHash);
    },
    getCollectionIndex: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<[HexString, bigint]>> => {
      return testMethod(
        this,
        "getCollectionIndex",
        params,
        getContractByCodeHash
      );
    },
    getVersion: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getVersion", params, getContractByCodeHash);
    },
    u128To16ByteSaturated: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { value: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "u128To16ByteSaturated",
        params,
        getContractByCodeHash
      );
    },
    encodeRewardDataForURL: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        {
          stakes: [
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo
          ];
          position: Position;
        }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "encodeRewardDataForURL",
        params,
        getContractByCodeHash
      );
    },
    burn: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { owner: Address; refundAddress: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "burn", params, getContractByCodeHash);
    },
    getPositionInfo: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<Position>> => {
      return testMethod(this, "getPositionInfo", params, getContractByCodeHash);
    },
    getPoolKey: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<PoolKey>> => {
      return testMethod(this, "getPoolKey", params, getContractByCodeHash);
    },
    getPositionKey: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<PositionKey>> => {
      return testMethod(this, "getPositionKey", params, getContractByCodeHash);
    },
    toHex: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { bytes: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "toHex", params, getContractByCodeHash);
    },
    upgrade: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { newCode: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "upgrade", params, getContractByCodeHash);
    },
    getStakingInfos: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<
      TestContractResultWithoutMaps<
        [
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo,
          StakeCLInfo
        ]
      >
    > => {
      return testMethod(this, "getStakingInfos", params, getContractByCodeHash);
    },
    decodeStakingDataSingle: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { encoded: HexString; offset: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<StakeCLInfo>> => {
      return testMethod(
        this,
        "decodeStakingDataSingle",
        params,
        getContractByCodeHash
      );
    },
    decodeStakingData: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { encoded: HexString; offset: bigint }
      >
    ): Promise<
      TestContractResultWithoutMaps<
        [
          [
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo,
            StakeCLInfo
          ],
          bigint
        ]
      >
    > => {
      return testMethod(
        this,
        "decodeStakingData",
        params,
        getContractByCodeHash
      );
    },
    getStakeIndex: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { programId: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getStakeIndex", params, getContractByCodeHash);
    },
    stake: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { programId: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "stake", params, getContractByCodeHash);
    },
    unstake: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { programId: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "unstake", params, getContractByCodeHash);
    },
    notStaked: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTPositionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<boolean>> => {
      return testMethod(this, "notStaked", params, getContractByCodeHash);
    },
    encodeStakingDataSingle: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { stakeInfo: StakeCLInfo }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "encodeStakingDataSingle",
        params,
        getContractByCodeHash
      );
    },
    setStakingDataAt: async (
      params: TestContractParamsWithoutMaps<
        NFTPositionTypes.Fields,
        { index: bigint; stakingData: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "setStakingDataAt",
        params,
        getContractByCodeHash
      );
    },
  };

  stateForTest(
    initFields: NFTPositionTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const NFTPosition = new Factory(
  Contract.fromJson(
    NFTPositionContractJson,
    "",
    "bfc4cd00c6a9777824553723016eb411689a3d290cd141af073ba24ca26ed001",
    AllStructs
  )
);
registerContract(NFTPosition);

// Use this class to interact with the blockchain
export class NFTPositionInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<NFTPositionTypes.State> {
    return fetchContractState(NFTPosition, this);
  }

  view = {
    getTokenUri: async (
      params?: NFTPositionTypes.CallMethodParams<"getTokenUri">
    ): Promise<NFTPositionTypes.CallMethodResult<"getTokenUri">> => {
      return callMethod(
        NFTPosition,
        this,
        "getTokenUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getCollectionIndex: async (
      params?: NFTPositionTypes.CallMethodParams<"getCollectionIndex">
    ): Promise<NFTPositionTypes.CallMethodResult<"getCollectionIndex">> => {
      return callMethod(
        NFTPosition,
        this,
        "getCollectionIndex",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getVersion: async (
      params?: NFTPositionTypes.CallMethodParams<"getVersion">
    ): Promise<NFTPositionTypes.CallMethodResult<"getVersion">> => {
      return callMethod(
        NFTPosition,
        this,
        "getVersion",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    u128To16ByteSaturated: async (
      params: NFTPositionTypes.CallMethodParams<"u128To16ByteSaturated">
    ): Promise<NFTPositionTypes.CallMethodResult<"u128To16ByteSaturated">> => {
      return callMethod(
        NFTPosition,
        this,
        "u128To16ByteSaturated",
        params,
        getContractByCodeHash
      );
    },
    encodeRewardDataForURL: async (
      params: NFTPositionTypes.CallMethodParams<"encodeRewardDataForURL">
    ): Promise<NFTPositionTypes.CallMethodResult<"encodeRewardDataForURL">> => {
      return callMethod(
        NFTPosition,
        this,
        "encodeRewardDataForURL",
        params,
        getContractByCodeHash
      );
    },
    burn: async (
      params: NFTPositionTypes.CallMethodParams<"burn">
    ): Promise<NFTPositionTypes.CallMethodResult<"burn">> => {
      return callMethod(
        NFTPosition,
        this,
        "burn",
        params,
        getContractByCodeHash
      );
    },
    getPositionInfo: async (
      params?: NFTPositionTypes.CallMethodParams<"getPositionInfo">
    ): Promise<NFTPositionTypes.CallMethodResult<"getPositionInfo">> => {
      return callMethod(
        NFTPosition,
        this,
        "getPositionInfo",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getPoolKey: async (
      params?: NFTPositionTypes.CallMethodParams<"getPoolKey">
    ): Promise<NFTPositionTypes.CallMethodResult<"getPoolKey">> => {
      return callMethod(
        NFTPosition,
        this,
        "getPoolKey",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getPositionKey: async (
      params?: NFTPositionTypes.CallMethodParams<"getPositionKey">
    ): Promise<NFTPositionTypes.CallMethodResult<"getPositionKey">> => {
      return callMethod(
        NFTPosition,
        this,
        "getPositionKey",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    toHex: async (
      params: NFTPositionTypes.CallMethodParams<"toHex">
    ): Promise<NFTPositionTypes.CallMethodResult<"toHex">> => {
      return callMethod(
        NFTPosition,
        this,
        "toHex",
        params,
        getContractByCodeHash
      );
    },
    upgrade: async (
      params: NFTPositionTypes.CallMethodParams<"upgrade">
    ): Promise<NFTPositionTypes.CallMethodResult<"upgrade">> => {
      return callMethod(
        NFTPosition,
        this,
        "upgrade",
        params,
        getContractByCodeHash
      );
    },
    getStakingInfos: async (
      params?: NFTPositionTypes.CallMethodParams<"getStakingInfos">
    ): Promise<NFTPositionTypes.CallMethodResult<"getStakingInfos">> => {
      return callMethod(
        NFTPosition,
        this,
        "getStakingInfos",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    decodeStakingDataSingle: async (
      params: NFTPositionTypes.CallMethodParams<"decodeStakingDataSingle">
    ): Promise<
      NFTPositionTypes.CallMethodResult<"decodeStakingDataSingle">
    > => {
      return callMethod(
        NFTPosition,
        this,
        "decodeStakingDataSingle",
        params,
        getContractByCodeHash
      );
    },
    decodeStakingData: async (
      params: NFTPositionTypes.CallMethodParams<"decodeStakingData">
    ): Promise<NFTPositionTypes.CallMethodResult<"decodeStakingData">> => {
      return callMethod(
        NFTPosition,
        this,
        "decodeStakingData",
        params,
        getContractByCodeHash
      );
    },
    getStakeIndex: async (
      params: NFTPositionTypes.CallMethodParams<"getStakeIndex">
    ): Promise<NFTPositionTypes.CallMethodResult<"getStakeIndex">> => {
      return callMethod(
        NFTPosition,
        this,
        "getStakeIndex",
        params,
        getContractByCodeHash
      );
    },
    stake: async (
      params: NFTPositionTypes.CallMethodParams<"stake">
    ): Promise<NFTPositionTypes.CallMethodResult<"stake">> => {
      return callMethod(
        NFTPosition,
        this,
        "stake",
        params,
        getContractByCodeHash
      );
    },
    unstake: async (
      params: NFTPositionTypes.CallMethodParams<"unstake">
    ): Promise<NFTPositionTypes.CallMethodResult<"unstake">> => {
      return callMethod(
        NFTPosition,
        this,
        "unstake",
        params,
        getContractByCodeHash
      );
    },
    notStaked: async (
      params?: NFTPositionTypes.CallMethodParams<"notStaked">
    ): Promise<NFTPositionTypes.CallMethodResult<"notStaked">> => {
      return callMethod(
        NFTPosition,
        this,
        "notStaked",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    encodeStakingDataSingle: async (
      params: NFTPositionTypes.CallMethodParams<"encodeStakingDataSingle">
    ): Promise<
      NFTPositionTypes.CallMethodResult<"encodeStakingDataSingle">
    > => {
      return callMethod(
        NFTPosition,
        this,
        "encodeStakingDataSingle",
        params,
        getContractByCodeHash
      );
    },
    setStakingDataAt: async (
      params: NFTPositionTypes.CallMethodParams<"setStakingDataAt">
    ): Promise<NFTPositionTypes.CallMethodResult<"setStakingDataAt">> => {
      return callMethod(
        NFTPosition,
        this,
        "setStakingDataAt",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getTokenUri: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"getTokenUri">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"getTokenUri">> => {
      return signExecuteMethod(NFTPosition, this, "getTokenUri", params);
    },
    getCollectionIndex: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"getCollectionIndex">
    ): Promise<
      NFTPositionTypes.SignExecuteMethodResult<"getCollectionIndex">
    > => {
      return signExecuteMethod(NFTPosition, this, "getCollectionIndex", params);
    },
    getVersion: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"getVersion">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"getVersion">> => {
      return signExecuteMethod(NFTPosition, this, "getVersion", params);
    },
    u128To16ByteSaturated: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"u128To16ByteSaturated">
    ): Promise<
      NFTPositionTypes.SignExecuteMethodResult<"u128To16ByteSaturated">
    > => {
      return signExecuteMethod(
        NFTPosition,
        this,
        "u128To16ByteSaturated",
        params
      );
    },
    encodeRewardDataForURL: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"encodeRewardDataForURL">
    ): Promise<
      NFTPositionTypes.SignExecuteMethodResult<"encodeRewardDataForURL">
    > => {
      return signExecuteMethod(
        NFTPosition,
        this,
        "encodeRewardDataForURL",
        params
      );
    },
    burn: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"burn">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"burn">> => {
      return signExecuteMethod(NFTPosition, this, "burn", params);
    },
    getPositionInfo: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"getPositionInfo">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"getPositionInfo">> => {
      return signExecuteMethod(NFTPosition, this, "getPositionInfo", params);
    },
    getPoolKey: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"getPoolKey">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"getPoolKey">> => {
      return signExecuteMethod(NFTPosition, this, "getPoolKey", params);
    },
    getPositionKey: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"getPositionKey">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"getPositionKey">> => {
      return signExecuteMethod(NFTPosition, this, "getPositionKey", params);
    },
    toHex: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"toHex">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"toHex">> => {
      return signExecuteMethod(NFTPosition, this, "toHex", params);
    },
    upgrade: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"upgrade">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"upgrade">> => {
      return signExecuteMethod(NFTPosition, this, "upgrade", params);
    },
    getStakingInfos: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"getStakingInfos">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"getStakingInfos">> => {
      return signExecuteMethod(NFTPosition, this, "getStakingInfos", params);
    },
    decodeStakingDataSingle: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"decodeStakingDataSingle">
    ): Promise<
      NFTPositionTypes.SignExecuteMethodResult<"decodeStakingDataSingle">
    > => {
      return signExecuteMethod(
        NFTPosition,
        this,
        "decodeStakingDataSingle",
        params
      );
    },
    decodeStakingData: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"decodeStakingData">
    ): Promise<
      NFTPositionTypes.SignExecuteMethodResult<"decodeStakingData">
    > => {
      return signExecuteMethod(NFTPosition, this, "decodeStakingData", params);
    },
    getStakeIndex: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"getStakeIndex">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"getStakeIndex">> => {
      return signExecuteMethod(NFTPosition, this, "getStakeIndex", params);
    },
    stake: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"stake">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"stake">> => {
      return signExecuteMethod(NFTPosition, this, "stake", params);
    },
    unstake: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"unstake">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"unstake">> => {
      return signExecuteMethod(NFTPosition, this, "unstake", params);
    },
    notStaked: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"notStaked">
    ): Promise<NFTPositionTypes.SignExecuteMethodResult<"notStaked">> => {
      return signExecuteMethod(NFTPosition, this, "notStaked", params);
    },
    encodeStakingDataSingle: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"encodeStakingDataSingle">
    ): Promise<
      NFTPositionTypes.SignExecuteMethodResult<"encodeStakingDataSingle">
    > => {
      return signExecuteMethod(
        NFTPosition,
        this,
        "encodeStakingDataSingle",
        params
      );
    },
    setStakingDataAt: async (
      params: NFTPositionTypes.SignExecuteMethodParams<"setStakingDataAt">
    ): Promise<
      NFTPositionTypes.SignExecuteMethodResult<"setStakingDataAt">
    > => {
      return signExecuteMethod(NFTPosition, this, "setStakingDataAt", params);
    },
  };

  async multicall<Calls extends NFTPositionTypes.MultiCallParams>(
    calls: Calls
  ): Promise<NFTPositionTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends NFTPositionTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<NFTPositionTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | NFTPositionTypes.MultiCallParams
      | NFTPositionTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      NFTPosition,
      this,
      callss,
      getContractByCodeHash
    );
  }
}

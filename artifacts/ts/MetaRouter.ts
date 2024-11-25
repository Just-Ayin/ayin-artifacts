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
import { default as MetaRouterContractJson } from "../router/MetaRouter.ral.json";
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
export namespace MetaRouterTypes {
  export type Fields = {
    factory: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    decodePoolKey: {
      params: CallContractParams<{ encoded: HexString; index: bigint }>;
      result: CallContractResult<PoolKey>;
    };
    goV3: {
      params: CallContractParams<{
        encoded: HexString;
        index: bigint;
        zeroForOne: boolean;
        tokenIn: HexString;
        amountIn: bigint;
        payer: Address;
      }>;
      result: CallContractResult<[bigint, bigint, bigint]>;
    };
    goV3InChain: {
      params: CallContractParams<{
        encoded: HexString;
        index: bigint;
        zeroForOne: boolean;
        amountIn: bigint;
      }>;
      result: CallContractResult<[bigint, bigint, bigint]>;
    };
    withdrawV3: {
      params: CallContractParams<{ beneficiary: Address; tokenOut: HexString }>;
      result: CallContractResult<bigint>;
    };
    decodeTokenPair: {
      params: CallContractParams<{ encoded: HexString; index: bigint }>;
      result: CallContractResult<HexString>;
    };
    getReserveInAndReserveOut: {
      params: CallContractParams<{ tokenPair: HexString; tokenIn: HexString }>;
      result: CallContractResult<[bigint, bigint]>;
    };
    swapExactTokenForToken: {
      params: CallContractParams<{
        tokenPair: HexString;
        tokenIn: HexString;
        amountIn: bigint;
        payer: Address;
        to: Address;
      }>;
      result: CallContractResult<bigint>;
    };
    swapTokenForExactToken: {
      params: CallContractParams<{
        tokenPair: HexString;
        tokenIn: HexString;
        amountOut: bigint;
        payer: Address;
        to: Address;
      }>;
      result: CallContractResult<bigint>;
    };
    swap: {
      params: CallContractParams<{
        tokenPair: HexString;
        payer: Address;
        to: Address;
        tokenIn: HexString;
        amountIn: bigint;
        amountOut: bigint;
      }>;
      result: CallContractResult<null>;
    };
    goV2: {
      params: CallContractParams<{
        encoded: HexString;
        index: bigint;
        tokenIn: HexString;
        amountIn: bigint;
        payer: Address;
        beneficiary: Address;
      }>;
      result: CallContractResult<[bigint, bigint, bigint]>;
    };
    decodeChainDesc: {
      params: CallContractParams<{ encoded: HexString; index: bigint }>;
      result: CallContractResult<[bigint, bigint]>;
    };
    decodePoolType: {
      params: CallContractParams<{ encoded: HexString; index: bigint }>;
      result: CallContractResult<bigint>;
    };
    goByPoolType: {
      params: CallContractParams<{
        encoded: HexString;
        index: bigint;
        poolType: bigint;
        tokenIn: HexString;
        amountIn: bigint;
        payer: Address;
        beneficiary: Address;
      }>;
      result: CallContractResult<[bigint, bigint, bigint]>;
    };
    goByPoolTypeInChain: {
      params: CallContractParams<{
        encoded: HexString;
        index: bigint;
        poolType: bigint;
        amountIn: bigint;
      }>;
      result: CallContractResult<[bigint, bigint, bigint]>;
    };
    go: {
      params: CallContractParams<{
        tokenIn: HexString;
        tokenOut: HexString;
        minAmountOut: bigint;
        payer: Address;
        beneficiary: Address;
        encoded: HexString;
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
    decodePoolKey: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        index: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    goV3: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        index: bigint;
        zeroForOne: boolean;
        tokenIn: HexString;
        amountIn: bigint;
        payer: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
    goV3InChain: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        index: bigint;
        zeroForOne: boolean;
        amountIn: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    withdrawV3: {
      params: SignExecuteContractMethodParams<{
        beneficiary: Address;
        tokenOut: HexString;
      }>;
      result: SignExecuteScriptTxResult;
    };
    decodeTokenPair: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        index: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    getReserveInAndReserveOut: {
      params: SignExecuteContractMethodParams<{
        tokenPair: HexString;
        tokenIn: HexString;
      }>;
      result: SignExecuteScriptTxResult;
    };
    swapExactTokenForToken: {
      params: SignExecuteContractMethodParams<{
        tokenPair: HexString;
        tokenIn: HexString;
        amountIn: bigint;
        payer: Address;
        to: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
    swapTokenForExactToken: {
      params: SignExecuteContractMethodParams<{
        tokenPair: HexString;
        tokenIn: HexString;
        amountOut: bigint;
        payer: Address;
        to: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
    swap: {
      params: SignExecuteContractMethodParams<{
        tokenPair: HexString;
        payer: Address;
        to: Address;
        tokenIn: HexString;
        amountIn: bigint;
        amountOut: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    goV2: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        index: bigint;
        tokenIn: HexString;
        amountIn: bigint;
        payer: Address;
        beneficiary: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
    decodeChainDesc: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        index: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    decodePoolType: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        index: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    goByPoolType: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        index: bigint;
        poolType: bigint;
        tokenIn: HexString;
        amountIn: bigint;
        payer: Address;
        beneficiary: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
    goByPoolTypeInChain: {
      params: SignExecuteContractMethodParams<{
        encoded: HexString;
        index: bigint;
        poolType: bigint;
        amountIn: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    go: {
      params: SignExecuteContractMethodParams<{
        tokenIn: HexString;
        tokenOut: HexString;
        minAmountOut: bigint;
        payer: Address;
        beneficiary: Address;
        encoded: HexString;
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
  MetaRouterInstance,
  MetaRouterTypes.Fields
> {
  encodeFields(fields: MetaRouterTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  consts = {
    V3Token0Offset: BigInt("0"),
    V3Token0Size: BigInt("32"),
    V3Token1Offset: BigInt("32"),
    V3Token1Size: BigInt("32"),
    V3TickSpacingOffset: BigInt("64"),
    V3TickSpacingSize: BigInt("32"),
    V3FeePerMilOffset: BigInt("96"),
    V3FeePerMilSize: BigInt("32"),
    V3PoolDescSize: BigInt("128"),
    MinSqrtPrice: BigInt("4295128739"),
    MaxSqrtPrice: BigInt("1461446703485210103287273052203988822378723970342"),
    V2TokenPairOffset: BigInt("0"),
    V2TokenPairSize: BigInt("32"),
    V2PoolDescSize: BigInt("32"),
    V2FeePermille: BigInt("3"),
    ChainLengthSize: BigInt("1"),
    AmountThroughOffset: BigInt("1"),
    AmountThroughSize: BigInt("16"),
    SwapChainDescSize: BigInt("17"),
    PoolTypeSize: BigInt("1"),
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
      NFTUpgradeSameVersion: BigInt("804"),
      NFTUpgradeBadCodeHash: BigInt("805"),
      MinimumAmountOutNotReached: BigInt("900"),
      UnknownPoolType: BigInt("901"),
      UnsupportedPoolType: BigInt("902"),
    },
    PoolType: {
      V3OneForZero: BigInt("0"),
      V3ZeroForOne: BigInt("1"),
      V2: BigInt("2"),
    },
  };

  at(address: string): MetaRouterInstance {
    return new MetaRouterInstance(address);
  }

  tests = {
    decodePoolKey: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        { encoded: HexString; index: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<PoolKey>> => {
      return testMethod(this, "decodePoolKey", params, getContractByCodeHash);
    },
    goV3: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        {
          encoded: HexString;
          index: bigint;
          zeroForOne: boolean;
          tokenIn: HexString;
          amountIn: bigint;
          payer: Address;
        }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint, bigint]>> => {
      return testMethod(this, "goV3", params, getContractByCodeHash);
    },
    goV3InChain: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        {
          encoded: HexString;
          index: bigint;
          zeroForOne: boolean;
          amountIn: bigint;
        }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint, bigint]>> => {
      return testMethod(this, "goV3InChain", params, getContractByCodeHash);
    },
    withdrawV3: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        { beneficiary: Address; tokenOut: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "withdrawV3", params, getContractByCodeHash);
    },
    decodeTokenPair: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        { encoded: HexString; index: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "decodeTokenPair", params, getContractByCodeHash);
    },
    getReserveInAndReserveOut: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        { tokenPair: HexString; tokenIn: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint]>> => {
      return testMethod(
        this,
        "getReserveInAndReserveOut",
        params,
        getContractByCodeHash
      );
    },
    swapExactTokenForToken: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        {
          tokenPair: HexString;
          tokenIn: HexString;
          amountIn: bigint;
          payer: Address;
          to: Address;
        }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(
        this,
        "swapExactTokenForToken",
        params,
        getContractByCodeHash
      );
    },
    swapTokenForExactToken: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        {
          tokenPair: HexString;
          tokenIn: HexString;
          amountOut: bigint;
          payer: Address;
          to: Address;
        }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(
        this,
        "swapTokenForExactToken",
        params,
        getContractByCodeHash
      );
    },
    swap: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        {
          tokenPair: HexString;
          payer: Address;
          to: Address;
          tokenIn: HexString;
          amountIn: bigint;
          amountOut: bigint;
        }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "swap", params, getContractByCodeHash);
    },
    goV2: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        {
          encoded: HexString;
          index: bigint;
          tokenIn: HexString;
          amountIn: bigint;
          payer: Address;
          beneficiary: Address;
        }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint, bigint]>> => {
      return testMethod(this, "goV2", params, getContractByCodeHash);
    },
    decodeChainDesc: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        { encoded: HexString; index: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint]>> => {
      return testMethod(this, "decodeChainDesc", params, getContractByCodeHash);
    },
    decodePoolType: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        { encoded: HexString; index: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "decodePoolType", params, getContractByCodeHash);
    },
    goByPoolType: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        {
          encoded: HexString;
          index: bigint;
          poolType: bigint;
          tokenIn: HexString;
          amountIn: bigint;
          payer: Address;
          beneficiary: Address;
        }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint, bigint]>> => {
      return testMethod(this, "goByPoolType", params, getContractByCodeHash);
    },
    goByPoolTypeInChain: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        {
          encoded: HexString;
          index: bigint;
          poolType: bigint;
          amountIn: bigint;
        }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint, bigint]>> => {
      return testMethod(
        this,
        "goByPoolTypeInChain",
        params,
        getContractByCodeHash
      );
    },
    go: async (
      params: TestContractParamsWithoutMaps<
        MetaRouterTypes.Fields,
        {
          tokenIn: HexString;
          tokenOut: HexString;
          minAmountOut: bigint;
          payer: Address;
          beneficiary: Address;
          encoded: HexString;
        }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "go", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: MetaRouterTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const MetaRouter = new Factory(
  Contract.fromJson(
    MetaRouterContractJson,
    "",
    "cb8eaf09411c7ecf6259c1c35e32cbdb549f4fbb4bbfb5803a6c51dc535065dc",
    AllStructs
  )
);
registerContract(MetaRouter);

// Use this class to interact with the blockchain
export class MetaRouterInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<MetaRouterTypes.State> {
    return fetchContractState(MetaRouter, this);
  }

  view = {
    decodePoolKey: async (
      params: MetaRouterTypes.CallMethodParams<"decodePoolKey">
    ): Promise<MetaRouterTypes.CallMethodResult<"decodePoolKey">> => {
      return callMethod(
        MetaRouter,
        this,
        "decodePoolKey",
        params,
        getContractByCodeHash
      );
    },
    goV3: async (
      params: MetaRouterTypes.CallMethodParams<"goV3">
    ): Promise<MetaRouterTypes.CallMethodResult<"goV3">> => {
      return callMethod(
        MetaRouter,
        this,
        "goV3",
        params,
        getContractByCodeHash
      );
    },
    goV3InChain: async (
      params: MetaRouterTypes.CallMethodParams<"goV3InChain">
    ): Promise<MetaRouterTypes.CallMethodResult<"goV3InChain">> => {
      return callMethod(
        MetaRouter,
        this,
        "goV3InChain",
        params,
        getContractByCodeHash
      );
    },
    withdrawV3: async (
      params: MetaRouterTypes.CallMethodParams<"withdrawV3">
    ): Promise<MetaRouterTypes.CallMethodResult<"withdrawV3">> => {
      return callMethod(
        MetaRouter,
        this,
        "withdrawV3",
        params,
        getContractByCodeHash
      );
    },
    decodeTokenPair: async (
      params: MetaRouterTypes.CallMethodParams<"decodeTokenPair">
    ): Promise<MetaRouterTypes.CallMethodResult<"decodeTokenPair">> => {
      return callMethod(
        MetaRouter,
        this,
        "decodeTokenPair",
        params,
        getContractByCodeHash
      );
    },
    getReserveInAndReserveOut: async (
      params: MetaRouterTypes.CallMethodParams<"getReserveInAndReserveOut">
    ): Promise<
      MetaRouterTypes.CallMethodResult<"getReserveInAndReserveOut">
    > => {
      return callMethod(
        MetaRouter,
        this,
        "getReserveInAndReserveOut",
        params,
        getContractByCodeHash
      );
    },
    swapExactTokenForToken: async (
      params: MetaRouterTypes.CallMethodParams<"swapExactTokenForToken">
    ): Promise<MetaRouterTypes.CallMethodResult<"swapExactTokenForToken">> => {
      return callMethod(
        MetaRouter,
        this,
        "swapExactTokenForToken",
        params,
        getContractByCodeHash
      );
    },
    swapTokenForExactToken: async (
      params: MetaRouterTypes.CallMethodParams<"swapTokenForExactToken">
    ): Promise<MetaRouterTypes.CallMethodResult<"swapTokenForExactToken">> => {
      return callMethod(
        MetaRouter,
        this,
        "swapTokenForExactToken",
        params,
        getContractByCodeHash
      );
    },
    swap: async (
      params: MetaRouterTypes.CallMethodParams<"swap">
    ): Promise<MetaRouterTypes.CallMethodResult<"swap">> => {
      return callMethod(
        MetaRouter,
        this,
        "swap",
        params,
        getContractByCodeHash
      );
    },
    goV2: async (
      params: MetaRouterTypes.CallMethodParams<"goV2">
    ): Promise<MetaRouterTypes.CallMethodResult<"goV2">> => {
      return callMethod(
        MetaRouter,
        this,
        "goV2",
        params,
        getContractByCodeHash
      );
    },
    decodeChainDesc: async (
      params: MetaRouterTypes.CallMethodParams<"decodeChainDesc">
    ): Promise<MetaRouterTypes.CallMethodResult<"decodeChainDesc">> => {
      return callMethod(
        MetaRouter,
        this,
        "decodeChainDesc",
        params,
        getContractByCodeHash
      );
    },
    decodePoolType: async (
      params: MetaRouterTypes.CallMethodParams<"decodePoolType">
    ): Promise<MetaRouterTypes.CallMethodResult<"decodePoolType">> => {
      return callMethod(
        MetaRouter,
        this,
        "decodePoolType",
        params,
        getContractByCodeHash
      );
    },
    goByPoolType: async (
      params: MetaRouterTypes.CallMethodParams<"goByPoolType">
    ): Promise<MetaRouterTypes.CallMethodResult<"goByPoolType">> => {
      return callMethod(
        MetaRouter,
        this,
        "goByPoolType",
        params,
        getContractByCodeHash
      );
    },
    goByPoolTypeInChain: async (
      params: MetaRouterTypes.CallMethodParams<"goByPoolTypeInChain">
    ): Promise<MetaRouterTypes.CallMethodResult<"goByPoolTypeInChain">> => {
      return callMethod(
        MetaRouter,
        this,
        "goByPoolTypeInChain",
        params,
        getContractByCodeHash
      );
    },
    go: async (
      params: MetaRouterTypes.CallMethodParams<"go">
    ): Promise<MetaRouterTypes.CallMethodResult<"go">> => {
      return callMethod(MetaRouter, this, "go", params, getContractByCodeHash);
    },
  };

  transact = {
    decodePoolKey: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"decodePoolKey">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"decodePoolKey">> => {
      return signExecuteMethod(MetaRouter, this, "decodePoolKey", params);
    },
    goV3: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"goV3">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"goV3">> => {
      return signExecuteMethod(MetaRouter, this, "goV3", params);
    },
    goV3InChain: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"goV3InChain">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"goV3InChain">> => {
      return signExecuteMethod(MetaRouter, this, "goV3InChain", params);
    },
    withdrawV3: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"withdrawV3">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"withdrawV3">> => {
      return signExecuteMethod(MetaRouter, this, "withdrawV3", params);
    },
    decodeTokenPair: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"decodeTokenPair">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"decodeTokenPair">> => {
      return signExecuteMethod(MetaRouter, this, "decodeTokenPair", params);
    },
    getReserveInAndReserveOut: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"getReserveInAndReserveOut">
    ): Promise<
      MetaRouterTypes.SignExecuteMethodResult<"getReserveInAndReserveOut">
    > => {
      return signExecuteMethod(
        MetaRouter,
        this,
        "getReserveInAndReserveOut",
        params
      );
    },
    swapExactTokenForToken: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"swapExactTokenForToken">
    ): Promise<
      MetaRouterTypes.SignExecuteMethodResult<"swapExactTokenForToken">
    > => {
      return signExecuteMethod(
        MetaRouter,
        this,
        "swapExactTokenForToken",
        params
      );
    },
    swapTokenForExactToken: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"swapTokenForExactToken">
    ): Promise<
      MetaRouterTypes.SignExecuteMethodResult<"swapTokenForExactToken">
    > => {
      return signExecuteMethod(
        MetaRouter,
        this,
        "swapTokenForExactToken",
        params
      );
    },
    swap: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"swap">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"swap">> => {
      return signExecuteMethod(MetaRouter, this, "swap", params);
    },
    goV2: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"goV2">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"goV2">> => {
      return signExecuteMethod(MetaRouter, this, "goV2", params);
    },
    decodeChainDesc: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"decodeChainDesc">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"decodeChainDesc">> => {
      return signExecuteMethod(MetaRouter, this, "decodeChainDesc", params);
    },
    decodePoolType: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"decodePoolType">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"decodePoolType">> => {
      return signExecuteMethod(MetaRouter, this, "decodePoolType", params);
    },
    goByPoolType: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"goByPoolType">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"goByPoolType">> => {
      return signExecuteMethod(MetaRouter, this, "goByPoolType", params);
    },
    goByPoolTypeInChain: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"goByPoolTypeInChain">
    ): Promise<
      MetaRouterTypes.SignExecuteMethodResult<"goByPoolTypeInChain">
    > => {
      return signExecuteMethod(MetaRouter, this, "goByPoolTypeInChain", params);
    },
    go: async (
      params: MetaRouterTypes.SignExecuteMethodParams<"go">
    ): Promise<MetaRouterTypes.SignExecuteMethodResult<"go">> => {
      return signExecuteMethod(MetaRouter, this, "go", params);
    },
  };

  async multicall<Calls extends MetaRouterTypes.MultiCallParams>(
    calls: Calls
  ): Promise<MetaRouterTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends MetaRouterTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<MetaRouterTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | MetaRouterTypes.MultiCallParams
      | MetaRouterTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      MetaRouter,
      this,
      callss,
      getContractByCodeHash
    );
  }
}

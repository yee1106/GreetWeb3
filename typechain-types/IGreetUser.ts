/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IGreetUserInterface extends utils.Interface {
  contractName: "IGreetUser";
  functions: {
    "admin()": FunctionFragment;
    "getUserCount()": FunctionFragment;
    "getUserPublicDetailsByAddress(address)": FunctionFragment;
    "isRegistered(address)": FunctionFragment;
    "isTrustedForwarder(address)": FunctionFragment;
    "registerNewUser(string)": FunctionFragment;
    "setTrustForwarder(address)": FunctionFragment;
    "trustedForwarder()": FunctionFragment;
    "uniqueUserName(string)": FunctionFragment;
    "userIndex(address)": FunctionFragment;
    "users(address)": FunctionFragment;
    "usersList(uint256)": FunctionFragment;
    "versionRecipient()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getUserCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserPublicDetailsByAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isRegistered",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerNewUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustForwarder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniqueUserName",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "userIndex", values: [string]): string;
  encodeFunctionData(functionFragment: "users", values: [string]): string;
  encodeFunctionData(
    functionFragment: "usersList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "versionRecipient",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserPublicDetailsByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerNewUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniqueUserName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "usersList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "versionRecipient",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGreetUser extends BaseContract {
  contractName: "IGreetUser";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGreetUserInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    admin(overrides?: CallOverrides): Promise<[string]>;

    getUserCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUserPublicDetailsByAddress(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { _id: BigNumber; _userName: string }>;

    isRegistered(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    registerNewUser(
      _userName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTrustForwarder(
      _trustedForwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    trustedForwarder(overrides?: CallOverrides): Promise<[string]>;

    uniqueUserName(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    userIndex(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber] & {
        userAddress: string;
        id: BigNumber;
        userName: string;
        followersCount: BigNumber;
        followingCount: BigNumber;
      }
    >;

    usersList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber] & {
        userAddress: string;
        id: BigNumber;
        userName: string;
        followersCount: BigNumber;
        followingCount: BigNumber;
      }
    >;

    versionRecipient(overrides?: CallOverrides): Promise<[string]>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  getUserCount(overrides?: CallOverrides): Promise<BigNumber>;

  getUserPublicDetailsByAddress(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { _id: BigNumber; _userName: string }>;

  isRegistered(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTrustedForwarder(
    forwarder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  registerNewUser(
    _userName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTrustForwarder(
    _trustedForwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  trustedForwarder(overrides?: CallOverrides): Promise<string>;

  uniqueUserName(arg0: string, overrides?: CallOverrides): Promise<string>;

  userIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  users(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, BigNumber, BigNumber] & {
      userAddress: string;
      id: BigNumber;
      userName: string;
      followersCount: BigNumber;
      followingCount: BigNumber;
    }
  >;

  usersList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, BigNumber, BigNumber] & {
      userAddress: string;
      id: BigNumber;
      userName: string;
      followersCount: BigNumber;
      followingCount: BigNumber;
    }
  >;

  versionRecipient(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    getUserCount(overrides?: CallOverrides): Promise<BigNumber>;

    getUserPublicDetailsByAddress(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { _id: BigNumber; _userName: string }>;

    isRegistered(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerNewUser(
      _userName: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTrustForwarder(
      _trustedForwarder: string,
      overrides?: CallOverrides
    ): Promise<void>;

    trustedForwarder(overrides?: CallOverrides): Promise<string>;

    uniqueUserName(arg0: string, overrides?: CallOverrides): Promise<string>;

    userIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber] & {
        userAddress: string;
        id: BigNumber;
        userName: string;
        followersCount: BigNumber;
        followingCount: BigNumber;
      }
    >;

    usersList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber] & {
        userAddress: string;
        id: BigNumber;
        userName: string;
        followersCount: BigNumber;
        followingCount: BigNumber;
      }
    >;

    versionRecipient(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    getUserCount(overrides?: CallOverrides): Promise<BigNumber>;

    getUserPublicDetailsByAddress(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isRegistered(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerNewUser(
      _userName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTrustForwarder(
      _trustedForwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    trustedForwarder(overrides?: CallOverrides): Promise<BigNumber>;

    uniqueUserName(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    users(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    usersList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    versionRecipient(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserPublicDetailsByAddress(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRegistered(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerNewUser(
      _userName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTrustForwarder(
      _trustedForwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    trustedForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniqueUserName(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usersList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    versionRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

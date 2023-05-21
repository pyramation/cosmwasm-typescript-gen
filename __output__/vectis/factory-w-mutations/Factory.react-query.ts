/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { AdminAddrResponse, CodeIdResponse, CodeIdType, Uint128, Binary, CreateWalletMsg, Guardians, MultiSig, Coin, Cw20Coin, ExecuteMsg, Addr, ProxyMigrationTxMsg, WalletAddr, CanonicalAddr, RelayTransaction, FeeResponse, GovecAddrResponse, InstantiateMsg, QueryMsg, WalletQueryPrefix, Duration, StakingOptions, WalletInfo, ContractVersion, WalletsOfResponse, WalletsResponse } from "./Factory.types";
import { FactoryQueryClient, FactoryClient } from "./Factory.client";
export interface FactoryReactQuery<TResponse, TData = TResponse> {
  client: FactoryQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface FactoryAdminAddrQuery<TData> extends FactoryReactQuery<AdminAddrResponse, TData> {}
export function useFactoryAdminAddrQuery<TData = AdminAddrResponse>({
  client,
  options
}: FactoryAdminAddrQuery<TData>) {
  return useQuery<AdminAddrResponse, Error, TData>(["factoryAdminAddr", client.contractAddress], () => client.adminAddr(), options);
}
export interface FactoryGovecAddrQuery<TData> extends FactoryReactQuery<GovecAddrResponse, TData> {}
export function useFactoryGovecAddrQuery<TData = GovecAddrResponse>({
  client,
  options
}: FactoryGovecAddrQuery<TData>) {
  return useQuery<GovecAddrResponse, Error, TData>(["factoryGovecAddr", client.contractAddress], () => client.govecAddr(), options);
}
export interface FactoryFeeQuery<TData> extends FactoryReactQuery<FeeResponse, TData> {}
export function useFactoryFeeQuery<TData = FeeResponse>({
  client,
  options
}: FactoryFeeQuery<TData>) {
  return useQuery<FeeResponse, Error, TData>(["factoryFee", client.contractAddress], () => client.fee(), options);
}
export interface FactoryCodeIdQuery<TData> extends FactoryReactQuery<CodeIdResponse, TData> {
  args: {
    ty: CodeIdType;
  };
}
export function useFactoryCodeIdQuery<TData = CodeIdResponse>({
  client,
  args,
  options
}: FactoryCodeIdQuery<TData>) {
  return useQuery<CodeIdResponse, Error, TData>(["factoryCodeId", client.contractAddress, JSON.stringify(args)], () => client.codeId({
    ty: args.ty
  }), options);
}
export interface FactoryWalletsOfQuery<TData> extends FactoryReactQuery<WalletsOfResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
    user: string;
  };
}
export function useFactoryWalletsOfQuery<TData = WalletsOfResponse>({
  client,
  args,
  options
}: FactoryWalletsOfQuery<TData>) {
  return useQuery<WalletsOfResponse, Error, TData>(["factoryWalletsOf", client.contractAddress, JSON.stringify(args)], () => client.walletsOf({
    limit: args.limit,
    startAfter: args.startAfter,
    user: args.user
  }), options);
}
export interface FactoryWalletsQuery<TData> extends FactoryReactQuery<WalletsResponse, TData> {
  args: {
    limit?: number;
    startAfter?: WalletQueryPrefix;
  };
}
export function useFactoryWalletsQuery<TData = WalletsResponse>({
  client,
  args,
  options
}: FactoryWalletsQuery<TData>) {
  return useQuery<WalletsResponse, Error, TData>(["factoryWallets", client.contractAddress, JSON.stringify(args)], () => client.wallets({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface FactoryUpdateAdminMutation {
  client: FactoryClient;
  msg: {
    addr: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    _funds?: Coin[];
  };
}
export function useFactoryUpdateAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryUpdateAdminMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FactoryUpdateAdminMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      _funds
    } = {}
  }) => client.updateAdmin(msg, fee, memo, _funds), options);
}
export interface FactoryUpdateGovecAddrMutation {
  client: FactoryClient;
  msg: {
    addr: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    _funds?: Coin[];
  };
}
export function useFactoryUpdateGovecAddrMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryUpdateGovecAddrMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FactoryUpdateGovecAddrMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      _funds
    } = {}
  }) => client.updateGovecAddr(msg, fee, memo, _funds), options);
}
export interface FactoryUpdateWalletFeeMutation {
  client: FactoryClient;
  msg: {
    newFee: Coin;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    _funds?: Coin[];
  };
}
export function useFactoryUpdateWalletFeeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryUpdateWalletFeeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FactoryUpdateWalletFeeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      _funds
    } = {}
  }) => client.updateWalletFee(msg, fee, memo, _funds), options);
}
export interface FactoryUpdateCodeIdMutation {
  client: FactoryClient;
  msg: {
    newCodeId: number;
    ty: CodeIdType;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    _funds?: Coin[];
  };
}
export function useFactoryUpdateCodeIdMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryUpdateCodeIdMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FactoryUpdateCodeIdMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      _funds
    } = {}
  }) => client.updateCodeId(msg, fee, memo, _funds), options);
}
export interface FactoryMigrateWalletMutation {
  client: FactoryClient;
  msg: {
    migrationMsg: ProxyMigrationTxMsg;
    walletAddress: WalletAddr;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    _funds?: Coin[];
  };
}
export function useFactoryMigrateWalletMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryMigrateWalletMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FactoryMigrateWalletMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      _funds
    } = {}
  }) => client.migrateWallet(msg, fee, memo, _funds), options);
}
export interface FactoryUpdateProxyUserMutation {
  client: FactoryClient;
  msg: {
    newUser: Addr;
    oldUser: Addr;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    _funds?: Coin[];
  };
}
export function useFactoryUpdateProxyUserMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryUpdateProxyUserMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FactoryUpdateProxyUserMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      _funds
    } = {}
  }) => client.updateProxyUser(msg, fee, memo, _funds), options);
}
export interface FactoryCreateWalletMutation {
  client: FactoryClient;
  msg: {
    createWalletMsg: CreateWalletMsg;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    _funds?: Coin[];
  };
}
export function useFactoryCreateWalletMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryCreateWalletMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FactoryCreateWalletMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      _funds
    } = {}
  }) => client.createWallet(msg, fee, memo, _funds), options);
}
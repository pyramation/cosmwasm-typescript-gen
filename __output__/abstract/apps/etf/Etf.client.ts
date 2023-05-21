/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CamelCasedProperties } from "type-fest";
import { SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { AbstractQueryClient, AbstractAccountQueryClient, AbstractAccountClient, AppExecuteMsg, AppModuleExecuteMsgBuilder, AbstractClient } from "@abstract-money/abstract.js";
import { StdFee, Coin } from "@cosmjs/amino";
import { Decimal, InstantiateMsg, ExecuteMsg, Uint128, AssetInfoBaseForString, AssetBaseForString, QueryMsg, MigrateMsg, StateResponse } from "./Etf.types";
import { EtfQueryMsgBuilder, EtfExecuteMsgBuilder } from "./Etf.msg-builder";
export interface IEtfAppQueryClient {
  moduleId: string;
  accountQueryClient: AbstractAccountQueryClient;
  _moduleAddress: string;
  state: () => Promise<StateResponse>;
  connect: (signingClient: SigningCosmWasmClient, address: string) => EtfAppClient;
  address: () => Promise<string>;
}
export class EtfAppQueryClient implements IEtfAppQueryClient {
  accountQueryClient: AbstractAccountQueryClient;
  moduleId: string;
  _moduleAddress: string;

  constructor({
    abstractQueryClient,
    accountId,
    managerAddress,
    proxyAddress,
    moduleId
  }: {
    abstractQueryClient: AbstractQueryClient;
    accountId: number;
    managerAddress: string;
    proxyAddress: string;
    moduleId: string;
  }) {
    this.accountQueryClient = new AbstractAccountQueryClient({
      abstract: abstractQueryClient,
      accountId,
      managerAddress,
      proxyAddress
    });
    this.moduleId = moduleId;
    this.state = this.state.bind(this);
  }

  state = async (): Promise<StateResponse> => {
    return this._query(EtfQueryMsgBuilder.state());
  };
  _query = async (queryMsg: QueryMsg): Promise<any> => {
    return this.accountQueryClient.queryModule({
      moduleId: this.moduleId,
      moduleType: "app",
      queryMsg
    });
  };
  address = async (): Promise<string> => {
    if (!this._moduleAddress) {
      this._moduleAddress = await this.accountQueryClient.getModuleAddress(this.moduleId);
    }

    return this._moduleAddress;
  };
  connect = (signingClient: SigningCosmWasmClient, address: string): EtfAppClient => {
    return new EtfAppClient({
      accountId: this.accountQueryClient.accountId,
      managerAddress: this.accountQueryClient.managerAddress,
      proxyAddress: this.accountQueryClient.proxyAddress,
      moduleId: this.moduleId,
      abstractClient: this.accountQueryClient.abstract.upgrade(signingClient, address)
    });
  };
}
export interface IEtfAppClient extends IEtfAppQueryClient {
  accountClient: AbstractAccountClient;
  provideLiquidity: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    provide_liquidity: unknown;
  }>["provide_liquidity"]>, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setFee: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    set_fee: unknown;
  }>["set_fee"]>, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class EtfAppClient extends EtfAppQueryClient implements IEtfAppClient {
  accountClient: AbstractAccountClient;

  constructor({
    abstractClient,
    accountId,
    managerAddress,
    proxyAddress,
    moduleId
  }: {
    abstractClient: AbstractClient;
    accountId: number;
    managerAddress: string;
    proxyAddress: string;
    moduleId: string;
  }) {
    super({
      abstractQueryClient: abstractClient,
      accountId,
      managerAddress,
      proxyAddress,
      moduleId
    });
    this.accountClient = AbstractAccountClient.fromQueryClient(this.accountQueryClient, abstractClient);
    this.provideLiquidity = this.provideLiquidity.bind(this);
    this.setFee = this.setFee.bind(this);
  }

  provideLiquidity = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    provide_liquidity: unknown;
  }>["provide_liquidity"]>, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(EtfExecuteMsgBuilder.provideLiquidity(params), fee, memo, _funds);
  };
  setFee = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    set_fee: unknown;
  }>["set_fee"]>, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(EtfExecuteMsgBuilder.setFee(params), fee, memo, _funds);
  };
  _execute = async (msg: ExecuteMsg, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    const moduleMsg: AppExecuteMsg<ExecuteMsg> = AppModuleExecuteMsgBuilder.executeApp(msg);
    return await this.accountClient.abstract.client.execute(this.accountClient.sender, await this.address(), moduleMsg, fee, memo, _funds);
  };
}
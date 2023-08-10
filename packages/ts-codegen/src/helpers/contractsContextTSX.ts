export const contractsContextTSX = `
import React, { useEffect, useMemo, useRef, useState, useContext } from 'react';
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';

import { IContractsContext, getProviders } from './contractContextProviders';

export interface ContractsConfig {
  address: string | undefined;
  getCosmWasmClient: () => Promise<CosmWasmClient>;
  getSigningCosmWasmClient: () => Promise<SigningCosmWasmClient>;
}

const ContractsContext = React.createContext<IContractsContext | null>(null);

export const ContractsProvider = ({
  children,
  contractsConfig,
}: {
  children: React.ReactNode;
  contractsConfig: ContractsConfig;
}) => {
  const [cosmWasmClient, setCosmWasmClient] = useState<CosmWasmClient>();
  const [signingCosmWasmClient, setSigningCosmWasmClient] =
    useState<SigningCosmWasmClient>();

  const { address, getCosmWasmClient, getSigningCosmWasmClient } =
    contractsConfig;

  const prevAddressRef = useRef<string | undefined>(address);

  const contracts: IContractsContext = useMemo(() => {
    return getProviders(address, cosmWasmClient, signingCosmWasmClient);
  }, [address, cosmWasmClient, signingCosmWasmClient]);

  useEffect(() => {
    const connectSigningCwClient = async () => {
      if (address && prevAddressRef.current !== address) {
        const signingCosmWasmClient = await getSigningCosmWasmClient();
        setSigningCosmWasmClient(signingCosmWasmClient);
      } else if (!address) {
        setSigningCosmWasmClient(undefined);
      }
      prevAddressRef.current = address;
    };
    connectSigningCwClient();
  }, [address, getSigningCosmWasmClient]);

  useEffect(() => {
    const connectCosmWasmClient = async () => {
      const cosmWasmClient = await getCosmWasmClient();
      setCosmWasmClient(cosmWasmClient);
    };
    connectCosmWasmClient();
  }, [getCosmWasmClient]);

  return (
    <ContractsContext.Provider value={contracts}>
      {children}
    </ContractsContext.Provider>
  );
};

export const useContracts = () => {
  const contracts: IContractsContext = useContext(ContractsContext);
  if (contracts === null) {
    throw new Error('useContracts must be used within a ContractsProvider');
  }
  return contracts;
};
`;

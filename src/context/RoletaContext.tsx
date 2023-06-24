import { ReactNode, createContext, useEffect, useState } from "react";

interface RoletaContextData {
  selected: number;
  hasChanged: boolean;
  setSelected: (n: number) => void;
  setHasChanged: (value: boolean) => void;
}
interface RoletaProviderProps {
  children: ReactNode;
}

export const RoletaContext = createContext({} as RoletaContextData);

export const RoletaProvider = ({ children }: RoletaProviderProps) => {
  const [hasChanged, setHasChanged] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    setSelected(0);
  }, []);

  return (
    <RoletaContext.Provider
      value={{ selected, hasChanged, setSelected, setHasChanged }}
    >
      {children}
    </RoletaContext.Provider>
  );
};

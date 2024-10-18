"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import {useSession} from "next-auth/react"
import Spinner from "@/components/spinner";
type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);


export default function GlobalState({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  if (useSession === undefined) return <Spinner />
  return (
    <GlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}

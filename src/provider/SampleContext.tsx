"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type Sample = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  showInput: string;
  setShowInput: Dispatch<SetStateAction<string>>;
};

export const SampleContext = createContext({} as Sample);

export const SampleProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string>("");
  const [showInput, setShowInput] = useState<string>("");

  return (
    // SampleContext.Provider を使用して、子孫コンポーネントに text、setText、showInput、setShowInput を提供する
    <SampleContext.Provider value={{ text, setText, showInput, setShowInput }}>
      {/* プロバイダーの子要素をラップし、提供されるコンテキストを伝達する */}
      {children}
    </SampleContext.Provider>
  );
};

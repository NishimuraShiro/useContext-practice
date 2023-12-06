"use client";
import { SampleContext } from "@/provider/SampleContext";
import React, { useContext } from "react";

export const ShowInput = () => {
  // SampleContextコンテキストからshowInput状態変数を取得
  const { showInput } = useContext(SampleContext);

  return (
    <div className="mt-20 flex justify-center">
      <h2>入力値：{showInput}</h2>
    </div>
  );
};

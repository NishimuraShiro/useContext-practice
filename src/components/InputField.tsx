"use client";
import { SampleContext } from "@/provider/SampleContext";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";

export const InputField = () => {
  // SampleContextコンテキストからtext, showInput状態変数とsetText, setShowInput状態変数を取得
  const { text, setText, showInput, setShowInput } = useContext(SampleContext);
  const [inputText, setInputText] = useState<string>("");

  const handleUpdate = () => {
    setText(inputText);
    setShowInput(inputText);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <Button variant="outlined" onClick={handleUpdate}>
            更新
          </Button>
        </div>
      </div>
    </>
  );
};

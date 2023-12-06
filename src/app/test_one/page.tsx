import { InputField } from "@/components/InputField";
import { ShowInput } from "@/components/ShowInput";
import { SampleProvider } from "@/provider/SampleContext";
import React from "react";

const Test_one = () => {
  return (
    <SampleProvider>
      <div>
        {/* 入力された内容が表示される */}
        <InputField />
        <ShowInput />
      </div>
    </SampleProvider>
  );
};

export default Test_one;

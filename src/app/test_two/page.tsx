import { ShowInput } from "@/components/ShowInput";
import { SampleProvider } from "@/provider/SampleContext";
import React from "react";

const Test_two = () => {
  return (
    <SampleProvider>
      <div>
        {/* Test_oneで入力された内容は表示されない */}
        <ShowInput />
      </div>
    </SampleProvider>
  );
};

export default Test_two;

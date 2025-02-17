import { Button } from "antd";
import { FC } from "react";
import { ResetProps } from "./ResetButton.types";

const ResetButton: FC<ResetProps> = ({ reset }) => {
  return (
    <Button htmlType="button" onClick={reset}>
      Reset
    </Button>
  );
};

export default ResetButton;

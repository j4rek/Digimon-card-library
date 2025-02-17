import { FC } from "react";
import { Button, Spin } from "antd";
import { SubmitButtonProps } from "./SubmitButton.types";
import { LoadingOutlined } from "@ant-design/icons";

const SubmitButton: FC<SubmitButtonProps> = ({ text, loading }) => {
  return (
    <Button type="primary" htmlType="submit">
      {text}{" "}
      {loading && (
        <Spin
          indicator={<LoadingOutlined style={{ color: "white" }} spin />}
          size="small"
        />
      )}
    </Button>
  );
};

export default SubmitButton;

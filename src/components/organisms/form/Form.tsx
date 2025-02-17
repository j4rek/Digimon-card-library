import { FC, PropsWithChildren } from "react";
import { Form as FormAnt } from "antd";
import { formStyle } from "./Form.style";
import { FormProps } from "./Form.types";

const Form: FC<PropsWithChildren<FormProps>> = ({
  children,
  onFinish,
  onFinishFailed,
  form,
}) => {
  return (
    <FormAnt
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={formStyle}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {children}
    </FormAnt>
  );
};

export default Form;

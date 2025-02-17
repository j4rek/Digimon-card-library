import { FunctionComponent } from "react";
import { FormItemProps, Form } from "antd";

const InputField = <FieldsType,>({
  ComponentInput,
  ...props
}: { ComponentInput: FunctionComponent } & FormItemProps<FieldsType>) => {
  return (
    <Form.Item<FieldsType> {...props}>
      <ComponentInput />
    </Form.Item>
  );
};

export default InputField;

import { FormInstance } from "antd";

export interface FormProps {
  onFinish: (values: any) => void;
  onFinishFailed?: (error: any) => void;
  form?: FormInstance;
}

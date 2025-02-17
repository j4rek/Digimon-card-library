import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormProps, Input, Form as FormAnt, Flex } from "antd";
import Form from "../form/Form";
import { FormFields } from "./LoginForm.types";
import InputField from "@components/atoms/inputField/InputField";
import { passwordRules, emailRules } from "./LoginForm.fieldsRules";
import SubmitButton from "@components/atoms/submitButton/SubmitButton";
import ResetButton from "@components/atoms/resetButton/ResetButton";
import useAuthContext from "@hooks/useAuthContext";
import LoginService from "@services/LoginService";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [form] = FormAnt.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish: FormProps<FormFields>["onFinish"] = async () => {
    setLoading(true);
    const res = await LoginService.signIn();
    if (res.status === 200) {
      login(res.token);
      setLoading(false);
      navigate("/home");
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <InputField<FormFields>
        label="Email"
        name="email"
        ComponentInput={Input}
        rules={emailRules}
      />
      <InputField<FormFields>
        label="Password"
        name="password"
        ComponentInput={Input.Password}
        rules={passwordRules}
      />
      <Flex justify="flex-end" gap="middle">
        <SubmitButton text="Sign in" loading={loading} />
        <ResetButton reset={onReset} />
      </Flex>
    </Form>
  );
};

export default LoginForm;

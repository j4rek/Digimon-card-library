import LoginForm from "@components/organisms/loginForm/LoginForm";
import { Flex } from "antd";
import { LoginTemplateStyle } from "./LoginTemplate.style";

const LoginTemplate = () => {
  return (
    <Flex
      gap="middle"
      align="center"
      justify="center"
      style={LoginTemplateStyle}
    >
      <Flex vertical>
        <h3>Digimon Card Library</h3>
        <LoginForm />
      </Flex>
    </Flex>
  );
};

export default LoginTemplate;

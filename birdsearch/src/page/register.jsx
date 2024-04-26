import { Button, Form, Input, Card } from "antd";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();
    const goback = () => {
        navigate("/");
    };
  return (
<div className={style.login}>
  <Card className={style.loginpage}>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
      className={style.detile}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="realname"
        name="realname"
        rules={[
          {
            required: true,
            message: "Please input your realname!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ marginRight: "10px" }}
          >
            Submit
          </Button>
          <Button size="large" onClick={goback}>back</Button>
        </div>
      </Form.Item>
    </Form>
  </Card>
</div>
  );
};
export default App;

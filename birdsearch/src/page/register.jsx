import { Button, Form, Input, Card } from "antd";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import api from "../api/login";
import { useState } from "react";
const App = () => {
  const navigate = useNavigate();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [realname,setRealname]=useState('');
  const goback = () => {
    navigate("/");
  };
  const submit=async()=>{
    const result=await api.register(username,password,realname);
    console.log(result);
    if(result){
      localStorage.setItem('uid',result.uid);
    }
  }
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
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
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
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
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
            <Input value={realname} onChange={(e) => setRealname(e.target.value)}  />
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
                onClick={submit}
              >
                Submit
              </Button>
              <Button size="large" onClick={goback}>
                back
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default App;

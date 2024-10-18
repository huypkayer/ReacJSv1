import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import axios from "axios";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

const handleClick = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
        fullName:fullName,
        email: email,
        password: password,
        phone: phone 
    }
    axios.post(URL_BACKEND,data)
    console.log("check", {fullName,email,password,phone})
}

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: formLayout === "inline" ? "none" : 600,
      }}
    >
      {/* <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item> */}
      <Form.Item label="Full Name">
        <Input
          placeholder="input placeholder"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          placeholder="input placeholder"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input placeholder="input placeholder" type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
      </Form.Item>
      <Form.Item label="Phone">
        <Input placeholder="input placeholder" value={phone} onChange={(event)=>{setPhone(event.target.value)}} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleClick}>Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default UserForm;

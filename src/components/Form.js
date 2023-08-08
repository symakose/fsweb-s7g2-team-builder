import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonGroup,
} from "reactstrap";

const formDataInitial = {
  name: "",
  surname: "",
  email: "",
  role: "",
  password: "",
  rememberMe: false,
};

const FormComponent = () => {
  const [formData, setFormData] = useState(formDataInitial);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit Edildi! ", formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? e.target.checked : value,
    });
  };

  useEffect(() => {
    console.log("Form Data > ", formData);
  }, [formData]);

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h2>Form Bölümü</h2>
      <hr />

      <FormGroup>
        <Label htmlFor="user-name">Name</Label>
        <Input
          id="user-name"
          type="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="user-surname">Surname</Label>
        <Input
          id="user-surname"
          type="surname"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="user-mail">Email</Label>
        <Input
          id="user-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Lütfen eposta bilgisini giriniz..."
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="user-pass">Password</Label>
        <Input
          id="user-pass"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup check>
        <Label htmlFor="remember-me">Remember Me</Label>
        <Input
          id="remember-me"
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleInputChange}
        />
      </FormGroup>

      <Button
        type="button"
        className="buton mr-3"
        onClick={() => {
          setFormData(formDataInitial);
        }}
      >
        Reset Form
      </Button>
      <Button
        type="submit"
        disabled={formData.email === "" || formData.password === ""}
      >
        Login
      </Button>
    </Form>
  );
};

export default FormComponent;

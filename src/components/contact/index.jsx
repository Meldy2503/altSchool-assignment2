import React, { useState } from "react";
import { Container, Contents, Form, Btn, BackLink } from "./contactStyle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    console.log(formData);
  };

  return (
    <Container>
      <Contents>
        <BackLink to="/profile">Back</BackLink>
        <h2>Get in touch with us</h2>

        <Form>
          <label htmlFor="name">
            <input
              type="text"
              name={formData.name}
              id={formData.name}
              onChange={handleFormData}
              value={formData.value}
              placeholder="Enter your name"
              required
            />
          </label>
          <br />
          <label htmlFor="email">
            <input
              type="email"
              name={formData.email}
              id={formData.email}
              onChange={handleFormData}
              value={formData.value}
              placeholder="Enter your emaIL"
              required
            />
          </label>
          <br />
          <textarea
            name={formData.message}
            id={formData.message}
            cols="30"
            value={formData.value}
            onChange={handleFormData}
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <br />
          <Btn type="submit" onClick={handleSubmit}>
            SEND MESSAGE
          </Btn>
        </Form>
      </Contents>
    </Container>
  );
};

export default Contact;

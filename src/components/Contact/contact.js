import React, { useState } from "react";
import './contact.css'
import Form from "react-bootstrap/Form";
import { validateEmail } from "../../utils/helpers";
import Button from "react-bootstrap/Button";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid || !e.target.value.length) {
        setErrorMessage("Please type a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="background px-5 ">
      <div className="text-center welcomeMsg pt-5">
          <h1>Contact Me</h1>
        </div>
      <div className='px-5 mx-5 pt-5' >
        <Form className="mx-5 row" id="contact-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-5 col-5">
            <Form.Label htmlFor="name" className="text-danger fs-4 text">
              Name:{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-7">
            <Form.Label htmlFor="email" className="text-danger fs-4 text">
              Email:{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="message" className="text-danger fs-4 text">
              Message:{" "}
            </Form.Label>
            <Form.Control
              as="textarea"
              className="form-control"
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            ></Form.Control>
          </Form.Group>
          {errorMessage && (
            <div>
              <p className="text-warning error-text">{errorMessage}</p>
            </div>
          )}
          <Button
            type="submit"
            className="btn col-3 my-4 mb-5"
            variant="warning"
            size="lg"
          >
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Contact;

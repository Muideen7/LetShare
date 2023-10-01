import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Select,
  Icon,
  Message,
} from "semantic-ui-react";
import "axios";
import axios from "axios";

const Signup = () => {
  const [isBusiness, setIsBusiness] = useState(false);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    website: "",
    category: "",
    city: "",
    phoneNumber: "",
  });

  const handleInputChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
      businessName: formData.businessName,
      website: formData.website,
      city: formData.city,
      category: formData.category
    };
    await axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        console.log(res);
        setMessage(res.data["message"]);
      })
      .catch((err) => {
        setMessage(err.response.data["error"]);
        console.log(err.response.data["error"]);
      });
  };

  const options = [
    { key: "user", text: "User", value: false },
    { key: "business", text: "Business", value: true },
  ];

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
      container
    >
      <Grid.Column style={{ maxWidth: "450px" }}>
        {message ? <Message info> {message} </Message> : null}

        <Header
          as="h2"
          textAlign="center"
          image="/assets/logo_square.svg"
          content="Sign up for your account"
          style={{ marginBottom: "32px" }}
        />
        <Form size="large" onSubmit={handleSubmit}>
          <Select
            placeholder="Select account type"
            options={options}
            onChange={() => setIsBusiness(!isBusiness)}
            style={{ marginBottom: "16px" }}
          />
          {!isBusiness ? (
            <>
              <Form.Input
                fluid
                icon="building"
                iconPosition="left"
                placeholder="Business name"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="building"
                iconPosition="left"
                placeholder="Website url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="map marker alternate"
                iconPosition="left"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="category"
                iconPosition="left"
                placeholder="Category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </>
          ) : (
            <>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />{" "}
            </>
          )}
          {/* {isBusiness && (
            <>
              <Form.Input
                fluid
                icon="building"
                iconPosition="left"
                placeholder="Business name"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="map marker alternate"
                iconPosition="left"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </>
          )} */}
          <Button
            type="submit"
            color="green" 
            fluid
            size="large"
            style={{ marginBottom: "16px" }}
          >
            Sign up
          </Button>
          <Button color="google plus" fluid size="large">
            <Icon name="google" /> Sign up with Google
          </Button>
        </Form>
        <p>
          Already a member? <Link to="/login">Sign in</Link>
        </p>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;

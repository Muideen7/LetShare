import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Select, Icon } from "semantic-ui-react";

const Signup = () => {
  const [isBusiness, setIsBusiness] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    city: "",
    phoneNumber: "",
  });

  const handleInputChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here, using formData and isBusiness to differentiate between user and business registration
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
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {isBusiness && (
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
          )}
          <Button
            type="submit"
            color="green" // Change button color to green
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

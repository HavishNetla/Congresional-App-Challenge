import React, { Component } from 'react'
import { Container, Form } from 'semantic-ui-react'
import request from 'superagent'

class AddFoodForm extends Component {
  state = {
    name: '',
    number: '',
    food: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',

    submittedName: '',
    submittedNumber: '',
    submittedFood: '',
    submittedAddress1: '',
    submittedAddress2: '',
    submittedCity: '',
    submittedState: '',
    submittedZip: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const {
      name,
      number,
      food,
      address1,
      address2,
      city,
      state,
      zip,
    } = this.state

    this.setState({
      submittedName: name,
      submittedNumber: number,
      submittedFood: food,
      submittedAddress1: address1,
      submittedAddress2: address2,
      submittedCity: city,
      submittedState: state,
      submittedZip: zip,
    })

    request
      .post('http://localhost:8080/api/foods')
      .send({
        name,
        food,
        number,
        address1,
        address2,
        city,
        state,
        zip,
        avalible: true,
      })
      .end((err, res) => {
        if (err) throw err

        console.log(res.body)
      })
    console.log(
      `${name} ${number} ${food} ${address1} ${address2} ${city} ${state} ${zip}`,
    )
  }

  render() {
    const {
      name,
      number,
      food,
      address1,
      address2,
      city,
      state,
      zip,

      submittedName,
      submittedNumber,
      submittedFood,
      submittedAddress1,
      submittedAddress2,
      submittedCity,
      submittedState,
      submittedZip,
    } = this.state

    return (
      <div>
        <Container textAlign="center">
          <Form onSubmit={this.handleSubmit} style={{ padding: 50 }}>
            <Form.Group widths="equal">
              <Form.Input
                label="Name"
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
              <Form.Input
                label="Phone Number"
                placeholder="Phone Number"
                name="number"
                value={number}
                onChange={this.handleChange}
                required
              />
              <Form.Input
                label="Food"
                placeholder="Food"
                name="food"
                value={food}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label="Street Address 1"
                placeholder="Street address 1"
                name="address1"
                value={address1}
                onChange={this.handleChange}
                required
              />
              <Form.Input
                label="Street Address 2"
                placeholder="Street address 2"
                name="address2"
                value={address2}
                onChange={this.handleChange}
              />
              <Form.Input
                label="City"
                placeholder="City"
                name="city"
                value={city}
                onChange={this.handleChange}
                required
              />
              <Form.Input
                label="State"
                placeholder="State"
                name="state"
                value={state}
                onChange={this.handleChange}
                required
              />
              <Form.Input
                label="Zip"
                placeholder="Zip"
                name="zip"
                value={zip}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Checkbox
              label="I agree to the Terms and Conditions"
              required
            />
            <Form.Button content="Submit" />
          </Form>
        </Container>
      </div>
    )
  }
}

export default AddFoodForm

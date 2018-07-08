import React, { Component } from 'react'
import { Container, Form } from 'semantic-ui-react'

class AddFoodForm extends Component {
  state = {
    name: '',
    number: '',
    food: '',
    submittedName: '',
    submittedNumber: '',
    submittedFood: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, number, food } = this.state

    this.setState({
      submittedName: name,
      submittedNumber: number,
      submittedFood: food,
    })
  }

  render() {
    const {
      name,
      number,
      food,
      submittedName,
      submittedNumber,
      submittedFood,
    } = this.state

    return (
      <div>
        <Container textAlign="center">
          <Form onSubmit={this.handleSubmit} style={{ padding: 50 }}>
            <Form.Group widths="equal">
              <Form.Group>
                <Form.Input
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Phone Number"
                  name="number"
                  value={number}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Food"
                  name="food"
                  value={food}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Button content="Submit" />
            </Form.Group>
          </Form>
        </Container>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, number, food }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>
          {JSON.stringify(
            { submittedName, submittedNumber, submittedFood },
            null,
            2,
          )}
        </pre>
      </div>
    )
  }
}

export default AddFoodForm
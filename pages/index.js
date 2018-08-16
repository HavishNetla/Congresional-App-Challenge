import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import request from 'superagent'
import Layout from '../components/Layout'

class Home extends Component {
  state = {
    name: '',
    number: '',
    food: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    keywords: '',

    submittedName: '',
    submittedNumber: '',
    submittedFood: '',
    submittedAddress1: '',
    submittedAddress2: '',
    submittedCity: '',
    submittedState: '',
    submittedZip: '',

    open: false,
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
      keywords,
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
      submittedKeywords: keywords,
    })

    request
      .post('https://cac-2018-api.now.sh/api/foods')
      .send({
        name,
        food,
        number,
        address1,
        address2,
        city,
        state,
        zip,
        keywords: keywords === '' ? [] : keywords.split(' '),
        avalible: 'true',
        watchCount: 0,
      })
      .end((err, res) => {
        if (err) throw err

        console.log(res.body)
      })
    console.log(
      `${name} ${number} ${food} ${address1} ${address2} ${city} ${state} ${zip}`,
    )

    this.setState({ open: true })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
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
      keywords,

      submittedName,
      submittedNumber,
      submittedFood,
      submittedAddress1,
      submittedAddress2,
      submittedCity,
      submittedState,
      submittedZip,
      submittedKeywords,
    } = this.state

    return (
      <Layout>
        <div>
          <Grid
            style={{ height: 318, paddingTop: 200 }}
            container
            alignContent="center"
            alignItems="center"
            justify="center"
          >
            <Paper
              style={{
                width: 1100,
                backgroundColor: '#4E5156',
              }}
              elevation={20}
            >
              <div>
                <Form
                  inverted
                  onSubmit={this.handleSubmit}
                  style={{ padding: 50 }}
                >
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

                  <Form.Group widths="equal">
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
                  <Form.Group widths="equal">
                    <Form.Input
                      label="Keywords"
                      placeholder="Large, Container, Hot, Burgers"
                      name="keywords"
                      value={keywords}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Checkbox
                    label="I agree to the Terms and Conditions"
                    required
                  />
                  <Form.Button
                    content="Submit"
                    onClick={this.handleClickOpen}
                  />
                </Form>
              </div>
            </Paper>
          </Grid>

          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Food Submited</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You can view your food(s) in the food tab
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </Layout>
    )
  }
}

export default Home

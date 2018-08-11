/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-assign */

import React, { Component } from 'react'
import request from 'superagent'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Chip from '@material-ui/core/Chip'
import Layout from '../components/Layout'

class FoodList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foods: [],
    }
    this.TakeButton.bind(this)
  }

  componentDidMount() {
    request.get('https://cac-2018-api.now.sh/api/foods/').end((err, res) => {
      if (err) throw err
      this.setState({ foods: res.body })
    })
  }

  delete(e, props) {
    e.preventDefault()

    request
      .delete(`https://cac-2018-api.now.sh/api/foods/${props}`)
      .end((err, res) => {
        if (err) throw err
        console.log('deleted')
      })
  }

  TakeButton(props) {
    if (props.avalible === 'true') {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            request
              .put(`https://cac-2018-api.now.sh/api/foods/${props.id}`)
              .send({
                name: props.name,
                food: props.food,
                number: props.number,
                address1: props.address1,
                address2: props.address2,
                city: props.city,
                state: props.state,
                zip: props.zip,
                avalible: 'false',
              })
              .end((err, res) => {
                if (err) throw err

                console.log(res.body)
              })
          }
        >
          Claim Food
        </Button>
      )
    }
    return (
      <Button variant="contained" color="primary" disabled>
        Claim Food
      </Button>
    )
  }

  render() {
    const ChipStyle = {
      marginTop: 5,
      marginLeft: 5,
      marginRight: 5,
    }
    return (
      <Layout>
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <Grid container spacing={16}>
            {this.state.foods.map(
              ({
                _id,
                name,
                food,
                address1,
                address2,
                city,
                state,
                zip,
                number,
                avalible,
                keywords,
              }) => (
                <Grid item key={_id}>
                  <Card
                    style={{
                      margin: 20,
                      width: 275,
                      maxWidth: 275,
                    }}
                  >
                    <CardContent>
                      <Typography
                        style={{
                          marginBottom: 16,
                          fontSize: 14,
                        }}
                        color="textSecondary"
                      >
                        {name}, {number}
                      </Typography>
                      <Typography variant="headline" component="h2">
                        {food}
                      </Typography>
                      <Typography component="p">
                        {`${address1}, ${address2}`}
                        <br />
                        {`${city}, ${state}, ${zip}`}
                      </Typography>
                      {keywords.map(keyword => (
                        <Chip key={keyword} style={ChipStyle} label={keyword} />
                      ))}
                      <div style={{ paddingTop: '10px' }}>
                        <Button
                          aria-label="Delete"
                          onClick={e => this.delete(e, _id)}
                        >
                          <DeleteIcon />
                        </Button>
                        <this.TakeButton
                          id={_id}
                          name={name}
                          food={food}
                          number={number}
                          address1={address1}
                          address2={address2}
                          city={city}
                          state={state}
                          zip={zip}
                          avalible={avalible}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ),
            )}
          </Grid>
        </div>
      </Layout>
    )
  }
}

export default FoodList

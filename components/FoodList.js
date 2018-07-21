import React, { Component } from 'react'
import request from 'superagent'
import Grid from '@material-ui/core/Grid'
import FoodCard from './FoodCard'

class FoodList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foods: [],
      id: '',
    }
  }

  componentDidMount() {
    request.get('http://localhost:8080/api/foods').end((err, res) => {
      if (err) throw err
      this.setState({ foods: res.body })
    })
  }

  render() {
    return (
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={24}>
          {this.state.foods.map(
            ({ _id, name, food, address1, address2, city, state, zip }) => (
              <FoodCard
                key={_id}
                foodName={food}
                userName={name}
                addressLine1={`${address1}, ${address2}`}
                addressLine2={`${city}, ${state} ${zip}`}
                delete={request
                  .delete(`http://localhost:8080/api/foods/${{ _id }}`)
                  .end((err, res) => {
                    if (err) throw err
                    console.log(res)
                  })}
              />
            ),
          )}
        </Grid>
      </div>
    )
  }
}

export default FoodList

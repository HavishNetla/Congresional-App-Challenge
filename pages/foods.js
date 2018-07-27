import React, { Component } from 'react'
import request from 'superagent'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Layout from '../components/Layout'

class FoodList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foods: [],
    }
  }

  componentDidMount() {
    request.get('http://localhost:8080/api/foods').end((err, res) => {
      if (err) throw err
      this.setState({ foods: res.body })
    })
  }

  delete(e, props) {
    e.preventDefault()

    request
      .delete(`http://localhost:8080/api/foods/${props}`)
      .end((err, res) => {
        if (err) throw err
        console.log('deleted')
      })
  }

  render() {
    return (
      <Layout>
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <Grid container spacing={24}>
            {this.state.foods.map(
              ({ _id, name, food, address1, address2, city, state, zip }) => (
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
                        {name}
                      </Typography>
                      <Typography variant="headline" component="h2">
                        {food}
                      </Typography>
                      <Typography component="p">
                        {`${address1}, ${address2}`}
                        <br />
                        {`${city}, ${state}, ${zip}`}
                      </Typography>
                      <div
                        style={{
                          display: 'flex',
                          textAlign: 'center',
                          marginTop: 15,
                          paddingLeft: 227 / 2 - 48,
                        }}
                      >
                        <Button
                          size="small"
                          variant="fab"
                          aria-label="Delete"
                          onClick={e => this.delete(e, _id)}
                        >
                          <DeleteIcon />
                        </Button>
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

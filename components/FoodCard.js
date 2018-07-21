import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'

function FoodCard(props) {
  return (
    <Grid item>
      <Card
        style={{
          margin: 20,
          width: 275,
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
            {props.userName}
          </Typography>
          <Typography variant="headline" component="h2">
            {props.foodName}
          </Typography>
          <Typography component="p">
            {props.addressLine1}
            <br />
            {props.addressLine2}
          </Typography>
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              marginTop: 15,
              paddingLeft: 227 / 2 - 48,
            }}
          >
            <IconButton aria-label="Delete" onClick={props.delete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default FoodCard

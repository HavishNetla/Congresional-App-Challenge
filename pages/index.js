import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'
import AddFoodForm from '../components/AddFoodForm'

const Index = () => (
  <Layout class="body">
    <AddFoodForm />
    <Button variant="contained" onClick={() => console.log('hello')}>
      Button
    </Button>
  </Layout>
)

export default Index

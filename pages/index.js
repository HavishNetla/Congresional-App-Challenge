import { Container, Button } from 'semantic-ui-react'
import Link from 'next/link'

import Layout from '../components/Layout'

const Index = () => (
  <Layout class="body">
    <Container textAlign="center">
      <Link href="/addFood">
        <Button inverted color="green">
          Add a New Food!
        </Button>
      </Link>
    </Container>
  </Layout>
)

export default Index

import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div>
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    />
    <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Roboto:300,400,500"
    />

    <Navbar color="grey" />
    <div>{children}</div>
  </div>
)

export default Layout

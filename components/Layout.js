import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div>
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    />
    <Navbar />
    {children}
  </div>
)

export default Layout

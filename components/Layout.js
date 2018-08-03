import Nav from './Nav'

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
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />

    <Nav />
    <div
      style={{
        backgroundColor: '#009DDC',
        height: 361,
        width: '100vw',
      }}
    >
      {children}
    </div>
  </div>
)

export default Layout

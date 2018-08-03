import Nav from './Nav'

const HomeLayout = ({ children }) => (
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
    <div style={{ height: 719, width: '100vw', backgroundColor: '#EAC435' }}>
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
  </div>
)

export default HomeLayout

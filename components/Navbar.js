import Link from 'next/link'

const Navbar = () => (
  <div>
    <div className="ui secondary pointing menu">
      <Link href="/">
        <a className="item active">Home</a>
      </Link>
      <Link href="/messages">
        <a className="item">Messages</a>
      </Link>
      <Link href="/friends">
        <a className="item">Friends</a>
      </Link>
      <Link>
        <div className="right menu">
          <a className="ui item">Logout</a>
        </div>
      </Link>
    </div>
  </div>
)

export default Navbar

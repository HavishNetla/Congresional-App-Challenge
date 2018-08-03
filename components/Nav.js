import React from 'react'
import Link from 'next/link'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import SvgIcon from '@material-ui/core/SvgIcon'

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              style={{
                marginLeft: -12,
                marginRight: 20,
              }}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Food
            </Typography>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <ListItem
              button
              style={{
                width: '100%',
                maxWidth: 360,
                minWidth: 200,
              }}
            >
              <SvgIcon style={{ 'padding-right': '5px' }}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
              <Link href="/">
                <a>Home</a>
              </Link>
            </ListItem>
            <ListItem
              style={{
                width: '100%',
                maxWidth: 360,
              }}
              button
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ paddingRight: '5px' }}
              >
                <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z" />
                <path fill="none" d="M0 0h24v24H0z" />
              </svg>
              <Link href="/foods">Foods</Link>
            </ListItem>
            <ListItem
              style={{
                width: '100%',
                maxWidth: 360,
              }}
              button
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ 'padding-right': '5px' }}
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>

              <Link href="/aboutUs">About Us</Link>
            </ListItem>
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
}

export default SwipeableTemporaryDrawer

import React from 'react'
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

export default () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Button style={{ fontSize: 15 }} color="inherit">
            Home
          </Button>
        </Link>
        <Link href="/foods">
          <Button style={{ fontSize: 15 }} color="inherit">
            Foods
          </Button>
        </Link>
        <Link href="/aboutUs">
          <Button style={{ fontSize: 15 }} color="inherit">
            About Us
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
)

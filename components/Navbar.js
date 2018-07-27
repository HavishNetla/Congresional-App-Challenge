import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Link from 'next/link'

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const menuStyle = {
      margin: 0,
    }

    return (
      <Segment style={menuStyle}>
        <Menu secondary>
          <Link href="/">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
          </Link>
          <Link href="/foods">
            <Menu.Item
              name="View Foods"
              active={activeItem === 'viewFoods'}
              onClick={this.handleItemClick}
            >
              Foods
            </Menu.Item>
          </Link>
          <Link href="/aboutUs">
            <Menu.Item
              name="About Us"
              active={activeItem === 'aboutUs'}
              onClick={this.handleItemClick}
            >
              About Us
            </Menu.Item>
          </Link>
        </Menu>
      </Segment>
    )
  }
}

export default Navbar

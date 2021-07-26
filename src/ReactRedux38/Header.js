import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import connect from './react-redux'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const HeaderWrapper = connect(mapStateToProps)(Header)

export default HeaderWrapper


import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch'
import * as PropTypes from 'prop-types'
import connect from './react-redux'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const ContentWrapper = connect(mapStateToProps)(Content)

export default ContentWrapper


import React from "react"

import "./AmountBox.scss"

export default class AmountBox extends React.Component {
  render () {

    const { type, text, amount } = this.props

    return(
      <div className="col-md-4 amount-box">
        <div className={`amount-box__panel card`}>
          <div className={`amount-box__panel-heading card-header bg-${type}`}>
            {text}
          </div>
          <div className="amount-box__panel-body panel-body">
            {amount}
          </div>
        </div>
      </div>
    )
  }
}
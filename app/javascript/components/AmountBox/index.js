import React from "react"

class AmountBox extends React.Component {
  render () {

    const { type, text, amount } = this.props

    return(
      <div className="col-md-4 amount-box">
        <div className={`amount-box__panel panel-${type}`}>
          <div className="amount-box__panel-heading">
            {text}
          </div>
          <div className="amount-box__panel-body">
            {amount}
          </div>
        </div>
      </div>
    )
  }
}
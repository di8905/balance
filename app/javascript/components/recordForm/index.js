import React from "react"

import "./recordForm.scss"

export default class RecordForm extends React.Component {
  state = {
    title: '',
    date: '',
    amount: '',
    valid: false,
  }

  makeChanger = key => e => {
    this.setState(prevState => ({...prevState, [key]: e.target.value}))
  }

  valid = () => {
    return this.state.title && this.state.date && this.state.amount
  }

  render () {
    return(
      <form className='form-inline record-form'>
        <div className='form-group'>
          <input
            className='form-control'
            type="text"
            placeholder="Date"
            name="Date"
            value={this.date}
            onChange={this.makeChanger("date")}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="Title"
            value={this.title}
            onChange={this.makeChanger("title")}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Amount"
            nama="Amount"
            value={this.amount}
            onChange={this.makeChanger("amount")}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary record-form__submit"
          disabled={!this.valid()}
        >
          Create Record
        </button>
      </form>
    )

  }
}
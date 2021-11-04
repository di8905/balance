import React from "react"

import "./recordForm.scss"

export default class RecordForm extends React.Component {
  state = {
    title: '',
    date: '',
    amount: 1
  }

  makeChanger = key => value => {
    this.setState(prevState => ({...prevState, [key]: value}))
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
            value={this.state.date}
            onChange={this.makeChanger("date")}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="Title"
            value={this.title}
            onChange={this.handleChange}
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
          disabled={!this.state.valid}
        >
          Create Record
        </button>
      </form>
    )

  }
}
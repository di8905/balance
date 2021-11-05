import React from "react"

import "./recordForm.scss"

export default class RecordForm extends React.Component {
  state = {
    title: null,
    date: null,
    amount: null,
  }

  makeChanger = key => e => {
    this.setState(prevState => ({...prevState, [key]: e.target.value}))
  }

  valid = () => {
    return this.state.title && this.state.date && this.state.amount
  }

  clearForm = () => {
    this.setState({ title: '', date: '', amount: '' })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch("",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({record: this.state}),
      }
      )
      // .then(response => this.props.addRecord(response.json) )
      .then(response => response.json() )
      .then(data => { this.props.addRecord(data) })
      .then(this.clearForm)
  }

  render () {
    // const { addRecord } = this.props
    return(
      <form className='form-inline record-form' onSubmit={this.handleSubmit}>
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
            value={this.state.title}
            onChange={this.makeChanger("title")}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Amount"
            nama="Amount"
            value={this.state.amount}
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
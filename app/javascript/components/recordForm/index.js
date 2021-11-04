import React from "react"

import "./recordForm.scss"

export default class RecordForm extends React.Component {
  state = {
    title: '',
    date: '',
    amount: ''
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
            value={this.state.title}
            onChange={this.handleChange}
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
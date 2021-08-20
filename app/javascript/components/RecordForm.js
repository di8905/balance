import React from "react"

export default class RecordForm extends React.Component {
  state = {
    title: '',
    date: '',
    amount: ''
  }

  handleChange = () => {

  }

  render () {
    return(
      <form className='form-inline'>
        <div className='form-group'>
          <input
            className='form-control'
            type="text"
            placeholder="Date"
            name="Date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </div>
        <div className='form-group'>
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
          className="btn btn-primary"
          disabled={!this.state.valid}
        >
          Create Record
        </button>
      </form>
    )

  }
}
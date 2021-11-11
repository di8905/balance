import React from "react";

export default class Record extends React.Component {

  state = {
    edit: false,
    record: this.props.record,
  }

  handleDelete = e => {
    e.preventDefault()
    fetch(`/records/${this.props.record.id}`,
      {
        method: "DELETE",
      }
    )
    .then(()=> this.props.deleteFromRecords(this.props.record))
  }

  makeChanger = key => event => {
    this.setState(prevState => (
      { record: { ...prevState.record, [key]: event.target.value } })
    )
  }

  handleEditToggle = e => {
    e.preventDefault()
    this.setState(prevState => ({ edit: !prevState.edit }))
  }

  handleEdit = () => {
    console.log(this.record)
    fetch(`records/${this.record.id}`,
      {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({record: this.record}),
      }
    )
    .then(response => response.json())
    .then(data => { this.props.changeRecords(data) })
    .then(() => {
      this.setState({edit: false})
    })
  }

  get record () {
    return this.state.record
  }

  recordForm = () => {

    const { record } = this.state

    return(
      <tr>
        <td>
          <input
            className="form-control"
            type="text"
            value={record.date}
            onChange={this.makeChanger("date")}
          />
        </td>
        <td>
          <input
            className="form-control"
            type="text"
            value={record.title}
            onChange={this.makeChanger("title")}
          />
        </td>
        <td>
          <input
            className="form-control"
            type="text"
            value={record.amount}
            onChange={this.makeChanger("amount")}
          />
        </td>
        <td>
          <a
            className="btn btn-default"
            onClick={this.handleEdit}
          >
            Update
          </a>
          <a
            className="btn btn-danger"
            onClick={this.handleEditToggle}
          >
            Cancel
          </a>
        </td>
      </tr>
    )

  }

  recordRow = () => {

    const { record } = this.state

    return(
      <tr>
        <td>{record.date}</td>
        <td>{record.title}</td>
        <td>{record.amount}</td>
        <td>
          <a
            className="btn btn-danger"
            onClick={this.handleDelete}
          >
            Delete
          </a>
          <a
            className="btn btn-info"
            onClick={this.handleEditToggle}
          >
            Edit
          </a>
        </td>
      </tr>
    )
  }

  render () {
    const { record } = this.state

    return (
      this.state.edit ? this.recordForm(record) : this.recordRow(record)
    )

  }
}

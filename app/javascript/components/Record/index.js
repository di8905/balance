import React from "react";

export default class Record extends React.Component {

  state = { edit: false }

  handleDelete = e => {
    e.preventDefault()
    fetch(`/records/${this.props.record.id}`,
      {
        method: "DELETE",
      }
    )
    .then(()=> this.props.deleteFromRecords(this.props.record))
  }

  handleEditToggle = e => {
    e.preventDefault()
    this.setState(prevState => ({ edit: !prevState.edit }))
  }

  handleEdit = () => {
    alert("aaa")
  }

  recordForm = record => {
    return(
      <tr>
        <td>
          <input
            className="form-control"
            type="text"
            defaultValue={record.date}
          />
        </td>
        <td>
          <input
            className="form-control"
            type="text"
            defaultValue={record.title}
          />
        </td>
        <td>
          <input
            className="form-control"
            type="text"
            defaultValue={record.amount}
          />
        </td>
        <td>
          <a
            className="btn btn-default"
            onclick={this.handleEdit}
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

  recordRow = record => {
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
    const { record } = this.props

    return (
      this.state.edit ? this.recordForm(record) : this.recordRow(record)
    )

  }
}

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

  render () {
    const { record } = this.props

    return (
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
}

import React from "react";

export default class Record extends React.Component {

  handleDelete = e => {
    e.preventDefault()
    fetch(`/records/${this.props.record.id}`,
      {
        method: "DELETE",
      }
    )
    .then(()=> alert(this.props.record.id))
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
          </td>
        </tr>
    )

  }
}

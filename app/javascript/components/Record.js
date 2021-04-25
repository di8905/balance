import React from "react";

export default class Record extends React.Component {

  render () {
    const { record } = this.props

    return (
        <tr>
          <td>{record.date}</td>
          <td>{record.title}</td>
          <td>{record.amount}</td>
        </tr>
    )

  }
}

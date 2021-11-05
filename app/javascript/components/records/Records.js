import React from "react";
import Record from "../Record";
import RecordForm from "../recordForm/index";

export default class Records extends React.Component {
  state = {
    records: this.props.data
  }

  addRecord = record => {
    console.log(record)
    let records = this.state.records
    records.push(record)
    this.setState({records: records})
  }

  render() {
    const records = this.state.records

    return (
      <div className="records">
        <RecordForm addRecord={this.addRecord} />
        <hr />
        <div >
          <h2 className={"title"}>Suppa records</h2>
          <table className={"table table-bordered"}>
            <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {records.map((record) => (
              <Record record={record} />
            ))}
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}

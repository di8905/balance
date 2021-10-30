import React from "react";
import Record from "../Record";
import RecordForm from "../RecordForm";

export default class Records extends React.Component {

  render() {
    const records = this.props.data

    return (
      <div className="records">
        <RecordForm></RecordForm>
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

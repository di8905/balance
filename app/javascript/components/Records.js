import React from "react";

export default class Records extends React.Component {

  render() {
    const records = this.props.data

    return (
      <div className="Records">
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

          </tbody>
        </table>
        <div>
          {console.log(records)}
        </div>
      </div>
    )
  }
}

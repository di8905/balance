import React from "react"
import Record from "../Record"
import RecordForm from "../NewRecordForm"
import AmountBox from "../AmountBox"

export default class Records extends React.Component {
  state = {
    records: this.props.data
  }

  addRecord = record => {
    let records = this.state.records
    records.push(record)
    this.setState({records: records})
  }

  credits = () => {
    let credits = this.state.records.filter(val => val.amount >= 0)
    return  credits.reduce((sum, curr) => sum + parseFloat(curr.amount), 0)
  }

  debits = () => {
    let debits = this.state.records.filter(val => val.amount < 0)
    return debits.reduce((sum, curr) => sum + parseFloat(curr.amount), 0)
  }

  deleteFromRecords = record => {
    let records = this.state.records
    const index = records.indexOf(record)
    records.splice(index, 1)
    this.setState({ records: records })
  }

  changeRecords = record => {
    let records = this.state.records
    const index = records.indexOf(record)
    records.splice(index, 1, record)
  }

  balance = () => this.debits() + this.credits()

  render() {
    const records = this.state.records

    return (
      <div className="records">
        <div className="row">
          <AmountBox
            type="success"
            amount={this.credits()}
            text="Credit"
          />
          <AmountBox
            type="danger"
            amount={this.debits()}
            text="Debit"
          />
          <AmountBox
          type="info"
          amount={this.balance()}
          text="Balance"
          />
        </div>
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
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {records.map((record) => (
              <Record
                record={record}
                deleteFromRecords={this.deleteFromRecords}
                changeRecords={this.changeRecords}
              />
            ))}
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}

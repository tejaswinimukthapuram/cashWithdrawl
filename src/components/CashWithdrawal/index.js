// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    const deductAmount = uniqueId => {
      const filteredList = denominationsList.filter(
        each => each.id === uniqueId,
      )
      const amount = filteredList[0].value
      console.log(filteredList)
      console.log(amount)
      this.setState(prevState => ({
        balance: prevState.balance - amount,
      }))
    }

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="profile">
            <p className="symbol">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="balance-amount">{balance}</p>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  item={eachItem}
                  key={eachItem.id}
                  deductAmount={deductAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

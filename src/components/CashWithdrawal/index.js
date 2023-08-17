import {Component} from 'react'
import DenominationItem from '../DenominationItem'

// Write your code here
class CashWithdrawal extends Component {
  render() {
    const {DenominationsList} = this.props
    return (
      <div>
        <ul>
          {DenominationsList.map(eachDenomination => (
            <DenominationItem
              key={eachDenomination.id}
              denominationsDetails={eachDenomination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal

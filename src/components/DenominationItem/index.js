// Write your code here

import './index.css'

const DenominationItem = props => {
  const {item, deductAmount} = props

  const {id, value} = item

  const onTrigger = () => {
    deductAmount(id)
  }

  return (
    <li>
      <button className="denomination" type="button" onClick={onTrigger}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

import ListGroup from 'react-bootstrap/ListGroup';

import { formatUnits, parseUnits } from 'viem'

import './PlayerList.scss'

import { addressZero, formatAddress } from '../../utils'

function PlayerList ({ list }) {
  console.log('list', list);
  const renderList = data => {
    return data.map((item, index) => (
      <ListGroup horizontal className='list-group-row' key={item.player}>
          <ListGroup.Item>{index+1}</ListGroup.Item>
          <ListGroup.Item>{formatAddress(item.player)}</ListGroup.Item>
          <ListGroup.Item>{Number(formatUnits(item.buyTokenAmount, 18)).toFixed(4)}</ListGroup.Item>
          <ListGroup.Item>{Number(formatUnits(item.estimateETH, 18)).toFixed(4)}</ListGroup.Item>
          <ListGroup.Item>{Number(formatUnits(item.prizeAmount, 18)).toFixed(10)}</ListGroup.Item>
        </ListGroup>
    ))
  }
  
  return (
    <div className="player-list">
      <ListGroup horizontal className='list-group-head'>
        <ListGroup.Item>排名</ListGroup.Item>
        <ListGroup.Item>钱包地址</ListGroup.Item>
        <ListGroup.Item>买入数量(TTK)</ListGroup.Item>
        <ListGroup.Item>预估值(OKB)</ListGroup.Item>
        <ListGroup.Item>奖金(OKB)</ListGroup.Item>
      </ListGroup>
      {renderList(list.filter(item => item.player != addressZero))}
    </div>
  )
}

export default PlayerList
import { useState, useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';

import { formatUnits, parseUnits } from 'viem'


import './ClaimReward.scss'

function ClaimReward ({ isLoadingBtn, rounds, onClaim }) {
  console.log('rounds', rounds);
  const eventKeys = ['prevRound', 'prev2Round']
  
  return (
    <div className="claim-wrap">
      <Tabs
        defaultActiveKey="prevRound"
        id="uncontrolled-tab-example"
        className="tab-box mb-3"
      >
        {
          rounds.map((item, index) => {
            let tag
            if (item.index >= 1) {
              tag = 
                <Tab eventKey={eventKeys[index]} title={`第${item.round}期`} key={index}>
                  <div className='text'>恭喜您本轮中奖，排名第<span>{item.index}</span>{!item.hasClaimed && (
                    <>，可获得<span>{Number(formatUnits(item.reward, 18)).toFixed(10)} OKB</span></>
                  )}</div>
                  <Button
                    variant="primary" 
                    disabled={isLoadingBtn || item.hasClaimed}
                    onClick={() => onClaim(item.round)}
                    >{isLoadingBtn ? '领取中…' : (item.hasClaimed ? '已领取奖励' : '领取奖励')}</Button>
                </Tab>
            } else {
              tag = 
                <Tab eventKey={eventKeys[index]} title={`第${item.round}期`}>
                  <div className='text'>很遗憾，您本轮未中奖</div>
                  <Button variant="secondary" disabled>未中奖</Button>
                </Tab>
            }
            return tag
          })
        }
        {/* <Tab eventKey="prevRound" title="第3期">
          <div className='text'>恭喜您本轮中奖，排名第<span>1</span>，获得<span>12 OKB</span></div>
          <Button variant="primary">领取奖励</Button>
        </Tab>
        <Tab eventKey="prev2Round" title="第2期">
          <div className='text'>很遗憾，您本轮未中奖</div>
          <Button variant="secondary" disabled>领取奖励</Button>
        </Tab> */}
      </Tabs>
    </div>
  )
}

export default ClaimReward
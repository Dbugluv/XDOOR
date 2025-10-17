import { useWatchContractEvent } from 'wagmi'

import xdoorAbi from '../config/xdoorAbi'
import { xdoorContractAddress } from '../utils'

function EventLog() {

  useWatchContractEvent({
    address: xdoorContractAddress,
    abi: xdoorAbi,
    eventName: ['AddLiquidityError', 'DividendNotifyRewardError', 'DividendUpdateFailed'],
    onLogs(logs) {
      logs.forEach(log => console.log(`🔥 ${log.eventName}`, log.args))
    },
  })

  return (<></>)
}

export default EventLog
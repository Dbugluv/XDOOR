import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import './Airdrop.scss'

import { getAirdropAmount } from '../../api'

function Airdrop () {
  const [airdropAmount, setAirdropAmount] = useState(null)
  const [airdropAmountLoading, setAirdropAmountLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getAirdropAmount({address: '0x55eaf008ea6e50441d41c53e5a50495ff993b18e'})
        console.log('airdropAmount', result);
        setAirdropAmount(result)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setAirdropAmountLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <div className='c-airdrop'>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>空投功能，敬请期待...</Card.Title>
          </Card.Body>
        </Card>

        {/* {!booksLoading && (
          <Card>
            <Card.Body>
              <div>Data: <br/>{JSON.stringify(books)}</div>
            </Card.Body>
          </Card>
        )} */}
      </Container>
    </div>
  )
}

export default Airdrop
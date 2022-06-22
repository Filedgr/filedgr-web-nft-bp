import { AccountTxResponse, Client } from 'xrpl'

interface MyTransaction {
  hash: string
  date: Date
  currency: string
  amount: number
  memo: string
  format: string
}

class MyLedger {
  readonly xrpl = require('xrpl');
  address: string
  tokenId: string
  client: Client | undefined;

  constructor (address: string, tokenId: string) {
    this.address = address
    this.tokenId = tokenId
  }

  async connect (): Promise<boolean> {
    this.client = new this.xrpl.Client('wss://s.altnet.rippletest.net:51233')
    await this.client?.connect()
    return true
  }

  getTx (): Promise<AccountTxResponse> | undefined {
    return this.client?.request({
      command: 'account_tx',
      account: this.address
    })
  }

  async disconnect (): Promise<void> {
    const discon = await this.client?.disconnect()
    return discon
  }
}
export { MyLedger, MyTransaction }

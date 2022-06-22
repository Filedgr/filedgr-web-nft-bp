import axios from 'axios'

class FileLoader {
  url: string

  constructor (url: string, authToken: '') {
    this.url = url
  }

  const config = {
    headers: {
      "Referer": "https://www.scrapingbee.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
  };
  async getCsvFile (): Promise<string> {
    const res = await axios({
      headers: {},
      url: this.url,
      method: 'GET'
    })
    if (res.status === 200) {
      return res.data
    } else {
      // TODO: how to handle properly in .then
      return ''
    }
  }

  async getTxtFile (): Promise<string> {
    const res = await axios({
      url: this.url,
      method: 'GET'
    })
    if (res.status === 200) {
      return res.data
    } else {
      // TODO: how to handle properly in .then
      return ''
    }
  }
}

export { FileLoader }

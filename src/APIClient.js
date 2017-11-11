export default class APIClient {

  getBaseURI() {
    return 'http://localhost:8080/api'
  }

  register({username, email, password}) {
    return new Promise((resolve, reject) => {

      const baseURL = `${this.getBaseURI()}/v1/register`
      const headers = new Headers()
      headers.append('content-type', 'application/json')

      return fetch((baseURL), {
        headers,
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({username, password}),
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          reject(new Error(response.text(), response.status))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }

}

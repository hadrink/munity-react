import querystring from 'query-string'

export default class APIClient {

  getBaseURI (protocol = 'http') {
    return `${protocol}://localhost:8080/api`
  }

  defaultHeaders () {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    return headers
  }

  securedheaders (token) {
    const headers = this.defaultHeaders()
    headers.append('authorization', 'Bearer ' + token)
    return headers
  }

  register ({ username, email, password }) {
    return new Promise((resolve, reject) => {
      const baseURL = `${this.getBaseURI()}/v1/register`
      const headers = new Headers()
      headers.append('content-type', 'application/json')

      return fetch((baseURL), {
        headers,
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ username, email, password }),
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          response.text().then(error => reject(JSON.parse(error)))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
  login ({ username, password }) {
    return new Promise((resolve, reject) => {
      const baseURL = `${this.getBaseURI()}/v1/login`
      const headers = this.defaultHeaders()

      return fetch((baseURL), {
        headers,
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ username, password }),
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
  getSubscriptions ({ token }) {
    return new Promise((resolve, reject) => {
      const baseURL = `${this.getBaseURI()}/v1/subscriptions`
      const headers = this.securedheaders(token)

      return fetch((baseURL), {
        headers,
        method: 'GET',
        mode: 'cors',
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          response.text().then(error => reject(JSON.parse(error)))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
  createCommunity ({ token, name }) {
    return new Promise((resolve, reject) => {
      const baseURL = `${this.getBaseURI()}/v1/communities`
      const headers = this.securedheaders(token)

      return fetch((baseURL), {
        headers,
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ name }),
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          response.text().then(error => reject(JSON.parse(error)))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
  getMyCommunities ({ token }) {
    return new Promise((resolve, reject) => {
      const baseURL = `${this.getBaseURI()}/v1/users/communities`
      const headers = this.securedheaders(token)

      return fetch((baseURL), {
        headers,
        method: 'GET',
        mode: 'cors',
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          response.text().then(error => reject(JSON.parse(error)))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
  sendMessage ({ communityName, message, token, ws }) {
    ws.send(JSON.stringify({ communityName, token, message }))
  }
  sendNotificationToServer ({ communityName, notification, token, ws }) {
    ws.send(JSON.stringify({ communityName, token, notification }))
  }
  joinCommunityRoom ({ communityName, ws, token }) {
    if (token) {
      ws.send(JSON.stringify({ communityName, token }))
      return
    }
    ws.send(JSON.stringify({ communityName }))
  }
  openSocketConnection () {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(`${this.getBaseURI('ws')}/v1/chat`)
      ws.onopen = () => {
        resolve(ws)
      }

      ws.onerror = (event) => {
        reject(event.data)
      }
    })
  }
  getSpace ({ communityName }) {
    return new Promise((resolve, reject) => {
      const baseURL = `${this.getBaseURI()}/v1/spaces/${communityName}`
      const headers = this.defaultHeaders()

      return fetch((baseURL), {
        headers,
        method: 'GET',
        mode: 'cors',
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          response.text().then(error => reject(JSON.parse(error)))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
  sendMessageInSpace ({ token, communityName, message }) {
    return new Promise((resolve, reject) => {
      const baseURL = `${this.getBaseURI()}/v1/spaces/${communityName}`
      const headers = this.securedheaders(token)

      return fetch((baseURL), {
        headers,
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify({ message }),
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          response.text().then(error => reject(JSON.parse(error)))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
  getCommunitiesTrends () {
    return new Promise((resolve, reject) => {
      const querystringParams = querystring.stringify({ limit: 10 })
      const baseURL = `${this.getBaseURI()}/v1/communities?${querystringParams}`
      const headers = this.defaultHeaders()

      return fetch((baseURL), {
        headers,
        method: 'GET',
        mode: 'cors',
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          response.text().then(error => reject(JSON.parse(error)))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
  subscribeToCommunity ({ token, communityName }) {
    return new Promise((resolve, reject) => {
      const baseURL = `${this.getBaseURI()}/v1/subscriptions`
      const headers = this.securedheaders(token)

      return fetch((baseURL), {
        headers,
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ communityName }),
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          response.text().then(error => reject(JSON.parse(error)))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
  unsubscribeFromCommunity ({ token, communityName }) {
    return new Promise((resolve, reject) => {
      const baseURL = `${this.getBaseURI()}/v1/subscriptions/${communityName}`
      const headers = this.securedheaders(token)

      return fetch((baseURL), {
        headers,
        method: 'DELETE',
        mode: 'cors',
      })
      .then((response) => {
        if (response.ok) {
          response.text().then(data => resolve(data))
        } else {
          response.text().then(error => reject(JSON.parse(error)))
        }
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
}

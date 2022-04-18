const config = require('./config.js')
const store = require('./store.js')
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}
// server expect format of : req.body.passwords.old
// current request look like : body.credential.password-new 
const changePassword = function (data) {
    console.log(data)
    // console.log(store.user.token)
    
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const day = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'day',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
})
}

const time = function () {
  return $.ajax({
    method: 'POST',
    url: 'time',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

const ounces = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'ounces',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // sends the 'user:token' from 'store.js'
    }
  })
}
const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/feedings',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (feeding) {
  return $.ajax({
    url: config.apiUrl + '/feedings/' + feeding,
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    },
    data: {feeding: data}
  })
}

const update = function (feeding, formData) {
  return $.ajax({
    url: config.apiUrl + '/feedings/' + feeding,
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    },
    data: {feeding: data}
  })
}

const create = function (data) {
  return $.ajax({
      method: 'POST',
    url: config.apiUrl + '/feedings',

    headers: {
        Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  index,
  destroy,
  update,
  create,
  day,
  time,
  ounces,
  signOut
}
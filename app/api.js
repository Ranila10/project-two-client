
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
    console.log(store.user.token)
    
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const day = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'day',
})
}

const time = function () {
  return $.ajax({
    method: 'POST',
    url: 'time',
  })
}

const ounces = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'ounces',
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
    url: config.apiUrl + '/feedings',
    method: 'GET'
  })
}

const destroy = function (feeding) {
  return $.ajax({
    url: config.apiUrl + '/feedings/' + feeding,
    method: 'DELETE'
  })
}

const update = function (feeding, formData) {
  return $.ajax({
    url: config.apiUrl + '/feedings/' + feeding,
    method: 'PATCH',
    data: formData
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/feedings',
    method: 'POST',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    },
    data: {feeding: data}
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


const config = require('./config.js')
const store = require('./store.js')
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-in',
    data
  })
}
// const store = require('./store.js')
const changePassword = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'change-password',
    data
  })
}
const updatePassword = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'update-password',
    data
  })
}
const FeedingTracker = function () {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741',
    headers: {
      Authorization: 'Bearer ' + store.user.token

    }
  })
}
const day = function () {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741',
  })
}

const time = function () {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741',
  })
}

const ounces = function () {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741',
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

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/feedings/' + id,
    method: 'DELETE'
  })
}

const update = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/feedings/' + id,
    method: 'PATCH',
    // include the book data that we will use to update the book
    data: formData
  })
}

const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/feedings',
    method: 'POST',
    // include the book data that we will use to create the book
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  updatePassword,
  FeedingTracker,
  index,
  destroy,
  update,
  create,
  day,
  time,
  ounces,
  signOut
}

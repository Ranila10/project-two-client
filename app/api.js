('use strict')

const store = require('./store.js')
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url:'http://localhost:4741/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-in',
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
    url: 'http://localhost:4741/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // sends the 'user:token' from 'store.js'
    }
  })
}

module.exports = {
  signUp,
  signIn,
  FeedingTracker,
  day,
  time,
  ounces,
  signOut
}

const store = require('./store.js')
const onSignUpSuccess = function (response) {
  $('#auth-display').html('<p>User signed up successfully</p>')
  store.user = response.user
  console.log(response)
}
const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}
const onSignInSuccess = function () {
  console.log('signIn')
  console.log()
  $('#auth-display').html('<p>Error while signing in</p>')
}
const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')
}
const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}
const onCreatFeedingFailure = function () {
  $('#auth-display').html('<p>Try again</p>')
}
const onCreatFeedingSuccess = function () {
  $('#auth-display').html('<p>Try again</p>')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreatFeedingFailure,
  onCreatFeedingSuccess
}

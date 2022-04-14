const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../lib/get-form-fields.js')
const store = require('./store.js')


const onSignUp = function (event) {
  event.preventDefault()
  console.log('now here')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signUp(data)
    .then((response) => authUi.onSignUpSuccess(response))
    .catch(() => authUi.onSignUpFailure())
}
const onSignIn = function (event) {
  event.preventDefault()
  console.log('now here')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then(() => authUi.onSignInSuccess())
    .catch(() => authUi.onSignInFailure())
}
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('now here')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then(() => authUi.onChangePasswordSuccess())
    .catch(() => authUi.onChangePasswordFailure())
}
const onUpdatePassword = function (event) {
  event.preventDefault()
  console.log('now here')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then(() => authUi.onUpdatePasswordSuccess())
    .catch(() => authUi.onUpdatePasswordFailure())
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('now here')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}
const onCreate = function(event) {
event.preventDefault()
  console.log('now here')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.FeedingTracker()
    .then(() => authUi.onCreatFeedingSuccess())
    .catch(() => authUi.onCreatFeedingFailure())

}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onUpdatePassword,
  onSignOut,
  onCreate
}
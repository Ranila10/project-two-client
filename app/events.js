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

  authApi.signIn(data)
//   api call starts promise chain 
//  will pass response to .then - teh function waiting for the promise
    .then((responseData) => {
    console.log(responseData)
    store.user = responseData.user
    console.log(store)
    })
    .then(() => authUi.onSignInSuccess())
    .then(onIndexFeedings)
    .catch(() => authUi.onSignInFailure())
}
const onUpdatePassword = function (event) {
  event.preventDefault()
  console.log('update')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.onUpdatePassword(data)
    .then(() => authUi.onUpdatePasswordSuccess())
    .catch(() => authUi.onUpdatePasswordFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('update')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.onChangePassword(data)
    .then(() => authUi.onChangePasswordSuccess())
    .catch(() => authUi.onChangePasswordFailure())
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
  console.log(onCreate)

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.create(data)
    .then(() => authUi.onCreateSuccess())
    .catch(() => authUi.onCreateFailure())

}

const onIndexFeedings = function () {

  authApi.index()
    .then(authUi.onIndexSuccess)
    .catch(authUi.onError)
}

const onShowFeeding = function (event) {
  event.preventDefault()
   const formData = getFormFields(event.target)
    api.show(formData.feeding.feeding)
     
    .then(ui.onShowSuccess)

    .catch(ui.onShowFailure)
}

const onDestroyFeeding = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.destroy(formData.feeding.feeding)

    .then(ui.onDestroySuccess)
    .catch(ui.onError)
}


module.exports = {
  onSignUp,
  onSignIn,
  onUpdatePassword,
  onChangePassword,
  onSignOut,
  onCreate,
  onIndexFeedings,
  onShowFeeding,
  onDestroyFeeding,
//   onUpdateFeeding
}
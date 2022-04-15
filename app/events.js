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
    .catch(() => authUi.onSignInFailure())
}
const onUpdatePassword = function (event) {
  event.preventDefault()
  console.log('update')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.changePassword(data)
    .then(() => authUi.onPasswordUpdateSuccess())
    .catch(() => authUi.onPasswordUpdateFailure())
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
    .then(() => authUi.onCreatSuccess())
    .catch(() => authUi.onCreatFailure())

}

const onIndexFeedings = function () {

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onShowFeeding = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.show(formData.feeding.feeding)

    .then(ui.onShowSuccess)

    .catch(ui.onError)
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
//   onChangePassword,
  onUpdatePassword,
  onSignOut,
  onCreate,
  onIndexFeedings,
  onShowFeeding,
  onDestroyFeeding,
//   onUpdateFeeding
}
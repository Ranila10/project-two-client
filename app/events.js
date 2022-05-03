const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../lib/get-form-fields.js')
const store = require('./store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  authApi
    .signUp(data)
    .then((response) => authUi.onSignUpSuccess(response))
    .catch(() => authUi.onSignUpFailure())
}
const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  authApi.signIn(data)
  //   api call starts promise chain
  //  will pass response to .then - teh function waiting for the promise
    .then((responseData) => {
      store.user = responseData.user
    })
    .then(() => authUi.onSignInSuccess())
    .then(onIndexFeedings)
    .catch(() => authUi.onSignInFailure())
}
const onUpdatePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  authApi.onUpdatePassword(data)
    .then(() => authUi.onUpdatePasswordSuccess())
    .catch(() => authUi.onUpdatePasswordFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  authApi.changePassword(data)
    .then(() => authUi.onChangePasswordSuccess())
    .catch(() => authUi.onChangePasswordFailure())
}
const onSignOut = function () {
  authApi
    .signOut()
    .then((response) => authUi.onSignOutSuccess(response))
    .catch(() => authUi.onSignOutFailure())
}
const onCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  authApi.create(data)
    .then(() => authUi.onCreateSuccess())
    .catch(() => authUi.onCreateFailure())
}

const onUpdateFeeding = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const id = $(event.target).data('id')
  authApi.update(id, formData)
    .then(authUi.onUpdateSuccess)
    .catch(authUi.onUpdateFailure)
}

const onIndexFeedings = function () {
  authApi.index()
    .then(authUi.onIndexSuccess)
    .catch(authUi.onError)
}

const onShowFeeding = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  authApi.show(formData.feeding.feeding)

    .then(authUi.onShowSuccess)

    .catch(authUi.onShowFailure)
}

const onDestroyFeeding = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  authApi.destroy(id)

    .then(authUi.onDestroySuccess)
    .catch(authUi.onError)
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
  onUpdateFeeding
}

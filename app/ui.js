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
const onPasswordUpdateSuccess = function () {
  console.log('passwordSuccess')
  console.log()
  $('#auth-display').html('<p>update password </p>')
}

const onPasswordUpdateFailure = function () {
  console.log('passwordFailure')
  console.log()
  $('#auth-display').html('<p>update password fail</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')
}
const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}
const onCreateFailure = function () {
  $('#auth-display').html('<p>Try again</p>')
}
const onCreateSuccess = function () {
  $('#auth-display').html('<p>Try again</p>')
  $('#feedings-create-message').html('You created a new feeding!')
  $('#feedings-display').html('Feedings have changed! Click "Show Feedings" again to see all the feedings.')
  $('#Feedings-create-message').addClass('success')
  setTimeout(() => {
    $('#feedings-create-message').html('')
    $('#feedings-create-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onIndexSuccess = function (responseData) {
    const feedings = responseData.feedings
    console.log(responseData)
    let feedingsHtml = ''
    feedings.forEach(feeding => {
feedingsHtml += `
      <h4>Title: ${feeding.title}</h4>
      <p>Author: ${feeding.author}</p>
      <p>ID: ${feeding._id}</p>
      <form class="feedings-update-dynamic" data-id=${feeding._id}>
        <input type="text" name="feeding[title]" placeholder="Feeding Title Here" required>
        <input type="text" name="feeding[author]" placeholder="Feeding Author Here" required>
        <button type="submit">Update Feeding</button>
      </form>
      <button class='feeding-destroy-dynamic' data-id=${feeding._id}>Delete Feeding</button>
      <br>
    `
  })

  $('#feedings-display').html(feedingsHtml)
}

const onShowSuccess = function (responseData) {
  console.log(responseData)
  const feedingHtml = `
    <h4>Title: ${responseData.feeding.title}</h4>
    <p>Author: ${responseData.feeding.author}</p>
    <br>
  `
  $('#feedings-display').html(feedingHtml)

  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  $('#feedings-destroy-message').html('Feeding successfully deleted!')
  $('#feedings-display').html('Feedings have changed! Click "Get All Feedings" again to see all the feedings')
  $('#feedings-destroy-message').addClass('success')
  setTimeout(() => {
    $('#feedings-destroy-message').html('')
    $('#feedings-destroy-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  $('#feedings-update-message').html('You successfully updated feeding')
  $('#feedings-display').html('Feedings have changed! Click "Show Feedings" again to see all the feedings.')

  $('#feedings-update-message').addClass('success')

  setTimeout(() => {
    $('#feedings-update-message').html('')
    $('#feedings-update-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateFailure,
  onCreateSuccess,
  onIndexSuccess,
  onShowSuccess,
  onDestroySuccess,
  onPasswordUpdateFailure,
  onPasswordUpdateSuccess, 
  onUpdateSuccess
}

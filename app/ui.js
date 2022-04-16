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
       <div>
      <h4>Day: ${feeding.day}</h4>
      <p>Time: ${feeding.time}</p>
      <p>Ounces: ${feeding._ounces}</p>
      <p>ID: ${feeding._id}</p>
      <form class="feedings-update-dynamic" data-id=${feeding._id}>
        <input type="text" name="feeding[day]" placeholder="Feeding Day Here" required>
        <input type="text" name="feeding[time]" placeholder="Feeding Time Here" required>
        <button type="submit">Update Feeding</button>
      </form>
      <button class='feeding-destroy-dynamic' data-id=${feeding._id}>Delete Feeding</button>
      <br>
      </div>
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
  onPasswordUpdateFailure,
  onPasswordUpdateSuccess, 
  onUpdateSuccess
}

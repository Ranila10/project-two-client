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
  $('#auth-display').html('<p>successfully signing in</p>').show().fadeOut(5000)
  $('#change-password-form').show()
  $('#show-feeding').show()
  $('form').trigger('reset')
}
const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}
const onPasswordUpdateSuccess = function () {
  console.log('passwordSuccess')
  console.log()
  $('#auth-display').html('<p>update password </p>').show().fadeOut(5000)
}

const onPasswordUpdateFailure = function () {
  console.log('passwordFailure')
  console.log()
  $('#auth-display').html('<p>update password fail</p>')
}

const onSignOutSuccess = function () {
  console.log('text')
  $('#auth-display').html('<p>User signed out successfully</p>').show().fadeOut(5000)
  $('#feedings-display').hide()
  $('#change-password-form').hide()
  $('#show-feeding').hide()
}
const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

const onUpdateFailure = function () {
  $('#auth-display').html('<p>Error while updating</p>')
}
const onCreateFailure = function () {
  $('#auth-display').html('<p>CREAT ERROR</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>Password successfully change</p>')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>CHANGE ERROR</p>')
}
const onCreateSuccess = function () {
  $('#auth-display').html('<p>created successfully</p>').show()
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
      <p>Ounces: ${feeding.ounces}</p>
      <p>ID: ${feeding._id}</p>
     
      <form class="feedings-update-dynamic" data-id=${feeding._id}>
        <input type="text" name="feeding[day]" placeholder=" Day " required>
        <input type="time" name="feeding[time]" placeholder="Feeding Time" required>
        <input type="text" name="feeding[ounces]" placeholder="number" required>
        <button type="submit">Update Feeding</button>
      </form>
      <button class='feedings-destroy-dynamic' data-id=${feeding._id}>Delete Feeding</button>
      <br>
      </div>
    `
  })

  $('#feedings-display').html(feedingsHtml).show()
}

const onIndexFailure = function () {
  $('#feeding-display').html('<p>INDEX ERROR</p>').show()
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
  $('#feedings-display').html('Feedings update successfully').show().fadeOut(5000)

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
  onIndexFailure,
  onShowSuccess,
  onPasswordUpdateFailure,
  onPasswordUpdateSuccess,
  onUpdateSuccess,
  onUpdateFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure

}

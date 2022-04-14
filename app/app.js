const authFeedingEvents = require('./events.js')
$(() => {
  $('#sign-up-form').on('submit', authFeedingEvents.onSignUp)

  $('#sign-in-form').on('submit', authFeedingEvents.onSignIn)

  $('#change-password-form').on('submit', authFeedingEvents.onChangePassword)

  $('#update-password-form').on('submit', authFeedingEvents.onUpdatePassword)

  $('#sign-out-button').on('click', authFeedingEvents.onSignOut)
  $('#feeding-form').on('submit', authFeedingEvents.onCreate)
  
})
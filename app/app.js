const authFeedingEvents = require('./events.js')
$(() => {
  $('#sign-up-form').on('submit', authFeedingEvents.onSignUp)

  $('#sign-in-form').on('submit', authFeedingEvents.onSignIn)

  $('#sign-out-button').on('click', authFeedingEvents.onSignOut)
  $('#feeding-form').on('submit', authFeedingEvents.onCreat)
  
})
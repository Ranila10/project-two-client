// const { Modal } = require('bootstrap')
const authFeedingEvents = require('./events.js')

$(() => {
  $('#to-register').on('click', function () {
    $('#sign-up-form').toggle()
    $('#sign-in-form').hide()
    // $('#change-password-form').toggle()
  })
  // $('#registered').on('click', function () {
  //   $('#sign-in-form').show()
  // $('#change-password-form').toggle()
  // })
  $('#registered').on('click', function () {
    $('#sign-in-form').toggle()
    $('#sign-up-form').hide()
  })
  $('#feedings-display').on('submit', '.feedings-update-dynamic', authFeedingEvents.onUpdateFeeding)
  $('#feedings-display').on('click', '.feedings-destroy-dynamic', authFeedingEvents.onDestroyFeeding)
  $('#sign-in-form').on('submit', authFeedingEvents.onSignIn)
  $('#sign-out-button').on('click', authFeedingEvents.onSignOut)
  $('#sign-up-form').on('submit', authFeedingEvents.onSignUp)
  $('#change-password-form').on('submit', authFeedingEvents.onChangePassword)
  $('#show-feeding').hide()

  $('#sign-out-button').show()
  $('#sign-out-form').hide()
  $('#change-password-form').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#feeding-form').hide()
  $('#create-form').show()
  $('#show-feeding').on('click', authFeedingEvents.onIndexFeedings)
})

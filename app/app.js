// const { Modal } = require('bootstrap')
const authFeedingEvents = require('./events.js')

$(() => {
  $('#to-register').on('click', function () {
    $('#sign-up-form').toggle()
    $('#sign-in-form').hide()
    $('#change-password-form').toggle()
  })
  // $('#registered').on('click', function () {
  //   $('#sign-in-form').show()
  // $('#change-password-form').toggle()
  // })
  $('#registered').on('click', function () {
    $('#sign-in-form').toggle()
    $('#sign-up-form').hide()
  })

  $('#sign-in-form').on('submit', authFeedingEvents.onSignIn)
  $('#sign-out-button').on('click', authFeedingEvents.onSignOut)

  $('#sign-out-button').show()
  $('#sign-out-form').hide()
  $('#change-password-form').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#update-password-form').hide()
  $('#feeding-form').hide()
  $('#create-form').show()
})

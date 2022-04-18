const { Modal } = require('bootstrap')
const authFeedingEvents = require('./events.js')

$(() => {
  $('#to-register').on('click', function () {
    $('#sign-up-form').toggle()
    $('#sign-in-form').hide()
  })
  $('#registered').on('click', function (){
    $('#sign-in-form').toggle()
    $('#sign-up-form').hide()
  })

  $('#sign-in-form').on('submit', authFeedingEvents.onSignIn)
  $('#sign-out-button').on('click', authFeedingEvents.onSignOut)
  
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#update-password-form').hide()
  $('#feeding-form').hide()
  

  
})

define([
  'jquery',
  'underscore',
  'backbone', 
  'text!../templates/aboutus.html'
], function ($, _, Backbone, aboutus_template) {
  'use strict';
  var AboutUsView = Backbone.View.extend({
    el: '.content',
    aboutus_template: _.template(aboutus_template),
    events: {
      'click #formSend': 'sendEmail'
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() {   
      $('#bodyContainer').removeClass();
      $('#bodyContainer').addClass('bodyContact');
      $('.circleBase').removeClass('here');
      $('.circleBase6').addClass('here');
      $('.menubar').addClass('menuLeft');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.aboutus_template());
    },

    sendEmail: function(e) {
      e.preventDefault();
      var url = 'email',
        inputEmail = $('#inputEmail').val(),
        inputName = $('#inputName').val(),
        inputText = $('#inputText').val();
      $.ajax({ 
        url: url,
        type: 'POST',
        data: JSON.stringify({
          'email': inputEmail, 
          'name': inputName,
          'text': inputText
        }),
        beforeSend : function(req) { 
          req.setRequestHeader('content-type', 'application/json'); 
        },
        success: function(res){
          $('#formSuccess').removeClass('hidden');
          $('#inputEmail').val(''),
          $('#inputName').val(''),
          $('#inputText').val('');
          setTimeout(this.addHidden, 2000, '#formSuccess');
        }.bind(this),
        error: function(res){
          setTimeout(this.addHidden, 2000, '#formError');
        }.bind(this)        
      });
    },

    addHidden: function(idMsg) {
      $(idMsg).addClass('hidden');
    }
  });

  return AboutUsView;
});


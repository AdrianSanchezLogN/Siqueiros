define([
  'jquery',
  'underscore',
  'backbone', 
  'text!../templates/home.html'
], function ($, _, Backbone, home_template) {
  'use strict';
  var HomeView = Backbone.View.extend({
    el: '.content',
    home_template: _.template(home_template),
    events: {
      'keydown': 'keyPressed'
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() { 
      $('#bodyContainer').removeClass();
      $('#bodyContainer').addClass('bodyHome');
      $('.circleBase').removeClass('here');
      $('.circleBase1').addClass('here');
      $('.menubar').removeClass('menuLeft');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.home_template());
    },

    keyPressed: function(e) {
      console.log(e);
      /*if(e.keyCode == 13 && this.modalUp == false){
        this.loginFunct();
      } 
      else if(e.keyCode == 39 && this.manualPage < 7){
        this.manualPage ++;        
        var now = '.help-button.' + this.manualPage.toString();
        $(now).click();
      }
      else if(e.keyCode == 37 && this.manualPage > 1){
        this.manualPage --;      
        var now = '.help-button.' + this.manualPage.toString();
        $(now).click();
      } */
    }
  });

  return HomeView;
});


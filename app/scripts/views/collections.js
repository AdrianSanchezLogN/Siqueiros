define([
  'jquery',
  'underscore',
  'backbone', 
  'text!../templates/collections.html'
], function ($, _, Backbone, collections_template) {
  'use strict';
  var CollectionsView = Backbone.View.extend({
    el: '.content',
    collections_template: _.template(collections_template),
    events: {
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() {   
      $('#bodyContainer').removeClass();
      $('#bodyContainer').addClass('bodyCollection');
      $('.circleBase').removeClass('here');
      $('.circleBase2').addClass('here');
      $('.menubar').addClass('menuLeft');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.collections_template());
    }
  });

  return CollectionsView;
});


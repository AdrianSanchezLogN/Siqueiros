/*global define*/
define([
  'jquery',
  'backbone',
  'views/collections',
  'views/home',
  'views/aboutus'
], function ($, Backbone, collectionsView, homeView, aboutusView) {
  'use strict';

  var CollectionsView = new collectionsView(),
	  HomeView = new homeView(),
    AboutUsView = new aboutusView(),
    Router = Backbone.Router.extend({
      routes: {
          '':     'home',
          'home': 'home',
          'collection': 'collection',
          'contact': 'contact'
      },

      initialize: function() {
      },

      home: function() {
          HomeView.render();
      },

      collection: function() {
          CollectionsView.render();
      },

      contact: function() {
          AboutUsView.render();
      }
  });
  return Router;
});



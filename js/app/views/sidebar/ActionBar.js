/*
 * Copyright 2012 buddycloud
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(function(require) {
  var Backbone = require('backbone');
  var template = require('text!templates/sidebar/actionBar.html')
  var Events = Backbone.Events;

  var ActionBar = Backbone.View.extend({
    className: 'actionBar clearfix',
    events: {'click .discover': '_navigate'},

    render: function() {
      this.$el.html(_.template(template));
    },

    _navigate: function() {
      Events.trigger('navigate', 'explore');
    }
  });

  return ActionBar;
});

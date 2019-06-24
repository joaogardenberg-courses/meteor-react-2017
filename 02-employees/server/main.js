import { Meteor } from 'meteor/meteor';
import _          from 'lodash';

import {
  image,
  helpers
} from 'faker';

import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
  const recordsCount = Employees.find({}).count();

  if (!recordsCount) {
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name,
        email,
        phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('employees', function(perPage) {
    return Employees.find({}, { limit: perPage });
  });
});
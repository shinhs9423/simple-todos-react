import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from "/imports/api/TasksCollection";

const insertTask = taskText => TasksCollection.insert({
    text: taskText,
    userId: user._id,
    createAt: new Date(),
});

const SEED_USERNAME = '123';
const SEED_PASSWORD = '1';

Meteor.startup(async () => {
    // Todo Colection
  if (TasksCollection.find().count === 0 ) {
    [
        'Sample Task',
        'First Task',
    ].forEach(taskText => insertTask(taskText, user));
  }

  // user
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

});


/**
 * num1 + num2 를 합쳐서 리턴한다
 * @param num1 { Number }
 * @param num2 { Number }
 * @return { Number }
 */
function sum(num1, num2) {
    return num1 + num2;
}

/**
 *
 * @param num1 { Number }
 * @param num2 { Number }
 * @param callback { Function }
 * @return {*}
 */
function calc(num1, num2, callback) {
    return callback(num1, num2);
}
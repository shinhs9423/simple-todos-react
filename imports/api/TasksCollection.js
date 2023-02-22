import { Mongo } from 'meteor/mongo';

// mongoDB에 새로운 컬렉션을 만든다
// const `${name}Collection` = new Mongo.Collection(`${name}`);
// ${name} 에 Collection 이름을 작성하면 된다
export const TasksCollection = new Mongo.Collection('tasks');
// console.log(TasksCollection);
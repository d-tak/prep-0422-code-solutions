var person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing'

};

console.log(person);
console.log("The person's name is:", person.firstName, '', person.lastName, '.');

person.job = 'Jerk';
console.log("The person's current job is:", person.job, '.');
person.previousJob = 'amigo';
console.log("The person's previous job is:", person.previousJob, '.');

console.log('The complete person object:', person);

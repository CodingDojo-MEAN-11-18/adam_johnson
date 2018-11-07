// 30 minutes max
students = [
  { name: 'Remy', cohort: 'Jan' },
  { name: 'Genevieve', cohort: 'March' },
  { name: 'Chuck', cohort: 'Jan' },
  { name: 'Osmund', cohort: 'June' },
  { name: 'Nikki', cohort: 'June' },
  { name: 'Boris', cohort: 'June' }
];
function showStudents(array){
  for (var i = 0; i < array.length; i++){
    console.log('Name: ' + array[i].name + ', ' + 'Cohort: ' + array[i].cohort);
  }
  // OR
  for (var [name, cohort] of array.entries()){
    console.log(name,cohort);
  }
}
showStudents(students);

users = {
  employees: [
      { 'first_name':  'Miguel', 'last_name' : 'Jones' },
      { 'first_name' : 'Ernie', 'last_name' : 'Bertson' },
      { 'first_name' : 'Nora', 'last_name' : 'Lu' },
      { 'first_name' : 'Sally', 'last_name' : 'Barkyoumb' }
  ],
  managers: [
     { 'first_name' : 'Lillian', 'last_name' : 'Chambers' },
     { 'first_name' : 'Gordon', 'last_name' : 'Poe' }
  ]
};
function showUsers(dict){
  for (var key in dict){
    console.log(key);
    var user = dict[key];
    for (var value in user){
      // console.log(value + '- ' + user[value].last_name + ' , ' +user[value].first_name + ' -' + (user[value].last_name.length + user[value].first_name.length));
      // Better to do below with interpolation
      console.log( value, `${user[value].last_name} , ${user[value].first_name}`, (user[value].last_name.length + user[value].first_name.length));
    }
    // OR
    // console.log(dict[key]);
  }
}

showUsers(users);

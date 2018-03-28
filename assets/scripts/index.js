const config = {
  apiKey: 'AIzaSyCkPj0ecbsmwCT3f4ZTXKOd2CK5VEVVEkQ',
  authDomain: 'employee-tracker-a90d3.firebaseapp.com',
  databaseURL: 'https://employee-tracker-a90d3.firebaseio.com',
  projectId: 'employee-tracker-a90d3',
  storageBucket: 'employee-tracker-a90d3.appspot.com',
  messagingSenderId: '647783799396',
};
firebase.initializeApp(config);

const database = firebase.database();
let name = '';
let role = '';
let startDate = '';
let monthlyRate = '';

$('#add-employee-btn').on('click', function(e) {
  e.preventDefault();
  name = $('#employee-name-input').val().trim();
  //   console.log(name);
  role = $('#role-input').val().trim();
  //   console.log(role);
  startDate = $('#start-input').val().trim();
  //   console.log(startDate);
  monthlyRate = $('#rate-input').val().trim();
  //   console.log(monthlyRate);

  const object = {
    Name: name,
    Role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
  };
  database.ref().push(object);
});

database.ref().on('child_added', function(snapshot) {
  const sv = snapshot.val();
  console.log(sv);
});

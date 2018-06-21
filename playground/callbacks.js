
// remember this is a function expression, different from a declaration
var getUser = (id, callback) => {
  var user = {
	id: id,
	name: 'Joey'
  };

  setTimeout(() => {
	callback(user);
  }, 3000);
};

getUser(31, (user) => {
  console.log('user: ', user);
});

function loadUsers(userIds, load, done) {
  let completed = 0
  let users = []
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user;
      let a ;
      setTimeout(function abc() {
        a = done.bind(null ,user)
      });


    })
  })
}

module.exports = loadUsers

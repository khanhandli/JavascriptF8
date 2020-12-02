//Thuc hanh va vi du ve promise



var users = [
	{
		id: 1,
		name: 'Kien Dam',
	},
	{
		id: 2,
		name: 'Son Dang',
	},
	{
		id: 3,
		name: 'Nhu Y',
	},

];

var comments = [
	{
		id: 1,
		user_id: 1,
		content: 'Anh son chua ra video:('
	},
	{
		id: 2,
		user_id: 2,
		content: 'Vua ra xong em oi'
	},
];

// 1. Lay comment 
// 2. Tu comment lay ra user id
// tu user_id lay ra user tuong ung'
// 
// 
// Fake API
// Can hieu chugn nang lam viec voi mang? ham`, callback, promise , HTMLdom
function getComments() {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve(comments);
		},1000);
	})
};


function getUserByIds(userIds) {
	return new Promise(function(resolve) {
		var result = users.filter(function(user) {
			return userIds.includes(user.id);
		})
		setTimeout(function() {
			resolve(result);
		},2000)
	})
}



//Call back hell
//
//
//O? Promise cung co promsie hell
//
//Async / Await
getComments() 
	.then(function(comments) {
		var userIds = comments.map(
			function(comment) {
				return comment.user_id;
			} 
			)
		return getUserByIds(userIds)
			.then(function(users){
				return {
					users: users,
					comments: comments
				}
			})
	})
	
	.then(function(data) {
		var commentBlock = document.getElementById('comment');
		console.log(commentBlock)
		var html = '';
		data.comments.forEach(function(comment) {
			var user = data.users.find(function(user) {
				return user.id === comment.user_id
			});
			console.log(user)
			html += `<li>${user.name}: ${comment.content}</li>`;
			console.log(html)

		});

		commentBlock.innerHTML = html;

	})

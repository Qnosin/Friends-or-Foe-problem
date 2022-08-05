let shouldBe = ['Ryan', 'Mark'];
let friends = ['Ryan', 'Kieran', 'Mark'];
function friend(friends) {
	friends = friends.filter((friend) => {
		return shouldBe.includes(friend);
	});
	return friends;
}

console.log(friend(friends));

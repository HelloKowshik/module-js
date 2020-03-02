const arr = [1, 2, 3, 4, 5, 6];
arr.push('55');
// console.log(arr);
const obj = {
    name: 'hello',
    phone: 0122
};
obj.name = 'John Doe';
// console.log(obj);
function makeProfile(name, mail, gender = 'male/female') {
    const profile = {};
    profile.name = name;
    profile.mail = mail;
    profile.gender = gender;
    return profile;
}
let profile1 = makeProfile('john doe', 'john@doe.com');
console.log(profile1);
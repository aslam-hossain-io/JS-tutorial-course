// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "1242ahfie";
tinderUser.name = "Aslam";
tinderUser.isLoggedIN = false;

// console.log(tinderUser);

const reguarUser = {
  email: "hossain.aslam.dev@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aslam",
      lastnaem: "Hossain",
    },
  },
};

// console.log(reguarUser.fullname?.userfullname.firstname);

const obj1 = { 1: "a", 2: "B" };
const obj2 = { 3: "A", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "hossain.aslam.dev@gmail.com",
  },
  {
    id: 1,
    email: "aslam.hossain.developer@gmail.com",
  },
  {
    id: 1,
    email: "aslam.ahx1@gmail.com",
  },
];

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

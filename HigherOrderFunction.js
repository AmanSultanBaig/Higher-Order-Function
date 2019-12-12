// Higher Order Methods in JavaScript 

// 1: map()

let arrOne = [
  {id:1, name:'Aman Sultan Baig'},
  {id:2, name:'Nabeel Jameel'},
  {id:3, name:'Salman Saleem'},
  {id:4, name:'Shahid Khan'},
  {id:5, name:'Abdul Wali'},
]

const mapArray = arrOne.map((temp) => {
  return temp.id
});

console.log(mapArray);

// 2 filter()

let arrTwo = [
  {name:'Aman Sultan Baig',salary: 1200},
  {name:'Nabeel Jameel',salary: 240},
  {name:'Salman Saleem',salary: 2200},
  {name:'Shahid Khan',salary: 250},
  {name:'Abdul Wali',salary: 230},
]

const filteredArray = arrTwo.filter((temp) => {
  return temp.salary > 1000
});

console.log(filteredArray);

// 3 sort()

let arrThree = [
  {name:'Aman Sultan Baig',salary: 1200},
  {name:'Nabeel Jameel',salary: 240},
  {name:'Salman Saleem',salary: 2200},
  {name:'Shahid Khan',salary: 250},
  {name:'Abdul Wali',salary: 230},
]

const sortedArray = arrThree.sort((asc, dsc) => {
   return asc.salary - dsc.salary
});
console.log(sortedArray)

// 4 forEach()

let arrFour = [
  {name:'Aman Sultan Baig',postion:'JavaScript Developer',salary: 1200},
  {name:'Nabeel Jameel',postion:'PHP Developer',salary: 240},
  {name:'Salman Saleem',postion:'.Net Developer',salary: 2200},
  {name:'Shahid Khan',postion:'Laravel Developer',salary: 250}
]

arrFour.forEach((data) => {
  console.log(data)
})


// 5 reduce()

let arrFive = [2,3,4,5,6,7,8,9,1,50,98,20,45]

const getSalarySum = arrFive.reduce((total, current) => {
  return total + current
});

console.log(getSalarySum)



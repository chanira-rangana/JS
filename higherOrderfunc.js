const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i].name);
// }

// companies.forEach((company) => console.log(company.name));

// filter
// Get 21 and older
// let canDrink = [];
// for (let index = 0; index < ages.length; index++) {
//   if (ages[index] >= 21) {
//     canDrink.push(ages[index]);
//   }
// }

let canDrink = ages.filter((age) => age >= 21);
let retailCompanies = companies.filter(
  (company) => company.category == "Retail"
);

// console.log(retailCompanies);
let companyNames = [];
companies.forEach(function (company) {
  companyNames.push(company.name);
});

// console.log(
//   companies.map(
//     (company) => `${company.name} [${company.start} - ${company.end}]`
//   )
// );

const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortedCompanies2 = companies.sort((c1, c2) => c1.start > c2.start);

const sortAges = ages.sort(function (c1, c2) {
  if (c1 > c2) {
    return 1;
  } else {
    return -1;
  }
});

const sortAges2 = ages.sort((a, b) => a - b);

//sum of ages
const totalAges = ages.reduce((total, age) => total + age, 0);

//combined
const combined = ages
  .map((a) => a * 2)
  .filter((a) => a >= 40)
  .sort((a, b) => a - b)
  .reduce((total, curent) => total + curent, 0);
console.log(combined);

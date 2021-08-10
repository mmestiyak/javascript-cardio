// ## Array Cardio  from https://javascript30.com by https://wesbos.com Done by me without watching solution but some help from MDN and w3school

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

/*************************
      solution 1
-----------------------*/
const inventorsBornIn1500 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
/*************************
     Log solution 1
------------------------*/
console.groupCollapsed("Inventors in 1500's");
console.table(inventorsBornIn1500);
console.groupEnd();

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

/*************************
      solution 2
------------------------*/
const inventorsNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
/*************************
     Log solution 2
------------------------*/
console.groupCollapsed('Array Of Inventors names');
console.table(inventorsNames);
console.groupEnd();

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

/*************************
    solution 3
------------------------*/
const sortByBirthDate = inventors.sort((a, b) => b.year - a.year);
/*************************
    Log solution 3
------------------------*/
console.groupCollapsed('Sort Inventors by Birth Date');
console.table(sortByBirthDate);
console.groupEnd();

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

/*************************
  solution  4
------------------------*/
const totalYears = inventors.reduce((acc, curr) => {
  return (acc += curr.passed - curr.year);
}, 0);
/*************************
  Log solution 4
------------------------*/
console.log('total years all inventors lived together', totalYears, 'years');

// 5. Sort the inventors by years live

/*************************
  solution 5
------------------------*/
const sortByYearsLived = inventors.sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);
/*************************
 Log solution 5
------------------------*/
console.groupCollapsed('Sort by years inventors lived');
console.table(sortByYearsLived);
console.groupEnd();

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*************************
   solution 6
 ------------------------*/
//(go to  https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris & run code below in console to see all the boulevards in paris containing 'de' )

/*const category = document.querySelector('.mw-category');
      const linksInCategory = Array.from(category.querySelectorAll('a'));
      const boulevardsContainsDE = linksInCategory
        .map((link) => link.innerText)
        .filter((boulevard) => boulevard.includes('de'));
      console.groupCollapsed("Boulevards in Paris Contains 'de' ");
      console.table(boulevardsContainsDE);
      console.groupEnd(); */

/*************************
   End solution 6
------------------------*/

// 7. sort Exercise
// Sort the people alphabetically by last name

/*************************
   solution 7
------------------------*/
const sortByLastName = people.sort((a, b) => {
  aLast = a.split(',').splice(1);
  bLast = b.split(',').splice(1);
  if (aLast < bLast) return -1;
  return 1;
});
/*************************
 Log solution 7
 ------------------------*/
console.groupCollapsed('Sort People By Last Name');
console.table(sortByLastName);
console.groupEnd();

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

/*************************
solution 8
-----------------------*/
const sumTotalOfInstances = data.reduce((acc, curr) => {
  if (!acc[curr]) acc[curr] = 1;
  acc[curr] = acc[curr] + 1;
  return acc;
}, {});

/*************************
 Log solution 8
------------------------*/
console.groupCollapsed('total Of Instances of items of array');
console.table(sumTotalOfInstances);
console.groupEnd();

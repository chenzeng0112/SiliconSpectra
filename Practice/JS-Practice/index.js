// const companies = [
//     { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
//     { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//     { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//     { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//     { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//     { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//     { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//     { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//     { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// // forEach
// // for (let i = 0; i < companies.length; i++) {
// //     console.log(companies[i]);
// // }

// // companies.forEach((company) => {
// //     console.log(company.name)
// // })


// // // filter
// // let canDrink = [];
// // for (let i = 0; i < ages.length; i++) {
// //     if (ages[i] >= 21) {
// //         canDrink.push(ages[i]);
// //     }
// // }
// // console.log(canDrink);

// // const canDrink = ages.filter(age => age >= 21);
// // console.log(canDrink);

// // const retailCompanies = companies.filter(company => company.category === 'Retail');
// // console.log(retailCompanies);

// // const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
// // console.log(eightiesCompanies);

// // const lastTenYears = companies.filter(company => (company.end - company.start >= 10));
// // console.log(lastTenYears);

// // // map
// // const companyNames = companies.map(company => company.name);
// // console.log(companyNames);

// // const agesSquare = ages.map(age => Math.sqrt(age));
// // console.log(agesSquare);

// // // sort
// // const sortedCompanies = companies.sort((a, b) => (a.start - b.start));
// // console.log(sortedCompanies);

// // const sortAges = ages.sort((a, b) => (b - a));
// // console.log(sortAges);


// // // reduce
// // let ageSum = 0;
// // for (let i = 0; i < ages.length; i++) {
// //     ageSum += ages[i];
// // }

// // const ageSum = ages.reduce((total, age) => total + age, 0);
// // console.log(ageSum);

// // const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// // console.log(totalYears);

// // combine methods
// const combines = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((total, age) => (total + age), 0);
// console.log(combines);

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


// callback
// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }
// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);


// promise
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error!');
            }
        }, 2000);
    });
}
createPost({ title: 'Post Three', body: 'This is post three' });

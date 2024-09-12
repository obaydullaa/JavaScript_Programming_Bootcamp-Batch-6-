/**
 * 12.Execise solution-promise
 * ----------------------------------
 */
const users = [
    {
        id: 1,
        name: 'Adnan',
        profession: 'Web Developer',
    },
    {
        id: 2,
        name: 'Shamim',
        profession: 'Software Developer',
    },
    {
        id: 3,
        name: 'Anis',
        profession: 'Designer',
    },
]

const coursesList = [
    {
        id: 1,
        courses: ['JavaScript', 'python', 'php'],
        userId: 1,
    },
    {
        id: 2,
        courses: ['aws', 'python', 'JavaScript', 'DSA'],
        userId: 2,
    },
    {
        id: 3,
        courses: ['photoShop', 'inDesign', 'Illustrator'],
        userId: 2,
    },
]

const coursesPrice = {
    javascript: 5000,
    react: 4000,
    node: 5000,
    python: 2500,
    illustrator: 2000,
    photoShop: 2500,
    inDesign: 200,
    aws: 5000,
    dsa: 5000
}


// all function will be asynchronous
//--------------------------------------

// 1. Getting user - 2s
// 2. Course enrollment - 2s
// 3. price of the course -2s

// finding user by ID 
function getUser(id){
    const user = users.find((user) => user.id === id);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 2000)
    })
};

// finding course by using userId
function getCourseList(userId) {
    const userCourses = coursesList.find((course) => course.userId === userId);
    console.log(userCourses)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userCourses);
        },2000)
    });
};

//finding courses price and make sum and return total cost of the course 
function totalCoursePrice(courses) {
    console.log(courses);
    let total = 0;
    courses.forEach((course) => {
        total += coursesPrice[course];
        console.log(coursesPrice[course])
        console.log(total)
    })
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            resolve(total);
        },2000)
    })
}; 

getUser(1)
    .then((user) => {
        console.log(user);
        getCourseList(user.id)
        .then((userCourses) =>{
            console.log(userCourses); 
            totalCoursePrice(userCourses.courses)
            console.log(userCourses.courses)
            .then((price) => {
                console.log(price); 
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    })
    .catch((err) => {
        console.log(err)
    })

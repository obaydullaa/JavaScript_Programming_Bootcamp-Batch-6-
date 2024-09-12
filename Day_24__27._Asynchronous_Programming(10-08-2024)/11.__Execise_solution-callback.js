/**
 * 11.Exercise solution-callback
 * ------------------------------------
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
function getUser(id, fn){
    const user = users.find(user => user.id === id);
    setTimeout(()=> {
        fn(user);
    }, 2000);
};

// finding course by using userId
function getCourseList(userId, fn) {
    const userCourses = coursesList.find( course => course.userId === userId);
    setTimeout(()=> {
        fn(userCourses);
    }, 2000);
};


//finding courses price and make sum and return total cost of the course 
function totalCoursePrice(courses, fn){
    let total = 0;
    console.log(courses)
    courses.forEach((course) => {
        total += coursesPrice[course]
        console.log(coursesPrice[course])
    })
    setTimeout(()=> {
        fn(total);
    }, 2000);
}; 

getUser (1, (user) => {
    console.log(user)
    getCourseList(user.id, (userCourses) => {
        console.log(userCourses)
        totalCoursePrice(userCourses.courses, (price) => {
            console.log(price);
        })
    })
})

/**
 * 10.Exercise
 * -----------------------
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

const CoursesPrice = {
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
function getUser(){};

// finding course by using userId
function getCourseList() {};

//finding courses price and make sum and return total cost of the course 
function totalCoursePrice(){}; 
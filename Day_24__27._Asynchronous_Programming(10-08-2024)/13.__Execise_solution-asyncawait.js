/**
 * 13.Exercise solution-async await
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
    php: 2500,
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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userCourses);
        },2000)
    })
};


// Finding courses price and making sum
function totalCoursePrice(courses) {
    let total = 0;
    courses.forEach(course => {
        // Convert course name to lowercase to match coursesPrice keys
        const courseName = course.toLowerCase();
        if (coursesPrice[courseName]) {
            total += coursesPrice[courseName];
        } else {
            console.warn(`Price not found for course: ${courseName}`);
        }
    });
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(total);
        }, 2000);
    });
};

async function run() {
    const user = await getUser(1);
    console.log(user)
    const  userCourses = await getCourseList(user.id)
    console.log(userCourses);
    const price = await totalCoursePrice(userCourses.courses);
    console.log(price);
}
run();
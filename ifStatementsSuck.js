
function dance() {
    console.log('shall we dance?')
}
function aerobics() {
    console.log('1,2,1,2,1,2,1,2')
}
function party() {
    console.log('boots n pants in boots n pants')
}
function eat() {
    console.log('om nom nom')
}
function sleep() {
    console.log('zzzzzzzzzxzxzxzxxzxzxxzzxxxxxxxxxx')
}
function drink() {
    console.log('another pint of lager please, Mary')
}
function beMerry() {
    console.log('wheeeeeeeeeeeeeeeee!!!')
}

function ifs(activity) {
    if(activity === "dance") dance()
    else if(activity === "aerobics") aerobics()
    else if(activity === "party") party()
    else if(activity === "eat") eat()
    else if(activity === "sleep") sleep()
    else if(activity === "drink") drink()
    else beMerry()
}
const activities = [
    "dance",
    "aerobics",
    "party",
    "eat",
    "sleep",
    "drink",
    "be merry"
]

function main(){
    console.log('IF STATEMENTS SUCK!!!!')
    activities.forEach(activity => ifs(activity))
    console.log('\n\n\n\n\n\n')
}
main()
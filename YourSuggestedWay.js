class danceClass {
    match(input) {
        return input === "dance"
    }

    fn() {
        console.log('shall we dance?')
    }
}
class aerobicsClass {
    match(input) {
        return input === "aerobics"
    }
    fn(){
        console.log('1,2,1,2,1,2,1,2')
    }
}
class partyClass {
    match(input){
        return input === "party"
    }
    fn(){
        console.log('boots n pants in boots n pants')
    }
}
class eatClass {
    match(input){
        return input === "eat"
    }
    fn(){
        console.log('om nom nom')
    }
}
class sleepClass {
    match(input){
        return input === "sleep"
    }
    fn(){
        console.log('zzzzzzzzzxzxzxzxxzxzxxzzxxxxxxxxxx')
    }
}
class drinkClass {
    match(input){
        return input === "drink"
    }
    fn() {
        console.log('another pint of lager please, Mary')
    }
}
class beMerryClass {
    match(input){
        return true
    }
    fn(){
        console.log('wheeeeeeeeeeeeeeeee!!!')
    }
}

const activitiesForClasses = [
    "dance",
    "aerobics",
    "party",
    "eat",
    "sleep",
    "drink",
    "be merry"
]
function yourMain() {
    console.log('your suggested approach.')
    let dancec    = new danceClass, 
        aerobicsc = new aerobicsClass, 
        partyc    = new partyClass, 
        eatc      = new eatClass, 
        drinkc    = new drinkClass, 
        sleepc    = new sleepClass, 
        beMerryc  = new beMerryClass

    const activityFunctions = [ dancec, aerobicsc, partyc, eatc, drinkc, sleepc, beMerryc]
    //if match, call function, else do nothing, that's what false means in this statement
    activityFunctions.forEach(activity => 
        activitiesForClasses.forEach(act => 
            activity.match(act) 
            ? activity.fn() 
            : false
        )
    )
    console.log('\n\n\n\n\n\n\n\n')
}
yourMain()
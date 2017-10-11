activityFunctions = {
    "dance": function() {
        console.log('shall we dance?')
    },
    "aerobics":function() {
        console.log('1,2,1,2,1,2,1,2')
    },
    "party": function() {
        console.log('boots n pants in boots n pants')
    },
    "eat": function() {
        console.log('om nom nom')
    }, 
    "sleep": function() {
        console.log('zzzzzzzzzxzxzxzxxzxzxxzzxxxxxxxxxx')
    },
    "drink": function() {
        console.log('another pint of lager please, Mary')
    },
    "beMerry": function() {
        console.log('wheeeeeeeeeeeeeeeee!!!')
    }
}
const activitiesPoly = [
    "dance",
    "aerobics",
    "party",
    "eat",
    "sleep",
    "drink",
    "be merry"
]
function polyMain() {
    console.log('Polymorphic way. Notice how the code is half the size of the class based way. This is one example of how classes are not necessarily objects, and how classes are not always the most polymorphic. Not to mention that the class way necessitates that you perform nested looping and instantiate n classes for every time you add a new condition.')
    //if activity is a property, tryGet in Python
    //call the function
    //else call the default case
    activitiesPoly.forEach(activity => 
        activity in activityFunctions 
        ? activityFunctions[activity]() 
        : activityFunctions["beMerry"]()
    )
}
polyMain()
const activitiesPoly = ["dance","aerobics","party","eat","sleep","drink","be merry"]
const activityFunctions = {
    "dance"   : () => console.log('shall we dance?'),
    "aerobics": () => console.log('1,2,1,2,1,2,1,2'),
    "party"   : () => console.log('boots n pants in boots n pants'),
    "eat"     : () => console.log('om nom nom'), 
    "sleep"   : () => console.log('zzzzzzzzzxzxzxzxxzxzxxzzxxxxxxxxxx'),
    "drink"   : () => console.log('another pint of lager please, Mary'),
    "beMerry" : () => console.log('wheeeeeeeeeeeeeeeee!!!')
}

function polyMain() {
    console.log('Polymorphic way. This is one example of how classes are not necessarily objects, and how classes are not always the most polymorphic. The class based approach necessitates class instantiation which can be costly the more conditions you add, and depending on how often you need to check them, where as these conditional functions are declared and initialized once. ')
    activitiesPoly.forEach(activity => 
        activity in activityFunctions 
        ? activityFunctions[activity]() 
        : activityFunctions["beMerry"]()
    )
}
polyMain()
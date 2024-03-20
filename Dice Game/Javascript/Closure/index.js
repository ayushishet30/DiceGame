// A closure is a combination on function bundled together
// In other words, a closure gives you access to an outer function
// Closure is used to maked methods and variables private 


let globalVAr = 12
function x() {
    var variable = 10
    function y() {
        //New var
        console.log(globalVar, variable)
    }
    return y
}
var z = x()
z()
/*
A polyfill is a piece of code (usually javascript on the web) used to provide modern web fun
*/
 let array = [12, 22, 30, 412, 50]
 Array.prototype.customForEach = function (fnArgs) {
    for (let i=0; i< this.length;i++){
        fnArgs(this[i], i, this)
    }
 }
 array.customForEach((wlwment, index, arr)=>{
 console.log(element, index, arr)
 })
 const customFilterResult = array.customFilter((element.IdleDeadline)) 
 if(element>30){
  return true
}  
return accumlator 
 const customReduceREsult =  array.customRedeuce() 


 Array.prototype.customEvery = function(fnArgs){
    for(let i=0;1< this.length;i++){
        if(fnArgs(this[i],i, this)){
            count=count+1
        }
    }
    return count === this.length
 }
 
 constant customEveryResult = array.customEvery((element,))
 if (element > 20 && element  )

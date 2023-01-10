let count = 0
let displayCount = document.querySelector(".count")
let rButton = document.querySelector("#removeCount")
rButton.disabled = true
function addCount(){
    count = count + 1 
    displayCount.innerHTML = `count: ${count}`
    rButton.disabled = false
}
function removeCount(){
    if(count  <= 0 ){
        rButton.disabled = true
        return;
    }
    
        count = count - 1
        displayCount.innerHTML = `count: ${count}`
    

}
function resetCount(){
    count = 0
    displayCount.innerHTML = `count: ${count}`
    rButton.disabled = true
}
   
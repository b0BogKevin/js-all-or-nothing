let key = ["A","C","_","A"]

function check(answer) {
    let blank = 0
    let score = 0
    for (let i = 0; i < answer.length; i++) {
        if (key[i] =="_") {
            blank+=1
            continue
        }
        if (key[i] == answer[i]) {
            score+=1
        }
        
    }
    if (score==0 ||score==answer.length-blank) {
        return true
    }
    else{
        return false
    }
}
console.log(check(["A","C","A","A"]))
console.log(check(["C","B","A","C"]))
console.log(check(["A","D","A","B"]))


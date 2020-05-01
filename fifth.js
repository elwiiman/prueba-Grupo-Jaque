const isBalanced = (str) =>{

    let stack = [];
    let openToClose = {
        "(": ")",
        "[": "]"
    }
    
    for(let i = 0; i < str.length ; i ++){
        if(str[i] === "(" || str[i] === "["){
            stack.push(str[i])
        }else{
            let lastItem = stack.pop();
            if(str[i] !== openToClose[lastItem])return false
        }
    }

    if(stack.length !== 0){
        return false
    }
    return true

}
// 2186. Minimum Number of Steps to Make Two Strings Anagram II
// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/submissions/

var minSteps = function(s, t) {
    const sCount = {},tCount = {};
    let steps = 0;
    
    for(const char of s){
        sCount[char] = (sCount[char] || 0) + 1
    }
    
    for(const char of t){
        tCount[char] = (tCount[char] || 0) + 1
    }
    
    console.log(sCount, tCount)
    
    let sKeys = Object.keys(sCount);
    let tKeys = Object.keys(tCount);
    
    for(const key of sKeys){
        if(!tCount[key]){
            steps += sCount[key]
        }
        if(tCount[key] > sCount[key]){
            steps += tCount[key] - sCount[key]
        }
    }
    
    for(const key of tKeys){
        if(!(key in sCount)){
            steps += tCount[key]
        }
        if(tCount[key] < sCount[key]){
            steps += sCount[key] - tCount[key]
        }
    }
    
    return steps
};

// Generate Parenthesis
// https://leetcode.com/problems/generate-parentheses/submissions/

var generateParenthesis = function(n) {   
    const res = [], stack = [];
    
    const backtrack = (open, closed) => {
        if(open === n && closed === n){
            res.push(stack.join(''))
            return
        }
        
        if(open < n){
            stack.push('(')
            backtrack(open+1, closed)
            stack.pop()
        }
        
        if(closed < open){
            stack.push(')')
            backtrack(open, closed+1)
            stack.pop()
        }
    }
    
    backtrack(0,0)
    return res
};
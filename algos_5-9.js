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

// Private Content
// uncompresses 3n12e3z

const uncompress = (s) => {
    let i=0, j=0, res = '', num = '';
    const alpha = new Set('abcdefghijklmnopqrstuvwxyz');

    while(j < s.length){
        console.log(i, j)
        if(!alpha.has(s[j])){
            num += s[j] 
        }
        if(alpha.has(s[j])){
        for(let k=0; k < +num; k++){
            res += s[j]
            }
        i = j
        num = ''
        }
        j++
    }
    return res;
};

// compresses ccaaaaatttsssss

const compress = (s) => {
  // todo
/*
input:
    string: ccaaatsss

    variables:
    res 
    i
    j
    count = j - i
    */   
    
    let i=0, j=0, res = '', count = 0;
    
    while(j <= s.length){
        count = j - i
        if(s[j] !== s[i] && count !== 1){
        res += count + s[i]
        i = j
        } else if(s[j] !== s[i] && count === 1){
        res += s[i]
        i=j
        }
        j++
    }
    return res
};

// Most Freq Char

const mostFrequentChar = (s) => {
  // todo
    const count = {};
    let max = 0, maxChar;
    
    for(const char of s){
        count[char] = 1+(count[char] || 0)
    }
    
    for(const [key, val] of Object.entries(count)){
        if(val > max){
        max = val;
        maxChar = key
        }
    }
    
    return maxChar
};

// Pair Sum

const pairSum = (numbers, targetSum) => {

    const refHash = {};
    
    for(let i=0; i < numbers.length; i++){
        let num = numbers[i];
        const diff = targetSum - num
        if(!(diff in refHash)){
        refHash[num] = i
        } else {
        return [i, refHash[diff]]
        }
    }
};

// Pair Product

const pairProduct = (numbers, targetProduct) => {
  // todo
    const hash = {};
    
    for(let i=0; i < numbers.length; i++){
        const num = numbers[i];
        let complement = targetProduct/num
        if(complement in hash) return [i, hash[complement]]
        
        hash[num] = i
    }
};

// Intersection Values of 2 Arrays

const intersection = (a, b) => {
  // todo
    let numSet = new Set(a);
    const res = [];
    
    for(const val of b){
        if(numSet.has(val))
        res.push(val)
    }
    return res
};

// Five Sort

const fiveSort = (nums) => {
  // todo
    let i=0, j = nums.length-1;
    
    while(i <= j){
        if(nums[j] === 5){
        j--
        } else if(nums[i] === 5){
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
        } else {
        i++
        }
    }
    
    return nums
};
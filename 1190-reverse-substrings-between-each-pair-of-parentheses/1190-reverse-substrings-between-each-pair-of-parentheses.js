/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];
    
    for (let char of s) {
        if (char === ')') {
            let queue = [];
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                queue.push(stack.pop());
            }
            stack.pop();
            while (queue.length > 0) {
                stack.push(queue.shift());
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};


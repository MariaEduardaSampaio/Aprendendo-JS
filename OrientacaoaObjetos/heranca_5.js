console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('maria eduarda'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([2, 4, 5, 6, 2,1, 10].first())
console.log(['f', 'a', 'b'].first())
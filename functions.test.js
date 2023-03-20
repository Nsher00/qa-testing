const functions = require("./functions")

test('2 is 2', ()=>{
    expect(functions.returnTwo()).toBe(2)
})

test('Jack n Jill', ()=>{
    expect(functions.greeting('Jack')).toBe('Hello Jack.')
    expect(functions.greeting('Jill')).toBe('Hello Jill.')
})

test('qwik mafs', ()=>{
    expect(functions.addNum(3,4)).toBe(7)
})
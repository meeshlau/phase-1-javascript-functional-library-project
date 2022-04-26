function myEach(collection, callback) {
    for (let accessor in collection) {
        callback(collection[accessor])
    }
    return collection
}

function myMap(collection, callback) {
    let modifiedArray = []
    for (let accessor in collection) {
        modifiedArray.push(callback(collection[accessor]))
    }
    return modifiedArray
}

function myReduce(collection, callback, acc) {
    let copy = Object.values(collection)
    if (!acc) {
        acc = copy[0]
        copy = copy.slice(1)
    }
    console.log(acc)
    for (let i = 0; i < copy.length; i++) {
        acc = callback(acc, copy[i], copy)
    }
    return acc
}

function myFind(collection, callback) {
    for (let accessor in collection) {
        let element = (collection[accessor])
        if (callback(element)) {
            return element
        }
    }
}

function myFilter(collection, callback) {
    let finalArray = []
    for (let accessor in collection) {
        let element = (collection[accessor])
        if (callback(element)) {
            finalArray.push(element)
        }    
    }
    return finalArray
}

function mySize(collection) {
    return Object.keys(collection).length
}

function myFirst(collection, n=1) {
    let count = 1
    let array = []
    for (let accessor in collection) {
        if  (count <= n) {
            array.push(collection[accessor])
            count ++
        }
    }
    return array.length > 1 ? array:array[0]
    }

function myLast(collection, n=1) {
   let first = collection.length -n
   return n >1 ? collection.slice(first, collection.length) : collection[first]
}

function myKeys(collection) {
    let array = []
    for (let accessor in collection) {
        array.push(accessor)
    }
    return array
}   

function myValues(collection) {
//  let count = 0
    let array = []   
    for (let keys in collection) {
        array.push(collection[keys])
    }
    return array
}
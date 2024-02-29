const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name){
    cats.push(name)
}
function destructivelyPrependCat (name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat (name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat (name){
    cats.shift(name)
}
function appendCat (name){
    const copyOfCats = [...cats]
    copyOfCats.push(name) 
    return copyOfCats
}
function prependCat(name) {
    const copyOfCats = [...cats]
    copyOfCats.unshift(name)
    return copyOfCats
}
function removeLastCat () {
    const copyOfCats = [...cats]
    copyOfCats.pop ()
    return copyOfCats
}
function removeFirstCat () {
    const copyOfCats = [...cats]
    copyOfCats.shift ()
    return copyOfCats
}
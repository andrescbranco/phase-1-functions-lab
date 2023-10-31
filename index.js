// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hq = 42
    let distance = Math.abs(someValue-hq)
    return distance
}

function distanceFromHqInFeet(someValue) {
    let distance = distanceFromHqInBlocks(someValue)*264
    return distance
}

function distanceTravelledInFeet(pointA, pointB) {
    let distance = Math.abs(pointA-pointB)*264
    return distance
}

function calculatesFarePrice(pointA,pointB) {
    let distance = distanceTravelledInFeet(pointA,pointB);
    let price 
    if (distance <=400){
        console.log('Your ride is free!')
        return price = 0
    } else if (distance >400 && distance <=2000) {
        return price = (distance - 400)*0.02
    } else if (distance >2000 && distance <=2500) {
        return price = 25
    } else {
        return "cannot travel that far"
    }
}
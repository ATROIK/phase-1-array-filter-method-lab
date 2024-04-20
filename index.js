// Code your solution here
function findMatching(drivers, driverName) {
    return drivers.filter((driver) => driver.toLowerCase() === driverName.toLowerCase());
}
// slice() does not change original array, non destructive
function fuzzyMatch (drivers, driverName) {
    return drivers.filter((driver) => driver.slice(0,2) === driverName.slice(0,2))
}

function matchName (drivers, driverName) {
    return drivers.filter((driver) => driver.name === driverName)
}
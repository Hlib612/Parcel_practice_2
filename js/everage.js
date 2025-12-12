export const avarage = (array) => {
    const total = array.reduce((acc , item) => {
return acc + item;
    })
    console.log(total/array.length)
}

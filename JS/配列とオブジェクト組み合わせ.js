/**
 *配列
 */

let array = [1,2,3]

array.forEach(elm => {
  console.log('配列')
  console.log(elm)
})

/**
 *配列-配列
 */

console.log('配列-配列')
 let array_array = [[1, 2, 3], [1, 2, 3]]
 array_array.forEach(elm => {
   elm.forEach(elm => {
     console.log(elm)
   })
 })

 /**
  *配列-オブジェクト
  */
  console.log('配列ーオブジェクト')

  let array_object = [
    {key1: 1, key2: 2, key3: 3},
    {key1: 1, key2: 2, key3: 3}
  ]

array_object.forEach(elm => {
  //console.log(elm)
  Object.keys(elm).forEach(key => {
    console.log(`key: ${key} value: ${elm[key]}`)
  })
})

/**
 *オブジェクト
 */
console.log('オブジェクト')

 let object = {key1: 1, key2: 2, key3: 3}
 Object.keys(object).forEach(key => {
   console.log(`key: ${key} value: ${object[key]}`)
 })

 /**
  *オブジェクトー配列
  */
console.log('オブジェクトー配列')
  let object_array = {
    key1: [1, 2, 3],
    key2: [4, 5, 6]
  }

  Object.keys(object_array).forEach(key => {
    //console.log(key)
    object_array[key].forEach(elm => {
      console.log(elm)
    })
  })

  /**
   *オブジェクト – オブジェクト
   */

   let object_object = {
    key1: {x: 1, y: 2},
    key2: {x: 3, y: 4}
  }



  Object.keys(object_object).forEach(keyX => {
    Object.keys(object_object[keyX]).forEach(keyY => {
      console.log(`keyX: ${keyX} keyY: ${keyY} value: ${object_object[keyX][keyY]}`)
    })
  })

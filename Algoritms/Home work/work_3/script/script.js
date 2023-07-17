function mergeArrays(arr1, arr2) {
    let c = Array(arr1.length + arr2.length);
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        c[k++] = arr1[i++];
      } else {
        c[k++] = arr2[j++];
      }
      
    }
    
    console.log(c[k++]);
  
    while (i < arr1.length) {
      c[k++] = arr1[i++];
    }
  
    while (j < arr2.length) {
      c[k++] = arr2[j++];
    }
  
    return c;
  }
  
  const a = [1, 3, 5, 7, 9];
  const b = [4, 10];
  
  const c = mergeArrays(a, b);
  console.log(c);


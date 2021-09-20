function magicMatrix(matrix) {
    let isMagical = true;
  
    let sum = matrix[0].reduce((prev, current) => prev + current);
  
    for (let i = 0; i < matrix.length; i++) {
      //checks all rows
      if (matrix[i].reduce((p, c) => p + c) != sum) {
        isMagical = false;
      }
      //check all cols
      let sum2 = 0;
      for (let j = 0; j < matrix.length; j++) {
        sum2 += matrix[j][i];
      }
      if (sum2 != sum) {
        isMagical = false;
      }
    }
  
    console.log(isMagical);
  }
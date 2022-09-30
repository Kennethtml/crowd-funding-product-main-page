var twoSum = function (nums, target) {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    let index1 = nums[i];

    nums.forEach((num,idx) => {
      if (i!==idx && index1 + num === target) {
        output.push(i,idx);
      
      
      }
       return output;
       
     
    });
    // return output;
  }
 return output
};

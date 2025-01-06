var totalNum = +prompt("Enter your total marks");

var numSub1 = +prompt("Enter the number's obtained in Subject-1:");

var numSub2 = +prompt("Enter the number's obtained in Suject-2:");

var numSub3 = +prompt("Enter the number's obtained in Suject-3:");

var obtainedNum = numSub1 + numSub2 + numSub3;

var percentage = (obtainedNum / totalNum) * 100;

if (percentage >= 80) {
  alert(
    "MARKSHEET:" +
      "\nTotal Marks: " +
      totalNum +
      "\nObtained Marks: " +
      obtainedNum +
      "\nPercentage: " +
      percentage +"%"+
      "\nGrades: A-1 \nRemarks: Excellent!"
  );
}else if(percentage>=70){
    alert(
        "MARKSHEET:" +
          "\nTotal Marks: " +
          totalNum +
          "\nObtained Marks: " +
          obtainedNum +
          "\nPercentage: " +
          percentage +"%"+
          "\nGrades: A \nRemarks: Good!"
      );
}else if(percentage>=60){
    alert(
        "MARKSHEET:" +
          "\nTotal Marks: " +
          totalNum +
          "\nObtained Marks: " +
          obtainedNum +
          "\nPercentage: " +
          percentage +"%"+
          "\nGrades: B \nRemarks: You need to improve!"
      );
}else{
    alert(
        "MARKSHEET:" +
          "\nTotal Marks: " +
          totalNum +
          "\nObtained Marks: " +
          obtainedNum +
          "\nPercentage: " +
          percentage +"%"+
          "\nGrades: Fail! \nRemarks: Sorry!"
      );
}

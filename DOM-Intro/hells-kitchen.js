function solve() {
   //some refactoring needed
   const btn = document.querySelector("#btnSend");
   btn.addEventListener("click", onClick);
 
   function onClick() {
     const textarea = document.querySelector("textarea").value;
     const inputs = textarea.split('"').filter((x) => x.length > 3);
     const output = document.querySelector("#bestRestaurant p");
     const output2 = document.querySelector("#workers p");
 
     const restaurants = {};
 
     for (let entry of inputs) {
       const [restaurant, employees] = entry.split(" - "); //employees as str instead of array
 
       if (restaurants.hasOwnProperty(restaurant)) {
         restaurants[restaurant] += ", ";
         restaurants[restaurant] += employees;
       } else {
         restaurants[restaurant] = employees;
       }
     }
 
     const reducer = (prev, current) => {
       return prev + Number(current.split(" ")[1]);
     };
 
     const sorted = Object.entries(restaurants);
     sorted.sort(
       (a, b) =>
         b[1].split(", ").reduce(reducer, 0) / b[1].split(", ").length -
         a[1].split(", ").reduce(reducer, 0) / a[1].split(", ").length
     );
 
     const bestRest = sorted[0][0];
     const avgSalary = (
       sorted[0][1].split(", ").reduce(reducer, 0) /
       sorted[0][1].split(", ").length
     ).toFixed(2);
     let bestSalary = [];
     let bestEmployees = sorted[0][1].split(", ");
 
     for (emp of bestEmployees) {
       bestSalary.push(Number(emp.split(" ")[1]).toFixed(2));
     }
 
     bestSalary.sort((a, b) => b - a);
     console.log(
       bestEmployees.sort((a, b) => Number(b.split(" ")) - Number(a.split(" ")))
     );
 
     output.textContent = `Name: ${bestRest} Average Salary: ${avgSalary} Best Salary: ${bestSalary[0]}`;
 
     for (let emp of bestEmployees) {
       output2.textContent += `Name: ${emp.split(" ")[0]} With Salary: ${
         emp.split(" ")[1]
       } `;
     }
   }
 }
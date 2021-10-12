import * as d3 from "d3"; //comment for github
import { employees } from "/data/faculty.js";

console.log("employees", employees);

d3.select("body")
  .selectAll("h2")
  .data(employees)
  .enter()
  .append("h2")
  .text(employees.length);

console.log(
  "This will not work because you are trying to get the sum of employees and this get specific attributes from a variable. So, This will not work. Also, it prints it out multiple times as it iterates through the array."
);

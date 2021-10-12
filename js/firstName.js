import * as d3 from "d3"; //comment for github
import { employees } from "/data/faculty.js";
// var d3 = window.d3; //uncomment for github

console.log("employees", employees);

//if only javascript could print out all of those names...
d3.select("body")
  .selectAll("h2")
  .data(employees)
  .enter()
  .append("h2")
  .text(function (employees) {
    return employees.firstName;
  });

import * as d3 from "d3"; //comment for github
import { employees } from "/data/faculty.js";
// var d3 = window.d3; //uncomment for github

console.log("employees", employees);

d3.select("body")
  .selectAll("h2")
  .data(employees)
  .enter()
  .append("h1")
  .text(function (employees) {
    var full = employees.firstName + " " + employees.lastName;
    return full;
  });

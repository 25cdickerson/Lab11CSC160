import * as d3 from "d3"; //comment for github
import { employees } from "/data/faculty.js";

d3.select("ol")
  .selectAll("li")
  .data(employees)
  .enter()
  .append("li")
  .text(function (employees) {
    return employees.lastName;
  });

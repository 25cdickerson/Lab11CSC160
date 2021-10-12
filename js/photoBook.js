import * as d3 from "d3"; //comment for github
import { employees } from "/data/faculty.js";

d3.select("body")
  .selectAll("img")
  .data(employees)
  .enter()
  .append("img")
  .attr("src", function (employees) {
    return employees.photo;
  });

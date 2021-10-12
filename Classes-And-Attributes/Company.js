class Company {
  constructor() {
    this.departments = {};
    this.salaries = {};
  }

  addEmployee(name, salary, position, department) {
    let typeChecking = [name, salary, position, department];
    for (let param of typeChecking) {
      if (param == '' || param == undefined || param == null) {
        throw new Error('Invalid input');
      }
    }
    if (salary < 0 || isNaN(Number(salary))) {
      throw new Error('Invalid input');
    }

    let entry = { name, salary, position };

    if (this.departments.hasOwnProperty(department)) {
      this.departments[department].push(entry);
      this.salaries[department][0] += salary;
      this.salaries[department][1] += 1;
    } else {
      this.departments[department] = [];
      this.departments[department].push(entry);
      this.salaries[department] = [salary, 1];
    }

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    const mappedObj = Object.entries(this.salaries);
    for (let line of mappedObj) {
      line[1] = line[1][0] / line[1][1];
    }

    mappedObj.sort((a, b) => b[1] - a[1]);

    const bestDepartmentName = mappedObj[0][0];
    const bestDepartmentAvgSalary = mappedObj[0][1];

    const sortedEmployees = [];
    for (let line of this.departments[bestDepartmentName]) {
      sortedEmployees.push(Object.values(line));
    }

    sortedEmployees.sort((a, b) => a[0].localeCompare(b[0]));
    sortedEmployees.sort((a, b) => b[1] - a[1]);
    let result = `Best Department is: ${bestDepartmentName}`;
    result += `\nAverage salary: ${bestDepartmentAvgSalary.toFixed(2)}`;

    for (let employee of sortedEmployees) {
      result += `\n${employee[0]} ${employee[1]} ${employee[2]}`;
    }

    return result;
  }

}

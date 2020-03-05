"use strict";


const depts = [{
        id: 0,
        name: "IT dept",
    },
    {
        id: 1,
        name: "QA dept",
    }
];


const positions = [{
    deptId: 0,
    id: 0,
    salary: 1000,
    name: "Lead dev"
}, {
    deptId: 1,
    id: 1,
    salary: 500,
    name: "QA engineer"
}];


const empls = [{
        id: 0,
        name: "Ivan Ivanov",
        deptId: 0,
        positionId: 0
    },
    {
        id: 1,
        name: "Petr Petrov",
        deptId: 1,
        positionId: 1
    },
];


function init(id) {
    if (id !== 0 && id !== 1) {
        return Promise.reject("Wrong id. Please enter valid id.");
    }

    return new Promise((resolve, reject) => {
        console.log("~ Started collecting info ~");
        resolve(id);
    });
}


function getName(id) {
    let name = empls.find(item => item["id"] === id)["name"];

    console.log("getting name...");

    return new Promise((resolve, reject) => {
        resolve(name);
    });
}


function getDept(id) {
    let dept = depts.find(item => item["id"] === id)["name"];

    console.log("getting departament...");

    return new Promise((resolve, reject) => {
        resolve(dept);
    });
}


function getPosition(id) {
    let position = positions.find(item => item["id"] === id)["name"];

    console.log("getting position...");

    return new Promise((resolve, reject) => {
        resolve(position);
    });
}


function getSalary(id) {
    let salary = positions.find(item => item["id"] === id)["salary"];

    console.log("getting salary...");

    return new Promise((resolve, reject) => {
        resolve(salary);
    });
}


function composeResult(arr) {
    let out = arr[0] + " from " + arr[1] + " is a " + arr[2] + " and has a salary of ₹" + arr[3] + ".";

    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(out), 1500);
    });
}


function main(id) {
    init(id)
        .then(function(id) {
            let data = [
                getName(id),
                getDept(id),
                getPosition(id),
                getSalary(id)
            ];

            return Promise.all(data);
        })
        .then(function(result) {
            return composeResult(result);
        })
        .then(function(result) {
            console.log(result);
        })
        .catch(function(error) {
            console.log(error);
        })
        .finally(function() {
            console.log("~ done ~");
        })
}
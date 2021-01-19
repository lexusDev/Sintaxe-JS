const EntityBase = require('./entityBase');
const Util = require('./util');
const Manager = require('./manager');

// console.log(new EntityBase({
//     name: 'Alex Monteiro',
//     gender: 'male',
// }).name);

// console.log(new EntityBase({
//     name: 'Xuxa da Silva',
//     gender: 'male',
// }).name);

const assert = require('assert');
const Employee = require('./employee');

const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({
        name: 'Xuxa da Silva',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, { message: 'you must define age first!!!'})
}

const CURRENT_YEAR = 2021;
Date.prototype.getFullYear = () => CURRENT_YEAR;

{
    const employee = new Employee({
        name: 'Joazinho',
        age: 20,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Joazinho");
    assert.deepStrictEqual(employee.age,  undefined);
    assert.deepStrictEqual(employee.gender,  undefined);
    assert.deepStrictEqual(employee.grossPay,  Util.formatCurrency(5000.40));
    assert.deepStrictEqual(employee.netPay,  Util.formatCurrency(4000.32));
    
    const expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear);
}

{
    const manager = new Manager({
        name: 'Mariazinha',
        age: 18,
        gender: GENDER.female
    });

    assert.deepStrictEqual(manager.name, "Ms. Mariazinha");
    assert.deepStrictEqual(manager.age,  undefined);
    assert.deepStrictEqual(manager.gender,  undefined);
    assert.deepStrictEqual(manager.birthYear, 2003);
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40));
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000));
    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32));
}
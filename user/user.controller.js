const service = require("./user.service")// declare path service for use
const servicePM = require("../pm/pm.service")// declare path service for use
const serviceSale = require("../sale/sale.service")// declare path service for use
const serviceEmp = require("../employee/employee.service")// declare path service for use
controller = {}

controller.index = (req, res) => { // use request value and return results to front-end
    service.all().then((list) => { // call back function in service it is getting value
        res.send(list) // response value to front-end
    })
}

controller.add = (req, res) => {// use request value and return results to front-end
    if (req.body.data.type === 'Employee') {
        var tmp = {
            username: req.body.username,
            password: req.body.password,
            idEmp: req.body.data.val._id,
            type: req.body.data.val.employeeType
        }
    } else {
        var tmp = {
            username: req.body.username,
            password: req.body.password,
            idEmp: req.body.data.val._id,
            type: req.body.data.type
        }
    }
    service.insert(tmp);// call back function in service it is adding value
    res.send() // response to front-end
}

controller.update = (req, res) => {
    service.update(req.body, req.params.id).then((data) => { // req.body is degree data at user edit. & req.params.id is ID in rows at user edit.
        res.json(data); // response data with JSON
    });
};

controller.destroy = (req, res) => {
    service.delete(req.params.id).then(() => { // req.params.id is ID in rows at user delete.
        res.json("200"); // response status with JSON
    });
};

controller.checkUser = (req, res) => {
    (async () => {
        let list = [];
        let data = {};
        let tmp = {};
        list = await service.all();
        for (let i = 0; i < list.length; i++) {
            if (req.body.username === list[i].username && req.body.password === list[i].password) {
                if (list[i].type === 'PM') {
                    tmp = await servicePM.findId(list[i].idEmp);
                    data = {
                        _id: tmp[0]._id,
                        pmName: tmp[0].pmName,
                        pmPhone: tmp[0].pmPhone,
                        pmAddress: tmp[0].pmAddress,
                        username: list[i].username,
                        type: list[i].type
                    }
                } else if (list[i].type === 'Sale') {
                    tmp = await serviceSale.findId(list[i].idEmp);
                    data = {
                        _id: tmp[0]._id,
                        pmName: tmp[0].pmName,
                        pmPhone: tmp[0].pmPhone,
                        pmAddress: tmp[0].pmAddress,
                        username: list[i].username,
                        type: list[i].type
                    }
                } else if (list[i].type === 'Employee') {
                    tmp = await serviceEmp.findId(list[i].idEmp);
                    data = {
                        _id: tmp[0]._id,
                        pmName: tmp[0].pmName,
                        pmPhone: tmp[0].pmPhone,
                        pmAddress: tmp[0].pmAddress,
                        username: list[i].username,
                        type: list[i].type
                    }
                } else if (list[i].type === 'Store') {
                    data = list[i];
                } else if (list[i].type === 'Admin') {
                    data = list[i];
                } else if (list[i].type === 'God') {
                    data = list[i];
                }
            }
        }
        res.json(data);
    })();
};

module.exports = controller // export module for use controller in another files
const service = require("./user.service")// declare path service for use
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
        list = await service.all();
        list.forEach(element => {
            if (req.body.username === element.username && req.body.password === element.password) {
                data = element.type;
            }
        });
        res.json(data);
    })();
};

module.exports = controller // export module for use controller in another files
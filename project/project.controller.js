const service = require("./project.service")// declare path service for use
const servicePM = require("../pm/pm.service")// declare path service for use
const serviceCustomer = require("../customer/customer.service")// declare path service for use
const serviceSale = require("../sale/sale.service")// declare path service for use
const serviceAssign = require("../assign/assign.service")
var groupArray = require('group-array');
controller = {}
var tmp = {};
var temp = {};
controller.index = (req, res) => { // use request value and return results to front-end
    (async () => {
        let listProject = [];
        let pm = [];
        let customer = [];
        listProject = await service.all();
        for (let i = 0; i < listProject.length; i++) {
            tmp = (groupArray(listProject[i].projectFile, 'codeProduct'));
            listProject[i].projectFile = tmp;
            pm = await servicePM.findId(listProject[i].pm);
            listProject[i].pm = pm;
            customer = await serviceCustomer.findId(listProject[i].customer);
            listProject[i].customer = customer;
        }
        res.send(listProject) // response value to front-end
    })();
}

controller.group = (req, res) => { // use request value and return results to front-end
    service.groupService().then((list) => { // call back function in service it is getting value
        res.send(list) // response value to front-end
    })
}

controller.projectFromPM = (req, res) => { // use request value and return results to front-end
    (async () => {
        let listProject = [];
        let pm = [];
        let customer = [];
        let sale = [];
        listProject = await service.projectFromPM(req.params.id);
        for (let i = 0; i < listProject.length; i++) {
            tmp = (groupArray(listProject[i].projectFile, 'codeProduct'));
            listProject[i].projectFile = tmp;
            pm = await servicePM.findId(listProject[i].pm);
            listProject[i].pm = pm;
            customer = await serviceCustomer.findId(listProject[i].customer);
            listProject[i].customer = customer;
            sale = await serviceSale.findId(listProject[i].sale);
            listProject[i].sale = sale;
        }
        res.send(listProject) // response value to front-end
    })();
}
controller.projectFromSale = (req, res) => { // use request value and return results to front-end
    (async () => {
        let listProject = [];
        let pm = [];
        let customer = [];
        let sale = [];
        listProject = await service.projectFromSale(req.params.id);
        for (let i = 0; i < listProject.length; i++) {
            tmp = (groupArray(listProject[i].projectFile, 'codeProduct'));
            listProject[i].projectFile = tmp;
            pm = await servicePM.findId(listProject[i].pm);
            listProject[i].pm = pm;
            customer = await serviceCustomer.findId(listProject[i].customer);
            listProject[i].customer = customer;
            sale = await serviceSale.findId(listProject[i].sale);
            listProject[i].sale = sale;
        }
        res.send(listProject) // response value to front-end
    })();
}
controller.projectFromCus = (req, res) => { // use request value and return results to front-end
    (async () => {
        let listProject = [];
        let pm = [];
        let customer = [];
        let sale = [];
        listProject = await service.projectFromCus(req.params.id);
        // for (let i = 0; i < listProject.length; i++) {
        //     tmp = (groupArray(listProject[i].projectFile, 'codeProduct'));
        //     listProject[i].projectFile = tmp;
        //     pm = await servicePM.findId(listProject[i].pm);
        //     listProject[i].pm = pm;
        //     customer = await serviceCustomer.findId(listProject[i].customer);
        //     listProject[i].customer = customer;
        //     sale = await serviceSale.findId(listProject[i].sale);
        //     listProject[i].sale = sale;
        // }
        res.send(listProject) // response value to front-end
    })();
}
controller.groupId = (req, res) => { // use request value and return results to front-end
    (async () => {
        let listProject = [];
        let pm = [];
        let customer = [];
        let sale = [];
        listProject = await service.groupProject(req.params.id);
        for (let i = 0; i < listProject.length; i++) {
            tmp = (groupArray(listProject[i].projectFile, 'codeProduct'));
            listProject[i].projectFile = tmp;
            pm = await servicePM.findId(listProject[i].pm);
            listProject[i].pm = pm;
            customer = await serviceCustomer.findId(listProject[i].customer);
            listProject[i].customer = customer;
            sale = await serviceSale.findId(listProject[i].sale);
            listProject[i].sale = sale;
        }
        res.send(listProject) // response value to front-end
    })();
}

controller.add = (req, res) => {// use request value and return results to front-end
    let value = {
        projectCode: req.body.projectCode,
        projectFile: req.body.projectFile,
        projectType: req.body.projectType,
        scopeStart: req.body.scopeStart,
        scopeEnd: req.body.scopeEnd,
        customer: req.body.customer,
        pm: req.body.pm,
        sale: req.body.sale
      };
    serviceAssign.findId(req.body.oldProjectCode).then((list) => { // call back function in service it is getting value
        let assign = {};
        list.forEach(element => {
            assign = {
                assignProjectCode: req.body.projectCode,
                assignProject_id: element.assignProject_id,
                assignPMName: element.assignPMName,
                assignEmpName: element.assignEmpName,
                assignFile: element.assignFile,
                assignScopeStart: element.assignScopeStart,
                assignScopeEnd: element.assignScopeEnd,
                assignMat: element.assignMat,
                assignProgress: element.assignProgress,
                assignNote: element.assignNote,
                assignEmpType: element.assignEmpType
            };
            serviceAssign.insert(assign);
        });
    })
    service.insert(value);// call back function in service it is adding value
    res.send() // response to front-end
}

controller.updateProgress = (req, res) => {
    (async () => {
        let listProject = [];
        let progress = [];
        let customer = [];
        let sale = [];
        listProject = await service.groupProject(req.params.id);
        listProject[0].projectProgress = req.body[0].value;
        service.update(listProject[0], req.params.id).then((data) => { // req.body is degree data at user edit. & req.params.id is ID in rows at user edit.
            res.json(data); // response data with JSON
        }); // response value to front-end
    })();
};

controller.destroy = (req, res) => {
    service.delete(req.params.id).then(() => { // req.params.id is ID in rows at user delete.
        res.json("200"); // response status with JSON
    });
};
module.exports = controller // export module for use controller in another files
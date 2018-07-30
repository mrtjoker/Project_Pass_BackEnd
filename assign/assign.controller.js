const service = require("./assign.service")// declare path service for use
const serviceEmployee = require("../employee/employee.service")// declare path service for use
const serviceStore = require("../store/store.service")
controller = {}

controller.index = (req, res) => { // use request value and return results to front-end
    service.all().then((list) => { // call back function in service it is getting value
        res.send(list) // response value to front-end
    })
}
controller.findIdUser = (req, res) => { // use request value and return results to front-end
    (async () => {
        let list = [];
        let emp = [];
        emp = await serviceEmployee.findId(req.params.id);
        list = await service.findIdUser(emp[0].employeeName);
        res.send(list) // response value to front-end
    })();
}

controller.projectProgress = (req, res) => { // use request value and return results to front-end
    service.findId(req.params.id).then((list) => { // call back function in service it is getting value
        let fileProgress = 0;
        let manegerProgress = 0;
        let sumlen = 0;
        list.forEach(element => {
            element.assignFile.forEach(val => {
                fileProgress += val.fileProgress
            })
            sumlen += element.assignFile.length
            manegerProgress += fileProgress / sumlen;
        });
        let projectProgress = [0];
        projectProgress[0] = { value: manegerProgress / list.length };
        res.send(projectProgress)
    })
}
controller.findAssignId = (req, res) => { // use request value and return results to front-end
    // console.log(req.body)
    // console.log(req.params.id)
    

    service.findId(req.params.id).then((list) => { // call back function in service it is getting value
        // console.log(list)
        let check = [5];
        check[0] = { ck: false, value: [] }
        check[1] = { ck: false, value: [] }
        check[2] = { ck: false, value: [] }
        check[3] = { ck: false, value: [] }
        check[4] = { ck: false, value: [] }
        list.forEach(element => {
            if (element.assignEmpType === 'Draft') {
                check[0].ck = true;
                check[0].value = element;
            } else if (element.assignEmpType === 'Part1') {
                check[1].ck = true;
                check[1].value = element;
            } else if (element.assignEmpType === 'Part2') {
                check[2].ck = true;
                check[2].value = element;
            } else if (element.assignEmpType === 'Part3') {
                check[3].ck = true;
                check[3].value = element;
            } else if (element.assignEmpType === 'Part4') {
                check[4].ck = true;
                check[4].value = element;
            }
        });
        res.send(check) // response value to front-end
    })
}

controller.add = (req, res) => {// use request value and return results to front-end
    // console.log(req.body)
    service.insert(req.body);// call back function in service it is adding value
    res.send() // response to front-end
}
controller.update = (req, res) => {
    // console.log(req.body.assignProjectCode)
    let re = 0.0;
    for (let i = 0; i < req.body.assignFile.length; i++) {
        req.body.assignFile[i].fileProgress = (req.body.assignFile[i].fileRecive / req.body.assignFile[i].fileNum) * 100
        re += req.body.assignFile[i].fileProgress / req.body.assignFile.length 
    }
    req.body.assignProgress = re;
    re = 0.0

    service.update(req.body, req.params.id).then((data) => { // req.body is degree data at user edit. & req.params.id is ID in rows at user edit.
        // console.log(data)
        res.json(data); // response data with JSON
    });
};

controller.updateMat = (req, res) => {
    (async () => {
        let matI = {};
        let assignMat = [];
        let mat = {};
        matI = await serviceStore.findId(req.body.assignMat.matId);
        matL = {
            _id: matI[0]._id,
            materialId: matI[0].materialId,
            materialName: matI[0].materialName,
            materialNum: matI[0].materialNum - req.body.assignMat.matFromStore,
            materialUnit: matI[0].materialUnit,
            materialPrice: parseInt(matI[0].materialPrice),
            materialForm: 'old'
        }
        listMat = await serviceStore.update(matL, matI[0]._id)
    })();

    (async () => {
        let list = {};
        let assignMat = [];
        let assign = {};
        list = await service.findAssign(req.params.id);
        for (let i = 0; i < list[0].assignMat.length; i++) {
            if (i === req.body.assignMat.count) {
                assignMat.push({
                    _id: req.body.assignMat._id,
                    matId: req.body.assignMat.matId,
                    matItem: req.body.assignMat.matItem,
                    matType: req.body.assignMat.matType,
                    matNum: parseInt(req.body.assignMat.matNum),
                    matRecive: parseInt(req.body.assignMat.matRecive + req.body.assignMat.matFromStore),
                    matDate: req.body.assignMat.matDate,
                    matForm: 'old',
                    matUse: parseInt(req.body.assignMat.matUse),
                    matReturn: req.body.assignMat.matReturn
                })
            } else {
                assignMat.push(list[0].assignMat[i]);
            }
        }
        assign = {
            _id: list[0]._id,
            assignFile: list[0].assignFile,
            assignMat: assignMat,
            assignProjectCode: list[0].assignProjectCode,
            assignProject_id: list[0].assignProject_id,
            assignPMName: list[0].assignPMName,
            assignEmpName: list[0].assignEmpName,
            assignScopeStart: list[0].assignScopeStart,
            assignScopeEnd: list[0].assignScopeEnd,
            assignProgress: list[0].assignProgress,
            assignNote: list[0].assignNote,
            assignEmpType: list[0].assignEmpType,
        }
        listAssign = await service.update(assign, req.params.id)
        res.json(listAssign);
    })();
};

controller.updateMatUse = (req, res) => {
    (async () => {
        console.log(req.body.assignMat)
        let list = {};
        let assignMat = [];
        let assign = {};
        list = await service.findAssign(req.params.id);
        for (let i = 0; i < list[0].assignMat.length; i++) {
            if (i === req.body.assignMat.count) {
                assignMat.push({
                    _id: req.body.assignMat._id,
                    matId: req.body.assignMat.matId,
                    matItem: req.body.assignMat.matItem,
                    matType: req.body.assignMat.matType,
                    matNum: parseInt(req.body.assignMat.matNum),
                    matRecive: parseInt(req.body.assignMat.matRecive),
                    matDate: req.body.assignMat.matDate,
                    matReturn: req.body.assignMat.matReturn,
                    matForm: req.body.assignMat.matForm,
                    matUse: parseInt(req.body.assignMat.matUse+req.body.assignMat.matUseInOneDay),
                    matReturn: req.body.assignMat.matReturn
                })
            } else {
                assignMat.push(list[0].assignMat[i]);
            }
        }
        assign = {
            _id: list[0]._id,
            assignFile: list[0].assignFile,
            assignMat: assignMat,
            assignProjectCode: list[0].assignProjectCode,
            assignProject_id: list[0].assignProject_id,
            assignPMName: list[0].assignPMName,
            assignEmpName: list[0].assignEmpName,
            assignScopeStart: list[0].assignScopeStart,
            assignScopeEnd: list[0].assignScopeEnd,
            assignProgress: list[0].assignProgress,
            assignNote: list[0].assignNote,
            assignEmpType: list[0].assignEmpType,
        }
        listAssign = await service.update(assign, req.params.id)
        res.json(listAssign);
    })();
};

controller.updateReturnMat = (req, res) => {
    (async () => {
        console.log(req.body)
        let list = {};
        let assignMat = [];
        let assign = {};
        list = await service.findAssign(req.params.id);
        for (let i = 0; i < list[0].assignMat.length; i++) {
            if (i === req.body.count) {
                assignMat.push({
                    matId: req.body.matId,
                    matItem: req.body.matItem,
                    matType: req.body.matType,
                    matNum: parseInt(req.body.matNum),
                    matRecive: parseInt(req.body.matRecive),
                    matDate: req.body.matDate,
                    matReturn: true,
                    matForm: 'old',
                    matUse: parseInt(req.body.matUse),
                })
            } else {
                assignMat.push(list[0].assignMat[i]);
            }
        }
        assign = {
            _id: list[0]._id,
            assignFile: list[0].assignFile,
            assignMat: assignMat,
            assignProjectCode: list[0].assignProjectCode,
            assignProject_id: list[0].assignProject_id,
            assignPMName: list[0].assignPMName,
            assignEmpName: list[0].assignEmpName,
            assignScopeStart: list[0].assignScopeStart,
            assignScopeEnd: list[0].assignScopeEnd,
            assignProgress: list[0].assignProgress,
            assignNote: list[0].assignNote,
            assignEmpType: list[0].assignEmpType,
        }
        listAssign = await service.update(assign, req.params.id)
        res.json(listAssign);
    })();
};
controller.updateMatassignForm = (req, res) => {
    (async () => {
        let list = {};
        let assignMat = [];
        let assign = {};
        realIdMat = await serviceStore.findId(req.body[0].value.materialId);
        list = await service.findAssign(req.params.id);
        for (let i = 0; i < list[0].assignMat.length; i++) {
            if (i === req.body[0].valueAssign.count) {
                assignMat.push({
                    _id: realIdMat[0]._id,
                    matId: req.body[0].value.materialId,
                    matItem: req.body[0].value.materialName,
                    matType: req.body[0].value.materialUnit,
                    matNum: parseInt(req.body[0].valueAssign.matNum),
                    matRecive: 0,
                    matDate: req.body[0].valueAssign.matDate,
                    matForm: 'old',
                    matUse: parseInt(req.body[0].valueAssign.matUse),
                    matReturn: req.body[0].valueAssign.matReturn

                })
            } else {
                assignMat.push(list[0].assignMat[i]);
            }
        }
        assign = {
            _id: list[0]._id,
            assignFile: list[0].assignFile,
            assignMat: assignMat,
            assignProjectCode: list[0].assignProjectCode,
            assignProject_id: list[0].assignProject_id,
            assignPMName: list[0].assignPMName,
            assignEmpName: list[0].assignEmpName,
            assignScopeStart: list[0].assignScopeStart,
            assignScopeEnd: list[0].assignScopeEnd,
            assignProgress: list[0].assignProgress,
            assignNote: list[0].assignNote,
            assignEmpType: list[0].assignEmpType,
        }
        listAssign = await service.update(assign, req.params.id)
        res.json(listAssign);
    })();
};

controller.destroy = (req, res) => {
    service.delete(req.params.id).then(() => { // req.params.id is ID in rows at user delete.
        res.json("200"); // response status with JSON
    });
};
module.exports = controller // export module for use controller in another files
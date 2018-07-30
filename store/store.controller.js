const service = require("./store.service")// declare path service for use
const serviceAssign = require("../assign/assign.service")
controller = {}

controller.index = (req, res) => { // use request value and return results to front-end
    service.all().then((list) => { // call back function in service it is getting value
        res.send(list) // response value to front-end
    })
}

controller.add = (req, res) => {// use request value and return results to front-end
    service.insert(req.body);// call back function in service it is adding value
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
controller.findMatId = (req, res) => { // use request value and return results to front-end
    
    (async () => {
        // console.log(req.body)
        let list = 0;
        let matId = [];
        let num = 0;
        for (let i = 0; i < req.body.length; i++) {
            // console.log(req.body[i].value.assignMat.length)
            for (let j = 0; j < req.body[i].value.assignMat.length; j++) {
                list = await service.findId(req.body[i].value.assignMat[j].matId);
                // console.log(list)
                matId.push({
                    materialNum: list[0].materialNum,
                    materialForm: list[0].materialForm
                })
                num++;
            }
        }
        res.json(matId);
    })();
}
controller.updateMatInStore = (req, res) => {
    (async () => {
        list1 = await service.findId(req.body.matId);
        matL = {
            _id: list1[0]._id,
            materialId: list1[0].materialId,
            materialName: list1[0].materialName,
            materialNum: parseInt(list1[0].materialNum + req.body.matToStore),
            materialUnit: list1[0].materialUnit,
            materialPrice: parseInt(list1[0].materialPrice),
            materialForm: 'old'
        }
        listMat = await service.update(matL, matL._id)
    })();

    (async () => {
        // console.log(req.body.mat_id)
        // console.log(req.body.matId)
        // console.log(req.body)
        let assignMat = [];
        list2 = await serviceAssign.findAssign(req.body._id);
        for (let i = 0; i < list2[0].assignMat.length; i++) {
            if (i === req.body.count) {
                assignMat.push({
                    _id: req.body.mat_id,
                    matId: req.body.matId,
                    matItem: req.body.matItem,
                    matType: req.body.matType,
                    matNum: parseInt(req.body.matNum),
                    matRecive: 0,
                    matDate: req.body.matDate,
                    matForm: 'old',
                    matUse: 0,
                    matReturn: false

                })
            } else {
                assignMat.push(list2[0].assignMat[i]);
            }
        }
        assign = {
            _id: list2[0]._id,
            assignFile: list2[0].assignFile,
            assignMat: assignMat,
            assignProjectCode: list2[0].assignProjectCode,
            assignProject_id: list2[0].assignProject_id,
            assignPMName: list2[0].assignPMName,
            assignEmpName: list2[0].assignEmpName,
            assignScopeStart: list2[0].assignScopeStart,
            assignScopeEnd: list2[0].assignScopeEnd,
            assignProgress: list2[0].assignProgress,
            assignNote: list2[0].assignNote,
            assignEmpType: list2[0].assignEmpType,
        }
        listAssign = await serviceAssign.update(assign, req.body._id)
        res.json(listAssign);
    })();

}
module.exports = controller // export module for use controller in another files
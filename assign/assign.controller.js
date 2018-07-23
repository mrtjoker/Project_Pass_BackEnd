const service = require("./assign.service")// declare path service for use
controller = {}

controller.index = (req, res) => { // use request value and return results to front-end
    service.all().then((list) => { // call back function in service it is getting value
        res.send(list) // response value to front-end
    })
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
            manegerProgress += fileProgress/sumlen;
        });
        let projectProgress = [0];
        projectProgress[0] = {value: manegerProgress /list.length};
        res.send(projectProgress)




        // let check = [5];
        // check[0] = { ck: false, value: [] }
        // check[1] = { ck: false, value: [] }
        // check[2] = { ck: false, value: [] }
        // check[3] = { ck: false, value: [] }
        // check[4] = { ck: false, value: [] }
        // list.forEach(element => {
        //     if (element.assignEmpType === 'Draft') {
        //         check[0].ck = true;
        //         check[0].value = element;
        //     } else if (element.assignEmpType === 'Part1') {
        //         check[1].ck = true;
        //         check[1].value = element;
        //     } else if (element.assignEmpType === 'Part2') {
        //         check[2].ck = true;
        //         check[2].value = element;
        //     } else if (element.assignEmpType === 'Part3') {
        //         check[3].ck = true;
        //         check[3].value = element;
        //     } else if (element.assignEmpType === 'Part4') {
        //         check[4].ck = true;
        //         check[4].value = element;
        //     }
        // }); // response value to front-end
    })
}
controller.findAssignId = (req, res) => { // use request value and return results to front-end
    service.findId(req.params.id).then((list) => { // call back function in service it is getting value
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
    service.insert(req.body);// call back function in service it is adding value
    res.send() // response to front-end
}
controller.update = (req, res) => {
    for (let i = 0; i < req.body.assignFile.length; i++) {
        req.body.assignFile[i].fileProgress = (req.body.assignFile[i].fileRecive / req.body.assignFile[i].fileNum) * 100
    }

    service.update(req.body, req.params.id).then((data) => { // req.body is degree data at user edit. & req.params.id is ID in rows at user edit.
        res.json(data); // response data with JSON
    });
};

controller.updateMat = (req, res) => {
    console.log(req.body)
    service.update(req.body, req.body._id).then((data) => { // req.body is degree data at user edit. & req.params.id is ID in rows at user edit.
        console.log(data)
        res.json(data); // response data with JSON
    });
};

controller.destroy = (req, res) => {
    service.delete(req.params.id).then(() => { // req.params.id is ID in rows at user delete.
        res.json("200"); // response status with JSON
    });
};
module.exports = controller // export module for use controller in another files
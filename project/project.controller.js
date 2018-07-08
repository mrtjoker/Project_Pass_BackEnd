const service = require("./project.service")// declare path service for use
var groupArray = require('group-array');
controller = {}
var tmp = {};
var temp = {};
controller.index = (req, res) => { // use request value and return results to front-end
    service.all().then((listProject) => { // call back function in service it is getting value
        listProject.forEach(element => {
            tmp = (groupArray(element.projectFile, 'codeProduct'));
            element.projectFile = tmp;
        });
        res.send(listProject) // response value to front-end
    })
}

controller.group = (req, res) => { // use request value and return results to front-end
    service.groupService().then((list) => { // call back function in service it is getting value
        res.send(list) // response value to front-end
    })
}

controller.groupId = (req, res) => { // use request value and return results to front-end
    service.groupProject(req.params.id).then((list) => { // call back function in service it is getting value
        res.send(list) // response value to front-end
    })
}

controller.add = (req, res) => {// use request value and return results to front-end
    service.insert(req.body);// call back function in service it is adding value
    res.send() // response to front-end
}

controller.update = (req, res) => {
    console.log(req.body)
    // service.update( req.body, req.params.id ).then( ( data ) => { // req.body is degree data at user edit. & req.params.id is ID in rows at user edit.
    //     res.json( data ); // response data with JSON
    // } );
};

controller.destroy = (req, res) => {
    service.delete(req.params.id).then(() => { // req.params.id is ID in rows at user delete.
        res.json("200"); // response status with JSON
    });
};
module.exports = controller // export module for use controller in another files
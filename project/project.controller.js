const service = require("./project.service")// declare path service for use
controller = {}

controller.index = (req, res) => { // use request value and return results to front-end
    service.all().then((listProject) => { // call back function in service it is getting value
        let count = 0;
        let temp = [];
        let check = 0;
        let list = [];
        list.forEach(element => {
            element.projectFile.forEach(value => {
                if (count === 0) {
                    temp.push(value.codeProduct);
                    count++;
                } else {
                    temp.forEach(val => {
                        if (value.codeProduct === val) {
                            check++;
                        }
                    });
                    if(check === 0){
                        temp.push(value.codeProduct);
                    }
                    check = 0;
                }
            });
            list.push({
                // StatusProject:,
                // customer:,
                // pm:,
                // projectCode:,
                // projectEnd:,
                // projectFile:,
                // projectProgress:,
                // projectStart:,
                // projectType:,
                // _id:
            })
        });
        console.log(temp)
        res.send(listProject) // response value to front-end
    })
}

controller.group = (req, res) => { // use request value and return results to front-end
    service.groupService().then((list) => { // call back function in service it is getting value

        console.log(list)
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
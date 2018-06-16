const service = require("./test.service")// declare path service for use
controller = {} 

controller.index = (req, res) => { // use request value and return results to front-end
    service.all().then(( list ) => { // call back function in service it is getting value
        res.send(list) // response value to front-end
    })
}

controller.add = (req, res) => {// use request value and return results to front-end
    console.log(req.body)
    service.insert(req.body);// call back function in service it is adding value
    res.send() // response to front-end
}

module.exports = controller // export module for use controller in another files
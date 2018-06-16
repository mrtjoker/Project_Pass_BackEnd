const service = require("./store.service")// declare path service for use
controller = {} 

controller.index = (req, res) => { // use request value and return results to front-end
    console.log(1)
    service.all().then(( list ) => { // call back function in service it is getting value
        res.send(list) // response value to front-end
    })
}

controller.add = (req, res) => {// use request value and return results to front-end
    console.log(req.body)
    service.insert(req.body);// call back function in service it is adding value
    res.send() // response to front-end
}
controller.update = ( req, res ) => {
    service.update( req.body, req.params.id ).then( ( data ) => { // req.body is degree data at user edit. & req.params.id is ID in rows at user edit.
        res.json( data ); // response data with JSON
    } );
};

controller.destroy = ( req, res ) => {
    service.delete( req.params.id ).then( () => { // req.params.id is ID in rows at user delete.
        res.json( "200" ); // response status with JSON
    } );
};
module.exports = controller // export module for use controller in another files
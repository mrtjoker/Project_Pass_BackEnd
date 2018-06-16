const app = require('./config/express');
mongoose = require('./config/mongoose');

port = process.env.PORT || 3000;
app.use(require("./test/test.route"));
app.use(require("./sale/sale.route"));
app.use(require("./customer/customer.route"));
app.use(require("./project/project.route"));
app.use(require("./pm/pm.route"));
app.use(require("./employee/employee.route"));
uploadfile = require("./upload/uploadfile")({app: app});
// app.use(require("./sale/saleProject.route"));

app.listen( port );
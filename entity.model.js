mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleSchema = new Schema({ // declare structor model in database   
    
    SaleName: String,
    SaleLName: String,
    SaleAddress: String,
    SalePhone: String,
 });

var Sale = mongoose.model("sale", SaleSchema); // create model in sale collection

module.exports = { // export module for use model in another files
    Sale 
};
////////
var CustomerSchema = new Schema({
    
    CusName: String,
    CusLName: String,
    CusAddress: String,
    CusPhone: String,
 });

var Customer = mongoose.model("customer", CustomerSchema); 

module.exports = { 
    Customer 
};
////////
var TypeProjectSchema = new Schema({  
    
    TypeProjectName: String, // Jon,Mass,Automobill
    // ProjectProductID: Number, //*(link  to ProjectProduct use for import old product if type project is mass and automobill)
   
 });

var TypeProject = mongoose.model("typeProject", TypeProjectSchema); 

module.exports = { 
    TypeProject 
};
////////
var PMSchema = new Schema({  
    
    PMName: String, 
    PMLName: String,
    PMAddress: String,
    PMPhone: String,
    StatusPm: String,
    
   
 });

var PM = mongoose.model("pm", PMSchema); 

module.exports = { 
    PM 
};
///////
var AssignSchema = new Schema({  
    
    //AssignID: Number, 
    // ProjectProductID: Number, //*(link  to ProjectProduct )
    //PMID: Number,//*(link  to PM )
    //ProgressCurrentID: Number,*(link  to ProgressCurrent )
    //TypeAssignID: Number*(link  to TypeAssign )
    Goal: Number,//*(target for make product)
    Finish: Number,//*(how many product success)
    //EmpID: Number,//*(link to Employee)
    NoteAssign: String,
    DeadlineAssign: Date,
    DaystartAssign: Date,

   
 });

var Assign = mongoose.model("assign", AssignSchema); 

module.exports = { 
    Assign 
};
////////
var ProjectSchema = new Schema({  
    
    //ProjectID: Number, 
    //PMID: Number,
    //SaleID: Number,
    //CusID: Number,
    //TypeProjectID: Number,
    ProjectLName: String,
    DeadlineProject: Date,
    DaystartProject: Date,
    ProgressProject: Number,
    StatusProject: String,
    
   
 });

var Project = mongoose.model("project", ProjectSchema); 

module.exports = { 
    Project 
};
////////
var ProjectProductSchema = new Schema({  
    
    //ProjectProductID: Number, 
    //ProjectID: Number,
    //ProductID: Number,
    DeadlineProjectProduct: Date,
    GoalProjectProduct: Number,
   NoteProjectProduct: String,
    
   
 });

var ProjectProduct = mongoose.model("projectproduct", ProjectProductSchema); 

module.exports = { 
    ProjectProduct 
};
/////////
var ProductSchema = new Schema({  
    
    //ProductID: Number, 
    ProductName: String,
   DetailProduct: String,
    
   
 });

var Product = mongoose.model("product", ProductSchema); 

module.exports = { 
    Product 
};
/////////
var ProductFileSchema = new Schema({  
    
    //ProductFileID: Number,*
    //ProductID: Number, 
    //FileModelID: Number,
    
   
 });

var FileModel = mongoose.model("fileModel", FileModelSchema); 

module.exports = { 
    FileModel
};
/////////
var FileModelSchema = new Schema({  
    
    //FileModelID: Number,*
    FileName: String
    //EmpID: Number, 
    //ProductFileID: Number,
    
   
 });

var FileModel = mongoose.model("fileModel", FileModelSchema); 

module.exports = { 
    FileModel
};
////////
var EmployeeSchema = new Schema({  
    
    EmployeeName: String, 
    EmployeeLName: String,
    EmployeeAddress: String,
    EmployeePhone: String,
    StatusEmployee: String,
    
   
 });

var Employee = mongoose.model("employee", EmployeeSchema); 

module.exports = { 
    Employee 
};
//////
var TypeAssignSchema = new Schema({  
    
    //TypeAssignID: Number,
    NameTypeAssign: String, //(MG,Draft,Store,etc..)
   

   
 });

var TypeAssign = mongoose.model("typeassign", TypeAssignSchema); 

module.exports = { 
    TypeAssign 
};
////////
var RequestMaterialSchema = new Schema({  
    
    //RequestMaterialID: Number,
    //AssingID: Number,
    //PMID: Number,
    //EmpID: Number,
   

   
 });

var RequestMaterial = mongoose.model("requestmaterial", RequestMaterialSchema); 

module.exports = { 
    RequestMaterial
};
///////
var DetailRequestMaterialSchema = new Schema({  
    
    //DetailRequestMaterialID: Number,
    //RequestMaterialID: Number,
    //MatID: Number,
    //MatName: String,
    RequestAmount: Number,
    StatusRequest: String,
    NoteRequest: String,
    DayRequest: Date,
    DaySend: Date,

   

   
 });

var RequestMaterial = mongoose.model("requestmaterial", RequestMaterialSchema); 

module.exports = { 
    RequestMaterial
};
///////
var RestoreMaterialSchema = new Schema({  
    
    //RestoreMaterialID: Number,
    //AssingID: Number,
    //PMID: Number,
    //EmpID: Number,
   

   
 });

var RestoreMaterial = mongoose.model("restorematerial", RestoreMaterialSchema); 

module.exports = { 
    RestoreMaterial
};
///////
var DetailRestoreMaterialSchema = new Schema({  
    
    //DetailRestoreMaterialID: Number,
    //RestoreMaterialID: Number,
    //MatID: Number,
    //MatName: String,
    RestoreAmount: Number,
    StatusRestore: String,
    NoteRestore: String,
    DayRestore: Date,
   

   

   
 });

var RestoreMaterial = mongoose.model("Restorematerial", RestoreMaterialSchema); 

module.exports = { 
    RestoreMaterial
};
///////
var StoreMaterialSchema = new Schema({  
    
    
    //MatID: Number,
    MatName: String,
    MatAmount: Number,
    MatPrice: Number,
    MatNote: String,
    MatStatus: String,
   

   

   
 });

var StoreMaterial = mongoose.model("storematerial", StoreMaterialSchema); 

module.exports = { 
    StoreMaterial
};




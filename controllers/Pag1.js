const modPag1=require('../models/modeloPag1.js');
const pag1=(request)=>{
  var result=modPag1();
  return (JSON.stringify(result));
};
module.exports=pag1;

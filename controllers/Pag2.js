/*const lista=require('../models/search.js');

const listAlumnos=(request)=>{
  var result=lista();
  return (JSON.stringify(result));
};
module.exports = listAlumnos;*/
const modelSearch=require('../models/search.js');
const url= require('url');
var path = require('path');
var appDir = path.dirname(require.main.filename);
//view('fs')
const fs=require('fs');
const htmlRender = (html, data) => {
    let parsedHtml = html.toString('utf8');

    for(key in data){
        let exp = "{{"+key+"}}";
        let reg = new RegExp(exp, 'g');
        parsedHtml = parsedHtml.replace(reg, data[key]);
    }

    return parsedHtml;
};
module.exports=(request)=>{
  let miURL= url.parse(request.url,true);
  var termino= miURL.query.n;
  var lista = modelSearch();
  let rate=path.join('/views','vista1.html');
  const resultado = lista.filter((alumno)=>{
    if (alumno.NombreP === termino){
      return alumno;
    }
  });
  const view = fs.readFileSync(appDir + rate).toString('utf8');
  const parsedHtml = htmlRender(view, resultado[0]);
  return parsedHtml;
}

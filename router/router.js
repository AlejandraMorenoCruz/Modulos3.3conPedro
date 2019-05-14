const Pag1=require('../controllers/Pag1');
const listAlumnos=require('../controllers/Pag2')
const router =(request, response)=>{
  if (request.url==='/pag1'){
    var result = Pag1(request);
    response.end(result);
    Pag1(require); //llama al controador
  }
  else if (require.url==='/pag2') {
    response.end (result);
    Pag2(require);
  }
  else if (request.url.startsWith('/search')){
    var search = listAlumnos(request);
    response.end(search);
  }
}

module.exports = router;

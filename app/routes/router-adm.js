const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
 
 
router.get("/", (req, res)=>{
    res.render("pages/index-adm");
})
 
router.get("/adm-cliente", (req, res)=>{
    res.render("pages/adm-cliente");
})
 
router.get("/adm-cliente-novo", (req, res)=>{
    res.render("pages/adm-cliente-novo",{
         
   listaErros: null,
   campos: {}
 
 });
});
 
 
 
router.post(
 "/adm-cliente-novo",
 body("nome")
   .isLength({ min: 3, max: 50 })
   .withMessage("O nome deve ter de 3 a 50 caracteres!"),
 body("cep")
   .isLength({ min: 9, max: 9 })
   .withMessage("O CEP deve ter 9 caracteres!")
   .matches(/^\d{5}-\d{3}$/)
   .withMessage("O CEP deve estar no formato 00000-000!"),
 body("nome_usuario")
   .isLength({ min: 3, max: 30 })
   .withMessage("O nome de usuário deve ter de 3 a 30 caracteres!"),
 body("email")
   .isEmail()
   .withMessage("O e-mail deve ser válido!"),
 body("senha")
   .isLength({ min: 6, max: 30 })
   .withMessage("A senha deve ter de 6 a 30 caracteres!"),
 body("tipo_formulario")
   .notEmpty()
   .withMessage("O tipo de formulário deve ser informado!"),
 body("status")
   .notEmpty()
   .withMessage("O status deve ser informado!"),
 function (req, res) {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     console.log(errors);
     return res.render("pages/adm-cliente-novo", {
       resultado: null,
       "listaErros": errors,
       "campos": req.body
     });
   }
   return res.render("pages/adm-cliente-novo", {
     resultado: req.body,
     "listaErros": errors,
     "campos": req.body
   });
 }
);
module.exports = router;
 
router.get("/adm-cliente-edit", (req, res)=>{
    res.render("pages/adm-cliente-edit");
})
 
router.get("/adm-cliente-list", (req, res)=>{
    res.render("pages/adm-cliente-list");
})
 
router.get("/adm-cliente-del", (req, res)=>{
    res.render("pages/adm-cliente-del");
})
 
 
 
 
 
 
 
module.exports = router;
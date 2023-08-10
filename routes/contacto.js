var nodemailer=require("nodemailer");

router.post('/',async(req, res,next)=>{

    var nombre=req.body.nombre;
    var email=req.body.email;
    var tel=req.body.tel;
    var mensaje=req.body.mensaje;

    var obj={

        to:'maganisa@gmail.com',
        subject:'CONTACTO WEB',
        html:nombre + "Se contactó a través de la web y quiere más información a este correo:" + email + ".<br> Además, hizo este comentario: " + mensaje +".<br> Su tel es:" + tel
    }

    var M4U4_FORMULARIO= nodemailer.createM4U4_FORMULARIO({

        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{

            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS

        }
    });
     var info = await M4U4_FORMULARIO.sendMail(obj);

     res.render('contacto',{
        message:'Mensaje enviado correctamente'
     });
}

);
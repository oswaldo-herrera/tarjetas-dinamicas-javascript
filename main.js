//variables
const contenido = document.querySelector('#lista-cursos');

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
});

//funciones
function mostrarAutos() {
    items.forEach(item => {
        const productos = document.createElement('p');


        //productos.classList.add('.cta')
        productos.innerHTML = `
        <div class="four columns"> <!--modal-->
            <div class="card">
                    <a href="#" class="cta">  <img src="${item.img}" class="imagen-curso u-full-width"> </a>

                    <div class="modal-container">
                        <div class="modal  modal-close ">
                            <p class="close">X</p>
                            <img src="${item.img}" class="imagen-curso u-full-width">
                        </div>                       
                    </div>
            
                    <div class="info-card">
                        <h4>${item.title}</h4>
                        <p>${item.description}  </p>
                        <img src="./img/pagos.png" class="portada-pago" >
                        <p class="precio">${item.precio}  <span class="u-pull-right ">${item.publico}</span></p>
                        <a href="${item.contacto}"  target="_blank" class="u-full-width button-primary button input agregar-carrito" data-id="1">Comprar</a>
                    </div>
            </div> <!--.card-->
        </div>  <!--modal-->  
        
        `

        //insertar en el html
        contenido.appendChild(productos);



    });


    /********MODAL´S********/

    
// modal 0 //
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC) {
        modal.classList.toggle("modal-close");
        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 600)
    }
})

// modal 0 //


// modal 1 //
let cerrar1 = document.querySelectorAll(".close")[1];
let abrir1 = document.querySelectorAll(".cta")[1];
let modal1 = document.querySelectorAll(".modal")[1];
let modalC1 = document.querySelectorAll(".modal-container")[1];

abrir1.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC1.style.opacity = "1";
    modalC1.style.visibility = "visible";
    modal1.classList.toggle("modal-close");
});

cerrar1.addEventListener("click", function () {
    modal1.classList.toggle("modal-close");
    setTimeout(function () {
        modalC1.style.opacity = "0";
        modalC1.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC1) {
        modal1.classList.toggle("modal-close");
        setTimeout(function () {
            modalC1.style.opacity = "0";
            modalC1.style.visibility = "hidden";
        }, 600)
    }
})

// modal 1 //

// modal 2 //
let cerrar2 = document.querySelectorAll(".close")[2];
let abrir2 = document.querySelectorAll(".cta")[2];
let modal2= document.querySelectorAll(".modal")[2];
let modalC2 = document.querySelectorAll(".modal-container")[2];

abrir2.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal-close");
});

cerrar2.addEventListener("click", function () {
    modal2.classList.toggle("modal-close");
    setTimeout(function () {
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC2) {
        modal2.classList.toggle("modal-close");
        setTimeout(function () {
            modalC2.style.opacity = "0";
            modalC2.style.visibility = "hidden";
        }, 600)
    }
})

// modal 2 //

// modal 3 //
let cerrar3 = document.querySelectorAll(".close")[3];
let abrir3 = document.querySelectorAll(".cta")[3];
let modal3= document.querySelectorAll(".modal")[3];
let modalC3 = document.querySelectorAll(".modal-container")[3];

abrir3.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC3.style.opacity = "1";
    modalC3.style.visibility = "visible";
    modal3.classList.toggle("modal-close");
});

cerrar3.addEventListener("click", function () {
    modal3.classList.toggle("modal-close");
    setTimeout(function () {
        modalC3.style.opacity = "0";
        modalC3.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC3) {
        modal3.classList.toggle("modal-close");
        setTimeout(function () {
            modalC3.style.opacity = "0";
            modalC3.style.visibility = "hidden";
        }, 600)
    }
})

// modal 3 //

// modal 4 //
let cerrar4 = document.querySelectorAll(".close")[4];
let abrir4 = document.querySelectorAll(".cta")[4];
let modal4 = document.querySelectorAll(".modal")[4];
let modalC4 = document.querySelectorAll(".modal-container")[4];

abrir4.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC4.style.opacity = "1";
    modalC4.style.visibility = "visible";
    modal4.classList.toggle("modal-close");
});

cerrar4.addEventListener("click", function () {
    modal4.classList.toggle("modal-close");
    setTimeout(function () {
        modal4.style.opacity = "0";
        modalC4.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC4) {
        modal4.classList.toggle("modal-close");
        setTimeout(function () {
            modalC4.style.opacity = "0";
            modalC4.style.visibility = "hidden";
        }, 600)
    }
});

// modal 4 //

// modal 5 //
let cerrar5 = document.querySelectorAll(".close")[5];
let abrir5 = document.querySelectorAll(".cta")[5];
let modal5 = document.querySelectorAll(".modal")[5];
let modalC5 = document.querySelectorAll(".modal-container")[5];

abrir5.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC5.style.opacity = "1";
    modalC5.style.visibility = "visible";
    modal5.classList.toggle("modal-close");
});

cerrar5.addEventListener("click", function () {
    modal5.classList.toggle("modal-close");
    setTimeout(function () {
        modal5.style.opacity = "0";
        modalC5.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC5) {
        modal5.classList.toggle("modal-close");
        setTimeout(function () {
            modalC5.style.opacity = "0";
            modalC5.style.visibility = "hidden";
        }, 600)
    }
});

// modal 5 //

// modal 6 //
let cerrar6 = document.querySelectorAll(".close")[6];
let abrir6 = document.querySelectorAll(".cta")[6];
let modal6 = document.querySelectorAll(".modal")[6];
let modalC6 = document.querySelectorAll(".modal-container")[6];

abrir6.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC6.style.opacity = "1";
    modalC6.style.visibility = "visible";
    modal6.classList.toggle("modal-close");
});

cerrar6.addEventListener("click", function () {
    modal6.classList.toggle("modal-close");
    setTimeout(function () {
        modal6.style.opacity = "0";
        modalC6.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC6) {
        modal6.classList.toggle("modal-close");
        setTimeout(function () {
            modalC6.style.opacity = "0";
            modalC6.style.visibility = "hidden";
        }, 600)
    }
});

// modal 6 //

// modal 7 //
let cerrar7 = document.querySelectorAll(".close")[7];
let abrir7 = document.querySelectorAll(".cta")[7];
let modal7 = document.querySelectorAll(".modal")[7];
let modalC7 = document.querySelectorAll(".modal-container")[7];

abrir7.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC7.style.opacity = "1";
    modalC7.style.visibility = "visible";
    modal7.classList.toggle("modal-close");
});

cerrar7.addEventListener("click", function () {
    modal7.classList.toggle("modal-close");
    setTimeout(function () {
        modal7.style.opacity = "0";
        modalC7.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC7) {
        modal5.classList.toggle("modal-close");
        setTimeout(function () {
            modalC7.style.opacity = "0";
            modalC7.style.visibility = "hidden";
        }, 600)
    }
});

// modal 7 //

// modal 8 //
let cerrar8 = document.querySelectorAll(".close")[8];
let abrir8 = document.querySelectorAll(".cta")[8];
let modal8 = document.querySelectorAll(".modal")[8];
let modalC8 = document.querySelectorAll(".modal-container")[8];

abrir8.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC8.style.opacity = "1";
    modalC8.style.visibility = "visible";
    modal8.classList.toggle("modal-close");
});

cerrar8.addEventListener("click", function () {
    modal8.classList.toggle("modal-close");
    setTimeout(function () {
        modal8.style.opacity = "0";
        modalC8.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC8) {
        modal8.classList.toggle("modal-close");
        setTimeout(function () {
            modalC8.style.opacity = "0";
            modalC8.style.visibility = "hidden";
        }, 600)
    }
});

// modal 8 //

// modal 9 //
let cerrar9 = document.querySelectorAll(".close")[9];
let abrir9 = document.querySelectorAll(".cta")[9];
let modal9 = document.querySelectorAll(".modal")[9];
let modalC9 = document.querySelectorAll(".modal-container")[9];

abrir9.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC9.style.opacity = "1";
    modalC9.style.visibility = "visible";
    modal9.classList.toggle("modal-close");
});

cerrar9.addEventListener("click", function () {
    modal9.classList.toggle("modal-close");
    setTimeout(function () {
        modal9.style.opacity = "0";
        modalC9.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC9) {
        modal9.classList.toggle("modal-close");
        setTimeout(function () {
            modalC9.style.opacity = "0";
            modalC9.style.visibility = "hidden";
        }, 600)
    }
});

// modal 9 //

// modal 10 //
let cerrar10 = document.querySelectorAll(".close")[10];
let abrir10 = document.querySelectorAll(".cta")[10];
let modal10 = document.querySelectorAll(".modal")[10];
let modalC10 = document.querySelectorAll(".modal-container")[10];

abrir10.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC10.style.opacity = "1";
    modalC10.style.visibility = "visible";
    modal10.classList.toggle("modal-close");
});

cerrar10.addEventListener("click", function () {
    modal10.classList.toggle("modal-close");
    setTimeout(function () {
        modalC10.style.opacity = "0";
        modalC10.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC10) {
        modal10.classList.toggle("modal-close");
        setTimeout(function () {
            modalC10.style.opacity = "0";
            modalC10.style.visibility = "hidden";
        }, 600)
    }
});

// modal 10 //

// modal 11 //
let cerrar11 = document.querySelectorAll(".close")[11];
let abrir11 = document.querySelectorAll(".cta")[11];
let modal11 = document.querySelectorAll(".modal")[11];
let modalC11 = document.querySelectorAll(".modal-container")[11];

abrir11.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC11.style.opacity = "1";
    modalC11.style.visibility = "visible";
    modal11.classList.toggle("modal-close");
});

cerrar11.addEventListener("click", function () {
    modal11.classList.toggle("modal-close");
    setTimeout(function () {
        modal11.style.opacity = "0";
        modalC11.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC11) {
        modal11.classList.toggle("modal-close");
        setTimeout(function () {
            modalC11.style.opacity = "0";
            modalC11.style.visibility = "hidden";
        }, 600)
    }
});

// modal 11 //

// modal 12 //
let cerrar12 = document.querySelectorAll(".close")[12];
let abrir12 = document.querySelectorAll(".cta")[12];
let modal12 = document.querySelectorAll(".modal")[12];
let modalC12 = document.querySelectorAll(".modal-container")[12];

abrir12.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC12.style.opacity = "1";
    modalC12.style.visibility = "visible";
    modal12.classList.toggle("modal-close");
});

cerrar12.addEventListener("click", function () {
    modal12.classList.toggle("modal-close");
    setTimeout(function () {
        modal12.style.opacity = "0";
        modalC12.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC12) {
        modal12.classList.toggle("modal-close");
        setTimeout(function () {
            modalC12.style.opacity = "0";
            modalC12.style.visibility = "hidden";
        }, 600)
    }
});

// modal 12 //

// modal 13 //
let cerrar13 = document.querySelectorAll(".close")[13];
let abrir13 = document.querySelectorAll(".cta")[13];
let modal13 = document.querySelectorAll(".modal")[13];
let modalC13 = document.querySelectorAll(".modal-container")[13];

abrir13.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC13.style.opacity = "1";
    modalC13.style.visibility = "visible";
    modal13.classList.toggle("modal-close");
});

cerrar13.addEventListener("click", function () {
    modal13.classList.toggle("modal-close");
    setTimeout(function () {
        modal13.style.opacity = "0";
        modalC13.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC13) {
        modal13.classList.toggle("modal-close");
        setTimeout(function () {
            modalC13.style.opacity = "0";
            modalC13.style.visibility = "hidden";
        }, 600)
    }
});

// modal 13 //

// modal 14 //
let cerrar14 = document.querySelectorAll(".close")[14];
let abrir14 = document.querySelectorAll(".cta")[14];
let modal14 = document.querySelectorAll(".modal")[14];
let modalC14 = document.querySelectorAll(".modal-container")[14];

abrir14.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC14.style.opacity = "1";
    modalC14.style.visibility = "visible";
    modal14.classList.toggle("modal-close");
});

cerrar14.addEventListener("click", function () {
    modal14.classList.toggle("modal-close");
    setTimeout(function () {
        modal14.style.opacity = "0";
        modalC14.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC14) {
        modal14.classList.toggle("modal-close");
        setTimeout(function () {
            modalC14.style.opacity = "0";
            modalC14.style.visibility = "hidden";
        }, 600)
    }
});

// modal 14 //

// modal 15 //
let cerrar15 = document.querySelectorAll(".close")[15];
let abrir15 = document.querySelectorAll(".cta")[15];
let modal15 = document.querySelectorAll(".modal")[15];
let modalC15 = document.querySelectorAll(".modal-container")[15];

abrir15.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC15.style.opacity = "1";
    modalC15.style.visibility = "visible";
    modal15.classList.toggle("modal-close");
});

cerrar15.addEventListener("click", function () {
    modal15.classList.toggle("modal-close");
    setTimeout(function () {
        modal15.style.opacity = "0";
        modalC15.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC15) {
        modal15.classList.toggle("modal-close");
        setTimeout(function () {
            modalC15.style.opacity = "0";
            modalC15.style.visibility = "hidden";
        }, 600)
    }
});

// modal 15 //

// modal 16 //
let cerrar16 = document.querySelectorAll(".close")[16];
let abrir16 = document.querySelectorAll(".cta")[16];
let modal16 = document.querySelectorAll(".modal")[16];
let modalC16 = document.querySelectorAll(".modal-container")[16];

abrir16.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC16.style.opacity = "1";
    modalC16.style.visibility = "visible";
    modal16.classList.toggle("modal-close");
});

cerrar16.addEventListener("click", function () {
    modal16.classList.toggle("modal-close");
    setTimeout(function () {
        modal16.style.opacity = "0";
        modalC16.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC16) {
        modal16.classList.toggle("modal-close");
        setTimeout(function () {
            modalC16.style.opacity = "0";
            modalC16.style.visibility = "hidden";
        }, 600)
    }
});

// modal 16 //

// modal 17 //
let cerrar17 = document.querySelectorAll(".close")[17];
let abrir17 = document.querySelectorAll(".cta")[17];
let modal17 = document.querySelectorAll(".modal")[17];
let modalC17 = document.querySelectorAll(".modal-container")[17];

abrir17.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC17.style.opacity = "1";
    modalC17.style.visibility = "visible";
    modal17.classList.toggle("modal-close");
});

cerrar17.addEventListener("click", function () {
    modal17.classList.toggle("modal-close");
    setTimeout(function () {
        modal17.style.opacity = "0";
        modalC17.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC17) {
        modal17.classList.toggle("modal-close");
        setTimeout(function () {
            modalC17.style.opacity = "0";
            modalC17.style.visibility = "hidden";
        }, 600)
    }
});

// modal 17 //

// modal 18 //
let cerrar18 = document.querySelectorAll(".close")[18];
let abrir18 = document.querySelectorAll(".cta")[18];
let modal18 = document.querySelectorAll(".modal")[18];
let modalC18 = document.querySelectorAll(".modal-container")[18];

abrir18.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC18.style.opacity = "1";
    modalC18.style.visibility = "visible";
    modal18.classList.toggle("modal-close");
});

cerrar18.addEventListener("click", function () {
    modal18.classList.toggle("modal-close");
    setTimeout(function () {
        modal18.style.opacity = "0";
        modalC18.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC18) {
        modal18.classList.toggle("modal-close");
        setTimeout(function () {
            modalC18.style.opacity = "0";
            modalC18.style.visibility = "hidden";
        }, 600)
    }
});

// modal 18 //

// modal 19 //
let cerrar19 = document.querySelectorAll(".close")[19];
let abrir19 = document.querySelectorAll(".cta")[19];
let modal19 = document.querySelectorAll(".modal")[19];
let modalC19 = document.querySelectorAll(".modal-container")[19];

abrir19.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC19.style.opacity = "1";
    modalC19.style.visibility = "visible";
    modal19.classList.toggle("modal-close");
});

cerrar19.addEventListener("click", function () {
    modal19.classList.toggle("modal-close");
    setTimeout(function () {
        modal19.style.opacity = "0";
        modalC19.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC19) {
        modal19.classList.toggle("modal-close");
        setTimeout(function () {
            modalC19.style.opacity = "0";
            modalC19.style.visibility = "hidden";
        }, 600)
    }
});

// modal 19 //

// modal 20 //
let cerrar20 = document.querySelectorAll(".close")[20];
let abrir20 = document.querySelectorAll(".cta")[20];
let modal20 = document.querySelectorAll(".modal")[20];
let modalC20 = document.querySelectorAll(".modal-container")[20];

abrir20.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC20.style.opacity = "1";
    modalC20.style.visibility = "visible";
    modal20.classList.toggle("modal-close");
});

cerrar20.addEventListener("click", function () {
    modal20.classList.toggle("modal-close");
    setTimeout(function () {
        modal20.style.opacity = "0";
        modalC20.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC20) {
        modal20.classList.toggle("modal-close");
        setTimeout(function () {
            modalC20.style.opacity = "0";
            modalC20.style.visibility = "hidden";
        }, 600)
    }
});

// modal 20 //

// modal 21 //
let cerrar21 = document.querySelectorAll(".close")[21];
let abrir21 = document.querySelectorAll(".cta")[21];
let modal21 = document.querySelectorAll(".modal")[21];
let modalC21 = document.querySelectorAll(".modal-container")[21];

abrir21.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC21.style.opacity = "1";
    modalC21.style.visibility = "visible";
    modal21.classList.toggle("modal-close");
});

cerrar21.addEventListener("click", function () {
    modal21.classList.toggle("modal-close");
    setTimeout(function () {
        modal21.style.opacity = "0";
        modalC21.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC21) {
        modal21.classList.toggle("modal-close");
        setTimeout(function () {
            modalC21.style.opacity = "0";
            modalC21.style.visibility = "hidden";
        }, 600)
    }
});

// modal 21 //

// modal 22 //
let cerrar22 = document.querySelectorAll(".close")[22];
let abrir22 = document.querySelectorAll(".cta")[22];
let modal22 = document.querySelectorAll(".modal")[22];
let modalC22 = document.querySelectorAll(".modal-container")[22];

abrir22.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC22.style.opacity = "1";
    modalC22.style.visibility = "visible";
    modal22.classList.toggle("modal-close");
});

cerrar22.addEventListener("click", function () {
    modal22.classList.toggle("modal-close");
    setTimeout(function () {
        modal22.style.opacity = "0";
        modalC22.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC22) {
        modal22.classList.toggle("modal-close");
        setTimeout(function () {
            modalC22.style.opacity = "0";
            modalC22.style.visibility = "hidden";
        }, 600)
    }
});

// modal 22 //

// modal 23 //
let cerrar23 = document.querySelectorAll(".close")[23];
let abrir23 = document.querySelectorAll(".cta")[23];
let modal23 = document.querySelectorAll(".modal")[23];
let modalC23 = document.querySelectorAll(".modal-container")[23];

abrir23.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC23.style.opacity = "1";
    modalC23.style.visibility = "visible";
    modal23.classList.toggle("modal-close");
});

cerrar23.addEventListener("click", function () {
    modal23.classList.toggle("modal-close");
    setTimeout(function () {
        modal23.style.opacity = "0";
        modalC23.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC23) {
        modal23.classList.toggle("modal-close");
        setTimeout(function () {
            modalC23.style.opacity = "0";
            modalC23.style.visibility = "hidden";
        }, 600)
    }
});

// modal 23 //

// modal 24 //
let cerrar24 = document.querySelectorAll(".close")[24];
let abrir24 = document.querySelectorAll(".cta")[24];
let modal24 = document.querySelectorAll(".modal")[24];
let modalC24 = document.querySelectorAll(".modal-container")[24];

abrir24.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC24.style.opacity = "1";
    modalC24.style.visibility = "visible";
    modal24.classList.toggle("modal-close");
});

cerrar24.addEventListener("click", function () {
    modal24.classList.toggle("modal-close");
    setTimeout(function () {
        modal24.style.opacity = "0";
        modalC24.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC24) {
        modal24.classList.toggle("modal-close");
        setTimeout(function () {
            modalC24.style.opacity = "0";
            modalC24.style.visibility = "hidden";
        }, 600)
    }
});

// modal 24 //

// modal 25 //
let cerrar25 = document.querySelectorAll(".close")[25];
let abrir25 = document.querySelectorAll(".cta")[25];
let modal25 = document.querySelectorAll(".modal")[25];
let modalC25 = document.querySelectorAll(".modal-container")[25];

abrir25.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC25.style.opacity = "1";
    modalC25.style.visibility = "visible";
    modal25.classList.toggle("modal-close");
});

cerrar25.addEventListener("click", function () {
    modal25.classList.toggle("modal-close");
    setTimeout(function () {
        modal25.style.opacity = "0";
        modalC25.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC25) {
        modal25.classList.toggle("modal-close");
        setTimeout(function () {
            modalC25.style.opacity = "0";
            modalC25.style.visibility = "hidden";
        }, 600)
    }
});

// modal 25 //

// modal 26 //
let cerrar26 = document.querySelectorAll(".close")[26];
let abrir26 = document.querySelectorAll(".cta")[26];
let modal26 = document.querySelectorAll(".modal")[26];
let modalC26 = document.querySelectorAll(".modal-container")[26];

abrir26.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC26.style.opacity = "1";
    modalC26.style.visibility = "visible";
    modal26.classList.toggle("modal-close");
});

cerrar26.addEventListener("click", function () {
    modal26.classList.toggle("modal-close");
    setTimeout(function () {
        modal26.style.opacity = "0";
        modalC26.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC26) {
        modal26.classList.toggle("modal-close");
        setTimeout(function () {
            modalC26.style.opacity = "0";
            modalC26.style.visibility = "hidden";
        }, 600)
    }
});

// modal 26 //
// modal 27 //
let cerrar27 = document.querySelectorAll(".close")[27];
let abrir27 = document.querySelectorAll(".cta")[27];
let modal27 = document.querySelectorAll(".modal")[27];
let modalC27 = document.querySelectorAll(".modal-container")[27];

abrir27.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC27.style.opacity = "1";
    modalC27.style.visibility = "visible";
    modal27.classList.toggle("modal-close");
});

cerrar27.addEventListener("click", function () {
    modal27.classList.toggle("modal-close");
    setTimeout(function () {
        modal27.style.opacity = "0";
        modalC27.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC27) {
        modal27.classList.toggle("modal-close");
        setTimeout(function () {
            modalC27.style.opacity = "0";
            modalC27.style.visibility = "hidden";
        }, 600)
    }
});

// modal 27 //

// modal 28 //
let cerrar28 = document.querySelectorAll(".close")[28];
let abrir28 = document.querySelectorAll(".cta")[28];
let modal28 = document.querySelectorAll(".modal")[28];
let modalC28 = document.querySelectorAll(".modal-container")[28];

abrir28.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC28.style.opacity = "1";
    modalC28.style.visibility = "visible";
    modal28.classList.toggle("modal-close");
});

cerrar28.addEventListener("click", function () {
    modal28.classList.toggle("modal-close");
    setTimeout(function () {
        modal28.style.opacity = "0";
        modalC28.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC28) {
        modal28.classList.toggle("modal-close");
        setTimeout(function () {
            modalC28.style.opacity = "0";
            modalC28.style.visibility = "hidden";
        }, 600)
    }
});

// modal 28 //

// modal 29 //
let cerrar29 = document.querySelectorAll(".close")[29];
let abrir29 = document.querySelectorAll(".cta")[29];
let modal29 = document.querySelectorAll(".modal")[29];
let modalC29 = document.querySelectorAll(".modal-container")[29];

abrir29.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC29.style.opacity = "1";
    modalC29.style.visibility = "visible";
    modal29.classList.toggle("modal-close");
});

cerrar29.addEventListener("click", function () {
    modal29.classList.toggle("modal-close");
    setTimeout(function () {
        modal29.style.opacity = "0";
        modalC29.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC29) {
        modal29.classList.toggle("modal-close");
        setTimeout(function () {
            modalC29.style.opacity = "0";
            modalC29.style.visibility = "hidden";
        }, 600)
    }
});

// modal 29 //

// modal 30 //
let cerrar30 = document.querySelectorAll(".close")[30];
let abrir30 = document.querySelectorAll(".cta")[30];
let modal30 = document.querySelectorAll(".modal")[30];
let modalC30 = document.querySelectorAll(".modal-container")[30];

abrir30.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC30.style.opacity = "1";
    modalC30.style.visibility = "visible";
    modal30.classList.toggle("modal-close");
});

cerrar30.addEventListener("click", function () {
    modal30.classList.toggle("modal-close");
    setTimeout(function () {
        modal30.style.opacity = "0";
        modalC30.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC30) {
        modal30.classList.toggle("modal-close");
        setTimeout(function () {
            modalC30.style.opacity = "0";
            modalC30.style.visibility = "hidden";
        }, 600)
    }
});

// modal 30 //

// modal 31 //
let cerrar31 = document.querySelectorAll(".close")[31];
let abrir31 = document.querySelectorAll(".cta")[31];
let modal31 = document.querySelectorAll(".modal")[31];
let modalC31 = document.querySelectorAll(".modal-container")[31];

abrir31.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC31.style.opacity = "1";
    modalC31.style.visibility = "visible";
    modal31.classList.toggle("modal-close");
});

cerrar31.addEventListener("click", function () {
    modal31.classList.toggle("modal-close");
    setTimeout(function () {
        modal31.style.opacity = "0";
        modalC31.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC31) {
        modal31.classList.toggle("modal-close");
        setTimeout(function () {
            modalC31.style.opacity = "0";
            modalC31.style.visibility = "hidden";
        }, 600)
    }
});

// modal 31 //

// modal 32 //
let cerrar32 = document.querySelectorAll(".close")[32];
let abrir32 = document.querySelectorAll(".cta")[32];
let modal32 = document.querySelectorAll(".modal")[32];
let modalC32 = document.querySelectorAll(".modal-container")[32];

abrir32.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC32.style.opacity = "1";
    modalC32.style.visibility = "visible";
    modal32.classList.toggle("modal-close");
});

cerrar32.addEventListener("click", function () {
    modal32.classList.toggle("modal-close");
    setTimeout(function () {
        modal32.style.opacity = "0";
        modalC32.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC32) {
        modal32.classList.toggle("modal-close");
        setTimeout(function () {
            modalC32.style.opacity = "0";
            modalC32.style.visibility = "hidden";
        }, 600)
    }
});

// modal 32 //

// modal 33 //
let cerrar33 = document.querySelectorAll(".close")[33];
let abrir33 = document.querySelectorAll(".cta")[33];
let modal33 = document.querySelectorAll(".modal")[33];
let modalC33 = document.querySelectorAll(".modal-container")[33];

abrir33.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC33.style.opacity = "1";
    modalC33.style.visibility = "visible";
    modal33.classList.toggle("modal-close");
});

cerrar33.addEventListener("click", function () {
    modal33.classList.toggle("modal-close");
    setTimeout(function () {
        modal33.style.opacity = "0";
        modalC33.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC33) {
        modal33.classList.toggle("modal-close");
        setTimeout(function () {
            modalC33.style.opacity = "0";
            modalC33.style.visibility = "hidden";
        }, 600)
    }
});

// modal 33 //

// modal 34 //
let cerrar34 = document.querySelectorAll(".close")[34];
let abrir34 = document.querySelectorAll(".cta")[34];
let modal34 = document.querySelectorAll(".modal")[34];
let modalC34 = document.querySelectorAll(".modal-container")[34];

abrir34.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC34.style.opacity = "1";
    modalC34.style.visibility = "visible";
    modal34.classList.toggle("modal-close");
});

cerrar34.addEventListener("click", function () {
    modal34.classList.toggle("modal-close");
    setTimeout(function () {
        modal34.style.opacity = "0";
        modalC34.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC34) {
        modal34.classList.toggle("modal-close");
        setTimeout(function () {
            modalC34.style.opacity = "0";
            modalC34.style.visibility = "hidden";
        }, 600)
    }
});

// modal 34 //

// modal 35 //
let cerrar35 = document.querySelectorAll(".close")[35];
let abrir35 = document.querySelectorAll(".cta")[35];
let modal35 = document.querySelectorAll(".modal")[35];
let modalC35 = document.querySelectorAll(".modal-container")[35];

abrir35.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC35.style.opacity = "1";
    modalC35.style.visibility = "visible";
    modal35.classList.toggle("modal-close");
});

cerrar35.addEventListener("click", function () {
    modal35.classList.toggle("modal-close");
    setTimeout(function () {
        modal35.style.opacity = "0";
        modalC35.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC35) {
        modal35.classList.toggle("modal-close");
        setTimeout(function () {
            modalC35.style.opacity = "0";
            modalC35.style.visibility = "hidden";
        }, 600)
    }
});

// modal 35 //

// modal 36 //
let cerrar36 = document.querySelectorAll(".close")[36];
let abrir36 = document.querySelectorAll(".cta")[36];
let modal36 = document.querySelectorAll(".modal")[36];
let modalC36 = document.querySelectorAll(".modal-container")[36];

abrir36.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC36.style.opacity = "1";
    modalC36.style.visibility = "visible";
    modal36.classList.toggle("modal-close");
});

cerrar36.addEventListener("click", function () {
    modal36.classList.toggle("modal-close");
    setTimeout(function () {
        modal36.style.opacity = "0";
        modalC36.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC36) {
        modal36.classList.toggle("modal-close");
        setTimeout(function () {
            modalC36.style.opacity = "0";
            modalC36.style.visibility = "hidden";
        }, 600)
    }
});

// modal 36 //

// modal 37 //
let cerrar37 = document.querySelectorAll(".close")[37];
let abrir37 = document.querySelectorAll(".cta")[37];
let modal37 = document.querySelectorAll(".modal")[37];
let modalC37 = document.querySelectorAll(".modal-container")[37];

abrir37.addEventListener("click", function (e) {
    e.preventDefault(); // desaparacer # de la barra de direccion
    modalC37.style.opacity = "1";
    modalC37.style.visibility = "visible";
    modal37.classList.toggle("modal-close");
});

cerrar37.addEventListener("click", function () {
    modal37.classList.toggle("modal-close");
    setTimeout(function () {
        modal37.style.opacity = "0";
        modalC37.style.visibility = "hidden";
    }, 800)

});

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC37) {
        modal37.classList.toggle("modal-close");
        setTimeout(function () {
            modalC37.style.opacity = "0";
            modalC37.style.visibility = "hidden";
        }, 600)
    }
});

// modal 37 //



        /********MODAL´S********/
}



















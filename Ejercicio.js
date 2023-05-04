//// TRABAJO HECHO EN EQUIPO  INTEGRANTES: Lorenzo Azanza, Elias Munch Caballero,Javier Nicolás Guarino Noble


////Hacemos la funcion///////

function calcularStatus(nombre, apellido, departamento, fundProg, progImp, progOb, evidenciaFundProg, evidenciaProgImp, evidenciaProgOb, promIngles,Tutorias, HizoCT) {
    let mensaje = "Hola " + nombre + " " + apellido +" "+"del departamento"+" "+departamento+ "!! El detalle de tu status final es:\n\n";
    mensaje += "En Fundamentos - " + fundProg + " puntos \n";
    mensaje += "En Imperativa - " + progImp + " puntos \n";
    mensaje += "En Orientada a Objetos - " + progOb + " puntos \n";
    mensaje += "¿Entrego evidencia de fundamentos? - " + evidenciaFundProg + " \n";
    mensaje += "¿Entrego evidencia de Imperativa? - " + evidenciaProgImp + " \n";
    mensaje += "¿Entrego evidencia de Objetos? - " + evidenciaProgOb + " \n";
    // Verificacamos el promedio de ingles y si aprobo////
    if (promIngles >= 50&&Tutorias===10) {
      mensaje += `En Inglés su  promedio - ${promIngles} puntos - ok\n`;
    } else if(promIngles>=50&&Tutorias<10){
      mensaje += `En Inglés su promedio - ${promIngles} reprobado porque el numero de tutorias en su caso ${Tutorias} son insuficientes\n`;
      return mensaje;
    }
    else {
      mensaje += `En Inglés su promedio - ${promIngles} puntos - reprobado\n`;
      return mensaje;
    }
  
    /// Verificamos si hizo todas las CT///
    if (HizoCT === 10) {
      mensaje += `Usted hizo  las 10 CT su puntaje en CT es - ${HizoCT *10} puntos - ok\n`;
    } else {
      mensaje += `No hizo todas las CT el numero total de CT es ${HizoCT} , puntaje total - ${HizoCT *10} al no haber completado todas las CT queda reprobado \n`;
      return mensaje;
    }
  
    //// Calculamos el  puntaje técnico/////
    let puntajeTecnico = (fundProg * 0.3) + (progImp * 0.5) + (progOb * 0.2);
  
    //// Verificacamos si entrego todas las evidencias////
    let evidenciasEntregadas = 0;
    if (evidenciaFundProg) evidenciasEntregadas++;
    if (evidenciaProgImp) evidenciasEntregadas++;
    if (evidenciaProgOb) evidenciasEntregadas++;
    if (evidenciasEntregadas === 3) {
      mensaje += `Evidencias entregadas - ${evidenciasEntregadas} - ok\n`;
    }else if(evidenciasEntregadas===2&&puntajeTecnico>60){
        mensaje += `Debes rendir el examen final con supervisión y obtener al menos 60% para aprobar ya que no entrego todas las evidencias`;
    } 
    else {
      mensaje += `Evidencias entregadas - ${evidenciasEntregadas} - Usted ha reprobado porque no entrego todas las evidencias y su puntaje no es superior a 60\n`;
      return mensaje;
    }
  
    //// Verificamos el  puntaje técnico y aprobamos o reprobamos////
    if (puntajeTecnico >= 60 && evidenciasEntregadas===3) {
      mensaje += `En Técnica - ${puntajeTecnico} puntos - ok\n`;
      mensaje += `En conclusión, tu status final es aprobado con ${puntajeTecnico}`;
    } else if (puntajeTecnico >= 50 && puntajeTecnico < 60&&evidenciasEntregadas==3) {
      mensaje += `En Técnica - ${puntajeTecnico} puntos - reprobado (examen final requerido)\n`;
      mensaje += `Debes rendir el examen final con supervisión y obtener al menos 60% para aprobar\n`;
    } else if(puntajeTecnico>=50&&puntajeTecnico<60&&evidenciasEntregadas<3){
      mensaje+=`\nUsted ha reprobado porque no entrego todas las evidencias y su puntaje no es superior a 60\n`;
    }else if (puntajeTecnico<50){
      mensaje+=`\nEn conclusion usted ha reprobado porque su puntaje en tecnica ${puntajeTecnico} es insuficiente `;
      
    }
      
    
  
    return mensaje;
  }
  
  
  // Ejemplo de uso ///
  let nombre = "Lorenzo";
  let apellido = "Azanza";
  let departamento = "Salto";
  let fundProg = 90;
  let progImp =100;
  let progOb = 100;
  let evidenciaFundProg = true;
  let evidenciaProgImp = true;
  let evidenciaProgOb = true;
  let promIngles = 100;
  let Tutorias=10;
  let HizoCT = 10;
  
  console.log(calcularStatus(nombre, apellido, departamento, fundProg, progImp, progOb, evidenciaFundProg, evidenciaProgImp, evidenciaProgOb, promIngles,Tutorias, HizoCT));
  

 

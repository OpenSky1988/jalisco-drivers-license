/* eslint-disable prettier/prettier */
const data = [
  {
    id: 1,
    question: 'Se procederá como medida de seguridad a retirar de la circulación un vehículo cuando',
    options: [
      'Exceda en más de 20 Km/h la velocidad permitida en la vía por la que circule',
      'Porte placas sobrepuestas',
      'Dé vuelta a la derecha con semáforo en rojo',
    ],
    correctOption: 'Porte placas sobrepuestas',
  },
  {
    id: 2,
    question: 'Si usted y sus acompañantes utilizan el cinturón de seguridad al conducir',
    options: [
      'Se disminuye la posibilidad de lesiones y/o muerte en caso de accidentes y se evita ser multado',
      'Se tienen más riesgos en caso de accidente por no poder salir rápido del vehículo',
      'Se evita la multa correspondiente solamente en carreteras federales',
    ],
    correctOption: 'Se disminuye la posibilidad de lesiones y/o muerte en caso de accidentes y se evita ser multado',
  },
  {
    id: 3,
    question: 'De acuerdo con la ley, a quien por primera ocasión conduzca vehículo automotor en tercer grado de ebriedad se le sancionará con',
    options: [
      'Cancelación definitiva de su licencia, además de las multas correspondientes',
      'Suspensión de licencia por quince días, además de las multas correspondientes',
      'Arresto administrativo inconmutable de 36 horas, además de las multas correspondientes',
    ],
    correctOption: 'Arresto administrativo inconmutable de 36 horas, además de las multas correspondientes',
  },
  {
    id: 4,
    question: 'Si paga una infracción dentro de los primeros 5 días hábiles usted tiene derecho',
    options: [
      'Al 75% de descuento',
      'Al 50% de descuento',
      'Al 25% de descuento',
    ],
    correctOption: 'Al 50% de descuento',
  },
  {
    id: 5,
    question: 'La ley de tránsito prohibe el uso de cristales u otros elementos que impidan totalmente la visibilidad hacia el interior del vehículo',
    options: [
      'Cierto',
      'Falso',
      'Sólo al transporte público',
    ],
    correctOption: 'Cierto',
  },
  {
    id: 6,
    question: '¿Hasta cuántas personas se permite transportar en “pick up” según la ley de los servicios de vialidad, tránsito y transporte?',
    options: [
      'Solamente el número de personas que cuenten con el equipo de protección adecuado',
      'Las que vayan sentada',
      'Solamente las especificadas en la tarjeta de circulación',
    ],
    correctOption: 'Solamente las especificadas en la tarjeta de circulación',
  },
  {
    id: 7,
    question: 'La ley de los servicios de vialidad, tránsito y transporte del estado de jalisco y su reglamento, tienen por objeto',
    options: [
      'Expedir licencias para conducir',
      'Infraccionar a los malos conductores',
      'Regir el tránsito en las vías públicas del Estado de Jalisco, abiertas a la circulación, que no sean de competencia federal',
    ],
    correctOption: 'Regir el tránsito en las vías públicas del Estado de Jalisco, abiertas a la circulación, que no sean de competencia federal',
  },
  {
    id: 8,
    question: 'Si conduce su vehículo a una velocidad de 71 km/h y el señalamiento le marca 60 km/h como límite máximo de velocidad, se hace acreedor a',
    options: [
      'Multa',
      'Detención del vehículo',
      'Suspensión de la licencia',
    ],
    correctOption: 'Multa',
  },
  {
    id: 9,
    question: 'Es infracción a la ley de tránsito',
    options: [
      'Circular por la extrema derecha',
      'Tener el vehículo su parabrisas estrellado de tal manera que dificulte la visibilidad',
      'Dar vuelta a la derecha con semáforo en rojo con precaución, previo alto total y otorgando preferencia al peatón',
    ],
    correctOption: 'Tener el vehículo su parabrisas estrellado de tal manera que dificulte la visibilidad',
  },
  {
    id: 10,
    question: '¿Cuál es la distancia máxima permitida para circular en reversa?',
    options: [
      '10 metros',
      '25 metros',
      '50 metros',
    ],
    correctOption: '10 metros',
  },
  {
    id: 11,
    question: 'Un agente vial ¿puede interrumpir la circulación de un vehículo solo para verificar si el conductor trae consigo los documentos necesarios para circular?',
    options: [
      'Cierto',
      'Sí, cuando porten placas de otro estado',
      'Falso',
    ],
    correctOption: 'Falso',
  },
  {
    id: 12,
    question: 'Los vehículos no registrados, que carezcan de placas, holograma o tarjeta de circulación deberán',
    options: [
      'Esperar el canje anual',
      'Obtener el permiso correspondiente para circular en tanto concluyen los trámites para la obtención de dicha documentación',
      'Transitar con permiso para circular por tiempo indefinido',
    ],
    correctOption: 'Obtener el permiso correspondiente para circular en tanto concluyen los trámites para la obtención de dicha documentación',
  },
  {
    id: 13,
    question: '¿Es motivo de multa la falta de limpiabrisas en su vehículo?',
    options: [
      'Cierto, porque así lo dispone la ley de tránsito',
      'Sólo para los vehículos públicos',
      'Sólo en época de lluvias, en caso de emergencia o en vehículos oficiales',
    ],
    correctOption: 'Cierto, porque así lo dispone la ley de tránsito',
  },
  {
    id: 14,
    question: 'Si usted conduce un vehículo de motor en estado de ebriedad o bajo el influjo de estupefacientes o psicotrópicos, está cometiendo',
    options: [
      'Infracción y delit',
      'Abuso de autoridad',
      'Infracción y falta administrativa',
    ],
    correctOption: 'Infracción y falta administrativa',
  },
  {
    id: 15,
    question: 'Se considera motivo de infracción',
    options: [
      'Circular con placas ocultas, total o parcialmente',
      'Circular con placas de otro estado',
      'Circular con los hologramas de años anteriores',
    ],
    correctOption: 'Circular con placas ocultas, total o parcialmente',
  },
  {
    id: 16,
    question: 'Está prohibido conducir un vehículo de motor en el estado de jalisco, haciendo uso de aparatos de telefonía celular',
    options: [
      'Sí',
      'No',
      'Salvo que se utilicen aditamentos para manos libres',
    ],
    correctOption: 'Salvo que se utilicen aditamentos para manos libres',
  },
  {
    id: 17,
    question: 'En jalisco se permite transportar un menor de tres años en los asientos delanteros',
    options: [
      'Sólo cuando vaya en brazos de un adulto',
      'Sólo cuando un adulto, llevando puesto el cinturón de seguridad, lo sujete con los brazos',
      'Sólo en los vehículos que no cuenten con asientos traseros, siempre y cuando vaya en asiento de seguridad adecuado',
    ],
    correctOption: 'Sólo en los vehículos que no cuenten con asientos traseros, siempre y cuando vaya en asiento de seguridad adecuado',
  },
  {
    id: 18,
    question: 'Son las 12:00 de la noche y usted se encuentra circulando en su vehículo, llega a un crucero y le toca la luz roja del semáforo, no hay nadie más en ese cruce y no corre peligro alguno ¿está usted obligado a esperar la luz verde del semáforo para avanzar?',
    options: [
      'Sí, estoy obligado a respetar el semáforo sin importar la hora del día',
      'No, nadie me está observando, así que puedo pasarme la luz roja del semáforo',
      'No, la Ley de Vialidad me otorga el beneficio de pasarme las luces rojas después de las 12:00 de la noche',
    ],
    correctOption: 'Sí, estoy obligado a respetar el semáforo sin importar la hora del día',
  },
  {
    id: 19,
    question: 'Cuando circula un vehículo de emergencia en servicio, llevando encendidos códigos y sirena ¿qué se debe hacer?',
    options: [
      'Bajar la velocidad',
      'Acelerar y pasar primero',
      'Permitirle el paso, colocarse en el extremo de la vialidad y hacer alto',
    ],
    correctOption: 'Permitirle el paso, colocarse en el extremo de la vialidad y hacer alto',
  },
  {
    id: 20,
    question: 'Si al llegar a un crucero donde la circulación sea regulada por un agente vial, la posición de éste es de frente o espalda a la arteria por la que usted transita, con los brazos hacia abajo, ¿qué le indica?',
    options: [
      'Siga',
      'Preventiva',
      'Alto',
    ],
    correctOption: 'Alto',
  },
  {
    id: 21,
    question: 'Para conducir un vehículo en cualquiera de las modalidades del transporte de carga, cuya capacidad de carga no exceda a los tres mil quinientos kilogramos y automóviles de servicio público, es indispensable tener licencia de',
    options: [
      'Automovilista',
      'Chofer',
      'Conductor de Servicios de Transporte Público',
    ],
    correctOption: 'Chofer',
  },
  {
    id: 22,
    question: '¿Es permitida la vuelta a la izquierda con la luz del semáforo en rojo?',
    options: [
      'Sí, siempre y cuando se provenga e ingrese a calles de un solo sentido de circulación, previo alto total, respetando la prelación de paso del peatón, sin que exista señalamiento que lo prohíba y que no sea vehículo de servicio colectivo público de pasajeros',
      'No, porque la ley y reglamento de tránsito solamente lo permiten a la derecha',
      'Sí, siempre y cuando se provenga de una Avenida o Calzada con doble sentido de circulación, se ingrese a una calle de un solo sentido, previo alto total, respetando la prelación de paso del peatón, y que no sea vehículo de servicio colectivo público de pasajeros',
    ],
    correctOption: 'Sí, siempre y cuando se provenga e ingrese a calles de un solo sentido de circulación, previo alto total, respetando la prelación de paso del peatón, sin que exista señalamiento que lo prohíba y que no sea vehículo de servicio colectivo público de pasajeros',
  },
  {
    id: 23,
    question: 'Las placas, el engomado y la tarjeta de circulación son documentos',
    options: [
      'Intransferibles que identifican al vehículo',
      'Necesarios para efectuar el refrendo',
      'Que se requieren para la obtención de la licencia',
    ],
    correctOption: 'Intransferibles que identifican al vehículo',
  },
  {
    id: 24,
    question: 'Cuando nos encontramos una patrulla escolar y nos indica alto para ceder el paso de escolares ¿estamos obligados a hacer alto?',
    options: [
      'Sí estamos obligados',
      'No, porque no son Autoridades de Vialidad',
      'Sólo cuando los acompaña un agente vial',
    ],
    correctOption: 'Sí estamos obligados',
  },
  {
    id: 25,
    question: '¿Cuáles son los vehículos que tienen prelación de paso?',
    options: [
      'Vehículos de emergencia en servicio con códigos y sirena encendidos',
      'Vehículos oficiales de los ayuntamientos y policía federal',
      'Vehículos de traslado de valores',
    ],
    correctOption: 'Vehículos de emergencia en servicio con códigos y sirena encendidos',
  },
  {
    id: 26,
    question: 'En cruces de arterias de igual importancia carentes de señalamiento de la prelación de paso, ¿qué deberá usted hacer según el reglamento?',
    options: [
      'Hacer alto total y ceder el paso al de la derecha',
      'Seguir avanzando a velocidad constante si la calle es de norte a sur',
      'Disminuir la velocidad al acercarme al, crucero sin hacer alto total, para cruzar más rápido',
    ],
    correctOption: 'Seguir avanzando a velocidad constante si la calle es de norte a sur',
  },
  {
    id: 27,
    question: 'Cuando el agente vial se encuentra en posición preventiva adelantando ligeramente los brazos y abanicando las manos en un crucero de arteria doble, ¿qué indica?',
    options: [
      'Siga',
      'Vuelta a la izquierda',
      'Preventiva simple',
    ],
    correctOption: 'Vuelta a la izquierda',
  },
  {
    id: 28,
    question: 'Cuando ocurre un accidente y solo hay daños materiales, ¿cuál es el procedimiento correspondiente según el reglamento?',
    options: [
      'Esperar la intervención de las autoridades de Vialidad para que testifiquen el Intercambio de documentos con la contra parte',
      'Si los conductores cuentan con todos sus documentos en regla, celebran convenio y firman desistimiento no se incautarán los vehículos',
      'Esperar la intervención de las autoridades de Vialidad para levantar el inventario del vehículo antes de que se lo lleven al corralón',
    ],
    correctOption: 'Si los conductores cuentan con todos sus documentos en regla, celebran convenio y firman desistimiento no se incautarán los vehículos',
  },
  {
    id: 29,
    question: '¿Bajo qué condiciones puede estacionarse en lugares reservados para discapacitados?',
    options: [
      'Si es o transporta a un discapacitado y el vehículo cuenta con el engomado correspondiente',
      'Si es el único espacio disponible en el estacionamiento',
      'Si se estaciona sólo por unos cuantos minutos',
    ],
    correctOption: 'Si es o transporta a un discapacitado y el vehículo cuenta con el engomado correspondiente',
  },
  {
    id: 30,
    question: '¿Está permitido estacionarse a menos de 5 metros de las bocacalles?',
    options: [
      'No está permitido bajo ninguna circunstancia',
      'Sí está permitido',
      'Si no está pintado de color amarillo sí se puede estacionar',
    ],
    correctOption: 'No está permitido bajo ninguna circunstancia',
  },
  {
    id: 31,
    question: 'Si un conductor anuncia que va a dar vuelta a la izquierda con un señalamiento humano, la forma correcta para hacerlo es',
    options: [
      'Brazo horizontal, antebrazo hacia abajo y mano extendida con la palma hacia atrás',
      'Brazo, antebrazo y mano extendidos horizontalmente',
      'Brazo horizontalmente, antebrazo hacia arriba y mano con los dedos extendidos hacia la derecha',
    ],
    correctOption: 'Brazo, antebrazo y mano extendidos horizontalmente',
  },
  {
    id: 32,
    question: '¿Qué precauciones debe tomar al salir de un estacionamiento, centro comercial, cochera, gasolinera, etc., según el reglamento?',
    options: [
      'Ceder el paso únicamente a los peatones e incorporarse rápidamente a la calle porque tiene la preferencia de paso',
      'Ceder el paso a peatones, y otorgar la prelación de paso a los vehículos en circulación',
      'Incorporarse a velocidad regular sin importar que obligue al conductor que se cruza a que frene bruscamente ya que el reglamento le da la preferencia de paso',
    ],
    correctOption: 'Ceder el paso a peatones, y otorgar la prelación de paso a los vehículos en circulación',
  },
  {
    id: 33,
    question: 'Si usted circula por una calle de doble sentido y necesita dar vuelta a la izquierda para ingresar a otra calle, (estando eso permitido) ¿quién tiene preferencia de paso si no hay semáforo?',
    options: [
      'Los conductores de la calle que va a cruzar',
      'El que siga de frente sobre el que da vuelta a la izquierda',
      'Usted que va a girar a la izquierda',
    ],
    correctOption: 'El que siga de frente sobre el que da vuelta a la izquierda',
  },
  {
    id: 34,
    question: 'Al circular en la vía pública, un agente vial en su patrulla me indica que me detenga ¿quién se debe de bajar del vehículo?',
    options: [
      'Sólo yo con licencia y tarjeta de circulación',
      'Los dos debemos de bajarnos',
      'El agente vial y se acercará por el lado del conductor portando casco y gafete de identificación',
    ],
    correctOption: 'El agente vial y se acercará por el lado del conductor portando casco y gafete de identificación',
  },
  {
    id: 35,
    question: 'Está prohibido a vehículos diferentes a los de emergencia, el uso de torretas, sirenas y demás accesorios reservados a éstos',
    options: [
      'Cierto',
      'Solo en carreteras federales',
      'Falso',
    ],
    correctOption: 'Cierto',
  },
  {
    id: 36,
    question: '¿Cuál es la velocidad máxima permitida para circular en vialidades que limiten con un centro escolar en horarios de entrada o salida?',
    options: [
      '50 km/h',
      '15 km/h',
      '25 km/h',
    ],
    correctOption: '25 km/h',
  },
  {
    id: 37,
    question: '¿Cuál es la velocidad máxima en las arterias de las ciudades en donde no se encuentre señalamiento alguno?',
    options: [
      '40 km/h',
      '50 km/h',
      '60 km/h',
    ],
    correctOption: '50 km/h',
  },
  {
    id: 38,
    question: '¿Qué está indicando el agente vial cuando se encuentra en posición lateral o de costado con los brazos hacia abajo en relación a la arteria por la que transitamos?',
    options: [
      'Siga',
      'Preventiva',
      'Alto general',
    ],
    correctOption: 'Siga',
  },
  {
    id: 39,
    question: 'En calles de un solo sentido el vehículo se estacionará',
    options: [
      'A la derecha, salvo prohibición expresa',
      'A la izquierda, en cualquier dirección respecto a la corriente circulatoria',
      'A la izquierda en dirección a la corriente circulatoria, salvo prohibición expresa o que se autorice en su caso en ambas aceras en cordón o en batería',
    ],
    correctOption: 'A la izquierda en dirección a la corriente circulatoria, salvo prohibición expresa o que se autorice en su caso en ambas aceras en cordón o en batería',
  },
  {
    id: 40,
    question: '¿De qué categoría son las señales en color negro sobre fondo color amarillo?',
    options: [
      'Informativas de Destino',
      'Preventivas',
      'Restrictivas',
    ],
    correctOption: 'Preventivas',
  },
  {
    id: 41,
    question: '¿Cuándo procede el aseguramiento de los vehículos y su envío a un depósito?',
    options: [
      'Cuando haya lesionados en un accidente, alguno de los conductores se encuentre en estado de ebriedad, o existan daños a bienes propiedad del Municipio, Estado o Federación',
      'Cuando, como resultado de un accidente vial, sólo existan daños materiales en bienes inmuebles propiedad de particulares',
      'Solamente cuando no tengan seguro vigente los involucrados en un accidente vial',
    ],
    correctOption: 'Cuando haya lesionados en un accidente, alguno de los conductores se encuentre en estado de ebriedad, o existan daños a bienes propiedad del Municipio, Estado o Federación',
  },
  {
    id: 42,
    question: 'Los vehículos que transiten por las vías públicas del estado, que no sean de transporte público, deberán tener',
    options: [
      'Póliza de seguro con cobertura amplia',
      'Póliza de seguro para garantizar daños a terceros en sus bienes y sus personas por una suma asegurada de cuando menos 6000 días de salario mínimo',
      'Póliza de seguro que garantice daños a terceros en sus bienes y sus personas por cuando menos 1000 días de salario mínimo',
    ],
    correctOption: 'Póliza de seguro para garantizar daños a terceros en sus bienes y sus personas por una suma asegurada de cuando menos 6000 días de salario mínimo',
  },
  {
    id: 43,
    question: 'De acuerdo a la prelación de paso que se contempla en el reglamento de tránsito, ¿cuáles son las medidas de seguridad que deben observar los conductores que arriban a una glorieta?',
    options: [
      'Incorporarse a la glorieta a baja velocidad y alerta a los demás conductores',
      'Incorporarse a la glorieta circulando a 40 km/h, tocando previamente el claxon para llamar la atención y evitar un accidente',
      'Hacer alto total antes de mezclarse con la circulación, dando preferencia a los que ya transitan en ella',
    ],
    correctOption: 'Hacer alto total antes de mezclarse con la circulación, dando preferencia a los que ya transitan en ella',
  },
  {
    id: 44,
    question: 'Si al conducir su vehículo usted llega a un cruce y la luz roja del semáforo es intermitente ¿qué debe hacer?',
    options: [
      'Acelerar y cruzar rápidamente la calle',
      'Hacer alto total y continuar la circulación después de cerciorarse que no se aproximen otros vehículos por la arteria transversal',
      'Disminuir la velocidad antes de entrar en la intersección y continuar con las precauciones necesarias',
    ],
    correctOption: 'Hacer alto total y continuar la circulación después de cerciorarse que no se aproximen otros vehículos por la arteria transversal',
  },
  {
    id: 45,
    question: 'En el semáforo, ¿cuál es el significado de la luz ámbar o amarilla conocida también como preventiva?',
    options: [
      'El lapso que existe para despejar la intersección cuando algún vehículo haya entrado a ella o se encuentre muy próximo y no le sea posible detenerse inmediatamente por el riesgo de producirse un impacto por alcance',
      'Que usted debe aumentar la velocidad para prevenir un accidente',
      'Que usted debe de utilizar el claxon y avanzar',
    ],
    correctOption: 'El lapso que existe para despejar la intersección cuando algún vehículo haya entrado a ella o se encuentre muy próximo y no le sea posible detenerse inmediatamente por el riesgo de producirse un impacto por alcance',
  },
  {
    id: 46,
    question: 'Si en un crucero el semáforo le indica “siga” pero el agente vial le indica a usted “alto” ¿a quién debe de obedecer?',
    options: [
      'Al agente vial',
      'Al semáforo',
      'A los demás conductores',
    ],
    correctOption: 'Al agente vial',
  },
  {
    id: 47,
    question: '¿Cuál es la diferencia entre las señales de tránsito restrictivas y las preventivas?',
    options: [
      'Además de sus colores, las señales restrictivas indican cierto tipo de limitaciones o prohibiciones con relación al tránsito vehicular y al uso de las vías públicas, mientras que las preventivas advierten la existencia o la naturaleza de algún peligro, o el cambio de situación en una vía pública',
      'No existe diferencia alguna',
      'La diferencia es su tamaño y también que las señales Restrictivas son de color azul con blanco y las preventivas verdes con blanco',
    ],
    correctOption: 'Además de sus colores, las señales restrictivas indican cierto tipo de limitaciones o prohibiciones con relación al tránsito vehicular y al uso de las vías públicas, mientras que las preventivas advierten la existencia o la naturaleza de algún peligro, o el cambio de situación en una vía pública',
  },
  {
    id: 48,
    question: 'Egún el reglamento, tienen prelación de paso en vialidades primarias',
    options: [
      'Las calles y calzadas',
      'Las calles, caminos y calzadas',
      'Avenidas, calzadas, viaductos y pares viales de primera magnitud, sobre todas las demás arterias',
    ],
    correctOption: 'Avenidas, calzadas, viaductos y pares viales de primera magnitud, sobre todas las demás arterias',
  },
  {
    id: 49,
    question: '¿Qué nos indica un conductor cuando realiza esta señal humana?',
    options: [
      'Alto',
      'Siga',
      'Vuelta a la izquierda',
    ],
    correctOption: 'Alto',
  },
  {
    id: 50,
    question: 'Los agentes de vialidad y tránsito hacen señales sonoras con su silbato, ¿qué significan dos silbatazos cortos?',
    options: [
      'Siga',
      'Precaución',
      'Acelerar',
    ],
    correctOption: 'Siga',
  },
  {
    id: 51,
    question: 'Cuando las guarniciones u orillas de la acera se encuentran pintadas de color amarillo, ¿qué indican?',
    options: [
      'Que el lugar está reservado',
      'Exclusivo para vehículos oficiales',
      'Que el estacionamiento en ese lugar está prohibido',
    ],
    correctOption: 'Que el estacionamiento en ese lugar está prohibido',
  },
  {
    id: 52,
    question: '¿Qué indican dos líneas continuas al centro de una vía de circulación?',
    options: [
      'Permite rebasar con precaución',
      'Zona peatonal',
      'Que por cada sentido de circulación hay más de un carril y se prohíbe rebasar',
    ],
    correctOption: 'Que por cada sentido de circulación hay más de un carril y se prohíbe rebasar',
  },
  {
    id: 53,
    question: '¿Qué nos indica esta señal?',
    options: [
      'Puente',
      'Estrechamiento asimétrico',
      'Incorporación al tránsito',
    ],
    correctOption: 'Estrechamiento asimétrico',
  },
  {
    id: 54,
    question: '¿Qué nos indica esta señal?',
    options: [
      'Prohibido circular maquinaria agrícola',
      'Se autoriza circular con tractor',
      'Puede circular a baja velocidad',
    ],
    correctOption: 'Prohibido circular maquinaria agrícola',
  },
  {
    id: 55,
    question: '¿Qué nos indica esta señal?',
    options: [
      'Vuelta continua',
      'Curva',
      'Curva inversa',
    ],
    correctOption: 'Curva',
  },
  {
    id: 56,
    question: 'Cuando usted llega a un crucero y se encuentra con una señal de “alto” marcada en el pavimento, deberá detener su vehículo',
    options: [
      'Sobre la señal de “alto”',
      'Antes de la línea blanca marcada para “alto”',
      'En un lugar cerca de la intersección siempre que haga alto total',
    ],
    correctOption: 'Antes de la línea blanca marcada para “alto”',
  },
  {
    id: 57,
    question: '¿Qué indican una línea continua y otra discontinua juntas al centro de una arteria de circulación?',
    options: [
      'A quien circula por la línea continua se le prohíbe rebasar y a quien circula por la línea discontinua se le permite rebasar',
      'Indica a los conductores el lugar donde deben estacionarse',
      'Son áreas neutrales',
    ],
    correctOption: 'A quien circula por la línea continua se le prohíbe rebasar y a quien circula por la línea discontinua se le permite rebasar',
  },
  {
    id: 58,
    question: '¿Qué nos indica esta señal?',
    options: [
      'Peso restringido',
      'Altura libre restringida',
      'Estrechamiento simétrico',
    ],
    correctOption: 'Altura libre restringida',
  },
  {
    id: 59,
    question: '¿Qué nos indica esta señal?',
    options: [
      'Vuelta continua a la derecha',
      'Codo inverso',
      'Entronque lateral derecho',
    ],
    correctOption: 'Vuelta continua a la derecha',
  },
  {
    id: 60,
    question: '¿Qué nos indica esta señal?',
    options: [
      'Desviación',
      'Puente angosto',
      'Circulación al centro',
    ],
    correctOption: 'Puente angosto',
  },
  {
    id: 61,
    question: '¿Qué nos indican las líneas continuas a la orilla del camino?',
    options: [
      'Delimitan el espacio para el cruce de peatones',
      'Sirven para separar carriles',
      'Delimitan el espacio del acotamiento para circular con seguridad',
    ],
    correctOption: 'Delimitan el espacio del acotamiento para circular con seguridad',
  },
  {
    id: 62,
    question: '¿Cuál dispositivo mecanico tiene la función de enviar carga a la bateria?',
    options: [
      'El alternador',
      'Los faros delanteros',
      'La bobina',
    ],
    correctOption: 'El alternador',
  },
  {
    id: 63,
    question: '¿Qué causa puede ocasionar que su motor sufra sobrecalentamiento?',
    options: [
      'Falta de agua y banda floja',
      'Odómetro en mal estado',
      'Falta de aceite en el diferencial',
    ],
    correctOption: 'Falta de agua y banda floja',
  },
  {
    id: 64,
    question: '¿Qué indica esta señal?',
    options: [
      'Prohibido estacionarse',
      'Zona de estacionamiento',
      'Prohibido seguir de frente',
    ],
    correctOption: 'Prohibido estacionarse',
  },
  {
    id: 65,
    question: '¿Qué indica esta señal?',
    options: [
      'Estrechamiento asimétrico',
      'Circulación al centro',
      'Anchura restringida',
    ],
    correctOption: 'Anchura restringida',
  },
  {
    id: 66,
    question: '¿Cuáles son las herramientas básicas que debe traer en su vehículo?',
    options: [
      'Tabla, Martillo, Clavos, Pijas, Lijas, Navaja, Pegamento líquido',
      'Trapos, Focos, Bandas, Mangueras, Cinta aislante, Bobina y Liquido para frenos',
      'Cables para pasar corriente, Lámpara, Gato, Llave de cruz, Pinzas, Franela, Desarmadores de cruz y planos Manómetro para llantas',
    ],
    correctOption: 'Cables para pasar corriente, Lámpara, Gato, Llave de cruz, Pinzas, Franela, Desarmadores de cruz y planos Manómetro para llantas',
  },
  {
    id: 67,
    question: '¿Qué indica esta señal?',
    options: [
      'No parar',
      'Cruce de ferrocarril',
      'Cruce de caminos',
    ],
    correctOption: 'No parar',
  },
  {
    id: 68,
    question: '¿Qué indica esta señal?',
    options: [
      'Cruce de ferrocarril',
      'Cruce de caminos',
      'No parar',
    ],
    correctOption: 'Cruce de caminos',
  },
  {
    id: 69,
    question: '¿Qué indica esta señal?',
    options: [
      'Glorieta',
      'Prohibida la vuelta',
      'Prohibido el retorno',
    ],
    correctOption: 'Prohibido el retorno',
  },
  {
    id: 70,
    question: '¿Qué indica esta señal?',
    options: [
      'Le ceden a usted el paso',
      'Usted debe ceder el paso',
      'Los dos tienen el paso',
    ],
    correctOption: 'Usted debe ceder el paso',
  },
  {
    id: 71,
    question: '¿Qué indica esta señal?',
    options: [
      'Salida',
      'Entronque lateral derecho',
      'Incorporación de tránsito',
    ],
    correctOption: 'Salida',
  },
  {
    id: 72,
    question: '¿Qué indica esta señal?',
    options: [
      'Un solo carril',
      'Circular al centro',
      'Anchura libre',
    ],
    correctOption: 'Anchura libre',
  },
  {
    id: 73,
    question: '¿Qué medidas de seguridad debe tomar si su vehículo sufre alguna falla mecánica durante su recorrido?',
    options: [
      'Encender luces de emergencia, buscar cuál es la falla y repararla rápidamente en el lugar',
      'Encender luces de emergencia, mover el vehículo a la extrema derecha de manera que no obstruya la circulación y colocar las señales preventivas correspondientes',
      'Encender luces de emergencia y esperar en el lugar a que llegue la ayuda del mecánico',
    ],
    correctOption: 'Encender luces de emergencia, mover el vehículo a la extrema derecha de manera que no obstruya la circulación y colocar las señales preventivas correspondientes',
  },
  {
    id: 74,
    question: 'Los espejos retrovisores deben observarse cada',
    options: [
      '1 a 2 minutos',
      '2 a 5 segundos',
      '30 a 40 segundos',
    ],
    correctOption: '2 a 5 segundos',
  },
  {
    id: 75,
    question: 'Antes de iniciar la conducción de su vehículo ¿que puntos básicos de seguridad es conveniente revisar?',
    options: [
      'Llantas, luces, tarjeta de circulación y licencia',
      'Amortiguadores, extinguidor y refacción',
      'Aceite, agua, llantas, luces, espejos y combustible',
    ],
    correctOption: 'Aceite, agua, llantas, luces, espejos y combustible',
  },
  {
    id: 76,
    question: 'Cuando un vehículo lo está rebasando, ¿qué debe hacer?',
    options: [
      'Aumentar la velocidad',
      'Disminuir la velocidad',
      'Activar intermitentes',
    ],
    correctOption: 'Disminuir la velocidad',
  },
  {
    id: 77,
    question: 'Si al conducir su vehículo una de las llantas revienta, inmediatamente usted debe de',
    options: [
      'Aplicar el pedal de los frenos para reducir la velocidad',
      'Sujetar con fuerza el volante, quitar el pie del acelerador y dejar que el vehículo vaya perdiendo velocidad antes que lo dirija al borde derecho del camino',
      'Rápidamente dirigir el vehículo al lado derecho del camino',
    ],
    correctOption: 'Sujetar con fuerza el volante, quitar el pie del acelerador y dejar que el vehículo vaya perdiendo velocidad antes que lo dirija al borde derecho del camino',
  },
  {
    id: 78,
    question: 'El choque más peligroso en un accidente, considerando velocidades similares es',
    options: [
      'El de costado',
      'Por alcance',
      'El de frente',
    ],
    correctOption: 'El de frente',
  },
  {
    id: 79,
    question: '¿Qué debe hacer si al conducir se levanta la tapa del cofre de su vehículo?',
    options: [
      'Frenar rápidamente',
      'Dirigirse directamente a la derecha',
      'Sacar la cabeza por la ventanilla, bajar la velocidad y orillarse a la derecha',
    ],
    correctOption: 'Sacar la cabeza por la ventanilla, bajar la velocidad y orillarse a la derecha',
  },
  {
    id: 80,
    question: '¿Qué precauciones debe usted tomar para no invadir la zona peatonal?',
    options: [
      'Acelerar para cruzar rápidamente la zona',
      'Disminuir la velocidad si el semáforo cambió a preventiva y frenar antes de la línea blanca',
      'Frenar después de haber pasado la zona peatonal',
    ],
    correctOption: 'Disminuir la velocidad si el semáforo cambió a preventiva y frenar antes de la línea blanca',
  },
  {
    id: 81,
    question: 'Es frecuente al circular en las calles, encontrarse algún conductor que nos sigue demasiado cerca, presionándonos ya sea con luces o claxon. ¿cuál debe de ser nuestra actitud ante esta situación?',
    options: [
      'Acelerar para evitar que pase',
      'Cambiar cuidadosamente de carril, previo encendido de las direccionales correspondientes',
      'Continuar manejando por mi carril y dejar que el otro conductor me rebase',
    ],
    correctOption: 'Cambiar cuidadosamente de carril, previo encendido de las direccionales correspondientes',
  },
  {
    id: 82,
    question: '¿Qué debemos hacer como medida de seguridad al aproximarnos a un crucero en el que las vías son de igual importancia y no existe semáforo ni señal de alto?',
    options: [
      'Disminuir la velocidad, quitar el pie del acelerador, posarlo suavemente en el freno, detenerse, ver hacia los lados y avanzar con cuidado',
      'Observar hacia los lados y continuar la marcha a la misma velocidad',
      'Acelerar para que me cedan el paso ya que llegué primero',
    ],
    correctOption: 'Disminuir la velocidad, quitar el pie del acelerador, posarlo suavemente en el freno, detenerse, ver hacia los lados y avanzar con cuidado',
  },
  {
    id: 83,
    question: 'Algunos expertos en la seguridad vial clasifican varios tipos de conductores según su actitud peligrosa al conducir, los más comunes son',
    options: [
      'Alegres, simpáticos y amables',
      'Tranquilos y descuidados',
      'Agresivos, Ofensivos, Defensivos',
    ],
    correctOption: 'Agresivos, Ofensivos, Defensivos',
  },
  {
    id: 84,
    question: 'Cuando estamos cansados y conducimos un vehículo, se recomienda por seguridad',
    options: [
      'Tomar dos tazas de café bien cargado sin azúcar',
      'Disminuir la velocidad, bajar un poco el cristal del lado del conductor de tal forma que permita entrada de aire y encender el radio a alto volumen',
      'Detenernos a descansar durante al menos 20 minutos y hacer algunos ejercicios físicos antes de continuar nuestro viaje',
    ],
    correctOption: 'Detenernos a descansar durante al menos 20 minutos y hacer algunos ejercicios físicos antes de continuar nuestro viaje',
  },
  {
    id: 85,
    question: '¿Cuáles son las condiciones potencialmente adversas en la conducción?',
    options: [
      'El tiempo, el tráfico, el vehículo, el camino y la iluminación',
      'Conducir con precaución, Respetar las zonas peatonales, conducir en sus cinco sentidos',
      'Un conductor responsable, un peatón precavido y un pasajero atento',
    ],
    correctOption: 'El tiempo, el tráfico, el vehículo, el camino y la iluminación',
  },
  {
    id: 86,
    question: '¿Cuál es la forma más segura para tomar una curva?',
    options: [
      'Antes de entrar, disminuir la velocidad y acelerar paulatinamente dentro de la curva',
      'Disminuir la velocidad dentro de la curva',
      'Tomar con suavidad el volante y continuar con la velocidad normal',
    ],
    correctOption: 'Antes de entrar, disminuir la velocidad y acelerar paulatinamente dentro de la curva',
  },
  {
    id: 87,
    question: '¿Qué debe usted hacer si se empieza a incendiar su vehículo?',
    options: [
      'Llamar a los bomberos y pedir auxilio a los transeúntes',
      'Abrir las puertas y echarle agua para apagarlo',
      'Apagar el fuego con el extinguidor de incendios de su auto',
    ],
    correctOption: 'Apagar el fuego con el extinguidor de incendios de su auto',
  },
  {
    id: 88,
    question: '¿Cómo debemos proceder por seguridad si el piso por donde vamos transitando está mojado?',
    options: [
      'Debemos disminuir la velocidad de circulación y darle mayor distancia al vehículo que nos antecede',
      'Podemos mantener nuestra velocidad normal si están en buen estado los frenos y las llantas',
      'Debemos disminuir la velocidad solamente en las inmediaciones de los cruceros',
    ],
    correctOption: 'Debemos disminuir la velocidad de circulación y darle mayor distancia al vehículo que nos antecede',
  },
  {
    id: 89,
    question: 'Hay personas que conducen sus vehículos en forma inadecuada y peligrosa, ¿qué debe usted hacer si en su camino se encuentra con alguno de ellos?',
    options: [
      'Guardar la calma, ceder un poco, alejarse y pensar que su seguridad es lo más importante',
      'Darles alcance para indicarles los errores que van cometiendo al conducir',
      'Ubicarse en el mismo carril a unos 7 metros adelante o atrás y cometer los mismos errores para que el otro conductor aprenda',
    ],
    correctOption: 'Guardar la calma, ceder un poco, alejarse y pensar que su seguridad es lo más importante',
  },
  {
    id: 90,
    question: '¿Qué debe hacer si al llegar a un crucero el semáforo le marca la luz ámbar?',
    options: [
      'Frenar rápidamente para no pasarse el alto',
      'Disminuir la velocidad frenando moderadamente para evitar el accidente con el vehículo que le sigue',
      'Sonar tres veces la bocina para que el conductor que le sigue lo escuche',
    ],
    correctOption: 'Disminuir la velocidad frenando moderadamente para evitar el accidente con el vehículo que le sigue',
  },
  {
    id: 91,
    question: '¿Cuál es el comportamiento de un conductor profesional ante un congestionamiento vial?',
    options: [
      'Circula entre los vehículos aprovechando los espacios, procurando tener pocos incidentes viales',
      'Toca el claxon insistentemente y cambia de carril intempestivamente',
      'Espera su turno indicado por el semáforo, no se desespera y busca vías alternas',
    ],
    correctOption: 'Espera su turno indicado por el semáforo, no se desespera y busca vías alternas',
  },
  {
    id: 92,
    question: '¿Cuándo se considera que las llantas de los vehículos no son seguras?',
    options: [
      'Cuando el dibujo de las llantas es menor de 1mm de profundidad',
      'Cuando el dibujo de las llantas está muy profundo',
      'Cuando las llantas están calientes por el sol y transitamos a 80 Km/h',
    ],
    correctOption: 'Cuando el dibujo de las llantas es menor de 1mm de profundidad',
  },
  {
    id: 93,
    question: 'Si al conducir su vehículo en carretera, la llanta delantera derecha llegara a salir del pavimento ¿qué debe usted hacer?',
    options: [
      'Aplicar inmediatamente los frenos y volver al pavimento',
      'Sujetar con firmeza el volante, quitar el pie del acelerador y volver al pavimento',
      'Volver rápidamente al pavimento a su velocidad normal',
    ],
    correctOption: 'Sujetar con firmeza el volante, quitar el pie del acelerador y volver al pavimento',
  },
  {
    id: 94,
    question: '¿Qué entendemos por manejo defensivo?',
    options: [
      'Conducir a muy baja velocidad',
      'Conducir un vehículo respetando las normas de vialidad para prevenir accidentes a pesar de los errores de los demás',
      'Conducir a baja velocidad a pesar de los retrasos en los horarios',
    ],
    correctOption: 'Conducir un vehículo respetando las normas de vialidad para prevenir accidentes a pesar de los errores de los demás',
  },
  {
    id: 95,
    question: 'Si al aproximarse a un crucero el color de la luz del semáforo no se observa claro debido a la iluminación del sol, ¿qué medidas de seguridad debe de realizar?',
    options: [
      'Ceder el paso a los vehículos que transitan de Oriente a Poniente y esperar mi turno para cruzar',
      'Disminuir la velocidad, observar la circulación de la calle que cruzaré además de su semáforo y, si me corresponde el siga, cruzar con precaución',
      'Pasar lo más rápido que se pueda, evitando chocar con los demás vehículos',
    ],
    correctOption: 'Disminuir la velocidad, observar la circulación de la calle que cruzaré además de su semáforo y, si me corresponde el siga, cruzar con precaución',
  },
  {
    id: 96,
    question: '¿Cuáles son las ventajas de revisar llantas, bandas, luces y niveles de fluidos con la periodicidad recomendada por el fabricante?',
    options: [
      'Evitar los accidentes con peatones',
      'Anticiparse a imprevistos, sobrecalentamiento y daño del motor, así como accidentes viales',
      'Se previenen conflictos viales y conductores arrollados',
    ],
    correctOption: 'Anticiparse a imprevistos, sobrecalentamiento y daño del motor, así como accidentes viales',
  },
  {
    id: 97,
    question: '¿Cuáles son las obligaciones de un conductor responsable?',
    options: [
      'Respetar los derechos y obligaciones de los demás usuarios de las vías públicas, así como las señales de tránsito e indicaciones de los Agente viales',
      'Conducir con precaución, excediendo la velocidad solo cuando necesite hacerlo',
      'Evitar accidentes al conducir, respetando el señalamiento vial a menos que por necesidad personal requiera no respetar los que considere menos importantes',
    ],
    correctOption: 'Respetar los derechos y obligaciones de los demás usuarios de las vías públicas, así como las señales de tránsito e indicaciones de los Agente viales',
  },
  {
    id: 98,
    question: 'De las siguientes opciones ¿cuál es la forma más segura para cambiar una llanta ponchada?',
    options: [
      'Estacionar el vehículo en una superficie plana, asegurar las llantas con un bloque de madera y cambiar la llanta como mejor se pueda',
      'Evitar que el vehículo estorbe a los demás conductores, poner el freno de mano, asegurar las llantas con un bloque de madera después colocar en forma segura el gato, aflojar las tuercas de la llanta sólo media vuelta, subir el gato de tal forma que la llanta se eleve 3 cm, cambiar la llanta, bajar el gato y apretar fuerte las tuercas, quitar bloques de madera',
      'Subir el vehículo preferentemente a la banqueta colocar el gato en cualquier punto del vehículo y subirlo lo más alto posible luego aflojar las tuercas deteniendo la llanta con los pies para evitar que de vueltas, cambiar la llanta, quitar gato y circular con seguridad',
    ],
    correctOption: 'Evitar que el vehículo estorbe a los demás conductores, poner el freno de mano, asegurar las llantas con un bloque de madera después colocar en forma segura el gato, aflojar las tuercas de la llanta sólo media vuelta, subir el gato de tal forma que la llanta se eleve 3 cm, cambiar la llanta, bajar el gato y apretar fuerte las tuercas, quitar bloques de madera',
  },
  {
    id: 99,
    question: 'Si cuando nos subimos a nuestro vehículo el parabrisas está sucio, es recomendable',
    options: [
      'Circular a alta velocidad para limpiarlo y así conduciremos más seguros',
      'Limpiarlo de preferencia con agua corriente y un poco de jabón',
      'Utilizar los limpiabrisas en seco ya que evitamos que se haga lodo con la tierra o el polvo',
    ],
    correctOption: 'Limpiarlo de preferencia con agua corriente y un poco de jabón',
  },
  {
    id: 100,
    question: '¿Es necesario ajustar los espejos retrovisores del vehiculo a nuestra altura si vamos a circular solamente 1 km?',
    options: [
      'No es necesarios en tramos cortos',
      'Realmente no es importante',
      'Sí es necesario por seguridad sin importar la distancia',
    ],
    correctOption: 'Sí es necesario por seguridad sin importar la distancia',
  },
  {
    id: 101,
    question: 'Si al aproximarnos a un crucero no se ve claramente el semáforo ya que anuncios, árboles u otros objetos me impiden verlo con claridad, se recomienda por seguridad hacer lo siguiente',
    options: [
      'Acelerar y tocar el claxon para que los otros conductores me cedan el paso',
      'Dejar de acelerar y pasar despacio',
      'Disminuir velocidad, llegar con precaución al cruce procurando ver el semáforo de más cerca y observar detenidamente hacia ambos lados evitando cualquier problema',
    ],
    correctOption: 'Disminuir velocidad, llegar con precaución al cruce procurando ver el semáforo de más cerca y observar detenidamente hacia ambos lados evitando cualquier problema',
  },
  {
    id: 102,
    question: 'Al circular durante la noche en condiciones optimas de clima',
    options: [
      'Podemos distinguir a un peatón con ropa obscura a 100 metros de distancia',
      'Es difícil ver a los peatones a más de 20 metros, por eso se debe de extremar precauciones al circular por zonas urbanas y/o donde haya concentraciones de peatones',
      'Podemos ver a un peatón vestido con ropa amarilla desde una distancia de 80 m',
    ],
    correctOption: 'Es difícil ver a los peatones a más de 20 metros, por eso se debe de extremar precauciones al circular por zonas urbanas y/o donde haya concentraciones de peatones',
  },
  {
    id: 103,
    question: 'El usar audífonos para escuchar música mientras conduce es',
    options: [
      'Peligroso solamente para quien los usa',
      'Peligroso sólo para los peatones',
      'Peligroso para todos los usuarios de la vía pública cercanos a quien los usa',
    ],
    correctOption: 'Peligroso para todos los usuarios de la vía pública cercanos a quien los usa',
  },
];

export default data;

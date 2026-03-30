import { Question } from './types';

export const questionBank: Question[] = [
  {
    id: 1,
    section: "DAN 91 y DAN 151",
    text: "La definición de aeronave pilotada a distancia es: \"aeronave que no lleva a bordo un piloto a los mandos\"",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Por definición, una RPA es una aeronave que no lleva piloto a bordo."
  },
  {
    id: 2,
    section: "DAN 91 y DAN 151",
    text: "La definición \"persona designada por el explorador para operar los controles de vuelo de una aeronave pilotada a distancia durante el tiempo de vuelo. A falta de persona designada, se presumirá que el piloto es quien dirige la operación de vuelo\", corresponde a:",
    options: ["Explorador", "Piloto", "Explorador a distancia", "Piloto a distancia"],
    correctAnswer: "Piloto a distancia",
    explanation: "El Piloto a distancia es el encargado de operar los controles de vuelo."
  },
  {
    id: 3,
    section: "DAN 91 y DAN 151",
    text: "\"Una operación durante la cual una aeronave pilotada a distancia vuela sin intervención de piloto en la gestión de vuelo\", corresponde al concepto de:",
    options: ["Operación restringida", "Operación con visibilidad directa visual", "Operación en gestión de vuelo", "Operación autónoma"],
    correctAnswer: "Operación autónoma",
    explanation: "La operación autónoma es aquella que no requiere intervención humana durante el vuelo."
  },
  {
    id: 4,
    section: "DAN 91 y DAN 151",
    text: "Las operaciones de un RPA sobre áreas pobladas solo están permitidas en asuntos de interés público:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "La normativa DAN 151 restringe el uso sobre áreas pobladas a fines de interés público."
  },
  {
    id: 5,
    section: "DAN 91 y DAN 151",
    text: "\"... es la operación en la cual la tripulación remota mantiene contacto visual directo con la aeronave para dirigir su vuelo y satisfacer las responsabilidades de separación y anticolisión\":",
    options: ["Operación de vuelo", "Operación con Visibilidad Directa Visual", "Operación visual", "Operación con Visibilidad Indirecta Visual"],
    correctAnswer: "Operación con Visibilidad Directa Visual",
    explanation: "VLOS (Visual Line of Sight) implica mantener contacto visual directo."
  },
  {
    id: 6,
    section: "DAN 91 y DAN 151",
    text: "La definición de \"Áreas Pobladas\" es:",
    options: [
      "Zonas destinadas para espectáculos de congregación masiva de personas",
      "Zonas en las que se desarrollen actividades que convoquen la aglomeración al aire libre",
      "Terrenos destinados para ser habilitados por poblaciones humanas",
      "Zonas en las que existen centros urbanos o se desarrollen actividades que convoquen la aglomeración de personas al aire libre"
    ],
    correctAnswer: "Zonas en las que existen centros urbanos o se desarrollen actividades que convoquen la aglomeración de personas al aire libre",
    explanation: "Esta es la definición técnica según la normativa aeronáutica chilena."
  },
  {
    id: 7,
    section: "DAN 91 y DAN 151",
    text: "Toda aeronave pilotada a distancia, previo a realizar cualquier operación de vuelo, deberá contar con autorización de:",
    options: ["Fuerza Aérea de Chile", "Junta Aeronáutica Civil", "Dirección General de Aeronáutica Civil", "Departamento de Aeródromos y Servicios Aeronáuticos"],
    correctAnswer: "Dirección General de Aeronáutica Civil",
    explanation: "La DGAC es la autoridad aeronáutica en Chile."
  },
  {
    id: 8,
    section: "DAN 91 y DAN 151",
    text: "La cancelación de un vuelo RPA ya autorizado no debe ser notificada a la DGAC tan pronto como sea posible:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Sí debe notificarse a la DGAC tan pronto como sea posible."
  },
  {
    id: 9,
    section: "DAN 91 y DAN 151",
    text: "Ninguna aeronave pilotada a distancia se utilizará sobre el ___ de otro Estado sin la previa ___ especial concedida por el Estado en el que efectuará el vuelo:",
    options: ["Derecho, autorización", "Derecho, convalidación", "Territorio, autorización", "Territorio, convalidación"],
    correctAnswer: "Territorio, autorización",
    explanation: "Se requiere autorización del Estado soberano sobre su territorio."
  },
  {
    id: 10,
    section: "DAN 91 y DAN 151",
    text: "Durante la operación de una aeronave pilotada a distancia quedará prohibido:",
    options: ["Operar sobre zonas prohibidas o peligrosas", "Operar más de una nave en forma simultánea", "Afectar a derechos de terceros, especialmente en su privacidad e intimidad", "Todas las anteriores"],
    correctAnswer: "Todas las anteriores",
    explanation: "Todas estas acciones están explícitamente prohibidas por la normativa."
  },
  {
    id: 11,
    section: "DAN 91 y DAN 151",
    text: "El peso máximo de despegue de un RPA es:",
    options: ["6 Kilos", "8 Kilos", "9 Kilos", "7 Kilos"],
    correctAnswer: "6 Kilos",
    explanation: "La DAN 151 establece un límite de 6 kg para este tipo de operaciones."
  },
  {
    id: 12,
    section: "DAN 91 y DAN 151",
    text: "La altura máxima de operación de un RPA es:",
    options: ["400 metros", "380 metros", "400 pies", "450 pies"],
    correctAnswer: "400 pies",
    explanation: "La altura máxima permitida es de 400 pies (aprox. 120 metros) sobre el terreno."
  },
  {
    id: 13,
    section: "DAN 91 y DAN 151",
    text: "No se podrá operar un RPA a:",
    options: [
      "Menos de 2,5 km de la línea del eje de la pista, y a 2 km paralelo al eje de la pista de un aeródromo",
      "Menos de 1 km de la línea del eje de la pista, y a 500 m paralelo al eje de la pista de un aeródromo",
      "Menos de 1,5 km de la línea del eje de la pista, y a 1 km paralelo al eje de la pista de un aeródromo",
      "Menos de 2 km de la línea del eje de la pista, y a 1 km paralelo al eje de la pista de un aeródromo"
    ],
    correctAnswer: "Menos de 1,5 km de la línea del eje de la pista, y a 1 km paralelo al eje de la pista de un aeródromo",
    explanation: "Son las distancias de seguridad mínimas respecto a pistas de aeródromos."
  },
  {
    id: 14,
    section: "DAN 91 y DAN 151",
    text: "Es responsabilidad del operador mantener la separación de otras aeronaves:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El operador de RPA debe ceder el paso a cualquier aeronave tripulada."
  },
  {
    id: 15,
    section: "DAN 91 y DAN 151",
    text: "Los RPA solo se podrán volar en línea vista (VLOS):",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "La normativa actual en Chile para este tipo de credencial exige VLOS."
  },
  {
    id: 16,
    section: "DAN 91 y DAN 151",
    text: "Un RPA debe operar en condiciones meteorológicas de vuelo visual y, a línea vista y control permanente del operador:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Se requiere VMC (Visual Meteorological Conditions) y control visual permanente."
  },
  {
    id: 17,
    section: "DAN 91 y DAN 151",
    text: "Un operador de RPA podrá volar en áreas restringidas:",
    options: ["Cuando lo estime necesario", "Cuando cuente con autorización de la autoridad competente", "Opción A y B", "Cuando esté en una situación de emergencia"],
    correctAnswer: "Cuando cuente con autorización de la autoridad competente",
    explanation: "Las áreas restringidas requieren permiso previo de la autoridad que las controla."
  },
  {
    id: 18,
    section: "DAN 91 y DAN 151",
    text: "La DAN 151 solo autoriza la operación de RPA sobre áreas pobladas en asuntos de interés público:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Es una restricción fundamental de la DAN 151."
  },
  {
    id: 19,
    section: "DAN 91 y DAN 151",
    text: "La credencial de RPA permite al portador:",
    options: ["Desempeñarse como operador de RPA solo en condiciones VLOS", "Desempeñarse como operador de RPA en condición remota", "Desempeñarse como operador de RPA en cualquier condición", "Desempeñarse como operador de RPA en condiciones VLOS y en condición remota"],
    correctAnswer: "Desempeñarse como operador de RPA solo en condiciones VLOS",
    explanation: "La credencial básica está limitada a operaciones VLOS."
  },
  {
    id: 20,
    section: "DAN 91 y DAN 151",
    text: "El operador de RPA podrá traspasar el control de una aeronave en vuelo a otro piloto solo si está coordinando y las condiciones meteorológicas lo permiten:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El traspaso de mando es posible bajo coordinación y condiciones seguras."
  },
  {
    id: 21,
    section: "DAN 91 y DAN 151",
    text: "Al inicio de un vuelo será responsabilidad del operador de un RPA determinar si la aeronave y su sistema de control se encuentran en condiciones de operación segura:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Es la responsabilidad básica de seguridad del piloto al mando."
  },
  {
    id: 22,
    section: "DAN 91 y DAN 151",
    text: "La definición de NOTAM es: \"aviso distribuido por medio de telecomunicaciones que contiene información relativa al establecimiento, condición o modificación de cualquier instalación aeronáutica, servicio, procedimiento o peligro, cuyo conocimiento oportuno es esencial para el personal encargado de las operaciones de vuelo\":",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "NOTAM significa 'Notice to Airmen'."
  },
  {
    id: 23,
    section: "DAN 91 y DAN 151",
    text: "Zona Peligrosa D es:",
    options: [
      "Espacio aéreo dentro del cual está restringido el vuelo de las aeronaves de acuerdo con condiciones especificadas",
      "Espacio aéreo en el cual pueden desplegarse actividades peligrosas para el vuelo de las aeronaves",
      "Espacio aéreo dentro del cual está prohibido el vuelo de aeronaves por razones de seguridad nacional",
      "Todas las anteriores"
    ],
    correctAnswer: "Espacio aéreo en el cual pueden desplegarse actividades peligrosas para el vuelo de las aeronaves",
    explanation: "La letra D viene de 'Danger'."
  },
  {
    id: 24,
    section: "DAN 91 y DAN 151",
    text: "\"Espacio aéreo de dimensiones definidas sobre el territorio o las aguas jurisdiccionales de Chile, dentro del cual está prohibido el vuelo de aeronaves por razones de seguridad nacional\":",
    options: ["Zona Prohibida", "Zona Insegura", "Zona Peligrosa", "Zona Restringida"],
    correctAnswer: "Zona Prohibida",
    explanation: "Las zonas prohibidas son por razones de seguridad nacional."
  },
  {
    id: 25,
    section: "DAN 91 y DAN 151",
    text: "Toda persona que se encuentre operando un RPA deberá portar:",
    options: ["Credencial de Operador RPAS", "La autorización de operación de RPAS otorgada por la DGAC", "Tarjeta de registro RPAS", "Todas las anteriores"],
    correctAnswer: "Todas las anteriores",
    explanation: "Son los documentos obligatorios para cualquier operación legal."
  },
  {
    id: 26,
    section: "DAN 91 y DAN 151",
    text: "Un RPA es la aeronave del sistema:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "RPA es 'Remotely Piloted Aircraft'."
  },
  {
    id: 27,
    section: "DAN 91 y DAN 151",
    text: "Dentro de las características técnicas exigidas a un RPA está:",
    options: [
      "La aeronave debe haber sido construida de fábrica y contar con instructivos técnicos de operación",
      "Contar solo con motores eléctricos",
      "Ser de estructura metálica",
      "La aeronave debe haber sido construida de fábrica, contar con instructivos técnicos de operación y contar solo con motores eléctricos"
    ],
    correctAnswer: "La aeronave debe haber sido construida de fábrica, contar con instructivos técnicos de operación y contar solo con motores eléctricos",
    explanation: "Son requisitos técnicos específicos de la DAN 151."
  },
  {
    id: 28,
    section: "Meteorología",
    text: "Se define como ráfaga:",
    options: [
      "El valor de la intensidad del viento cuando es constante",
      "La turbulencia creada por la intensidad del viento",
      "La turbulencia creada al sotavento de una montaña",
      "El valor máximo de la intensidad del viento cuando no es constante"
    ],
    correctAnswer: "El valor máximo de la intensidad del viento cuando no es constante",
    explanation: "Una ráfaga es un aumento repentino y breve de la velocidad del viento."
  },
  {
    id: 29,
    section: "Meteorología",
    text: "Para que la formación de niebla sea probable, debe existir:",
    options: [
      "Alta humedad, temperatura y punto de rocío próximo y viento en calma",
      "Nubes en altura y corrientes descendentes de aire húmedo",
      "Nubes en altura y fuerte viento"
    ],
    correctAnswer: "Alta humedad, temperatura y punto de rocío próximo y viento en calma",
    explanation: "La saturación del aire cerca del suelo con poco viento favorece la niebla."
  },
  {
    id: 30,
    section: "Meteorología",
    text: "Se dice que el aire está saturado cuando:",
    options: ["No se puede comprimir más", "No admite mayor cantidad de vapor de agua", "Su tensión de vapor es mínima"],
    correctAnswer: "No admite mayor cantidad de vapor de agua",
    explanation: "La saturación ocurre cuando la humedad relativa llega al 100%."
  },
  {
    id: 31,
    section: "Meteorología",
    text: "Al aumentar la altura, la densidad del aire disminuye:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "A mayor altitud, hay menos presión y las moléculas de aire están más separadas."
  },
  {
    id: 32,
    section: "Meteorología",
    text: "El viento es originado por una diferencia de presiones que tienden a igualarse:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El aire se mueve de zonas de alta presión a zonas de baja presión."
  },
  {
    id: 33,
    section: "Meteorología",
    text: "La temperatura a la cual se alcanza el punto de saturación del vapor de agua se denomina:",
    options: ["Punto de saturación", "Punto de rocío", "Temperatura de ebullición", "Temperatura de saturación"],
    correctAnswer: "Punto de rocío",
    explanation: "Es la temperatura a la que el vapor de agua comienza a condensarse."
  },
  {
    id: 34,
    section: "Meteorología",
    text: "La niebla se forma cuando:",
    options: [
      "Existe aire húmedo y gran densidad",
      "Las nubes descienden hasta el nivel del suelo",
      "El aire se enfría por debajo de su punto de rocío",
      "Las nubes se enfrían por debajo de su punto de rocío"
    ],
    correctAnswer: "El aire se enfría por debajo de su punto de rocío",
    explanation: "Al enfriarse por debajo del punto de rocío, el vapor se condensa en microgotas."
  },
  {
    id: 35,
    section: "Meteorología",
    text: "La dirección de la brisa marina por la noche es:",
    options: ["Del mar hacia la tierra", "Paralelo a la costa", "Relativa", "De la tierra hacia el mar"],
    correctAnswer: "De la tierra hacia el mar",
    explanation: "Por la noche la tierra se enfría más rápido que el mar, creando la brisa de tierra."
  },
  {
    id: 36,
    section: "Meteorología",
    text: "Se dice que el viento es constante cuando:",
    options: [
      "En unas ocasiones lleva un sentido y en otras ocasiones otro",
      "Su acción es constante y en la misma dirección",
      "Su acción es constante pero puede variar su dirección",
      "Se desplaza en una sola dirección"
    ],
    correctAnswer: "Su acción es constante y en la misma dirección",
    explanation: "Viento constante implica estabilidad en fuerza y dirección."
  },
  {
    id: 37,
    section: "Meteorología",
    text: "¿Qué es necesario para que se produzcan precipitaciones?",
    options: [
      "Que la temperatura del ambiente sea elevada",
      "Que la presión atmosférica sea alta",
      "Que el aire esté saturado",
      "Que el aire esté contaminado"
    ],
    correctAnswer: "Que el aire esté saturado",
    explanation: "La saturación es el paso previo necesario para la condensación y precipitación."
  },
  {
    id: 38,
    section: "Meteorología",
    text: "La brisa marina está originada por:",
    options: [
      "El oleaje del mar",
      "El amanecer y el atardecer del día",
      "La mayor humedad de la superficie del mar",
      "La diferencia térmica entre el mar y la tierra"
    ],
    correctAnswer: "La diferencia térmica entre el mar y la tierra",
    explanation: "La tierra se calienta y enfría más rápido que el agua, generando flujos de aire."
  },
  {
    id: 39,
    section: "Meteorología",
    text: "La niebla se distingue de la bruma por la humedad y el color gris:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Se distinguen principalmente por la visibilidad (niebla < 1km, bruma > 1km)."
  },
  {
    id: 40,
    section: "Meteorología",
    text: "La diferencia entre niebla y neblina radica en que la primera presenta una visibilidad menor de 1000 metros y la segunda mayor de 1000 metros:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Es el criterio técnico meteorológico de distinción."
  },
  {
    id: 41,
    section: "Aerodinámica",
    text: "La turbulencia mecánica se crea:",
    options: [
      "Por las térmicas de calor",
      "Por las ráfagas de viento",
      "Por el rozamiento del aire con la superficie",
      "Por la relación entre ráfagas de viento y térmicas de calor"
    ],
    correctAnswer: "Por el rozamiento del aire con la superficie",
    explanation: "Obstáculos en el suelo (edificios, árboles) causan este tipo de turbulencia."
  },
  {
    id: 42,
    section: "Aerodinámica",
    text: "El viento relativo es:",
    options: [
      "El formado por la hélice al pasar por el ala",
      "La corriente de aire que sigue a la aeronave en su trayectoria",
      "La corriente o flujo de aire moviéndose hacia el perfil, siendo opuesto a la trayectoria de vuelo",
      "El formado por el aspa al pasar por el ala"
    ],
    correctAnswer: "La corriente o flujo de aire moviéndose hacia el perfil, siendo opuesto a la trayectoria de vuelo",
    explanation: "Es el viento que 'siente' el perfil al desplazarse."
  },
  {
    id: 43,
    section: "Aerodinámica",
    text: "La trayectoria seguida por una aeronave durante su desplazamiento en el seno del aire se denomina trayectoria de vuelo:",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Es la definición básica de trayectoria de vuelo."
  },
  {
    id: 44,
    section: "Aerodinámica",
    text: "La sustentación es:",
    options: [
      "La fuerza hacia arriba perpendicular al viento relativo y desarrollada para soportar el peso de la aeronave",
      "La fuerza aerodinámica más la resistencia parásita",
      "La fuerza perpendicular al viento relativo desarrollada para realizar la tracción de la aeronave",
      "La fuerza aerodinámica que soporta el peso de la aeronave"
    ],
    correctAnswer: "La fuerza hacia arriba perpendicular al viento relativo y desarrollada para soportar el peso de la aeronave",
    explanation: "La sustentación se opone al peso y es perpendicular al viento relativo."
  },
  {
    id: 45,
    section: "Aerodinámica",
    text: "El camino seguido por una aeronave durante su desplazamiento en el seno del aire se denomina:",
    options: ["Aerovía", "Viento relativo", "Trayectoria de vuelo", "Trayectoria"],
    correctAnswer: "Trayectoria de vuelo",
    explanation: "Es el término técnico para el recorrido en el aire."
  },
  {
    id: 46,
    section: "Aerodinámica",
    text: "El movimiento alrededor del eje lateral se denomina:",
    options: ["Alabeo", "Cabeceo", "Pérdida", "Ganancia"],
    correctAnswer: "Cabeceo",
    explanation: "El cabeceo (pitch) ocurre sobre el eje lateral (y)."
  },
  {
    id: 47,
    section: "Aerodinámica",
    text: "En un vuelo recto y nivelado, sin aceleración o desaceleración, las fuerzas equilibradas son:",
    options: ["La sustentación igual al empuje", "La sustentación distinta al empuje", "La sustentación distinta al peso", "La sustentación igual al peso"],
    correctAnswer: "La sustentación igual al peso",
    explanation: "Para mantener altura constante, la sustentación debe igualar al peso."
  }
];

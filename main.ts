import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { cors } from "https://deno.land/x/hono/middleware.ts";

const quotes = [
      {
    "Cita": "Muchas veces me he preguntado cómo es posible que cada hombre se ame a sí mismo más que a los demás, pero conceda menos valor a su propia opinión de sí mismo que a la opinión de los demás.",
    "Autor": "Marcus Aurelius",
    "Día": 1,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No hay genio sin un toque de locura",
    "Autor": "Seneca",
    "Día": 2,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No te quedes ahí sentado. Haz algo. Las respuestas seguirán",
    "Autor": "Mark Manson",
    "Día": 3,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El máximo poder en la vida es ser completamente autosuficiente, completamente uno mismo.",
    "Autor": "Robert Greene.",
    "Día": 4,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Entre estímulo y respuesta hay un espacio. En ese espacio está nuestro poder de elegir nuestra respuesta.",
    "Autor": "Victor Frankl",
    "Día": 5,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Mire el pasado, con sus imperios cambiantes que surgieron y cayeron, y también podrá prever el futuro.",
    "Autor": "Marcus Aurelius",
    "Día": 6,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nada perdura excepto el cambio",
    "Autor": "Heraclitus",
    "Día": 7,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Hoy escapé de la ansiedad. O no, lo descarté porque estaba dentro de mí, en mis propias percepciones, no fuera.",
    "Autor": "Marcus Aurelius",
    "Día": 8,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Piensa que la vida que has vivido hasta ahora ha terminado y, como hombre muerto, mira lo que queda como un bono y vívelo según la Naturaleza. Ama la mano que el destino te depara y juega como si fuera tuya, porque ¿qué podría ser más apropiado?",
    "Autor": "Marcus Aurelius",
    "Día": 9,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Un estoico es alguien que transforma el miedo en prudencia, el dolor en transformación, los errores en iniciación y el deseo en emprender.",
    "Autor": "Nassim Taleb",
    "Día": 10,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Se tolerante con los demás y estricto contigo mismo.",
    "Autor": "Marcus Aurelius",
    "Día": 11,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El hombre conquista el mundo conquistándose a sí mismo.",
    "Autor": "Zeno of Citium",
    "Día": 12,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Comience a vivir de inmediato y cuente cada día por separado como una vida separada.",
    "Autor": "Seneca",
    "Día": 13,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El que teme a la muerte nunca hará nada digno de un hombre que está vivo.",
    "Autor": "Seneca",
    "Día": 14,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Un cuerpo en forma, una mente tranquila, una casa llena de amor. Estas cosas no se pueden comprar: hay que ganárselas.",
    "Autor": "Naval Ravikant",
    "Día": 15,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando te levantes por la mañana piensa en el privilegio que es estar vivo, pensar, disfrutar, amar…",
    "Autor": "Marcus Aurelius",
    "Día": 16,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Siempre deberíamos preguntarnos: “¿Es esto algo que está o no bajo mi control?",
    "Autor": "Epictetus",
    "Día": 17,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Puede arruinar tu vida sólo si arruina tu carácter. De lo contrario no puede hacerte daño, ni por dentro ni por fuera.",
    "Autor": "Seneca",
    "Día": 18,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En la vida no importa lo que te pase ni de dónde vengas. Importa lo que haces con lo que sucede y lo que te han dado.",
    "Autor": "Ryan Holiday",
    "Día": 19,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cada uno de nosotros es, desde la perspectiva cósmica, precioso.",
    "Autor": "Carl Sagan",
    "Día": 20,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando ya no podemos cambiar una situación, tenemos el desafío de cambiarnos a nosotros mismos.",
    "Autor": "Victor Frankl",
    "Día": 21,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No esperes una vida sin problemas”, dijo el panda. “No existe tal cosa. En cambio, espere una vida llena de buenos problemas.",
    "Autor": "Mark Manson",
    "Día": 22,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Concéntrate en lo que la naturaleza exige, como si te regieras únicamente por eso. Entonces hazlo y acéptalo, a menos que tu naturaleza como ser vivo se vea degradada por ello.",
    "Autor": "Marcus Aurelius",
    "Día": 23,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Confía todo voluntariamente a los dioses y luego sigue tu camino en la vida, sin ser amo ni esclavo de nadie.",
    "Autor": "Marcus Aurelius",
    "Día": 24,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nunca soñé con el éxito. trabajé para ello",
    "Autor": "Estée Lauder",
    "Día": 25,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La incertidumbre es una posición incómoda. Pero la certeza es absurda.",
    "Autor": "Voltaire",
    "Día": 26,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo lo que escuchamos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no la verdad.",
    "Autor": "Marcus Aurelius",
    "Día": 27,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La gran ley de la naturaleza es que nunca se detiene. no hay fin",
    "Autor": "Ryan Holiday",
    "Día": 28,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Tu perspectiva de la vida proviene de la jaula en la que estuviste cautivo.",
    "Autor": "Shannon L. Alder",
    "Día": 29,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Los problemas sólo existen en la mente humana.",
    "Autor": "Anthony de Mello",
    "Día": 30,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Lo que más tememos hacer suele ser lo que más necesitamos hacer",
    "Autor": "Tim Ferris",
    "Día": 31,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Un barco no debe estar sostenido por un ancla, ni la vida por una sola esperanza.",
    "Autor": "Epictetus",
    "Día": 32,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Casi universalmente, el tipo de desempeño que brindamos en las redes sociales es positivo. Es más bien “Déjame decirte qué tan bien van las cosas. Mira lo genial que soy”. Rara vez es la verdad: “Tengo miedo. Estoy luchando. No sé.",
    "Autor": "Ryan Holiday",
    "Día": 33,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Asóciese con personas que probablemente lo mejorarán",
    "Autor": "Seneca",
    "Día": 34,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El ser humano siempre apunta y está dirigido a algo o alguien distinto de uno mismo, ya sea un significado que cumplir o otro ser humano con quien encontrarse.",
    "Autor": "Victor Frankl",
    "Día": 35,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Pero aquellos que olvidan el pasado, descuidan el presente y temen por el futuro tienen una vida muy breve y turbulenta.",
    "Autor": "Seneca",
    "Día": 36,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Frena tu deseo: no pongas tu corazón en tantas cosas y obtendrás lo que necesitas.",
    "Autor": "Epictetus",
    "Día": 37,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No expliques tu filosofía. Encarnalo.",
    "Autor": "Epictetus",
    "Día": 38,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cada hombre es interrogado por la vida; y sólo puede responder ante la vida respondiendo por su propia vida; a la vida sólo puede responder siendo responsable.",
    "Autor": "Victor Frankl",
    "Día": 39,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cada vez más personas tienen hoy los medios para vivir, pero no tienen ningún sentido para vivir.",
    "Autor": "Victor Frankl",
    "Día": 40,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cada uno tiene su propia vocación o misión específica en la vida; cada uno debe realizar una tarea concreta que exige cumplimiento. En él no puede ser reemplazado ni su vida repetirse, por lo que la tarea de cada uno es única como su oportunidad específica de realizarla.",
    "Autor": "Victor Frankl",
    "Día": 41,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Al hombre se le puede quitar todo menos una cosa: la última de las libertades humanas: elegir su actitud en cualquier conjunto de circunstancias, elegir su propio camino.",
    "Autor": "Victor Frankl",
    "Día": 42,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Los pensamientos externos no son el problema. Es tu evaluación de ellos. Que puedes borrar ahora mismo",
    "Autor": "Marcus Aurelius",
    "Día": 43,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Primero aprenda el significado de lo que dice y luego hable.",
    "Autor": "Epictetus",
    "Día": 44,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Concéntrate en el momento, no en los monstruos que pueden o no estar más adelante.",
    "Autor": "Ryan Holiday",
    "Día": 45,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Porque el sentido de la vida difiere de un hombre a otro, de un día a otro y de una hora a otra. Lo que importa, por tanto, no es el sentido de la vida en general sino el sentido específico de la vida de una persona en un momento dado.",
    "Autor": "Victor Frankl",
    "Día": 46,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Date tiempo para aprender algo nuevo y bueno y deja de dar vueltas.",
    "Autor": "Marcus Aurelius",
    "Día": 47,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Dios, concédeme la serenidad para aceptar las cosas que no puedo cambiar, el coraje para cambiar las cosas que puedo y la sabiduría para reconocer la diferencia.",
    "Autor": "Ryan Holiday",
    "Día": 48,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La grandeza proviene de comienzos humildes; proviene del trabajo duro. Significa que eres la persona menos importante en la sala, hasta que cambies eso con resultados.",
    "Autor": "Ryan Holiday",
    "Día": 49,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Conserva tus entusiasmos juveniles: podrás utilizarlos mejor cuando seas mayor",
    "Autor": "Seneca",
    "Día": 50,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La felicidad debe suceder, y lo mismo se aplica al éxito: hay que dejar que suceda sin importarle.",
    "Autor": "Victor Frankl",
    "Día": 51,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Sufre más de lo necesario quien sufre antes de lo necesario.",
    "Autor": "Seneca",
    "Día": 52,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El que es valiente es libre.",
    "Autor": "Seneca",
    "Día": 53,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El que está libre en el cuerpo, pero atado en el alma, es esclavo; pero al contrario, aquel que está atado en el cuerpo, pero libre en el alma, es verdaderamente libre.",
    "Autor": "Epictetus",
    "Día": 54,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El que se ríe de sí mismo nunca se queda sin cosas de qué reírse.",
    "Autor": "Epictetus",
    "Día": 55,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Empiezo a hablar sólo cuando estoy seguro de que no es mejor dejar lo que voy a decir.",
    "Autor": "Cato",
    "Día": 56,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Te considero desafortunado porque nunca has vivido una desgracia. Has pasado por la vida sin oponente; nadie podrá saber jamás de lo que eres capaz, ni siquiera tú.",
    "Autor": "Seneca",
    "Día": 57,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si un hombre no sabe hacia qué puerto navega, ningún viento le es favorable.",
    "Autor": "Seneca",
    "Día": 58,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si alguien puede refutarme, mostrarme que estoy cometiendo un error o que estoy viendo las cosas desde una perspectiva equivocada, con mucho gusto cambiaré. Es la verdad lo que busco, y la verdad nunca hizo daño a nadie.",
    "Autor": "Marcus Aurelius",
    "Día": 59,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si la vida tiene algún significado, entonces debe tenerlo el sufrimiento. El sufrimiento es una parte indestructible de la vida, al igual que el destino y la muerte. Sin sufrimiento y muerte, la vida humana no puede ser completa.",
    "Autor": "Victor Frankl",
    "Día": 60,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Impresionar a la gente es completamente diferente a ser verdaderamente impresionante.",
    "Autor": "Ryan Holiday",
    "Día": 61,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En la vida, nuestra primera tarea es ésta: dividir y distinguir las cosas en dos categorías: las cosas externas que no puedo controlar, pero las elecciones que hago con respecto a ellas sí las controlo. ¿Dónde encontraré el bien y el mal? En mí, en mis elecciones...",
    "Autor": "Epitectus",
    "Día": 62,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No es que tengamos tan poco tiempo sino que perdemos mucho. … La vida que recibimos no es corta pero la hacemos así; no estamos mal provistos sino que utilizamos lo que tenemos de manera derrochadora.",
    "Autor": "Seneca",
    "Día": 63,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No es el hombre que tiene muy poco, sino el hombre que anhela más, el que es pobre.",
    "Autor": "Seneca",
    "Día": 64,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Está bien desanimarse. No está bien dejarlo. Saber que quieres rendirte, pero plantarte y seguir acercándote poco a poco hasta tomar la fortaleza impenetrable que has decidido sitiar en tu propia vida: eso es perseverancia.",
    "Autor": "Ryan Holiday",
    "Día": 65,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Vive como si vivieras una segunda vez y como si hubieras actuado mal la primera.",
    "Autor": "Victor Frankl",
    "Día": 66,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Vivir virtuosamente equivale a vivir de acuerdo con la propia experiencia del curso real de la naturaleza.",
    "Autor": "Chrysippus",
    "Día": 67,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad.",
    "Autor": "Seneca",
    "Día": 68,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El hombre es aquel ser que inventó las cámaras de gas de Auschwitz; sin embargo, también es aquel ser que entró erguido en aquellos aposentos, con el Padrenuestro o el Shemá Israel en los labios.",
    "Autor": "Victor Frankl",
    "Día": 69,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Los hombres no se perturban por las cosas, sino por los principios y nociones que se forman acerca de las cosas.",
    "Autor": "Epictetus",
    "Día": 70,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Ningún hombre puede tener una vida pacífica si piensa demasiado en alargarla.",
    "Autor": "Seneca",
    "Día": 71,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nadie puede llegar a ser plenamente consciente de la esencia misma de otro ser humano a menos que lo ame.",
    "Autor": "Victor Frankl",
    "Día": 72,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Ninguna persona tiene el poder de tener todo lo que quiere, pero está en su poder no querer lo que no tiene y aprovechar con alegría lo que tiene.",
    "Autor": "Seneca",
    "Día": 73,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Ninguna persona es libre si no es dueña de sí misma.",
    "Autor": "Epictetus",
    "Día": 74,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nada grande se crea de repente, como tampoco un racimo de uvas o un higo. Si me dices que deseas un higo, te respondo que debe haber tiempo. Déjalo primero florecer, luego dar fruto y luego madurar.",
    "Autor": "Epictetus",
    "Día": 75,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Uno debe buscar la virtud por sí misma, sin dejarse influenciar por el miedo o la esperanza, ni por ninguna influencia externa. Además, en eso consiste la felicidad.",
    "Autor": "Zeno of Citium",
    "Día": 76,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El perfeccionismo rara vez engendra perfección o satisfacción, sólo decepción.",
    "Autor": "Ryan Holiday",
    "Día": 77,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Recuerda que se necesita muy poco para tener una vida feliz.",
    "Autor": "Marcus Aurelius",
    "Día": 78,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nunca harás nada en este mundo sin coraje. Es la mayor cualidad de la mente después del honor.",
    "Autor": "Aristotle",
    "Día": 79,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La mejor venganza es no ser como tu enemigo.",
    "Autor": "Marcus Aurelius",
    "Día": 80,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La principal tarea en la vida es simplemente ésta: identificar y separar asuntos para poder decirme claramente cuáles son elementos externos que no están bajo mi control y cuáles tienen que ver con las elecciones que realmente controlo. ¿Dónde entonces busco el bien y el mal? No a lo externo incontrolable, sino dentro de mí mismo a las elecciones que son mías.",
    "Autor": "Epictetus",
    "Día": 81,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El obstáculo en el camino se convierte en el camino. Nunca lo olvides, dentro de cada obstáculo hay una oportunidad para mejorar nuestra condición.",
    "Autor": "Ryan Holiday",
    "Día": 82,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La única garantía, siempre, es que las cosas saldrán mal. Lo único que podemos utilizar para mitigar esto es la anticipación. Porque la única variable que controlamos completamente somos nosotros mismos.",
    "Autor": "Ryan Holiday",
    "Día": 83,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El único fracaso real es abandonar tus principios. Matar lo que amas porque no puedes soportar separarte de ello es egoísta y estúpido. Si tu reputación no puede absorber algunos golpes, entonces no valió nada en primer lugar.",
    "Autor": "Ryan Holiday",
    "Día": 84,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La pretensión de conocimiento es nuestro vicio más peligroso, porque nos impide mejorar.",
    "Autor": "Ryan Holiday",
    "Día": 85,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El universo mismo es Dios y el derramamiento universal de su alma.",
    "Autor": "Chrysippus",
    "Día": 86,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo el futuro está en la incertidumbre: vive de inmediato.",
    "Autor": "Seneca",
    "Día": 87,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Sin nosotros no hay bien ni mal, sólo hay percepción. Está el evento en sí y la historia que nos contamos sobre lo que significa”.",
    "Autor": "Ryan Holiday",
    "Día": 88,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No hay nada en el mundo, me atrevo a decir, que ayudaría tan eficazmente a uno a sobrevivir incluso en las peores condiciones como el conocimiento de que la propia vida tiene un significado.",
    "Autor": "Victor Frankl",
    "Día": 89,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Piensa en el progreso, no en la perfección.",
    "Autor": "Ryan Holiday",
    "Día": 91,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Éste es nuestro gran error: pensar que esperamos la muerte. La mayor parte de la muerte ya ha desaparecido. El tiempo que ha pasado es propiedad de la muerte.",
    "Autor": "Seneca",
    "Día": 92,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Esto debes tener siempre presente: cuál es la naturaleza del todo y cuál es mi naturaleza.",
    "Autor": "Marcus Aurelius",
    "Día": 93,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Para el europeo, es una característica de la cultura estadounidense que, una y otra vez, se le manda y ordena a uno \"ser feliz\". Pero no se puede perseguir la felicidad; debe seguir. Uno debe tener una razón para \"ser feliz\".",
    "Autor": "Victor Frankl",
    "Día": 94,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En definitiva, el hombre no debe preguntarse cuál es el sentido de su vida, sino que debe reconocer que es a él a quien se le pregunta.",
    "Autor": "Victor Frankl",
    "Día": 95,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Espera la muerte con una mente alegre. Porque es según la naturaleza, y nada es malo lo que es según la naturaleza.",
    "Autor": "Marcus Aurelius",
    "Día": 96,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No pierdas más tiempo discutiendo sobre lo que debería ser un buen hombre. Sea uno.",
    "Autor": "Marcus Aurelius",
    "Día": 97,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Sufrimos más a menudo en la imaginación que en la realidad.",
    "Autor": "Seneca",
    "Día": 98,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La riqueza no consiste en tener grandes posesiones, sino en tener pocas necesidades.",
    "Autor": "Epictetus",
    "Día": 99,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Lo que el hombre realmente necesita no es un estado sin tensión sino más bien esforzarse y luchar por una meta digna de él.",
    "Autor": "Victor Frankl",
    "Día": 100,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando eliminamos el ego, nos queda lo que es real. Lo que reemplaza al ego es la humildad, sí, pero humildad y confianza inquebrantables. Mientras que el ego es artificial, este tipo de confianza puede tener peso. El ego es robado. La confianza se gana. El ego está auto-ungido, su arrogancia es artificio. Uno se está preparando y el otro se está preparando. Es la diferencia entre potente y venenoso.",
    "Autor": "Ryan Holiday",
    "Día": 101,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Dondequiera que estemos, hagamos lo que hagamos y hacia dónde vayamos, nos debemos a nosotros mismos, a nuestro arte, al mundo hacerlo bien.",
    "Autor": "Ryan Holiday",
    "Día": 102,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Los sabios hablan porque tienen algo que decir; Tontos porque tienen que decir algo.",
    "Autor": "Unknown",
    "Día": 103,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El trabajo es encontrarse solo en la pista cuando el clima mantuvo a todos los demás en casa. El trabajo es superar el dolor y los primeros borradores y prototipos de mierda. Es ignorar los aplausos que otros están recibiendo y, lo que es más importante, ignorar los aplausos que usted pueda estar recibiendo. Porque hay trabajo por hacer. El trabajo no quiere ser bueno. Se hace así, a pesar del viento en contra.",
    "Autor": "Ryan Holiday",
    "Día": 104,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Te conviertes en aquello a lo que le prestas atención.",
    "Autor": "Epictetus",
    "Día": 105,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Podrías dejar la vida ahora mismo. Deja que eso determine lo que haces, dices y piensas.",
    "Autor": "Marcus Aurelius",
    "Día": 106,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Tu potencial, lo mejor que eres capaz de hacer, esa es la métrica con la que debes medirte. Tus estándares lo son. Ganar no es suficiente. La gente puede tener suerte y ganar. La gente puede ser idiota y ganar. Cualquiera puede ganar. Pero no todo el mundo es la mejor versión posible de sí mismo.",
    "Autor": "Ryan Holiday",
    "Día": 107,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No eres tan bueno como crees. No lo tienes todo resuelto. Manténgase concentrado. Hazlo mejor.",
    "Autor": "Ryan Holiday",
    "Día": 108,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En caso de duda, no lo hagas.",
    "Autor": "Benjamin Franklin",
    "Día": 109,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Hay tres cosas extremadamente duras: el acero, un diamante y conocerse a uno mismo.",
    "Autor": "Benjamin Franklin",
    "Día": 110,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No hables mal de nadie, pero habla todo lo bueno que sabes de todos.",
    "Autor": "Benjamin Franklin",
    "Día": 112,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Algunas personas mueren a los 25 años y no son enterradas hasta los 75.",
    "Autor": "Benjamin Franklin",
    "Día": 113,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Muchos hombres piensan que están comprando placer, cuando en realidad se están vendiendo a él.",
    "Autor": "Benjamin Franklin",
    "Día": 114,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La tragedia de la vida es que envejecemos demasiado pronto y somos sabios demasiado tarde.",
    "Autor": "Benjamin Franklin",
    "Día": 115,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Es más fácil prevenir los malos hábitos que romperlos.",
    "Autor": "Benjamin Franklin",
    "Día": 116,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El que se enamora de sí mismo no tendrá rivales.",
    "Autor": "Benjamin Franklin",
    "Día": 117,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La energía y la perseverancia lo conquistan todo.",
    "Autor": "Benjamin Franklin",
    "Día": 118,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "O escribe algo que valga la pena leer o haz algo que valga la pena escribir.",
    "Autor": "Benjamin Franklin",
    "Día": 119,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Una inversión en conocimiento produce el mejor interés.",
    "Autor": "Benjamin Franklin",
    "Día": 120,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando la mayoría de las personas se proponen cambiar sus vidas, a menudo se centran en todas las cosas externas, como un nuevo trabajo, una nueva ubicación, nuevos amigos o nuevas perspectivas románticas, y así sucesivamente. La realidad es que cambiar tu vida comienza con cambiar la forma en que ves todo en tu vida.",
    "Autor": "Mark Manson",
    "Día": 121,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Como todo lo que vale la pena hacer en la vida, la felicidad requiere tiempo, paciencia y constancia.",
    "Autor": "Mark Manson",
    "Día": 122,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La mejora en cualquier cosa se basa en miles de pequeños fracasos, y la magnitud de tu éxito se basa en cuántas veces has fallado en algo.",
    "Autor": "Mark Manson",
    "Día": 123,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cada nueva conversación, cada nueva relación, trae nuevos desafíos y oportunidades para una expresión honesta.",
    "Autor": "Mark Manson",
    "Día": 124,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si alguien es mejor que tú en algo, probablemente sea porque ha fallado en eso más que tú. Si alguien es peor que tú, probablemente se deba a que no ha pasado por todas las dolorosas experiencias de aprendizaje que tú tienes.",
    "Autor": "Mark Manson",
    "Día": 125,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El primer paso para tomar mejores decisiones es simplemente ser brutalmente honesto acerca de su comportamiento consigo mismo. ¿Cuáles son las decisiones que estás tomando? ¿Cómo estás empleando tu tiempo? ¿Qué estás descuidando que no deberías?",
    "Autor": "Mark Manson",
    "Día": 126,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Tus días están contados. Úsalos para abrir las ventanas de tu alma al sol. Si no lo haces, pronto se pondrá el sol y tú con él.",
    "Autor": "Marcus Aurelius",
    "Día": 127,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Tienes poder sobre tu mente, no sobre los acontecimientos externos. Date cuenta de esto y encontrarás fuerza.",
    "Autor": "Marcus Aurelius",
    "Día": 128,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Siempre tienes la opción de no tener opinión. Nunca hay necesidad de alterarse o perturbar su alma por cosas que no puede controlar. Estas cosas no piden ser juzgadas por ti. Déjalos en paz.",
    "Autor": "Marcus Aurelius",
    "Día": 129,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Mientras enseñamos, aprendemos.",
    "Autor": "Seneca",
    "Día": 130,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Siempre que estés a punto de criticar a alguien, hazte la siguiente pregunta: ¿Qué defecto mío se parece más al que estoy a punto de criticar?",
    "Autor": "Marcus Aurelius",
    "Día": 131,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando otro te culpe o te odie, o alguien exprese críticas similares, ve a sus almas, penetra en su interior y mira qué clase de personas son. Te darás cuenta de que no hay necesidad de sentirte atormentado por la ansiedad de que tengan una opinión particular sobre ti.",
    "Autor": "Marcus Aurelius",
    "Día": 132,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Lo que hacemos ahora resuena en la eternidad.",
    "Autor": "Marcus Aurelius",
    "Día": 133,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Tenemos dos oídos y una boca, así que debemos https://en.wikiquote.org/wiki/Listen\n más de lo que decimos.",
    "Autor": "Zeno of Citium",
    "Día": 134,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Se necesita muy poco para tener una vida feliz; todo está dentro de ti en tu forma de pensar.",
    "Autor": "Marcus Aurelius",
    "Día": 135,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Piensa en ti mismo como si estuvieras muerto. Has vivido tu vida. Ahora, toma lo que queda y vívelo adecuadamente. Lo que no transmite luz crea su propia oscuridad.",
    "Autor": "Marcus Aurelius",
    "Día": 136,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Piensa en tus muchos años de procrastinación; cómo los dioses os han concedido repetidas veces nuevos períodos de gracia, de los que no habéis aprovechado. Ahora es el momento de comprender la naturaleza del universo al que perteneces y de ese Poder controlador del que eres descendiente; y comprender que tu tiempo tiene un límite puesto. Utilízalo, entonces, para avanzar en tu iluminación; o desaparecerá y nunca más estará en tu poder.",
    "Autor": "Marcus Aurelius",
    "Día": 137,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El mundo es mero cambio, y esta vida, opinión.",
    "Autor": "Marcus Aurelius",
    "Día": 138,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El universo es cambio; nuestra vida es lo que nuestros pensamientos hacen de ella",
    "Autor": "Marcus Aurelius",
    "Día": 139,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Está cerca el tiempo en que lo habrás olvidado todo; y está cerca el tiempo en que todos os habrán olvidado. Reflexiona siempre que pronto no serás nadie, y en ninguna parte.",
    "Autor": "Marcus Aurelius",
    "Día": 140,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El alma se tiñe del color de sus pensamientos.",
    "Autor": "Marcus Aurelius",
    "Día": 141,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El objetivo de la vida no es estar del lado de la mayoría, sino evitar encontrarse en las filas de los locos.",
    "Autor": "Marcus Aurelius",
    "Día": 142,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El recuerdo de todo muy pronto queda arrollado en el tiempo.",
    "Autor": "Marcus Aurelius",
    "Día": 143,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La felicidad de tu vida depende de la calidad de tus pensamientos.",
    "Autor": "Marcus Aurelius",
    "Día": 144,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La primera regla es mantener un espíritu tranquilo. La segunda es mirar las cosas cara a cara y conocerlas tal como son.",
    "Autor": "Marcus Aurelius",
    "Día": 145,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La mejor venganza es ser diferente a quien realizó la lesión.",
    "Autor": "Marcus Aurelius",
    "Día": 146,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Lo que es realmente bello no necesita nada; no más que la ley, no más que la verdad, no más que la benevolencia o la modestia.",
    "Autor": "Marcus Aurelius",
    "Día": 147,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Pronto lo habrás olvidado todo.\nPronto todos te habrán olvidado.",
    "Autor": "Marcus Aurelius",
    "Día": 148,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Puesto que es la Razón la que da forma y regula todas las demás cosas, no debe dejarse en desorden.",
    "Autor": "Epictetus",
    "Día": 149,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Rechaza tu sensación de herida y la herida misma desaparecerá.",
    "Autor": "Marcus Aurelius",
    "Día": 150,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Recupera tus sentidos, vuelve a llamarte y despierta una vez más. Ahora que te das cuenta de que sólo te preocupaban los sueños, mira esta \"realidad\" como ves tus sueños.",
    "Autor": "Marcus Aurelius",
    "Día": 151,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Practica, por el amor de Dios, en las pequeñas cosas; y de allí proceder a mayores.",
    "Autor": "Epictetus",
    "Día": 152,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La perfección del carácter es ésta: vivir cada día como si fuera el último, sin frenesí, sin apatía, sin pretensiones.",
    "Autor": "Marcus Aurelius",
    "Día": 153,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nuestra vida es lo que nuestros pensamientos hacen de ella.",
    "Autor": "Marcus Aurelius",
    "Día": 154,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Observa siempre que todo es resultado del cambio, y acostúmbrate a pensar que no hay nada que la Naturaleza ame tanto como cambiar las formas existentes y crear otras nuevas como ellas.",
    "Autor": "Marcus Aurelius",
    "Día": 155,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No https://en.wikiquote.org/wiki/El mal es honorable; pero https://en.wikiquote.org/wiki/Death es honorable; por lo tanto la muerte no es mala.",
    "Autor": "Zeno of Citium",
    "Día": 156,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En ningún lugar puede el hombre encontrar un refugio más tranquilo y tranquilo que en su propia alma.",
    "Autor": "Marcus Aurelius",
    "Día": 157,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nadie pierde otra vida que la que ahora vive, ni vive otra vida que la que perderá.",
    "Autor": "Marcus Aurelius",
    "Día": 158,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nadie puede perder ni el pasado ni el futuro; ¿cómo podría alguien verse privado de lo que no posee? ... Es sólo el momento presente del que cualquiera puede verse privado: y si esto es todo lo que tiene, no puede perder lo que no tiene.",
    "Autor": "Marcus Aurelius",
    "Día": 159,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Ningún hombre es feliz si no se cree así.",
    "Autor": "Marcus Aurelius",
    "Día": 160,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nunca olvides que el universo es un único organismo vivo que posee una sustancia y un alma, que mantiene todas las cosas suspendidas en una sola conciencia y crea todas las cosas con un único propósito para que puedan trabajar juntas, hilando, tejiendo y anudando todo lo que suceda.",
    "Autor": "Marcus Aurelius",
    "Día": 161,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La suerte es donde la oportunidad se encuentra con la preparación.",
    "Autor": "Seneca",
    "Día": 162,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Mírate bien a ti mismo; hay una fuente de fortaleza que siempre surgirá si siempre miras.",
    "Autor": "Marcus Aurelius",
    "Día": 163,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No mires a nada, ni siquiera por un momento, excepto a razonar.",
    "Autor": "Marcus Aurelius",
    "Día": 164,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Vive una buena vida. Si hay dioses y son justos, entonces no les importará lo devoto que hayas sido, sino que te recibirán basándose en las virtudes por las que has vivido. Si hay dioses, pero injustos, entonces no deberías querer adorarlos. Si no hay dioses, entonces te habrás ido, pero habrás vivido una vida noble que perdurará en la memoria de tus seres queridos.",
    "Autor": "Marcus Aurelius",
    "Día": 165,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La vida no es ni buena ni mala, sino sólo un lugar para el bien y el mal.",
    "Autor": "Marcus Aurelius",
    "Día": 166,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No es la muerte lo que un hombre debe temer, pero sí debe temer nunca comenzar a vivir.",
    "Autor": "Marcus Aurelius",
    "Día": 167,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Está en tu poder retirarte cuando lo desees. La perfecta tranquilidad interior consiste en el buen orden de la mente, el reino propio.",
    "Autor": "Marcus Aurelius",
    "Día": 168,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Es ridículo que un hombre no huya de su propia maldad, lo cual sí es posible, sino de la maldad de los demás, lo cual es imposible.",
    "Autor": "Marcus Aurelius",
    "Día": 169,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En tus acciones, no pospongas las cosas. En tus conversaciones, no confundas. En tus pensamientos, no te desvíes. En tu alma, no seas pasivo ni agresivo. En tu vida, no te centres sólo en los negocios.",
    "Autor": "Marcus Aurelius",
    "Día": 170,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Por la mañana, cuando te levantes de mala gana, deja que esté presente este pensamiento: me levanto para realizar el trabajo de un ser humano. ¿Por qué entonces estoy insatisfecho si voy a hacer las cosas para las cuales existo y para las cuales fui traído al mundo?",
    "Autor": "Marcus Aurelius",
    "Día": 171,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si algo externo te angustia, el dolor no se debe a la cosa en sí, sino a tu estimación de ella; y este tienes el poder de revocar en cualquier momento",
    "Autor": "Marcus Aurelius",
    "Día": 172,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si no está bien no lo hagas; si no es verdad no lo digas.",
    "Autor": "Marcus Aurelius",
    "Día": 173,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¡Qué ridículo y qué extraño sorprenderse de cualquier cosa que sucede en la vida!",
    "Autor": "Marcus Aurelius",
    "Día": 174,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuánto tiempo gana quien no mira lo que dice, hace o piensa su prójimo, sino sólo lo que él mismo hace, para que sea justo y santo.",
    "Autor": "Marcus Aurelius",
    "Día": 175,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¡Cuánto más graves son las consecuencias de la ira que sus causas!",
    "Autor": "Marcus Aurelius",
    "Día": 176,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Porque la apariencia exterior es un maravilloso pervertidor de la razón.",
    "Autor": "Marcus Aurelius",
    "Día": 177,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Porque está en tu poder retirarte a ti mismo cuando quieras.",
    "Autor": "Marcus Aurelius",
    "Día": 178,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No es fácil considerar que no leer lo que sucede en el alma de otra persona sea una causa de infelicidad: pero aquellos que no prestan atención a los movimientos de su propia alma son necesariamente infelices.",
    "Autor": "Marcus Aurelius",
    "Día": 179,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo lo que existe es en cierto modo la semilla de lo que será",
    "Autor": "Marcus Aurelius",
    "Día": 180,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo, un caballo, una vid, es creado para algún deber... Entonces, ¿para qué tarea fuiste creado tú mismo?",
    "Autor": "Marcus Aurelius",
    "Día": 181,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo nuevo comienzo proviene del fin de algún otro comienzo.",
    "Autor": "Seneca",
    "Día": 182,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo organismo vivo se realiza cuando sigue el camino correcto para su propia naturaleza.",
    "Autor": "Marcus Aurelius",
    "Día": 183,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Disfrutar de los placeres presentes de tal forma que no dañe los futuros.",
    "Autor": "Seneca",
    "Día": 184,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Medita en la belleza de la vida. Observa las estrellas y imagínate corriendo con ellas.",
    "Autor": "Marcus Aurelius",
    "Día": 185,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Haz lo que quieras. Incluso si te desgarras, la mayoría de la gente seguirá haciendo las mismas cosas.",
    "Autor": "Marcus Aurelius",
    "Día": 186,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No desperdicies lo que te queda de vida especulando sobre tus vecinos, a menos que sea con miras a algún beneficio mutuo. Preguntarse qué está haciendo fulano de tal y por qué, o qué está diciendo, pensando o tramando (en una palabra, cualquier cosa que te distraiga de la fidelidad al gobernante que llevas dentro) significa una pérdida de oportunidad para alguna otra tarea. .",
    "Autor": "Marcus Aurelius",
    "Día": 187,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No te entregues a sueños de tener lo que no tienes, sino calcula las principales bendiciones que posees y luego recuerda con gratitud cuánto las anhelarías si no fueran tuyas.",
    "Autor": "Marcus Aurelius",
    "Día": 188,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No actúes como si fueras a vivir diez mil años. La muerte se cierne sobre ti. Mientras vivas, mientras esté en tu poder, sé bueno.",
    "Autor": "Marcus Aurelius",
    "Día": 189,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Haz cada acto de tu vida como si fuera el último acto de tu vida.",
    "Autor": "Marcus Aurelius",
    "Día": 190,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La muerte nos sonríe a todos; Todo lo que podemos hacer es devolverle la sonrisa.",
    "Autor": "Marcus Aurelius",
    "Día": 191,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La muerte es una liberación de las impresiones de los sentidos, de los deseos que nos convierten en sus títeres, de los caprichos de la mente y del duro servicio de la carne.",
    "Autor": "Marcus Aurelius",
    "Día": 192,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Limítate al presente.",
    "Autor": "Marcus Aurelius",
    "Día": 193,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Sé tu propio dueño y mira las cosas como hombre, como ser humano, como ciudadano, como criatura mortal.",
    "Autor": "Marcus Aurelius",
    "Día": 194,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Y en el caso de cosas superiores como las estrellas, descubrimos una especie de unidad en la separación. Cuanto más alto ascendemos en la escala del ser, más fácil es discernir una conexión incluso entre cosas separadas por grandes distancias”.",
    "Autor": "Marcus Aurelius",
    "Día": 195,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todas las cosas se desvanecen y rápidamente se convierten en mitos.",
    "Autor": "Marcus Aurelius",
    "Día": 196,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Acepta las cosas a las que el destino te ata y ama a las personas con las que el destino te une, pero hazlo con todo tu corazón.",
    "Autor": "Marcus Aurelius",
    "Día": 197,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Un hombre debe mantenerse erguido, no que otros lo mantengan erguido”.",
    "Autor": "Marcus Aurelius",
    "Día": 198,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Ser como la roca sobre la que las olas siguen rompiendo. Permanece inmóvil y el furor del mar se calma a su alrededor.",
    "Autor": "Marcus Aurelius",
    "Día": 199,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Quien hace lo malo, se hace daño a sí mismo; Quien hace injusticia, se la comete a sí mismo, haciéndose malo.",
    "Autor": "Marcus Aurelius",
    "Día": 200,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Siempre podrás salir victorioso si nunca participas en ninguna contienda en la que el asunto no dependa totalmente de ti mismo.",
    "Autor": "Epictetus",
    "Día": 201,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Vives como si fueras a vivir para siempre, sin pensar en ningún momento en tu debilidad, y no te das cuenta de cuánto tiempo ha pasado ya; Pierdes horas como si sacaras de un pozo lleno hasta rebosar, aunque ese mismo día que estás dando a alguna persona o cosa sea posiblemente el último.",
    "Autor": "Seneca",
    "Día": 202,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Tienes que morir unas cuantas veces antes de poder realmente\nvivir.",
    "Autor": "Charles Bukowski",
    "Día": 203,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Teméis todo como mortales pero deseáis tenerlo todo como dioses.",
    "Autor": "Seneca",
    "Día": 204,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Puedes desechar la mayor parte de la basura que abarrota tu mente (cosas que sólo existen allí) y hacer espacio para ti: . . . al comprender la escala del mundo. . . contemplando el tiempo infinito. . . pensando en la velocidad con la que cambian las cosas: cada parte de cada cosa; el estrecho espacio entre nuestro nacimiento y muerte; el tiempo infinito antes; el tiempo igualmente ilimitado que sigue.",
    "Autor": "Marcus Aurelius",
    "Día": 205,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El trabajo realizado con ansiedad por los resultados es muy inferior al trabajo realizado sin esa ansiedad, en la calma de la entrega personal.",
    "Autor": "Marc Aurelius",
    "Día": 206,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Las palabras deben sembrarse como semillas. No importa cuán pequeña pueda ser una semilla, cuando se encuentra en el terreno adecuado, despliega su fuerza y ​​de ser diminuta se expande y crece hasta alcanzar un tamaño enorme.",
    "Autor": "Seneca",
    "Día": 207,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Sin adversario, la virtus se marchita. Vemos cuán grande y viable es la virtus cuando, mediante la resistencia, muestra de lo que es capaz.",
    "Autor": "Seneca",
    "Día": 208,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La sabiduría es el bien perfecto de la mente humana; La filosofía es el amor a la sabiduría y el esfuerzo por alcanzarla.",
    "Autor": "Seneca",
    "Día": 209,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¿Por qué nadie admite sus errores? Porque todavía está metido en ellos. Es la persona que ha despertado la que cuenta su sueño, y reconocer los propios fallos es un signo de salud.",
    "Autor": "Seneca",
    "Día": 210,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¿Por qué todas estas conjeturas? Puedes ver lo que debe ser\nhecho. Si puedes ver el camino, síguelo.",
    "Autor": "Marcus Aurelius",
    "Día": 211,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Quien quiera ser libre, por tanto, que no quiera ni evite nada que sea competencia de los demás. De lo contrario, será necesariamente un esclavo.",
    "Autor": "Epictetus",
    "Día": 212,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Quien no considera que lo que tiene es la mayor riqueza, es infeliz, aunque sea dueño del mundo entero.",
    "Autor": "Seneca",
    "Día": 213,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Dondequiera que haya un ser humano, existe la oportunidad de realizar un acto de bondad.",
    "Autor": "Seneca",
    "Día": 214,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¿Dónde vas a encontrar serenidad e independencia: en algo libre o en algo esclavizado?",
    "Autor": "Epictetus",
    "Día": 215,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando Zenón recibió la noticia de un naufragio y supo que todo su equipaje se había hundido, dijo: \"La fortuna me manda a ser un filósofo menos cargado.",
    "Autor": "Seneca",
    "Día": 216,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando habéis hecho una buena acción y otro la ha recibido, ¿por qué buscáis además de éstas, como hacen los necios, una tercera cosa, ya sea para tener fama de haber hecho una buena acción o para obtener algo a cambio?",
    "Autor": "Marcus Aurelius",
    "Día": 217,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando te sientas ofendido por la culpa de cualquier hombre, vuélvete hacia ti mismo y estudia tus propios defectos. Entonces olvidarás tu ira.",
    "Autor": "Epictetus",
    "Día": 218,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando alguien tiene una base adecuada en la vida, no debería tener que buscar aprobación fuera de sí mismo.",
    "Autor": "Epictetus",
    "Día": 219,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando alguien te provoque, recuerda que en realidad es tu propia opinión la que te provoca. No es la persona que te insulta o ataca lo que atormenta tu mente, sino la visión que tienes de estas cosas. No se deje engañar por cómo aparecen las cosas al principio. Con tiempo y mayor perspectiva, podrás recuperar la paz interior.",
    "Autor": "Epictetus",
    "Día": 220,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuando una mente es impresionable y no tiene un control demasiado firme de lo que es correcto, hay que rescatarla de la multitud: le resulta muy fácil pasarse a la mayoría.",
    "Autor": "Seneca",
    "Día": 221,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo lo que puede suceder en cualquier momento, puede suceder hoy.",
    "Autor": "Seneca",
    "Día": 222,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¿Qué progresos, preguntas, he hecho? He empezado a ser un amigo para mí mismo.",
    "Autor": "Seneca",
    "Día": 223,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¿Qué es más duro que la roca? ¿Qué es más blando que el agua? Sin embargo, ¿las rocas duras son excavadas por el agua blanda?",
    "Autor": "Seneca",
    "Día": 224,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¿De qué te sirve ir al extranjero, trasladarte de ciudad en ciudad? Si realmente quieres escapar de las cosas que te acosan, lo que necesitas no es estar en un lugar diferente sino ser una persona diferente.",
    "Autor": "Seneca",
    "Día": 225,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No ponemos a prueba aquellas cosas que nos causan miedo; no los examinamos; palidecemos y retrocedemos como soldados que se ven obligados a abandonar su campamento a causa de una nube de polvo levantada por una estampida de ganado, o que se sienten presa del pánico ante la difusión de algún rumor no autenticado.",
    "Autor": "Seneca",
    "Día": 226,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nos equivocamos cuando esperamos la muerte; La mayor parte de la muerte ya ha pasado. Los años que quedan detrás de nosotros están en manos de la muerte.",
    "Autor": "Seneca",
    "Día": 227,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Somos miembros de un gran cuerpo, plantado por la naturaleza…. Debemos considerar que nacimos para el bien del todo.",
    "Autor": "Seneca",
    "Día": 228,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Sólo la virtud posee moderación; los males que afligen la mente no admiten moderación.",
    "Autor": "Seneca",
    "Día": 229,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Hasta que no empezamos a prescindir de ellos, no nos damos cuenta de lo innecesarias que son muchas cosas. Los hemos estado usando no porque los necesitáramos sino porque los teníamos.",
    "Autor": "Seneca",
    "Día": 230,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Desafortunadamente, las actividades motivadas por el miedo siempre fracasan a largo plazo.",
    "Autor": "Seneca",
    "Día": 231,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Desdichado es aquel que se cree desafortunado.",
    "Autor": "Seneca",
    "Día": 232,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En nuestra creación se combinan dos elementos, el cuerpo, que tenemos en común con las bestias; y la razón y el buen juicio, que compartimos con los dioses.",
    "Autor": "Epictetus",
    "Día": 233,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La verdad muchas veces daña a quien la desentierra.",
    "Autor": "Seneca",
    "Día": 234,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La verdadera felicidad es... disfrutar el presente, sin depender ansiosamente del futuro.",
    "Autor": "Seneca",
    "Día": 235,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Hoy me liberé de los problemas. O mejor dicho, lo borré, porque mi problema fue causado por mi opinión sobre las cosas, así que cambié la historia que me estaba contando.",
    "Autor": "Marcus Aurelius",
    "Día": 236,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Convivir con la multitud es perjudicial; no hay persona que no nos haga atractivo algún vicio, o nos lo imprima, o no nos manche inconscientemente con él. Ciertamente, cuanto mayor sea la multitud con la que nos mezclamos, mayor será el peligro.",
    "Autor": "Seneca",
    "Día": 237,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Estar en todas partes es no estar en ninguna parte.",
    "Autor": "Seneca",
    "Día": 238,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Los tiempos alivian del dolor a los necios, pero la razón alivia a los sabios”",
    "Autor": "Epictetus",
    "Día": 239,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El tiempo es como un río formado por los acontecimientos que suceden y una corriente violenta; porque tan pronto como se ve una cosa, se la lleva, y otra viene en su lugar, y ésta también será arrebatada.",
    "Autor": "Marcus Aurelius",
    "Día": 240,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Aquellos que olvidan el pasado, ignoran el presente y temen por el futuro tienen una vida muy breve y llena de ansiedad.",
    "Autor": "Seneca",
    "Día": 241,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La vida no es ni un Bien ni un Mal; es simplemente el lugar donde existen el bien y el mal.",
    "Autor": "Seneca",
    "Día": 242,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Pierden el día esperando la noche, y la noche por miedo al amanecer.",
    "Autor": "Seneca",
    "Día": 243,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Siempre habrá motivos de ansiedad, ya sea por prosperidad o por miseria. La vida será impulsada por una sucesión de preocupaciones: siempre añoraremos el ocio, pero nunca lo disfrutaremos.",
    "Autor": "Seneca",
    "Día": 244,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No hay nada más inspirador que un orador que deja claro a su audiencia que los necesita.",
    "Autor": "Epictetus",
    "Día": 245,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No hay nada en el mundo más admirado que un hombre que sabe soportar la infelicidad con valentía.",
    "Autor": "Seneca",
    "Día": 246,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No hay necesidad de levantar las manos al cielo; no hay necesidad de implorar al guardián del templo que nos permita acercarnos al oído de alguna imagen tallada, como si esto aumentara las posibilidades de ser escuchados. Dios está cerca de ti, está contigo, está dentro de ti.",
    "Autor": "Seneca",
    "Día": 247,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No hay viento favorable para el marinero que no sabe adónde ir",
    "Autor": "Seneca",
    "Día": 248,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Sólo hay una cadena que nos mantiene encadenados: nuestro amor a la vida.",
    "Autor": "Seneca",
    "Día": 249,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El mundo se vuelve para dejar pasar a cualquier hombre que sepa adónde va.",
    "Autor": "Epictetus",
    "Día": 250,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Los dos poderes que, en mi opinión, constituyen un hombre sabio son el de soportar y el de soportar.",
    "Autor": "Epictetus",
    "Día": 251,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El camino más corto hacia la riqueza es el desprecio de la riqueza.",
    "Autor": "Seneca",
    "Día": 252,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En mi opinión, el principal indicio de una mente bien ordenada es la capacidad de un hombre para permanecer en un lugar y permanecer en su propia compañía. Ser",
    "Autor": "Seneca",
    "Día": 253,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La parte de la vida que realmente vivimos es pequeña.' Porque el resto de la existencia no es vida, sino simplemente tiempo.",
    "Autor": "Seneca",
    "Día": 254,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El único puerto a salvo de las furiosas tormentas de esta vida es el desprecio del futuro, una postura firme, la disposición a recibir los proyectiles de la Fortuna de lleno en el pecho, sin esconderse ni dar la espalda.",
    "Autor": "Seneca",
    "Día": 255,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cuantas más cosas examinas a la luz de la razón, más fuerte se vuelve tu razón, del mismo modo que echar más leña al fuego hace que arda más brillantemente y más alto.",
    "Autor": "Marcus Aurelius",
    "Día": 256,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La mente que está ansiosa por los acontecimientos futuros es miserable.",
    "Autor": "Seneca",
    "Día": 257,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La vida feliz es una vida que está en armonía con su propia naturaleza.",
    "Autor": "Seneca",
    "Día": 258,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La primera tarea de la persona que desea vivir sabiamente es liberarse de los confines del ensimismamiento.",
    "Autor": "Epictetus",
    "Día": 259,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La esencia de la filosofía es que un hombre debe vivir de tal manera que su felicidad dependa lo menos posible de cosas externas.",
    "Autor": "Epictetus",
    "Día": 260,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Toma el camino más corto, el que la naturaleza planeó: hablar y actuar de la manera más saludable. Haz eso y libérate del dolor y el estrés, libre de todo cálculo y pretensión.",
    "Autor": "Marcus Aurelius",
    "Día": 261,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Dejen de impedir que los filósofos posean dinero; nadie ha condenado la sabiduría a la pobreza. Despreciaré todo lo que está en el dominio de la Fortuna, pero si se me ofrece la opción, elegiré la mejor mitad.",
    "Autor": "Seneca",
    "Día": 262,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "A veces te levantas de la cama por la mañana y piensas: No voy a lograrlo, pero te ríes por dentro, recordando todas las veces que te has sentido así.",
    "Autor": "Charles Bukowski",
    "Día": 263,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "A veces incluso vivir es un acto de valentía.",
    "Autor": "Seneca",
    "Día": 264,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Una vida suave nos impone el castigo de la debilidad; dejamos de poder hacer las cosas que durante mucho tiempo hemos estado renuentes a hacer.",
    "Autor": "Seneca",
    "Día": 265,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Así que no debéis pensar que un hombre ha vivido mucho porque tiene el pelo blanco y arrugas: no ha vivido mucho, simplemente existió mucho. Porque supongamos que usted pensara que un hombre que había realizado un largo viaje y había sido atrapado en una tormenta furiosa al salir del puerto, y llevado de aquí para allá y llevado en círculos por los furiosos vientos opuestos. No tuvo un viaje largo, sólo un largo viaje.",
    "Autor": "Seneca",
    "Día": 266,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Del mismo modo, un suelo demasiado rico hace que el grano se caiga, las ramas se rompen bajo una carga demasiado pesada y una productividad excesiva no hace que los frutos maduren.",
    "Autor": "Seneca",
    "Día": 267,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Mira que pronto todo se olvida, y mira el caos del tiempo infinito a cada lado del [presente], y el vacío de los aplausos, y la variabilidad y falta de juicio de quienes pretenden dar alabanzas, y la estrechez de los espacio dentro del cual está circunscrito [y callar por fin]. Porque toda la tierra es un punto, y ¡qué pequeño!",
    "Autor": "Marcus Aurelius",
    "Día": 268,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Recuerde que usted es un actor en un drama del tipo que el autor elige; si es breve, entonces será breve; si es largo, entonces en uno largo. Si a él le agrada que representes a un hombre pobre, procura hacerlo bien; o un lisiado, o un gobernante, o un ciudadano privado. Porque esto es asunto tuyo, hacer bien la parte dada; pero elegirlo, es de otro",
    "Autor": "Epictetus",
    "Día": 269,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Recuerda cuánto tiempo has estado posponiendo estas cosas y cuántas veces has recibido una oportunidad de los dioses y, sin embargo, no la aprovechas. Ahora debes por fin percibir de qué universo eres parte, y de qué administrador del universo fluye tu existencia, y que se te ha fijado un límite de tiempo, que si no utilizas para despejar las nubes de tu mente , se irá y tú irás, y nunca volverá.",
    "Autor": "Marcus Aurelius",
    "Día": 270,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La preparación adecuada para el futuro consiste en formar buenos hábitos personales.",
    "Autor": "Epictetus",
    "Día": 271,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nuestro universo es un asunto lamentable a menos que tenga algo que investigar para cada época.",
    "Autor": "Seneca",
    "Día": 272,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nuestra alma es a veces un rey, a veces un tirano. Un alma descontrolada y demasiado mimada pasa de ser un rey a convertirse en el tirano más temido.",
    "Autor": "Seneca",
    "Día": 273,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nuestra falta de confianza no es el resultado de la dificultad. La dificultad proviene de nuestra falta de confianza.",
    "Autor": "Seneca",
    "Día": 274,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Sólo una mente profundamente conmovida puede pronunciar algo noble y más allá del poder de los demás.",
    "Autor": "Seneca",
    "Día": 275,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nada es pesado si uno lo acepta con el corazón alegre, y nada necesita provocar la ira si uno no aumenta el montón de problemas enojándose.",
    "Autor": "Seneca",
    "Día": 276,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Ningún hombre fue sabio por casualidad.",
    "Autor": "Seneca",
    "Día": 277,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Ningún hombre es bueno por casualidad. La virtud es algo que se debe aprender.",
    "Autor": "Seneca",
    "Día": 278,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Nadie es aplastado por la desgracia a menos que primero haya sido engañado por la prosperidad.",
    "Autor": "Seneca",
    "Día": 279,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Ningún hombre ha escapado a pagar la pena por haber nacido.",
    "Autor": "Seneca",
    "Día": 280,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No hay diferencia entre aquí y allá: la ciudad en la que vives es el mundo.",
    "Autor": "Marcus Aurelius",
    "Día": 281,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Más poderoso es aquel que se tiene a sí mismo en su propio poder.",
    "Autor": "Seneca",
    "Día": 282,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "A los hombres no les importa cuán noblemente vivan, sino sólo por cuánto tiempo, aunque está al alcance de todo hombre vivir noblemente, pero de nadie está al alcance de vivir mucho tiempo.",
    "Autor": "Seneca",
    "Día": 283,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Los hombres son tacaños a la hora de mantener el control de sus fortunas, pero cuando se trata de perder el tiempo, son absolutamente extravagantes en el único ámbito en el que es un honor ser avaros.",
    "Autor": "Seneca",
    "Día": 284,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Hacer el mejor uso de lo que está en nuestro poder, y tratar lo demás conforme a su naturaleza. ¿Y cuál es su naturaleza? Como quiera que Dios decida.",
    "Autor": "Epictetus",
    "Día": 285,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El amor a veces hiere. La amistad siempre beneficia.",
    "Autor": "Seneca",
    "Día": 286,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Miren a aquellos cuya buena fortuna la gente se reúne para ver: están ahogados por sus propias bendiciones. ¡Cuántos consideran que sus riquezas son una carga! ¡A cuántos les revientan los vasos sanguíneos con su elocuencia y su esfuerzo diario por mostrar sus talentos!",
    "Autor": "Seneca",
    "Día": 287,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La vida es como una obra de teatro. Lo que importa no es la duración sino la excelencia de la actuación.",
    "Autor": "Seneca the Younger",
    "Día": 288,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La vida, si sabes usarla, es larga; pero... muchos, sin seguir ningún objetivo fijo, cambiantes y... insatisfechos, se ven sumergidos por su inconstancia en planes siempre nuevos; algunos no tienen ningún principio fijo por el cual dirigir su curso.",
    "Autor": "Seneca",
    "Día": 289,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La vida es esclavitud si falta el coraje de morir.",
    "Autor": "Seneca",
    "Día": 290,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La vida se divide en tres partes: lo que fue, lo que es y lo que será. De estos tres períodos, el presente es corto, el futuro es dudoso y sólo el pasado es seguro.",
    "Autor": "Seneca",
    "Día": 291,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La vida es una pieza musical y se supone que debes estar bailando.",
    "Autor": "Epictetus",
    "Día": 292,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Disfrutemos de lo que hemos recibido y no hagamos comparación; Ningún hombre será jamás feliz si es torturado por la mayor felicidad de otro.",
    "Autor": "Seneca",
    "Día": 293,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Deja que el dios que está dentro de ti sea el campeón del ser que eres.",
    "Autor": "Marcus Aurelius",
    "Día": 294,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Lo mismo que ocurre con la narración de historias, también ocurre con la vida: es importante qué tan bien se hace, no cuánto tiempo.",
    "Autor": "Seneca",
    "Día": 295,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No son los años ni los días, sino la mente, la que determina que hemos vivido lo suficiente.",
    "Autor": "Seneca",
    "Día": 296,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Se necesita toda la vida para aprender a vivir y, lo que tal vez te haga dudar más, se necesita toda la vida para aprender a morir.",
    "Autor": "Seneca",
    "Día": 297,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Se necesita algo más que un cuerpo atractivo. Tienes que tener el corazón y el alma para hacerlo.",
    "Autor": "Epictetus",
    "Día": 298,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Debería preocuparnos no tanto de vivir una vida larga como de una vida satisfactoria.",
    "Autor": "Seneca",
    "Día": 299,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Es incierto dónde os esperará la Muerte;\nlo esperan en todas partes.",
    "Autor": "Seneca",
    "Día": 300,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Es signo de una mente débil el no poder soportar la riqueza.",
    "Autor": "Seneca",
    "Día": 301,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Lo que importa no es lo que soportas, sino cómo lo soportas.",
    "Autor": "Seneca",
    "Día": 302,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No es quien os insulta o golpea quien os insulta, sino vuestra opinión de que estas cosas son insultantes.",
    "Autor": "Epictetus",
    "Día": 303,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No es porque las cosas sean difíciles que no nos atrevemos, es porque no nos atrevemos que son difíciles",
    "Autor": "Seneca",
    "Día": 304,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Es en tiempos de seguridad cuando el espíritu debe prepararse para los tiempos difíciles; mientras la fortuna le concede favores, es tiempo de que se fortalezca contra sus desaires.",
    "Autor": "Seneca",
    "Día": 305,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No está en el poder de ningún hombre tener lo que quiere, pero sí está en su poder no desear lo que no tiene y aprovechar con alegría las cosas que se le presentan.",
    "Autor": "Seneca",
    "Día": 306,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Es imposible empezar a aprender lo que uno cree que ya sabe.",
    "Autor": "Epictetus",
    "Día": 307,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Es un camino difícil que conduce a las alturas de la grandeza.",
    "Autor": "Seneca",
    "Día": 308,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No importa cuántos libros tengas, sino qué tan buenos sean los libros que tengas.",
    "Autor": "Seneca",
    "Día": 309,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En las cenizas todos los hombres son arrasados. Nacemos desiguales, morimos iguales.",
    "Autor": "Seneca",
    "Día": 310,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si deseas ser amado, ama.",
    "Autor": "Seneca",
    "Día": 311,
    "Favorita": "No",
    "Cita de hoy": "Yes"
  },
  {
    "Cita": "Si quieres ser escritor, escribe.",
    "Autor": "Epictetus",
    "Día": 312,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si sufres angustia por alguna causa externa, no es la cosa en sí la que te preocupa sino tu juicio sobre ello, y está en tu poder cancelar ese juicio en cualquier momento.",
    "Autor": "Marcus Aurelius",
    "Día": 313,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si realmente quieres escapar de las cosas que te acosan, lo que necesitas no es estar en un lugar diferente sino ser una persona diferente.",
    "Autor": "Seneca",
    "Día": 314,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si consideras la riqueza como algo que hay que valorar, siempre creerás que te faltan las cosas que necesitas en la medida en que estés a la zaga de lo que otros tienen.",
    "Autor": "Seneca",
    "Día": 315,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si vives según la naturaleza, nunca serás pobre; si vives según la opinión, nunca serás rico”. Las necesidades de la naturaleza son leves; las exigencias de la opinión son ilimitadas.",
    "Autor": "Seneca",
    "Día": 316,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si sabes que tienes razón, ¿por qué temer a quienes te juzgan mal?",
    "Autor": "Epictetus",
    "Día": 317,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si descubres, después de haber viajado mucho, que siempre hay a la vista una meta más lejana, puedes estar seguro de que esta condición es contraria a la naturaleza.",
    "Autor": "Seneca",
    "Día": 318,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si te das cuenta de que actúas para impresionar a los demás o evitas actuar por miedo a lo que puedan pensar, has abandonado el camino.",
    "Autor": "Epictetus",
    "Día": 319,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si deseas ser bueno, comienza por creer que eres malo.",
    "Autor": "Epictetus",
    "Día": 320,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si los demás te elogian, sé escéptico contigo mismo. Porque no es tarea fácil aferrarse a la armonía interior mientras se reciben elogios. Cuando agarras uno, es probable que dejes caer el otro.",
    "Autor": "Epictetus",
    "Día": 321,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si me ofrecieran sabiduría con la única condición de mantenerla cerrada y no divulgarla a nadie, la rechazaría. No se puede disfrutar de la posesión de nada valioso a menos que uno tenga con quién compartirlo.",
    "Autor": "Seneca",
    "Día": 322,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si tu hermano te hace daño, recuerda no tanto su maldad, sino más que nunca que es tu hermano.",
    "Autor": "Epictetus",
    "Día": 323,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si algo te resulta difícil de realizar, no lo creas imposible para ningún ser humano; más bien, si es humanamente posible y corresponde a la naturaleza humana, sabed que también vosotros lo podéis alcanzar.",
    "Autor": "Marcus Aurelius",
    "Día": 324,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si la razón te dice que un placer es saludable e inofensivo, puedes disfrutarlo con moderación. Pero tenga cuidado de no dejar que su felicidad gradualmente dependa de ello.",
    "Autor": "Epictetus",
    "Día": 325,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si Dios se complace en agregar otro día, debemos recibirlo con corazones alegres.",
    "Autor": "Seneca",
    "Día": 326,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si se habla mal de ti y es verdad, corrígete; si es mentira, ríete de ello.",
    "Autor": "Epictetus",
    "Día": 327,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Me imagino que muchas personas podrían haber alcanzado la sabiduría si no hubieran imaginado que ya la habían alcanzado, si no hubieran disimulado sobre algunas de sus propias características y hecho la vista gorda ante los demás.",
    "Autor": "Seneca",
    "Día": 328,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Las vidas humanas son breves y triviales. Ayer una gota de semen; mañana líquido de embalsamamiento, ceniza. Pasar por esta breve vida como exige la naturaleza. Renunciarlo sin quejarse. Como una aceituna que madura y cae. Alabando a su madre, agradeciendo al árbol en el que creció.",
    "Autor": "Marcus Aurelius",
    "Día": 329,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Por mucho que poseas, hay alguien que tiene más, y te imaginarás que te faltan las cosas que necesitas hasta el punto de quedar rezagado con respecto a él.",
    "Autor": "Seneca",
    "Día": 330,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Qué cruel: prohibir a la gente querer lo que creen que es bueno para ellos. Y, sin embargo, eso es precisamente lo que no les permitirás hacer cuando te enojes por su mal comportamiento. Se sienten atraídos por lo que creen que es bueno para ellos. —Pero no es bueno para ellos. Entonces muéstrales eso. Demostrárselo. En lugar de perder los estribos.",
    "Autor": "Marcus Aurelius",
    "Día": 331,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Es un hombre sabio que no se lamenta por las cosas que no tiene, sino que se alegra por las que tiene.",
    "Autor": "Epictetus",
    "Día": 332,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¡Feliz el hombre que puede mejorar a los demás, no sólo cuando está en su compañía, sino incluso cuando está en sus pensamientos!",
    "Autor": "Seneca",
    "Día": 333,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La felicidad se confunde comúnmente con el placer o el ocio experimentado pasivamente. Esa concepción de la felicidad es buena sólo en la medida en que llega. El único objeto digno de todos nuestros esfuerzos es una vida floreciente. La verdadera felicidad es un verbo. Es la realización dinámica continua de acciones dignas. La vida floreciente, cuyo fundamento es la intención virtuosa, es algo que improvisamos continuamente y, al hacerlo, nuestra alma madura. Nuestra vida es útil para nosotros mismos y para las personas que tocamos.",
    "Autor": "Epictetus",
    "Día": 334,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La avaricia no se satisface con nada, pero la naturaleza encuentra satisfacción incluso en escasa medida.",
    "Autor": "Seneca",
    "Día": 335,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Porque esa virtud franca y sencilla se ha trocado en conocimiento oculto y astuto; Nos enseñan a debatir, no a vivir.",
    "Autor": "Seneca",
    "Día": 336,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El fuego es la prueba del oro, la adversidad de los hombres fuertes.",
    "Autor": "Seneca",
    "Día": 337,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Encuentre satisfacción al seguir su filosofía. Si quieres ser respetado, empieza por respetarte a ti mismo.",
    "Autor": "Epictetus",
    "Día": 338,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo lo que sucede sucede como debería, y si observas atentamente, encontrarás que así es.",
    "Autor": "Marcus Aurelius",
    "Día": 339,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo el mundo lleva su vida a toda prisa, preocupado por el anhelo del futuro y el cansancio del presente. Pero el hombre que dedica todo su tiempo a sus propias necesidades, que organiza cada día como si fuera el último, no anhela ni teme el día siguiente. ¿Qué nuevos placeres puede brindarle ahora cualquier hora?",
    "Autor": "Seneca",
    "Día": 340,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Adquirid cada día algo que os fortalezca contra la pobreza, contra la muerte y también contra otras desgracias; y después de haber repasado muchos pensamientos, seleccione uno para digerirlo completamente ese día.",
    "Autor": "Seneca",
    "Día": 341,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No pierdas el resto de tu tiempo aquí preocupándote por\notras personas, a menos que afecte el bien común. Va a\nimpedirle hacer algo útil. tu también lo estarás\npreocupado por lo que fulano de tal está haciendo, y por qué, y\nlo que dicen, lo que piensan y lo que\nestán haciendo, y todas las otras cosas que te desconciertan y\nevitar que te concentres en tu propia mente.",
    "Autor": "Marcus Aurelius",
    "Día": 342,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "No te dejes abrumar por lo que imaginas, simplemente haz lo que puedas y debas.",
    "Autor": "Marcus Aurelius",
    "Día": 343,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¿Te das cuenta de que estás despierto?",
    "Autor": "Epictetus",
    "Día": 343,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La perturbación viene sólo desde dentro, desde nuestras propias percepciones. Todo lo que ves pronto se alterará y dejará de existir.",
    "Autor": "Marcus Aurelius",
    "Día": 344,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "La muerte es un cese de las impresiones a través de los sentidos, y del movimiento de los hilos que mueven los apetitos, y de los movimientos discursivos de los pensamientos, y del servicio a la carne.",
    "Autor": "Marcus Aurelius",
    "Día": 345,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Consideremos cómo aplicamos la idea de libertad a los animales. Hay leones domesticados que la gente enjaula, cría, alimenta y lleva consigo a dondequiera que vaya. Sin embargo, ¿quién podrá llamar libre a un león así? Cuanto más fácil es su vida, más servil es. Ningún león dotado de razón y discreción elegiría ser uno de estos ejemplares mascota.",
    "Autor": "Epictetus",
    "Día": 346,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Elija no sufrir daño y no se sentirá perjudicado.",
    "Autor": "Marcus Aurelius",
    "Día": 347,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Cambio: nada inherentemente malo en el proceso, nada inherentemente bueno en el resultado.",
    "Autor": "Marcus Aurelius",
    "Día": 348,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Al sobrecargar el cuerpo con comida estrangulas el alma y la vuelves menos activa.",
    "Autor": "Seneca",
    "Día": 349,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Pero viajar no te hará un hombre mejor ni más cuerdo. Para ello debemos dedicar tiempo al estudio y a los escritos de los sabios, para aprender las verdades que han surgido de sus investigaciones y continuar nosotros mismos la búsqueda de las respuestas que aún no han sido descubiertas. Éste es el camino para liberar el espíritu que aún necesita ser rescatado de su miserable estado de esclavitud.",
    "Autor": "Seneca",
    "Día": 350,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Pero está en tu poder evitar la decepción, dirigiendo tus deseos hacia cosas que por derecho te corresponde obtener y controlar.",
    "Autor": "Epictetus",
    "Día": 351,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El gran drama de la existencia no es la muerte sino nunca haber comenzado a vivir.",
    "Autor": "Marcus Aurelius",
    "Día": 352,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En algún momento tienes que reconocer a qué mundo perteneces; qué poder lo gobierna y de qué fuente brotas; que hay un límite en el tiempo que te asignan, y si no lo usas para liberarte, se irá y nunca volverá",
    "Autor": "Marcus Aurelius",
    "Día": 353,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "En lo que a mí respecta, sé que no he perdido riquezas sino distracciones. Las necesidades del cuerpo son pocas: quiere estar libre del frío, desterrar el hambre y la sed con alimento; si anhelamos algo más, nos esforzamos por servir a nuestros vicios, no a nuestras necesidades.",
    "Autor": "Seneca",
    "Día": 353,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "¿Y por qué es tan difícil cuando las cosas van en tu contra? Si te lo impone la naturaleza, acéptalo con gusto y deja de luchar contra él. Y si no, descubre lo que requiere tu propia naturaleza y apunta a ello, incluso si no te reporta gloria.",
    "Autor": "Marcus Aurelius",
    "Día": 354,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Y, en efecto, quien persigue el placer como un bien y evita el dolor como un mal, es culpable de impiedad.",
    "Autor": "Marcus Aurelius",
    "Día": 355,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Y aquí hay dos de los pensamientos más útiles en los que profundizará. Primero, que las cosas no pueden tocar la mente: son externas e inertes; las ansiedades sólo pueden provenir de tu juicio interno. En segundo lugar, que todas estas cosas que ves cambiarán casi cuando las mires, y luego dejarán de existir. Recuerda constantemente todo lo que tú mismo ya has visto cambiado. El universo es cambio: la vida es juicio.",
    "Autor": "Marcus Aurelius",
    "Día": 356,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Y a él no le importan en absoluto sus elogios: hombres que ni siquiera pueden cumplir con sus propios estándares.",
    "Autor": "Marcus Aurelius",
    "Día": 357,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todo lo que está por venir está en la incertidumbre; ¡vive de inmediato!",
    "Autor": "Seneca",
    "Día": 358,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Todas las religiones deben ser toleradas... porque cada hombre debe llegar al cielo a su manera.",
    "Autor": "Epictetus",
    "Día": 359,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Admira a quienes intentan grandes cosas, aunque fracasen.",
    "Autor": "Seneca",
    "Día": 360,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Un hombre sabio nunca pregunta para qué sirve otro hombre, porque sólo sus acciones dirán la verdad.",
    "Autor": "Seneca",
    "Día": 361,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Un gobernador prudente no se opondrá bruscamente ni siquiera a las supersticiones de su pueblo; y aunque desee que sean más sabios, sabrá que no puede hacerlos ofendiendo sus prejuicios.",
    "Autor": "Marcus Aurelius",
    "Día": 362,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Un buen hombre se deleita en recibir consejos: todos los peores hombres son los más impacientes por recibir orientación.",
    "Autor": "Seneca",
    "Día": 363,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Vivir una buena vida: tenemos el potencial para ello. Si podemos aprender a ser indiferentes ante lo que no hace diferencia.",
    "Autor": "Marcus Aurelius",
    "Día": 364,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "Si quieres mejorar, confórmate con que te consideren tonto y estúpido.",
    "Autor": "Epitectus",
    "Día": 365,
    "Favorita": "No",
    "Cita de hoy": "No"
  },
  {
    "Cita": "El tiempo perdido nunca se vuelve a encontrar.",
    "Autor": "Benjamin Franklin",
    "Día": 366,
    "Favorita": "No",
    "Cita de hoy": "No"
  }
]

// Generador de números pseudoaleatorios basado en semilla
function customSeedRandom(seed) {
  let current = hashCode(seed);
  const a = 1664525;
  const c = 1013904223;
  const m = Math.pow(2, 32);

  return function() {
    current = (a * current + c) % m;
    return current / m;
  };
}

// Función auxiliar para convertir el string de semilla en un hash numérico
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

const getAQuote = (seed="test") => {
  const randomGenerator = customSeedRandom("test");
  const index = Math.floor(randomGenerator() * quotes.length);
  const selectedQuote = quotes[index];
  return {
    quote:  selectedQuote.Cita.endsWith('.') ? selectedQuote.Cita : selectedQuote.Cita + '.',
    author: selectedQuote.Autor
  }
}

// Crear la aplicación Hono
const app = new Hono();

app.use('*', cors({
  origin: '*', 
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Ruta de la API para obtener una cita diaria
app.get("/json/:seed", (c) => {
  const seed = c.req.param("seed") || "test";
  const {quote, author} =  getAQuote(seed);

  return c.json({
    quote,
    author,
  });
});

app.get("/:seed", (c) => {
  const seed = c.req.param("seed") || "test";
  const {quote, author} =  getAQuote(seed);
  return c.text(`${quote} ${selectedQuote.Autor}`);
});

app.get("/", (c) => {
  const {quote, author} =  getAQuote("test");
  return c.text(`${quote} ${author}`);
});

// Iniciar el servidor
serve(app.fetch);
console.log("Up > http://localhost:8000");

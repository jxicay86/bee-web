const WHATSAPP_URL =
  "https://wa.me/50254170024?text=Hola%20Lourdes%2C%20quiero%20comenzar%20mi%20proceso%20en%20BEE.";
const TEST_URL = "#test";
const COLMENA_URL = "#colmena";
const INSTAGRAM_URL = "https://instagram.com/psicologa.lusolares";
const FACEBOOK_URL = "#facebook";

function BtnPrimario({ texto = "Quiero comenzar", href = WHATSAPP_URL }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-coral px-8 py-3.5 font-body text-base font-semibold text-purpura transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-coral/60"
    >
      {texto}
    </a>
  );
}

function BtnSecundario({
  texto = "Haz el test",
  href = TEST_URL,
}: {
  texto?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-purpura px-8 py-3 font-body text-base font-semibold text-purpura transition hover:bg-purpura hover:text-white focus:outline-none focus:ring-2 focus:ring-purpura/40"
    >
      {texto}
    </a>
  );
}

/* ─── NAV ─── */
function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-crema/90 backdrop-blur-md border-b border-lavanda/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#portada" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-purpura tracking-wide">
            BEE
          </span>
          <span className="hidden sm:inline font-body text-xs text-purpura/70 tracking-widest uppercase">
            Bien Estar Emocional
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6 font-body text-sm text-purpura/80">
          <a href="#reconocimiento" className="hover:text-purpura transition">Te reconoces</a>
          <a href="#lourdes" className="hover:text-purpura transition">Lourdes</a>
          <a href="#ser" className="hover:text-purpura transition">SER en BEE</a>
          <a href="#preguntas" className="hover:text-purpura transition">Preguntas</a>
        </div>
        <BtnPrimario />
      </div>
    </nav>
  );
}

/* ─── 1 · PORTADA ─── */
function Portada() {
  return (
    <section
      id="portada"
      className="relative flex min-h-screen items-center bg-crema pt-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl leading-snug font-semibold text-purpura sm:text-5xl sm:leading-tight">
            ¿Y si el cansancio que llevas no fuera porque eres débil… sino
            porque llevas demasiado tiempo sosteniendo a todos?
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-purpura/80">
            En BEE encontrarás un espacio para comprender lo que te sucede y
            comenzar a sostenerte a ti. Sesiones en línea y en español, estés
            donde estés.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BtnPrimario />
            <BtnSecundario texto="Haz el test: ¿cuánto estás sosteniendo?" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-80 w-80 rounded-2xl bg-lavanda/30 flex items-center justify-center text-purpura/40 font-body text-sm">
            Fotografía profesional de Lourdes
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 2 · RECONOCIMIENTO ─── */
function Reconocimiento() {
  const situaciones = [
    "Estoy cansada.",
    "No tengo tiempo para mí.",
    "Me cuesta decir que no.",
    "Me siento culpable cuando hago algo por mí.",
    "Siento que si dejo de hacerlo, todo se desordena.",
    "Puedo con todos, pero no sé quién puede conmigo.",
  ];

  return (
    <section id="reconocimiento" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold text-purpura sm:text-4xl">
          Tal vez estás cansada… pero no sabes exactamente de qué.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {situaciones.map((s) => (
            <div
              key={s}
              className="rounded-xl bg-crema px-6 py-5 font-body text-purpura/90 text-left"
            >
              {s}
            </div>
          ))}
        </div>

        <blockquote className="mt-14 border-l-4 border-lavanda pl-6 text-left font-heading text-xl italic text-purpura sm:text-2xl">
          Quizá no estás cansada solamente de hacer. Quizá estás cansada de
          sostener.
        </blockquote>
        <p className="mt-6 font-body text-purpura/80 text-left leading-relaxed">
          En BEE la llamamos <strong>Agatha</strong>: la mujer que aprendió a
          ser buena para no ser un problema… y hoy sostiene a todos, menos a sí
          misma. Si te reconociste, no estás sola.
        </p>

        <div className="mt-10">
          <BtnSecundario />
        </div>
      </div>
    </section>
  );
}

/* ─── 3 · DIFERENCIA ─── */
function Diferencia() {
  const filas = [
    ["Ser buena", "Callar"],
    ["Resolver", "Ceder"],
    ["No molestar", "Postergarte"],
    ["No pedir demasiado", "No poner límites"],
    ["Mantener la paz", "Sentirte responsable por otros"],
    ["Estar para todos", "Resolver sola"],
    ["No decepcionar", "Sentirte culpable al elegirte"],
  ];

  return (
    <section id="diferencia" className="bg-crema py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-purpura text-center sm:text-4xl">
          Tal vez llevas años intentando resolver el cansancio sin mirar de
          dónde viene.
        </h2>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purpura text-white">
                <th className="px-6 py-3 text-left font-body text-sm font-semibold">
                  Lo que aprendiste
                </th>
                <th className="px-6 py-3 text-left font-body text-sm font-semibold">
                  Y lo que eso puede haber significado
                </th>
              </tr>
            </thead>
            <tbody>
              {filas.map(([a, s], i) => (
                <tr
                  key={a}
                  className={i % 2 === 0 ? "bg-white" : "bg-lavanda/15"}
                >
                  <td className="px-6 py-3 font-body text-purpura">{a}</td>
                  <td className="px-6 py-3 font-body text-purpura/80">{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <blockquote className="mt-14 border-l-4 border-coral pl-6 font-heading text-xl italic text-purpura sm:text-2xl">
          BEE no busca enseñarte a sostener más. Busca ayudarte a comprender
          por qué aprendiste a sostenerlo todo.
        </blockquote>
      </div>
    </section>
  );
}

/* ─── 4 · MIRADA BEE ─── */
function MiradaBee() {
  return (
    <section id="mirada" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold text-purpura sm:text-4xl">
          En BEE vemos y comprendemos a la persona como un ser integral.
        </h2>

        <p className="mt-8 font-body text-lg leading-relaxed text-purpura/80">
          Aquello que hoy vive no aparece aislado. Hay una historia. Hay
          emociones. Hay pensamientos. Hay relaciones. Hay aprendizajes. Hay
          maneras de responder ante la vida. Y hay formas de relacionarse
          consigo misma.
        </p>

        <blockquote className="mx-auto mt-12 max-w-xl border-l-4 border-lavanda pl-6 text-left font-heading text-xl italic text-purpura sm:text-2xl">
          No queremos quedarnos únicamente con lo que hoy te duele. Queremos
          comprender qué sostiene aquello que hoy estás viviendo.
        </blockquote>

        <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-crema p-8">
          <p className="font-heading text-xl text-purpura sm:text-2xl leading-relaxed">
            No se trata de dejar de sostener a quienes amas. Se trata de
            aprender a <strong>no abandonarte</strong> mientras los sostienes.
          </p>
        </div>

        <p className="mt-8 font-body text-purpura/70 italic">
          Cada historia es diferente. Por eso en BEE buscamos comprender a la
          persona y su historia de manera integral.
        </p>
      </div>
    </section>
  );
}

/* ─── 5 · LOURDES ─── */
function Lourdes() {
  return (
    <section id="lourdes" className="bg-crema py-24">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="flex justify-center">
          <div className="h-96 w-80 rounded-2xl bg-lavanda/30 flex items-center justify-center text-purpura/40 font-body text-sm">
            Fotografía de Lourdes
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-semibold text-purpura sm:text-4xl">
            Lourdes Solares
          </h2>
          <p className="mt-2 font-body text-sm text-purpura/60 tracking-wide uppercase">
            Psicóloga clínica · Creadora de BEE
          </p>

          <p className="mt-6 font-body leading-relaxed text-purpura/80">
            He acompañado a mujeres que durante años creyeron que su cansancio
            era normal, que sentir culpa por cuidarse era parte de ser buena
            madre, buena hija, buena esposa. BEE nació de esas historias: del
            patrón que vi repetirse y de la certeza de que comprender de dónde
            viene lo que vivimos es el primer paso para dejar de repetirlo.
          </p>
          <p className="mt-4 font-body leading-relaxed text-purpura/80">
            Mi manera de acompañar es cercana, respetuosa y profunda. No doy
            recetas. Camino contigo mientras descubrimos juntas aquello que tu
            historia necesita que comprendas.
          </p>

          <div className="mt-6 rounded-xl bg-white p-5">
            <p className="font-body text-sm text-purpura/70">
              Más de 11 años como psicóloga clínica · Colegiada activa No. 6498
              del Colegio de Psicólogos de Guatemala
            </p>
          </div>

          <div className="mt-8">
            <BtnPrimario texto="Quiero hablar con Lourdes" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 6 · SER EN BEE ─── */
function SerEnBee() {
  const pasos = [
    {
      letra: "S",
      titulo: "Sostenerte",
      desc: "Primero, mirarte y comprender lo que estás viviendo y de dónde viene.",
    },
    {
      letra: "E",
      titulo: "Elegirte",
      desc: "Reconocer tus necesidades, tus decisiones y tus límites, sin abandonar a los tuyos.",
    },
    {
      letra: "R",
      titulo: "Renacer",
      desc: "Construir una manera diferente de relacionarte contigo y con tu vida.",
    },
  ];

  return (
    <section id="ser" className="bg-purpura py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
          SER en BEE
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-white/70">
          Un camino en tres pasos para dejar de abandonarte mientras sostienes a
          otros.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {pasos.map((p) => (
            <div
              key={p.letra}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur"
            >
              <span className="font-heading text-5xl font-bold text-coral">
                {p.letra}
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold">
                {p.titulo}
              </h3>
              <p className="mt-3 font-body text-sm text-white/80 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl font-body text-white/80 italic leading-relaxed">
          El Programa SER en BEE son 15 sesiones en 3 meses, en línea y en
          español. Su destino: no abandonar a los que amas, tampoco seguir
          cargando con ellos; simplemente elegir amar desde la libertad.
        </p>
      </div>
    </section>
  );
}

/* ─── 7 · CÓMO TE ACOMPAÑO ─── */
function Acompanamiento() {
  const pasos = [
    {
      n: "1",
      titulo: "Me escribes por WhatsApp.",
      desc: "Conversamos con calma y resolvemos tus dudas.",
    },
    {
      n: "2",
      titulo: "Primera sesión.",
      desc: "Te escucho y vemos juntas si el programa es para ti. Tú decides.",
    },
    {
      n: "3",
      titulo: "Comprendemos tu historia,",
      desc: "no solo lo que hoy te duele.",
    },
    {
      n: "4",
      titulo: "Identificamos aquello que estás sosteniendo,",
      desc: "para reconocer patrones, necesidades y formas de responder.",
    },
    {
      n: "5",
      titulo: "Construyes nuevas maneras de relacionarte contigo,",
      desc: "sin exigirte convertirte en otra persona.",
    },
    {
      n: "6",
      titulo: "Comienzas a elegirte,",
      desc: 'desde mayor conciencia y libertad, y cierras tu proceso con tu plan personal "Me elijo".',
    },
  ];

  return (
    <section id="acompanamiento" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-heading text-3xl font-semibold text-purpura sm:text-4xl">
          Cómo te acompaño
        </h2>

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 h-full w-px bg-lavanda/50 sm:left-6" />
          <div className="space-y-10">
            {pasos.map((p) => (
              <div key={p.n} className="relative flex gap-5 sm:gap-7">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purpura font-heading text-lg font-bold text-white sm:h-12 sm:w-12">
                  {p.n}
                </div>
                <div className="pt-1">
                  <p className="font-body text-purpura">
                    <strong>{p.titulo}</strong> {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <BtnPrimario />
        </div>
      </div>
    </section>
  );
}

/* ─── 8 · TESTIMONIOS ─── */
function Testimonios() {
  return (
    <section id="testimonios" className="bg-crema py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold text-purpura sm:text-4xl">
          Otras mujeres han recorrido este camino
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {[
            "Antes sentía que tenía que resolverlo todo. Hoy sé que puedo elegir qué cargo y qué no.",
            "Aprendí a reconocer cosas que durante años había normalizado. No sabía que merecía más.",
            "Ahora puedo decir que no sin sentir que estoy haciendo algo malo. Eso cambió mi vida.",
          ].map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl bg-white p-8 text-left shadow-sm"
            >
              <div className="mb-4 text-4xl text-coral">&ldquo;</div>
              <p className="font-body text-purpura/80 italic leading-relaxed">
                {t}
              </p>
            </blockquote>
          ))}
        </div>
        <p className="mt-8 font-body text-xs text-purpura/50">
          Testimonios compartidos con autorización escrita. Se cuida la
          confidencialidad de cada paciente.
        </p>
      </div>
    </section>
  );
}

/* ─── 9 · PREGUNTAS FRECUENTES ─── */
function Preguntas() {
  const faqs = [
    {
      q: "¿BEE es para mí?",
      a: "Si sientes que sostienes a todos y te dejaste para el final, sí. Puedes empezar por el test.",
    },
    {
      q: "¿Tengo que estar pasando por una crisis para buscar ayuda?",
      a: "No. No tienes que esperar a no poder más.",
    },
    {
      q: "¿Cómo sé si lo que vivo tiene relación con mi historia?",
      a: "Eso es justo lo que comprendemos juntas, a tu ritmo.",
    },
    {
      q: "¿Ir al psicólogo es solo para quien está mal?",
      a: "Es para mujeres que quieren entenderse y vivir más tranquilas.",
    },
    {
      q: "¿Pedir ayuda es traicionar a mi familia?",
      a: "Al contrario: cuidarte también cuida a los tuyos.",
    },
    {
      q: "¿Las sesiones son presenciales o en línea?",
      a: "En línea y en español, desde tu casa, estés donde estés.",
    },
    {
      q: "¿Qué horarios hay si vivo en EE. UU.?",
      a: "Coordinamos tu horario por WhatsApp según tu zona.",
    },
    {
      q: "¿Cuánto dura el proceso?",
      a: "El Programa SER en BEE son 15 sesiones en 3 meses.",
    },
    {
      q: "¿Qué es SER en BEE?",
      a: "Un camino en tres pasos: Sostenerte, Elegirte y Renacer.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Te lo explico con claridad por WhatsApp, antes de que decidas.",
    },
    {
      q: "¿Cómo comienzo?",
      a: "Escríbeme por WhatsApp y agendamos tu primera sesión.",
    },
  ];

  return (
    <section id="preguntas" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-heading text-3xl font-semibold text-purpura sm:text-4xl">
          Preguntas frecuentes
        </h2>

        <div className="mt-14 divide-y divide-lavanda/30">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between font-body font-semibold text-purpura">
                {f.q}
                <span className="ml-4 text-xl text-lavanda transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 font-body text-purpura/75 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-14 text-center">
          <BtnPrimario />
        </div>
      </div>
    </section>
  );
}

/* ─── 10 · COMENZAR ─── */
function Comenzar() {
  return (
    <section id="comenzar" className="bg-crema py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="rounded-2xl bg-coral/10 p-10">
          <h2 className="font-heading text-2xl font-semibold text-purpura sm:text-3xl">
            Si llegaste hasta aquí, quizá algo de ti está pidiendo espacio.
          </h2>
          <p className="mt-6 font-body text-purpura/80 leading-relaxed">
            No tienes que tener todas las respuestas. No tienes que saber
            exactamente qué te pasa. Puedes comenzar simplemente hablando.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <BtnPrimario />
          <BtnSecundario />
        </div>

        <blockquote className="mx-auto mt-12 max-w-md border-l-4 border-purpura pl-6 text-left font-heading text-xl italic text-purpura">
          &ldquo;Me muevo hacia donde elijo.&rdquo;
        </blockquote>

        <p className="mt-10 font-body text-sm text-purpura/60">
          ¿Todavía no estás lista?{" "}
          <a
            href={COLMENA_URL}
            className="font-semibold text-purpura underline"
          >
            Únete a la Colmena BEE
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-purpura py-12 text-white/80">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-heading text-2xl font-bold text-white">BEE</p>
            <p className="font-body text-sm">
              Bien Estar Emocional · SER en BEE
            </p>
          </div>
          <div className="font-body text-sm leading-relaxed">
            <p>
              Lourdes Solares, psicóloga clínica
            </p>
            <p>
              Colegiada activa No. 6498, Colegio de Psicólogos de Guatemala
            </p>
          </div>
          <div className="flex gap-4 font-body text-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-white/20 pt-6 font-body text-xs text-white/50">
          <a href={TEST_URL} className="hover:text-white transition">
            Haz el test
          </a>
          <a href={COLMENA_URL} className="hover:text-white transition">
            Colmena BEE
          </a>
          <a href="#privacidad" className="hover:text-white transition">
            Aviso de privacidad
          </a>
        </div>

        <p className="mt-6 text-center font-body text-xs text-white/40 leading-relaxed">
          BEE no es un servicio de crisis. Si estás en peligro, llama al 911.
          En EE.&nbsp;UU. también puedes llamar o escribir al 988 (opción 2
          para español).
        </p>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Portada />
        <Reconocimiento />
        <Diferencia />
        <MiradaBee />
        <Lourdes />
        <SerEnBee />
        <Acompanamiento />
        <Testimonios />
        <Preguntas />
        <Comenzar />
      </main>
      <Footer />
    </>
  );
}

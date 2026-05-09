const theoryTopics = [
  'זיכרון קולקטיבי',
  'תרבות מסך',
  'פוליטיקת הראות',
  'ארכיון דיגיטלי',
  'עדות חזותית',
  'אסתטיקה של טראומה',
  'אבל ציבורי',
  'ממשקי זיכרון'
];

const caseStudies = [
  {
    title: 'אות חיים',
    type: 'הנצחה טיפוגרפית',
    description:
      'מעצבים יוצרים גופנים מכתב ידם של נרצחים ונופלים, בשיתוף המשפחות. הפונט הופך את כתב היד הפרטי לכלי שימוש יומיומי ומחזיר אל המרחב הציבורי סימן אישי של נוכחות.'
  },
  {
    title: 'Stitch Their Names',
    type: 'ריטואל טקסטילי קולקטיבי',
    description:
      'פרויקט רקמה קהילתי שבו שמות קורבנות נרקמים כפעולה איטית, גופנית וטקסית. ההנצחה אינה מתמקדת בכתב יד אישי אלא בבניית מחווה מצטברת של קהילה.'
  },
  {
    title: 'פנים. יום. זיכרון',
    type: 'ממשק עדות דיגיטלי',
    description:
      'מרחב מסך שמחבר פורטרטים, סיפורים אישיים ופעולת גלילה. הזיכרון נבנה דרך רצף חזותי המאפשר לצופה לנוע בין אינטימיות, עדות וארכיון.'
  },
  {
    title: 'Gaza Souls',
    type: 'ארכיון נגד',
    description:
      'יוזמת זיכרון פלסטינית הפועלת מול מחיקה, הצפה חזותית ואובדן תיעוד. היא מייצרת נראות לקורבנות דרך פרגמנטים, שמות, דימויים וסיפורים.'
  }
];

const chapters = [
  'מבוא: מדוע ההנצחה האזרחית מתפרצת דווקא עכשיו',
  'מסגרת תיאורטית: זיכרון, עדות, ממשק וארכיון',
  'מקרי בוחן ישראליים ופלסטיניים',
  'השוואה: בין נוכחות פרטית לריטואל קולקטיבי',
  'סיכום: לקראת אסתטיקה חדשה של אבל ציבורי'
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2eee6] text-[#161412]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f2eee6]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-serif text-2xl font-bold tracking-tight">המרוץ להנצחה</a>
          <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
            <a href="#research">מחקר</a>
            <a href="#theory">תיאוריה</a>
            <a href="#cases">מקרי בוחן</a>
            <a href="#structure">מבנה</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-center pt-28">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,0,0,0.12),transparent_26%),radial-gradient(circle_at_80%_85%,rgba(120,113,108,0.20),transparent_34%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-neutral-500">Visual Memory · Digital Archive · Thesis Site</p>
            <h1 className="font-serif text-[4.6rem] font-black leading-[0.88] tracking-[-0.055em] md:text-[8.5rem]">
              הנצחה
              <br />
              כמרחב
              <br />
              חזותי
            </h1>
            <p className="mt-12 max-w-3xl text-xl leading-[2.1] text-neutral-700">
              אתר מחקרי הבוחן כיצד יוזמות הנצחה אלטרנטיביות בישראל ובעזה מעצבות מחדש את היחסים בין אבל, דימוי, שם, כתב יד, מסך וקהילה לאחר 7 באוקטובר.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2.5rem] bg-[#161412] p-10 text-white shadow-2xl shadow-black/10">
              <p className="mb-16 text-xs uppercase tracking-[0.35em] text-white/50">Research Axis</p>
              <h2 className="font-serif text-5xl font-bold leading-tight">זיכרון<br />כפלטפורמה</h2>
            </div>
            <div className="rounded-[2.5rem] border border-black/10 bg-white/70 p-10 backdrop-blur-xl">
              <p className="mb-16 text-xs uppercase tracking-[0.35em] text-neutral-400">Method</p>
              <h2 className="font-serif text-5xl font-bold leading-tight">קריאה<br />חזותית</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">שאלת המחקר</p>
          <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
            כיצד פעולות הנצחה אזרחיות, דיגיטליות וחומריות מייצרות צורות חדשות של נוכחות למתים בתוך מציאות של אובדן מתמשך?
          </h2>
        </div>
      </section>

      <section id="theory" className="border-y border-black/10 bg-[#e8e1d6] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 font-serif text-5xl font-bold">מפת מושגים</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {theoryTopics.map((topic) => (
              <div key={topic} className="rounded-3xl border border-black/10 bg-[#f7f2ea] p-6 text-xl shadow-sm">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">Case Studies</p>
            <h2 className="font-serif text-5xl font-bold">מקרי בוחן</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-neutral-600">
            כל מקרה נבחן דרך החומר שממנו הוא עשוי: שם, כתב יד, טקסטיל, פורטרט, מסך, פעולה קהילתית או ארכיון.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((item) => (
            <article key={item.title} className="group rounded-[2rem] border border-black/10 bg-white/65 p-8 transition hover:-translate-y-1 hover:bg-white">
              <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-400">{item.type}</p>
              <h3 className="mb-5 font-serif text-4xl font-bold">{item.title}</h3>
              <p className="text-lg leading-9 text-neutral-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="structure" className="bg-[#161412] px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/45">Thesis Structure</p>
          <h2 className="mb-12 font-serif text-5xl font-bold">מבנה האתר והמחקר</h2>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {chapters.map((chapter, index) => (
              <div key={chapter} className="grid gap-6 py-7 md:grid-cols-[120px_1fr] md:items-center">
                <span className="font-serif text-5xl text-white/25">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-2xl leading-relaxed">{chapter}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-12 text-sm text-neutral-500">
        © אתר מחקרי לתזה · ניתן לעריכה מלאה בקבצי Next.js
      </footer>
    </main>
  );
}

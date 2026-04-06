export default function ResumePage() {
  return (
    <main className="bg-stone-50 min-h-screen text-stone-800">
 
      {/* Header */}
      <header className="bg-teal-800 text-white px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-black tracking-tight text-white mb-1">
            Devina Tran
          </h1>
          <p className="text-lg text-teal-200 font-light mb-6">
            Business Analytics &amp; Information Systems Student
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-teal-300">
            <a
              href="mailto:devinat987@gmail.com"
              className="hover:text-white transition-colors"
            >
              devinat987@gmail.com
            </a>
            <a
              href="tel:6698886869"
              className="hover:text-white transition-colors"
            >
              (669) 888-6869
            </a>
            <span>Tampa, FL</span>
          </div>
        </div>
      </header>
 
      <div className="max-w-3xl mx-auto px-8 py-10 space-y-10">
 
        {/* Objective */}
        <section aria-labelledby="objective-heading">
          <h2
            id="objective-heading"
            className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3"
          >
            Objective
          </h2>
          <p className="text-stone-700 leading-relaxed">
            Motivated Business Analytics and Information Systems student seeking
            a stable, full-time position where I can apply data analysis,
            problem-solving, and technical skills to support informed
            decision-making. Eager to contribute to organizational efficiency
            while continuing to develop professionally in a data-driven
            environment.
          </p>
        </section>
 
        <hr className="border-stone-200" />
 
        {/* Education */}
        <section aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-6"
          >
            Education
          </h2>
 
          <div className="space-y-6">
 
            <article>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-lg font-bold text-stone-900">
                  B.S. Business Analytics &amp; Information Systems
                </h3>
                <span className="text-sm text-stone-400 shrink-0">In Progress</span>
              </div>
              <p className="text-sm font-semibold text-stone-500">
                University of South Florida · Tampa, FL
              </p>
            </article>
 
            <article>
              <h3 className="text-lg font-bold text-stone-900 mb-1">
                Associate of Arts
              </h3>
              <p className="text-sm font-semibold text-stone-500">
                Hillsborough Community College · Tampa, FL
              </p>
            </article>
 
            <article>
              <h3 className="text-lg font-bold text-stone-900 mb-1">
                High School Diploma
              </h3>
              <p className="text-sm font-semibold text-stone-500">
                Live Oak High School · Morgan Hill, CA
              </p>
            </article>
 
          </div>
        </section>
 
        <hr className="border-stone-200" />
 
        {/* Experience */}
        <section aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-6"
          >
            Work Experience
          </h2>
 
          <div className="space-y-8">
 
            <article>
              <h3 className="text-lg font-bold text-stone-900 mb-1">Bobarista</h3>
              <p className="text-sm font-semibold text-stone-500 mb-3">iTea · San Jose, CA</p>
              <ul className="space-y-1.5 text-sm text-stone-700">
                <li className="flex gap-2">
                  <span className="text-teal-500 shrink-0">—</span>
                  Prepared and served a variety of boba tea drinks accurately
                  and efficiently in a fast-paced environment.
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-500 shrink-0">—</span>
                  Operated POS system to process customer orders and handle
                  transactions accurately.
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-500 shrink-0">—</span>
                  Delivered friendly, attentive customer service while
                  maintaining a clean and organized workspace.
                </li>
              </ul>
            </article>
 
            <article>
              <h3 className="text-lg font-bold text-stone-900 mb-1">Hostess</h3>
              <p className="text-sm font-semibold text-stone-500 mb-3">
                Kanji Sushi and Ramen · Brandon, FL
              </p>
              <ul className="space-y-1.5 text-sm text-stone-700">
                <li className="flex gap-2">
                  <span className="text-teal-500 shrink-0">—</span>
                  Greeted and seated guests promptly, managing waitlists and
                  reservations to ensure smooth dining room flow.
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-500 shrink-0">—</span>
                  Communicated effectively with kitchen and serving staff to
                  coordinate table availability and minimize wait times.
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-500 shrink-0">—</span>
                  Maintained a welcoming front-of-house environment and
                  addressed guest inquiries with professionalism.
                </li>
              </ul>
            </article>
 
          </div>
        </section>
 
        <hr className="border-stone-200" />
 
        {/* Skills */}
        <section aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-6"
          >
            Skills
          </h2>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">Technical</h3>
              <p className="text-stone-600">JavaScript, POS Systems, Data Analysis</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">Professional</h3>
              <p className="text-stone-600">
                Problem Solving, Critical Thinking, Teamwork, Communication
              </p>
            </div>
          </div>
        </section>
 
      </div>
 
      <footer className="border-t border-stone-200 px-8 py-6 text-center text-xs text-stone-400">
  <p>Devina Tran · Tampa, FL</p>
  <p className="mt-1">
    (669) 888-6869 ·{" "}
    <a href="mailto:devinat987@gmail.com" className="hover:text-stone-700 transition-colors">
      devinat987@gmail.com
    </a>
  </p>
</footer>

 
    </main>
  );
}
 
'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Menu, X, CalendarDays, MapPin, Target, Sparkles } from 'lucide-react';
import { siteContent as content } from '@/data/siteContent';

const cta = 'BOOK A FREE STRATEGY CALL';

function Brand({ dark = false }: { dark?: boolean }) {
  return <a href="#top" className="flex items-center gap-2.5" aria-label="Reach Eyeballs home">
    <img src="/reach-eyeballs-logo.png" width="42" height="42" alt="Reach Eyeballs" className="h-10 w-10 object-contain" />
    <span className={`text-[15px] font-black tracking-[-.04em] ${dark ? 'text-white' : 'text-[#07101f]'}`}>REACH <i className="not-italic text-[#2564d9]">EYEBALLS</i></span>
  </a>;
}

function Button({ href = content.bookingUrl, children = cta, secondary = false }: { href?: string; children?: React.ReactNode; secondary?: boolean }) {
  return <a href={href} className={`group inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold tracking-[.07em] transition duration-200 ${secondary ? 'border border-[#bac9e2] bg-white text-[#07101f] hover:border-[#2564d9]' : 'bg-[#2564d9] text-white hover:-translate-y-0.5 hover:bg-[#174eb9] hover:shadow-[0_14px_28px_rgba(37,100,217,.25)]'}`}>
    {children}<ArrowRight size={15} className="transition group-hover:translate-x-1" />
  </a>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-4 flex items-center gap-2 text-[11px] font-bold tracking-[.16em] ${light ? 'text-[#8ab5ff]' : 'text-[#2564d9]'}`}><span className="h-1.5 w-1.5 bg-current" />{children}</p>;
}

function AnimatedValue({ value }: { value: string }) {
  const numberMatch = value.match(/^(\d+)(.*)$/);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const valueRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = valueRef.current;
    if (!node || !numberMatch) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!started || !numberMatch) return;
    const target = Number(numberMatch[1]);
    const duration = 1050;
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setCurrent(Math.round((1 - Math.pow(1 - progress, 3)) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return <p ref={valueRef} className="text-3xl font-black tracking-[-.06em] text-white sm:text-4xl">{numberMatch ? `${current}${numberMatch[2]}` : value}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void video.play().catch(() => undefined);
    }, { threshold: 0.35 });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <main id="top" className="overflow-x-hidden pt-[68px] sm:pt-[76px]">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dce5f3]/70 bg-[#f6f8fc]/95 shadow-[0_4px_18px_rgba(7,16,31,.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-8 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {content.navigation.map(([label, href]) => <a key={label} href={href} className="text-[12px] font-semibold text-[#4c5a70] transition hover:text-[#2564d9]">{label}</a>)}
        </nav>
        <div className="hidden lg:block"><Button /></div>
        <button onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation" className="grid h-10 w-10 place-items-center border border-[#dce5f3] lg:hidden">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {menuOpen && <nav className="border-t border-[#dce5f3] bg-white px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-7xl gap-4">{content.navigation.map(([label, href]) => <a onClick={close} key={label} href={href} className="text-sm font-semibold">{label}</a>)}<Button /></div></nav>}
    </header>

    <section className="relative border-b border-[#dce5f3] bg-white">
      <div className="grid-glow absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-[1.08fr_.92fr] lg:items-start lg:py-24">
        <div>
          <Eyebrow>LEAD GENERATION FOR UK WINDOW &amp; DOOR COMPANIES</Eyebrow>
          <h1 className="max-w-3xl text-[clamp(2.6rem,6vw,5.5rem)] font-black leading-[.93] tracking-[-.075em] text-[#07101f]">Stop Chasing Leads.<br />Start Closing <span className="text-[#2564d9]">Qualified</span> Appointments.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#526078] sm:mt-7 sm:text-lg sm:leading-8">We help window &amp; door companies generate exclusive, pre-qualified homeowner enquiries and book them directly into your calendar.</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#526078]">No shared Bark leads. No endless cold calling. No wasting hours chasing people who were never ready to buy.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button /><Button href="#how-it-works" secondary>SEE HOW IT WORKS</Button></div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#314059]">{['Exclusive Appointments', 'Qualified Leads', 'Done-For-You Service'].map(item => <li key={item} className="flex items-center gap-2"><Check size={16} className="text-[#2564d9]" />{item}</li>)}</ul>
        </div>
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:mt-2">
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#2564d9]/20 blur-3xl" />
          <video ref={heroVideoRef} autoPlay controls playsInline preload="metadata" className="relative aspect-[9/16] w-full rounded-[24px] border border-[#cbd8ec] bg-black object-cover shadow-[0_32px_80px_rgba(7,16,31,.22)]" aria-label="Are you still relying on window and door referrals in 2026 video">
            <source src="/videos/window-door-referrals-2026.mp4" type="video/mp4" />
            Your browser does not support this video.
          </video>
        </div>
      </div>
    </section>

    <section className="border-b border-[#dce5f3] bg-[#eef4ff]"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-8 md:flex-row md:text-left"><div><p className="text-[11px] font-bold tracking-[.15em] text-[#2564d9]">BUILT FOR WINDOW &amp; DOOR COMPANIES</p><p className="mt-1 text-sm font-semibold text-[#35425a]">Not another generalist marketing agency.</p></div><p className="text-xs font-bold tracking-[.12em] text-[#526078]">UK WINDOW &amp; DOOR LEAD GENERATION SPECIALISTS</p></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><div className="max-w-2xl"><Eyebrow>SOUND FAMILIAR?</Eyebrow><h2 className="text-4xl font-black leading-[.98] tracking-[-.06em] sm:text-5xl">Your Problem Isn&apos;t Selling Windows.<br /><span className="text-[#2564d9]">It&apos;s Getting the Right Opportunities.</span></h2></div><div className="mt-12 grid gap-px border border-[#dce5f3] bg-[#dce5f3] md:grid-cols-2 xl:grid-cols-4">{content.painPoints.map(([num, title, text]) => <article key={num} className="group bg-white p-7 transition hover:bg-[#07101f]"><p className="text-xs font-black tracking-[.15em] text-[#2564d9]">{num}</p><h3 className="mt-12 text-xl font-black tracking-[-.04em] group-hover:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-[#63718a] group-hover:text-[#b5c2d8]">{text}</p></article>)}</div><p className="mt-8 text-lg font-bold">Reach Eyeballs was built to change that.</p></section>

    <section id="difference" className="blueprint relative overflow-hidden px-5 py-24 sm:px-8"><div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(37,100,217,.14))]" /><div className="relative mx-auto max-w-7xl"><div className="max-w-3xl"><Eyebrow light>THE REACH EYEBALLS DIFFERENCE</Eyebrow><h2 className="text-4xl font-black leading-[.98] tracking-[-.06em] text-white sm:text-5xl">Exclusive Opportunities.<br /><span className="text-[#6da2ff]">Qualified Homeowners.</span><br />Appointments Already Booked.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-[#c1cce0]">Reach Eyeballs targets homeowners actively considering window and door replacement within your service area. Instead of simply sending contact details, we help qualify prospects and book suitable opportunities directly into your calendar.</p></div><div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">{content.solutions.map(([title, text], i) => <article key={title} className="bg-[#0d1829] p-7 transition hover:bg-[#122747]"><span className="grid h-9 w-9 place-items-center bg-[#2564d9] text-xs font-black text-white">0{i + 1}</span><h3 className="mt-8 text-xl font-black tracking-[-.04em] text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-[#b9c6db]">{text}</p></article>)}</div></div></section>

    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Eyebrow>HOW IT WORKS</Eyebrow><h2 className="text-4xl font-black tracking-[-.06em] sm:text-5xl">From Click to<br /><span className="text-[#2564d9]">Qualified Appointment.</span></h2></div><p className="max-w-sm text-sm leading-6 text-[#63718a]">A clear, sales-focused workflow from local homeowner targeting to your live sales calendar.</p></div><div className="mt-14 grid gap-8 md:grid-cols-4">{content.process.map(([num, title, text], i) => <article key={num} className="relative border-t-2 border-[#2564d9] pt-5">{i < 3 && <span className="absolute left-10 right-[-2rem] top-[-1px] hidden h-px bg-[#dce5f3] md:block" />}<p className="text-xs font-black tracking-[.15em] text-[#2564d9]">{num}</p><h3 className="mt-8 text-2xl font-black tracking-[-.04em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#63718a]">{text}</p></article>)}</div></section>

    <section id="results" className="blueprint px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><Eyebrow light>RESULTS THAT MATTER</Eyebrow><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><h2 className="text-4xl font-black leading-[.98] tracking-[-.06em] text-white sm:text-5xl">We Don&apos;t Sell Clicks.<br /><span className="text-[#6da2ff]">We Build Sales Opportunities.</span></h2><p className="mt-6 max-w-md text-base leading-7 text-[#b9c6db]">The goal isn&apos;t vanity metrics. It&apos;s more conversations with homeowners who are genuinely considering replacing their windows or doors.</p></div><div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">{content.stats.map(stat => <div key={stat.label} className="bg-[#0d1829] p-7"><AnimatedValue value={stat.value} /><p className="mt-4 text-sm font-bold text-[#78aaff]">{stat.label}</p><p className="mt-1 text-xs text-[#aebbd0]">{stat.note}</p></div>)}</div></div></div></section>

    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24"><div className="mx-auto max-w-7xl"><Eyebrow>CLIENT SUCCESS</Eyebrow><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><h2 className="text-4xl font-black tracking-[-.06em] sm:text-5xl">Hear From Businesses<br />We&apos;ve Helped.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-[#526078]">A real client story, shared in their own words.</p></div><a href="#" className="shrink-0 text-xs font-bold tracking-[.1em] text-[#2564d9]">VIEW OUR REVIEWS <ArrowRight className="ml-1 inline" size={14} /></a></div><div className="mt-10 grid gap-6 border border-[#dce5f3] bg-[#f6f8fc] p-4 sm:p-6 md:grid-cols-[minmax(280px,.85fr)_minmax(0,1fr)] md:items-center md:gap-8 lg:grid-cols-[minmax(360px,.78fr)_minmax(0,1fr)]"><div className="mx-auto w-full max-w-[460px] overflow-hidden bg-black shadow-[0_18px_36px_rgba(7,16,31,.18)]"><video controls playsInline preload="metadata" className="aspect-square w-full bg-black object-contain" aria-label="Client success story video"><source src="/videos/client-success-story.mp4" type="video/mp4" />Your browser does not support this video.</video></div><article className="px-2 py-3 sm:px-4 md:py-6"><p className="text-[11px] font-bold tracking-[.14em] text-[#2564d9]">VERIFIED CLIENT STORY</p><h3 className="mt-4 max-w-xl text-3xl font-black leading-[1.02] tracking-[-.055em] sm:text-4xl">See what a better pipeline can mean for your business.</h3><p className="mt-5 max-w-xl text-base leading-7 text-[#526078]">Watch this client success video to hear a genuine perspective on working with Reach Eyeballs.</p><div className="mt-7 flex flex-wrap gap-3"><Button /><Button href="#how-it-works" secondary>SEE HOW IT WORKS</Button></div></article></div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><Eyebrow>REAL CAMPAIGNS. REAL SALES OPPORTUNITIES.</Eyebrow><div className="grid border border-[#dce5f3] lg:grid-cols-[.78fr_1.22fr]"><div className="bg-[#2564d9] p-8 text-white sm:p-10"><p className="text-[11px] font-bold tracking-[.15em] text-blue-100">OPTIONAL CASE STUDY</p><h2 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.06em]">Evidence-led results, when ready to share.</h2><p className="mt-6 text-sm leading-6 text-blue-100">A simple space reserved for approved campaign results—without invented numbers.</p></div><div className="grid divide-y divide-[#dce5f3] bg-white"><div className="grid gap-2 p-7 sm:grid-cols-[150px_1fr]"><p className="text-[11px] font-bold tracking-[.14em] text-[#2564d9]">CLIENT</p><p className="font-bold">Window &amp; Door Company</p></div><div className="grid gap-2 p-7 sm:grid-cols-[150px_1fr]"><p className="text-[11px] font-bold tracking-[.14em] text-[#2564d9]">CHALLENGE</p><p className="text-sm leading-6 text-[#526078]">Needed a more consistent flow of quality homeowner enquiries.</p></div><div className="grid gap-2 p-7 sm:grid-cols-[150px_1fr]"><p className="text-[11px] font-bold tracking-[.14em] text-[#2564d9]">SOLUTION</p><p className="text-sm leading-6 text-[#526078]">Targeted lead-generation campaign with qualification and appointment booking.</p></div><div className="grid gap-2 p-7 sm:grid-cols-[150px_1fr]"><p className="text-[11px] font-bold tracking-[.14em] text-[#2564d9]">RESULT</p><p className="text-sm font-semibold text-[#526078]">Use approved, verified result here.</p></div></div></div></section>

    <section className="border-y border-[#dce5f3] bg-white px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-xl"><Eyebrow>A CLEARER CHOICE</Eyebrow><h2 className="text-4xl font-black tracking-[-.06em] sm:text-5xl">A Better Alternative to Shared Lead Platforms.</h2></div><div className="mt-12 grid gap-4 md:grid-cols-2"><div className="border border-[#dce5f3] p-7"><p className="text-xs font-black tracking-[.14em] text-[#63718a]">OTHER LEAD SOURCES</p><ul className="mt-6 space-y-4 text-sm text-[#63718a]">{['Shared with competitors', 'Price-driven homeowners', 'Hours spent chasing leads', 'Unpredictable pipeline', 'Generic advertising', 'Paying for contact details'].map(x => <li key={x} className="flex gap-3"><X size={18} className="shrink-0 text-[#8b99ad]" />{x}</li>)}</ul></div><div className="bg-[#2564d9] p-7 text-white shadow-[0_18px_40px_rgba(37,100,217,.18)]"><p className="text-xs font-black tracking-[.14em] text-blue-100">REACH EYEBALLS</p><ul className="mt-6 space-y-4 text-sm font-semibold">{['Exclusive opportunities', 'Pre-qualified prospects', 'Appointments booked into calendar', 'Predictable acquisition system', 'Industry-specific campaigns', 'Focus on sales conversations'].map(x => <li key={x} className="flex gap-3"><Check size={18} className="shrink-0" />{x}</li>)}</ul></div></div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><Eyebrow>WHO WE WORK WITH</Eyebrow><h2 className="max-w-2xl text-4xl font-black tracking-[-.06em] sm:text-5xl">Built Specifically for the Window &amp; Door Industry.</h2><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{content.industries.map((industry, i) => <article key={industry} className="group flex min-h-40 flex-col justify-between border border-[#dce5f3] bg-white p-6 transition hover:border-[#2564d9] hover:shadow-lg">{(() => { const Icon = [MapPin, Target, Sparkles][i % 3]; return <span className="grid h-9 w-9 place-items-center bg-[#eef4ff] text-[#2564d9]"><Icon size={17} /></span>; })()}<h3 className="max-w-[13rem] text-lg font-black tracking-[-.04em]">{industry}</h3></article>)}</div></section>

    <section id="about" className="bg-[#eaf2ff] px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div className="relative min-h-[330px] overflow-hidden bg-[#07101f] p-8"><div className="grid-glow absolute inset-0 opacity-30" /><img src="/reach-eyeballs-logo.png" alt="Reach Eyeballs mascot" className="absolute bottom-[-30px] right-[-30px] h-72 w-72 object-contain opacity-95" /><div className="relative w-44 border border-white/20 bg-white/10 p-4 backdrop-blur"><p className="text-[10px] font-bold tracking-[.13em] text-[#8ab5ff]">UK FOCUSED</p><p className="mt-2 text-xl font-black tracking-tight text-white">Built for better local opportunities.</p></div></div><div><Eyebrow>ABOUT REACH EYEBALLS</Eyebrow><h2 className="text-4xl font-black tracking-[-.06em] sm:text-5xl">We Don&apos;t Try to Market Every Industry.</h2><p className="mt-6 text-base leading-7 text-[#526078]">Reach Eyeballs is a UK-focused lead generation agency specialising in helping window and door businesses create a more consistent pipeline of qualified homeowner opportunities.</p><p className="mt-4 text-base leading-7 text-[#526078]">Rather than simply generating clicks or sending unfiltered enquiries, our approach focuses on attracting suitable prospects, qualifying them and helping turn interest into booked sales conversations.</p><div className="mt-7 grid grid-cols-2 gap-3">{['Industry-specific messaging', 'Local homeowner targeting', 'High-ticket project focus', 'Appointment setting'].map(x => <p key={x} className="flex gap-2 text-sm font-bold"><Check size={16} className="shrink-0 text-[#2564d9]" />{x}</p>)}</div></div></div></section>

    <section className="px-5 py-24 sm:px-8"><div className="blueprint mx-auto max-w-7xl overflow-hidden p-8 sm:p-14"><Eyebrow light>YOUR NEXT STEP</Eyebrow><div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end"><div><h2 className="max-w-3xl text-4xl font-black leading-[.97] tracking-[-.07em] text-white sm:text-6xl">Ready to Fill Your Calendar With <span className="text-[#6da2ff]">Better Opportunities?</span></h2><p className="mt-6 max-w-xl text-base leading-7 text-[#c1cce0]">Book a free 30-minute strategy call and discover how Reach Eyeballs can help generate qualified window and door appointments in your area.</p></div><div className="lg:text-right"><Button>BOOK MY FREE STRATEGY CALL</Button><p className="mt-5 text-xs leading-6 text-[#c1cce0]">✓ Free 30-minute consultation &nbsp; ✓ No obligation<br />✓ Custom strategy for your area</p></div></div></div></section>

    <section id="booking" className="border-y border-[#dce5f3] bg-white px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><Eyebrow>BOOK A FREE STRATEGY CALL</Eyebrow><h2 className="text-4xl font-black tracking-[-.06em] sm:text-5xl">Let&apos;s See If Your Area Is Available.</h2><p className="mt-6 max-w-md text-base leading-7 text-[#526078]">Choose a convenient time for a free strategy call. We&apos;ll talk through your area, current pipeline and whether our approach is right for you.</p><p className="mt-8 text-sm font-bold text-[#2564d9]">We limit the number of companies we work with in each area.</p></div><div className="border border-[#dce5f3] bg-[#f6f8fc] p-6 sm:p-8"><div className="flex items-center gap-3 border-b border-[#dce5f3] pb-5"><CalendarDays className="text-[#2564d9]" /><div><p className="font-black">Book your free strategy call</p><p className="text-xs text-[#63718a]">30 minutes · Online meeting</p></div></div><div className="mt-6 grid grid-cols-3 gap-2">{['Tuesday', 'Wednesday', 'Thursday'].map((day, i) => <button key={day} className={`border p-3 text-left transition ${i === 1 ? 'border-[#2564d9] bg-[#2564d9] text-white' : 'border-[#dce5f3] bg-white hover:border-[#2564d9]'}`}><span className="block text-[10px] font-bold">{day}</span><span className="mt-1 block text-lg font-black">{24 + i}</span></button>)}</div><div className="mt-5 grid gap-2 sm:grid-cols-3">{['10:00 AM', '1:30 PM', '3:00 PM'].map(time => <button key={time} className="border border-[#dce5f3] bg-white px-3 py-3 text-xs font-bold transition hover:border-[#2564d9] hover:text-[#2564d9]">{time}</button>)}</div><a href={`mailto:${content.email}`} className="mt-6 flex items-center justify-center gap-2 bg-[#2564d9] px-5 py-4 text-xs font-bold tracking-[.07em] text-white">BOOK YOUR FREE STRATEGY CALL <ArrowRight size={15} /></a><p className="mt-4 text-center text-[11px] text-[#63718a]">Connect Calendly or GoHighLevel by updating <code>bookingUrl</code> in site content.</p></div></div></section>

    <section id="faq" className="mx-auto max-w-4xl px-5 py-24 sm:px-8"><div className="text-center"><Eyebrow>FAQ</Eyebrow><h2 className="text-4xl font-black tracking-[-.06em] sm:text-5xl">Questions, answered.</h2></div><div className="mt-12 border-y border-[#dce5f3]">{content.faqs.map(([question, answer], i) => <div key={question} className="border-b border-[#dce5f3] last:border-0"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold"><span>{question}</span><ChevronDown size={20} className={`shrink-0 text-[#2564d9] transition ${openFaq === i ? 'rotate-180' : ''}`} /></button>{openFaq === i && <p className="max-w-3xl pb-6 text-sm leading-7 text-[#526078]">{answer}</p>}</div>)}</div></section>

    <footer className="blueprint px-5 pb-8 pt-14 sm:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_.7fr_.7fr]"><div><Brand dark /><p className="mt-5 max-w-xs text-sm leading-6 text-[#b9c6db]">Qualified lead generation and appointment setting for UK Window &amp; Door Companies.</p></div><div><p className="text-[11px] font-bold tracking-[.14em] text-[#8ab5ff]">NAVIGATION</p><div className="mt-4 grid gap-3">{content.navigation.slice(0, 5).map(([label, href]) => <a key={label} href={href} className="text-sm text-[#c1cce0] hover:text-white">{label}</a>)}</div></div><div><p className="text-[11px] font-bold tracking-[.14em] text-[#8ab5ff]">CONTACT</p><a href={`mailto:${content.email}`} className="mt-4 block text-sm text-[#c1cce0] hover:text-white">{content.email}</a><div className="mt-5 flex gap-4 text-xs font-bold text-[#c1cce0]"><a href={content.social.instagram}>Instagram</a><a href={content.social.facebook}>Facebook</a><a href={content.social.linkedin}>LinkedIn</a></div></div></div><div className="flex flex-col justify-between gap-3 pt-7 text-xs text-[#aebbd0] sm:flex-row"><p>© 2026 Reach Eyeballs. All Rights Reserved.</p><div className="flex gap-5"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a></div></div></div></footer>
  </main>;
}

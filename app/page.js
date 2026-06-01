'use client';

import { useEffect, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Brain,
  HeartHandshake,
  GraduationCap,
  Star,
  Menu,
  X,
  ChevronDown,
  PlayCircle,
  ShieldCheck,
  Users,
  Award,
  BookOpenCheck,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Send,
  Target,
  ClipboardCheck,
  HandHeart,
  MapPinned,
  Facebook,
  Instagram,
  Globe,
  ArrowUp,
  UserPlus,
} from 'lucide-react';

const whatsapp =
  'https://wa.me/21620716733?text=مرحبا Coach Aroua، أريد معلومات حول البرامج والجلسات';

const facebookUrl = 'https://www.facebook.com/Arouachermiti/';
const instagramUrl = '#';

const navItems = [
  { href: '#services', label: 'الخدمات' },
  { href: '#method', label: 'المنهجية' },
  { href: '#programs', label: 'البرامج' },
  { href: '#registration', label: 'التسجيل' },
  { href: '#contact', label: 'تواصل' },
];

const services = [
  {
    icon: Brain,
    title: 'تعديل السلوك',
    text: 'مرافقة عملية للأطفال والمراهقين لفهم السلوك، تهدئة الانفعالات، تقليل العناد وبناء عادات إيجابية داخل البيت والمدرسة.',
  },
  {
    icon: HeartHandshake,
    title: 'إرشاد أسري',
    text: 'جلسات موجّهة للأولياء لتحسين التواصل مع الطفل، التعامل مع الضغط، وضع حدود واضحة وبناء علاقة أكثر هدوءاً.',
  },
  {
    icon: GraduationCap,
    title: 'Coaching مدرسي',
    text: 'تنظيم الوقت، التخطيط للمراجعة، إدارة التوتر، تقوية التركيز ومرافقة التلاميذ المقبلين على الامتحانات.',
  },
  {
    icon: BookOpenCheck,
    title: 'دورات تدريبية',
    text: 'برامج حضورية وعن بعد في التربية، الذكاء العاطفي، إدارة المشاعر، التواصل الأسري وتحديات الطفل اليومية.',
  },
];

const method = [
  {
    icon: Target,
    title: 'تشخيص واضح',
    text: 'فهم الوضعية، تحديد الصعوبات الأساسية، ثم اختيار البرنامج الأنسب للطفل أو الولي.',
  },
  {
    icon: ClipboardCheck,
    title: 'خطة عملية',
    text: 'وضع خطوات بسيطة وقابلة للتطبيق في البيت أو المدرسة مع أهداف واضحة.',
  },
  {
    icon: HandHeart,
    title: 'مرافقة ومتابعة',
    text: 'متابعة التطور، تعديل الخطة عند الحاجة، ودعم العائلة خلال مراحل التغيير.',
  },
  {
    icon: Award,
    title: 'نتائج مستمرة',
    text: 'تركيز على بناء عادات إيجابية، تواصل أفضل وثقة أكبر لدى الطفل أو التلميذ.',
  },
];

const programs = [
  {
    title: 'دورة تعديل السلوك',
    target: 'للأطفال والمراهقين',
    text: 'برنامج تطبيقي للتعامل مع العناد، الغضب، ضعف الالتزام وتحديات التربية اليومية مع أدوات عملية للأولياء.',
  },
  {
    title: 'إدارة التوتر والضغط',
    target: 'للأولياء والتلاميذ',
    text: 'تقنيات نفسية وتربوية لمواجهة القلق، ضغط الامتحانات، ضعف التركيز والتعامل مع الانفعالات بطريقة صحية.',
  },
  {
    title: 'التوجيه والمرافقة المدرسية',
    target: 'BAC • 9ème • Brevet • 6ème',
    text: 'خطة مراجعة، متابعة أسبوعية، تنظيم وقت، تحفيز ذهني ومرافقة لتحسين النتائج والثقة بالنفس.',
  },
];

const testimonials = [
  {
    name: 'أمّ محمد',
    role: 'ولية تلميذ',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    text: 'طريقة واضحة ومهنية. ساعدتني نفهم طفلي أكثر ونتعامل مع العناد بهدوء.',
  },
  {
    name: 'سارة',
    role: 'تلميذة',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    text: 'البرنامج أعطاني خطوات عملية للتواصل مع عائلتي وتحسين التركيز في الدراسة.',
  },
  {
    name: 'أب أحمد',
    role: 'وليّ',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    text: 'محتوى منظم ومفيد للأولياء، خاصة في إدارة الضغط والمشاعر داخل العائلة.',
  },
];

const faqs = [
  {
    q: 'هل الجلسات حضورية أم أونلاين؟',
    a: 'يمكن توفير جلسات حضورية أو عن بعد حسب البرنامج وحسب حالة الطفل أو الولي.',
  },
  {
    q: 'هل توجد برامج للأطفال والمراهقين؟',
    a: 'نعم، توجد برامج لتعديل السلوك، إدارة المشاعر، المرافقة المدرسية وتحسين التواصل داخل العائلة.',
  },
  {
    q: 'كيف يتم الحجز؟',
    a: 'يتم الحجز مباشرة عبر واتساب أو الهاتف. بعد التواصل يتم تحديد البرنامج المناسب والموعد.',
  },
  {
    q: 'هل البرامج مناسبة للتلاميذ المقبلين على الامتحانات؟',
    a: 'نعم، توجد مرافقة مدرسية لتنظيم الوقت، تقليل الضغط، تحسين التركيز وبناء خطة مراجعة واضحة.',
  },
];

function Counter({ end, label }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(end / 55);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setN(current);
    }, 28);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stat reveal">
      <b>+{n}</b>
      <span>{label}</span>
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        }),
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

    const glow = document.querySelector('.cursorGlow');
    const moveGlow = (e) => {
      if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', moveGlow);

    return () => {
      window.removeEventListener('mousemove', moveGlow);
      obs.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((current) => (current + 1) % testimonials.length),
      3500
    );
    return () => clearInterval(timer);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `مرحبا Coach Aroua، أريد التسجيل أو طلب معلومات.\n\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالبريد الإلكتروني: ${form.email}\nالرسالة: ${form.message}`
    );
    window.open(`https://wa.me/21620716733?text=${text}`, '_blank');
  };

  return (
    <main>
      <div className="cursorGlow" />

      <a href={whatsapp} className="floating" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={30} />
      </a>

      <a href="#home" className="topButton" aria-label="Back to top">
        <ArrowUp size={22} />
      </a>

      <header className="nav">
        <a className="brand" href="#home">
          <span>AC</span>
          <b>Aroua Chermiti Coaching</b>
        </a>

        <nav className="desktopNav">
          <div className="dropdown">
            <a href="#services">
              الخدمات <ChevronDown size={16} />
            </a>
            <div className="dropdownMenu">
              <a href="#services">تعديل السلوك</a>
              <a href="#services">الإرشاد الأسري</a>
              <a href="#services">Coaching مدرسي</a>
              <a href="#services">الدورات التدريبية</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#programs">
              البرامج <ChevronDown size={16} />
            </a>
            <div className="dropdownMenu">
              <a href="#programs">دورة تعديل السلوك</a>
              <a href="#programs">إدارة التوتر</a>
              <a href="#programs">المرافقة المدرسية</a>
            </div>
          </div>

          <a href="#method">المنهجية</a>
          <a href="#registration">التسجيل</a>
          <a href="#faq">أسئلة</a>
          <a href="#contact">تواصل</a>
        </nav>

        <a className="book" href="#registration">
          سجّل الآن
        </a>

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <div className="mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="book" href="#registration" onClick={() => setOpen(false)}>
            سجّل الآن
          </a>
        </div>
      )}

      <section className="hero" id="home">
        <div className="heroText reveal">
          <span className="pill">
            <Sparkles size={18} /> تدريب • إرشاد • مرافقة تربوية
          </span>

          <h1>مرافقة تربوية متخصصة للأطفال والمراهقين والأولياء</h1>

          <p>
            نرافق العائلات والتلاميذ بخطة واضحة لتعديل السلوك، إدارة الضغط، تحسين التركيز
            وبناء ثقة أقوى داخل البيت والمدرسة.
          </p>

          <div className="actions">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="primary">
              تواصل عبر واتساب <Send size={18} />
            </a>
            <a href="#programs" className="secondary">
              <PlayCircle /> شاهد البرامج
            </a>
          </div>

          <div className="miniTrust">
            <span>
              <CheckCircle2 /> متابعة مهنية
            </span>
            <span>
              <CheckCircle2 /> حضوري وعن بعد
            </span>
            <span>
              <CheckCircle2 /> برامج عملية
            </span>
          </div>
        </div>

        <div className="heroVisual reveal">
          <div className="blob" />
          <img src="/poster1.png" alt="Aroua Chermiti coaching poster" />
          <div className="tag tag1">حقيبة تربوية + شهادة</div>
          <div className="tag tag2">حجز واستشارة مباشرة</div>
        </div>
      </section>

      <section className="stats">
        <Counter end={500} label="أسرة مستفيدة" />
        <Counter end={20} label="دورة وتكوين" />
        <Counter end={1000} label="طفل وتلميذ" />
        <Counter end={5} label="سنوات خبرة" />
      </section>

      <section className="section" id="services">
        <div className="center reveal">
          <span className="pill">خدماتنا</span>
          <h2>حلول تربوية ونفسية بطريقة عملية</h2>
          <p>
            خدمات موجهة للأولياء، الأطفال والمراهقين لتسهيل الحياة اليومية، تحسين التواصل
            وبناء سلوك أكثر توازناً.
          </p>
        </div>

        <div className="cards">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article className="card reveal" key={s.title} style={{ transitionDelay: i * 80 + 'ms' }}>
                <Icon />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  أريد معلومات <ArrowLeft size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="method section" id="method">
        <div className="center reveal">
          <span className="pill">منهجيتنا</span>
          <h2>كيف نرافقك خطوة بخطوة؟</h2>
          <p>نعتمد طريقة منظمة تجمع بين الإصغاء، التشخيص، التطبيق والمتابعة.</p>
        </div>

        <div className="methodGrid">
          {method.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="methodCard reveal" key={item.title}>
                <div className="methodNumber">0{index + 1}</div>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="programs" id="programs">
        <div className="center reveal">
          <span className="pill darkPill">البرامج</span>
          <h2>دورات وجلسات قابلة للحجز</h2>
          <p>اختر البرنامج المناسب حسب عمر الطفل، الهدف التربوي أو التحدي المدرسي.</p>
        </div>

        <div className="programGrid">
          {programs.map((p, i) => (
            <div className="program reveal" key={p.title}>
              <div className="num">0{i + 1}</div>
              <h3>{p.title}</h3>
              <b>{p.target}</b>
              <p>{p.text}</p>
              <a href="#registration">سجّل الآن</a>
            </div>
          ))}
        </div>
      </section>

      <section className="about reveal" id="about">
        <div>
          <span className="pill">عن المركز</span>
          <h2>INNOVAC Center by Coach Aroua Chermiti</h2>
          <p>
            فضاء للتدريب والمرافقة التربوية موجه للأولياء، الأطفال والمراهقين. يجمع بين
            الإرشاد، التدريب العملي وتقنيات إدارة المشاعر والسلوك.
          </p>

          <ul>
            <li>
              <ShieldCheck /> منهجية واضحة ومتابعة مهنية
            </li>
            <li>
              <Users /> برامج للأولياء والأطفال والتلاميذ
            </li>
            <li>
              <Award /> دورات حضورية وعن بعد مع شهادة
            </li>
            <li>
              <Clock /> حجز سريع وتواصل مباشر
            </li>
          </ul>
        </div>

        <div className="gallery">
          <img src="/poster2.png" alt="Coaching program poster" />
          <img src="/poster3.png" alt="Training program poster" />
        </div>
      </section>

      <section className="testimonials reveal">
        <Star />
        <h2>آراء وتجارب</h2>

        <div className="testimonialCard">
          <img src={testimonials[slide].photo} alt={testimonials[slide].name} />
          <div>
            <div className="stars">★★★★★</div>
            <p>{testimonials[slide].text}</p>
            <h3>{testimonials[slide].name}</h3>
            <span>{testimonials[slide].role}</span>
          </div>
        </div>

        <div className="dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={i === slide ? 'active' : ''}
              aria-label={`testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="registration section reveal" id="registration">
        <div className="registrationText">
          <span className="pill">
            <UserPlus size={18} /> استمارة التسجيل
          </span>
          <h2>سجّل طلبك الآن</h2>
          <p>
            املأ البيانات التالية وسيتم إرسالها مباشرة عبر واتساب لتأكيد الحجز أو طلب
            معلومات أكثر حول البرامج والجلسات.
          </p>
        </div>

        <form className="registerForm" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="الاسم واللقب"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="tel"
            placeholder="رقم الهاتف"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="اكتب الرسالة أو البرنامج المطلوب"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button type="submit">
            إرسال طلب التسجيل <Send size={18} />
          </button>
        </form>
      </section>

      <section className="faq section" id="faq">
        <div className="center reveal">
          <span className="pill">أسئلة شائعة</span>
          <h2>قبل الحجز</h2>
        </div>

        {faqs.map((item) => (
          <details className="faqItem reveal" key={item.q}>
            <summary>
              {item.q}
              <ChevronDown />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>

      <section className="contact reveal" id="contact">
        <div>
          <span className="pill lightPill">تواصل معنا</span>
          <h2>احجز استشارة أو اطلب معلومات أكثر</h2>
          <p>نستقبل طلبات الحجز عبر الهاتف، البريد الإلكتروني أو واتساب.</p>
        </div>

        <div className="contactBox">
          <p>
            <MapPin /> Ariana, rue Taieb Mhiri, Menzah, Tunisia
          </p>
          <p dir="ltr">
            <Phone /> +216 21 053 660
          </p>
          <p dir="ltr">
            <Phone /> +216 20 716 733
          </p>
          <p dir="ltr">
            <Mail /> innovaccenter2@gmail.com
          </p>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            إرسال رسالة واتساب
          </a>
        </div>
      </section>

      <section className="mapSection reveal">
        <div className="center">
          <span className="pill">
            <MapPinned size={18} /> موقع المركز
          </span>
          <h2>العنوان</h2>
          <p>Ariana, rue Taieb Mhiri, Menzah, Tunisia</p>
        </div>

        <div className="mapBox">
          <iframe
            title="Aroua Chermiti Coaching Location"
            src="https://www.google.com/maps?q=Ariana%20rue%20Taieb%20Mhiri%20Menzah%20Tunisia&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="footerPro">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerLogo">AC</div>
            <h3>Aroua Chermiti Coaching</h3>
            <p>
              مرافقة تربوية ومهنية للأولياء، الأطفال والمراهقين لبناء سلوك متوازن،
              تواصل أفضل وثقة أقوى.
            </p>
            <div className="socials">
              <a href="#home" aria-label="Website">
                <Globe size={18} />
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="footerCol">
            <h4>الخدمات</h4>
            <a href="#services">تعديل السلوك</a>
            <a href="#services">إرشاد أسري</a>
            <a href="#services">Coaching مدرسي</a>
            <a href="#services">دورات تدريبية</a>
          </div>

          <div className="footerCol">
            <h4>البرامج</h4>
            <a href="#programs">دورة تعديل السلوك</a>
            <a href="#programs">إدارة التوتر والضغط</a>
            <a href="#programs">المرافقة المدرسية</a>
            <a href="#registration">استمارة التسجيل</a>
          </div>

          <div className="footerCol">
            <h4>تواصل</h4>
            <a href="tel:+21621053660" dir="ltr">+216 21 053 660</a>
            <a href="tel:+21620716733" dir="ltr">+216 20 716 733</a>
            <a href="mailto:innovaccenter2@gmail.com">innovaccenter2@gmail.com</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              واتساب مباشر
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 جميع الحقوق محفوظة — Aroua Chermiti Coaching</span>
          <span>تصميم موقع احترافي قابل للتطوير والنشر</span>
        </div>
      </footer>
    </main>
  );
}

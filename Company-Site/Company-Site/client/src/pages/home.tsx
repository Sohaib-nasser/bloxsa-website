import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building2, 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  Phone,
  ArrowLeft,
  Menu,
  X,
  History,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Globe,
  Settings,
  Briefcase
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@assets/generated_images/modern_multi-industry_business_ecosystem_abstract.png";
import aboutImg from "@assets/generated_images/corporate_strategic_partnership_abstract_texture.png";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-right selection:bg-[#0086a2]/20 overflow-x-hidden" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md h-16" : "bg-transparent h-20"}`}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className={`text-2xl font-black tracking-tight transition-colors ${scrolled ? "text-[#153771]" : "text-white md:text-[#153771]"}`}>Bloxsa</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'services', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className={`text-sm font-bold transition-colors relative group ${scrolled ? "text-[#153771]" : "text-white"}`}
              >
                {item === 'home' ? 'الرئيسية' : item === 'about' ? 'عن الشركة' : item === 'services' ? 'مجالاتنا' : 'اتصل بنا'}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#0086a2] transition-all group-hover:w-full" />
              </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} className="bg-[#0086a2] hover:bg-[#00708a] text-white font-bold px-6 py-2 h-auto text-sm rounded-full">
              طلب استشارة
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#153771]" : "text-white"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 shadow-2xl overflow-hidden"
            >
              <button onClick={() => scrollToSection('home')} className="text-right text-lg font-bold text-[#153771]">الرئيسية</button>
              <button onClick={() => scrollToSection('about')} className="text-right text-lg font-bold text-[#153771]">عن الشركة</button>
              <button onClick={() => scrollToSection('services')} className="text-right text-lg font-bold text-[#153771]">مجالاتنا</button>
              <Button onClick={() => scrollToSection('contact')} className="w-full bg-[#0086a2] py-4 text-lg rounded-xl">اتصل بنا</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-[#153771] via-[#153771]/60 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={heroImg} 
            alt="Bloxsa Multi-sectoral Reach" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-white">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mr-0 ml-auto text-right"
          >
            <div className="inline-flex items-center gap-2 bg-[#0086a2]/30 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0086a2]" />
              <span className="text-xs font-black tracking-widest uppercase text-white">إرث يمتد لأكثر من 46 عاماً</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-lg">
              حلول متكاملة <br />
              <span className="text-white drop-shadow-none">عبر كافة القطاعات</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl font-medium">
              نجمع بين الإرث العريق والخبرة المتراكمة، وبين أساليب العمل الحديثة والحلول المتطورة لتقديم قيمة مستدامة لعملائنا وشركائنا في مختلف المجالات.
            </p>
            <div className="flex flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('about')} className="bg-[#0086a2] text-white hover:bg-[#00708a] font-black text-lg px-8 py-6 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95">
                اكتشف رؤيتنا
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="bg-white/10 border-white/40 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-xl backdrop-blur-md transition-transform hover:scale-105 active:scale-95">
                مجالات عملنا
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-[#0086a2] font-black text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-[#0086a2]" /> التأسيس والرؤية
                </h2>
                <p className="text-[#153771] text-xl md:text-2xl leading-relaxed font-bold">
                  تأسست الشركة قبل أكثر من 46 عامًا امتدادًا إلى رؤية إسماعيل محمد البسطي طيب الله ثراه، الذي أسسها على مبادئ راسخة من الثقة، والجودة، والالتزام.
                </p>
              </div>

              <div className="space-y-6 text-[#153771]/80 text-lg leading-relaxed">
                <div className="p-8 bg-muted/50 rounded-2xl border border-border/50">
                   <h3 className="text-2xl font-black text-[#153771] mb-4">الشركة اليوم</h3>
                   <p className="mb-4">تعود الشركة اليوم بحلة جديدة ورؤية متجددة، تجمع بين الإرث العريق والخبرة المتراكمة، وبين أساليب العمل الحديثة والحلول المتطورة.</p>
                   <p className="mb-4">تعمل الشركة حاليًا وفق نهج مؤسسي حديث يواكب متطلبات السوق، ويقدم خدمات متكاملة تعتمد على الكفاءة، والابتكار، والاستدامة، مع الحفاظ على القيم التي تأسست عليها منذ بدايتها.</p>
                   <p>وانطلاقًا من هذا التوجه، تعمل Bloxsa على ترسيخ مكانتها كشركة متعددة المجالات، تعتمد على هيكل تشغيلي منظم ورؤية واضحة تضمن التكامل بين قطاعاتها المختلفة وتقديم قيمة مستدامة لعملائنا وشركائنا.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                    <Lightbulb className="text-[#0086a2] mb-3" size={24} />
                    <h4 className="text-lg font-black text-[#153771] mb-2">رؤيتنا</h4>
                    <p className="text-sm opacity-70">أن نكون شريكًا موثوقًا ورائدًا في تقديم الحلول المتكاملة عبر مختلف القطاعات، وأن نساهم في بناء منظومة أعمال مستدامة تحقق قيمة طويلة الأمد.</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                    <Rocket className="text-[#0086a2] mb-3" size={24} />
                    <h4 className="text-lg font-black text-[#153771] mb-2">رسالتنا</h4>
                    <p className="text-sm opacity-70">تقديم حلول منظمة وموثوقة تخدم مختلف القطاعات، من خلال كفاءة التشغيل، وجودة التنفيذ، والالتزام بأعلى المعايير المهنية.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:sticky lg:top-32"
            >
              <img 
                src={aboutImg} 
                alt="Bloxsa Professionalism" 
                className="rounded-3xl w-full h-[500px] object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#153771] p-8 rounded-2xl shadow-xl text-white max-w-[240px]">
                <div className="text-4xl font-black text-[#0086a2] mb-2">+46</div>
                <div className="text-sm font-bold opacity-90">عاماً من الخبرة والتميز المستمر</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-[#153771]">
        <div className="container mx-auto px-6 text-white">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-black text-white">طموحنا</h3>
            <p className="text-[#0086a2] font-bold text-lg mt-4 uppercase tracking-widest">أهدافنا الاستراتيجية</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "تقديم حلول متكاملة تلبي احتياجات مختلف القطاعات",
              "بناء شراكات طويلة الأمد قائمة على الثقة والأداء",
              "تحقيق أعلى مستويات الجودة والكفاءة التشغيلية",
              "دعم النمو المستدام من خلال هيكل تنظيمي مرن",
              "مواكبة التطور المستمر والابتكار المؤسسي"
            ].map((goal, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                <ShieldCheck className="text-[#0086a2] flex-shrink-0" size={24} />
                <p className="text-lg font-bold">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-right max-w-3xl mb-16">
            <h3 className="text-4xl md:text-6xl font-black text-[#153771] mb-4">مجالاتنا</h3>
            <p className="text-[#153771]/60 text-xl leading-relaxed">نعمل عبر مجموعة متنوعة من القطاعات ضمن إطار تشغيلي موحد يضمن الجودة والتكامل.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Building2 size={32} />, title: "التطوير العقاري ومشاريع البناء" },
              { icon: <Globe size={32} />, title: "التوريد وسلاسل الإمداد" },
              { icon: <Zap size={32} />, title: "الخدمات اللوجستية والدعم التشغيلي" },
              { icon: <Briefcase size={32} />, title: "الخدمات المهنية وحلول الأعمال" },
              { icon: <Settings size={32} />, title: "الحلول التقنية والأنظمة" }
            ].map((item, index) => (
              <Card key={index} className="border border-border/50 shadow-sm hover:shadow-md transition-all rounded-2xl group">
                <CardHeader className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#0086a2]/5 flex items-center justify-center text-[#0086a2] mb-6 group-hover:bg-[#0086a2] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-black text-[#153771] mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-base text-[#153771]/50 leading-relaxed font-medium">
                    نلتزم بتقديم حلول متخصصة تضمن الكفاءة والابتكار في هذا المجال.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-[#153771] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="p-12 text-white lg:w-2/5 flex flex-col justify-center">
              <h3 className="text-3xl font-black mb-6">اتصل بنا</h3>
              <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">نحن هنا لمناقشة تطلعاتكم وتقديم الحلول التي تناسب احتياجاتكم.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 group-hover:bg-[#0086a2] group-hover:border-[#0086a2] transition-all">
                      <Phone className="text-white" size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold opacity-50 uppercase tracking-widest mb-1">اتصل بنا</p>
                      <p className="text-2xl font-black tracking-wider text-right" dir="ltr">+966 50 610 7554</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 group-hover:bg-[#0086a2] group-hover:border-[#0086a2] transition-all">
                      <Users className="text-white" size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold opacity-50 uppercase tracking-widest mb-1">البريد الإلكتروني</p>
                      <p className="text-2xl font-black">info@bloxsasupply.com</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="p-12 bg-white/5 lg:w-3/5 border-l border-white/10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input className="h-12 bg-white/10 border-none rounded-xl text-right text-white placeholder:text-white/30" placeholder="الاسم" />
                  <Input className="h-12 bg-white/10 border-none rounded-xl text-right text-white placeholder:text-white/30" placeholder="الايميل" />
                </div>
                <Textarea className="min-h-[120px] bg-white/10 border-none rounded-xl text-right text-white placeholder:text-white/30" placeholder="رسالتك" />
                <Button className="w-full bg-[#0086a2] hover:bg-[#00708a] h-14 text-lg font-black rounded-xl shadow-lg">إرسال</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-6">
            <span className="text-3xl font-black text-[#153771]">Bloxsa</span>
            <p className="text-[#153771]/40 font-bold text-xs uppercase tracking-widest">
              © 2026 BLOXSA. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

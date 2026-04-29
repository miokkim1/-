/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Instagram as InstagramIcon, 
  Share2, 
  Globe, 
  ArrowRight,
  Gift,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import LocationPage from "./pages/LocationPage";
import BookingPage from "./pages/BookingPage";
import LaserClinicPage from "./pages/LaserClinicPage";
import LiftingCenterPage from "./pages/LiftingCenterPage";
import AestheticCarePage from "./pages/AestheticCarePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "홈", path: "/#home" },
    { name: "라에르 소개", path: "/about" },
    { name: "시술 안내", path: "/#treatments" },
    { name: "전후 사진", path: "/#gallery" },
    { name: "리얼 후기", path: "/#reviews" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 flex justify-between items-center ${
        isScrolled || location.pathname !== "/" ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <Link to="/" className="flex flex-col">
        <div className="text-xl md:text-2xl font-serif font-light tracking-tighter text-[#2A1701]">라에르 피부과</div>
        <div className="text-[9px] md:text-[10px] font-serif tracking-[0.3em] text-[#2A1701] -mt-1 uppercase">LAER DERMATOLOGY</div>
      </Link>
      
      <nav className="hidden lg:flex space-x-10">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`font-serif tracking-wide text-sm uppercase transition-colors ${
              (location.pathname + location.hash) === item.path || (location.pathname === "/" && item.path === "/#home" && !location.hash) ? "text-[#2A1701] font-bold border-b-2 border-[#2A1701]" : "text-[#2A1701] hover:opacity-70"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-4 md:space-x-8">
        <Link to="/location" className="hidden sm:block font-serif tracking-wide text-xs md:text-sm uppercase text-[#2A1701] hover:opacity-70 transition-all">
          오시는 길
        </Link>
        <Link to="/booking" className="font-serif tracking-wide text-xs md:text-sm uppercase text-[#2A1701] px-4 md:px-6 py-2 border border-[#2A1701] hover:bg-[#2A1701]/5 transition-all">
          예약하기
        </Link>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-end justify-center overflow-hidden pb-24">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover" 
          src="https://postfiles.pstatic.net/MjAyNjA0MjlfMTkx/MDAxNzc3NDM4MzI4OTM2.sG9psONwOXvOjvvWW-G8gzKJwQ_Qyb4myVJTbdUkenUg.eJftLcFm4MIob4831eUUiK9ODwRbB2eIwVO_9sm_qxcg.PNG/95ed1814-6cee-4873-8b5f-6bbdcc6649cb.png?type=w773" 
          alt="Laer Dermatology Hero"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent opacity-80"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <h1 className="font-serif text-3xl md:text-5xl text-[#2A1701] mb-6 leading-[1.3] font-normal tracking-tight">
          빛나는 피부를 완성하는<br/>프리미엄 스킨 솔루션
        </h1>
        <p className="font-sans text-base md:text-lg text-[#2A1701] mb-10 tracking-wide font-light">
          라에르에서 당신의 본연의 아름다움을 발견하세요.
        </p>
        <Link to="/booking" className="inline-block bg-white border border-[#2A1701]/30 text-[#2A1701] px-12 py-4 rounded-full font-sans text-xs font-bold tracking-[0.2em] hover:bg-[#2A1701] hover:text-white transition-all duration-500 shadow-2xl shadow-[#2A1701]/5 uppercase cursor-pointer">
          온라인 예약하기
        </Link>
      </motion.div>
    </section>
  );
};

const TreatmentCard = ({ title, desc, img, delay, to }: { title: string, desc: string, img: string, delay: number, to?: string }) => {
  const content = (
    <>
      <div className="overflow-hidden rounded-2xl aspect-[4/5] mb-8 shadow-sm bg-surface-container-low">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={img} alt={title} referrerPolicy="no-referrer" />
      </div>
      <h3 className="font-serif text-2xl text-[#2A1701] mb-3">{title}</h3>
      <p className="font-sans text-[#2A1701]/70 leading-relaxed mb-4 text-sm">{desc}</p>
      <div className="inline-flex items-center space-x-2 soft-gold-border pb-1 font-sans text-xs font-bold text-[#2A1701] tracking-widest uppercase transition-all group-hover:pr-4">
        <span>자세히 보기</span>
        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
      </div>
    </>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="group cursor-pointer"
    >
      {to ? <Link to={to}>{content}</Link> : content}
    </motion.div>
  );
};

const BenefitModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2A1701]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 m-auto z-[101] w-full max-w-lg h-fit bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
          >
            <div className="relative p-10 pt-12">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 transition-colors"
                id="close-modal"
              >
                <X size={20} className="text-[#2A1701]" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#2A1701]/5 rounded-2xl flex items-center justify-center mb-6">
                  <Gift size={32} className="text-[#2A1701]" />
                </div>
                <span className="text-[10px] font-bold text-[#2A1701] uppercase tracking-[0.3em] mb-3 opacity-60">
                  Limited Summer Benefit
                </span>
                <h3 className="font-serif text-2xl text-[#2A1701] mb-8">썸머 글로우 시그니처 혜택</h3>

                <div className="w-full space-y-4 mb-10">
                  {[
                    {
                      title: "라에르 글로우 패키지",
                      price: "20% OFF",
                      desc: "LDM + 볼뉴레 + 스킨부스터",
                    },
                    {
                      title: "첫 방문 전용 웰컴 혜택",
                      price: "SPECIAL",
                      desc: "원장 전담 1:1 피부 정밀 진단",
                    },
                    {
                      title: "선착순 50명 프리미엄 케어",
                      price: "GIFT",
                      desc: "시술 후 홈케어 마스크 키트 증정",
                    },
                  ].map((benefit, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-5 bg-stone-50 rounded-2xl border border-stone-100 text-left hover:scale-[1.02] transition-transform cursor-default"
                    >
                      <div>
                        <h4 className="font-bold text-[#2A1701] text-sm mb-1">{benefit.title}</h4>
                        <p className="text-[10px] text-[#2A1701]/60">{benefit.desc}</p>
                      </div>
                      <span className="font-serif text-xs font-bold text-[#2A1701]">{benefit.price}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  onClick={onClose}
                  className="w-full py-5 bg-[#2A1701] text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#2A1701]/20 hover:bg-[#422C10] transition-all flex items-center justify-center gap-3"
                  id="modal-cta"
                >
                  상담 신청하고 혜택 받기 <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-stone-50 px-10 py-4 flex justify-center border-t border-stone-100">
              <span className="text-[9px] text-[#2A1701]/40">
                본 이벤트는 한정 수량 소진 시 조기 종료될 수 있습니다.
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Promotion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="px-6 py-20 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[2rem] overflow-hidden bg-surface-container h-[400px] flex items-center px-8 md:px-24"
      >
        <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
          <img
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAflV2-esI5JBGDNw8b-8WyxoedM_732RwmrQkzD3rZ1qhZpgoisYAgjuhMiO2UUR5cqw86JqDpVEkEWlkfW15NTxUZ6K9JCTTncxwyyBgaw4h_eHWNTM_VFk0W_VLrlFZt_E1XQR-JPrznwSZ8F0AEk5VFKzK3NSXcSw30KFyzB3H8uDNXdvEuc63Vv7lL_vWt4Y1WbmPUjCOvnqrTTQkK-i-wXXQ9iGylzSFB2aMBpILTmQ9pEqCLJSmy7e16tn32ZIuZk1i2UqU"
            alt="Luxury product"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-lg">
          <span className="font-sans text-[10px] font-bold text-[#2A1701] tracking-[0.2em] mb-4 block uppercase font-semibold">
            Special Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2A1701] mb-6">썸머 글로우 업 이벤트</h2>
          <p className="font-sans text-[#2A1701]/80 mb-8 text-sm leading-relaxed">
            무더운 여름, 라에르의 시그니처 광채 솔루션으로 반짝이는 피부를 준비하세요.
            <br />
            한정 기간 특별 혜택을 드립니다.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block text-[#2A1701] font-bold font-serif border-b-2 border-[#2A1701]/30 pb-1 hover:border-[#2A1701] transition-colors text-sm cursor-pointer"
          >
            혜택 보기
          </button>
        </div>
      </motion.div>
      <BenefitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

const ReviewCard = ({ name, content, initials, delay }: { name: string, content: string, initials: string, delay: number, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 bg-white/50 backdrop-blur-sm rounded-3xl shadow-sm border border-[#2A1701]/10 flex flex-col justify-between"
  >
    <div>
      <div className="flex text-[#2A1701]/60 mb-8 scale-75 origin-left">
        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
      </div>
      <p className="font-sans text-[#2A1701] mb-8 italic leading-relaxed text-sm md:text-base">"{content}"</p>
    </div>
    <div className="flex items-center space-x-4 mt-auto">
      <div className="w-10 h-10 rounded-full bg-[#2A1701]/10 flex items-center justify-center font-bold text-[#2A1701] text-xs tracking-tighter">{initials}</div>
      <span className="font-sans text-[#2A1701]/50 text-[10px] font-bold uppercase tracking-widest">{name}</span>
    </div>
  </motion.div>
);

const BeforeAfterGallery = () => {
  const images = [
    "https://postfiles.pstatic.net/MjAyNjA0MjlfMjQg/MDAxNzc3NDcxMzU5NTQ4.nxVlVhNMKILGAh5DsvgFEN_Y6DWUOzPg6w1YuFmYhHgg.h-whNJJ7k-8CERl0DmLjs8qOgIWNhKou2mnl3UOb2Yog.PNG/Gemini_Generated_Image_urwjp8urwjp8urwj_(1).png?type=w773",
    "https://postfiles.pstatic.net/MjAyNjA0MjlfNjMg/MDAxNzc3NDcxNzQ3MTkw.ZJ899JDijyD2ltOkjKML5Fb0GX3aSHDS2XJRXTl1LXsg.W1kDDEjc2mTG2JDe1JflmM48DOAhbiSqknsFR5aAhWUg.PNG/Gemini_Generated_Image_sg4d1esg4d1esg4d.png?type=w773",
    "https://postfiles.pstatic.net/MjAyNjA0MjlfMjcy/MDAxNzc3NDcyMDE2MDE0.xbHNoIEOu1toUFlSpWC6dubek9Br_xdNgpXBRlfCFHYg.qzQKyvjOjOev8PdMZURMBFZCy8367AQ0SbIy22Icl0Ig.PNG/Gemini_Generated_Image_fow0nsfow0nsfow0.png?type=w773",
    "https://postfiles.pstatic.net/MjAyNjA0MjlfMjU5/MDAxNzc3NDcyMDc2MTky.M1c851UCVQmUBizl_65kG-izeehXUtgVlIYNSQe5L9wg.byz9CR8kdFsxCKZuZoSBDpJk2zIaGhBeYzOmK5AkFa4g.PNG/Gemini_Generated_Image_czm0vczm0vczm0vc.png?type=w773",
    "https://postfiles.pstatic.net/MjAyNjA0MjlfMTAx/MDAxNzc3NDcyMjIyMTU2.H0OCFQwh6rxNLtUYRxyvSp0CetwJhjwdVRlYnsk-Chgg.DQFg2kbdolQ0vi7VBadVsCp75aNAfCJ1dayKaYGNfUgg.PNG/Gemini_Generated_Image_cyq512cyq512cyq5.png?type=w773"
  ];

  return (
    <section id="gallery" className="py-24 border-t border-stone-100/50 bg-[#2A1701]/[0.02]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-2 block tracking-[0.3em] uppercase opacity-60">Result Experience</span>
          <h2 className="font-serif text-3xl text-[#2A1701] tracking-tight">
            Before & After
          </h2>
          <div className="w-12 h-px bg-[#2A1701]/20 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {images.map((url, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="aspect-square bg-white shadow-sm overflow-hidden relative group rounded-2xl"
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={url} alt={`Transform-${i}`} referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const HomePage = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    { name: "김 * * 고객님", initials: "KJ", content: "시설이 너무 고급스럽고 원장님이 정말 꼼꼼하세요. 시술 후에 피부결이 눈에 띄게 좋아져서 대만족입니다." },
    { name: "이 * * 고객님", initials: "LH", content: "상담부터 시술까지 프라이빗한 느낌이 좋았어요. 과잉 진료 없이 저에게 꼭 필요한 케어만 추천해주셔서 신뢰가 갑니다." },
    { name: "박 * * 고객님", initials: "PY", content: "리프팅 받고 주변에서 얼굴 작아졌다는 소리 많이 들어요. 자연스럽게 예뻐지는 걸 원했는데 딱 제가 바라던 결과예요." },
    { name: "최 * * 고객님", initials: "CS", content: "색소 치료 고민하다 방문했는데 정말 꼼꼼하게 봐주시네요. 잡티가 눈에 띄게 연해져서 화장하는 시간이 줄었어요." },
    { name: "정 * * 고객님", initials: "JW", content: "다른 곳보다 더 전문적인 느낌이었어요. 제 피부 타입에 맞는 솔루션을 제시해주셔서 마음 편히 관리받고 있습니다." },
    { name: "윤 * * 고객님", initials: "YA", content: "관리실 분위기가 카페처럼 편안해서 올 때마다 힐링하고 가요. 직원분들도 친절하시고 실력도 최고입니다." },
    { name: "송 * * 고객님", initials: "SY", content: "주기적으로 리프팅 관리받고 있는데 정말 만족합니다. 탄력이 확실히 살아난 게 느껴져요. 평생 단골 예정입니다." },
    { name: "강 * * 고객님", initials: "KH", content: "피부 트러블 때문에 방문했는데 원인이 무엇인지 명확하게 짚어주셔서 좋았어요. 처방해주신 대로 하니 금방 진정되네요." },
    { name: "조 * * 고객님", initials: "JH", content: "프라이빗한 1:1 케어라 너무 안심되고 좋아요. 저만을 위한 특별한 관리를 받는 기분이라 매번 기분 좋게 방문합니다." },
  ];

  const handleNextReview = () => {
    setReviewIndex((prev) => (prev + 3 >= reviews.length ? 0 : prev + 3));
  };

  const handlePrevReview = () => {
    setReviewIndex((prev) => (prev - 3 < 0 ? Math.max(0, reviews.length - 3) : prev - 3));
  };

  return (
    <main>
      <Hero />
      
      {/* Signature Treatments */}
      <section id="treatments" className="py-32 px-6 max-w-[1200px] mx-auto overflow-hidden">
        <div className="text-center mb-24">
          <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-4 block tracking-[0.3em] uppercase">Premium Care</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2A1701] uppercase font-light">라에르 시그니처 시술</h2>
          <div className="w-12 h-px bg-[#2A1701]/20 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <TreatmentCard 
            title="레이저 클리닉" 
            desc="정교한 기술력으로 완성하는 맑고 깨끗한 피부결"
            img="https://postfiles.pstatic.net/MjAyNjA0MjlfODcg/MDAxNzc3NDQyOTA0MTY0.w7nUTqC5JsIEicp7ny7LqYCGgGRMfyx-6RZ_ovT7xykg.WzHGyJs9v73R3SUUjFO8gJnVvMdruH2jke0tx90Oo3gg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_29%EC%9D%BC_%EC%98%A4%ED%9B%84_03_07_57.png?type=w773"
            delay={0.1}
            to="/treatments/laser"
          />
          <div className="md:-mt-12">
            <TreatmentCard 
              title="리프팅 센터" 
              desc="시간을 되돌리는 탄력, 본연의 선을 살리는 디자인"
              img="https://postfiles.pstatic.net/MjAyNjA0MjlfNjQg/MDAxNzc3NDQyODQ2NzI0.CEHtbk48Qbs8NORvDXh61VdRGwzkS4iASAfTl-0pMJsg.zarQG1_4O9BUfO6uE4pSfYuYYk4KRsigG0SiMp8-apMg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_29%EC%9D%BC_%EC%98%A4%ED%9B%84_03_06_26.png?type=w773"
              delay={0.3}
              to="/treatments/lifting"
            />
          </div>
          <TreatmentCard 
            title="에스테틱 관리" 
            desc="지친 피부에 휴식을 선사하는 프리미엄 메디컬 스파"
            img="https://postfiles.pstatic.net/MjAyNjA0MjlfMTMg/MDAxNzc3NDQzMTU5NjQz.c7H7oxhzCcszzTpFC39_QPWkOhq2FgZJsEaKoI68OB8g.RTFALdZEKE9tCAgmPV1NTQKU_IxdrImaLGG_mnJ1FGsg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_29%EC%9D%BC_%EC%98%A4%ED%9B%84_03_11_24.png?type=w773"
            delay={0.5}
            to="/treatments/aesthetic"
          />
        </div>
      </section>
      
      <Promotion />
      
      {/* Testimonials */}
      <section id="reviews" className="py-32 bg-stone-50/50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-4 block tracking-[0.3em] uppercase">Testimonials</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2A1701] font-light">고객 리얼 후기</h2>
            </div>
            <div className="flex space-x-4 mb-2">
              <button 
                onClick={handlePrevReview}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-white transition-colors active:scale-95"
              >
                <ChevronLeft size={20} className="text-stone-400" />
              </button>
              <button 
                onClick={handleNextReview}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-white transition-colors active:scale-95"
              >
                <ChevronRight size={20} className="text-stone-400" />
              </button>
            </div>
          </div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={reviewIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {reviews.slice(reviewIndex, reviewIndex + 3).map((review, idx) => (
                  <ReviewCard 
                    key={idx}
                    name={review.name}
                    content={review.content}
                    initials={review.initials}
                    delay={idx * 0.1}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      <BeforeAfterGallery />
    </main>
  );
};

// --- Main App ---

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export default function App() {
  const handleShare = () => {
    const shareData = {
      title: '라에르 피부과 (LAER Dermatology)',
      text: '당신이 가진 고유의 선과 빛을 찾아드리는 라에르 피부과',
      url: window.location.origin,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      navigator.share(shareData).catch((err) => {
        if (err.name !== 'AbortError') console.error('Error sharing:', err);
      });
    } else {
      navigator.clipboard.writeText(window.location.origin).then(() => {
        alert('공유 링크가 클립보드에 복사되었습니다.');
      }).catch(console.error);
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/treatments/laser" element={<LaserClinicPage />} />
          <Route path="/treatments/lifting" element={<LiftingCenterPage />} />
          <Route path="/treatments/aesthetic" element={<AestheticCarePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

      <footer className="bg-stone-50 pt-24 pb-12 px-6 md:px-12 border-t border-stone-200/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto mb-20">
          <div className="col-span-1">
            <div className="text-xl font-serif text-[#2A1701] mb-2">라에르 피부과</div>
            <div className="text-[9px] font-serif tracking-[0.2em] text-[#5B4224] mb-8 uppercase">LAER DERMATOLOGY</div>
            <p className="font-sans text-[#5B4224] text-xs md:text-sm leading-relaxed font-light">
              당신의 가장 아름다운 순간을 위해,<br/>라에르는 정직하고 품격 있는 진료를 약속합니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-[10px] font-bold text-[#2A1701] mb-8 uppercase tracking-widest">오시는 길</h4>
            <a 
              href="https://maps.app.goo.gl/8wP9hYZBKspmoyhS6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-[#5B4224] text-xs md:text-sm leading-relaxed font-light hover:text-[#2A1701] transition-colors"
            >
              서울특별시 강남구 청담동 123-45<br/>라에르빌딩 4-5F
            </a>
            <p className="font-sans text-[#5B4224] text-xs md:text-sm mt-4 font-light">02-1234-5678</p>
          </div>
          
          <div>
            <h4 className="font-sans text-[10px] font-bold text-[#2A1701] mb-8 uppercase tracking-widest">진료 시간</h4>
            <p className="font-sans text-[#5B4224] text-xs md:text-sm leading-relaxed font-light">
              평일: 10:00 - 19:30<br/>
              토요일: 10:00 - 16:00<br/>
              일요일 및 공휴일 휴무
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-[10px] font-bold text-[#2A1701] mb-8 uppercase tracking-widest">바로가기</h4>
            <ul className="space-y-3">
              {[
                { name: "인스타그램", href: "https://www.instagram.com/" },
                { name: "상담 문의", href: "/contact" },
                { name: "개인정보 처리방침", href: "/privacy" }
              ].map(item => (
                <li key={item.name}>
                  {item.href.startsWith("http") ? (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-sans text-[#5B4224] text-xs md:text-sm hover:text-[#2A1701] transition-colors font-light"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.href} 
                      className="font-sans text-[#5B4224] text-xs md:text-sm hover:text-[#2A1701] transition-colors font-light"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-stone-200/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[#422C10] text-[10px] uppercase tracking-widest flex items-center">
            <span>© 2024 LAER DERMATOLOGY. ALL RIGHTS RESERVED.</span>
            <Link to="/admin" className="ml-4 text-stone-400 hover:text-stone-800 transition-colors font-sans text-[10px]">Admin Login</Link>
          </p>
          <div className="flex space-x-6 text-[#422C10]">
            <Share2 size={18} className="cursor-pointer hover:opacity-70 transition-colors" onClick={handleShare} />
            <a href="https://www.naver.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-colors">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

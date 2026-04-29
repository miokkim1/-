import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const LaserClinicPage = () => {
    const treatments = [
        {
            title: "피코 슈어 Pro",
            desc: "색소 치료의 혁명, 더 빠르고 강력해진\n피코 레이저로 주근깨, 잡티를 깨끗하게 제거",
            tags: ["색소침착", "주근깨", "모공케어"]
        },
        {
            title: "레블라이트 SI",
            desc: "부드럽고 균일한 빔으로 기미와 톤업을 동시에 해결하는 프리미엄 토닝입니다.",
            tags: ["기미", "화이트닝", "피부톤개선"]
        },
        {
            title: "시너지 멀티플렉스",
            desc: "안면 홍조와 혈관 문제를 개선하며 동시에 콜라겐 생성을 유도합니다.",
            tags: ["홍조", "혈관치료", "탄력증진"]
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                    <div className="flex-1">
                        <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-4 block tracking-[0.3em] uppercase underline-offset-8">Laser Clinic</span>
                        <h1 className="font-serif text-[32px] md:text-[45px] text-[#2A1701] mb-6 leading-tight">
                            정교한 빛으로 완성하는<br />투명한 피부의 기적
                        </h1>
                        <p className="font-sans text-[#2A1701]/70 leading-relaxed max-w-md">
                            라에르 레이저 클리닉은 한 분 한 분의 피부 두께와 색소의 깊이를 분석하여 
                            가장 안전하고 효과적인 레이저 파라미터를 설정합니다.
                        </p>
                    </div>
                    <div className="flex-1 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#2A1701]/10">
                         <img 
                            src="https://postfiles.pstatic.net/MjAyNjA0MjlfODcg/MDAxNzc3NDQyOTA0MTY0.w7nUTqC5JsIEicp7ny7LqYCGgGRMfyx-6RZ_ovT7xykg.WzHGyJs9v73R3SUUjFO8gJnVvMdruH2jke0tx90Oo3gg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_29%EC%9D%BC_%EC%98%A4%ED%9B%84_03_07_57.png?type=w773" 
                            alt="Laser Treatment" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                   {treatments.map((t, i) => (
                       <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-[#2A1701]/5 transition-all group"
                       >
                           <h3 className="font-serif text-xl text-[#2A1701] mb-4">{t.title}</h3>
                           <p className="text-sm text-[#2A1701]/60 leading-relaxed mb-6 whitespace-pre-line break-keep">{t.desc}</p>
                           <div className="flex flex-wrap gap-2 mb-8">
                               {t.tags.map(tag => (
                                   <span key={tag} className="text-[10px] bg-[#2A1701]/5 text-[#2A1701] px-2 py-1 rounded-full">{tag}</span>
                               ))}
                           </div>
                           <Link to="/booking" className="flex items-center text-[10px] font-bold text-[#2A1701] uppercase tracking-widest gap-2 group-hover:gap-4 transition-all">
                               상담 및 예약하기 <ArrowRight size={12} />
                           </Link>
                       </motion.div>
                   ))}
                </div>

                <div className="bg-[#2A1701] text-white p-12 md:p-16 rounded-[3rem] text-center">
                    <h2 className="font-serif text-3xl mb-8">왜 라에르 레이저인가요?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center">
                            <CheckCircle2 size={32} className="text-white/40 mb-4" />
                            <h4 className="font-serif text-lg mb-2">맞춤형 장비 조합</h4>
                            <p className="text-xs text-white/60">한 대의 레이저가 아닌,<br />병변에 따른 최적의 멀티 레이저 솔루션</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircle2 size={32} className="text-white/40 mb-4" />
                            <h4 className="font-serif text-lg mb-2">프리미엄 정성</h4>
                            <p className="text-xs text-white/60">공장형 진료가 아닌,<br />원장님이 직접 모든 샷을 꼼꼼히 조사</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircle2 size={32} className="text-white/40 mb-4" />
                            <h4 className="font-serif text-lg mb-2">토탈 진정 케어</h4>
                            <p className="text-xs text-white/60">시술 후 자극받은 피부를 위한<br />라에르만의 에스테틱 연계 케어</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LaserClinicPage;

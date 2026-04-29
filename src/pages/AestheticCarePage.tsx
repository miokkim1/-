import { motion } from "motion/react";
import { ArrowRight, Sparkles, Wind, Bath } from "lucide-react";
import { Link } from "react-router-dom";

const AestheticCarePage = () => {
    const treatments = [
        {
            title: "LDM (물방울 리프팅)",
            desc: "고밀도 초음파를 사용하여 피부 속 수분을 균형 있게 조절하고, 피부 장벽을 강화하여 건강하고 촉촉한 피부를 만듭니다.",
            features: ["피부 건조 개선", "염증 완화", "탄력 증진"]
        },
        {
            title: "라에르 글로우 필",
            desc: "저자극 필링 기술로 묵은 각질을 정돈하고, 피부 깊은 곳까지 유효 성분을 침투시켜 맑고 투명한 피부톤을 완성합니다.",
            features: ["피부 결 정돈", "톤업 효과", "영양 공급"]
        },
        {
            title: "메디컬 스킨 케어",
            desc: "개개인의 피부 상태에 맞춘 고농축 앰플과 특수 마스크를 통해 즉각적인 진정과 재생 효과를 제공하는 맞춤형 케어입니다.",
            features: ["시술 후 진정", "재생 속도 향상", "수분 충전"]
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                    <div className="flex-1">
                        <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-4 block tracking-[0.3em] uppercase underline-offset-8">Aesthetic Care</span>
                        <h1 className="font-serif text-[30px] md:text-[43px] text-[#2A1701] mb-6 leading-tight">
                            생기 넘치는 피부의 휴식,<br />프리미엄 메디컬 스파
                        </h1>
                        <p className="font-sans text-[#2A1701]/70 leading-relaxed">
                            지친 피부에 다시 숨을 불어넣는 시간입니다.<br />
                            시술의 효과를 극대화하고 피부 본연의 힘을 기를 수 있도록<br />
                            정교하게 설계된 라에르만의 에스테틱 컬렉션을 경험하세요.
                        </p>
                    </div>
                    <div className="flex-1 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#2A1701]/10">
                         <img 
                            src="https://postfiles.pstatic.net/MjAyNjA0MjlfMTMg/MDAxNzc3NDQzMTU5NjQz.c7H7oxhzCcszzTpFC39_QPWkOhq2FgZJsEaKoI68OB8g.RTFALdZEKE9tCAgmPV1NTQKU_IxdrImaLGG_mnJ1FGsg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_29%EC%9D%BC_%EC%98%A4%ED%9B%84_03_11_24.png?type=w773" 
                            alt="Aesthetic Treatment" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                   {treatments.map((t, i) => (
                       <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-10 rounded-[2rem] border border-stone-100 hover:shadow-2xl hover:shadow-[#2A1701]/5 transition-all group"
                       >
                           <div className="w-12 h-12 bg-[#2A1701]/5 rounded-full flex items-center justify-center mb-6 text-[#2A1701]">
                               {i === 0 ? <Wind size={24} /> : i === 1 ? <Sparkles size={24} /> : <Bath size={24} />}
                           </div>
                           <h3 className="font-serif text-2xl text-[#2A1701] mb-4 whitespace-nowrap">{t.title}</h3>
                           <p className="text-sm text-[#2A1701]/60 leading-relaxed mb-8">{t.desc}</p>
                           <ul className="space-y-3 mb-10">
                               {t.features.map(f => (
                                   <li key={f} className="flex items-center gap-2 text-xs text-[#2A1701]/80 italic">
                                       <div className="w-1 h-1 bg-[#2A1701] rounded-full"></div> {f}
                                   </li>
                               ))}
                           </ul>
                           <Link to="/booking" className="flex items-center text-xs font-bold text-[#2A1701] uppercase tracking-[0.2em] gap-2 hover:gap-4 transition-all">
                               상담 및 예약하기 <ArrowRight size={14} />
                           </Link>
                       </motion.div>
                   ))}
                </div>

                <div className="bg-stone-50 rounded-[3rem] p-12 md:p-20 border border-stone-100">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-3xl text-[#2A1701] mb-8 italic">Scientific Relaxation</h2>
                        <div className="space-y-8 font-sans text-[#2A1701]/70 leading-relaxed">
                            <p>
                                메디컬 시술 후 관리는 시술 결과의 50%를 결정합니다.<br />
                                라에르는 시술의 장점을 극대화 할 수 있는 과학적 휴식을 제안합니다.<br />
                                엄선된 최고급 제품과 숙련된 에스테티션의 손길로 완성되는 특별한 조화를 느껴보세요.
                            </p>
                            <div className="grid grid-cols-2 gap-12 pt-8">
                                <div>
                                    <h5 className="font-bold text-[#2A1701] mb-2 text-sm uppercase">Pure Ingredients</h5>
                                    <p className="text-xs">피부 자극을 최소화한 검증된 성분만을 사용합니다.</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#2A1701] mb-2 text-sm uppercase">Custom Protocol</h5>
                                    <p className="text-xs">당일 피부 컨디션에 따라 관리 순서와 성분을 유연하게<br />조정합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AestheticCarePage;

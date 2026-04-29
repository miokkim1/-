import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const LiftingCenterPage = () => {
    const treatments = [
        {
            title: "울세라 (Ultherapy)",
            desc: "FDA 승인을 받은 유일한 리프팅 기기. 초음파 영상 기술로 피부 속 깊은 곳까지 정확하게 타겟팅하여 늘어진 조직을 리프팅합니다.",
            features: ["SMAS층 타겟", "정교한 디자인", "장기적 효과"]
        },
        {
            title: "써마지 FLX",
            desc: "고주파 에너지를 통해 늘어진 콜라겐을 수축시키고 새로운 콜라겐 생성을 유도하여 피부 탄력과 잔주름을 개선합니다.",
            features: ["탄력 개선", "모공 축소", "잔주름 완화"]
        },
        {
            title: "티타늄 리프팅",
            desc: "세 가지 파장을 동시에 조사하여 통증은 줄이고 효과는 높인 차세대 리프팅 솔루션입니다.",
            features: ["즉각적 브라이트닝", "저통증", "빠른 회복"]
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-24">
                    <div className="flex-1">
                        <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-4 block tracking-[0.3em] uppercase underline-offset-8">Lifting Center</span>
                        <h1 className="font-serif text-4xl md:text-[45px] text-[#2A1701] mb-6 leading-tight">
                            중력을 거스르는 탄력,<br />입체적인 페이스 라인
                        </h1>
                        <p className="font-sans text-[#2A1701]/70 leading-relaxed">
                            나이가 들면서 무너지는 턱선과 깊어지는 주름 고민을 해결합니다.<br />
                            단순히 당기는 것이 아니라, 얼굴의 해부학적 구조를 이해한<br />
                            디자인 리프팅을 지향합니다.
                        </p>
                    </div>
                    <div className="flex-1 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#2A1701]/10">
                         <img 
                            src="https://postfiles.pstatic.net/MjAyNjA0MjlfNjQg/MDAxNzc3NDQyODQ2NzI0.CEHtbk48Qbs8NORvDXh61VdRGwzkS4iASAfTl-0pMJsg.zarQG1_4O9BUfO6uE4pSfYuYYk4KRsigG0SiMp8-apMg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_29%EC%9D%BC_%EC%98%A4%ED%9B%84_03_06_26.png?type=w773" 
                            alt="Lifting Treatment" 
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
                               {i === 0 ? <Zap size={24} /> : i === 1 ? <Sparkles size={24} /> : <ShieldCheck size={24} />}
                           </div>
                           <h3 className="font-serif text-2xl text-[#2A1701] mb-4">{t.title}</h3>
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
                        <h2 className="font-serif text-3xl text-[#2A1701] mb-8 italic">Customized Lifting Design</h2>
                        <div className="space-y-8 font-sans text-[#2A1701]/70 leading-relaxed">
                            <p>
                                사람마다 얼굴형, 피부 두께, 지방의 분포가 다릅니다. 라에르는 동일한 시퀀스로 시술하지 않습니다.<br />
                                시술 전 심도 있는 디자인 과정을 통해 당신에게 가장 조화로운 리프팅 포인트를 찾습니다.
                            </p>
                            <div className="grid grid-cols-2 gap-12 pt-8">
                                <div>
                                    <h5 className="font-bold text-[#2A1701] mb-2 text-sm uppercase">Safety First</h5>
                                    <p className="text-xs">정품 팁 사용 원칙 및 실시간 모니터링을 통해<br />안전을 최우선으로 합니다.</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#2A1701] mb-2 text-sm uppercase">Synergy Effect</h5>
                                    <p className="text-xs">피부 코어 근육부터 표피 탄력까지<br />고려한 복합 레이저 조합을 제안합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LiftingCenterPage;

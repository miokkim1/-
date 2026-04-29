import { motion } from "motion/react";

const AboutPage = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-4 block tracking-[0.3em] uppercase underline-offset-8">About Laer</span>
                <h1 className="font-serif text-[50px] text-[#2A1701] mb-12 leading-tight">
                    당신의 아름다움이 머무르는 곳,<br />라에르 피부과입니다.
                </h1>
                
                <div className="aspect-video rounded-3xl overflow-hidden mb-16 bg-stone-100 shadow-sm">
                    <img 
                        src="https://postfiles.pstatic.net/MjAyNjA0MzBfMjk2/MDAxNzc3NDc2MTg2MzYx.t0ZQiixWKGWyel_ukm2_YwaNPwkkBHxijIbsUFdXNcUg.R-h__silg8ViENSeYrZSveFioln7Jr5XjJFBrIig2AEg.PNG/Gemini_Generated_Image_4719he4719he4719.png?type=w773" 
                        alt="Laer Clinic Interior" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>

                <div className="space-y-12 font-sans text-[#2A1701]/80 leading-relaxed text-lg">
                    <p>
                        라에르(LAER)는 '당신(YOU)'이라는 의미의 프랑스어에서 영감을 받았습니다.<br />
                        우리는 획일화된 아름다움이 아닌,<br />
                        당신이 가진 고유의 선과 빛을 찾아드리는 것을 목표로 합니다.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 border-y border-stone-100">
                        <div>
                            <h3 className="font-serif text-xl text-[#2A1701] mb-4">정직한 진료</h3>
                            <p className="text-sm">불필요한 시술을 권하지 않습니다. 고객님의 피부 상태에<br />가장 적합한 최적의 솔루션만을 제안합니다.</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-[#2A1701] mb-4">프리미엄 공간</h3>
                            <p className="text-sm">단순한 병원을 넘어, 온전한 휴식을 경험하실 수 있는<br />프라이빗하고 품격 있는 공간을 제공합니다.</p>
                        </div>
                    </div>

                    <p className="pt-12 border-t border-stone-50 font-serif text-[20px] text-[#2A1701] leading-relaxed tracking-tight">
                        최첨단 장비와 풍부한 임상 경험을 바탕으로,<br />
                        시간이 흘러도 변치 않는 가치를 선사하겠습니다.<br />
                        라에르와 함께 당신의 가장 빛나는 순간을 완성하세요.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;

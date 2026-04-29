import { motion } from "motion/react";
import { MapPin, Phone, Clock, Train, Bus } from "lucide-react";

const LocationPage = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-4 block tracking-[0.3em] uppercase underline-offset-8">Directions</span>
                <h1 className="font-serif text-4xl md:text-5xl text-[#2A1701] mb-12 leading-tight">
                    라에르 피부과로<br />오시는 길을 안내해 드립니다.
                </h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Map Area */}
                    <a 
                        href="https://maps.app.goo.gl/8wP9hYZBKspmoyhS6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="lg:col-span-2 aspect-video lg:aspect-auto bg-stone-100 rounded-3xl overflow-hidden shadow-sm border border-stone-200 relative group cursor-pointer block"
                    >
                        {/* Placeholder for Map - In a real app, this would be a Google Maps or Kakao Maps embed */}
                        <img 
                            src="https://postfiles.pstatic.net/MjAyNjA0MjlfNzQg/MDAxNzc3NDQ5MjY1NTc2.CAoryGD2hrMqSdo8lyxciecMa92l6qLE8jThVCgaucIg.sAK2mwk7atOp7-XVHt6Xn2NsJRphaBuJP8Va6Qx17XAg.PNG/image.png?type=w773" 
                            alt="Map Location" 
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-[#2A1701]/5">
                             <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white flex flex-col items-center group-hover:scale-105 transition-transform">
                                <MapPin className="text-[#2A1701] mb-2" size={32} />
                                <span className="font-serif text-lg text-[#2A1701]">라에르 피부과</span>
                                <span className="text-xs text-[#2A1701]/60 mt-1">강남구 청담동 123-45 라에르빌딩 4-5F</span>
                                <div className="mt-4 px-4 py-2 bg-[#2A1701] text-white text-[10px] uppercase tracking-widest font-bold rounded-lg shadow-lg">구글 지도에서 보기</div>
                             </div>
                        </div>
                    </a>

                    {/* Info Area */}
                    <div className="space-y-10">
                        <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                            <h3 className="font-serif text-xl text-[#2A1701] mb-6 flex items-center gap-2">
                                <MapPin size={20} /> 주소
                            </h3>
                            <p className="text-sm text-[#2A1701]/80 leading-relaxed">
                                서울특별시 강남구 청담동 123-45<br />
                                라에르빌딩 4-5F (청담역 8번 출구 도보 5분)
                            </p>
                        </div>

                        <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                            <h3 className="font-serif text-xl text-[#2A1701] mb-6 flex items-center gap-2">
                                <Clock size={20} /> 진료 시간
                            </h3>
                            <ul className="text-sm text-[#2A1701]/80 space-y-2">
                                <li className="flex justify-between"><span>평일</span> <span>10:00 - 19:30</span></li>
                                <li className="flex justify-between font-bold text-[#2A1701]"><span>수요일 (야간)</span> <span>10:00 - 21:00</span></li>
                                <li className="flex justify-between"><span>토요일</span> <span>10:00 - 16:00</span></li>
                                <li className="flex justify-between text-[#2A1701]/40 italic"><span>일요일/공휴일</span> <span>휴진</span></li>
                            </ul>
                        </div>

                        <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                            <h3 className="font-serif text-xl text-[#2A1701] mb-6 flex items-center gap-2">
                                <Phone size={20} /> 연락처
                            </h3>
                            <p className="text-2xl font-serif text-[#2A1701]">02-1234-5678</p>
                            <p className="text-xs text-[#2A1701]/60 mt-2">카카오톡 상담: @라에르피부과</p>
                        </div>
                    </div>
                </div>

                {/* Transportation */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-100 pt-12">
                    <div>
                        <h3 className="font-serif text-2xl text-[#2A1701] mb-6 flex items-center gap-3">
                            <Train size={24} className="text-[#2A1701]/40" /> 지하철 이용 시
                        </h3>
                        <p className="text-sm text-[#2A1701]/70 leading-relaxed">
                            <span className="font-bold text-[#2A1701]">7호선 청담역</span> 8번 출구에서 직진<br />
                            우리은행 사거리에서 좌회전 후 100m 위치 (도보 약 5분 소요)
                        </p>
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl text-[#2A1701] mb-6 flex items-center gap-3">
                            <Bus size={24} className="text-[#2A1701]/40" /> 버스 이용 시
                        </h3>
                        <p className="text-sm text-[#2A1701]/70 leading-relaxed">
                            <span className="font-bold text-[#2A1701]">청담역·경기고교 정류장</span> 하차<br />
                            간선: 143, 240, 362, 401<br />
                            지선: 2413, 3217, 4318, 4419
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LocationPage;

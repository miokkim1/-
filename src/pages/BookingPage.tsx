import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { useState } from "react";

const BookingPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        treatment: "",
        date: "",
        time: "",
        name: "",
        phone: "",
        memo: ""
    });

    const treatments = [
        "레이저 클리닉 (색소/흉터)",
        "리프팅 센터 (울세라/써마지)",
        "쁘띠 시술 (보톡스/필러)",
        "에스테틱/메디컬 스파",
        "일반 피부 질환 상담"
    ];

    const times = [
        "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-4 block tracking-[0.3em] uppercase underline-offset-8">Reservation</span>
                <h1 className="font-serif text-4xl md:text-5xl text-[#2A1701] mb-12 leading-tight">
                    아름다움을 위한<br />첫 걸음을 예약하세요.
                </h1>

                <div className="bg-white rounded-3xl shadow-xl shadow-[#2A1701]/5 border border-stone-100 overflow-hidden">
                    {/* Progress Bar */}
                    <div className="flex h-1 bg-stone-100">
                        <div 
                            className="bg-[#2A1701] transition-all duration-500" 
                            style={{ width: `${(step / 3) * 100}%` }}
                        />
                    </div>

                    <div className="p-8 md:p-12">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                <h2 className="font-serif text-2xl text-[#2A1701] mb-6">관심 있는 시술을 선택해 주세요.</h2>
                                <div className="grid grid-cols-1 gap-3">
                                    {treatments.map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => {
                                                setFormData({ ...formData, treatment: t });
                                                setStep(2);
                                            }}
                                            className={`w-full text-left px-6 py-4 rounded-xl border transition-all flex justify-between items-center group ${
                                                formData.treatment === t 
                                                ? "border-[#2A1701] bg-[#2A1701]/5 text-[#2A1701]" 
                                                : "border-stone-100 hover:border-stone-300 text-stone-600"
                                            }`}
                                        >
                                            <span className="font-sans text-sm">{t}</span>
                                            <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                <h2 className="font-serif text-2xl text-[#2A1701] mb-6">진료 희망 일시를 선택해 주세요.</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="text-[10px] font-bold text-[#2A1701] uppercase tracking-widest mb-3 block">날짜 선택</label>
                                        <input 
                                            type="date" 
                                            className="w-full px-4 py-3 rounded-xl border border-stone-100 focus:ring-1 focus:ring-[#2A1701] outline-none font-sans text-sm"
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-[#2A1701] uppercase tracking-widest mb-3 block">시간 선택</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {times.map(t => (
                                                <button
                                                    key={t}
                                                    onClick={() => setFormData({ ...formData, time: t })}
                                                    className={`py-2 rounded-lg border text-xs transition-all ${
                                                        formData.time === t 
                                                        ? "bg-[#2A1701] text-white border-[#2A1701]" 
                                                        : "border-stone-100 hover:border-stone-200 text-stone-500"
                                                    }`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-8">
                                    <button onClick={() => setStep(1)} className="text-stone-400 text-sm hover:text-stone-600">이전으로</button>
                                    <button 
                                        disabled={!formData.date || !formData.time}
                                        onClick={() => setStep(3)} 
                                        className="bg-[#2A1701] text-white px-8 py-3 rounded-full text-sm disabled:opacity-30"
                                    >
                                        다음 단계
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                <h2 className="font-serif text-2xl text-[#2A1701] mb-6">연락처를 남겨주시면 확인 후 안내해 드립니다.</h2>
                                <div className="space-y-6">
                                    <div className="relative">
                                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                                        <input 
                                            type="text" 
                                            placeholder="성함"
                                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-100 focus:ring-1 focus:ring-[#2A1701] outline-none font-sans text-sm"
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                                        <input 
                                            type="tel" 
                                            placeholder="전화번호"
                                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-100 focus:ring-1 focus:ring-[#2A1701] outline-none font-sans text-sm"
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <MessageSquare size={18} className="absolute left-4 top-5 text-stone-400" />
                                        <textarea 
                                            placeholder="상담하고 싶은 내용을 자유롭게 적어주세요 (선택)"
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-100 focus:ring-1 focus:ring-[#2A1701] outline-none font-sans text-sm resize-none"
                                            onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between pt-8">
                                    <button onClick={() => setStep(2)} className="text-stone-400 text-sm hover:text-stone-600">이전으로</button>
                                    <button 
                                        disabled={!formData.name || !formData.phone}
                                        onClick={async () => {
                                            try {
                                                const submissionData = {
                                                    name: formData.name,
                                                    phone: formData.phone,
                                                    service: formData.treatment || "General Inquiry",
                                                    message: `[예약] 시술: ${formData.treatment}, 일시: ${formData.date} ${formData.time}, 메모: ${formData.memo}`,
                                                    source: "Booking System"
                                                };

                                                // Send to local DB for Dashboard
                                                const dbPromise = fetch("/api/submissions", {
                                                    method: "POST",
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify(submissionData),
                                                });

                                                // Send to Formspree (with Accept header and error logging)
                                                const formspreePromise = fetch("https://formspree.io/f/mykoggrg", {
                                                    method: "POST",
                                                    headers: { 
                                                        "Content-Type": "application/json",
                                                        "Accept": "application/json"
                                                    },
                                                    body: JSON.stringify(submissionData),
                                                }).then(async (res) => {
                                                    if (!res.ok) {
                                                        const errorData = await res.json().catch(() => ({}));
                                                        console.error("Formspree Error:", res.status, errorData);
                                                    }
                                                    return res;
                                                }).catch(err => {
                                                    console.error("Formspree Fetch Error:", err);
                                                    return { ok: false };
                                                });

                                                const [dbResponse] = await Promise.all([dbPromise, formspreePromise]);

                                                if (dbResponse.ok) {
                                                    alert("예약 신청이 완료되었습니다. 확인 후 곧 연락드리겠습니다.");
                                                    window.location.href = "/";
                                                } else {
                                                    throw new Error("서버 오류가 발생했습니다.");
                                                }
                                            } catch (error) {
                                                console.error("Submission error:", error);
                                                alert("신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
                                            }
                                        }} 
                                        className="bg-[#2A1701] text-white px-12 py-4 rounded-full text-sm disabled:opacity-30 shadow-lg shadow-[#2A1701]/20"
                                    >
                                        예약 신청 완료
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-stone-400 text-xs flex items-center justify-center gap-2">
                         신청 후 24시간 이내에 담당 실장이 확인 전화를 드립니다.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default BookingPage;

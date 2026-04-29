import { motion } from "motion/react";
import { MessageCircle, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const submissionData = {
                name: formData.name,
                phone: formData.phone,
                service: "Contact Inquiry",
                message: formData.message,
                source: "Contact Page"
            };

            // Send to local DB
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
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", message: "" });
                }, 5000);
            } else {
                throw new Error("서버 오류");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        }
    };

    return (
        <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="font-sans text-[10px] font-bold text-[#2A1701] mb-4 block tracking-[0.3em] uppercase opacity-60">Counseling & Inquiry</span>
                <h1 className="font-serif text-4xl text-[#2A1701] mb-6">상담 및 문의</h1>
                <p className="font-sans text-[#2A1701]/60 max-w-lg mx-auto text-sm leading-relaxed">
                    라에르는 고객님의 고민에 귀를 기울입니다. 궁금하신 점이나 상담이 필요하신 내용을 남겨주시면 정성껏 답변해 드리겠습니다.
                </p>
                <div className="w-12 h-px bg-[#2A1701]/20 mx-auto mt-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h2 className="font-serif text-xl text-[#2A1701] mb-8">연락처 및 위치</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-[#2A1701]/5 flex items-center justify-center shrink-0">
                                    <Phone size={18} className="text-[#2A1701]" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold text-[#2A1701]/40 uppercase tracking-widest mb-1">대표 번호</h3>
                                    <p className="text-[#2A1701] font-medium">02-1234-5678</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-[#2A1701]/5 flex items-center justify-center shrink-0">
                                    <MapPin size={18} className="text-[#2A1701]" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold text-[#2A1701]/40 uppercase tracking-widest mb-1">오시는 길</h3>
                                    <p className="text-[#2A1701] font-medium">서울특별시 강남구 청담동 123-45 라에르빌딩 4-5F</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-[#2A1701]/5 flex items-center justify-center shrink-0">
                                    <Clock size={18} className="text-[#2A1701]" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold text-[#2A1701]/40 uppercase tracking-widest mb-1">상담 가능 시간</h3>
                                    <p className="text-[#2A1701] font-medium leading-relaxed">
                                        평일: 10:00 - 19:30<br />
                                        토요일: 10:00 - 16:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a 
                        href="https://pf.kakao.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-8 bg-stone-50 rounded-3xl border border-stone-100 flex items-center justify-between group cursor-pointer hover:bg-stone-100 transition-colors block"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-[#FAE100] flex items-center justify-center">
                                <MessageCircle size={24} className="text-[#3C1E1E] fill-[#3C1E1E]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#2A1701] text-sm">카카오톡 1:1 상담</h3>
                                <p className="text-[10px] text-[#2A1701]/60">빠르고 편리한 채팅 상담</p>
                            </div>
                        </div>
                        <ArrowRight size={20} className="text-[#2A1701]/30 group-hover:text-[#2A1701] transition-colors" />
                    </a>
                </div>

                {/* Inquiry Form */}
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-[#2A1701]/5 border border-stone-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="text-[10px] font-bold text-[#2A1701] uppercase tracking-widest mb-3 block">성함</label>
                            <input 
                                required
                                type="text" 
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-5 py-4 rounded-2xl bg-stone-50 border-none focus:ring-1 focus:ring-[#2A1701] outline-none font-sans text-sm transition-all"
                                placeholder="성함을 입력해 주세요"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold text-[#2A1701] uppercase tracking-widest mb-3 block">연락처</label>
                            <input 
                                required
                                type="tel" 
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-5 py-4 rounded-2xl bg-stone-50 border-none focus:ring-1 focus:ring-[#2A1701] outline-none font-sans text-sm transition-all"
                                placeholder="연락처를 입력해 주세요"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold text-[#2A1701] uppercase tracking-widest mb-3 block">문의 내용</label>
                            <textarea 
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-5 py-4 rounded-2xl bg-stone-50 border-none focus:ring-1 focus:ring-[#2A1701] outline-none font-sans text-sm transition-all resize-none"
                                placeholder="문의사항을 자세히 남겨주시면 친절히 안내해 드리겠습니다."
                            />
                        </div>
                        
                        <div className="pt-4">
                            <button 
                                type="submit"
                                disabled={submitted}
                                className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-xl ${
                                    submitted 
                                    ? "bg-green-500 text-white shadow-green-200" 
                                    : "bg-[#2A1701] text-white hover:bg-[#422C10] shadow-[#2A1701]/10"
                                }`}
                            >
                                {submitted ? "전송 완료되었습니다" : "문의하기"}
                            </button>
                        </div>
                        
                        <p className="text-[10px] text-center text-[#2A1701]/30 leading-relaxed">
                            개인정보 수집 및 이용에 동의할 경우에만 전송됩니다.<br />
                            작성해주신 정보는 상담 목적으로만 사용됩니다.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

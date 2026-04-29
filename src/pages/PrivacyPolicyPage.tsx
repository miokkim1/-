import { motion } from "motion/react";

const PrivacyPolicyPage = () => {
    return (
        <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="font-serif text-3xl text-[#2A1701] mb-12">개인정보 처리방침</h1>
                
                <div className="space-y-10 font-sans text-[#2A1701]/80 leading-relaxed text-sm">
                    <section>
                        <h2 className="font-bold text-[#2A1701] mb-4 text-base">1. 개인정보의 처리 목적</h2>
                        <p>
                            라에르 피부과는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>홈페이지 회원가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리 등</li>
                            <li>민원사무 처리: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등</li>
                            <li>서비스 제공: 진료 및 예약 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공 등</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[#2A1701] mb-4 text-base">2. 개인정보의 처리 및 보유 기간</h2>
                        <p>
                            라에르 피부과는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>진료 정보: 의료법에 명시된 진료기록 보관 기준에 따름</li>
                            <li>홈페이지 회원 가입 및 관리: 홈페이지 탈퇴 시까지</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[#2A1701] mb-4 text-base">3. 정보주체의 권리·의무 및 그 행사방법</h2>
                        <p>
                            정보주체는 라에르 피부과에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-[#2A1701] mb-4 text-base">4. 처리하는 개인정보의 항목</h2>
                        <p>
                            라에르 피부과는 다음의 개인정보 항목을 처리하고 있습니다.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>수집항목: 성명, 연락처, 이메일, 예약 내역 등</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-[#2A1701] mb-4 text-base">5. 개인정보의 안전성 확보 조치</h2>
                        <p>
                            라에르 피부과는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                            <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화 등</li>
                        </ul>
                    </section>
                </div>
                
                <div className="mt-20 pt-10 border-t border-stone-100 text-[10px] text-[#2A1701]/40 uppercase tracking-widest">
                    Last updated: April 2024
                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicyPage;

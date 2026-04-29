import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trash2, Phone, Calendar, User, MessageSquare, ClipboardList, Lock, LogOut, ArrowRight, ShieldCheck } from "lucide-react";

interface Submission {
  id: number;
  name: string;
  phone: string;
  service: string;
  message: string;
  source: string;
  createdAt: string;
}

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const fetchSubmissions = async (pass: string) => {
    try {
      const response = await fetch("/api/submissions", {
        headers: { "x-admin-password": pass }
      });
      if (response.status === 401) {
        setIsLoggedIn(false);
        sessionStorage.removeItem("admin_auth_pass");
        return;
      }
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedPass = sessionStorage.getItem("admin_auth_pass");
    if (savedPass) {
      setIsLoggedIn(true);
      setLoading(true);
      fetchSubmissions(savedPass);
    }
    setIsInitialized(true);
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === "1234") {
      setIsLoggedIn(true);
      setLoading(true);
      fetchSubmissions(password);
      sessionStorage.setItem("admin_auth_pass", password);
    } else {
      setLoginError(true);
      setPassword("");
      setTimeout(() => setLoginError(false), 2000);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("admin_auth_pass");
  };

  const handleDelete = async (id: number) => {
    if (!confirm("정말 이 신청서를 삭제하시겠습니까?")) return;
    const currentPass = sessionStorage.getItem("admin_auth_pass") || "";
    try {
      const response = await fetch(`/api/submissions/${id}`, { 
        method: "DELETE",
        headers: { "x-admin-password": currentPass }
      });
      if (response.ok) {
        setSubmissions(submissions.filter((s) => s.id !== id));
      }
    } catch (error) {
      console.error("Error deleting submission:", error);
    }
  };

  if (!isInitialized) return null;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-stone-200 border border-stone-100 max-w-md w-full"
        >
          <div className="w-20 h-20 bg-stone-900 rounded-[2rem] flex items-center justify-center mb-10 mx-auto shadow-xl shadow-stone-200">
            <Lock size={32} className="text-white" />
          </div>
          
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl text-stone-900 mb-3">Admin Portal</h1>
            <p className="text-stone-400 text-sm">관리자 비밀번호를 입력해 주세요.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                autoFocus
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••"
                className={`w-full px-8 py-5 bg-stone-50 rounded-2xl border-2 outline-none transition-all text-center tracking-[0.5em] text-2xl ${
                  loginError ? "border-red-200 bg-red-50 text-red-500 placeholder-red-200" : "border-transparent focus:border-stone-100 focus:bg-white"
                }`}
              />
              <AnimatePresence>
                {loginError && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-[10px] text-center mt-3 font-bold uppercase tracking-widest"
                  >
                    Incorrect credentials
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            
            <button
              type="submit"
              className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-stone-800 transition-all shadow-xl shadow-stone-200 active:scale-[0.98]"
            >
              Access Dashboard
              <ArrowRight size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-800"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center shadow-lg shadow-stone-200">
              <ShieldCheck size={28} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="font-serif text-3xl text-stone-900">Dashboard</h1>
                <button 
                  onClick={handleLogout}
                  className="text-stone-300 hover:text-red-500 p-2 transition-all rounded-xl hover:bg-red-50"
                  title="로그아웃"
                >
                  <LogOut size={20} />
                </button>
              </div>
              <p className="text-stone-400 text-sm">상담 신청 및 예약 내역 관리</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={fetchSubmissions}
              className="bg-stone-50 hover:bg-stone-100 text-stone-600 px-5 py-3 rounded-xl text-xs font-bold transition-colors"
            >
              새로고침
            </button>
            <div className="bg-stone-900 px-6 py-3 rounded-xl flex items-center gap-4 shadow-lg shadow-stone-200">
              <ClipboardList size={18} className="text-stone-400" />
              <div>
                <p className="text-[9px] text-stone-400 uppercase font-black tracking-widest leading-none">Total</p>
                <p className="font-serif text-xl text-white leading-none mt-1">{submissions.length}</p>
              </div>
            </div>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center border border-stone-100 shadow-sm">
            <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare size={24} className="text-stone-300" />
            </div>
            <p className="text-stone-400">아직 접수된 상담 신청이 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submissions.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow group relative"
              >
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-6 right-6 p-2 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={18} />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-stone-50 rounded-2xl flex items-center justify-center">
                    <User size={18} className="text-stone-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">{item.name}</h3>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest">{item.source || "General"}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-stone-600">
                    <Phone size={14} />
                    <span className="text-sm">{item.phone}</span>
                  </div>
                  {item.service && (
                    <div className="flex items-center gap-3 text-stone-600">
                      <ClipboardList size={14} />
                      <span className="text-sm">{item.service}</span>
                    </div>
                  )}
                  {item.message && (
                    <div className="flex items-start gap-3 text-stone-500 bg-stone-50 p-4 rounded-2xl">
                      <MessageSquare size={14} className="mt-1 flex-shrink-0" />
                      <p className="text-xs leading-relaxed">{item.message}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-stone-50 text-[10px] text-stone-400">
                  <Calendar size={10} />
                  <span>{new Date(item.createdAt).toLocaleString("ko-KR")}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;


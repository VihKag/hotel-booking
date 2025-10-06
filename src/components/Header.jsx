/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import logoHouse from "../assets/images/ga5feuimiigjo5epiwk7sbxd2pej_A3_PNG.png";
const branches = [
  "Nexus House An Sơn Đà Lạt",
  "Nexus House Retreat Làng Báo Chí",
  "Nexus House Nguyễn Bỉnh Khiêm",
  "Nexus House Garden Thảo Điền",
  "Nexus House Cây Điệp",
  "Nexus House Hillside Phú Quốc",
];

const languages = [
  { code: "vi", label: "Tiếng Việt" },
  { code: "en", label: "English" },
];

export default function Header() {
  //const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  // Đóng dropdown khi click ngoài
  const branchRef = useRef();
  const langRef = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (branchRef.current && !branchRef.current.contains(e.target))
        setBranchOpen(false);
      if (langRef.current && !langRef.current.contains(e.target))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Theo dõi scroll để đổi nền
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between container h-20">
          {/* Logo giữa */}
          <div className="flex flex-col items-center justify-start h-20">
            <div className="flex items-center h-20">
              
            <Link to="/">
              <img src={logoHouse} alt="Nexus House" className="size-16" />
            </Link>
            </div>
          </div>

          {/* Left menu */}
          <nav className="flex items-center gap-10 justify-end flex-1 mr-4">
            {/* Chi nhánh Nexus dropdown */}
            <div className="relative" ref={branchRef}>
              <div
                onMouseEnter={() => setBranchOpen(true)}
                onClick={() => setBranchOpen((v) => !v)}
                className="flex items-center gap-1 font-medium text-white group relative transition-colors cursor-pointer"
              >
                <span className="menu-underline group-hover:text-red-700">
                  Chi nhánh Nexus
                </span>
                <ChevronDown className="w-4 h-4 group-hover:text-red-700" />
              </div>
              {branchOpen && (
                <div
                  className="absolute left-0 mt-2 bg-black border border-neutral-800 rounded shadow-lg min-w-[220px] z-50"
                  onMouseEnter={() => setBranchOpen(true)}
                  onMouseLeave={() => setBranchOpen(false)}
                >
                  {branches.map((b) => (
                    <Link
                      key={b}
                      to={`/branch/${b
                          .normalize("NFD") // tách dấu ra khỏi ký tự
                          .replace(/[\u0300-\u036f]/g, "") // xóa dấu
                          .replace(/đ/g, "d") // đ -> d
                          .replace(/Đ/g, "D") // Đ -> D
                          .toLowerCase()
                          .replace(/[^a-z0-9\s-]/g, "") // loại ký tự đặc biệt
                          .trim()
                          .replace(/\s+/g, "-")}`}
                      onClick={() => {
                        setSelectedBranch(b);
                        setBranchOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-white hover:bg-red-600 hover:text-white transition no-underline`}
                    >
                      {b}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="menu-underline no-underline text-white font-medium group transition-colors"
            >
              Giới thiệu về Nexus
            </Link>

            <Link
              to="/news"
              className="menu-underline no-underline text-white font-medium group transition-colors"
            >
              Tin tức
            </Link>

            <Link
              to="/career"
              className="menu-underline no-underline text-white font-medium group transition-colors"
            >
              Tuyển dụng
            </Link>

            <Link
              to="/contact"
              className="menu-underline no-underline text-white font-medium group transition-colors"
            >
              Liên hệ
            </Link>

            {/* Ngôn ngữ dropdown */}
            <div className="relative" ref={langRef}>
              <div
                onMouseEnter={() => setLangOpen(true)}
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 font-medium text-white group relative transition-colors cursor-pointer"
              >
                <span className="menu-underline group-hover:text-red-700">
                  Ngôn ngữ
                </span>
                <ChevronDown className="w-4 h-4 group-hover:text-red-700" />
              </div>
              {langOpen && (
                <div
                  className="absolute left-0 mt-2 bg-black border border-neutral-800 rounded shadow-lg min-w-[140px] z-50"
                  onMouseEnter={() => setLangOpen(true)}
                  onMouseLeave={() => setLangOpen(false)}
                >
                  {languages.map((l) => (
                    <Link
                      key={l.code}
                      to={`?lang=${l.code}`}
                      onClick={() => {
                        setSelectedLang(l);
                        setLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-white hover:bg-red-600 hover:text-white transition no-underline`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Booking button */}
          <div className="flex items-center">
            <Link
              to="/booking"
              className="ml-auto font-medium text-white hover:text-red-600 px-4 py-2 rounded transition-colors text-lg tracking-wide no-underline"
              style={{ letterSpacing: 1 }}
            >
              BOOKING
            </Link>
          </div>
        </div>
      </div>
      {/* Custom CSS for underline animation */}
      <style>{`
        .menu-underline {
          position: relative;
          display: inline-block;
          transition: color 0.2s;
        }
        .menu-underline::after {
          content: "";
          position: absolute;
          left: 0; bottom: -2px;
          width: 0;
          height: 2px;
          background: #e11d48;
          transition: width 0.3s;
        }
        .group:hover .menu-underline,
        .menu-underline:hover {
          color: #e11d48 !important;
        }
        .group:hover .menu-underline::after,
        .menu-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}

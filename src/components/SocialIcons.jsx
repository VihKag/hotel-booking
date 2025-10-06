import { MessageCircle, Phone } from "lucide-react"

export default function SocialIcons() {
  return (
    <div className="social-fixed hidden md:flex">
      {/* Messenger */}
      <a href="#messenger" className="social-icon bg-[#0084FF] hover:bg-[#0073E6]" aria-label="Messenger">
        <MessageCircle className="h-5 w-5 text-white" />
      </a>

      {/* Zalo */}
      <a href="#zalo" className="social-icon bg-[#0068FF] hover:bg-[#0056D6]" aria-label="Zalo">
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.738 4.304 1.986 5.972L2.05 21.95l4.028-1.936A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.5 13.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z" />
        </svg>
      </a>

      {/* Phone */}
      <a href="tel:+84" className="social-icon bg-[#25D366] hover:bg-[#1EBE57]" aria-label="Phone">
        <Phone className="h-5 w-5 text-white" />
      </a>
    </div>
  )
}

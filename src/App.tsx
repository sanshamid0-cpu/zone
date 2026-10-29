import React, { useState } from 'react';
import {
  Tv,
  Play,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Phone,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Smartphone,
  Monitor,
  Flame,
  CreditCard,
  Send,
  HelpCircle,
  Info,
  Clock,
  ArrowRight,
  Edit3,
  Sliders,
  Radio,
  Wifi,
  Download,
  FileCheck,
  Tag,
  Film,
  Layers,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Gift,
  Award,
  Video,
  Eye,
  X,
  RefreshCw,
  HardDrive,
  Bot,
  Activity,
  Cast,
  Trophy,
  Dribbble,
  Users
} from 'lucide-react';

interface MonthlyRateItem {
  id: string;
  serviceName: string;
  safeAlias: string;
  screenType: string;
  pricePKR: number;
  duration: string;
  badge: string;
  badgeColor: string;
  highlighterStyle: string;
  features: string[];
  image: string;
}

interface SoftwareDownload {
  id: number;
  name: string;
  badge: string;
  highlighterBadge: string;
  version: string;
  fileSize: string;
  compatibility: string;
  downloadUrl: string;
  cardGlow: string;
  btnStyle: string;
}

interface PaidPlayer {
  id: string;
  name: string;
  urduName: string;
  tag: string;
  highlighterTag: string;
  priceNote: string;
  description: string;
  platforms: string[];
  features: string[];
  activationTime: string;
  imageProofPath?: string;
  developerInfo: string;
  iconGradient?: string;
}

export default function App() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('N-Stream Ultra 4K (TV Screen) - Rs. 1000');
  const [selectedPlayer, setSelectedPlayer] = useState('OraPro IPTV Player');
  const [macAddress, setMacAddress] = useState('');
  const [deviceKey, setDeviceKey] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [expandedPlayerId, setExpandedPlayerId] = useState<string | null>('ora-hub');
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);
  const [activeScreenSlide, setActiveScreenSlide] = useState<'stadium' | 'cinema' | 'scifi' | 'profiles' | 'youtube'>('stadium');

  // OFFICIAL 1-MONTH RATES WITH HIGHLIGHTER COLORS & COPYRIGHT-SAFE LABELS
  const monthlyRates: MonthlyRateItem[] = [
    {
      id: 'nstream-tv',
      serviceName: 'N-Stream Ultra 4K (TV Screen)',
      safeAlias: 'RedFlix Cinema 4K TV Profile',
      screenType: 'Smart TV, Firestick & Android TV Screen',
      pricePKR: 1000,
      duration: '1 Month',
      badge: 'TV 4K Ultra',
      badgeColor: 'bg-[#ff0055]/20 text-[#ff007f] border-[#ff007f]/50',
      highlighterStyle: 'border-[#ff007f] shadow-[0_0_30px_rgba(255,0,127,0.35)]',
      features: [
        'Dedicated Private Profile with custom PIN lock',
        'Ultra HD 4K & Dolby Vision stream quality',
        'Direct login on Smart TV, Firestick, Apple TV',
        'Zero interruptions & 30-day replacement warranty'
      ],
      image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.45_PM_ca2ad2dc.jpeg',
    },
    {
      id: 'nstream-mobile',
      serviceName: 'N-Stream Mobile HD',
      safeAlias: 'RedFlix Mobile Personal Screen',
      screenType: 'Android & iOS Mobile / Tablet Screen',
      pricePKR: 800,
      duration: '1 Month',
      badge: 'Mobile FHD',
      badgeColor: 'bg-[#ccff00]/20 text-[#ccff00] border-[#ccff00]/50',
      highlighterStyle: 'border-[#ccff00] shadow-[0_0_30px_rgba(204,255,0,0.3)]',
      features: [
        'Private screen access for smartphone & tablet',
        'Full HD 1080p high-bitrate playback',
        'Offline movie and drama series downloads',
        'Instant 5-minute delivery on WhatsApp'
      ],
      image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.45_PM__2__c7cbbb13.jpeg',
    },
    {
      id: 'prime-stream',
      serviceName: 'PrimeVision Video Pass',
      safeAlias: 'A-Prime Cinema Ultra Screen',
      screenType: 'TV, Mobile, PC & Tablet Screen',
      pricePKR: 600,
      duration: '1 Month',
      badge: 'Prime 4K',
      badgeColor: 'bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]/50',
      highlighterStyle: 'border-[#00f0ff] shadow-[0_0_30px_rgba(0,240,255,0.35)]',
      features: [
        'Private profile for blockbuster movies & series',
        'Ultra 4K HDR playback & sports stream access',
        'Works on Samsung, LG, Firestick & Android devices',
        'Full 30-day uninterrupted guaranteed screen'
      ],
      image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.44_PM_fff9b4d8.jpeg',
    },
    {
      id: 'senbo-server',
      serviceName: 'Senbo (Cinevo) 4K Server',
      safeAlias: 'VIP Anti-Freeze Sports & Live TV Server',
      screenType: 'Live Channels, Sports & VOD Server',
      pricePKR: 1500,
      duration: '1 Month',
      badge: 'Live Sports VIP',
      badgeColor: 'bg-[#00ff66]/20 text-[#00ff66] border-[#00ff66]/50',
      highlighterStyle: 'border-[#00ff66] shadow-[0_0_30px_rgba(0,255,102,0.35)]',
      features: [
        'Dedicated Anti-Freeze 4K high-speed stream line',
        'Over 25,000+ live sports, cricket, football & drama feeds',
        'Compatible with OraPro, ORA, Kemet TV, Ibo One, Smart TV',
        'Raw 60 FPS live football & ICC cricket streams'
      ],
      image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.44_PM__1__170c5b46.jpeg',
    },
    {
      id: 'tube-premium-pass',
      serviceName: 'Tube-Premium Ad-Free Pass',
      safeAlias: 'Personal Ad-Free Video Streaming',
      screenType: 'All Devices (Phone, TV, PC)',
      pricePKR: 450,
      duration: '1 Month',
      badge: '6-Digit TV Ready',
      badgeColor: 'bg-[#ff6600]/20 text-[#ffaa00] border-[#ffaa00]/50',
      highlighterStyle: 'border-[#ffaa00] shadow-[0_0_30px_rgba(255,170,0,0.35)]',
      features: [
        '100% Ad-Free video streaming on your own account',
        'Background audio playback with screen locked',
        'Offline high-speed video and music downloads',
        'Instant activation on your personal TV code / email'
      ],
      image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.46_PM_40f49316.jpeg',
    },
    {
      id: 'smart-ai-gpt',
      serviceName: 'Smart AI GPT-4o Plus Pass',
      safeAlias: 'Private Premium AI Assistant Access',
      screenType: 'Web, iOS & Android Apps',
      pricePKR: 1200,
      duration: '1 Month',
      badge: 'Private AI',
      badgeColor: 'bg-[#a855f7]/20 text-[#c084fc] border-[#c084fc]/50',
      highlighterStyle: 'border-[#c084fc] shadow-[0_0_30px_rgba(192,132,252,0.35)]',
      features: [
        'Full GPT-4o, DALL-E image generation, Advanced Voice',
        'High-speed priority response with zero wait time',
        'Web browsing, Python code execution & data analysis',
        'Direct login credentials delivered via WhatsApp'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=80',
    },
  ];

  // PAID PLAYERS FROM USER'S SCREENSHOTS (ORA HUB, OraPro, ORA, Kemet TV, Ibo One, Ib Player, DuplexPro, Gravity)
  const paidPlayers: PaidPlayer[] = [
    {
      id: 'ora-hub',
      name: 'ORA HUB (All-In-One Player Suite)',
      urduName: 'اورا ہب پلیئر',
      tag: 'Official Master Suite',
      highlighterTag: 'bg-[#ff0055]/30 text-[#ff007f] border-[#ff007f]',
      priceNote: 'VIP 1 Year & Lifetime Access',
      developerInfo: 'Official Hub for Kemet TV, Ora Pro, DuplexPro & Gravity Player',
      description:
        'The official ORA HUB system consolidating Kemet TV, Ora Pro, DuplexPro, and Gravity Player into one high-voltage master entertainment hub.',
      platforms: ['Smart TV (Samsung/LG)', 'Firestick 4K', 'Android TV', 'Google TV', 'Apple TV'],
      features: [
        'Includes Kemet TV, Ora Pro, DuplexPro & Gravity Player setup',
        '5-Minute rapid activation with MAC & Device Key',
        'Ultra-sharp 4K HDR live stream engine',
        'Custom favorites & automatic EPG guide sync'
      ],
      activationTime: '5 Minutes',
      iconGradient: 'from-[#ff007f] via-rose-600 to-[#ccff00]',
      imageProofPath: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.45_PM__1__aecb195d.jpeg',
    },
    {
      id: 'orapro',
      name: 'OraPro IPTV Player',
      urduName: 'اورا پرو پلیئر',
      tag: 'Logicyel LLC Official',
      highlighterTag: 'bg-[#00f0ff]/30 text-[#00f0ff] border-[#00f0ff]',
      priceNote: 'Annual & Lifetime Activation',
      developerInfo: 'Developer: Logicyel LLC • Size: 12 MB • Rated 3+',
      description:
        'Official OraPro IPTV Player (M3U) by Logicyel LLC. High-performance engine built for Smart TVs, Firestick 4K, and Android TV boxes with dynamic poster art and smooth channel zapping.',
      platforms: ['Smart TV (Samsung/LG)', 'Firestick 4K', 'Android TV', 'Google TV', 'Apple TV'],
      features: [
        'Instant 5-Minute License Activation with MAC & Key',
        'Built-in Cinema continue-watching and series tracker',
        'Automatic multi-source audio and subtitle synchronization',
        'Zero-buffering multi-core hardware decoding engine'
      ],
      activationTime: '5 Minutes',
      iconGradient: 'from-[#00f0ff] via-teal-500 to-emerald-500',
      imageProofPath: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.24.08_PM__1__b8c6e48b.jpeg',
    },
    {
      id: 'ora-iptv',
      name: 'ORA IPTV Player',
      urduName: 'او آر اے آئی پی ٹی وی پلیئر',
      tag: '100K+ Downloads',
      highlighterTag: 'bg-[#ccff00]/30 text-[#ccff00] border-[#ccff00]',
      priceNote: '1 Year License Available',
      developerInfo: 'Developer: Logicyel • 4.1★ Rating • 13 MB',
      description:
        'Official ORA IPTV Player by Logicyel. Over 100K+ downloads. Modern, fluid, and minimalist media player engineered for ultra-fast stream loading and high clarity.',
      platforms: ['Samsung Tizen', 'LG WebOS', 'Fire TV Stick', 'Android Boxes & Phones'],
      features: [
        'Direct remote control color-key shortcuts',
        'Multi-screen split view for simultaneous live games',
        'Automatic channel list reload without restarting',
        'Easy QR-code and Device ID binding'
      ],
      activationTime: '5 Minutes',
      iconGradient: 'from-[#ccff00] via-emerald-400 to-teal-500',
      imageProofPath: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.24.08_PM__1__b8c6e48b.jpeg',
    },
    {
      id: 'kemet-tv',
      name: 'Kemet IPTV Player (Kemet TV)',
      urduName: 'کیمٹ ٹی وی (قیمت ٹی وی)',
      tag: 'Ancient Pharaoh Edition',
      highlighterTag: 'bg-[#ffaa00]/30 text-[#ffaa00] border-[#ffaa00]',
      priceNote: 'Affordable & High Speed',
      developerInfo: 'Developer: Logicyel LLC • Official Store App',
      description:
        'Official Kemet IPTV Player (M3U) with iconic Kemet TV golden pharaoh logo. Specially configured for resilient live sports broadcasting, crystal clear Full HD entertainment, and low bandwidth resilience.',
      platforms: ['All Android Devices', 'Smart STB Boxes', 'Smart TVs', 'Tablets'],
      features: [
        'Direct MAC address portal connection',
        'Built-in real-time stream speed test diagnostics',
        'Low memory consumption ideal for all box models',
        '24/7 dedicated server link stability'
      ],
      activationTime: '5-10 Minutes',
      iconGradient: 'from-[#ffaa00] via-amber-500 to-orange-600',
      imageProofPath: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.24.09_PM_5772ce06.jpeg',
    },
    {
      id: 'ibo-one',
      name: 'Ibo One IPTV Player',
      urduName: 'آئی بو ون پلیئر',
      tag: '5.0★ Top Rated',
      highlighterTag: 'bg-[#00ff66]/30 text-[#00ff66] border-[#00ff66]',
      priceNote: 'Lifetime & Annual License',
      developerInfo: 'Developer: Logicyel LLC • 5.0★ Rating • 8.5 MB',
      description:
        'Official Ibo One IPTV Player (M3U) by Logicyel LLC. Ranked 5.0 stars. Features "Your channels, instantly", "Movies in crisp 4K", and seamless multi-playlist switching into one unified interface.',
      platforms: ['Samsung Smart TV', 'LG WebOS', 'Vidaa OS', 'Android TV', 'Fire TV'],
      features: [
        'One-time lifetime device activation code',
        'Parental control with custom 4-digit PIN protection',
        'Dynamic EPG program timeline preview',
        'ExoPlayer and VLC internal dual-engine support'
      ],
      activationTime: '5 Minutes',
      iconGradient: 'from-[#00ff66] via-teal-400 to-cyan-500',
      imageProofPath: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.24.08_PM_066d61cc.jpeg',
    },
    {
      id: 'ib-player',
      name: 'Ib Player (IB Player Pro)',
      urduName: 'آئی بی پلیئر پرو',
      tag: '1M+ Downloads',
      highlighterTag: 'bg-[#ff007f]/30 text-[#ff007f] border-[#ff007f]',
      priceNote: '1 Year & Lifetime Access',
      developerInfo: 'Bright Horizon Mission LLC • 1M+ Downloads • 6.6 MB',
      description:
        'Official Ib Player (IB Player Pro) by Bright Horizon Mission LLC with over 1 Million+ downloads! Ultra-compact 6.6 MB app with lightning-fast zapping, zero memory bloat, and smooth 4K stream playback.',
      platforms: ['Samsung Tizen', 'LG WebOS', 'Android TV Box', 'Firestick', 'Windows PC'],
      features: [
        'Fast 5-minute license dispatch via WhatsApp',
        'Automatic poster art & movie cast metadata',
        'Custom favorite folders and channel filtering',
        'Anti-lag multi-buffer network caching'
      ],
      activationTime: '5 Minutes',
      iconGradient: 'from-rose-600 via-[#ff007f] to-amber-500',
      imageProofPath: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.24.06_PM_3cd5677e.jpeg',
    },
  ];

  // USER'S EXACT SOFTWARE DOWNLOADS
  const softwareDownloads: SoftwareDownload[] = [
    {
      id: 1,
      name: 'YouTube Premium TV',
      badge: 'Smart TV & Box',
      highlighterBadge: 'bg-[#ff0055]/30 text-[#ff007f] border-[#ff007f]',
      version: 'v4.1.2 Official APK',
      fileSize: '42 MB',
      compatibility: 'Android TV, Smart TV, Firestick & Mi Box (Zero Ads)',
      downloadUrl: 'https://apps786.xyz/official/tube_premium/app/youtube_premium_official_tv.apk',
      cardGlow: 'border-[#ff007f] shadow-[0_0_25px_rgba(255,0,127,0.3)]',
      btnStyle: 'bg-gradient-to-r from-[#ff0055] to-[#ff007f] text-white shadow-[#ff007f]/30',
    },
    {
      id: 2,
      name: 'YouTube Premium Mobile',
      badge: 'Mobile Edition',
      highlighterBadge: 'bg-[#ccff00]/30 text-[#ccff00] border-[#ccff00]',
      version: 'v19.4 APK',
      fileSize: '38 MB',
      compatibility: 'Android Phones, Tablets & Handhelds (Zero Ads)',
      downloadUrl: 'https://apps786.xyz/official/tube_premium/app/youtube_premium_mobile.apk',
      cardGlow: 'border-[#ccff00] shadow-[0_0_25px_rgba(204,255,0,0.3)]',
      btnStyle: 'bg-[#ccff00] hover:bg-[#b8e600] text-slate-950 shadow-[#ccff00]/30',
    },
    {
      id: 3,
      name: 'Cinevo TV',
      badge: 'Official Portal',
      highlighterBadge: 'bg-[#00f0ff]/30 text-[#00f0ff] border-[#00f0ff]',
      version: 'Latest Release',
      fileSize: 'Direct Store',
      compatibility: 'All Smart TVs, Android Box, Fire TV & Mobile',
      downloadUrl: 'https://download.cinevo.store/',
      cardGlow: 'border-[#00f0ff] shadow-[0_0_25px_rgba(0,240,255,0.3)]',
      btnStyle: 'bg-gradient-to-r from-[#00f0ff] to-cyan-500 text-slate-950 shadow-[#00f0ff]/30',
    },
    {
      id: 4,
      name: 'Boss TV (BosTV Prime)',
      badge: 'Prime Edition',
      highlighterBadge: 'bg-[#ffaa00]/30 text-[#ffaa00] border-[#ffaa00]',
      version: 'Prime v13 APK',
      fileSize: '31 MB',
      compatibility: 'Smart TV, Android Box, Fire TV Stick & Phones',
      downloadUrl: 'https://tinyurl.com/preview/download/BosTVPrime13',
      cardGlow: 'border-[#ffaa00] shadow-[0_0_25px_rgba(255,170,0,0.3)]',
      btnStyle: 'bg-gradient-to-r from-[#ffaa00] to-orange-500 text-slate-950 shadow-[#ffaa00]/30',
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const openWhatsApp = (customMessage?: string) => {
    const text =
      customMessage ||
      'Hello TV Zone, I want to inquire about Paid Player Activation & Subscription packages.';
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/923272472760?text=${encoded}`, '_blank');
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*NEW ACTIVATION ORDER - TV ZONE*\n--------------------------------\n*Customer:* ${customerName || 'Customer'}\n*Service / Package:* ${selectedPlan}\n*Player App:* ${selectedPlayer}\n*Device MAC Address:* ${macAddress || 'Not Provided'}\n*Device Key / PIN:* ${deviceKey || 'Not Provided'}\n*Payment Method:* Easypaisa / JazzCash / Raast\n--------------------------------\nPlease process activation in 5 mins.`;
    openWhatsApp(msg);
    setOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020509] text-slate-100 font-sans selection:bg-[#ccff00] selection:text-slate-950 overflow-x-hidden relative">
      {/* HIGHLIGHTER NEON AMBIENT GLOWS */}
      <div className="fixed top-0 left-10 w-[550px] h-[550px] bg-[#ccff00]/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="fixed top-1/4 right-0 w-[600px] h-[600px] bg-[#ff007f]/15 rounded-full blur-[200px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-1/3 w-[650px] h-[650px] bg-[#00f0ff]/12 rounded-full blur-[190px] pointer-events-none -z-10" />

      {/* CONTINUOUS MOVING HEADER TICKER WITH HIGHLIGHTER COLORS */}
      <div className="bg-gradient-to-r from-[#031508] via-[#14000b] to-[#011419] border-b-2 border-[#ccff00]/60 overflow-hidden py-2.5 text-xs relative z-50 shadow-[0_0_20px_rgba(204,255,0,0.25)]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 font-black tracking-wider uppercase">
          <span className="flex items-center gap-2 text-[#ccff00]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-ping"></span>
            TV ZONE LIVE: 4K ULTRA HDR STREAMING INFRASTRUCTURE
          </span>
          <span className="text-[#ff007f] font-bold">
            📺 N-STREAM 4K TV: RS. 1000 • N-STREAM MOBILE: RS. 800 • PRIMEVISION: RS. 600 • SENBO SERVER: RS. 1500
          </span>
          <span className="text-[#00f0ff]">
            ⚡ VERIFIED PLAYERS: ORA HUB • OraPro • ORA IPTV • Kemet TV • Ibo One • Ib Player Pro
          </span>
          <span className="flex items-center gap-1.5 text-[#ccff00] font-mono">
            💳 EASYPAISA / JAZZCASH: 0314 2229545
          </span>
          <span className="flex items-center gap-1.5 text-[#ffaa00] font-mono">
            📞 WHATSAPP & RAAST ID: 0327 2472760
          </span>
        </div>
      </div>

      {/* NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-[#020509]/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo with Highlighter Neon Badge */}
          <div className="flex items-center gap-3.5">
            <div className="relative group">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#ccff00] via-[#00f0ff] to-[#ff007f] p-0.5 shadow-[0_0_25px_rgba(204,255,0,0.4)] group-hover:shadow-[0_0_35px_rgba(255,0,127,0.5)] transition-all">
                <div className="w-full h-full bg-[#050b12] rounded-[14px] flex items-center justify-center">
                  <Tv className="w-7 h-7 text-[#ccff00] group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#ff007f] rounded-full border-2 border-[#020509] animate-ping"></span>
            </div>

            <div>
              <div className="flex items-center gap-2 font-black text-2xl tracking-wider">
                <span className="bg-gradient-to-r from-[#ccff00] via-[#00ff66] to-white bg-clip-text text-transparent drop-shadow-md">
                  TV
                </span>
                <span className="bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ffaa00] bg-clip-text text-transparent drop-shadow-md">
                  ZONE
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-black">
                ORA HUB • Kemet TV • Ibo One • 4K Live
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-black text-slate-300">
            <a
              href="#rate-list"
              className="text-[#ff007f] hover:text-[#ff3399] transition-colors flex items-center gap-1.5 bg-[#ff007f]/15 px-3.5 py-1.5 rounded-full border border-[#ff007f]/40 shadow-[0_0_15px_rgba(255,0,127,0.2)]"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Monthly Rate List (ریٹ لسٹ)</span>
            </a>
            <a href="#paid-players" className="hover:text-[#ccff00] transition-colors flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>Paid Players (تصاویر و اسپیلنگ)</span>
            </a>
            <a href="#downloads" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Software Download</span>
            </a>
            <a href="#payments" className="hover:text-[#ccff00] transition-colors">
              Payment Accounts
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:03272472760"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>0327-2472760</span>
            </a>

            <button
              onClick={() => openWhatsApp()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ccff00] hover:bg-[#b3e600] text-slate-950 font-black text-xs shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>WhatsApp Chat</span>
            </button>
          </div>
        </div>
      </header>

      {/* DYNAMIC HERO SECTION WITH REAL SCREENSHOTS & VIBRANT HIGHLIGHTER PALETTE */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Glowing Highlighter Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border-2 border-[#ccff00] text-xs font-black mb-6 shadow-[0_0_20px_rgba(204,255,0,0.35)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-ping" />
                <span className="text-[#ccff00] uppercase tracking-wider">
                  ORA HUB • OraPro • Kemet TV • Ibo One • Ib Player • 4K Live
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-[#ccff00] via-[#00ff66] to-[#00f0ff] bg-clip-text text-transparent drop-shadow-lg">
                  TV ZONE
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#ff007f] via-[#ff0055] to-[#ffaa00] bg-clip-text text-transparent drop-shadow-lg">
                  Live Sports & 4K Cinema
                </span>{' '}
                Hub
              </h1>

              <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Live football stadium broadcasts, cricket, 4K blockbuster movies, and verified 5-minute licensing for{' '}
                <strong className="text-[#ccff00]">ORA HUB</strong>,{' '}
                <strong className="text-[#00f0ff]">OraPro</strong>,{' '}
                <strong className="text-[#ffaa00]">Kemet TV</strong>,{' '}
                <strong className="text-[#00ff66]">Ibo One</strong>, and{' '}
                <strong className="text-[#ff007f]">Ib Player Pro</strong>.
              </p>

              {/* THREE HERO BUTTONS WITH VIBRANT HIGHLIGHTER BORDERS & GLOWS */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                {/* Button 1: Paid Players (Highlighter Lime / Neon Green) */}
                <a
                  href="#paid-players"
                  className="px-7 py-3.5 rounded-2xl bg-[#ccff00] hover:bg-[#b8e600] text-slate-950 font-black text-sm shadow-[0_0_25px_rgba(204,255,0,0.45)] transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <Zap className="w-4 h-4 fill-current text-slate-950" />
                  <span>Paid Players (پیڈ پلیئر)</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>

                {/* Button 2: Software Download (Highlighter Hot Pink) */}
                <a
                  href="#downloads"
                  className="px-7 py-3.5 rounded-2xl bg-[#ff007f] hover:bg-[#e6006c] text-white font-black text-sm shadow-[0_0_25px_rgba(255,0,127,0.45)] transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <Download className="w-4 h-4 stroke-[3]" />
                  <span>Software Download (سافٹ ویئر ڈاؤن لوڈ)</span>
                </a>

                {/* Button 3: Free 24h Test Trial (Highlighter Electric Cyan) */}
                <button
                  onClick={() =>
                    openWhatsApp(
                      'Hello TV Zone, I want to request a Free 24-Hour Test Trial for your 4K IPTV server.'
                    )
                  }
                  className="px-6 py-3.5 rounded-2xl bg-slate-900 border-2 border-[#00f0ff] hover:bg-[#00f0ff]/10 text-[#00f0ff] font-black text-sm transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-current text-[#00f0ff]" />
                  <span>Free 24h Test Trial (واٹس ایپ ٹرائل)</span>
                </button>
              </div>

              {/* Verified Accounts Bar with Highlighter Styling */}
              <div className="p-4 bg-slate-950/90 border-2 border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs shadow-lg">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#ccff00]" />
                  <span className="text-slate-400">Easypaisa / JazzCash:</span>
                  <strong className="text-[#ccff00] font-mono text-sm">0314 2229545</strong>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#ff007f]" />
                  <span className="text-slate-400">WhatsApp & Raast:</span>
                  <strong className="text-[#ff007f] font-mono text-sm">0327 2472760</strong>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: GORGEOUS MULTI-IMAGE CINEMA & LIVE SPORTS SHOWCASE USING USER'S ASSETS */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-gradient-to-b from-[#0a121d] to-[#04080e] border-2 border-[#ccff00]/70 rounded-3xl p-4 sm:p-5 shadow-[0_0_40px_rgba(204,255,0,0.2)] overflow-hidden">
                {/* Header with High-Impact Badges */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff007f] animate-ping" />
                    <span className="font-mono font-black text-[#ff007f] uppercase tracking-wider text-[11px]">
                      LIVE 4K BROADCAST DISPLAY
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#ccff00] bg-[#ccff00]/15 px-3 py-1 rounded-full border border-[#ccff00]/40 font-black">
                    <Wifi className="w-3.5 h-3.5" />
                    <span>CURVED OLED • 60 FPS</span>
                  </div>
                </div>

                {/* Primary Screen Area Using User's High-Resolution Images */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl group">
                  <img
                    src={
                      activeScreenSlide === 'stadium'
                        ? '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.44_PM__1__170c5b46.jpeg'
                        : activeScreenSlide === 'cinema'
                        ? '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.45_PM_ca2ad2dc.jpeg'
                        : activeScreenSlide === 'scifi'
                        ? '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.44_PM_fff9b4d8.jpeg'
                        : activeScreenSlide === 'profiles'
                        ? '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.45_PM__2__c7cbbb13.jpeg'
                        : '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.31.46_PM_40f49316.jpeg'
                    }
                    alt=""
                    className="w-full h-64 sm:h-76 object-cover filter brightness-[0.95] contrast-105 group-hover:scale-105 transition-transform duration-700 bg-slate-950"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Channel Banner on Top */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md border border-[#ccff00]/50 px-3 py-1 rounded-xl flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                    <span className="text-[11px] font-black text-white font-mono">
                      {activeScreenSlide === 'stadium' && 'CH 01 • 4K LIVE STADIUM SPORTS'}
                      {activeScreenSlide === 'cinema' && 'CH 02 • 4K ULTRA CINEMA THEATER'}
                      {activeScreenSlide === 'scifi' && 'CH 03 • 4K ACTION & ENTERTAINMENT'}
                      {activeScreenSlide === 'profiles' && 'CH 04 • 4K MULTI-SCREEN PROFILES'}
                      {activeScreenSlide === 'youtube' && 'CH 05 • 6-DIGIT TV INSTANT PAIRING'}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 bg-[#ff007f] text-white text-[10px] font-mono px-3 py-0.5 rounded-full font-black shadow-lg">
                    LIVE
                  </div>

                  {/* Bottom Player Control Bar */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ccff00] to-[#00f0ff] flex items-center justify-center text-slate-950 font-black shadow-md">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white">Senbo 4K Anti-Freeze Line</div>
                        <div className="text-[10px] text-[#ccff00] font-mono font-bold">
                          25,000+ Channels & VOD Stream Active
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-[#ccff00] border border-[#ccff00]/40 font-bold">
                        4K RAW
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-[#ff007f] border border-[#ff007f]/40 font-bold">
                        DOLBY 5.1
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Channel Switcher Buttons with Highlighter Accents */}
                <div className="grid grid-cols-5 gap-1.5 mt-3 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setActiveScreenSlide('stadium')}
                    className={`py-2 px-1 rounded-xl text-[10px] font-black transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      activeScreenSlide === 'stadium'
                        ? 'bg-[#ccff00] text-slate-950 shadow-[0_0_15px_rgba(204,255,0,0.5)]'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Football</span>
                  </button>

                  <button
                    onClick={() => setActiveScreenSlide('cinema')}
                    className={`py-2 px-1 rounded-xl text-[10px] font-black transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      activeScreenSlide === 'cinema'
                        ? 'bg-[#ff007f] text-white shadow-[0_0_15px_rgba(255,0,127,0.5)]'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Film className="w-3.5 h-3.5" />
                    <span>Cinema</span>
                  </button>

                  <button
                    onClick={() => setActiveScreenSlide('scifi')}
                    className={`py-2 px-1 rounded-xl text-[10px] font-black transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      activeScreenSlide === 'scifi'
                        ? 'bg-[#00f0ff] text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.5)]'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Heroes</span>
                  </button>

                  <button
                    onClick={() => setActiveScreenSlide('profiles')}
                    className={`py-2 px-1 rounded-xl text-[10px] font-black transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      activeScreenSlide === 'profiles'
                        ? 'bg-[#ffaa00] text-slate-950 shadow-[0_0_15px_rgba(255,170,0,0.5)]'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Profiles</span>
                  </button>

                  <button
                    onClick={() => setActiveScreenSlide('youtube')}
                    className={`py-2 px-1 rounded-xl text-[10px] font-black transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      activeScreenSlide === 'youtube'
                        ? 'bg-[#ff0055] text-white shadow-[0_0_15px_rgba(255,0,85,0.5)]'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Tv className="w-3.5 h-3.5" />
                    <span>TV Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONTHLY RATE LIST WITH HIGHLIGHTER COLORS & EXACT PKR PRICES */}
      <section id="rate-list" className="py-20 bg-[#030811] border-y-2 border-slate-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff007f]/20 border-2 border-[#ff007f] text-[#ff007f] text-xs font-black uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(255,0,127,0.35)]">
              <Tag className="w-4 h-4 text-[#ff007f]" />
              <span>Official 1-Month Verified Rate List (ایک ماہ کی ریٹ لسٹ)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Subscription Rates (1 Month)
            </h2>
            <p className="text-slate-200 text-sm mt-2 font-medium">
              All prices are for 1 Month with guaranteed replacement warranty. Select any service to order via WhatsApp!
            </p>
          </div>

          {/* Rate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyRates.map((item) => (
              <div
                key={item.id}
                className={`bg-gradient-to-b from-slate-900 to-[#070e17] border-2 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${item.highlighterStyle}`}
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-5 border border-slate-800">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover filter brightness-[0.95] contrast-105 hover:scale-105 transition-transform duration-500 bg-slate-950"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-mono uppercase px-3 py-1 rounded-full border-2 ${item.badgeColor} font-black backdrop-blur-md shadow-md`}>
                        {item.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[11px] font-mono text-[#ccff00] font-bold bg-slate-950/90 px-3 py-1 rounded-md border border-slate-700">
                        {item.screenType}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-1">{item.serviceName}</h3>
                  <div className="text-[11px] text-slate-400 font-mono mb-3 font-semibold">
                    {item.safeAlias}
                  </div>

                  {/* Price Tag in PKR */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-[#ccff00] font-mono drop-shadow-[0_0_10px_rgba(204,255,0,0.4)]">
                      Rs. {item.pricePKR.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-300 font-bold">/ {item.duration}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5 stroke-[3]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPlan(`${item.serviceName} - Rs. ${item.pricePKR}/month`);
                    setOrderModalOpen(true);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ccff00] via-[#00ff66] to-[#00f0ff] hover:opacity-90 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer hover:scale-105"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp (Rs. {item.pricePKR})</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP PROMINENT COLORFUL SOFTWARE DOWNLOADS WITH HIGHLIGHTER THEMES */}
      <section id="downloads" className="py-16 bg-[#02070e] border-b-2 border-slate-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f0ff]/20 border-2 border-[#00f0ff] text-[#00f0ff] text-xs font-black uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              <Download className="w-4 h-4 text-[#00f0ff] animate-bounce" />
              <span>Official Software Downloads & Direct Links</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Official Software Download Repository
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 font-medium">
              Click any button below to download the official APKs or open web stores directly.
            </p>
          </div>

          {/* Download Toast Notification */}
          {downloadSuccessToast && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border-2 border-[#ccff00] text-emerald-200 text-xs flex items-center justify-between gap-4 animate-in fade-in shadow-[0_0_25px_rgba(204,255,0,0.3)]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ccff00] stroke-[3]" />
                <span className="font-bold">{downloadSuccessToast} Direct link initiated!</span>
              </div>
              <button
                onClick={() => setDownloadSuccessToast(null)}
                className="text-emerald-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          )}

          {/* 4 Primary User Software Download Cards with Highlighter Themes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareDownloads.map((sw) => (
              <div
                key={sw.id}
                className={`bg-gradient-to-b from-slate-900 to-[#09111b] border-2 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group ${sw.cardGlow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border-2 border-slate-700 flex items-center justify-center text-white shadow-md font-bold">
                      <HardDrive className="w-6 h-6 text-[#ccff00]" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase px-3 py-1 rounded-full border-2 ${sw.highlighterBadge} font-black`}>
                      {sw.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white mb-1 group-hover:text-[#ccff00] transition-colors">
                    {sw.name}
                  </h3>
                  <div className="text-[11px] font-mono text-[#ccff00] mb-2 font-bold">
                    {sw.version} • {sw.fileSize}
                  </div>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed font-medium">
                    {sw.compatibility}
                  </p>
                </div>

                <div className="space-y-2">
                  <a
                    href={sw.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setDownloadSuccessToast(`Downloading ${sw.name}...`);
                      setTimeout(() => setDownloadSuccessToast(null), 5000);
                    }}
                    className={`w-full py-3.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer hover:scale-105 ${sw.btnStyle}`}
                  >
                    <Download className="w-4 h-4 stroke-[3]" />
                    <span>Download {sw.name}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(sw.downloadUrl, `link-${sw.id}`)}
                    className="w-full py-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white text-[10px] font-mono flex items-center justify-center gap-1 transition-colors border border-slate-800"
                  >
                    {copiedField === `link-${sw.id}` ? 'Link Copied!' : 'Copy Direct Link'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAID PLAYERS CATALOG (ORA HUB, OraPro, ORA, Kemet TV, Ibo One, Ib Player) */}
      <section id="paid-players" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-mono text-[#ccff00] tracking-wider mb-2 font-black">
              <Zap className="w-4 h-4 text-[#ccff00]" /> Official Player Licensing & Verified Screenshots
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Official Paid Player Collection
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl font-medium">
              Exact names verified with your images:{' '}
              <strong className="text-[#ff007f]">ORA HUB</strong>,{' '}
              <strong className="text-[#00f0ff]">OraPro IPTV Player</strong>,{' '}
              <strong className="text-[#ccff00]">ORA IPTV Player</strong>,{' '}
              <strong className="text-[#ffaa00]">Kemet IPTV Player (Kemet TV)</strong>,{' '}
              <strong className="text-[#00ff66]">Ibo One IPTV Player</strong>, and{' '}
              <strong className="text-[#ff007f]">Ib Player (IB Player Pro)</strong>. Click any card to expand full details!
            </p>
          </div>

          <button
            onClick={() => setOrderModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-slate-950 font-black text-xs shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105"
          >
            <Zap className="w-4 h-4 fill-current text-slate-950" />
            <span>Activate Player via MAC</span>
          </button>
        </div>

        {/* Players Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {paidPlayers.map((player) => {
            const isExpanded = expandedPlayerId === player.id;

            return (
              <div
                key={player.id}
                className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-gradient-to-b from-slate-900 to-[#0b131e] border-[#ccff00] shadow-[0_0_30px_rgba(204,255,0,0.25)]'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header Toggle */}
                <div
                  onClick={() => setExpandedPlayerId(isExpanded ? null : player.id)}
                  className="p-6 cursor-pointer flex items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Embedded User Screenshot Proof Thumbnail */}
                    {player.imageProofPath ? (
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-950 shrink-0 shadow-md">
                        <img
                          src={player.imageProofPath}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${player.iconGradient} flex items-center justify-center text-slate-950 font-black shadow-lg shrink-0`}
                      >
                        <Play className="w-7 h-7 fill-current ml-0.5" />
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-xl font-black text-white">{player.name}</h3>
                        <span className="text-xs text-slate-400 font-serif">({player.urduName})</span>
                        <span
                          className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border-2 ${player.highlighterTag} font-black`}
                        >
                          {player.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 flex items-center gap-3">
                        <span className="text-[#ccff00] font-black">{player.priceNote}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#ff007f]" /> {player.activationTime}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <span className="hidden sm:inline">{isExpanded ? 'Hide Specs' : 'Show Details'}</span>
                    <div
                      className={`w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center transition-transform ${
                        isExpanded ? 'rotate-180 bg-[#ccff00] text-slate-950' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800 space-y-5 animate-in fade-in duration-300">
                    <div className="text-[11px] font-mono text-[#ccff00] bg-slate-950/90 p-2.5 rounded-xl border border-slate-800 font-bold">
                      {player.developerInfo}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-medium">{player.description}</p>

                    <div>
                      <span className="text-[11px] font-mono text-[#00f0ff] block mb-2 uppercase font-black">
                        Compatible TVs & Devices:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {player.platforms.map((plat, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-slate-950 border border-slate-700 px-3 py-1 rounded-lg text-slate-200 font-bold"
                          >
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-[#ff007f] block mb-2 uppercase font-black">
                        Key Features & Capabilities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {player.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] shrink-0 stroke-[3]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-[11px] text-slate-400">
                        Activation ready via <strong className="text-white">MAC Address</strong> &{' '}
                        <strong className="text-white">Device Key</strong>.
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => {
                            setSelectedPlayer(player.name);
                            setOrderModalOpen(true);
                          }}
                          className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(204,255,0,0.35)] cursor-pointer hover:scale-105"
                        >
                          <Zap className="w-3.5 h-3.5 fill-current text-slate-950" />
                          <span>Activate {player.name}</span>
                        </button>
                        <button
                          onClick={() =>
                            openWhatsApp(
                              `Hello TV Zone, I want to activate ${player.name} (${player.urduName}). Please send the exact price and steps.`
                            )
                          }
                          className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#ccff00]" />
                          <span>Ask Price</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* OFFICIAL PAYMENT ACCOUNTS (Easypaisa 03142229545, JazzCash 03142229545, Raast 03272472760) */}
      <section id="payments" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-mono text-[#ccff00] tracking-wider mb-2 font-black">
            <CreditCard className="w-4 h-4 text-[#ccff00]" /> Official Payment Channels
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Payment Accounts (Fast Verification)
          </h2>
          <p className="text-slate-300 text-sm font-medium">
            Transfer using Easypaisa, JazzCash, or any Pakistani Bank via Raast ID. Click to copy and send your
            transaction receipt on WhatsApp at 0327-2472760 for 5-minute activation!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Easypaisa */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-[#ccff00] rounded-3xl p-6 shadow-[0_0_30px_rgba(204,255,0,0.25)] relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#ccff00]/20 border-2 border-[#ccff00] text-[#ccff00] flex items-center justify-center font-black text-xl">
                EP
              </div>
              <span className="text-[11px] font-mono bg-[#ccff00]/15 text-[#ccff00] px-3 py-1 rounded-full border border-[#ccff00]/40 font-black">
                Active 24/7
              </span>
            </div>

            <h3 className="text-xl font-black text-white mb-1">Easypaisa Account</h3>
            <p className="text-xs text-slate-400 mb-4 font-medium">Instant mobile transfer from any Easypaisa app</p>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 mb-4">
              <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">
                Account Number
              </span>
              <div className="text-2xl font-mono font-black text-[#ccff00] tracking-wider drop-shadow-md">
                0314 2229545
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('03142229545', 'easypaisa')}
              className="w-full py-3 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(204,255,0,0.35)] hover:scale-105"
            >
              {copiedField === 'easypaisa' ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Number Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Easypaisa Number</span>
                </>
              )}
            </button>
          </div>

          {/* JazzCash */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-[#ff007f] rounded-3xl p-6 shadow-[0_0_30px_rgba(255,0,127,0.25)] relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#ff007f]/20 border-2 border-[#ff007f] text-[#ff007f] flex items-center justify-center font-black text-xl">
                JC
              </div>
              <span className="text-[11px] font-mono bg-[#ff007f]/15 text-[#ff007f] px-3 py-1 rounded-full border border-[#ff007f]/40 font-black">
                Instant Credit
              </span>
            </div>

            <h3 className="text-xl font-black text-white mb-1">JazzCash Account</h3>
            <p className="text-xs text-slate-400 mb-4 font-medium">Same number as Easypaisa for convenience</p>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 mb-4">
              <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">
                Account Number
              </span>
              <div className="text-2xl font-mono font-black text-[#ff007f] tracking-wider drop-shadow-md">
                0314 2229545
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('03142229545', 'jazzcash')}
              className="w-full py-3 rounded-xl bg-[#ff007f] hover:bg-[#e6006c] text-white font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,0,127,0.35)] hover:scale-105"
            >
              {copiedField === 'jazzcash' ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Number Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy JazzCash Number</span>
                </>
              )}
            </button>
          </div>

          {/* Raast ID & WhatsApp */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-[#00f0ff] rounded-3xl p-6 shadow-[0_0_30px_rgba(0,240,255,0.25)] relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/20 border-2 border-[#00f0ff] text-[#00f0ff] flex items-center justify-center font-black text-xl">
                RAAST
              </div>
              <span className="text-[11px] font-mono bg-[#00f0ff]/15 text-[#00f0ff] px-3 py-1 rounded-full border border-[#00f0ff]/40 font-black">
                0% Fee Any Bank
              </span>
            </div>

            <h3 className="text-xl font-black text-white mb-1">Raast ID / Direct Call</h3>
            <p className="text-xs text-slate-400 mb-4 font-medium">Instant inter-bank Raast transfer & Call line</p>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 mb-4">
              <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">
                Raast ID & WhatsApp Number
              </span>
              <div className="text-2xl font-mono font-black text-[#00f0ff] tracking-wider drop-shadow-md">
                0327 2472760
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('03272472760', 'raast')}
              className="w-full py-3 rounded-xl bg-[#00f0ff] hover:bg-[#00d4e0] text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:scale-105"
            >
              {copiedField === 'raast' ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Raast ID Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Raast ID</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Receipt Submission Banner */}
        <div className="bg-slate-900 border-2 border-[#ff007f]/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_25px_rgba(255,0,127,0.2)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ff007f]/20 text-[#ff007f] flex items-center justify-center shrink-0 border border-[#ff007f]/40">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Send Proof on WhatsApp for 5-Min Activation</h4>
              <p className="text-xs text-slate-300 mt-0.5 font-medium">
                Transfer to Easypaisa/JazzCash (03142229545) or Raast (03272472760) and send the screenshot to{' '}
                <strong className="text-[#ccff00]">0327-2472760</strong> with your package or MAC address.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              openWhatsApp(
                'Hello TV Zone, I have transferred the payment. Please verify my screenshot and activate my service.'
              )
            }
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#ff007f] hover:bg-[#e6006c] text-white font-black text-xs flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,0,127,0.4)] hover:scale-105"
          >
            <Send className="w-4 h-4" />
            <span>Send Proof on WhatsApp</span>
          </button>
        </div>
      </section>

      {/* QUICK ACTIVATION & ORDER MODAL */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-slate-900 border-2 border-[#ccff00] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(204,255,0,0.3)]">
            <button
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800 text-xs px-2.5 py-1"
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase font-mono text-[#ccff00] tracking-wider mb-1 font-black">
                <Zap className="w-3.5 h-3.5" /> Instant Order Dispatch
              </div>
              <h3 className="text-2xl font-black text-white">Order Package or Activate Player</h3>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                Fill the details below. We will immediately receive your order on WhatsApp (0327-2472760)!
              </p>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-200 font-bold mb-1.5">Your Name:</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Hammad Ali"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#ccff00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-200 font-bold mb-1.5">Select Package / Rate:</label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#ccff00]"
                  >
                    <option value="N-Stream Ultra 4K (TV Screen) - Rs. 1000">N-Stream Ultra 4K (TV) - Rs. 1000</option>
                    <option value="N-Stream Mobile HD - Rs. 800">N-Stream Mobile HD - Rs. 800</option>
                    <option value="PrimeVision Video Pass - Rs. 600">PrimeVision Video Pass - Rs. 600</option>
                    <option value="Senbo (Cinevo) 4K Server - Rs. 1500">Senbo (Cinevo) 4K Server - Rs. 1500</option>
                    <option value="Tube-Premium Ad-Free Pass - Rs. 450">Tube-Premium Ad-Free Pass - Rs. 450</option>
                    <option value="Smart AI GPT-4o Plus Pass - Rs. 1200">Smart AI GPT-4o Plus Pass - Rs. 1200</option>
                    <option value="Paid Player License Only">Paid Player License Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-200 font-bold mb-1.5">Player / Device App:</label>
                  <select
                    value={selectedPlayer}
                    onChange={(e) => setSelectedPlayer(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#ff007f]"
                  >
                    <option value="ORA HUB">ORA HUB</option>
                    <option value="OraPro IPTV Player">OraPro IPTV Player</option>
                    <option value="ORA IPTV Player">ORA IPTV Player</option>
                    <option value="Kemet IPTV Player (Kemet TV)">Kemet IPTV Player (Kemet TV)</option>
                    <option value="Ibo One IPTV Player">Ibo One IPTV Player</option>
                    <option value="Ib Player (IB Player Pro)">Ib Player (IB Player Pro)</option>
                    <option value="Boss TV (BosTV Prime)">Boss TV (BosTV Prime)</option>
                    <option value="Cinevo TV">Cinevo TV</option>
                    <option value="YouTube Premium TV">YouTube Premium TV</option>
                    <option value="YouTube Premium Mobile">YouTube Premium Mobile</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-200 font-bold mb-1.5">
                    Device MAC Address (if applicable):
                  </label>
                  <input
                    type="text"
                    value={macAddress}
                    onChange={(e) => setMacAddress(e.target.value)}
                    placeholder="00:1A:79:XX:XX:XX"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 font-mono focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-bold mb-1.5">
                    Device Key / PIN (optional):
                  </label>
                  <input
                    type="text"
                    value={deviceKey}
                    onChange={(e) => setDeviceKey(e.target.value)}
                    placeholder="e.g. 123456"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 font-mono focus:outline-none focus:border-[#ff007f]"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border-2 border-slate-800 text-[11px] text-slate-300">
                <span className="font-bold text-[#ccff00]">Official Accounts:</span> Easypaisa/JazzCash:{' '}
                <strong className="text-white">03142229545</strong> | Raast/WhatsApp:{' '}
                <strong className="text-white">03272472760</strong>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ccff00] via-[#00ff66] to-[#00f0ff] hover:opacity-95 text-slate-950 font-black text-sm transition-all shadow-[0_0_25px_rgba(204,255,0,0.4)] cursor-pointer flex items-center justify-center gap-2 hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Submit Order via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-300 text-xs font-medium">Everything you need to know about our rates and activations</p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'What are your 1-month rates for N-Stream (Netflix), PrimeVision and Senbo?',
              a: 'N-Stream Ultra 4K (TV Screen) is Rs. 1000/mo, N-Stream Mobile is Rs. 800/mo, PrimeVision Video Screen is Rs. 600/mo, and Senbo (Cinevo) 4K Server is Rs. 1500/mo.',
            },
            {
              q: 'How do I get my free 24-hour test line?',
              a: 'Click on the "Free 24h Test Trial" button above or text us directly on WhatsApp at 03272472760 to receive your login credentials in 2 minutes.',
            },
            {
              q: 'What is the payment number for Easypaisa and JazzCash?',
              a: 'The verified number for both Easypaisa and JazzCash is 0314 2229545. For Raast zero-fee bank transfer, use 0327 2472760.',
            },
            {
              q: 'Which paid players are officially supported in the ORA HUB?',
              a: 'OraPro IPTV Player, ORA IPTV Player, Kemet IPTV Player (Kemet TV), Ibo One IPTV Player, Ib Player (IB Player Pro), DuplexPro, and Gravity Player.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-5 hover:border-[#ccff00]/40 transition-colors">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed pl-6 font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#010307] border-t-2 border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ccff00] to-[#ff007f] flex items-center justify-center text-slate-950 font-black">
                  <Tv className="w-5 h-5 text-slate-950" />
                </div>
                <span className="font-black text-xl tracking-wider text-white">
                  TV <span className="text-[#ff007f]">ZONE</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your premier source for verified OTT subscriptions, Senbo servers, and official ORA HUB, Kemet TV, Ibo
                One & Ib Player activations.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-3">Monthly Rates (1 Month)</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>N-Stream 4K TV Screen: Rs. 1000</li>
                <li>N-Stream Mobile: Rs. 800</li>
                <li>PrimeVision Video: Rs. 600</li>
                <li>Senbo 4K Server: Rs. 1500</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-3">Official Accounts</h4>
              <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                <li>Easypaisa: 0314 2229545</li>
                <li>JazzCash: 0314 2229545</li>
                <li>Raast ID: 0327 2472760</li>
                <li className="text-[#ccff00] font-sans font-bold">Active & Verified 24/7</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-3">Direct Support</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span>Call: 0327 2472760</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span>WhatsApp: 0327 2472760</span>
                </li>
              </ul>

              <button
                onClick={() => openWhatsApp()}
                className="w-full mt-3 py-2.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(204,255,0,0.35)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
            <div>© 2026 TV Zone. All rights reserved. 100% Original and Safe Content.</div>
            <div className="flex gap-4">
              <span>Fast 5-Min Activation</span>
              <span>Anti-Freeze Quality</span>
              <span>Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

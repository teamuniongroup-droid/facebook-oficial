import { useState, useEffect, useRef } from "react";
import turbinadorImg from "@/assets/turbinador.png";
import bonusImg from "@/assets/bonusimg.png";
import garantiaImg from "@/assets/garantia30dias.png";
import drMiguelImg from "@/assets/dr-miguel.png";
import reactLike from "@/assets/react-like.png";
import reactLove from "@/assets/react-love.png";
import reactWow from "@/assets/react-wow.png";

const HOTMART_LINK = "https://uniongroup.mycartpanda.com/checkout/207849699:1";

const CTAButton = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-2 my-4">
    <a
      href={HOTMART_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-accent border border-accent/80 text-accent-foreground px-10 py-4 rounded-full font-bold text-lg no-underline animate-pulse-btn"
    >
      {children}
    </a>
    <a
      href={HOTMART_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[hsl(220,46%,48%)] text-lg underline"
    >
      Agregar al carrito
    </a>
  </div>
);

/* SVG Icons matching Facebook's current design */
const FacebookLogo = () => (
  <svg viewBox="0 0 36 36" className="w-10 h-10" fill="url(#fb-gradient)">
    <defs>
      <linearGradient id="fb-gradient" x1="50%" x2="50%" y1="97.0782%" y2="0%">
        <stop offset="0%" stopColor="#0062E0" />
        <stop offset="100%" stopColor="#19AFFF" />
      </linearGradient>
    </defs>
    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
    <path d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" fill="#fff" />
  </svg>
);

const HomeIcon = ({ active }: { active?: boolean }) => (
  <svg viewBox="0 0 28 28" className="w-7 h-7" fill={active ? "hsl(220, 46%, 48%)" : "hsl(215, 8%, 47%)"}>
    <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.822 12.286L15.324 2.937C14.58 2.243 13.42 2.243 12.676 2.937L2.178 12.286C2.177 12.288 2.176 12.289 2.175 12.29A1.89 1.89 0 002.8 15.395L4 14.381V22.5C4 23.881 5.119 25 6.5 25H11C11.552 25 12 24.552 12 24V18C12 17.448 12.448 17 13 17H15C15.552 17 16 17.448 16 18V24C16 24.552 16.448 25 17 25H21.5C22.881 25 24 23.881 24 22.5V14.381L25.2 15.395A1.89 1.89 0 0025.825 12.29Z" />
  </svg>
);

const VideoIcon = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7" fill="hsl(215, 8%, 47%)">
    <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5C8 24.086 8.336 23.75 8.75 23.75H19.25C19.664 23.75 20 24.086 20 24.5C20 24.914 19.664 25.25 19.25 25.25H8.75ZM17.164 12.846L12.055 9.404C11.39 8.957 10.5 9.44 10.5 10.234V17.118C10.5 17.912 11.39 18.395 12.055 17.948L17.164 14.506C17.766 14.1 17.766 13.252 17.164 12.846ZM21.5 2.75H6.5C4.567 2.75 3 4.317 3 6.25V21.25C3 23.183 4.567 24.75 6.5 24.75H21.5C23.433 24.75 25 23.183 25 21.25V6.25C25 4.317 23.433 2.75 21.5 2.75ZM23.5 21.25C23.5 22.355 22.605 23.25 21.5 23.25H6.5C5.395 23.25 4.5 22.355 4.5 21.25V6.25C4.5 5.145 5.395 4.25 6.5 4.25H21.5C22.605 4.25 23.5 5.145 23.5 6.25V21.25Z" />
  </svg>
);

const MarketplaceIcon = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7" fill="hsl(215, 8%, 47%)">
    <path d="M17.5 23.75H21.25C22.216 23.75 23 22.966 23 22V16.856C22.386 17.1 21.71 17.25 21 17.25C19.882 17.25 18.855 16.858 18.062 16.206C17.268 16.858 16.24 17.25 15.122 17.25C14.005 17.25 12.978 16.858 12.184 16.206C11.39 16.858 10.362 17.25 9.244 17.25C8.126 17.25 7.099 16.858 6.305 16.206C5.512 16.858 4.484 17.25 3.366 17.25C2.656 17.25 1.98 17.1 1.366 16.856V22C1.366 22.966 2.15 23.75 3.116 23.75H6.866V18C6.866 17.586 7.202 17.25 7.616 17.25H16.75C17.164 17.25 17.5 17.586 17.5 18V23.75Z" />
  </svg>
);

const GroupsIcon = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7" fill="hsl(215, 8%, 47%)">
    <path d="M21.877 17.036C22.858 17.036 23.727 17.604 24.128 18.468L24.175 18.576C25.036 20.63 23.576 22.865 21.363 22.865H18.672C18.338 22.865 18.015 22.821 17.706 22.738C18.293 22.078 18.633 21.222 18.633 20.312V19.25C18.633 18.422 18.371 17.65 17.926 17.036H21.877ZM6.123 17.036C5.142 17.036 4.273 17.604 3.872 18.468L3.825 18.576C2.964 20.63 4.424 22.865 6.637 22.865H9.328C9.662 22.865 9.985 22.821 10.294 22.738C9.707 22.078 9.367 21.222 9.367 20.312V19.25C9.367 18.422 9.629 17.65 10.074 17.036H6.123Z" />
    <path d="M14 4.25C16.347 4.25 18.25 6.153 18.25 8.5C18.25 10.847 16.347 12.75 14 12.75C11.653 12.75 9.75 10.847 9.75 8.5C9.75 6.153 11.653 4.25 14 4.25ZM7.25 7.75C8.769 7.75 10 8.981 10 10.5C10 12.019 8.769 13.25 7.25 13.25C5.731 13.25 4.5 12.019 4.5 10.5C4.5 8.981 5.731 7.75 7.25 7.75ZM20.75 7.75C22.269 7.75 23.5 8.981 23.5 10.5C23.5 12.019 22.269 13.25 20.75 13.25C19.231 13.25 18 12.019 18 10.5C18 8.981 19.231 7.75 20.75 7.75Z" />
  </svg>
);

const MessengerIcon = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7" fill="hsl(215, 8%, 47%)">
    <path d="M14 2.042C7.373 2.042 2.042 7.036 2.042 13.213C2.042 16.634 3.647 19.7 6.25 21.704V25.354L9.755 23.422C10.892 23.736 12.155 23.958 13.471 23.958C13.647 23.958 13.822 23.953 14 23.946C20.627 23.946 25.958 18.952 25.958 12.775C25.958 6.598 20.627 2.042 14 2.042ZM15.125 16.896L12.354 13.917L7 16.896L12.896 10.604L15.75 13.583L21 10.604L15.125 16.896Z" />
  </svg>
);

const NotificationsIcon = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7" fill="hsl(215, 8%, 47%)">
    <path d="M7.847 23.488C9.207 23.488 11.443 23.024 14.025 20.538C16.606 23.024 18.843 23.488 20.202 23.488C21.069 23.488 21.661 23.295 21.891 23.202C22.247 23.064 22.432 22.662 22.296 22.306C22.175 21.986 21.867 21.808 21.544 21.835C20.128 22.204 18.02 21.694 15.87 19.639C17.957 17.182 20.05 13.171 17.81 8.476C17.573 7.986 17.283 7.508 16.946 7.06C15.665 5.424 13.611 4.463 11.502 4.489H11.481C9.394 4.515 7.381 5.479 6.138 7.06C5.798 7.508 5.509 7.986 5.275 8.476C3.01 13.225 5.165 17.288 7.31 19.758C5.116 21.855 3.008 22.357 1.531 21.963C1.23 21.897 0.925 22.056 0.789 22.344C0.654 22.632 0.752 22.98 1.026 23.136C1.308 23.292 2.141 23.488 7.847 23.488Z" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="hsl(215, 8%, 47%)">
    <path d="M6.5 1C9.538 1 12 3.462 12 6.5C12 7.796 11.562 8.992 10.828 9.95L14.414 13.536C14.789 13.904 14.789 14.509 14.414 14.877C14.075 15.209 13.551 15.243 13.175 14.978L13.073 14.877L9.95 10.828C8.992 11.562 7.796 12 6.5 12C3.462 12 1 9.538 1 6.5C1 3.462 3.462 1 6.5 1ZM6.5 2.5C4.291 2.5 2.5 4.291 2.5 6.5C2.5 8.709 4.291 10.5 6.5 10.5C8.709 10.5 10.5 8.709 10.5 6.5C10.5 4.291 8.709 2.5 6.5 2.5Z" />
  </svg>
);

const MenuDotsIcon = () => (
  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="hsl(215, 8%, 47%)">
    <path d="M10 4C11.105 4 12 3.105 12 2S11.105 0 10 0 8 .895 8 2s.895 2 2 2zm0 6c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm0 6c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" />
  </svg>
);

const LikeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1.5" fill="hsl(215, 8%, 47%)">
    <path d="M15.077 2C17.928 2 20 4.462 20 7.253C20 12.252 12.318 18 12 18C11.682 18 4 12.252 4 7.253C4 4.462 6.072 2 8.923 2C10.477 2 11.42 2.773 12 3.508C12.58 2.773 13.523 2 15.077 2Z" />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1.5" fill="hsl(215, 8%, 47%)">
    <path d="M12 2C6.477 2 2 6.027 2 11C2 13.263 2.89 15.321 4.377 16.9L3 21L7.455 19.379C8.862 19.773 10.395 20 12 20C17.523 20 22 15.973 22 11C22 6.027 17.523 2 12 2Z" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1.5" fill="hsl(215, 8%, 47%)">
    <path d="M12 2L5 9H9V16H15V9H19L12 2ZM5 20V22H19V20H5Z" />
  </svg>
);

/* Facebook Header - mobile style: logo left, icons right */
const FBHeader = () => (
  <header className="bg-card shadow-sm border-b border-border">
    <div className="max-w-[680px] mx-auto flex items-center justify-between px-4 h-[56px]">
      {/* Left: Facebook text logo */}
      <span className="text-[hsl(220,46%,48%)] text-[28px] font-bold tracking-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        facebook
      </span>

      {/* Right: +, Search, Messenger */}
      <div className="flex items-center gap-3">
        {/* Plus icon */}
        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:bg-border transition-colors">
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="hsl(214, 13%, 17%)">
            <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
          </svg>
        </div>
        {/* Search icon */}
        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:bg-border transition-colors">
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="hsl(214, 13%, 17%)">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        {/* Notification bell icon with badge */}
        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:bg-border transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="hsl(214, 13%, 17%)">
            <path d="M12 2C10.9 2 10 2.9 10 4C10 4.1 10 4.19 10.02 4.28C7.58 5.16 6 7.41 6 10V15L4 17V18H20V17L18 15V10C18 7.41 16.42 5.16 13.98 4.28C14 4.19 14 4.1 14 4C14 2.9 13.1 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" />
          </svg>
        </div>
      </div>
    </div>
  </header>
);

/* Left sidebar - Facebook current style */
const FBSidebarLeft = () => (
  <aside className="hidden xl:block w-[280px] flex-shrink-0 pt-4 pr-2 sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto">
    <div className="space-y-1">
      {[
        { icon: <div className="w-9 h-9 rounded-full bg-[hsl(220,46%,48%)] flex items-center justify-center text-white text-sm font-bold">U</div>, label: "Usuario" },
        { emoji: "👥", label: "Amigos" },
        { emoji: "🕐", label: "Recuerdos" },
        { emoji: "💾", label: "Guardado" },
        { emoji: "👥", label: "Grupos" },
        { emoji: "📺", label: "Video" },
        { emoji: "🏪", label: "Marketplace" },
        { emoji: "📰", label: "Feeds" },
        { emoji: "📅", label: "Eventos" },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary cursor-pointer transition-colors">
          {'icon' in item ? item.icon : <span className="w-9 h-9 flex items-center justify-center text-2xl">{item.emoji}</span>}
          <span className="text-[15px] font-medium text-foreground">{item.label}</span>
        </div>
      ))}
      <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary cursor-pointer transition-colors">
        <span className="w-9 h-9 flex items-center justify-center text-muted-foreground bg-secondary rounded-full text-sm">▼</span>
        <span className="text-[15px] font-medium text-foreground">Ver más</span>
      </div>
    </div>
    <hr className="border-border my-3" />
    <p className="text-xs text-muted-foreground px-2 leading-5">
      Privacidad · Condiciones · Publicidad · Opciones de anuncios · Cookies · Más · Meta © 2024
    </p>
  </aside>
);

/* Right sidebar - Contacts */
const FBSidebarRight = () => (
  <aside className="hidden xl:block w-[280px] flex-shrink-0 pt-4 pl-2 sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto">
    <div className="flex items-center justify-between px-2 mb-2">
      <h4 className="text-[17px] font-semibold text-muted-foreground">Contactos</h4>
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center cursor-pointer">
          <SearchIcon />
        </div>
        <div className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center cursor-pointer">
          <MenuDotsIcon />
        </div>
      </div>
    </div>
    <div className="space-y-0.5">
      {[
        { name: "Juan Carlos López", online: true },
        { name: "María Fernández", online: true },
        { name: "Pedro García Ruiz", online: true },
        { name: "Ana Martínez", online: false },
        { name: "Carlos Eduardo", online: true },
        { name: "Laura Sánchez", online: false },
        { name: "Roberto Díaz", online: true },
        { name: "Sofia Morales", online: false },
        { name: "Diego Herrera", online: true },
        { name: "Valentina Torres", online: true },
      ].map((contact) => (
        <div key={contact.name} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary cursor-pointer transition-colors">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground text-sm font-semibold">
              {contact.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
            {contact.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
            )}
          </div>
          <span className="text-[15px] font-normal text-foreground">{contact.name}</span>
        </div>
      ))}
    </div>
  </aside>
);

const Index = () => {
  const showSections = true;
  const [viewers, setViewers] = useState(3700);
  const viewersRef = useRef(3700);
  const [reactions, setReactions] = useState({ like: 1847, love: 432, wow: 156 });
  const [userReaction, setUserReaction] = useState<string | null>(null);
  const [showReactionPicker, setShowReactionPicker] = useState(false);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const [shared, setShared] = useState(false);
  const [shares, setShares] = useState(312);
  const didLongPress = useRef(false);
  const [startTime] = useState(Date.now());

  const isBoosted = () => Date.now() - startTime < 17000;

  useEffect(() => {
    const maxViewers = 12309;
    const timer = setInterval(() => {
      setViewers(prev => {
        if (prev >= maxViewers) return maxViewers;
        const remaining = maxViewers - prev;
        const boost = isBoosted() ? 3 : 1;
        const increment = Math.max(1, Math.floor(Math.random() * Math.min(remaining * 0.02, 15) * boost) + 1);
        const next = Math.min(prev + increment, maxViewers);
        viewersRef.current = next;
        return next;
      });
    }, isBoosted() ? 600 + Math.random() * 800 : 1500 + Math.random() * 2000);
    return () => clearInterval(timer);
  }, []);

  // Auto-increment reactions naturally (capped at 60% of viewers)
  useEffect(() => {
    const run = () => {
      const boosted = isBoosted();
      const delay = boosted ? 500 + Math.random() * 800 : 2000 + Math.random() * 3000;
      const timer = setTimeout(() => {
        setReactions(prev => {
          const total = prev.like + prev.love + prev.wow;
          const maxReactions = Math.floor(viewersRef.current * 0.6);
          if (total >= maxReactions) return prev;
          const multiplier = boosted ? 3 : 1;
          const rand = Math.random();
          if (rand < 0.6) {
            const inc = Math.ceil(Math.random() * 3 * multiplier);
            return (total + inc <= maxReactions) ? { ...prev, like: prev.like + inc } : prev;
          }
          if (rand < 0.85) {
            const inc = Math.ceil(Math.random() * 2 * multiplier);
            return (total + inc <= maxReactions) ? { ...prev, love: prev.love + inc } : prev;
          }
          const inc = Math.ceil(multiplier);
          return (total + inc <= maxReactions) ? { ...prev, wow: prev.wow + inc } : prev;
        });
        run();
      }, delay);
      return timer;
    };
    const timer = run();
    return () => clearTimeout(timer);
  }, []);

  // Auto-increment shares (slower)
  useEffect(() => {
    const run = () => {
      const delay = 7000 + Math.random() * 10000;
      const timer = setTimeout(() => {
        setShares(prev => prev + 1);
        run();
      }, delay);
      return timer;
    };
    const timer = run();
    return () => clearTimeout(timer);
  }, []);

  // Vturb video player
  useEffect(() => {
    const container = document.getElementById('vturb-container');
    if (!container) return;
    const player = document.createElement('vturb-smartplayer') as any;
    player.id = 'vid-699b46dcc89dd0b2f580df73';
    player.style.cssText = 'display: block; margin: 0 auto; width: 100%;';
    container.appendChild(player);

    const s = document.createElement('script');
    s.src = 'https://scripts.converteai.net/d0d64cb2-dca3-4be6-983c-3bc700b6a1d8/players/699b46dcc89dd0b2f580df73/v4/player.js';
    s.async = true;
    document.head.appendChild(s);

    // Add esconder style
    const style = document.createElement('style');
    style.textContent = '.esconder { display: none; }';
    document.head.appendChild(style);

    // Listen for player ready to reveal hidden elements and scroll when visible
    player.addEventListener('player:ready', function() {
      (player as any).displayHiddenElements(1037, ['.esconder'], { persist: true });

      // Observe when .esconder elements become visible, then scroll
      const observer = new MutationObserver(() => {
        const ctaSection = document.getElementById('cta-section');
        if (ctaSection && ctaSection.offsetParent !== null) {
          ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          observer.disconnect();
        }
      });
      observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['style', 'class'] });
    });

    return () => { s.remove(); style.remove(); };
  }, []);
  const totalReactions = reactions.like + reactions.love + reactions.wow;


  const handleReaction = (type: string) => {
    if (userReaction === type) {
      setReactions(prev => ({ ...prev, [type]: prev[type as keyof typeof prev] - 1 }));
      setUserReaction(null);
    } else {
      if (userReaction) {
        setReactions(prev => ({ ...prev, [userReaction as keyof typeof prev]: prev[userReaction as keyof typeof prev] - 1 }));
      }
      setReactions(prev => ({ ...prev, [type]: prev[type as keyof typeof prev] + 1 }));
      setUserReaction(type);
    }
    setShowReactionPicker(false);
  };

  const handleLikeClick = () => {
    if (didLongPress.current) {
      didLongPress.current = false;
      return;
    }
    if (userReaction) {
      setReactions(prev => ({ ...prev, [userReaction as keyof typeof prev]: prev[userReaction as keyof typeof prev] - 1 }));
      setUserReaction(null);
    }
  };

  const handleLongPressStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (userReaction) return; // Don't open picker when removing reaction
    didLongPress.current = false;
    longPressTimer.current = setTimeout(() => {
      didLongPress.current = true;
      setShowReactionPicker(true);
    }, 500);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    handleLongPressEnd();
    // On mobile, if we had a reaction and tapped to remove it, prevent the picker from showing
    if (didLongPress.current) {
      e.preventDefault(); // prevent click from also firing
    }
  };

  const formatViewers = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1).replace('.0', '')} mil`;
    return n.toString();
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
      <FBHeader />

      {/* Single post view - centered */}
      <div className="max-w-[680px] mx-auto py-4 px-2">
          <div className="bg-card rounded-xl shadow-sm border border-border">
            {/* Post header */}
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
              <div className="flex items-center gap-3">
                <img src={drMiguelImg} alt="Dr. Miguel" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[15px] font-semibold text-foreground hover:underline cursor-pointer">Dr. Miguel</span>
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="hsl(220, 46%, 48%)">
                      <path d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.535 6.381l-4 4a.75.75 0 01-1.061 0l-2-2a.75.75 0 011.06-1.061L7 8.793l3.474-3.474a.75.75 0 011.061 1.061z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 text-red-500 font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      En vivo
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center cursor-pointer">
                  <MenuDotsIcon />
                </div>
              </div>
            </div>

            {/* Post text */}
            <div className="px-4 py-2">
              <h1 className="text-foreground text-[15px] md:text-xl font-bold leading-snug">
                🔊 Sube el volumen para ver la Presentación...
              </h1>
            </div>

            {/* Video Player - LIVE */}
            <div className="overflow-hidden relative">
              <div
                className="relative w-full"
                style={{ paddingTop: "56.25%" }}
              >
                <div
                  id="vturb-container"
                  className="absolute top-0 left-0 w-full h-full"
                />
                {/* Viewers count - left side */}
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded-md text-xs font-semibold z-10">
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="currentColor"><path d="M8 2C4.318 2 1.09 4.58.066 8c1.024 3.42 4.252 6 7.934 6s6.91-2.58 7.934-6C14.91 4.58 11.682 2 8 2zm0 10a4 4 0 110-8 4 4 0 010 8zm0-6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/></svg>
                  {formatViewers(viewers)} viendo
                </div>
              </div>
            </div>

            {/* Live reactions bar */}
            <div className="flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-1">
                <div className="flex -space-x-0.5">
                  <img src={reactLike} alt="Like" className="w-[18px] h-[18px] rounded-full object-contain" />
                  <img src={reactLove} alt="Love" className="w-[18px] h-[18px] rounded-full object-contain" />
                  <img src={reactWow} alt="Wow" className="w-[18px] h-[18px] rounded-full object-contain" />
                </div>
                <span className="text-muted-foreground text-[13px] ml-0.5">{formatViewers(totalReactions)}</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground text-[13px]">
                <span>{shares} compartidos</span>
              </div>
            </div>

            {/* Action buttons - Facebook style */}
            <div className="flex items-center border-t border-b border-border px-2 py-1">
              <div
                className="relative flex-1"
                onMouseEnter={() => setShowReactionPicker(true)}
                onMouseLeave={() => { setShowReactionPicker(false); handleLongPressEnd(); }}
              >
                {/* Reaction picker popup */}
                {showReactionPicker && (
                  <div className="absolute bottom-full left-0 mb-2 flex items-center gap-1 bg-card border border-border rounded-full px-2 py-1.5 shadow-lg z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <button
                      onClick={() => handleReaction('like')}
                      className={`transition-transform hover:scale-125 p-1 rounded-full ${userReaction === 'like' ? 'bg-accent' : ''}`}
                      title="Me gusta"
                    >
                      <img src={reactLike} alt="Me gusta" className="w-8 h-8 object-contain pointer-events-none select-none" draggable={false} />
                    </button>
                    <button
                      onClick={() => handleReaction('love')}
                      className={`transition-transform hover:scale-125 p-1 rounded-full ${userReaction === 'love' ? 'bg-accent' : ''}`}
                      title="Me encanta"
                    >
                      <img src={reactLove} alt="Me encanta" className="w-8 h-8 object-contain pointer-events-none select-none" draggable={false} />
                    </button>
                    <button
                      onClick={() => handleReaction('wow')}
                      className={`transition-transform hover:scale-125 p-1 rounded-full ${userReaction === 'wow' ? 'bg-accent' : ''}`}
                      title="Asombro"
                    >
                      <img src={reactWow} alt="Asombro" className="w-8 h-8 object-contain pointer-events-none select-none" draggable={false} />
                    </button>
                  </div>
                )}

                {/* Like button */}
                <button
                  onClick={handleLikeClick}
                  onMouseDown={handleLongPressStart}
                  onMouseUp={handleLongPressEnd}
                  onTouchStart={handleLongPressStart}
                  onTouchEnd={handleTouchEnd}
                  onTouchCancel={handleLongPressEnd}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:bg-secondary transition-colors w-full ${userReaction ? 'font-semibold' : 'text-muted-foreground'}`}
                >
                  {userReaction ? (
                    <img src={userReaction === 'like' ? reactLike : userReaction === 'love' ? reactLove : reactWow} alt="Reacción" className="w-5 h-5 object-contain pointer-events-none select-none" draggable={false} />
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                  )}
                  <span className={`text-[13px] ${userReaction === 'like' ? 'text-blue-500' : userReaction === 'love' ? 'text-red-500' : userReaction === 'wow' ? 'text-yellow-500' : ''}`}>
                    {userReaction === 'like' ? 'Me gusta' : userReaction === 'love' ? 'Me encanta' : userReaction === 'wow' ? 'Asombro' : 'Me gusta'}
                  </span>
                </button>
              </div>

              <button
                onClick={() => setShared(prev => !prev)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:bg-secondary transition-colors ${shared ? 'text-blue-500 font-semibold' : 'text-muted-foreground'}`}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
                <span className="text-[13px]">{shared ? 'Compartido' : 'Compartir'}</span>
              </button>
            </div>

            {/* Comments disabled - Facebook Live style */}
            <div className="px-4 py-3 border-t border-border">
              <div className="flex items-center justify-center gap-2 bg-secondary rounded-full py-2.5 px-4">
                <svg viewBox="0 0 20 20" className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground text-[13px]">Los comentarios están desactivados en este momento.</span>
              </div>
            </div>

            {/* Post content sections */}
            {showSections && (
              <div className="animate-fade-in px-4 py-4 text-center esconder">
                {/* CTA Section 1 */}
                <section id="cta-section" className="mb-8">
                  <p className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">
                    <span className="text-muted-foreground opacity-70 text-lg md:text-xl" style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}>De $287</span>
                    {" "}por solo{" "}
                    <span className="text-green-500 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}>$37</span>
                  </p>
                  <CTAButton>haga clic aquí</CTAButton>
                </section>

                {/* What you'll receive */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
                    Aquí está todo lo que recibirá...
                  </h2>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Desktop: image on left */}
                    <div className="hidden md:block md:w-2/5">
                      <img src={turbinadorImg} alt="APP Maximizador de Potencia" className="w-full max-w-lg mx-auto" />
                    </div>
                    <div className="md:w-3/5 text-left">
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>APP Maximizador de Potencia</h3>
                      <p className="mb-4 text-muted-foreground">
                        Guía completa de técnicas y recetas para hacerte sentir como un alfa de nuevo en la cama con tu pareja en cuestión de días.
                      </p>
                      {/* Mobile: image after description */}
                      <div className="block md:hidden mb-4">
                        <img src={turbinadorImg} alt="APP Maximizador de Potencia" className="w-full max-w-[200px] mx-auto" />
                      </div>
                      <ol className="list-decimal list-inside space-y-2 text-left">
                        <li><strong>La mezcla principal para potenciar el rendimiento;</strong></li>
                        <li><strong>Secretos de nutrición para darle aún más rigidez a su erección;</strong></li>
                        <li><strong>Una guía completa para que evite los asesinos de la erección de sus comidas;</strong></li>
                        <li><strong>Viagra Invisible: qué hacer si está perdiendo la erección en medio del sexo;</strong></li>
                        <li><strong>Enfoque mental: un truco simple que aumenta la erección en cualquier momento;</strong></li>
                        <li><strong>Un truco simple al que llamo "Noche del rey" que te brinda erecciones matutinas súper potentes;</strong></li>
                        <li><strong>Reparador de Disfunciones: Este ejercicio que puedes hacer cada vez que vayas al baño.</strong></li>
                      </ol>
                      <p className="text-red-600 text-2xl font-bold text-center mt-4">(Valor $147)</p>
                    </div>
                  </div>
                </section>

                {/* Bonuses */}
                <section className="mb-8">
                  <img src={bonusImg} alt="Bonos exclusivos" className="w-full max-w-sm mx-auto mb-4" />
                  
                  <p className="text-muted-foreground mb-4">
                    Garantizando hoy tu acceso al APP Maximizador de Potencia, te asegurarás de forma totalmente gratuita los increíbles bonos:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-left max-w-md mx-auto mb-4">
                    <li><strong>Erecciones instantáneas;</strong></li>
                    <li><strong>Turbina de testosterona de 7 minutos;</strong></li>
                    <li><strong>Guía de alimentos para el poder masculino.</strong></li>
                  </ol>
                  <p className="text-red-600 text-2xl font-bold">(Valor $140)</p>
                </section>

                {/* Price & CTA */}
                <section className="mb-8">
                  <p className="text-muted-foreground text-lg mb-1">Valor total de todo el paquete:</p>
                  <p className="text-2xl font-bold mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
                    <span className="text-muted-foreground opacity-70" style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}>$287</span>
                  </p>
                  <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
                    Hoy todo esto por solo <span className="text-green-500 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}>$37</span>
                  </h2>
                  <h4 className="text-lg text-muted-foreground mb-4">
                    Obtén acceso completo al APP Maximizador de Potencia y a los bonos con DESCUENTO
                  </h4>
                </section>

                {/* Final CTA */}
                <section className="mb-8">
                  <CTAButton>Quiero ser parte ahora</CTAButton>
                </section>

                {/* Guarantee */}
                <section className="mb-8 text-center">
                  <img src={garantiaImg} alt="Garantía de 30 días" className="w-44 mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mx-auto">
                    Si no ves resultados en 30 días, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
                  </p>
                </section>
              </div>
            )}
          </div>
        </div>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground p-4 max-w-[680px] mx-auto">
        <p>© Copyright 2026</p>
      </div>

    </div>
  );
};

export default Index;

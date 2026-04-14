const socialLinks = {
  github: "https://github.com/jonatasfernandespimenta",
  linkedin: "https://www.linkedin.com/in/j%C3%B4natas-fernandes-pimenta-67069b199/",
  medium: "https://medium.com/@jonatasfernandespimenta",
};

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[#3b4a3d]/15 bg-[#10141a]">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div className="font-label text-lg font-bold text-slate-100">JFP</div>
        <div className="font-label text-[10px] uppercase tracking-widest text-slate-500">
          © 2026 Jônatas Fernandes Pimenta. All rights reserved.
        </div>
        <div className="flex gap-8">
          {Object.entries(socialLinks).map(([name, url]) => (
            <a key={name} className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#00E676] transition-colors duration-150" href={url} target="_blank" rel="noopener noreferrer">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

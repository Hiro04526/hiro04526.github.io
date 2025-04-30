interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const SECTIONS = ["About", "Resume", "Portfolio"];

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  return (
    <nav className="bg-[#18191A] rounded-[20px] rounded-bl-lg ml-80 z-20 shadow-md">
      {SECTIONS.map(section => (
        <button
          key={section}
          onClick={() => onSectionChange(section)}
          className={`px-4 py-2 font-medium transition-colors rounded-lg
            ${activeSection === section 
              ? "text-yellow-400 bg-[#2B2B2C]" 
              : "text-gray-400 hover:text-white hover:bg-[#2B2B2C]"
            }`}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}

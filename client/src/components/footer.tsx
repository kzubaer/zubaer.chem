export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const resources = [
    { label: "Download CV", href: "#" },
    { label: "Research Group", href: "#" },
    { label: "Lab Protocols", href: "#" },
    { label: "Safety Guidelines", href: "#" },
  ];

  const professionalLinks = [
    { icon: "🔬", label: "ORCID", href: "#" },
    { icon: "📊", label: "ResearchGate", href: "#" },
    { icon: "💼", label: "LinkedIn", href: "#" },
    { icon: "🎓", label: "Google Scholar", href: "#" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const section = document.getElementById(sectionId.slice(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-accent text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dr. Sarah Chen</h3>
            <p className="text-gray-300 mb-4">
              Advancing organic chemistry through sustainable research and innovative methodologies.
            </p>
            <div className="flex space-x-4">
              {professionalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  title={link.label}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Dr. Sarah Chen. All rights reserved. | Built for academic and research purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

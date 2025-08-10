import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToResearch = () => {
    const section = document.getElementById("research");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-accent mb-6">
              Dr. Sarah Chen
            </h1>
            <h2 className="text-xl sm:text-2xl text-primary font-medium mb-6">
              Organic Chemistry Researcher
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Specializing in sustainable organic synthesis, green chemistry methodologies, and novel catalytic processes. Currently advancing the field through innovative research in environmentally conscious chemical transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                onClick={scrollToResearch}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Research
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
              alt="Dr. Sarah Chen professional headshot"
              className="rounded-2xl shadow-2xl w-80 h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

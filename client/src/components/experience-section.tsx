import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { University, FlaskConical, GraduationCap, Award, Atom, Microscope, Laptop } from "lucide-react";
import { Experience } from "@shared/schema";

const iconMap = {
  "university": University,
  "flask": FlaskConical,
  "graduation-cap": GraduationCap,
  "medal": Award,
};

export default function ExperienceSection() {
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  const getIconComponent = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || University;
    return IconComponent;
  };

  const getIconColor = (index: number) => {
    const colors = ["bg-primary", "bg-blue-600", "bg-purple-600", "bg-indigo-600"];
    return colors[index % colors.length];
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-accent mb-4">Experience & Education</h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Academic journey and professional development in organic chemistry research
            </p>
          </div>
          <div className="space-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
                <div className="ml-8 flex-grow">
                  <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-12 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const technicalSkills = [
    "Organic Synthesis", "Catalysis", "NMR Spectroscopy", 
    "Mass Spectrometry", "Chromatography", "Green Chemistry"
  ];

  const researchAreas = [
    "Sustainable Chemistry", "Drug Discovery", "Natural Products", 
    "Materials Science", "Computational Chemistry"
  ];

  const softwareTools = [
    "ChemDraw", "SciFinder", "Gaussian", 
    "MestReNova", "Origin Pro", "Python"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-accent mb-4">Experience & Education</h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Academic journey and professional development in organic chemistry research
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experiences?.map((experience, index) => {
              const IconComponent = getIconComponent(experience.icon);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  } group`}
                >
                  <div className="flex items-center md:w-5/12">
                    <div className={`z-10 flex items-center justify-center w-16 h-16 ${getIconColor(index)} rounded-full shadow-lg`}>
                      <IconComponent className="text-white text-xl w-6 h-6" />
                    </div>
                    <div className="ml-6 md:ml-8">
                      <div className="flex items-center mb-2">
                        {experience.current && (
                          <Badge className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mr-3">
                            Current
                          </Badge>
                        )}
                        <span className="text-secondary text-sm">{experience.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-accent">{experience.title}</h3>
                      <p className="text-primary font-medium mb-2">{experience.organization}</p>
                      <p className="text-secondary text-sm">{experience.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-accent mb-8 text-center">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-accent mb-4">
                <Atom className="inline w-5 h-5 mr-2 text-primary" />
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <Badge key={skill} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Research Areas */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-accent mb-4">
                <Microscope className="inline w-5 h-5 mr-2 text-primary" />
                Research Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {researchAreas.map((area) => (
                  <Badge key={area} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Software & Tools */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-accent mb-4">
                <Laptop className="inline w-5 h-5 mr-2 text-primary" />
                Software & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {softwareTools.map((tool) => (
                  <Badge key={tool} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

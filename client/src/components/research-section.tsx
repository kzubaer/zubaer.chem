import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ResearchProject } from "@shared/schema";

export default function ResearchSection() {
  const { data: projects, isLoading } = useQuery<ResearchProject[]>({
    queryKey: ["/api/research-projects"],
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "current":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-accent mb-4">Research Portfolio</h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Exploring innovative approaches to organic synthesis with focus on sustainability and efficiency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-200 animate-pulse" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3 animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse" />
                  <div className="h-20 bg-gray-200 rounded mb-4 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-accent mb-4">Research Portfolio</h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Exploring innovative approaches to organic synthesis with focus on sustainability and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <Card key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusBadgeVariant(project.status)}`}>
                    {project.status === "current" ? "Current" : project.status === "completed" ? "Completed" : "In Progress"}
                  </Badge>
                  <span className="text-secondary text-sm ml-2">{project.period}</span>
                </div>
                <h3 className="text-xl font-semibold text-accent mb-3">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700 text-xs px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a href={project.link} className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Quote, Eye } from "lucide-react";
import { Publication } from "@shared/schema";

export default function PublicationsSection() {
  const { data: publications, isLoading } = useQuery<Publication[]>({
    queryKey: ["/api/publications"],
  });

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "featured":
        return "bg-green-100 text-green-800";
      case "peer-reviewed":
        return "bg-blue-100 text-blue-800";
      case "collaboration":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getBadgeLabel = (badge: string) => {
    switch (badge) {
      case "peer-reviewed":
        return "Peer Reviewed";
      case "collaboration":
        return "Collaboration";
      default:
        return badge.charAt(0).toUpperCase() + badge.slice(1);
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-accent mb-4">Publications</h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Peer-reviewed research contributions to the field of organic chemistry
            </p>
          </div>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8">
                <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse" />
                <div className="h-8 bg-gray-200 rounded mb-4 animate-pulse" />
                <div className="h-20 bg-gray-200 rounded mb-4 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Calculate totals for metrics
  const totalPublications = publications?.length || 0;
  const totalCitations = publications?.reduce((sum, pub) => sum + pub.citations, 0) || 0;
  const totalViews = publications?.reduce((sum, pub) => sum + pub.views, 0) || 0;
  const avgImpactFactor = 3.8; // This would normally be calculated based on journal impact factors

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-accent mb-4">Publications</h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Peer-reviewed research contributions to the field of organic chemistry
          </p>
        </div>

        <div className="space-y-8">
          {publications?.map((publication) => (
            <Card key={publication.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={`text-sm font-medium px-3 py-1 rounded-full ${getBadgeVariant(publication.badge || "")}`}>
                      {getBadgeLabel(publication.badge || "")}
                    </Badge>
                    <span className="text-secondary text-sm">
                      {publication.journal} • {publication.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-accent mb-4">
                    {publication.title}
                  </h3>
                  <p className="text-secondary leading-relaxed mb-4">
                    {publication.abstract}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-secondary">
                    <span className="flex items-center">
                      <Quote className="w-4 h-4 mr-2" />
                      Cited by {publication.citations}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      {publication.views.toLocaleString()} views
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button className="bg-primary text-white hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Paper
                  </Button>
                  <Button variant="outline" className="border border-secondary text-secondary hover:bg-gray-100 px-6 py-2 rounded-lg transition-colors duration-200">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Publication Stats */}
        <Card className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-accent mb-8 text-center">Publication Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{totalPublications}</div>
              <div className="text-secondary">Total Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">18</div>
              <div className="text-secondary">H-Index</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{totalCitations.toLocaleString()}</div>
              <div className="text-secondary">Total Citations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{avgImpactFactor}</div>
              <div className="text-secondary">Avg. Impact Factor</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

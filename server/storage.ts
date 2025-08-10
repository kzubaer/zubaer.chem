import { type User, type InsertUser, type ResearchProject, type InsertResearchProject, type Publication, type InsertPublication, type Experience, type InsertExperience, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getResearchProjects(): Promise<ResearchProject[]>;
  getResearchProject(id: string): Promise<ResearchProject | undefined>;
  createResearchProject(project: InsertResearchProject): Promise<ResearchProject>;
  
  getPublications(): Promise<Publication[]>;
  getPublication(id: string): Promise<Publication | undefined>;
  createPublication(publication: InsertPublication): Promise<Publication>;
  
  getExperiences(): Promise<Experience[]>;
  getExperience(id: string): Promise<Experience | undefined>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private researchProjects: Map<string, ResearchProject>;
  private publications: Map<string, Publication>;
  private experiences: Map<string, Experience>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.researchProjects = new Map();
    this.publications = new Map();
    this.experiences = new Map();
    this.contactMessages = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample research projects
    const projects: ResearchProject[] = [
      {
        id: "1",
        title: "Green Catalytic Processes",
        description: "Development of environmentally benign catalytic systems for organic transformations using renewable feedstocks and minimal waste generation.",
        status: "current",
        period: "2023-Present",
        imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        tags: ["Catalysis", "Sustainability", "Green Chemistry"],
        link: "#"
      },
      {
        id: "2",
        title: "Novel Synthetic Methodologies",
        description: "Investigation of transition metal-catalyzed cross-coupling reactions for the synthesis of complex organic molecules with pharmaceutical applications.",
        status: "completed",
        period: "2021-2023",
        imageUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        tags: ["Synthesis", "Metal Catalysis", "Drug Discovery"],
        link: "#"
      },
      {
        id: "3",
        title: "Advanced Analytical Techniques",
        description: "Development of new analytical methods for characterizing complex organic compounds using state-of-the-art spectroscopic techniques.",
        status: "in-progress",
        period: "2022-2024",
        imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        tags: ["Spectroscopy", "Analysis", "Methods"],
        link: "#"
      }
    ];
    
    projects.forEach(project => this.researchProjects.set(project.id, project));

    // Sample publications
    const publications: Publication[] = [
      {
        id: "1",
        title: "Sustainable Catalytic Approaches for Complex Organic Synthesis",
        journal: "Nature Chemistry",
        year: 2023,
        abstract: "This work presents novel green chemistry methodologies that significantly reduce environmental impact while maintaining high efficiency in complex molecule synthesis. The research demonstrates innovative catalyst design principles that could revolutionize industrial organic chemistry processes.",
        citations: 127,
        views: 2451,
        featured: true,
        badge: "featured",
        pdfUrl: "#",
        externalUrl: "#"
      },
      {
        id: "2",
        title: "Transition Metal Catalysis in Cross-Coupling Reactions: New Frontiers",
        journal: "Journal of Organic Chemistry",
        year: 2022,
        abstract: "An comprehensive investigation into novel transition metal catalysts for C-C bond formation, offering improved selectivity and reduced reaction times compared to traditional methods. The study includes mechanistic insights and practical applications.",
        citations: 89,
        views: 1823,
        featured: false,
        badge: "peer-reviewed",
        pdfUrl: "#",
        externalUrl: "#"
      },
      {
        id: "3",
        title: "Advanced Spectroscopic Methods for Organic Structure Determination",
        journal: "Angewandte Chemie",
        year: 2021,
        abstract: "Development of cutting-edge analytical techniques combining multiple spectroscopic methods for rapid and accurate structural elucidation of complex organic compounds, with applications in natural product chemistry and drug discovery.",
        citations: 156,
        views: 3127,
        featured: false,
        badge: "collaboration",
        pdfUrl: "#",
        externalUrl: "#"
      }
    ];
    
    publications.forEach(pub => this.publications.set(pub.id, pub));

    // Sample experiences
    const experiences: Experience[] = [
      {
        id: "1",
        title: "Senior Research Scientist",
        organization: "Stanford University",
        period: "2020 - Present",
        description: "Leading research in sustainable organic synthesis and green chemistry methodologies. Managing a team of 8 graduate students and postdocs.",
        type: "work",
        current: true,
        icon: "university"
      },
      {
        id: "2",
        title: "Postdoctoral Researcher",
        organization: "MIT Chemistry Department",
        period: "2017 - 2020",
        description: "Developed novel catalytic systems for asymmetric synthesis under the supervision of Prof. Johnson. Published 8 peer-reviewed papers.",
        type: "research",
        current: false,
        icon: "flask"
      },
      {
        id: "3",
        title: "Ph.D. in Organic Chemistry",
        organization: "Harvard University",
        period: "2012 - 2017",
        description: "Thesis: \"Novel Approaches to Catalytic C-H Activation\" - Awarded the departmental excellence prize for outstanding research.",
        type: "education",
        current: false,
        icon: "graduation-cap"
      },
      {
        id: "4",
        title: "B.S. in Chemistry, Summa Cum Laude",
        organization: "UC Berkeley",
        period: "2008 - 2012",
        description: "Graduated with highest honors. Undergraduate research in total synthesis of natural products. Phi Beta Kappa member.",
        type: "education",
        current: false,
        icon: "medal"
      }
    ];
    
    experiences.forEach(exp => this.experiences.set(exp.id, exp));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getResearchProjects(): Promise<ResearchProject[]> {
    return Array.from(this.researchProjects.values());
  }

  async getResearchProject(id: string): Promise<ResearchProject | undefined> {
    return this.researchProjects.get(id);
  }

  async createResearchProject(insertProject: InsertResearchProject): Promise<ResearchProject> {
    const id = randomUUID();
    const project: ResearchProject = { ...insertProject, id };
    this.researchProjects.set(id, project);
    return project;
  }

  async getPublications(): Promise<Publication[]> {
    return Array.from(this.publications.values());
  }

  async getPublication(id: string): Promise<Publication | undefined> {
    return this.publications.get(id);
  }

  async createPublication(insertPublication: InsertPublication): Promise<Publication> {
    const id = randomUUID();
    const publication: Publication = { ...insertPublication, id };
    this.publications.set(id, publication);
    return publication;
  }

  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values());
  }

  async getExperience(id: string): Promise<Experience | undefined> {
    return this.experiences.get(id);
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const id = randomUUID();
    const experience: Experience = { ...insertExperience, id };
    this.experiences.set(id, experience);
    return experience;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();

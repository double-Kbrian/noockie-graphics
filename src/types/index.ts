export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Branding" | "3D Signage" | "Lightboxes" | "Graphic Design" | "Print";
  client: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
}

export interface InquiryFormState {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  service: string;
  description: string;
  budget: string;
}
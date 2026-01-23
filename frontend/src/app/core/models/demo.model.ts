export interface DemoRequest {
  name: string;
  email: string;
  company: string;
  jobTitle?: string;
  phone: string;
  productInterest: string;
  companySize?: 'SMALL' | 'MEDIUM' | 'LARGE' | 'ENTERPRISE';
  preferredDate?: string;
  preferredTime?: 'MORNING' | 'AFTERNOON' | 'EVENING';
  message?: string;
}

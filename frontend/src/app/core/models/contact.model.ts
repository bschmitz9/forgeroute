export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  source?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: {
    code: string;
    message: string;
    fields?: Record<string, string>;
  };
}

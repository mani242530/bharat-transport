export class Company {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  firmActivity: string;
  serviceProviding: string[];
  landlineNumber: string;
  mobileNumber: string;
  location: string;
}

export enum ContactCategory {
  FRIEND = 'Friend',
  FAMILY = 'Family',
}

export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  category: ContactCategory;
}

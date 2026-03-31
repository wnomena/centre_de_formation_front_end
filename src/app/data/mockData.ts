export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
}

export interface Client {
  id: string;
  clientNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  department: string;
  status: "actif" | "inactif" | "suspendu" | "en cours";
  contractType: string;
  activationDate: string;
}

export interface Invoice {
  id: string;
  clientId: string;
  invoiceNumber: string;
  amount: number;
  date: string;
  dueDate: string;
  status: "payée" | "en attente" | "en retard";
}

export interface Activation {
  id: string;
  clientId: string;
  serviceType: string;
  requestDate: string;
  scheduledDate: string;
  status: "planifiée" | "en cours" | "terminée" | "annulée";
  technician?: string;
}

export interface Message {
  id: string;
  clientId: string;
  agentId: string;
  content: string;
  timestamp: string;
  sender: "agent" | "client";
}

// Mock data
export const mockAgent: Agent = {
  id: "agent-001",
  name: "Marie Dubois",
  email: "marie.dubois@formation.fr",
  phone: "+33 6 12 34 56 78",
  role: "Conseiller Commercial",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
};

export const mockClients: Client[] = [
  {
    id: "1",
    clientNumber: "CLI001234",
    firstName: "Jean",
    lastName: "Martin",
    email: "jean.martin@email.fr",
    phone: "+33 6 11 22 33 44",
    address: "15 Rue de la Paix",
    city: "Paris",
    postalCode: "75001",
    department: "75",
    status: "actif",
    contractType: "Fibre Pro",
    activationDate: "2024-01-15",
  },
  {
    id: "2",
    clientNumber: "CLI001235",
    firstName: "Sophie",
    lastName: "Durand",
    email: "sophie.durand@email.fr",
    phone: "+33 6 22 33 44 55",
    address: "42 Avenue des Champs",
    city: "Lyon",
    postalCode: "69001",
    department: "69",
    status: "actif",
    contractType: "Fibre Perso",
    activationDate: "2024-02-20",
  },
  {
    id: "3",
    clientNumber: "CLI001236",
    firstName: "Pierre",
    lastName: "Leroy",
    email: "pierre.leroy@email.fr",
    phone: "+33 6 33 44 55 66",
    address: "8 Boulevard Victor Hugo",
    city: "Marseille",
    postalCode: "13001",
    department: "13",
    status: "en cours",
    contractType: "ADSL",
    activationDate: "2024-03-10",
  },
  {
    id: "4",
    clientNumber: "CLI001237",
    firstName: "Isabelle",
    lastName: "Bernard",
    email: "isabelle.bernard@email.fr",
    phone: "+33 6 44 55 66 77",
    address: "23 Rue Nationale",
    city: "Lille",
    postalCode: "59000",
    department: "59",
    status: "actif",
    contractType: "Fibre Pro",
    activationDate: "2024-01-05",
  },
  {
    id: "5",
    clientNumber: "CLI001238",
    firstName: "Thomas",
    lastName: "Petit",
    email: "thomas.petit@email.fr",
    phone: "+33 6 55 66 77 88",
    address: "56 Cours Mirabeau",
    city: "Bordeaux",
    postalCode: "33000",
    department: "33",
    status: "suspendu",
    contractType: "Fibre Perso",
    activationDate: "2023-11-12",
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: "inv-001",
    clientId: "1",
    invoiceNumber: "FAC-2024-001",
    amount: 49.99,
    date: "2024-03-01",
    dueDate: "2024-03-15",
    status: "payée",
  },
  {
    id: "inv-002",
    clientId: "1",
    invoiceNumber: "FAC-2024-002",
    amount: 49.99,
    date: "2024-02-01",
    dueDate: "2024-02-15",
    status: "payée",
  },
  {
    id: "inv-003",
    clientId: "2",
    invoiceNumber: "FAC-2024-003",
    amount: 39.99,
    date: "2024-03-01",
    dueDate: "2024-03-15",
    status: "en attente",
  },
  {
    id: "inv-004",
    clientId: "3",
    invoiceNumber: "FAC-2024-004",
    amount: 29.99,
    date: "2024-02-15",
    dueDate: "2024-03-01",
    status: "en retard",
  },
];

export const mockActivations: Activation[] = [
  {
    id: "act-001",
    clientId: "3",
    serviceType: "ADSL",
    requestDate: "2024-03-05",
    scheduledDate: "2024-03-20",
    status: "en cours",
    technician: "Marc Lefebvre",
  },
  {
    id: "act-002",
    clientId: "1",
    serviceType: "Fibre Pro",
    requestDate: "2024-01-10",
    scheduledDate: "2024-01-15",
    status: "terminée",
    technician: "Julie Moreau",
  },
];

export const mockMessages: Message[] = [
  {
    id: "msg-001",
    clientId: "1",
    agentId: "agent-001",
    content: "Bonjour, j'ai une question sur ma facture.",
    timestamp: "2024-03-25T10:30:00",
    sender: "client",
  },
  {
    id: "msg-002",
    clientId: "1",
    agentId: "agent-001",
    content: "Bonjour M. Martin, je suis là pour vous aider. Quelle est votre question ?",
    timestamp: "2024-03-25T10:32:00",
    sender: "agent",
  },
  {
    id: "msg-003",
    clientId: "2",
    agentId: "agent-001",
    content: "Je souhaite changer mon forfait.",
    timestamp: "2024-03-26T14:15:00",
    sender: "client",
  },
];

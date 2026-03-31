import { Link, useLocation } from "react-router";
import {
  Briefcase,
  MessageSquare,
  FileText,
  Activity,
  Truck,
  XCircle,
  Home,
} from "lucide-react";
import { cn } from "./ui/utils";

const menuItems = [
  { icon: Home, label: "Accueil", path: "/" },
  { icon: Briefcase, label: "Service Commercial", path: "/commercial" },
  { icon: MessageSquare, label: "Chat Client", path: "/chat" },
  { icon: FileText, label: "Gestion Factures", path: "/invoices" },
  { icon: Activity, label: "Suivi Activation", path: "/activation" },
  { icon: Truck, label: "Déménagement", path: "/moving" },
  { icon: XCircle, label: "Résiliation", path: "/termination" },
];

export function NavigationMenu() {
  const location = useLocation();

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-4">
      <h3 className="font-bold mb-4 px-2">Menu</h3>
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

import { mockClients, Client } from "../data/mockData";
import { Link } from "react-router";
import { Badge } from "./ui/badge";

interface SearchResultsProps {
  query: string;
  searchType: "numero" | "nom" | "adresse" | "departement";
}

export function SearchResults({ query, searchType }: SearchResultsProps) {
  const filteredClients = mockClients.filter((client) => {
    const lowercaseQuery = query.toLowerCase();
    
    switch (searchType) {
      case "numero":
        return client.clientNumber.toLowerCase().includes(lowercaseQuery) ||
               client.phone.includes(query);
      case "nom":
        return client.firstName.toLowerCase().includes(lowercaseQuery) ||
               client.lastName.toLowerCase().includes(lowercaseQuery);
      case "adresse":
        return client.address.toLowerCase().includes(lowercaseQuery) ||
               client.city.toLowerCase().includes(lowercaseQuery) ||
               client.postalCode.includes(query);
      case "departement":
        return client.department.includes(query);
      default:
        return false;
    }
  });

  if (filteredClients.length === 0) {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center text-gray-500">
        Aucun client trouvé
      </div>
    );
  }

  const getStatusBadge = (status: Client["status"]) => {
    const variants: Record<Client["status"], "default" | "secondary" | "destructive" | "outline"> = {
      actif: "default",
      inactif: "secondary",
      suspendu: "destructive",
      "en cours": "outline",
    };

    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  return (
    <div className="mt-4 space-y-2">
      <p className="text-sm text-gray-600 mb-3">
        {filteredClients.length} résultat{filteredClients.length > 1 ? "s" : ""} trouvé{filteredClients.length > 1 ? "s" : ""}
      </p>
      {filteredClients.map((client) => (
        <Link
          key={client.id}
          to={`/client/${client.id}`}
          className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold">
                  {client.firstName} {client.lastName}
                </p>
                {getStatusBadge(client.status)}
              </div>
              <p className="text-sm text-gray-600">N° {client.clientNumber}</p>
              <p className="text-sm text-gray-600">
                {client.address}, {client.postalCode} {client.city}
              </p>
              <p className="text-sm text-gray-600">{client.phone}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Contrat</p>
              <p className="text-sm font-medium">{client.contractType}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

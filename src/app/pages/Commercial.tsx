import { Link } from "react-router";
import { ArrowLeft, UserPlus, Search, Phone, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { mockClients } from "../data/mockData";
import { Badge } from "../components/ui/badge";

export function Commercial() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Service Commercial</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <UserPlus className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold">24</p>
                <p className="text-sm text-gray-600 mt-1">Nouveaux clients ce mois</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-3xl font-bold">45</p>
                <p className="text-sm text-gray-600 mt-1">Appels ce jour</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-3xl font-bold">12</p>
                <p className="text-sm text-gray-600 mt-1">Emails en attente</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Liste des clients</CardTitle>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Nouveau client
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="text" placeholder="Rechercher un client..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              {mockClients.map((client) => (
                <Link
                  key={client.id}
                  to={`/client/${client.id}`}
                  className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold">
                          {client.firstName} {client.lastName}
                        </p>
                        <Badge
                          variant={
                            client.status === "actif"
                              ? "default"
                              : client.status === "suspendu"
                              ? "destructive"
                              : "outline"
                          }
                        >
                          {client.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{client.email}</p>
                      <p className="text-sm text-gray-600">{client.phone}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{client.contractType}</p>
                      <p className="text-xs text-gray-500">N° {client.clientNumber}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

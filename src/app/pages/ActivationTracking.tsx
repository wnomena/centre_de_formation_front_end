import { Link } from "react-router";
import { ArrowLeft, Calendar, User, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { mockActivations, mockClients } from "../data/mockData";
import { Badge } from "../components/ui/badge";

export function ActivationTracking() {
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
            <h1 className="text-xl font-bold">Suivi d'Activation</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">Planifiées</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {
                    mockActivations.filter((a) => a.status === "planifiée")
                      .length
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">En cours</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">
                  {
                    mockActivations.filter((a) => a.status === "en cours")
                      .length
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">Terminées</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {
                    mockActivations.filter((a) => a.status === "terminée")
                      .length
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">Annulées</p>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {
                    mockActivations.filter((a) => a.status === "annulée")
                      .length
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Activations en cours</CardTitle>
              <Link to="/new-client">
                <Button>Nouveau client</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {mockActivations.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                Aucune activation en cours
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockActivations.map((activation) => {
                  const client = mockClients.find(
                    (c) => c.id === activation.clientId
                  );
                  return (
                    <div
                      key={activation.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-semibold text-lg">
                            {activation.serviceType}
                          </p>
                          {client && (
                            <p className="text-sm text-gray-600">
                              {client.firstName} {client.lastName}
                            </p>
                          )}
                        </div>
                        <Badge
                          variant={
                            activation.status === "terminée"
                              ? "default"
                              : activation.status === "annulée"
                              ? "destructive"
                              : "outline"
                          }
                        >
                          {activation.status}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>
                            Demande:{" "}
                            {new Date(activation.requestDate).toLocaleDateString(
                              "fr-FR"
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>
                            Planifié:{" "}
                            {new Date(
                              activation.scheduledDate
                            ).toLocaleDateString("fr-FR")}
                          </span>
                        </div>
                        {activation.technician && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <User className="h-4 w-4" />
                            <span>Technicien: {activation.technician}</span>
                          </div>
                        )}
                        {client && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>
                              {client.address}, {client.city}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 flex gap-2">
                        <Link to={`/client/${activation.clientId}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            Voir client
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
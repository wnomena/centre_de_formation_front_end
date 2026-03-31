import { useParams, Link } from "react-router";
import { mockClients, mockInvoices, mockActivations } from "../data/mockData";
import { ArrowLeft, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function ClientDetail() {
  const { id } = useParams();
  const client = mockClients.find((c) => c.id === id);

  if (!client) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Client non trouvé</p>
          <Link to="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const clientInvoices = mockInvoices.filter((inv) => inv.clientId === id);
  const clientActivations = mockActivations.filter((act) => act.clientId === id);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Client Header */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">
                  {client.firstName} {client.lastName}
                </h1>
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
              <p className="text-gray-600">N° Client: {client.clientNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Type de contrat</p>
              <p className="text-lg font-semibold">{client.contractType}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="h-4 w-4" />
              <span>{client.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-4 w-4" />
              <span>{client.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-4 w-4" />
              <span>
                {client.address}, {client.postalCode} {client.city}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="h-4 w-4" />
              <span>
                Activé le:{" "}
                {new Date(client.activationDate).toLocaleDateString("fr-FR")}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="invoices">Factures</TabsTrigger>
            <TabsTrigger value="activations">Activations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations du compte</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Statut</p>
                    <p className="font-medium">{client.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Type de contrat</p>
                    <p className="font-medium">{client.contractType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Département</p>
                    <p className="font-medium">{client.department}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actions rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link to="/chat">
                    <Button className="w-full" variant="outline">
                      Ouvrir le chat
                    </Button>
                  </Link>
                  <Link to="/invoices">
                    <Button className="w-full" variant="outline">
                      Voir les factures
                    </Button>
                  </Link>
                  <Link to="/moving">
                    <Button className="w-full" variant="outline">
                      Déménagement
                    </Button>
                  </Link>
                  <Link to="/termination">
                    <Button className="w-full" variant="outline">
                      Résiliation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="invoices">
            <Card>
              <CardHeader>
                <CardTitle>Factures</CardTitle>
              </CardHeader>
              <CardContent>
                {clientInvoices.length === 0 ? (
                  <p className="text-gray-500">Aucune facture disponible</p>
                ) : (
                  <div className="space-y-3">
                    {clientInvoices.map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{invoice.invoiceNumber}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(invoice.date).toLocaleDateString("fr-FR")}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{invoice.amount.toFixed(2)} €</p>
                          <Badge
                            variant={
                              invoice.status === "payée"
                                ? "default"
                                : invoice.status === "en retard"
                                ? "destructive"
                                : "outline"
                            }
                          >
                            {invoice.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activations">
            <Card>
              <CardHeader>
                <CardTitle>Suivi d'activation</CardTitle>
              </CardHeader>
              <CardContent>
                {clientActivations.length === 0 ? (
                  <p className="text-gray-500">Aucune activation en cours</p>
                ) : (
                  <div className="space-y-3">
                    {clientActivations.map((activation) => (
                      <div
                        key={activation.id}
                        className="p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-medium">{activation.serviceType}</p>
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
                        <p className="text-sm text-gray-600">
                          Demande:{" "}
                          {new Date(activation.requestDate).toLocaleDateString(
                            "fr-FR"
                          )}
                        </p>
                        <p className="text-sm text-gray-600">
                          Planifié:{" "}
                          {new Date(activation.scheduledDate).toLocaleDateString(
                            "fr-FR"
                          )}
                        </p>
                        {activation.technician && (
                          <p className="text-sm text-gray-600">
                            Technicien: {activation.technician}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

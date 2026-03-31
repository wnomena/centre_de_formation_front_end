import { Link } from "react-router";
import { ArrowLeft, Calendar, Truck, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";

export function Moving() {
  const [formData, setFormData] = useState({
    clientNumber: "",
    currentAddress: "",
    newAddress: "",
    movingDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Demande de déménagement enregistrée pour formation");
  };

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
            <h1 className="text-xl font-bold">Déménagement</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-600 mt-1">Déménagements ce mois</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-600 mt-1">Planifiés</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-2xl font-bold">7</p>
                <p className="text-sm text-gray-600 mt-1">Terminés</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Nouvelle demande de déménagement</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="clientNumber">Numéro client *</Label>
                <Input
                  id="clientNumber"
                  placeholder="CLI001234"
                  value={formData.clientNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, clientNumber: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentAddress">Adresse actuelle *</Label>
                <Input
                  id="currentAddress"
                  placeholder="15 Rue de la Paix, 75001 Paris"
                  value={formData.currentAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, currentAddress: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newAddress">Nouvelle adresse *</Label>
                <Input
                  id="newAddress"
                  placeholder="42 Avenue des Champs, 69001 Lyon"
                  value={formData.newAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, newAddress: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="movingDate">Date de déménagement *</Label>
                <Input
                  id="movingDate"
                  type="date"
                  value={formData.movingDate}
                  onChange={(e) =>
                    setFormData({ ...formData, movingDate: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes et instructions</Label>
                <Textarea
                  id="notes"
                  placeholder="Informations complémentaires..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> Le transfert du service prend généralement
                  5 à 7 jours ouvrés. Assurez-vous de nous prévenir au moins 2
                  semaines à l'avance.
                </p>
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Enregistrer la demande
                </Button>
                <Link to="/" className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    Annuler
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

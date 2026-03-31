import { Link } from "react-router";
import { ArrowLeft, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState } from "react";
import { Checkbox } from "../components/ui/checkbox";

export function Termination() {
  const [formData, setFormData] = useState({
    clientNumber: "",
    reason: "",
    terminationDate: "",
    returnEquipment: false,
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Demande de résiliation enregistrée pour formation");
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
            <h1 className="text-xl font-bold">Résiliation</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600 mt-1">Résiliations ce mois</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600 mt-1">En cours</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">Taux de résiliation</p>
                <p className="text-2xl font-bold mt-2">2.3%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Demande de résiliation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-red-800">
                  <p className="font-semibold mb-1">Attention</p>
                  <p>
                    La résiliation d'un contrat est définitive. Assurez-vous de bien
                    vérifier toutes les informations avant de soumettre la demande.
                  </p>
                </div>
              </div>
            </div>

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
                <Label htmlFor="reason">Motif de résiliation *</Label>
                <Select
                  value={formData.reason}
                  onValueChange={(value) =>
                    setFormData({ ...formData, reason: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un motif" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demenagement">
                      Déménagement hors zone de couverture
                    </SelectItem>
                    <SelectItem value="prix">Tarif trop élevé</SelectItem>
                    <SelectItem value="qualite">
                      Insatisfaction de la qualité de service
                    </SelectItem>
                    <SelectItem value="concurrent">
                      Passage à un concurrent
                    </SelectItem>
                    <SelectItem value="plus-besoin">
                      Plus besoin du service
                    </SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="terminationDate">
                  Date de résiliation souhaitée *
                </Label>
                <Input
                  id="terminationDate"
                  type="date"
                  value={formData.terminationDate}
                  onChange={(e) =>
                    setFormData({ ...formData, terminationDate: e.target.value })
                  }
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="returnEquipment"
                  checked={formData.returnEquipment}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      returnEquipment: checked as boolean,
                    })
                  }
                />
                <Label
                  htmlFor="returnEquipment"
                  className="text-sm font-normal cursor-pointer"
                >
                  Le client doit retourner le matériel (box, décodeur, etc.)
                </Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Commentaires</Label>
                <Textarea
                  id="comments"
                  placeholder="Informations complémentaires sur la demande de résiliation..."
                  value={formData.comments}
                  onChange={(e) =>
                    setFormData({ ...formData, comments: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>À noter:</strong> Un préavis de 10 jours est requis pour
                  toute résiliation. Des frais de résiliation peuvent s'appliquer
                  selon les conditions du contrat.
                </p>
              </div>

              <div className="flex gap-3">
                <Button type="submit" variant="destructive" className="flex-1">
                  Enregistrer la résiliation
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

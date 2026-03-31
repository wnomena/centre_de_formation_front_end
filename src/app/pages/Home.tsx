import { Link } from "react-router";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { mockAgent } from "../data/mockData";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { NavigationMenu } from "../components/NavigationMenu";
import { SearchResults } from "../components/SearchResults";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"numero" | "nom" | "adresse" | "departement">("nom");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CF</span>
              </div>
              <div>
                <h1 className="font-bold text-xl">Centre de Formation</h1>
                <p className="text-sm text-gray-500">Service Commercial</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Navigation Menu */}
          <div className={`lg:col-span-1 ${menuOpen ? "block" : "hidden lg:block"}`}>
            <NavigationMenu />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Agent Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                <img
                  src={mockAgent.avatar}
                  alt={mockAgent.name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">{mockAgent.name}</h2>
                  <p className="text-blue-600 font-medium mt-1">{mockAgent.role}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Email:</span>
                      <span>{mockAgent.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Téléphone:</span>
                      <span>{mockAgent.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h3 className="text-lg font-bold mb-4">Rechercher un client</h3>
              
              {/* Search Type Selection */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                <Button
                  variant={searchType === "nom" ? "default" : "outline"}
                  onClick={() => setSearchType("nom")}
                  className="w-full"
                >
                  Nom
                </Button>
                <Button
                  variant={searchType === "numero" ? "default" : "outline"}
                  onClick={() => setSearchType("numero")}
                  className="w-full"
                >
                  Numéro
                </Button>
                <Button
                  variant={searchType === "adresse" ? "default" : "outline"}
                  onClick={() => setSearchType("adresse")}
                  className="w-full"
                >
                  Adresse
                </Button>
                <Button
                  variant={searchType === "departement" ? "default" : "outline"}
                  onClick={() => setSearchType("departement")}
                  className="w-full"
                >
                  Département
                </Button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder={`Rechercher par ${searchType}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Search Results */}
              {searchQuery && (
                <SearchResults query={searchQuery} searchType={searchType} />
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <p className="text-blue-100 text-sm">Clients actifs</p>
                <p className="text-3xl font-bold mt-2">127</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <p className="text-green-100 text-sm">En cours</p>
                <p className="text-3xl font-bold mt-2">8</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <p className="text-purple-100 text-sm">Rendez-vous</p>
                <p className="text-3xl font-bold mt-2">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

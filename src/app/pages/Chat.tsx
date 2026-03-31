import { Link } from "react-router";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { mockClients, mockMessages, mockAgent } from "../data/mockData";
import { useState } from "react";
import { Badge } from "../components/ui/badge";

export function Chat() {
  const [selectedClientId, setSelectedClientId] = useState<string | null>(
    mockClients[0]?.id || null
  );
  const [message, setMessage] = useState("");

  const selectedClient = mockClients.find((c) => c.id === selectedClientId);
  const clientMessages = mockMessages.filter((m) => m.clientId === selectedClientId);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // Simulate sending message
    setMessage("");
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
            <h1 className="text-xl font-bold">Chat Client</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Client List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {mockClients.map((client) => {
                  const hasMessages = mockMessages.some(
                    (m) => m.clientId === client.id
                  );
                  return (
                    <button
                      key={client.id}
                      onClick={() => setSelectedClientId(client.id)}
                      className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                        selectedClientId === client.id ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-sm">
                          {client.firstName} {client.lastName}
                        </p>
                        {hasMessages && (
                          <Badge variant="secondary" className="text-xs">
                            Nouveau
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 truncate">
                        {client.email}
                      </p>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2">
            {selectedClient ? (
              <>
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>
                        {selectedClient.firstName} {selectedClient.lastName}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedClient.email}
                      </p>
                    </div>
                    <Badge
                      variant={
                        selectedClient.status === "actif"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {selectedClient.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Messages */}
                  <div className="h-96 overflow-y-auto p-4 space-y-4">
                    {clientMessages.length === 0 ? (
                      <div className="text-center text-gray-500 mt-8">
                        Aucun message avec ce client
                      </div>
                    ) : (
                      clientMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${
                            msg.sender === "agent"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              msg.sender === "agent"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                            <p
                              className={`text-xs mt-1 ${
                                msg.sender === "agent"
                                  ? "text-blue-100"
                                  : "text-gray-600"
                              }`}
                            >
                              {new Date(msg.timestamp).toLocaleTimeString("fr-FR", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="border-t p-4">
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Tapez votre message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            handleSendMessage();
                          }
                        }}
                      />
                      <Button onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-96">
                <p className="text-gray-500">
                  Sélectionnez un client pour commencer la conversation
                </p>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

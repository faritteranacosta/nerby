import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { SearchPage } from "./components/SearchPage";
import { OwnerDashboard } from "./components/OwnerDashboard";
import { CommunityPage } from "./components/CommunityPage";
import { MapPage } from "./components/MapPage";
import { AuthPage } from "./components/AuthPage";

export default function App() {
  const [currentView, setCurrentView] = useState('owner-dashboard');
  const [user, setUser] = useState(null);

  const handleLogin = (userData: any) => {
    setUser(userData);
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onViewChange={handleViewChange} />;
      case 'search':
        return <SearchPage onViewChange={handleViewChange} />;
      case 'owner-dashboard':
        return <OwnerDashboard />;
      case 'community':
        return <CommunityPage />;
      case 'map':
        return <MapPage />;
      case 'login':
        return <AuthPage type="login" onViewChange={handleViewChange} onLogin={handleLogin} />;
      case 'register':
        return <AuthPage type="register" onViewChange={handleViewChange} onLogin={handleLogin} />;
      default:
        return <HomePage onViewChange={handleViewChange} />;
    }
  };

  // Show auth page without header for login/register
  if (currentView === 'login' || currentView === 'register') {
    return (
      <div className="min-h-screen">
        {renderCurrentView()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentView={currentView} 
        onViewChange={handleViewChange} 
        user={user}
      />
      <main>
        {renderCurrentView()}
      </main>
    </div>
  );
}
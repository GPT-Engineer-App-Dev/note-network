import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SidebarLayout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import Browse from "./pages/Browse.jsx";
import Library from "./pages/Library.jsx";
import Search from "./pages/Search.jsx";
import Profile from "./pages/Profile.jsx";
import { Home, BrowseIcon, LibraryIcon, SearchIcon, ProfileIcon } from "lucide-react";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Browse",
    to: "/browse",
    icon: <BrowseIcon className="h-4 w-4" />,
  },
  {
    title: "Library",
    to: "/library",
    icon: <LibraryIcon className="h-4 w-4" />,
  },
  {
    title: "Search",
    to: "/search",
    icon: <SearchIcon className="h-4 w-4" />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <ProfileIcon className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<SidebarLayout />}>
              <Route index element={<Index />} />
              <Route path="browse" element={<Browse />} />
              <Route path="library" element={<Library />} />
              <Route path="search" element={<Search />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
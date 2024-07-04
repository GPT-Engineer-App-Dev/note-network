import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2, Home, BrowseIcon, LibraryIcon, SearchIcon, ProfileIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="w-full flex-1">
            <SearchBar />
          </div>
          <UserDropdown />
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <FooterPlayer />
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Music Stream</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
        <div className="mt-4 px-2 lg:px-4">
          <h3 className="text-xs font-semibold text-muted-foreground">Playlists</h3>
          <nav className="mt-2 grid gap-2">
            <SidebarNavLink to="/playlist/1">My Playlist 1</SidebarNavLink>
            <SidebarNavLink to="/playlist/2">My Playlist 2</SidebarNavLink>
            <SidebarNavLink to="/playlist/3">My Playlist 3</SidebarNavLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Music Stream</span>
        </NavLink>
        {navItems.map((item) => (
          <SidebarNavLink key={item.to} to={item.to}>
            {item.title}
          </SidebarNavLink>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

const SearchBar = () => (
  <div className="relative w-full max-w-md">
    <input
      type="text"
      placeholder="Search..."
      className="w-full rounded-full border border-muted bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground">
      <SearchIcon className="h-5 w-5" />
    </button>
  </div>
);

const FooterPlayer = () => (
  <footer className="sticky bottom-0 flex items-center justify-between border-t bg-muted/40 px-4 py-2">
    <div className="flex items-center gap-4">
      <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-12 h-12" />
      <div>
        <h4 className="text-sm font-semibold">Song Title</h4>
        <p className="text-xs text-muted-foreground">Artist Name</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="text-muted-foreground">
        <PreviousIcon className="h-5 w-5" />
      </button>
      <button className="text-muted-foreground">
        <PlayIcon className="h-5 w-5" />
      </button>
      <button className="text-muted-foreground">
        <NextIcon className="h-5 w-5" />
      </button>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">0:00</span>
      <div className="relative w-32 h-1 bg-muted">
        <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: "50%" }}></div>
      </div>
      <span className="text-xs text-muted-foreground">3:45</span>
    </div>
  </footer>
);

export default Layout;
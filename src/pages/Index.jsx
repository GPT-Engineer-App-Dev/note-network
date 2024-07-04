import React from "react";

const Index = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Featured</h1>
      <div className="flex overflow-x-auto space-x-4">
        <div className="min-w-[200px] bg-muted p-4 rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
          <h2 className="text-lg font-semibold mt-2">Playlist 1</h2>
          <p className="text-sm text-muted-foreground">Description of Playlist 1</p>
        </div>
        <div className="min-w-[200px] bg-muted p-4 rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
          <h2 className="text-lg font-semibold mt-2">Playlist 2</h2>
          <p className="text-sm text-muted-foreground">Description of Playlist 2</p>
        </div>
        <div className="min-w-[200px] bg-muted p-4 rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
          <h2 className="text-lg font-semibold mt-2">Playlist 3</h2>
          <p className="text-sm text-muted-foreground">Description of Playlist 3</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold mt-8 mb-4">Recently Played</h1>
      <div className="flex overflow-x-auto space-x-4">
        <div className="min-w-[200px] bg-muted p-4 rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
          <h2 className="text-lg font-semibold mt-2">Album 1</h2>
          <p className="text-sm text-muted-foreground">Description of Album 1</p>
        </div>
        <div className="min-w-[200px] bg-muted p-4 rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
          <h2 className="text-lg font-semibold mt-2">Album 2</h2>
          <p className="text-sm text-muted-foreground">Description of Album 2</p>
        </div>
        <div className="min-w-[200px] bg-muted p-4 rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
          <h2 className="text-lg font-semibold mt-2">Album 3</h2>
          <p className="text-sm text-muted-foreground">Description of Album 3</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
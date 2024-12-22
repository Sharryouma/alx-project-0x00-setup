// pages/index.tsx
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-7xl font-thin">Welcome Page</h1>
      </main>
    </div>
  );
};

export default Home;
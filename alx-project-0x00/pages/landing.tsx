// pages/landing.tsx
import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      {/* Adding a container for the cards with a grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Landing;
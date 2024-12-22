// components/layout/Footer.tsx
const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Daily Contents</h3>
              <p className="text-gray-400">© 2024. All rights reserved.</p>
            </div>
            <div>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">FitLife</h3>
          <p className="text-gray-400">Transform your life through fitness and wellness.</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/programs" className="hover:text-white transition-colors">Programs</a></li>
            <li><a href="/trainers" className="hover:text-white transition-colors">Trainers</a></li>
            <li><a href="/nutrition" className="hover:text-white transition-colors">Nutrition</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>123 Fitness Street</li>
            <li>New York, NY 10001</li>
            <li>contact@fitlife.com</li>
            <li>(555) 123-4567</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 
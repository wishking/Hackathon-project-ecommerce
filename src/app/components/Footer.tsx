import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
  <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
      
      {/* Company Info */}
      <div>
        <img src="/img/Logo.png" alt="" />
        <p className="mt-4 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* Category Section */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Category</h3>
        <ul className="mt-4 space-y-2">
          {["Sofa", "Wing Chair", "Desk Chair"].map((item, i) => (
            <li key={i}>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Help & Support Section */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Help & Support</h3>
        <ul className="mt-4 space-y-2">
          {["Privacy Policy", "Terms & Conditions", "Help"].map((item, i) => (
            <li key={i}>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Newsletter</h3>
        <p className="mt-4 text-sm text-gray-600">Subscribe to get the latest updates and information.</p>
        <div className="mt-4 flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-l-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="rounded-r-lg bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 border-t pt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-sm text-gray-600">© 2023 Comforty. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex space-x-6">
          {[
            { icon: "facebook", url: "#" },
            { icon: "twitter", url: "#" },
            { icon: "instagram", url: "#" },
            { icon: "youtube", url: "#" },
          ].map(({ icon, url }, i) => (
            <a key={i} href={url} className="text-gray-600 hover:text-gray-900">
              <i className={`fab fa-${icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer

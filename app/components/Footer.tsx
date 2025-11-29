import { Twitter, Linkedin, Github, Instagram } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Integrations", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Header section with logo and tagline */}
        <div className="mb-12 grid grid-cols-1 gap-12 md:mb-16 md:grid-cols-5">
          <div className="md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold text-white">TaskFlow</h3>
            <p className="mt-2 text-sm text-gray-400">Streamlining workflows for modern teams</p>
          </div>
          {/* Link columns */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {/* Product column */}
              <div>
                <h4 className="text-sm font-semibold text-white">Product</h4>
                <ul className="mt-4 space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company column */}
              <div>
                <h4 className="text-sm font-semibold text-white">Company</h4>
                <ul className="mt-4 space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Resources column */}
              <div>
                <h4 className="text-sm font-semibold text-white">Resources</h4>
                <ul className="mt-4 space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Legal column */}
              <div>
                <h4 className="text-sm font-semibold text-white">Legal</h4>
                <ul className="mt-4 space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom section with social and copyright */}
        <div className="border-t border-gray-800 pt-8 sm:flex sm:items-center sm:justify-between">
          {/* Social media icons */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          {/* Copyright text */}
          <p className="mt-4 text-sm text-gray-400 sm:mt-0">© 2025 TaskFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


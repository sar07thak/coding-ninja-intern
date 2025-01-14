import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from 'lucide-react'
import FooterBottom from "./footer-bottom"

export default function Footer() {
  return (
    <footer className="bg-[#2D2925] text-gray-300">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo and Contact Section */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20193320-vDZS6t7mTKeVdZcjJeDNhu6pkWIfCu.png" 
                  alt="Coding Ninjas Logo" 
                  width={180} 
                  height={40}
                  className="mb-6 max-w-[160px] sm:max-w-[180px]"
                />
                <h3 className="text-white font-medium mb-4 text-lg">Contact us</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:1800-123-3598" 
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <Phone className="h-5 w-5 group-hover:text-primary" />
                    <span>1800-123-3598</span>
                  </a>
                  <a 
                    href="mailto:contact@codingninjas.com" 
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <Mail className="h-5 w-5 group-hover:text-primary" />
                    <span>contact@codingninjas.com</span>
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 pt-2">
                <h3 className="text-white font-medium text-lg">Our offerings</h3>
                <div className="flex flex-col gap-4">
                  <Link href="/job-bootcamp">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20193320-vDZS6t7mTKeVdZcjJeDNhu6pkWIfCu.png" 
                      alt="Job Bootcamp" 
                      width={160} 
                      height={35}
                      className="opacity-90 hover:opacity-100 transition-opacity max-w-[140px] sm:max-w-[160px]"
                    />
                  </Link>
                  <Link href="/code-360">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20193320-vDZS6t7mTKeVdZcjJeDNhu6pkWIfCu.png" 
                      alt="Code 360" 
                      width={160} 
                      height={35}
                      className="opacity-90 hover:opacity-100 transition-opacity max-w-[140px] sm:max-w-[160px]"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
              {/* Coding Ninjas Links */}
              <nav className="space-y-4">
                <h3 className="text-white font-medium text-lg">Coding Ninjas</h3>
                <ul className="space-y-3">
                  {[
                    ['Careers', '/careers'],
                    ['Privacy policy', '/privacy'],
                    ['Terms & conditions', '/terms'],
                    ['Pricing & refund policy', '/pricing'],
                    ['Bug bounty', '/bug-bounty'],
                    ['Review', '/reviews'],
                    ['Press release', '/press'],
                  ].map(([title, url]) => (
                    <li key={url}>
                      <Link 
                        href={url} 
                        className="hover:text-white transition-colors inline-block"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Products Links */}
              <nav className="space-y-4">
                <h3 className="text-white font-medium text-lg">Products</h3>
                <ul className="space-y-3">
                  {[
                    ['Job Bootcamp', '/bootcamp'],
                    ['Code 360', '/code360'],
                  ].map(([title, url]) => (
                    <li key={url}>
                      <Link 
                        href={url} 
                        className="hover:text-white transition-colors inline-block"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Community Links */}
              <nav className="space-y-4">
                <h3 className="text-white font-medium text-lg">Community</h3>
                <ul className="space-y-3">
                  {[
                    ['10X Club', '/10x-club'],
                    ['Student Chapters', '/chapters'],
                    ['Hire from us', '/hire'],
                  ].map(([title, url]) => (
                    <li key={url}>
                      <Link 
                        href={url} 
                        className="hover:text-white transition-colors inline-block"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Mobile Accordion for Navigation (Optional) */}
          <div className="mt-8 pt-8 border-t border-gray-700 lg:hidden">
            <div className="grid grid-cols-1 gap-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-white font-medium text-lg">Quick Links</h3>
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg 
                      className="h-6 w-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <nav>
                    <h4 className="font-medium mb-2">Products</h4>
                    <ul className="space-y-2">
                      <li><Link href="/bootcamp" className="hover:text-white transition-colors">Job Bootcamp</Link></li>
                      <li><Link href="/code360" className="hover:text-white transition-colors">Code 360</Link></li>
                    </ul>
                  </nav>
                  <nav>
                    <h4 className="font-medium mb-2">Community</h4>
                    <ul className="space-y-2">
                      <li><Link href="/10x-club" className="hover:text-white transition-colors">10X Club</Link></li>
                      <li><Link href="/chapters" className="hover:text-white transition-colors">Student Chapters</Link></li>
                      <li><Link href="/hire" className="hover:text-white transition-colors">Hire from us</Link></li>
                    </ul>
                  </nav>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <FooterBottom />
    </footer>
  )
}


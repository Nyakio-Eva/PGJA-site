import { FaTiktok, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaPhone } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <footer className="bg-[#adc9d8ff] text-gray-800 py-16 bottom-0">
            <div className="max-w-9xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-[#c79e36ff] uppercase tracking-wide">Quick Links</h4>
                        <ul className="space-y-2 text-lg">
                            <li><Link to="/" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"> <ChevronRight className="w-4 h-4 mr-2 slate-900" /> Home</Link></li>
                            <li><Link to="/inspire" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Who We Are</Link></li>
                            <li><Link to="/pathways" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Pathways</Link></li>
                            <li><Link to="/student-life" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Student Life</Link></li>
                            <li><Link to="/student-life" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Talents</Link></li>
                            <li><Link to="/join-us" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Join Us</Link></li>
                            <li><Link to="/fees" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Friendly Fees</Link></li>
                            <li><Link to="/our-location" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Our Location</Link></li>
                            <li><Link to="/get-access" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Get Access</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-[#c79e36ff] uppercase tracking-wide">Contact Us</h4>
                        <div className="space-y-3 text-lg">
                            <div>
                                <div className="font-semibold text-[#c79e36ff]">Telephone:</div>
                                <div className="slate-900">+254 205-038-234</div>
                            </div>
                            <div>
                                <div className="font-semibold text-[#c79e36ff]">Email Us:</div>
                                <div className="slate-900 break-words">admissions@pioneergirlsjuniorschool.co.ke</div>
                                <div className="slate-900 text-sm mt-1">Po Box 33-01015 Ithanga, Muranga</div>
                            </div>
                            <div>
                                <div className="font-semibold text-[#c79e36ff]">Physical Address</div>
                                <div className="slate-900 text-sm">
                                    <div>Off Nairobi-Meru Highway, Delmonte Factory</div>
                                    <div>road, Mitumbiri, Ithanga, Murang'a County</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Schools */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-[#c79e36ff] uppercase tracking-wide">Our Schools</h4>
                        <ul className="space-y-2 text-lg">
                            <li><a href="https://www.pioneergirlsjunioracademy.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer Girls Junior Academy</a></li>
                           <li><a href="https://www.pioneergirlsschool.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer Girls School</a></li>
                            <li><a href="https://www.pioneergroupofschools.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer Group of schools</a></li>
                            <li><a href="https://www.stpaulthomasacademy.co.ke/"  target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />St Paul Thomas Academy</a></li>
                           
                            <li><a href="https://www.pioneerjunioracademy.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer Junior Academy</a></li>
                            <li><a href="https://www.pioneerschools.ac.ke/" target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer School</a></li>
                            <li><a href="https://piu.ac.ke/"  target="_blank"
                             rel="noopener noreferrer" className="slate-900 hover:text-[#c79e36ff] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer International University</a></li>
                        </ul>
                        
                    </div>

                    {/* Our Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-[#c79e36ff] uppercase tracking-wide">Our Socials</h4>
                        <div className="flex space-x-2">
                            <a href="https://www.tiktok.com/@pioneergirlsschool" target="_blank"
                                 rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaTiktok size={24} />
                            </a>
                            <a href="https://www.facebook.com/people/Pioneer-Girls-School/100067849162594/" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/explore/locations/1661580044124468/pioneer-girls-high-school/" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://x.com/pioneergirlske?lang=en" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://ke.linkedin.com/company/pioneer-girls-school" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://www.youtube.com/watch?v=GLXcmVXluQs" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                        <div className="text-sm text-gray-900 mt-4">
                            <div>Regulated by the Ministry of Education Kenya (21P3000036)</div>
                            <div>Licensed by Murang'a County</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Tagline */}
                <div className="mt-12 pt-8 border-t border-gray-400">
                    <div className="text-center">
                        <div className="bg-[#c79e36ff] slate-900 px-6 py-3 rounded-lg inline-block text-lg font-semibold mb-4">
                            Vitae Abudantae | Life In Abundance
                        </div>
                        <div className="text-gray-900 text-sm">
                            <a href="#" className="hover:text-[#c79e36ff] mr-4">Privacy Policy</a>
                            <a href="#" className="hover:text-[#c79e36ff] mr-4">Disclaimer</a>
                            <a href="#" className="hover:text-[#c79e36ff] mr-4">Sitemap</a>
                            <span className="container mx-auto text-center">
                                &copy; {new Date().getFullYear()} Pioneer Schools
                            </span>
                        </div>
                    </div>
                </div>

                {/* Floating Chat Button */}
                <div className="fixed bottom-6 left-6">
                    <button className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg">
                        <FaPhone size={24} className="text-white" />
                    </button>
                </div>
            </div>
        </footer>
    )
}
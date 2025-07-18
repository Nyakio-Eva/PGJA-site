import { Facebook, Instagram, Twitter, Youtube, Phone, } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
    return(
        <footer className="bg-[#b3d3e4ff] text-gray-800 py-16 bottom-0">
            <div className="max-w-9xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"> <ChevronRight className="w-4 h-4 mr-2 text-black" /> Home</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Discover Who We Are</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Discover Pathways</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Discover Student Life</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Discover Talents</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Join Us</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Discover Friendly Fees</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Discover Our Location</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Get Access</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Contact Us</h4>
                        <div className="space-y-3">
                            <div>
                                <div className="font-semibold text-gray-900">Telephone:</div>
                                <div className="text-gray-700">+254 205038234</div>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900">Email Us:</div>
                                <div className="text-gray-700 break-words">admissions@pioneergirlsjuniorschool.co.ke</div>
                                <div className="text-gray-700 text-sm mt-1">Po Box 33-01015 Ithanga, Muranga</div>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900">Physical Address</div>
                                <div className="text-gray-700 text-sm">
                                    <div>Off Nairobi-Meru Highway, Delmonte Factory</div>
                                    <div>road, Mitumbiri, Ithanga, Murang'a County</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Schools */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Our Schools</h4>
                        <ul className="space-y-2">
                           <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Pioneer Girls School</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Pioneer Group of schools</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />St Paul Thomas Academy</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Pioneer Girls Junior Academy</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Pioneer Junior Academy</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Pioneer School</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-black" />Pioneer International University</a></li>
                        </ul>
                        
                    </div>

                    {/* Our Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Our Socials</h4>
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                                <Youtube size={16} />
                            </a>
                        </div>
                        <div className="text-xs text-gray-600 mt-4">
                            <div>Regulated by the Ministry of Education Kenya (21P3000036)</div>
                            <div>Licensed by Murang'a County</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Tagline */}
                <div className="mt-12 pt-8 border-t border-gray-300">
                    <div className="text-center">
                        <div className="bg-[#DCAE3D] text-white px-6 py-3 rounded-lg inline-block text-lg font-semibold mb-4">
                            Vitae Abudantae | Life In Abundance
                        </div>
                        <div className="text-gray-600 text-sm">
                            <a href="#" className="hover:text-gray-900 mr-4">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-900 mr-4">Disclaimer</a>
                            <a href="#" className="hover:text-gray-900 mr-4">Sitemap</a>
                            <span className="container mx-auto text-center">
                                &copy; {new Date().getFullYear()} Pioneer Schools
                            </span>
                        </div>
                    </div>
                </div>

                {/* Floating Chat Button */}
                <div className="fixed bottom-6 left-6">
                    <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg">
                        <Phone size={20} className="text-white" />
                    </button>
                </div>
            </div>
        </footer>
    )
}
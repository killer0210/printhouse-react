import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-5">
            {/* Contact & Social */}
            <div className="grid md:grid-cols-2 gap-12 py-12">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Холбоо барих</h3>
                    <div className="space-y-3 text-gray-300">
                        <p className="flex items-center gap-3">
                            <i class="fa-solid fa-phone w-5 text-center"></i>
                            <a href="tel:+97612345678" className="hover:text-white transition">+976 1234 5678</a>
                        </p>
                        <p className="flex items-center gap-3">
                            <i className="fa-solid fa-envelope w-5 text-center"></i>
                            <a href="mailto:info@printcompany.mn" className="hover:text-white transition">info@printcompany.mn</a>
                        </p>
                        <p className="flex items-center gap-3">
                            <i className="fa-solid fa-location-dot w-5 text-center"></i>
                            <span>Улаанбаатар хот, Монгол улс</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-3">Биднийг дагана уу</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00AEEF] transition-colors" aria-label="Facebook">
                                <i className="fa-brands fa-facebook-f text-lg"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00AEEF] transition-colors" aria-label="Instagram">
                                <i className="fa-brands fa-instagram text-lg"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00AEEF] transition-colors" aria-label="YouTube">
                                <i className="fa-brands fa-youtube text-lg"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00AEEF] transition-colors" aria-label="TikTok">
                                <i className="fa-brands fa-tiktok text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Google Map: Google Maps дээрээс Share > Embed map-аас URL хуулж орлуулна уу */}
                <div className="h-[250px] md:h-[280px] rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10694.0!2d106.9150!3d47.9077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692537c6c1f%3A0x2c9e9f9e9f9e9f9e!2sUlaanbaatar!5e0!3m2!1sen!2smn!4v1709452800000!5m2!1sen!2smn"
                        width="100%"
                        height="100%"
                        style={{ border: '0' }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Print Company байршил">
                    </iframe>
                </div>
            </div>
            <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
                <p>© 2026 Print Company</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
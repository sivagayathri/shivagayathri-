"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 px-12 flex flex-col sm:flex-row justify-between items-center text-white fixed bottom-0 left-0 z-50"
    id="footer">
      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <p>📧 <a href="mailto:shivagayathrik2000@gmail.com" className="hover:text-[#ffdd57] transition-colors">shivagayathrik2000@gmail.com</a></p>
        <p>📞 <a href="tel:+918248362498" className="hover:text-[#ffdd57] transition-colors">+91 8248362498</a></p>
      </div>

      {/* Social Links */}
      <div className="flex gap-8 items-center mt-4 sm:mt-0">
        <a 
          href="https://www.linkedin.com/in/shiva-gayathri-k-14800120b/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[#ffdd57] transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/sivagayathri" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[#ffdd57] transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}


//https://fitapp-frontend-git-master-sivagayathri-ks-projects.vercel.app
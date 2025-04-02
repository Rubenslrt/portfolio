import React from 'react';
import { Github, Linkedin, Mail, Server, Shield, Database, Network, Code, Monitor } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
            alt="Data Center Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Jean Dupont
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Étudiant en BTS SIO SISR | Administrateur Systèmes & Réseaux
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Compétences */}
      <section className="py-20 px-4 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Compétences Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700 p-6 rounded-lg">
              <Server className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Administration Systèmes</h3>
              <p className="text-gray-300">Windows Server, Linux, Active Directory, DHCP, DNS</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <Shield className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
              <p className="text-gray-300">Firewall, VPN, Antivirus, Surveillance réseau</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <Network className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Réseaux</h3>
              <p className="text-gray-300">TCP/IP, VLAN, Routage, Switching, WiFi</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <Database className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Base de données</h3>
              <p className="text-gray-300">SQL Server, MySQL, Administration BDD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projets Professionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                alt="Infrastructure Réseau"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Migration Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Migration complète de l'infrastructure réseau d'une PME vers une solution cloud hybride.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Azure</span>
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Windows Server</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80"
                alt="Sécurité Réseau"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sécurisation Réseau</h3>
                <p className="text-gray-300 mb-4">
                  Mise en place d'une solution de sécurité complète incluant firewall, VPN et monitoring.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Fortinet</span>
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Zabbix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-gray-300 mb-8">
            Je suis actuellement à la recherche d'une alternance en tant qu'administrateur systèmes et réseaux.
            N'hésitez pas à me contacter pour discuter de vos projets.
          </p>
          <a 
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors"
          >
            <Mail size={20} />
            Me Contacter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Jean Dupont - Portfolio BTS SIO SISR</p>
      </footer>
    </div>
  );
}

export default App;
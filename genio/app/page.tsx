import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-right-grotesk)' }}>
      {/* Header cu linia albastră */}
      <div className="w-full h-1 bg-blue-600"></div>
      
      {/* Header principal */}
      <header className="px-8 py-6 flex justify-between items-start">
        <div className="flex flex-col">
          <Image
            src="/image.png"
            alt="Genio Logo"
            width={200}
            height={80}
            priority
            className="h-24 w-auto brightness-0"
          />
        </div>
        
      </header>

      {/* Conținut principal */}
      <main className="px-8 py-12">
        {/* Mesaj principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black uppercase leading-tight">
            SITE-UL NOSTRU<br/>
            ESTE ÎN DEZVOLTARE
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Lucrăm la ceva minunat! Până când site-ul nostru este gata, 
            contactează-ne direct pentru mai multe informații.
          </p>
        </div>

        {/* Carduri de contact */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card Email */}
          <div className="bg-black text-white p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4">EMAIL</h3>
              <p className="text-white leading-relaxed mb-6">
                Trimite-ne un email pentru orice întrebare sau colaborare. 
                Răspundem în cel mult 24 de ore.
              </p>
              <p className="text-yellow-400 font-semibold text-lg">
                contact@genio.ro
              </p>
            </div>
            <a 
              href="mailto:contact@genio.ro"
              className="flex items-center justify-center gap-2 text-white bg-gray-800 hover:bg-gray-700 transition-colors py-3 px-6 rounded"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-medium">TRIMITE EMAIL</span>
            </a>
          </div>

          {/* Card WhatsApp */}
          <div className="bg-white text-black p-8 flex flex-col justify-between min-h-[300px] border border-gray-200">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4">WHATSAPP</h3>
              <p className="text-black leading-relaxed mb-6">
                Pentru răspunsuri rapide și comunicare directă, 
                contactează-ne pe WhatsApp.
              </p>
              <p className="text-green-600 font-semibold text-lg">
                +40 123 456 789
              </p>
            </div>
            <a 
              href="https://wa.me/40123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white bg-green-500 hover:bg-green-600 transition-colors py-3 px-6 rounded"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="font-medium">WHATSAPP</span>
            </a>
          </div>

          {/* Card Informații */}
          <div className="bg-yellow-400 text-black p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4">INFORMAȚII</h3>
              <p className="text-black leading-relaxed mb-6">
                Genio este un birou de arhitectură specializat în proiecte rezidențiale și comerciale. 
                Oferim soluții creative de design și planificare arhitecturală.
              </p>
              <p className="text-gray-800 font-semibold text-lg">
                În curând online!
              </p>
            </div>
            
          </div>
        </div>

      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContatoPage() {
  const [copiedPix, setCopiedPix] = useState(false);

  // Configurações da loja
  const config = {
    nome: "DonaKleo Cosméticos",
    telefone: "+5565999617676",
    email: "contato@donakleo.com.br",
    instagram: "donakleocosmeticos",
    facebookUrl: "https://www.facebook.com/donakleocosmeticos",
    lojaUrl: "https://www.donakleo.com.br",
    googleMapsUrl: "https://maps.app.goo.gl/wQQW5bmH2Nc2TFGt8",
    googleReviewUrl: "https://g.page/r/CYdhUUDAh_YpEAI/review",
    pixKey: "41.722.378/0001-86",
  };

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(config.pixKey);
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar PIX:", err);
    }
  };

  const handleSaveContact = async () => {
    try {
      const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${config.nome}
TEL;TYPE=WORK,VOICE:${config.telefone}
EMAIL:${config.email}
URL:https://instagram.com/${config.instagram}
END:VCARD`;

      const vcardBlob = new Blob([vcard], { type: "text/vcard" });
      const url = window.URL.createObjectURL(vcardBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "donakleo-contato.vcf";
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Erro ao salvar contato:", err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#fef8f0] via-white to-[#f5e6d3] flex items-center justify-center px-5 py-6">
      <div className="w-full max-w-md">
        {/* Header com Logo */}
        <div className="text-center mb-4 animate-fadeIn">
          <div className="w-56 mx-auto">
            <Image
              src="/logo.png"
              alt="DonaKleo Cosméticos Logo"
              width={224}
              height={100}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Links Container */}
        <div className="space-y-3">
          {/* Loja Virtual - DESTAQUE */}
          <a
            href={config.lojaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            style={{ animation: "fadeInUp 0.5s ease-out 0.1s both" }}
          >
            <div className="bg-linear-to-r from-[#aa7d44] to-[#6d461d] rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span className="font-bold text-white text-lg">
                    Visite Nossa Loja
                  </span>
                </div>
                <svg
                  className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${config.telefone.replace(/\+/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            style={{ animation: "fadeInUp 0.5s ease-out 0.2s both" }}
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#aa7d44]/30 hover:shadow-md hover:border-[#aa7d44] transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#aa7d44]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="font-semibold text-[#6d461d]">WhatsApp</span>
                </div>
                <svg
                  className="w-5 h-5 text-[#aa7d44] group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* Salvar Contato */}
          <button
            onClick={handleSaveContact}
            className="w-full block group"
            style={{ animation: "fadeInUp 0.5s ease-out 0.3s both" }}
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#aa7d44]/30 hover:shadow-md hover:border-[#aa7d44] transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#aa7d44]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-semibold text-[#6d461d]">
                    Salvar Contato
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#aa7d44] group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </button>

          {/* Instagram */}
          <a
            href={`https://instagram.com/${config.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            style={{ animation: "fadeInUp 0.5s ease-out 0.4s both" }}
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#aa7d44]/30 hover:shadow-md hover:border-[#aa7d44] transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#aa7d44]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-semibold text-[#6d461d]">
                    Instagram
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#aa7d44] group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* Facebook */}
          <a
            href={config.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            style={{ animation: "fadeInUp 0.5s ease-out 0.5s both" }}
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#aa7d44]/30 hover:shadow-md hover:border-[#aa7d44] transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#aa7d44]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="font-semibold text-[#6d461d]">Facebook</span>
                </div>
                <svg
                  className="w-5 h-5 text-[#aa7d44] group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* Avalie no Google */}
          <a
            href={config.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            style={{ animation: "fadeInUp 0.5s ease-out 0.6s both" }}
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#aa7d44]/30 hover:shadow-md hover:border-[#aa7d44] transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#aa7d44]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="font-semibold text-[#6d461d]">
                    Avalie no Google
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#aa7d44] group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* Mapa de Localização */}
          <a
            href={config.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            style={{ animation: "fadeInUp 0.5s ease-out 0.7s both" }}
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#aa7d44]/30 hover:shadow-md hover:border-[#aa7d44] transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#aa7d44]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-semibold text-[#6d461d]">
                    Mapa de Localização
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#aa7d44] group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* Chave PIX */}
          <div
            className="bg-white rounded-xl p-4 shadow-sm border border-[#aa7d44]/30"
            style={{ animation: "fadeInUp 0.5s ease-out 0.8s both" }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#aa7d44]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5.3 21h3.9c.3 0 .5-.1.7-.3l5.8-5.8c.4-.4 1-.4 1.4 0l.9.9c.4.4 1 .4 1.4 0l2.8-2.8c.4-.4.4-1 0-1.4l-.9-.9c-.4-.4-.4-1 0-1.4l5.8-5.8c.2-.2.3-.4.3-.7V3c0-.6-.4-1-1-1h-3.9c-.3 0-.5.1-.7.3L15 8.1c-.4.4-1 .4-1.4 0l-.9-.9c-.4-.4-1-.4-1.4 0L8.5 10c-.4.4-.4 1 0 1.4l.9.9c.4.4.4 1 0 1.4l-5.8 5.8c-.2.2-.3.4-.3.7v3.9c0 .5.4.9 1 .9z" />
                </svg>
                <h3 className="font-semibold text-[#6d461d]">Chave PIX</h3>
              </div>
              <button
                onClick={handleCopyPix}
                className="text-xs font-semibold bg-[#aa7d44]/20 text-[#6d461d] px-3 py-1.5 rounded-lg hover:bg-[#aa7d44] hover:text-white transition-colors"
              >
                {copiedPix ? "✓" : "Copiar"}
              </button>
            </div>
            <p className="text-sm text-[#aa7d44] font-medium break-all">
              {config.pixKey}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 animate-fadeIn">
          <p className="text-[#aa7d44]/70 text-xs">
            © 2025 DonaKleo Cosméticos. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

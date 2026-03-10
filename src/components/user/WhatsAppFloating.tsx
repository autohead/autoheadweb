
import { MessageCircle } from "lucide-react";
export default function WhatsAppFloating() {
    return (
        <a
        href="https://wa.me/919048880789?text=Hello,%20I%20want%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    )
}
import Image from "next/image"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917017754871"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-200"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={28}
        height={28}
        className="w-7 h-7"
      />
    </a>
  )
}

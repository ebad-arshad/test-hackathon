import { Facebook, Twitter, Instagram, Youtube, PinIcon } from 'lucide-react'

export default function SocialIcons() {
  const icons = [
    { Icon: Facebook, color: 'text-[#1E1E1E]' },
    { Icon: Twitter, color: 'text-[#1E1E1E]' },
    { Icon: Instagram, color: 'text-[#1E1E1E]' },
    { Icon: Youtube, color: 'text-[#FF9F0D]' },
    { Icon: PinIcon, color: 'text-[#1E1E1E]' },
  ]

  return (
    <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 flex-wrap justify-center">
      {icons.map(({ Icon, color }, index) => (
        <a
          key={index}
          href="#"
          className={`bg-white p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  )
}

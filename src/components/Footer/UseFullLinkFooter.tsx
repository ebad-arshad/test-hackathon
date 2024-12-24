export default function UsefulLinksSection() {
  const links = ['About', 'News', 'Partners', 'Team', 'Menu', 'Contact']
  return (
    <div className="w-full sm:w-[120.36px] px-4 sm:px-0">
      <h3 className="text-xl font-bold mb-6 text-center sm:text-left">Useful Links</h3>
      <ul className="text-[16px] leading-6 flex flex-col gap-4 sm:gap-2">
        {links.map((link) => (
          <li key={link} className="mb-2 text-center sm:text-left">
            <a href="#" className="hover:text-[#FF9F0D] transition duration-300">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

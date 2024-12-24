import { Clock } from 'lucide-react'

export default function AboutUsSection() {
  return (
    <div className='w-full max-w-[395.2px] px-4 mx-auto'>
      <h3 className="text-xl font-bold mb-8">About Us.</h3>
      <p className="mb-6 text-[18px] leading-[26px]">
        Corporate clients and leisure travelers have been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
      </p>
      <div className="flex items-start flex-col sm:flex-row sm:gap-4 sm:items-center">
        <div className="bg-[#FF9F0D] p-2 rounded mr-4 sm:w-[77.23px] sm:h-[70.79px] w-[60px] h-[60px] mb-4 sm:mb-0">
          <Clock className="text-white" />
        </div>
        <div>
          <h4 className="font-semibold">Opening Hours</h4>
          <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
          <p className="text-sm">Sunday - Closed</p>
        </div>
      </div>
    </div>
  )
}

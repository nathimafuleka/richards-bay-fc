import React from 'react'

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: 'Vodacom',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodacom_logo.svg/320px-Vodacom_logo.svg.png',
      tier: 'main'
    },
    {
      id: 2,
      name: 'Nike',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/320px-Logo_NIKE.svg.png',
      tier: 'main'
    },
    {
      id: 3,
      name: 'Adidas',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/320px-Adidas_Logo.svg.png',
      tier: 'main'
    },
    {
      id: 4,
      name: 'Puma',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Puma_SE_logo.svg/320px-Puma_SE_logo.svg.png',
      tier: 'partner'
    },
    {
      id: 5,
      name: 'Coca-Cola',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/320px-Coca-Cola_logo.svg.png',
      tier: 'partner'
    },
    {
      id: 6,
      name: 'Samsung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/320px-Samsung_Logo.svg.png',
      tier: 'partner'
    },
    {
      id: 7,
      name: 'Standard Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Standard_Bank_Logo.svg/320px-Standard_Bank_Logo.svg.png',
      tier: 'partner'
    },
    {
      id: 8,
      name: 'MTN',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/MTN_Logo.svg/320px-MTN_Logo.svg.png',
      tier: 'partner'
    },
  ]

  return (
    <section id="sponsors" className="py-6 sm:py-8 lg:py-12 bg-rbfc-light border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sponsors Row - Single Line */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group flex items-center justify-center cursor-pointer"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 sm:h-12 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors

import React from 'react'

const WhyChooseKonnektis = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Audience ciblée",
      description: "Identify the best times, formats, and topics that generate the most engagement for your real audience."
    },
    {
      icon: "⏱",
      title: "Gain de temps",
      description: "Schedule your posts, centralize your content, and collaborate with your team on one platform."
    },
    {
      icon: "📈",
      title: "Pilotage par la donnée",
      description: "Track impressions, clicks, followers, and engagement in real time from official LinkedIn data."
    },
    {
      icon: "🤝",
      title: "Engagement humain amplifié",
      description: "Mobilize your team with targeted notifications and ready-to-use comment suggestions."
    },
    {
      icon: "🔒",
      title: "Sécurité & conformité",
      description: "OAuth LinkedIn authentication, data encryption, and strict compliance with LinkedIn's terms of use."
    },
    {
      icon: "💡",
      title: "Recommandations intelligentes",
      description: "Receive personalized advice based on your performance to optimize your content strategy."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            🚀 Why choose Konnektis?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Boost your LinkedIn presence, in full compliance.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseKonnektis


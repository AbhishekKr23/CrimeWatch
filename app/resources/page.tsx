export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Reporting Safely",
      description: "Learn how to submit anonymous tips without compromising your identity.",
      icon: (
        <svg className="text-blue-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      items: [
        {
          title: "Anonymous Reporting Guide",
          description: "How we protect your identity & what info to include",
          link: "#",
          type: "PDF",
          size: "1.8 MB"
        },
        {
          title: "Evidence Collection Tips",
          description: "How to safely document incidents (photos/videos)",
          link: "#",
          type: "Video",
          size: "12 MB"
        },
        {
          title: "What Happens After Reporting?",
          description: "Our process for handling tips",
          link: "#",
          type: "PDF",
          size: "1.2 MB"
        }
      ]
    },
    {
      title: "Community Safety",
      description: "Resources to help neighborhoods stay vigilant.",
      icon: (
        <svg className="text-green-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        {
          title: "Neighborhood Watch Toolkit",
          description: "Organizing local safety programs",
          link: "#",
          type: "PDF",
          size: "3.1 MB"
        },
        {
          title: "Crime Prevention Tips",
          description: "Securing homes and public spaces",
          link: "#",
          type: "PDF",
          size: "2.4 MB"
        }
      ]
    },
    {
      title: "For Authorities",
      description: "Tools for law enforcement partners.",
      icon: (
        <svg className="text-purple-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        {
          title: "Law Enforcement Portal Guide",
          description: "Accessing and analyzing reports",
          link: "#",
          type: "PDF",
          size: "4.7 MB"
        },
        {
          title: "API Documentation",
          description: "Technical integration specs",
          link: "#",
          type: "PDF",
          size: "5.2 MB"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Report Button */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            CrimeWatch Resources
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Learn how to report crimes anonymously and keep your community safe
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Report Crime Anonymously
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              className="block w-full px-6 py-4 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Search safety resources..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    {category.icon}
                  </div>
                  <h2 className="ml-3 text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="border-t border-gray-100 pt-4">
                      <a href={item.link} className="group block">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                          </div>
                          <svg className="text-gray-400 group-hover:text-blue-500 transition-colors w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                            {item.type}
                          </span>
                          <span>{item.size}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
                  View all {category.title.toLowerCase()} resources <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Quick Access Section */}
        <div className="mt-16 bg-blue-50 rounded-xl border border-blue-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety First</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Emergency Contacts */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-red-600 mb-3 flex items-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Emergency Contacts
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">🚨</span>
                  <div>
                    <strong>Local Police:</strong> 
                    <a href="tel:911" className="ml-1 underline text-blue-600">911</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📞</span>
                  <div>
                    <strong>Crime Stoppers:</strong> 
                    <a href="tel:1-800-222-8477" className="ml-1 underline text-blue-600">1-800-222-TIPS</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🏥</span>
                  <div>
                    <strong>Domestic Violence Hotline:</strong> 
                    <a href="tel:1-800-799-7233" className="ml-1 underline text-blue-600">1-800-799-SAFE</a>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* FAQ */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-blue-600 mb-3 flex items-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Common Questions
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <details className="group">
                    <summary className="flex items-center cursor-pointer text-gray-700 group-hover:text-blue-600">
                      <span className="mr-1">❓</span> 
                      Will police contact me if I report?
                      <svg className="ml-auto w-4 h-4 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </summary>
                    <p className="mt-1 pl-5 text-gray-600">No. CrimeWatch reports are completely anonymous by design. We never share reporter information.</p>
                  </details>
                </li>
                <li>
                  <details className="group">
                    <summary className="flex items-center cursor-pointer text-gray-700 group-hover:text-blue-600">
                      <span className="mr-1">❓</span> 
                      Can I report past crimes?
                      <svg className="ml-auto w-4 h-4 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </summary>
                    <p className="mt-1 pl-5 text-gray-600">Yes. You can report crimes regardless of when they occurred. Historical data helps identify patterns.</p>
                  </details>
                </li>
              </ul>
            </div>
            
            {/* Legal Protection */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Your Protection
              </h3>
              <div className="text-sm space-y-3">
                <p className="text-gray-600">
                  CrimeWatch complies with <a href="#" className="underline text-blue-600">whistleblower protection laws</a> in all 50 states.
                </p>
                <p className="text-gray-600">
                  We use <strong>military-grade encryption</strong> and never store:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>IP addresses</li>
                  <li>Device fingerprints</li>
                  <li>Metadata</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Leading Companies Choose Synergy Gulf
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Proven Track Record",
                  desc: "32+ successful projects across Qatar with 99% client satisfaction rate"
                },
                {
                  title: "End-to-End Solutions",
                  desc: "From initial consultation to ongoing maintenance, we handle every aspect of your energy transition"
                },
                {
                  title: "Cutting-Edge Technology",
                  desc: "Latest innovations in renewable energy and smart grid technologies"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
            <div class="text-3xl font-bold text-blue-600 mb-2">ISO</div>
            <div class="text-gray-600">9001:2015 Certified</div>
          </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">32+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              <div className="text-3xl font-bold text-yellow-600 mb-2">10+ yrs</div>
              <div className="text-gray-600">Industry Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

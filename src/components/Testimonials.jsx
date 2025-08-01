import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    quote: "उनीहरूको मुल्यांकन सटिक र निष्पक्ष थियो, जसले हामीलाई न्यायोचित सम्झौतामा पुग्न सजिलो बनायो।",
    author: "राजेश श्रेष्ठ",
    role: "दावी प्रबन्धक",
    rating: 5
  },
  {
    quote: "बीमाधारकको रूपमा, मैले महसुस गरे कि उनीहरूले साँच्चै मेरो हितको प्रतिनिधित्व गरे। विस्तृत प्रतिवेदनले मलाई उचित मुआवजा पाउन मद्दत गर्यो।",
    author: "सुमन गुरुङ",
    role: "गृहस्वामी",
    rating: 5
  },
  {
    quote: "हामीले धेरै मुल्यांकनकर्ताहरूसँग काम गरिसकेका छौं, तर उनीहरूको विशेषज्ञता र व्यावसायिकताले भिन्नै छ।",
    author: "अनिल कुमार झा",
    role: "जोखिम निर्देशक",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div 
          variants={fadeIn('up', 'tween', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
            <ChatBubbleLeftRightIcon className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">What our Customers have to say about us?</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            हाम्रो सेवा बारे ग्राहकहरूको अनुभव
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-neutral-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-neutral-700 italic mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="pt-4 border-t border-neutral-100 mt-4">
                <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
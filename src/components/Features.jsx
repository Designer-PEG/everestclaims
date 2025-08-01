import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { 
  BuildingLibraryIcon,
  UserIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  HandRaisedIcon,
  GlobeAltIcon,
  StarIcon,
  LightBulbIcon,
  UserGroupIcon,
  CogIcon,
  ShieldCheckIcon // Replacing LeafIcon with ShieldCheckIcon for sustainability
} from '@heroicons/react/24/outline';

const clients = [
  {
    name: "Insurance Companies",
    description: "Detailed, defensible surveys that streamline claims processing and reduce disputes.",
    icon: BuildingLibraryIcon
  },
  {
    name: "Policyholders",
    description: "Independent assessments to ensure you receive fair treatment and proper compensation.",
    icon: UserIcon
  },
  {
    name: "Businesses",
    description: "Comprehensive risk inspections and damage evaluations for commercial properties.",
    icon: BriefcaseIcon
  }
];

const aspirations = [
  {
    title: "Industry Leadership",
    description: "Setting new benchmarks in claims assessment accuracy and efficiency.",
    icon: RocketLaunchIcon
  },
  {
    title: "Trusted Advisors",
    description: "Building long-term relationships based on integrity and exceptional service.",
    icon: HandRaisedIcon
  },
  {
    title: "Global Standards",
    description: "Implementing international best practices with local expertise.",
    icon: GlobeAltIcon
  }
];

const expectations = [
  {
    title: "Excellence",
    description: "Uncompromising quality in every assessment we deliver.",
    icon: StarIcon
  },
  {
    title: "Integrity",
    description: "Complete transparency and ethical conduct in all engagements.",
    icon: LightBulbIcon
  },
  {
    title: "Innovation",
    description: "Continuous improvement through technology and methodology advances.",
    icon: CogIcon
  }
];

const focusAreas = [
  {
    title: "Client Experience",
    description: "Simplifying complex processes with clear communication and guidance.",
    icon: UserGroupIcon
  },
  {
    title: "Technical Expertise",
    description: "Maintaining the highest standards of professional knowledge.",
    icon: BriefcaseIcon
  },
  {
    title: "Sustainable Practice",
    description: "Incorporating environmental considerations in all assessments.",
    icon: ShieldCheckIcon // Using ShieldCheckIcon instead of LeafIcon
  }
];


const Features = () => {
  return (
    <div className="bg-white">

      {/* Who We Serve Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Our Clients
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Who We Serve</h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Professional assessment services trusted by industry leaders and individuals nationwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => {
              const Icon = client.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-neutral-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-blue-50 text-blue-600 mr-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">{client.name}</h3>
                  </div>
                  <p className="text-neutral-600 pl-16">{client.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Aspirations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Our Vision
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">What We Aspire To Become</h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              The future we're building through innovation, integrity, and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aspirations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="bg-neutral-50 p-8 rounded-xl hover:shadow-lg transition duration-300 border border-neutral-200"
                >
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional sections for expectations and focus areas would follow the same pattern */}

    </div>
  );
};

export default Features;
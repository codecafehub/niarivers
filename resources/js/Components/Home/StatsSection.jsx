// resources/js/Components/Home/StatsSection.jsx
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatItem = ({ number, suffix, text, start }) => {
    // The 'ref' and 'inView' are for triggering the animation on scroll
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className="text-center">
            <h3 className="text-5xl font-extrabold text-blue-600">
                {inView ? <CountUp start={start} end={number} duration={2.5} /> : '0'}
                <span className="text-3xl">{suffix}</span>
            </h3>
            <p className="mt-2 text-gray-600 font-medium">{text}</p>
        </div>
    );
};

export default function StatsSection() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatItem number={15} suffix="+" text="Years of Experience" start={0} />
                    <StatItem number={200} suffix="+" text="Projects Completed" start={50} />
                    <StatItem number={98} suffix="%" text="Client Satisfaction" start={25} />
                    <StatItem number={1.2} suffix="M" text="Square Feet Built" start={0} />
                </div>
            </div>
        </section>
    );
}
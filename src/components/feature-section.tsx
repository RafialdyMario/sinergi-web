interface FeatureProps {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

export default function FeatureSection({
    title,
    description,
    image,
    reverse = false,
}: FeatureProps) {
    return (
        <section
            className={`flex flex-col lg:flex-row items-center justify-center pt-15 pb-30 px-20 lg:px-20 gap-x-16 ${reverse ? "lg:flex-row-reverse" : ""}`}
        >
            {/* Text */}
            <div className="lg:w-1/4 space-y-6 text-center lg:text-left mx-auto">
                <h2 className="text-3xl font-sans lg:text-4xl bg-gradient-to-r from-[#5A889C] via-[#8A4A4C] to-[#E8C15E] bg-clip-text text-transparent font-bold">{title}</h2>
                <p className="font-sans  text-gray-600 text-lg max-w-md mx-auto lg:mx-0">{description}</p>
            </div>

            {/* Image */}
            <div className="lg:w-1/4 flex mt-10 lg:mt-0 mx-auto shadow-2xs">
                <img
                    src={image}
                    alt={title}
                    className="w-full max-w-sm lg:max-w-md drop-shadow-[-8px_8px_20px_rgba(0,0,0,0.4)] rounded-2xl"
                />
            </div>
        </section>



    );
}

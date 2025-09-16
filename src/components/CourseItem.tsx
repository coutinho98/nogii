interface CourseItemProps {
    imageSrc: string;
    href: string;
    buttonText: string;
    className?: string;
    price: string;
}

const CourseItem = ({ imageSrc, buttonText, className, href, price }: CourseItemProps) => (
    <article className={`flex flex-col items-center ${className}`}>
        <div className="size-96 border-4 border-[#1d1d1d] rounded-3xl ">
            <img
                src={imageSrc}
                alt="Curso de Wrestling"
                className="w-full h-full object-cover rounded-4xl"
            />
        </div>
        <div className="mt-6">
        <p className="text-white text-xl font-semibold mb-2">{price}</p>
            <button
                onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
                className="w-80 flex items-center justify-center gap-2 rounded-4xl
                           bg-gradient-to-r from-yellow-200 to-orange-900 text-white text-lg
                           font-bold py-2 shadow-lg cursor-pointer"
            >
                {buttonText}
            </button>
        </div>
    </article>
);

export default CourseItem;
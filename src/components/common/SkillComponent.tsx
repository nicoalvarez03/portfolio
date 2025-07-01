interface Props {
    title: string;
    svg: string;
}

export default function SkillComponent({ svg, title }: Props) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 object-cover rounded-full mb-2 flex justify-center items-center">
                <img width={50} height={50} src={svg} alt={`svg ${title}`} />
            </div>
            <span className="text-center text-lg font-semibold w-30">{title}</span>
        </div>
    );
}
interface Props {
    title: string;
    children: React.ReactNode;
}

export default function IconSkill({ children, title }: Props) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 object-cover rounded-full mb-2">
                {children}
            </div>
            <p className="text-center text-lg font-semibold">{title}</p>
        </div>
    );
}
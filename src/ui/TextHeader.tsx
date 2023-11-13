import "./_style.scss";

interface TextHeaderProps {
	title: string;
	subtitle?: string;
}

const TextHeader = ({ title, subtitle }: TextHeaderProps) => {
	return (
		<div className='text-header-wrapper'>
			<h3 className='header-title'>{title}</h3>
			<p className='header-subtitle'>{subtitle}</p>
		</div>
	);
};

export default TextHeader;

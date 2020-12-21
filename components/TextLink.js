import ButtonLink from "./ButtonLink";

const TextLink = (props) => {
	return (
		<ButtonLink
			{...props}
			variant='outline'
			size={props.size || "xs"}
			fontWeight={props.fontWeight || "bold"}
			_hover={{
				borderColor: "transparent",
				textDecoration: "underline",
			}}
		/>
	);
};

export default TextLink;

